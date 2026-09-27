package voxgighubspotcommercesdk

import (
	"github.com/voxgig-sdk/hubspot-commerce-sdk/go/core"
	"github.com/voxgig-sdk/hubspot-commerce-sdk/go/entity"
	"github.com/voxgig-sdk/hubspot-commerce-sdk/go/feature"
	_ "github.com/voxgig-sdk/hubspot-commerce-sdk/go/utility"
)

// Type aliases preserve external API.
type HubspotCommerceSDK = core.HubspotCommerceSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HubspotCommerceEntity = core.HubspotCommerceEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HubspotCommerceError = core.HubspotCommerceError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAdvancedEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewAdvancedEntity(client, entopts)
	}
	core.NewBasicEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewBasicEntity(client, entopts)
	}
	core.NewBatchEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewBatchEntity(client, entopts)
	}
	core.NewContractEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewContractEntity(client, entopts)
	}
	core.NewContractsContractEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewContractsContractEntity(client, entopts)
	}
	core.NewContractsContractChangeEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewContractsContractChangeEntity(client, entopts)
	}
	core.NewContractsContractChangePreviewEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewContractsContractChangePreviewEntity(client, entopts)
	}
	core.NewContractsContractChangeSummaryEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewContractsContractChangeSummaryEntity(client, entopts)
	}
	core.NewContractsQuoteEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewContractsQuoteEntity(client, entopts)
	}
	core.NewItemEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewItemEntity(client, entopts)
	}
	core.NewPaymentLinkEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentLinkEntity(client, entopts)
	}
	core.NewPaymentMethodsCommercePaymentMethodSettingsPublicEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentMethodsCommercePaymentMethodSettingsPublicEntity(client, entopts)
	}
	core.NewPaymentsActionResponseWithSingleResultSimplePublicObjectEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentsActionResponseWithSingleResultSimplePublicObjectEntity(client, entopts)
	}
	core.NewPaymentsCreateManualPaymentPublicEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentsCreateManualPaymentPublicEntity(client, entopts)
	}
	core.NewPaymentsSettingsGetBillingSettingsPublicEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentsSettingsGetBillingSettingsPublicEntity(client, entopts)
	}
	core.NewPaymentsSettingsGetCheckoutFeesPublicEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentsSettingsGetCheckoutFeesPublicEntity(client, entopts)
	}
	core.NewPaymentsSettingsGetPolicySettingsPublicEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentsSettingsGetPolicySettingsPublicEntity(client, entopts)
	}
	core.NewPaymentsSettingsGetShippingSettingsPublicEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentsSettingsGetShippingSettingsPublicEntity(client, entopts)
	}
	core.NewPaymentsaccountsPaymentAccountViewEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPaymentsaccountsPaymentAccountViewEntity(client, entopts)
	}
	core.NewPriceBookEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPriceBookEntity(client, entopts)
	}
	core.NewPriceBooksBatchResponsePriceBookItemEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPriceBooksBatchResponsePriceBookItemEntity(client, entopts)
	}
	core.NewPriceBooksCollectionResponsePriceBookItemResponseForwardEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPriceBooksCollectionResponsePriceBookItemResponseForwardEntity(client, entopts)
	}
	core.NewPriceBooksPriceBookEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPriceBooksPriceBookEntity(client, entopts)
	}
	core.NewPriceBooksPriceBookItemEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPriceBooksPriceBookItemEntity(client, entopts)
	}
	core.NewPriceBooksPriceBookValidateEntityFunc = func(client *core.HubspotCommerceSDK, entopts map[string]any) core.HubspotCommerceEntity {
		return entity.NewPriceBooksPriceBookValidateEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHubspotCommerceSDK = core.NewHubspotCommerceSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewHubspotCommerceSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *HubspotCommerceSDK  { return NewHubspotCommerceSDK(nil) }
func Test() *HubspotCommerceSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
