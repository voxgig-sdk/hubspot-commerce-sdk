package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/hubspot-commerce-sdk/go/utility/struct"
)

type HubspotCommerceSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewHubspotCommerceSDK(options map[string]any) *HubspotCommerceSDK {
	sdk := &HubspotCommerceSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *HubspotCommerceSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *HubspotCommerceSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *HubspotCommerceSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *HubspotCommerceSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *HubspotCommerceSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *HubspotCommerceSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *HubspotCommerceSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("HubspotCommerceSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *HubspotCommerceSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *HubspotCommerceSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("HubspotCommerceSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Advanced returns a Advanced entity bound to this client.
// Idiomatic usage: client.Advanced(nil).List(nil, nil) or
// client.Advanced(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) Advanced(data map[string]any) HubspotCommerceEntity {
	return NewAdvancedEntityFunc(sdk, data)
}


// Basic returns a Basic entity bound to this client.
// Idiomatic usage: client.Basic(nil).List(nil, nil) or
// client.Basic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) Basic(data map[string]any) HubspotCommerceEntity {
	return NewBasicEntityFunc(sdk, data)
}


// Batch returns a Batch entity bound to this client.
// Idiomatic usage: client.Batch(nil).List(nil, nil) or
// client.Batch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) Batch(data map[string]any) HubspotCommerceEntity {
	return NewBatchEntityFunc(sdk, data)
}


// Contract returns a Contract entity bound to this client.
// Idiomatic usage: client.Contract(nil).List(nil, nil) or
// client.Contract(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) Contract(data map[string]any) HubspotCommerceEntity {
	return NewContractEntityFunc(sdk, data)
}


// ContractsContract returns a ContractsContract entity bound to this client.
// Idiomatic usage: client.ContractsContract(nil).List(nil, nil) or
// client.ContractsContract(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) ContractsContract(data map[string]any) HubspotCommerceEntity {
	return NewContractsContractEntityFunc(sdk, data)
}


// ContractsContractChange returns a ContractsContractChange entity bound to this client.
// Idiomatic usage: client.ContractsContractChange(nil).List(nil, nil) or
// client.ContractsContractChange(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) ContractsContractChange(data map[string]any) HubspotCommerceEntity {
	return NewContractsContractChangeEntityFunc(sdk, data)
}


// ContractsContractChangePreview returns a ContractsContractChangePreview entity bound to this client.
// Idiomatic usage: client.ContractsContractChangePreview(nil).List(nil, nil) or
// client.ContractsContractChangePreview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) ContractsContractChangePreview(data map[string]any) HubspotCommerceEntity {
	return NewContractsContractChangePreviewEntityFunc(sdk, data)
}


// ContractsContractChangeSummary returns a ContractsContractChangeSummary entity bound to this client.
// Idiomatic usage: client.ContractsContractChangeSummary(nil).List(nil, nil) or
// client.ContractsContractChangeSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) ContractsContractChangeSummary(data map[string]any) HubspotCommerceEntity {
	return NewContractsContractChangeSummaryEntityFunc(sdk, data)
}


// ContractsQuote returns a ContractsQuote entity bound to this client.
// Idiomatic usage: client.ContractsQuote(nil).List(nil, nil) or
// client.ContractsQuote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) ContractsQuote(data map[string]any) HubspotCommerceEntity {
	return NewContractsQuoteEntityFunc(sdk, data)
}


// Item returns a Item entity bound to this client.
// Idiomatic usage: client.Item(nil).List(nil, nil) or
// client.Item(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) Item(data map[string]any) HubspotCommerceEntity {
	return NewItemEntityFunc(sdk, data)
}


// PaymentLink returns a PaymentLink entity bound to this client.
// Idiomatic usage: client.PaymentLink(nil).List(nil, nil) or
// client.PaymentLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentLink(data map[string]any) HubspotCommerceEntity {
	return NewPaymentLinkEntityFunc(sdk, data)
}


// PaymentMethodsCommercePaymentMethodSettingsPublic returns a PaymentMethodsCommercePaymentMethodSettingsPublic entity bound to this client.
// Idiomatic usage: client.PaymentMethodsCommercePaymentMethodSettingsPublic(nil).List(nil, nil) or
// client.PaymentMethodsCommercePaymentMethodSettingsPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentMethodsCommercePaymentMethodSettingsPublic(data map[string]any) HubspotCommerceEntity {
	return NewPaymentMethodsCommercePaymentMethodSettingsPublicEntityFunc(sdk, data)
}


// PaymentsActionResponseWithSingleResultSimplePublicObject returns a PaymentsActionResponseWithSingleResultSimplePublicObject entity bound to this client.
// Idiomatic usage: client.PaymentsActionResponseWithSingleResultSimplePublicObject(nil).List(nil, nil) or
// client.PaymentsActionResponseWithSingleResultSimplePublicObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentsActionResponseWithSingleResultSimplePublicObject(data map[string]any) HubspotCommerceEntity {
	return NewPaymentsActionResponseWithSingleResultSimplePublicObjectEntityFunc(sdk, data)
}


// PaymentsCreateManualPaymentPublic returns a PaymentsCreateManualPaymentPublic entity bound to this client.
// Idiomatic usage: client.PaymentsCreateManualPaymentPublic(nil).List(nil, nil) or
// client.PaymentsCreateManualPaymentPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentsCreateManualPaymentPublic(data map[string]any) HubspotCommerceEntity {
	return NewPaymentsCreateManualPaymentPublicEntityFunc(sdk, data)
}


