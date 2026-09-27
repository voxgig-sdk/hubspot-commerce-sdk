package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAdvancedEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewBasicEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewBatchEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewContractEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewContractsContractEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewContractsContractChangeEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewContractsContractChangePreviewEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewContractsContractChangeSummaryEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewContractsQuoteEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewItemEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentLinkEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentMethodsCommercePaymentMethodSettingsPublicEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentsActionResponseWithSingleResultSimplePublicObjectEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentsCreateManualPaymentPublicEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentsSettingsGetBillingSettingsPublicEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentsSettingsGetCheckoutFeesPublicEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentsSettingsGetPolicySettingsPublicEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentsSettingsGetShippingSettingsPublicEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPaymentsaccountsPaymentAccountViewEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPriceBookEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPriceBooksBatchResponsePriceBookItemEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPriceBooksCollectionResponsePriceBookItemResponseForwardEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPriceBooksPriceBookEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPriceBooksPriceBookItemEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

var NewPriceBooksPriceBookValidateEntityFunc func(client *HubspotCommerceSDK, entopts map[string]any) HubspotCommerceEntity

