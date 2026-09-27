package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/hubspot-commerce-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"advanced | basic | batch | contract | contracts_contract | contracts_contract_change | contracts_contract_change_preview | contracts_contract_change_summary | contracts_quote | item | payment_link | payment_methods_commerce_payment_method_settings_public | payments_action_response_with_single_result_simple_public_object | payments_create_manual_payment_public | payments_settings_get_billing_settings_public | payments_settings_get_checkout_fees_public | payments_settings_get_policy_settings_public | payments_settings_get_shipping_settings_public | paymentsaccounts_payment_account_view | price_book | price_books_batch_response_price_book_item | price_books_collection_response_price_book_item_response_forward | price_books_price_book | price_books_price_book_item | price_books_price_book_validate"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.HubspotCommerceSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "hubspot-commerce_list",
		Description: "List records from HubspotCommerce. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "hubspot-commerce_load",
		Description: "Load a single record from HubspotCommerce. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.HubspotCommerceSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.HubspotCommerceSDK, name string) (sdk.HubspotCommerceEntity, error) {
	switch strings.ToLower(name) {
	case "advanced":
		return client.Advanced(nil), nil
	case "basic":
		return client.Basic(nil), nil
	case "batch":
		return client.Batch(nil), nil
	case "contract":
		return client.Contract(nil), nil
	case "contracts_contract":
		return client.ContractsContract(nil), nil
	case "contracts_contract_change":
		return client.ContractsContractChange(nil), nil
	case "contracts_contract_change_preview":
		return client.ContractsContractChangePreview(nil), nil
	case "contracts_contract_change_summary":
		return client.ContractsContractChangeSummary(nil), nil
	case "contracts_quote":
		return client.ContractsQuote(nil), nil
	case "item":
		return client.Item(nil), nil
	case "payment_link":
		return client.PaymentLink(nil), nil
	case "payment_methods_commerce_payment_method_settings_public":
		return client.PaymentMethodsCommercePaymentMethodSettingsPublic(nil), nil
	case "payments_action_response_with_single_result_simple_public_object":
		return client.PaymentsActionResponseWithSingleResultSimplePublicObject(nil), nil
	case "payments_create_manual_payment_public":
		return client.PaymentsCreateManualPaymentPublic(nil), nil
	case "payments_settings_get_billing_settings_public":
		return client.PaymentsSettingsGetBillingSettingsPublic(nil), nil
	case "payments_settings_get_checkout_fees_public":
		return client.PaymentsSettingsGetCheckoutFeesPublic(nil), nil
	case "payments_settings_get_policy_settings_public":
		return client.PaymentsSettingsGetPolicySettingsPublic(nil), nil
	case "payments_settings_get_shipping_settings_public":
		return client.PaymentsSettingsGetShippingSettingsPublic(nil), nil
	case "paymentsaccounts_payment_account_view":
		return client.PaymentsaccountsPaymentAccountView(nil), nil
	case "price_book":
		return client.PriceBook(nil), nil
	case "price_books_batch_response_price_book_item":
		return client.PriceBooksBatchResponsePriceBookItem(nil), nil
	case "price_books_collection_response_price_book_item_response_forward":
		return client.PriceBooksCollectionResponsePriceBookItemResponseForward(nil), nil
	case "price_books_price_book":
		return client.PriceBooksPriceBook(nil), nil
	case "price_books_price_book_item":
		return client.PriceBooksPriceBookItem(nil), nil
	case "price_books_price_book_validate":
		return client.PriceBooksPriceBookValidate(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
