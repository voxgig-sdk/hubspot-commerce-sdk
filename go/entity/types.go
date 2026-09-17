// Typed models for the HubspotCommerce SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hubspot-commerce-sdk/go/core"
)

// Advanced is the typed data model for the advanced entity.
type Advanced struct {
}

// AdvancedCreateData is the typed request payload for Advanced.CreateTyped.
type AdvancedCreateData struct {
	PaymentCrmObjectId string `json:"payment_crm_object_id"`
}

// Basic is the typed data model for the basic entity.
type Basic struct {
}

// BasicRemoveMatch is the typed request payload for Basic.RemoveTyped.
type BasicRemoveMatch struct {
	PaymentLinkId string `json:"payment_link_id"`
}

// Batch is the typed data model for the batch entity.
type Batch struct {
}

// BatchCreateData is the typed request payload for Batch.CreateTyped.
type BatchCreateData struct {
	PriceBookId int `json:"price_book_id"`
}

// Contract is the typed data model for the contract entity.
type Contract struct {
	AddressTypesToCollect []any `json:"addressTypesToCollect"`
	AllTransactionsFeeName *string `json:"allTransactionsFeeName,omitempty"`
	AllTransactionsFeePercentage *float64 `json:"allTransactionsFeePercentage,omitempty"`
	AllowedPaymentMethods []any `json:"allowedPaymentMethods"`
	AnnualContractValue *float64 `json:"annualContractValue,omitempty"`
	AutomatedTaxesEnabled bool `json:"automatedTaxesEnabled"`
	BillingAddress *map[string]any `json:"billingAddress,omitempty"`
	BillingCompanyId *string `json:"billingCompanyId,omitempty"`
	BillingContactId *string `json:"billingContactId,omitempty"`
	BillingStartDateOverride *string `json:"billingStartDateOverride,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CardFeeName *string `json:"cardFeeName,omitempty"`
	CardFeePercentage *float64 `json:"cardFeePercentage,omitempty"`
	CollectionProcess *string `json:"collectionProcess,omitempty"`
	ContractEffectiveDate *string `json:"contractEffectiveDate,omitempty"`
	ContractSourceId *string `json:"contractSourceId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	CurrentAnnualRecurringRevenue *float64 `json:"currentAnnualRecurringRevenue,omitempty"`
	CurrentMonthlyRecurringRevenue *float64 `json:"currentMonthlyRecurringRevenue,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	DealId *string `json:"dealId,omitempty"`
	DirectDebitFeeName *string `json:"directDebitFeeName,omitempty"`
	DirectDebitFeePercentage *float64 `json:"directDebitFeePercentage,omitempty"`
	DiscountCode *string `json:"discountCode,omitempty"`
	EndDate *string `json:"endDate,omitempty"`
	ExternalPaymentMethodReferenceId *string `json:"externalPaymentMethodReferenceId,omitempty"`
	HubspotBillingEnabled bool `json:"hubspotBillingEnabled"`
	Id string `json:"id"`
	Language *string `json:"language,omitempty"`
	LineItems []any `json:"lineItems"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	NetPaymentTerms *int `json:"netPaymentTerms,omitempty"`
	OwnerId map[string]any `json:"ownerId"`
	PaymentEnabled bool `json:"paymentEnabled"`
	PaymentMethod *string `json:"paymentMethod,omitempty"`
	PoNumber *string `json:"poNumber,omitempty"`
	PreTerminationContractValue *float64 `json:"preTerminationContractValue,omitempty"`
	RenewalContractId *string `json:"renewalContractId,omitempty"`
	RenewalDate *string `json:"renewalDate,omitempty"`
	SellerCompanyAddress *map[string]any `json:"sellerCompanyAddress,omitempty"`
	SellerCompanyDomain map[string]any `json:"sellerCompanyDomain"`
	SellerCompanyName *string `json:"sellerCompanyName,omitempty"`
	SellerEmail *string `json:"sellerEmail,omitempty"`
	SellerFirstName *string `json:"sellerFirstName,omitempty"`
	SellerLastName *string `json:"sellerLastName,omitempty"`
	SellerPhone map[string]any `json:"sellerPhone"`
	SellerPhoneNumber *string `json:"sellerPhoneNumber,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	Status string `json:"status"`
	StorePaymentMethodAtCheckout bool `json:"storePaymentMethodAtCheckout"`
	TerminationDate *string `json:"terminationDate,omitempty"`
	TotalBilledAmount *float64 `json:"totalBilledAmount,omitempty"`
	TotalBilledAmountPreTax *float64 `json:"totalBilledAmountPreTax,omitempty"`
	TotalCollectedFees *float64 `json:"totalCollectedFees,omitempty"`
	TotalCollectedTaxes *float64 `json:"totalCollectedTaxes,omitempty"`
	TotalContractValue *float64 `json:"totalContractValue,omitempty"`
	TotalPaidAmount *float64 `json:"totalPaidAmount,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ContractLoadMatch is the typed request payload for Contract.LoadTyped.
type ContractLoadMatch struct {
	Id string `json:"id"`
}

// ContractCreateData is the typed request payload for Contract.CreateTyped.
type ContractCreateData struct {
	AddressTypesToCollect []any `json:"addressTypesToCollect"`
	AllTransactionsFeeName *string `json:"allTransactionsFeeName,omitempty"`
	AllTransactionsFeePercentage *float64 `json:"allTransactionsFeePercentage,omitempty"`
	AllowedPaymentMethods []any `json:"allowedPaymentMethods"`
	AnnualContractValue *float64 `json:"annualContractValue,omitempty"`
	AutomatedTaxesEnabled bool `json:"automatedTaxesEnabled"`
	BillingAddress *map[string]any `json:"billingAddress,omitempty"`
	BillingCompanyId *string `json:"billingCompanyId,omitempty"`
	BillingContactId *string `json:"billingContactId,omitempty"`
	BillingStartDateOverride *string `json:"billingStartDateOverride,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CardFeeName *string `json:"cardFeeName,omitempty"`
	CardFeePercentage *float64 `json:"cardFeePercentage,omitempty"`
	CollectionProcess *string `json:"collectionProcess,omitempty"`
	ContractEffectiveDate *string `json:"contractEffectiveDate,omitempty"`
	ContractSourceId *string `json:"contractSourceId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	CurrentAnnualRecurringRevenue *float64 `json:"currentAnnualRecurringRevenue,omitempty"`
	CurrentMonthlyRecurringRevenue *float64 `json:"currentMonthlyRecurringRevenue,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	DealId *string `json:"dealId,omitempty"`
	DirectDebitFeeName *string `json:"directDebitFeeName,omitempty"`
	DirectDebitFeePercentage *float64 `json:"directDebitFeePercentage,omitempty"`
	DiscountCode *string `json:"discountCode,omitempty"`
	EndDate *string `json:"endDate,omitempty"`
	ExternalPaymentMethodReferenceId *string `json:"externalPaymentMethodReferenceId,omitempty"`
	HubspotBillingEnabled bool `json:"hubspotBillingEnabled"`
	Id string `json:"id"`
	Language *string `json:"language,omitempty"`
	LineItems []any `json:"lineItems"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	NetPaymentTerms *int `json:"netPaymentTerms,omitempty"`
	OwnerId map[string]any `json:"ownerId"`
	PaymentEnabled bool `json:"paymentEnabled"`
	PaymentMethod *string `json:"paymentMethod,omitempty"`
	PoNumber *string `json:"poNumber,omitempty"`
	PreTerminationContractValue *float64 `json:"preTerminationContractValue,omitempty"`
	RenewalContractId *string `json:"renewalContractId,omitempty"`
	RenewalDate *string `json:"renewalDate,omitempty"`
	SellerCompanyAddress *map[string]any `json:"sellerCompanyAddress,omitempty"`
	SellerCompanyDomain map[string]any `json:"sellerCompanyDomain"`
	SellerCompanyName *string `json:"sellerCompanyName,omitempty"`
	SellerEmail *string `json:"sellerEmail,omitempty"`
	SellerFirstName *string `json:"sellerFirstName,omitempty"`
	SellerLastName *string `json:"sellerLastName,omitempty"`
	SellerPhone map[string]any `json:"sellerPhone"`
	SellerPhoneNumber *string `json:"sellerPhoneNumber,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	Status string `json:"status"`
	StorePaymentMethodAtCheckout bool `json:"storePaymentMethodAtCheckout"`
	TerminationDate *string `json:"terminationDate,omitempty"`
	TotalBilledAmount *float64 `json:"totalBilledAmount,omitempty"`
	TotalBilledAmountPreTax *float64 `json:"totalBilledAmountPreTax,omitempty"`
	TotalCollectedFees *float64 `json:"totalCollectedFees,omitempty"`
	TotalCollectedTaxes *float64 `json:"totalCollectedTaxes,omitempty"`
	TotalContractValue *float64 `json:"totalContractValue,omitempty"`
	TotalPaidAmount *float64 `json:"totalPaidAmount,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ContractUpdateData is the typed request payload for Contract.UpdateTyped.
type ContractUpdateData struct {
	Id string `json:"id"`
	AddressTypesToCollect *[]any `json:"addressTypesToCollect,omitempty"`
	AllTransactionsFeeName *string `json:"allTransactionsFeeName,omitempty"`
	AllTransactionsFeePercentage *float64 `json:"allTransactionsFeePercentage,omitempty"`
	AllowedPaymentMethods *[]any `json:"allowedPaymentMethods,omitempty"`
	AnnualContractValue *float64 `json:"annualContractValue,omitempty"`
	AutomatedTaxesEnabled *bool `json:"automatedTaxesEnabled,omitempty"`
	BillingAddress *map[string]any `json:"billingAddress,omitempty"`
	BillingCompanyId *string `json:"billingCompanyId,omitempty"`
	BillingContactId *string `json:"billingContactId,omitempty"`
	BillingStartDateOverride *string `json:"billingStartDateOverride,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CardFeeName *string `json:"cardFeeName,omitempty"`
	CardFeePercentage *float64 `json:"cardFeePercentage,omitempty"`
	CollectionProcess *string `json:"collectionProcess,omitempty"`
	ContractEffectiveDate *string `json:"contractEffectiveDate,omitempty"`
	ContractSourceId *string `json:"contractSourceId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	CurrentAnnualRecurringRevenue *float64 `json:"currentAnnualRecurringRevenue,omitempty"`
	CurrentMonthlyRecurringRevenue *float64 `json:"currentMonthlyRecurringRevenue,omitempty"`
	CustomProperties *map[string]any `json:"customProperties,omitempty"`
	DealId *string `json:"dealId,omitempty"`
	DirectDebitFeeName *string `json:"directDebitFeeName,omitempty"`
	DirectDebitFeePercentage *float64 `json:"directDebitFeePercentage,omitempty"`
	DiscountCode *string `json:"discountCode,omitempty"`
	EndDate *string `json:"endDate,omitempty"`
	ExternalPaymentMethodReferenceId *string `json:"externalPaymentMethodReferenceId,omitempty"`
	HubspotBillingEnabled *bool `json:"hubspotBillingEnabled,omitempty"`
	Language *string `json:"language,omitempty"`
	LineItems *[]any `json:"lineItems,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	NetPaymentTerms *int `json:"netPaymentTerms,omitempty"`
	OwnerId *map[string]any `json:"ownerId,omitempty"`
	PaymentEnabled *bool `json:"paymentEnabled,omitempty"`
	PaymentMethod *string `json:"paymentMethod,omitempty"`
	PoNumber *string `json:"poNumber,omitempty"`
	PreTerminationContractValue *float64 `json:"preTerminationContractValue,omitempty"`
	RenewalContractId *string `json:"renewalContractId,omitempty"`
	RenewalDate *string `json:"renewalDate,omitempty"`
	SellerCompanyAddress *map[string]any `json:"sellerCompanyAddress,omitempty"`
	SellerCompanyDomain *map[string]any `json:"sellerCompanyDomain,omitempty"`
	SellerCompanyName *string `json:"sellerCompanyName,omitempty"`
	SellerEmail *string `json:"sellerEmail,omitempty"`
	SellerFirstName *string `json:"sellerFirstName,omitempty"`
	SellerLastName *string `json:"sellerLastName,omitempty"`
	SellerPhone *map[string]any `json:"sellerPhone,omitempty"`
	SellerPhoneNumber *string `json:"sellerPhoneNumber,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	Status *string `json:"status,omitempty"`
	StorePaymentMethodAtCheckout *bool `json:"storePaymentMethodAtCheckout,omitempty"`
	TerminationDate *string `json:"terminationDate,omitempty"`
	TotalBilledAmount *float64 `json:"totalBilledAmount,omitempty"`
	TotalBilledAmountPreTax *float64 `json:"totalBilledAmountPreTax,omitempty"`
	TotalCollectedFees *float64 `json:"totalCollectedFees,omitempty"`
	TotalCollectedTaxes *float64 `json:"totalCollectedTaxes,omitempty"`
	TotalContractValue *float64 `json:"totalContractValue,omitempty"`
	TotalPaidAmount *float64 `json:"totalPaidAmount,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ContractsContract is the typed data model for the contracts_contract entity.
type ContractsContract struct {
	AddressTypesToCollect []any `json:"addressTypesToCollect"`
	AllTransactionsFeeName *string `json:"allTransactionsFeeName,omitempty"`
	AllTransactionsFeePercentage *float64 `json:"allTransactionsFeePercentage,omitempty"`
	AllowedPaymentMethods []any `json:"allowedPaymentMethods"`
	AnnualContractValue *float64 `json:"annualContractValue,omitempty"`
	AutomatedTaxesEnabled bool `json:"automatedTaxesEnabled"`
	BillingAddress *map[string]any `json:"billingAddress,omitempty"`
	BillingCompanyId *string `json:"billingCompanyId,omitempty"`
	BillingContactId *string `json:"billingContactId,omitempty"`
	BillingStartDateOverride *string `json:"billingStartDateOverride,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CardFeeName *string `json:"cardFeeName,omitempty"`
	CardFeePercentage *float64 `json:"cardFeePercentage,omitempty"`
	CollectionProcess *string `json:"collectionProcess,omitempty"`
	ContractEffectiveDate *string `json:"contractEffectiveDate,omitempty"`
	ContractSourceId *string `json:"contractSourceId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	CurrentAnnualRecurringRevenue *float64 `json:"currentAnnualRecurringRevenue,omitempty"`
	CurrentMonthlyRecurringRevenue *float64 `json:"currentMonthlyRecurringRevenue,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	DealId *string `json:"dealId,omitempty"`
	DirectDebitFeeName *string `json:"directDebitFeeName,omitempty"`
	DirectDebitFeePercentage *float64 `json:"directDebitFeePercentage,omitempty"`
	DiscountCode *string `json:"discountCode,omitempty"`
	EndDate *string `json:"endDate,omitempty"`
	ExternalPaymentMethodReferenceId *string `json:"externalPaymentMethodReferenceId,omitempty"`
	HubspotBillingEnabled bool `json:"hubspotBillingEnabled"`
	Id string `json:"id"`
	Language *string `json:"language,omitempty"`
	LineItems []any `json:"lineItems"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	NetPaymentTerms *int `json:"netPaymentTerms,omitempty"`
	PaymentEnabled bool `json:"paymentEnabled"`
	PaymentMethod *string `json:"paymentMethod,omitempty"`
	PoNumber *string `json:"poNumber,omitempty"`
	PreTerminationContractValue *float64 `json:"preTerminationContractValue,omitempty"`
	RenewalContractId *string `json:"renewalContractId,omitempty"`
	RenewalDate *string `json:"renewalDate,omitempty"`
	SellerCompanyAddress *map[string]any `json:"sellerCompanyAddress,omitempty"`
	SellerCompanyName *string `json:"sellerCompanyName,omitempty"`
	SellerEmail *string `json:"sellerEmail,omitempty"`
	SellerFirstName *string `json:"sellerFirstName,omitempty"`
	SellerLastName *string `json:"sellerLastName,omitempty"`
	SellerPhoneNumber *string `json:"sellerPhoneNumber,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	Status string `json:"status"`
	StorePaymentMethodAtCheckout bool `json:"storePaymentMethodAtCheckout"`
	TerminationDate *string `json:"terminationDate,omitempty"`
	TotalBilledAmount *float64 `json:"totalBilledAmount,omitempty"`
	TotalBilledAmountPreTax *float64 `json:"totalBilledAmountPreTax,omitempty"`
	TotalCollectedFees *float64 `json:"totalCollectedFees,omitempty"`
	TotalCollectedTaxes *float64 `json:"totalCollectedTaxes,omitempty"`
	TotalContractValue *float64 `json:"totalContractValue,omitempty"`
	TotalPaidAmount *float64 `json:"totalPaidAmount,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ContractsContractCreateData is the typed request payload for ContractsContract.CreateTyped.
type ContractsContractCreateData struct {
	ContractId string `json:"contract_id"`
	AddressTypesToCollect []any `json:"addressTypesToCollect"`
	AllTransactionsFeeName *string `json:"allTransactionsFeeName,omitempty"`
	AllTransactionsFeePercentage *float64 `json:"allTransactionsFeePercentage,omitempty"`
	AllowedPaymentMethods []any `json:"allowedPaymentMethods"`
	AnnualContractValue *float64 `json:"annualContractValue,omitempty"`
	AutomatedTaxesEnabled bool `json:"automatedTaxesEnabled"`
	BillingAddress *map[string]any `json:"billingAddress,omitempty"`
	BillingCompanyId *string `json:"billingCompanyId,omitempty"`
	BillingContactId *string `json:"billingContactId,omitempty"`
	BillingStartDateOverride *string `json:"billingStartDateOverride,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CardFeeName *string `json:"cardFeeName,omitempty"`
	CardFeePercentage *float64 `json:"cardFeePercentage,omitempty"`
	CollectionProcess *string `json:"collectionProcess,omitempty"`
	ContractEffectiveDate *string `json:"contractEffectiveDate,omitempty"`
	ContractSourceId *string `json:"contractSourceId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	CurrentAnnualRecurringRevenue *float64 `json:"currentAnnualRecurringRevenue,omitempty"`
	CurrentMonthlyRecurringRevenue *float64 `json:"currentMonthlyRecurringRevenue,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	DealId *string `json:"dealId,omitempty"`
	DirectDebitFeeName *string `json:"directDebitFeeName,omitempty"`
	DirectDebitFeePercentage *float64 `json:"directDebitFeePercentage,omitempty"`
	DiscountCode *string `json:"discountCode,omitempty"`
	EndDate *string `json:"endDate,omitempty"`
	ExternalPaymentMethodReferenceId *string `json:"externalPaymentMethodReferenceId,omitempty"`
	HubspotBillingEnabled bool `json:"hubspotBillingEnabled"`
	Id string `json:"id"`
	Language *string `json:"language,omitempty"`
	LineItems []any `json:"lineItems"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	NetPaymentTerms *int `json:"netPaymentTerms,omitempty"`
	PaymentEnabled bool `json:"paymentEnabled"`
	PaymentMethod *string `json:"paymentMethod,omitempty"`
	PoNumber *string `json:"poNumber,omitempty"`
	PreTerminationContractValue *float64 `json:"preTerminationContractValue,omitempty"`
	RenewalContractId *string `json:"renewalContractId,omitempty"`
	RenewalDate *string `json:"renewalDate,omitempty"`
	SellerCompanyAddress *map[string]any `json:"sellerCompanyAddress,omitempty"`
	SellerCompanyName *string `json:"sellerCompanyName,omitempty"`
	SellerEmail *string `json:"sellerEmail,omitempty"`
	SellerFirstName *string `json:"sellerFirstName,omitempty"`
	SellerLastName *string `json:"sellerLastName,omitempty"`
	SellerPhoneNumber *string `json:"sellerPhoneNumber,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
	Status string `json:"status"`
	StorePaymentMethodAtCheckout bool `json:"storePaymentMethodAtCheckout"`
	TerminationDate *string `json:"terminationDate,omitempty"`
	TotalBilledAmount *float64 `json:"totalBilledAmount,omitempty"`
	TotalBilledAmountPreTax *float64 `json:"totalBilledAmountPreTax,omitempty"`
	TotalCollectedFees *float64 `json:"totalCollectedFees,omitempty"`
	TotalCollectedTaxes *float64 `json:"totalCollectedTaxes,omitempty"`
	TotalContractValue *float64 `json:"totalContractValue,omitempty"`
	TotalPaidAmount *float64 `json:"totalPaidAmount,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ContractsContractChange is the typed data model for the contracts_contract_change entity.
type ContractsContractChange struct {
	ContractId string `json:"contractId"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DeltaLineItems []any `json:"deltaLineItems"`
	EffectiveDate *string `json:"effectiveDate,omitempty"`
	Id string `json:"id"`
	LineItemChanges []any `json:"lineItemChanges"`
	Name *string `json:"name,omitempty"`
	ProposedLineItems []any `json:"proposedLineItems"`
	Prorating bool `json:"prorating"`
	QuoteId *string `json:"quoteId,omitempty"`
	Status string `json:"status"`
	Type string `json:"type"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ContractsContractChangeLoadMatch is the typed request payload for ContractsContractChange.LoadTyped.
type ContractsContractChangeLoadMatch struct {
	Id string `json:"id"`
}

// ContractsContractChangeListMatch is the typed request payload for ContractsContractChange.ListTyped.
type ContractsContractChangeListMatch struct {
	ContractId string `json:"contract_id"`
}

// ContractsContractChangeCreateData is the typed request payload for ContractsContractChange.CreateTyped.
type ContractsContractChangeCreateData struct {
	ContractId string `json:"contractId"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DeltaLineItems []any `json:"deltaLineItems"`
	EffectiveDate *string `json:"effectiveDate,omitempty"`
	Id string `json:"id"`
	LineItemChanges []any `json:"lineItemChanges"`
	Name *string `json:"name,omitempty"`
	ProposedLineItems []any `json:"proposedLineItems"`
	Prorating bool `json:"prorating"`
	QuoteId *string `json:"quoteId,omitempty"`
	Status string `json:"status"`
	Type string `json:"type"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ContractsContractChangeUpdateData is the typed request payload for ContractsContractChange.UpdateTyped.
type ContractsContractChangeUpdateData struct {
	Id string `json:"id"`
	ContractId *string `json:"contractId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	DeltaLineItems *[]any `json:"deltaLineItems,omitempty"`
	EffectiveDate *string `json:"effectiveDate,omitempty"`
	LineItemChanges *[]any `json:"lineItemChanges,omitempty"`
	Name *string `json:"name,omitempty"`
	ProposedLineItems *[]any `json:"proposedLineItems,omitempty"`
	Prorating *bool `json:"prorating,omitempty"`
	QuoteId *string `json:"quoteId,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// ContractsContractChangePreview is the typed data model for the contracts_contract_change_preview entity.
type ContractsContractChangePreview struct {
	DeltaLineItems []any `json:"deltaLineItems"`
	ProposedLineItems []any `json:"proposedLineItems"`
}

// ContractsContractChangePreviewCreateData is the typed request payload for ContractsContractChangePreview.CreateTyped.
type ContractsContractChangePreviewCreateData struct {
	DeltaLineItems []any `json:"deltaLineItems"`
	ProposedLineItems []any `json:"proposedLineItems"`
}

// ContractsQuote is the typed data model for the contracts_quote entity.
type ContractsQuote struct {
	DealId *string `json:"dealId,omitempty"`
	DealPipeline *string `json:"dealPipeline,omitempty"`
	DealStage *string `json:"dealStage,omitempty"`
	Name *string `json:"name,omitempty"`
	QuoteTemplateId string `json:"quoteTemplateId"`
}

// ContractsQuoteCreateData is the typed request payload for ContractsQuote.CreateTyped.
type ContractsQuoteCreateData struct {
	ContractId string `json:"contract_id"`
	DealId *string `json:"dealId,omitempty"`
	DealPipeline *string `json:"dealPipeline,omitempty"`
	DealStage *string `json:"dealStage,omitempty"`
	Name *string `json:"name,omitempty"`
	QuoteTemplateId string `json:"quoteTemplateId"`
}

// Item is the typed data model for the item entity.
type Item struct {
	Id *string `json:"id,omitempty"`
}

// ItemRemoveMatch is the typed request payload for Item.RemoveTyped.
type ItemRemoveMatch struct {
	Id int `json:"id"`
	PriceBookId int `json:"price_book_id"`
}

// PaymentLink is the typed data model for the payment_link entity.
type PaymentLink struct {
	AcceptedPaymentMethods []any `json:"acceptedPaymentMethods"`
	AdditionalFormFields []any `json:"additionalFormFields"`
	Archived bool `json:"archived"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	AutomatedSalesTaxEnabled bool `json:"automatedSalesTaxEnabled"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CheckoutFeeIds []any `json:"checkoutFeeIds"`
	CollectFullBillingAddress bool `json:"collectFullBillingAddress"`
	CollectShippingAddress bool `json:"collectShippingAddress"`
	CompletedPurchaseCount int `json:"completedPurchaseCount"`
	CreateContractOnPurchase bool `json:"createContractOnPurchase"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode string `json:"currencyCode"`
	DealConfigurations map[string]any `json:"dealConfigurations"`
	DescriptionHtml *string `json:"descriptionHtml,omitempty"`
	Discount map[string]any `json:"discount"`
	DiscountCodeEnabled bool `json:"discountCodeEnabled"`
	DiscountObjectId *string `json:"discountObjectId,omitempty"`
	Discounts []any `json:"discounts"`
	DomainId *string `json:"domainId,omitempty"`
	EnableDefaultCheckoutFees bool `json:"enableDefaultCheckoutFees"`
	ExpirationSettings *map[string]any `json:"expirationSettings,omitempty"`
	FeeObjectIds []any `json:"feeObjectIds"`
	Fees []any `json:"fees"`
	FormGuid string `json:"formGuid"`
	Id string `json:"id"`
	IncludeEmailInSuccessRedirect bool `json:"includeEmailInSuccessRedirect"`
	IsOneTimeUseEnabled bool `json:"isOneTimeUseEnabled"`
	LineItemObjectIds []any `json:"lineItemObjectIds"`
	LineItems []any `json:"lineItems"`
	PaymentLinkName string `json:"paymentLinkName"`
	PaymentLinkUrl string `json:"paymentLinkUrl"`
	State string `json:"state"`
	StorePaymentMethodAtCheckout bool `json:"storePaymentMethodAtCheckout"`
	SuccessUrl *string `json:"successUrl,omitempty"`
	TaxObjectIds []any `json:"taxObjectIds"`
	Taxes []any `json:"taxes"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PaymentLinkLoadMatch is the typed request payload for PaymentLink.LoadTyped.
type PaymentLinkLoadMatch struct {
	Id string `json:"id"`
	Archived *bool `json:"archived,omitempty"`
}

// PaymentLinkListMatch is the typed request payload for PaymentLink.ListTyped.
type PaymentLinkListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	CreatedAfter *int `json:"created_after,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedBefore *int `json:"created_before,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *string `json:"sort,omitempty"`
	UpdatedAfter *int `json:"updated_after,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UpdatedBefore *int `json:"updated_before,omitempty"`
}

// PaymentLinkCreateData is the typed request payload for PaymentLink.CreateTyped.
type PaymentLinkCreateData struct {
	AcceptedPaymentMethods []any `json:"acceptedPaymentMethods"`
	AdditionalFormFields []any `json:"additionalFormFields"`
	Archived bool `json:"archived"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	AutomatedSalesTaxEnabled bool `json:"automatedSalesTaxEnabled"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CheckoutFeeIds []any `json:"checkoutFeeIds"`
	CollectFullBillingAddress bool `json:"collectFullBillingAddress"`
	CollectShippingAddress bool `json:"collectShippingAddress"`
	CompletedPurchaseCount int `json:"completedPurchaseCount"`
	CreateContractOnPurchase bool `json:"createContractOnPurchase"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode string `json:"currencyCode"`
	DealConfigurations map[string]any `json:"dealConfigurations"`
	DescriptionHtml *string `json:"descriptionHtml,omitempty"`
	Discount map[string]any `json:"discount"`
	DiscountCodeEnabled bool `json:"discountCodeEnabled"`
	DiscountObjectId *string `json:"discountObjectId,omitempty"`
	Discounts []any `json:"discounts"`
	DomainId *string `json:"domainId,omitempty"`
	EnableDefaultCheckoutFees bool `json:"enableDefaultCheckoutFees"`
	ExpirationSettings *map[string]any `json:"expirationSettings,omitempty"`
	FeeObjectIds []any `json:"feeObjectIds"`
	Fees []any `json:"fees"`
	FormGuid string `json:"formGuid"`
	Id string `json:"id"`
	IncludeEmailInSuccessRedirect bool `json:"includeEmailInSuccessRedirect"`
	IsOneTimeUseEnabled bool `json:"isOneTimeUseEnabled"`
	LineItemObjectIds []any `json:"lineItemObjectIds"`
	LineItems []any `json:"lineItems"`
	PaymentLinkName string `json:"paymentLinkName"`
	PaymentLinkUrl string `json:"paymentLinkUrl"`
	State string `json:"state"`
	StorePaymentMethodAtCheckout bool `json:"storePaymentMethodAtCheckout"`
	SuccessUrl *string `json:"successUrl,omitempty"`
	TaxObjectIds []any `json:"taxObjectIds"`
	Taxes []any `json:"taxes"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PaymentLinkUpdateData is the typed request payload for PaymentLink.UpdateTyped.
type PaymentLinkUpdateData struct {
	Id string `json:"id"`
	AcceptedPaymentMethods *[]any `json:"acceptedPaymentMethods,omitempty"`
	AdditionalFormFields *[]any `json:"additionalFormFields,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	AutomatedSalesTaxEnabled *bool `json:"automatedSalesTaxEnabled,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CheckoutFeeIds *[]any `json:"checkoutFeeIds,omitempty"`
	CollectFullBillingAddress *bool `json:"collectFullBillingAddress,omitempty"`
	CollectShippingAddress *bool `json:"collectShippingAddress,omitempty"`
	CompletedPurchaseCount *int `json:"completedPurchaseCount,omitempty"`
	CreateContractOnPurchase *bool `json:"createContractOnPurchase,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	DealConfigurations *map[string]any `json:"dealConfigurations,omitempty"`
	DescriptionHtml *string `json:"descriptionHtml,omitempty"`
	Discount *map[string]any `json:"discount,omitempty"`
	DiscountCodeEnabled *bool `json:"discountCodeEnabled,omitempty"`
	DiscountObjectId *string `json:"discountObjectId,omitempty"`
	Discounts *[]any `json:"discounts,omitempty"`
	DomainId *string `json:"domainId,omitempty"`
	EnableDefaultCheckoutFees *bool `json:"enableDefaultCheckoutFees,omitempty"`
	ExpirationSettings *map[string]any `json:"expirationSettings,omitempty"`
	FeeObjectIds *[]any `json:"feeObjectIds,omitempty"`
	Fees *[]any `json:"fees,omitempty"`
	FormGuid *string `json:"formGuid,omitempty"`
	IncludeEmailInSuccessRedirect *bool `json:"includeEmailInSuccessRedirect,omitempty"`
	IsOneTimeUseEnabled *bool `json:"isOneTimeUseEnabled,omitempty"`
	LineItemObjectIds *[]any `json:"lineItemObjectIds,omitempty"`
	LineItems *[]any `json:"lineItems,omitempty"`
	PaymentLinkName *string `json:"paymentLinkName,omitempty"`
	PaymentLinkUrl *string `json:"paymentLinkUrl,omitempty"`
	State *string `json:"state,omitempty"`
	StorePaymentMethodAtCheckout *bool `json:"storePaymentMethodAtCheckout,omitempty"`
	SuccessUrl *string `json:"successUrl,omitempty"`
	TaxObjectIds *[]any `json:"taxObjectIds,omitempty"`
	Taxes *[]any `json:"taxes,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PaymentMethodsCommercePaymentMethodSettingsPublic is the typed data model for the payment_methods_commerce_payment_method_settings_public entity.
type PaymentMethodsCommercePaymentMethodSettingsPublic struct {
	ActiveCurrencies []any `json:"activeCurrencies"`
	CommercePaymentMethod string `json:"commercePaymentMethod"`
	IsDefaultOn bool `json:"isDefaultOn"`
	PaymentMethodSettings []any `json:"paymentMethodSettings"`
	PaymentMethodUpdates []any `json:"paymentMethodUpdates"`
	SupportedCurrencies []any `json:"supportedCurrencies"`
}

// PaymentMethodsCommercePaymentMethodSettingsPublicListMatch is the typed request payload for PaymentMethodsCommercePaymentMethodSettingsPublic.ListTyped.
type PaymentMethodsCommercePaymentMethodSettingsPublicListMatch struct {
	ActiveCurrencies *[]any `json:"activeCurrencies,omitempty"`
	CommercePaymentMethod *string `json:"commercePaymentMethod,omitempty"`
	IsDefaultOn *bool `json:"isDefaultOn,omitempty"`
	PaymentMethodSettings *[]any `json:"paymentMethodSettings,omitempty"`
	PaymentMethodUpdates *[]any `json:"paymentMethodUpdates,omitempty"`
	SupportedCurrencies *[]any `json:"supportedCurrencies,omitempty"`
}

// PaymentMethodsCommercePaymentMethodSettingsPublicUpdateData is the typed request payload for PaymentMethodsCommercePaymentMethodSettingsPublic.UpdateTyped.
type PaymentMethodsCommercePaymentMethodSettingsPublicUpdateData struct {
	ActiveCurrencies *[]any `json:"activeCurrencies,omitempty"`
	CommercePaymentMethod *string `json:"commercePaymentMethod,omitempty"`
	IsDefaultOn *bool `json:"isDefaultOn,omitempty"`
	PaymentMethodSettings *[]any `json:"paymentMethodSettings,omitempty"`
	PaymentMethodUpdates *[]any `json:"paymentMethodUpdates,omitempty"`
	SupportedCurrencies *[]any `json:"supportedCurrencies,omitempty"`
}

// PaymentsActionResponseWithSingleResultSimplePublicObject is the typed data model for the payments_action_response_with_single_result_simple_public_object entity.
type PaymentsActionResponseWithSingleResultSimplePublicObject struct {
	Category string `json:"category"`
	Context map[string]any `json:"context"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Links map[string]any `json:"links"`
	Message string `json:"message"`
	Status string `json:"status"`
	SubCategory *map[string]any `json:"subCategory,omitempty"`
}

// PaymentsActionResponseWithSingleResultSimplePublicObjectListMatch is the typed request payload for PaymentsActionResponseWithSingleResultSimplePublicObject.ListTyped.
type PaymentsActionResponseWithSingleResultSimplePublicObjectListMatch struct {
	PaymentCrmObjectId string `json:"payment_crm_object_id"`
	TaskId string `json:"task_id"`
}

// PaymentsCreateManualPaymentPublic is the typed data model for the payments_create_manual_payment_public entity.
type PaymentsCreateManualPaymentPublic struct {
	Associations []any `json:"associations"`
	BillingAddress *map[string]any `json:"billingAddress,omitempty"`
	CurrencyCode string `json:"currencyCode"`
	CustomerEmail *string `json:"customerEmail,omitempty"`
	Id string `json:"id"`
	PaymentAmount float64 `json:"paymentAmount"`
	PaymentDate string `json:"paymentDate"`
	PaymentMethod string `json:"paymentMethod"`
}

// PaymentsCreateManualPaymentPublicCreateData is the typed request payload for PaymentsCreateManualPaymentPublic.CreateTyped.
type PaymentsCreateManualPaymentPublicCreateData struct {
	Associations []any `json:"associations"`
	BillingAddress *map[string]any `json:"billingAddress,omitempty"`
	CurrencyCode string `json:"currencyCode"`
	CustomerEmail *string `json:"customerEmail,omitempty"`
	Id string `json:"id"`
	PaymentAmount float64 `json:"paymentAmount"`
	PaymentDate string `json:"paymentDate"`
	PaymentMethod string `json:"paymentMethod"`
}

// PaymentsSettingsGetBillingSettingsPublic is the typed data model for the payments_settings_get_billing_settings_public entity.
type PaymentsSettingsGetBillingSettingsPublic struct {
	AccountGoogleAnalyticsEnabled *bool `json:"accountGoogleAnalyticsEnabled,omitempty"`
	CheckoutPrefillEnabled bool `json:"checkoutPrefillEnabled"`
	CollectFullBillingAddress bool `json:"collectFullBillingAddress"`
	CollectPaymentMethodOnFile bool `json:"collectPaymentMethodOnFile"`
	DefaultFromEmailAddress string `json:"defaultFromEmailAddress"`
	PaymentsGoogleAnalyticsEnabled bool `json:"paymentsGoogleAnalyticsEnabled"`
	RecaptchaEnabled bool `json:"recaptchaEnabled"`
}

// PaymentsSettingsGetBillingSettingsPublicLoadMatch is the typed request payload for PaymentsSettingsGetBillingSettingsPublic.LoadTyped.
type PaymentsSettingsGetBillingSettingsPublicLoadMatch struct {
	AccountGoogleAnalyticsEnabled *bool `json:"accountGoogleAnalyticsEnabled,omitempty"`
	CheckoutPrefillEnabled *bool `json:"checkoutPrefillEnabled,omitempty"`
	CollectFullBillingAddress *bool `json:"collectFullBillingAddress,omitempty"`
	CollectPaymentMethodOnFile *bool `json:"collectPaymentMethodOnFile,omitempty"`
	DefaultFromEmailAddress *string `json:"defaultFromEmailAddress,omitempty"`
	PaymentsGoogleAnalyticsEnabled *bool `json:"paymentsGoogleAnalyticsEnabled,omitempty"`
	RecaptchaEnabled *bool `json:"recaptchaEnabled,omitempty"`
}

// PaymentsSettingsGetBillingSettingsPublicUpdateData is the typed request payload for PaymentsSettingsGetBillingSettingsPublic.UpdateTyped.
type PaymentsSettingsGetBillingSettingsPublicUpdateData struct {
	AccountGoogleAnalyticsEnabled *bool `json:"accountGoogleAnalyticsEnabled,omitempty"`
	CheckoutPrefillEnabled *bool `json:"checkoutPrefillEnabled,omitempty"`
	CollectFullBillingAddress *bool `json:"collectFullBillingAddress,omitempty"`
	CollectPaymentMethodOnFile *bool `json:"collectPaymentMethodOnFile,omitempty"`
	DefaultFromEmailAddress *string `json:"defaultFromEmailAddress,omitempty"`
	PaymentsGoogleAnalyticsEnabled *bool `json:"paymentsGoogleAnalyticsEnabled,omitempty"`
	RecaptchaEnabled *bool `json:"recaptchaEnabled,omitempty"`
}

// PaymentsSettingsGetCheckoutFeesPublic is the typed data model for the payments_settings_get_checkout_fees_public entity.
type PaymentsSettingsGetCheckoutFeesPublic struct {
	AppliesToPaymentType string `json:"appliesToPaymentType"`
	CheckoutFees []any `json:"checkoutFees"`
	FeeValue float64 `json:"feeValue"`
	FeeValueType string `json:"feeValueType"`
	Id string `json:"id"`
	Name string `json:"name"`
}

// PaymentsSettingsGetCheckoutFeesPublicListMatch is the typed request payload for PaymentsSettingsGetCheckoutFeesPublic.ListTyped.
type PaymentsSettingsGetCheckoutFeesPublicListMatch struct {
	AppliesToPaymentType *string `json:"appliesToPaymentType,omitempty"`
	CheckoutFees *[]any `json:"checkoutFees,omitempty"`
	FeeValue *float64 `json:"feeValue,omitempty"`
	FeeValueType *string `json:"feeValueType,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// PaymentsSettingsGetCheckoutFeesPublicUpdateData is the typed request payload for PaymentsSettingsGetCheckoutFeesPublic.UpdateTyped.
type PaymentsSettingsGetCheckoutFeesPublicUpdateData struct {
	AppliesToPaymentType *string `json:"appliesToPaymentType,omitempty"`
	CheckoutFees *[]any `json:"checkoutFees,omitempty"`
	FeeValue *float64 `json:"feeValue,omitempty"`
	FeeValueType *string `json:"feeValueType,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// PaymentsSettingsGetPolicySettingsPublic is the typed data model for the payments_settings_get_policy_settings_public entity.
type PaymentsSettingsGetPolicySettingsPublic struct {
	AcknowledgementRequired bool `json:"acknowledgementRequired"`
	CancellationPolicyText *string `json:"cancellationPolicyText,omitempty"`
	CustomPolicyEnabled bool `json:"customPolicyEnabled"`
	RefundPolicyText *string `json:"refundPolicyText,omitempty"`
	TermsOfServiceUrl *string `json:"termsOfServiceUrl,omitempty"`
}

// PaymentsSettingsGetPolicySettingsPublicLoadMatch is the typed request payload for PaymentsSettingsGetPolicySettingsPublic.LoadTyped.
type PaymentsSettingsGetPolicySettingsPublicLoadMatch struct {
	AcknowledgementRequired *bool `json:"acknowledgementRequired,omitempty"`
	CancellationPolicyText *string `json:"cancellationPolicyText,omitempty"`
	CustomPolicyEnabled *bool `json:"customPolicyEnabled,omitempty"`
	RefundPolicyText *string `json:"refundPolicyText,omitempty"`
	TermsOfServiceUrl *string `json:"termsOfServiceUrl,omitempty"`
}

// PaymentsSettingsGetPolicySettingsPublicUpdateData is the typed request payload for PaymentsSettingsGetPolicySettingsPublic.UpdateTyped.
type PaymentsSettingsGetPolicySettingsPublicUpdateData struct {
	AcknowledgementRequired *bool `json:"acknowledgementRequired,omitempty"`
	CancellationPolicyText *string `json:"cancellationPolicyText,omitempty"`
	CustomPolicyEnabled *bool `json:"customPolicyEnabled,omitempty"`
	RefundPolicyText *string `json:"refundPolicyText,omitempty"`
	TermsOfServiceUrl *string `json:"termsOfServiceUrl,omitempty"`
}

// PaymentsSettingsGetShippingSettingsPublic is the typed data model for the payments_settings_get_shipping_settings_public entity.
type PaymentsSettingsGetShippingSettingsPublic struct {
	CollectShippingAddressByDefault bool `json:"collectShippingAddressByDefault"`
	CountriesShippedTo []any `json:"countriesShippedTo"`
}

// PaymentsSettingsGetShippingSettingsPublicListMatch is the typed request payload for PaymentsSettingsGetShippingSettingsPublic.ListTyped.
type PaymentsSettingsGetShippingSettingsPublicListMatch struct {
	CollectShippingAddressByDefault *bool `json:"collectShippingAddressByDefault,omitempty"`
	CountriesShippedTo *[]any `json:"countriesShippedTo,omitempty"`
}

// PaymentsSettingsGetShippingSettingsPublicUpdateData is the typed request payload for PaymentsSettingsGetShippingSettingsPublic.UpdateTyped.
type PaymentsSettingsGetShippingSettingsPublicUpdateData struct {
	CollectShippingAddressByDefault *bool `json:"collectShippingAddressByDefault,omitempty"`
	CountriesShippedTo *[]any `json:"countriesShippedTo,omitempty"`
}

// PaymentsaccountsPaymentAccountView is the typed data model for the paymentsaccounts_payment_account_view entity.
type PaymentsaccountsPaymentAccountView struct {
	CanPayout bool `json:"canPayout"`
	CanTransact bool `json:"canTransact"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EligibleProcessorTypes []any `json:"eligibleProcessorTypes"`
	EnrollmentState string `json:"enrollmentState"`
	HasTransacted bool `json:"hasTransacted"`
	Id string `json:"id"`
	LastTransactedAt *string `json:"lastTransactedAt,omitempty"`
	ProcessorType string `json:"processorType"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PaymentsaccountsPaymentAccountViewListMatch is the typed request payload for PaymentsaccountsPaymentAccountView.ListTyped.
type PaymentsaccountsPaymentAccountViewListMatch struct {
	CanPayout *bool `json:"canPayout,omitempty"`
	CanTransact *bool `json:"canTransact,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EligibleProcessorTypes *[]any `json:"eligibleProcessorTypes,omitempty"`
	EnrollmentState *string `json:"enrollmentState,omitempty"`
	HasTransacted *bool `json:"hasTransacted,omitempty"`
	Id *string `json:"id,omitempty"`
	LastTransactedAt *string `json:"lastTransactedAt,omitempty"`
	ProcessorType *string `json:"processorType,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PriceBook is the typed data model for the price_book entity.
type PriceBook struct {
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	AutoAssignmentEnabled bool `json:"autoAssignmentEnabled"`
	CountOfIncludedProducts int `json:"countOfIncludedProducts"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	Status string `json:"status"`
	SupportedCurrencies []any `json:"supportedCurrencies"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PriceBookLoadMatch is the typed request payload for PriceBook.LoadTyped.
type PriceBookLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
}

// PriceBookListMatch is the typed request payload for PriceBook.ListTyped.
type PriceBookListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// PriceBookCreateData is the typed request payload for PriceBook.CreateTyped.
type PriceBookCreateData struct {
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	AutoAssignmentEnabled bool `json:"autoAssignmentEnabled"`
	CountOfIncludedProducts int `json:"countOfIncludedProducts"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	Status string `json:"status"`
	SupportedCurrencies []any `json:"supportedCurrencies"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PriceBookUpdateData is the typed request payload for PriceBook.UpdateTyped.
type PriceBookUpdateData struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	AutoAssignmentEnabled *bool `json:"autoAssignmentEnabled,omitempty"`
	CountOfIncludedProducts *int `json:"countOfIncludedProducts,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties *map[string]any `json:"customProperties,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Status *string `json:"status,omitempty"`
	SupportedCurrencies *[]any `json:"supportedCurrencies,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PriceBooksBatchResponsePriceBookItem is the typed data model for the price_books_batch_response_price_book_item entity.
type PriceBooksBatchResponsePriceBookItem struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// PriceBooksBatchResponsePriceBookItemCreateData is the typed request payload for PriceBooksBatchResponsePriceBookItem.CreateTyped.
type PriceBooksBatchResponsePriceBookItemCreateData struct {
	PriceBookId int `json:"price_book_id"`
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// PriceBooksCollectionResponsePriceBookItemResponseForward is the typed data model for the price_books_collection_response_price_book_item_response_forward entity.
type PriceBooksCollectionResponsePriceBookItemResponseForward struct {
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BillingFrequency *string `json:"billingFrequency,omitempty"`
	BillingPeriod *string `json:"billingPeriod,omitempty"`
	CostOfGoodsSold *string `json:"costOfGoodsSold,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Images *string `json:"images,omitempty"`
	Name *string `json:"name,omitempty"`
	PriceBookId *string `json:"priceBookId,omitempty"`
	Pricing map[string]any `json:"pricing"`
	ProductClassification *string `json:"productClassification,omitempty"`
	ProductId string `json:"productId"`
	ProductType *string `json:"productType,omitempty"`
	RecurringBillingTerms *string `json:"recurringBillingTerms,omitempty"`
	Sku *string `json:"sku,omitempty"`
	Status *string `json:"status,omitempty"`
	TaxCategory *string `json:"taxCategory,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PriceBooksCollectionResponsePriceBookItemResponseForwardListMatch is the typed request payload for PriceBooksCollectionResponsePriceBookItemResponseForward.ListTyped.
type PriceBooksCollectionResponsePriceBookItemResponseForwardListMatch struct {
	PriceBookId int `json:"price_book_id"`
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Property *[]any `json:"property,omitempty"`
}

// PriceBooksPriceBook is the typed data model for the price_books_price_book entity.
type PriceBooksPriceBook struct {
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	AutoAssignmentEnabled bool `json:"autoAssignmentEnabled"`
	CountOfIncludedProducts int `json:"countOfIncludedProducts"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	Status string `json:"status"`
	SupportedCurrencies []any `json:"supportedCurrencies"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PriceBooksPriceBookCreateData is the typed request payload for PriceBooksPriceBook.CreateTyped.
type PriceBooksPriceBookCreateData struct {
	PriceBookId int `json:"price_book_id"`
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	AutoAssignmentEnabled bool `json:"autoAssignmentEnabled"`
	CountOfIncludedProducts int `json:"countOfIncludedProducts"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	Status string `json:"status"`
	SupportedCurrencies []any `json:"supportedCurrencies"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// PriceBooksPriceBookItem is the typed data model for the price_books_price_book_item entity.
type PriceBooksPriceBookItem struct {
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BillingFrequency *string `json:"billingFrequency,omitempty"`
	BillingPeriod *string `json:"billingPeriod,omitempty"`
	CostOfGoodsSold *string `json:"costOfGoodsSold,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Images *string `json:"images,omitempty"`
	Name *string `json:"name,omitempty"`
	PriceBookId *string `json:"priceBookId,omitempty"`
	Pricing map[string]any `json:"pricing"`
	ProductClassification *string `json:"productClassification,omitempty"`
	ProductId string `json:"productId"`
	ProductType *string `json:"productType,omitempty"`
	RecurringBillingTerms *string `json:"recurringBillingTerms,omitempty"`
	Sku *string `json:"sku,omitempty"`
	Status *string `json:"status,omitempty"`
	TaxCategory *string `json:"taxCategory,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PriceBooksPriceBookItemLoadMatch is the typed request payload for PriceBooksPriceBookItem.LoadTyped.
type PriceBooksPriceBookItemLoadMatch struct {
	Id int `json:"id"`
	PriceBookId int `json:"price_book_id"`
	Archived *bool `json:"archived,omitempty"`
	Property *[]any `json:"property,omitempty"`
}

// PriceBooksPriceBookItemCreateData is the typed request payload for PriceBooksPriceBookItem.CreateTyped.
type PriceBooksPriceBookItemCreateData struct {
	PriceBookId int `json:"price_book_id"`
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BillingFrequency *string `json:"billingFrequency,omitempty"`
	BillingPeriod *string `json:"billingPeriod,omitempty"`
	CostOfGoodsSold *string `json:"costOfGoodsSold,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties map[string]any `json:"customProperties"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Images *string `json:"images,omitempty"`
	Name *string `json:"name,omitempty"`
	PriceBookId2 *string `json:"priceBookId,omitempty"`
	Pricing map[string]any `json:"pricing"`
	ProductClassification *string `json:"productClassification,omitempty"`
	ProductId string `json:"productId"`
	ProductType *string `json:"productType,omitempty"`
	RecurringBillingTerms *string `json:"recurringBillingTerms,omitempty"`
	Sku *string `json:"sku,omitempty"`
	Status *string `json:"status,omitempty"`
	TaxCategory *string `json:"taxCategory,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PriceBooksPriceBookItemUpdateData is the typed request payload for PriceBooksPriceBookItem.UpdateTyped.
type PriceBooksPriceBookItemUpdateData struct {
	Id int `json:"id"`
	PriceBookId int `json:"price_book_id"`
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BillingFrequency *string `json:"billingFrequency,omitempty"`
	BillingPeriod *string `json:"billingPeriod,omitempty"`
	CostOfGoodsSold *string `json:"costOfGoodsSold,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomProperties *map[string]any `json:"customProperties,omitempty"`
	Description *string `json:"description,omitempty"`
	Images *string `json:"images,omitempty"`
	Name *string `json:"name,omitempty"`
	PriceBookId2 *string `json:"priceBookId,omitempty"`
	Pricing *map[string]any `json:"pricing,omitempty"`
	ProductClassification *string `json:"productClassification,omitempty"`
	ProductId *string `json:"productId,omitempty"`
	ProductType *string `json:"productType,omitempty"`
	RecurringBillingTerms *string `json:"recurringBillingTerms,omitempty"`
	Sku *string `json:"sku,omitempty"`
	Status *string `json:"status,omitempty"`
	TaxCategory *string `json:"taxCategory,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PriceBooksPriceBookValidate is the typed data model for the price_books_price_book_validate entity.
type PriceBooksPriceBookValidate struct {
	Errors []any `json:"errors"`
	IsValid bool `json:"isValid"`
}

// PriceBooksPriceBookValidateCreateData is the typed request payload for PriceBooksPriceBookValidate.CreateTyped.
type PriceBooksPriceBookValidateCreateData struct {
	PriceBookId int `json:"price_book_id"`
	Errors []any `json:"errors"`
	IsValid bool `json:"isValid"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