// PaymentsSettingsGetBillingSettingsPublic returns a PaymentsSettingsGetBillingSettingsPublic entity bound to this client.
// Idiomatic usage: client.PaymentsSettingsGetBillingSettingsPublic(nil).List(nil, nil) or
// client.PaymentsSettingsGetBillingSettingsPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentsSettingsGetBillingSettingsPublic(data map[string]any) HubspotCommerceEntity {
	return NewPaymentsSettingsGetBillingSettingsPublicEntityFunc(sdk, data)
}


// PaymentsSettingsGetCheckoutFeesPublic returns a PaymentsSettingsGetCheckoutFeesPublic entity bound to this client.
// Idiomatic usage: client.PaymentsSettingsGetCheckoutFeesPublic(nil).List(nil, nil) or
// client.PaymentsSettingsGetCheckoutFeesPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentsSettingsGetCheckoutFeesPublic(data map[string]any) HubspotCommerceEntity {
	return NewPaymentsSettingsGetCheckoutFeesPublicEntityFunc(sdk, data)
}


// PaymentsSettingsGetPolicySettingsPublic returns a PaymentsSettingsGetPolicySettingsPublic entity bound to this client.
// Idiomatic usage: client.PaymentsSettingsGetPolicySettingsPublic(nil).List(nil, nil) or
// client.PaymentsSettingsGetPolicySettingsPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentsSettingsGetPolicySettingsPublic(data map[string]any) HubspotCommerceEntity {
	return NewPaymentsSettingsGetPolicySettingsPublicEntityFunc(sdk, data)
}


// PaymentsSettingsGetShippingSettingsPublic returns a PaymentsSettingsGetShippingSettingsPublic entity bound to this client.
// Idiomatic usage: client.PaymentsSettingsGetShippingSettingsPublic(nil).List(nil, nil) or
// client.PaymentsSettingsGetShippingSettingsPublic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentsSettingsGetShippingSettingsPublic(data map[string]any) HubspotCommerceEntity {
	return NewPaymentsSettingsGetShippingSettingsPublicEntityFunc(sdk, data)
}


// PaymentsaccountsPaymentAccountView returns a PaymentsaccountsPaymentAccountView entity bound to this client.
// Idiomatic usage: client.PaymentsaccountsPaymentAccountView(nil).List(nil, nil) or
// client.PaymentsaccountsPaymentAccountView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PaymentsaccountsPaymentAccountView(data map[string]any) HubspotCommerceEntity {
	return NewPaymentsaccountsPaymentAccountViewEntityFunc(sdk, data)
}


// PriceBook returns a PriceBook entity bound to this client.
// Idiomatic usage: client.PriceBook(nil).List(nil, nil) or
// client.PriceBook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PriceBook(data map[string]any) HubspotCommerceEntity {
	return NewPriceBookEntityFunc(sdk, data)
}


// PriceBooksBatchResponsePriceBookItem returns a PriceBooksBatchResponsePriceBookItem entity bound to this client.
// Idiomatic usage: client.PriceBooksBatchResponsePriceBookItem(nil).List(nil, nil) or
// client.PriceBooksBatchResponsePriceBookItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PriceBooksBatchResponsePriceBookItem(data map[string]any) HubspotCommerceEntity {
	return NewPriceBooksBatchResponsePriceBookItemEntityFunc(sdk, data)
}


// PriceBooksCollectionResponsePriceBookItemResponseForward returns a PriceBooksCollectionResponsePriceBookItemResponseForward entity bound to this client.
// Idiomatic usage: client.PriceBooksCollectionResponsePriceBookItemResponseForward(nil).List(nil, nil) or
// client.PriceBooksCollectionResponsePriceBookItemResponseForward(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PriceBooksCollectionResponsePriceBookItemResponseForward(data map[string]any) HubspotCommerceEntity {
	return NewPriceBooksCollectionResponsePriceBookItemResponseForwardEntityFunc(sdk, data)
}


// PriceBooksPriceBook returns a PriceBooksPriceBook entity bound to this client.
// Idiomatic usage: client.PriceBooksPriceBook(nil).List(nil, nil) or
// client.PriceBooksPriceBook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PriceBooksPriceBook(data map[string]any) HubspotCommerceEntity {
	return NewPriceBooksPriceBookEntityFunc(sdk, data)
}


// PriceBooksPriceBookItem returns a PriceBooksPriceBookItem entity bound to this client.
// Idiomatic usage: client.PriceBooksPriceBookItem(nil).List(nil, nil) or
// client.PriceBooksPriceBookItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PriceBooksPriceBookItem(data map[string]any) HubspotCommerceEntity {
	return NewPriceBooksPriceBookItemEntityFunc(sdk, data)
}


// PriceBooksPriceBookValidate returns a PriceBooksPriceBookValidate entity bound to this client.
// Idiomatic usage: client.PriceBooksPriceBookValidate(nil).List(nil, nil) or
// client.PriceBooksPriceBookValidate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotCommerceSDK) PriceBooksPriceBookValidate(data map[string]any) HubspotCommerceEntity {
	return NewPriceBooksPriceBookValidateEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotCommerceSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewHubspotCommerceSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
