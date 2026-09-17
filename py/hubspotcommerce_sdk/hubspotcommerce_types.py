# Typed models for the HubspotCommerce SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Advanced(TypedDict):
    pass


class AdvancedCreateData(TypedDict):
    payment_crm_object_id: str


class Basic(TypedDict):
    pass


class BasicRemoveMatch(TypedDict):
    payment_link_id: str


class Batch(TypedDict):
    pass


class BatchCreateData(TypedDict):
    price_book_id: int


class ContractRequired(TypedDict):
    addressTypesToCollect: list
    allowedPaymentMethods: list
    automatedTaxesEnabled: bool
    customProperties: dict
    hubspotBillingEnabled: bool
    id: str
    lineItems: list
    ownerId: dict
    paymentEnabled: bool
    sellerCompanyDomain: dict
    sellerPhone: dict
    status: str
    storePaymentMethodAtCheckout: bool


class Contract(ContractRequired, total=False):
    allTransactionsFeeName: str
    allTransactionsFeePercentage: float
    annualContractValue: float
    billingAddress: dict
    billingCompanyId: str
    billingContactId: str
    billingStartDateOverride: str
    businessUnitId: str
    cardFeeName: str
    cardFeePercentage: float
    collectionProcess: str
    contractEffectiveDate: str
    contractSourceId: str
    createdAt: str
    currencyCode: str
    currentAnnualRecurringRevenue: float
    currentMonthlyRecurringRevenue: float
    dealId: str
    directDebitFeeName: str
    directDebitFeePercentage: float
    discountCode: str
    endDate: str
    externalPaymentMethodReferenceId: str
    language: str
    locale: str
    name: str
    netPaymentTerms: int
    paymentMethod: str
    poNumber: str
    preTerminationContractValue: float
    renewalContractId: str
    renewalDate: str
    sellerCompanyAddress: dict
    sellerCompanyName: str
    sellerEmail: str
    sellerFirstName: str
    sellerLastName: str
    sellerPhoneNumber: str
    startDate: str
    terminationDate: str
    totalBilledAmount: float
    totalBilledAmountPreTax: float
    totalCollectedFees: float
    totalCollectedTaxes: float
    totalContractValue: float
    totalPaidAmount: float
    updatedAt: str


class ContractLoadMatch(TypedDict):
    id: str


class ContractCreateDataRequired(TypedDict):
    addressTypesToCollect: list
    allowedPaymentMethods: list
    automatedTaxesEnabled: bool
    customProperties: dict
    hubspotBillingEnabled: bool
    id: str
    lineItems: list
    ownerId: dict
    paymentEnabled: bool
    sellerCompanyDomain: dict
    sellerPhone: dict
    status: str
    storePaymentMethodAtCheckout: bool


class ContractCreateData(ContractCreateDataRequired, total=False):
    allTransactionsFeeName: str
    allTransactionsFeePercentage: float
    annualContractValue: float
    billingAddress: dict
    billingCompanyId: str
    billingContactId: str
    billingStartDateOverride: str
    businessUnitId: str
    cardFeeName: str
    cardFeePercentage: float
    collectionProcess: str
    contractEffectiveDate: str
    contractSourceId: str
    createdAt: str
    currencyCode: str
    currentAnnualRecurringRevenue: float
    currentMonthlyRecurringRevenue: float
    dealId: str
    directDebitFeeName: str
    directDebitFeePercentage: float
    discountCode: str
    endDate: str
    externalPaymentMethodReferenceId: str
    language: str
    locale: str
    name: str
    netPaymentTerms: int
    paymentMethod: str
    poNumber: str
    preTerminationContractValue: float
    renewalContractId: str
    renewalDate: str
    sellerCompanyAddress: dict
    sellerCompanyName: str
    sellerEmail: str
    sellerFirstName: str
    sellerLastName: str
    sellerPhoneNumber: str
    startDate: str
    terminationDate: str
    totalBilledAmount: float
    totalBilledAmountPreTax: float
    totalCollectedFees: float
    totalCollectedTaxes: float
    totalContractValue: float
    totalPaidAmount: float
    updatedAt: str


class ContractUpdateDataRequired(TypedDict):
    id: str


class ContractUpdateData(ContractUpdateDataRequired, total=False):
    addressTypesToCollect: list
    allTransactionsFeeName: str
    allTransactionsFeePercentage: float
    allowedPaymentMethods: list
    annualContractValue: float
    automatedTaxesEnabled: bool
    billingAddress: dict
    billingCompanyId: str
    billingContactId: str
    billingStartDateOverride: str
    businessUnitId: str
    cardFeeName: str
    cardFeePercentage: float
    collectionProcess: str
    contractEffectiveDate: str
    contractSourceId: str
    createdAt: str
    currencyCode: str
    currentAnnualRecurringRevenue: float
    currentMonthlyRecurringRevenue: float
    customProperties: dict
    dealId: str
    directDebitFeeName: str
    directDebitFeePercentage: float
    discountCode: str
    endDate: str
    externalPaymentMethodReferenceId: str
    hubspotBillingEnabled: bool
    language: str
    lineItems: list
    locale: str
    name: str
    netPaymentTerms: int
    ownerId: dict
    paymentEnabled: bool
    paymentMethod: str
    poNumber: str
    preTerminationContractValue: float
    renewalContractId: str
    renewalDate: str
    sellerCompanyAddress: dict
    sellerCompanyDomain: dict
    sellerCompanyName: str
    sellerEmail: str
    sellerFirstName: str
    sellerLastName: str
    sellerPhone: dict
    sellerPhoneNumber: str
    startDate: str
    status: str
    storePaymentMethodAtCheckout: bool
    terminationDate: str
    totalBilledAmount: float
    totalBilledAmountPreTax: float
    totalCollectedFees: float
    totalCollectedTaxes: float
    totalContractValue: float
    totalPaidAmount: float
    updatedAt: str


class ContractsContractRequired(TypedDict):
    addressTypesToCollect: list
    allowedPaymentMethods: list
    automatedTaxesEnabled: bool
    customProperties: dict
    hubspotBillingEnabled: bool
    id: str
    lineItems: list
    paymentEnabled: bool
    status: str
    storePaymentMethodAtCheckout: bool


class ContractsContract(ContractsContractRequired, total=False):
    allTransactionsFeeName: str
    allTransactionsFeePercentage: float
    annualContractValue: float
    billingAddress: dict
    billingCompanyId: str
    billingContactId: str
    billingStartDateOverride: str
    businessUnitId: str
    cardFeeName: str
    cardFeePercentage: float
    collectionProcess: str
    contractEffectiveDate: str
    contractSourceId: str
    createdAt: str
    currencyCode: str
    currentAnnualRecurringRevenue: float
    currentMonthlyRecurringRevenue: float
    dealId: str
    directDebitFeeName: str
    directDebitFeePercentage: float
    discountCode: str
    endDate: str
    externalPaymentMethodReferenceId: str
    language: str
    locale: str
    name: str
    netPaymentTerms: int
    paymentMethod: str
    poNumber: str
    preTerminationContractValue: float
    renewalContractId: str
    renewalDate: str
    sellerCompanyAddress: dict
    sellerCompanyName: str
    sellerEmail: str
    sellerFirstName: str
    sellerLastName: str
    sellerPhoneNumber: str
    startDate: str
    terminationDate: str
    totalBilledAmount: float
    totalBilledAmountPreTax: float
    totalCollectedFees: float
    totalCollectedTaxes: float
    totalContractValue: float
    totalPaidAmount: float
    updatedAt: str


class ContractsContractCreateDataRequired(TypedDict):
    contract_id: str
    addressTypesToCollect: list
    allowedPaymentMethods: list
    automatedTaxesEnabled: bool
    customProperties: dict
    hubspotBillingEnabled: bool
    id: str
    lineItems: list
    paymentEnabled: bool
    status: str
    storePaymentMethodAtCheckout: bool


class ContractsContractCreateData(ContractsContractCreateDataRequired, total=False):
    allTransactionsFeeName: str
    allTransactionsFeePercentage: float
    annualContractValue: float
    billingAddress: dict
    billingCompanyId: str
    billingContactId: str
    billingStartDateOverride: str
    businessUnitId: str
    cardFeeName: str
    cardFeePercentage: float
    collectionProcess: str
    contractEffectiveDate: str
    contractSourceId: str
    createdAt: str
    currencyCode: str
    currentAnnualRecurringRevenue: float
    currentMonthlyRecurringRevenue: float
    dealId: str
    directDebitFeeName: str
    directDebitFeePercentage: float
    discountCode: str
    endDate: str
    externalPaymentMethodReferenceId: str
    language: str
    locale: str
    name: str
    netPaymentTerms: int
    paymentMethod: str
    poNumber: str
    preTerminationContractValue: float
    renewalContractId: str
    renewalDate: str
    sellerCompanyAddress: dict
    sellerCompanyName: str
    sellerEmail: str
    sellerFirstName: str
    sellerLastName: str
    sellerPhoneNumber: str
    startDate: str
    terminationDate: str
    totalBilledAmount: float
    totalBilledAmountPreTax: float
    totalCollectedFees: float
    totalCollectedTaxes: float
    totalContractValue: float
    totalPaidAmount: float
    updatedAt: str


class ContractsContractChangeRequired(TypedDict):
    contractId: str
    deltaLineItems: list
    id: str
    lineItemChanges: list
    proposedLineItems: list
    prorating: bool
    status: str
    type: str


class ContractsContractChange(ContractsContractChangeRequired, total=False):
    createdAt: str
    effectiveDate: str
    name: str
    quoteId: str
    updatedAt: str


class ContractsContractChangeLoadMatch(TypedDict):
    id: str


class ContractsContractChangeListMatch(TypedDict):
    contract_id: str


class ContractsContractChangeCreateDataRequired(TypedDict):
    contractId: str
    deltaLineItems: list
    id: str
    lineItemChanges: list
    proposedLineItems: list
    prorating: bool
    status: str
    type: str


class ContractsContractChangeCreateData(ContractsContractChangeCreateDataRequired, total=False):
    createdAt: str
    effectiveDate: str
    name: str
    quoteId: str
    updatedAt: str


class ContractsContractChangeUpdateDataRequired(TypedDict):
    id: str


class ContractsContractChangeUpdateData(ContractsContractChangeUpdateDataRequired, total=False):
    contractId: str
    createdAt: str
    deltaLineItems: list
    effectiveDate: str
    lineItemChanges: list
    name: str
    proposedLineItems: list
    prorating: bool
    quoteId: str
    status: str
    type: str
    updatedAt: str


class ContractsContractChangePreview(TypedDict):
    deltaLineItems: list
    proposedLineItems: list


class ContractsContractChangePreviewCreateData(TypedDict):
    deltaLineItems: list
    proposedLineItems: list


class ContractsQuoteRequired(TypedDict):
    quoteTemplateId: str


class ContractsQuote(ContractsQuoteRequired, total=False):
    dealId: str
    dealPipeline: str
    dealStage: str
    name: str


class ContractsQuoteCreateDataRequired(TypedDict):
    contract_id: str
    quoteTemplateId: str


class ContractsQuoteCreateData(ContractsQuoteCreateDataRequired, total=False):
    dealId: str
    dealPipeline: str
    dealStage: str
    name: str


class Item(TypedDict, total=False):
    id: str


class ItemRemoveMatch(TypedDict):
    id: int
    price_book_id: int


class PaymentLinkRequired(TypedDict):
    acceptedPaymentMethods: list
    additionalFormFields: list
    archived: bool
    automatedSalesTaxEnabled: bool
    checkoutFeeIds: list
    collectFullBillingAddress: bool
    collectShippingAddress: bool
    completedPurchaseCount: int
    createContractOnPurchase: bool
    currencyCode: str
    dealConfigurations: dict
    discount: dict
    discountCodeEnabled: bool
    discounts: list
    enableDefaultCheckoutFees: bool
    feeObjectIds: list
    fees: list
    formGuid: str
    id: str
    includeEmailInSuccessRedirect: bool
    isOneTimeUseEnabled: bool
    lineItemObjectIds: list
    lineItems: list
    paymentLinkName: str
    paymentLinkUrl: str
    state: str
    storePaymentMethodAtCheckout: bool
    taxObjectIds: list
    taxes: list


class PaymentLink(PaymentLinkRequired, total=False):
    archivedAt: str
    businessUnitId: str
    createdAt: str
    descriptionHtml: str
    discountObjectId: str
    domainId: str
    expirationSettings: dict
    successUrl: str
    updatedAt: str


class PaymentLinkLoadMatchRequired(TypedDict):
    id: str


class PaymentLinkLoadMatch(PaymentLinkLoadMatchRequired, total=False):
    archived: bool


class PaymentLinkListMatch(TypedDict, total=False):
    after: str
    archived: bool
    created_after: int
    created_at: int
    created_before: int
    limit: int
    sort: str
    updated_after: int
    updated_at: int
    updated_before: int


class PaymentLinkCreateDataRequired(TypedDict):
    acceptedPaymentMethods: list
    additionalFormFields: list
    archived: bool
    automatedSalesTaxEnabled: bool
    checkoutFeeIds: list
    collectFullBillingAddress: bool
    collectShippingAddress: bool
    completedPurchaseCount: int
    createContractOnPurchase: bool
    currencyCode: str
    dealConfigurations: dict
    discount: dict
    discountCodeEnabled: bool
    discounts: list
    enableDefaultCheckoutFees: bool
    feeObjectIds: list
    fees: list
    formGuid: str
    id: str
    includeEmailInSuccessRedirect: bool
    isOneTimeUseEnabled: bool
    lineItemObjectIds: list
    lineItems: list
    paymentLinkName: str
    paymentLinkUrl: str
    state: str
    storePaymentMethodAtCheckout: bool
    taxObjectIds: list
    taxes: list


class PaymentLinkCreateData(PaymentLinkCreateDataRequired, total=False):
    archivedAt: str
    businessUnitId: str
    createdAt: str
    descriptionHtml: str
    discountObjectId: str
    domainId: str
    expirationSettings: dict
    successUrl: str
    updatedAt: str


class PaymentLinkUpdateDataRequired(TypedDict):
    id: str


class PaymentLinkUpdateData(PaymentLinkUpdateDataRequired, total=False):
    acceptedPaymentMethods: list
    additionalFormFields: list
    archived: bool
    archivedAt: str
    automatedSalesTaxEnabled: bool
    businessUnitId: str
    checkoutFeeIds: list
    collectFullBillingAddress: bool
    collectShippingAddress: bool
    completedPurchaseCount: int
    createContractOnPurchase: bool
    createdAt: str
    currencyCode: str
    dealConfigurations: dict
    descriptionHtml: str
    discount: dict
    discountCodeEnabled: bool
    discountObjectId: str
    discounts: list
    domainId: str
    enableDefaultCheckoutFees: bool
    expirationSettings: dict
    feeObjectIds: list
    fees: list
    formGuid: str
    includeEmailInSuccessRedirect: bool
    isOneTimeUseEnabled: bool
    lineItemObjectIds: list
    lineItems: list
    paymentLinkName: str
    paymentLinkUrl: str
    state: str
    storePaymentMethodAtCheckout: bool
    successUrl: str
    taxObjectIds: list
    taxes: list
    updatedAt: str


class PaymentMethodsCommercePaymentMethodSettingsPublic(TypedDict):
    activeCurrencies: list
    commercePaymentMethod: str
    isDefaultOn: bool
    paymentMethodSettings: list
    paymentMethodUpdates: list
    supportedCurrencies: list


class PaymentMethodsCommercePaymentMethodSettingsPublicListMatch(TypedDict, total=False):
    activeCurrencies: list
    commercePaymentMethod: str
    isDefaultOn: bool
    paymentMethodSettings: list
    paymentMethodUpdates: list
    supportedCurrencies: list


class PaymentMethodsCommercePaymentMethodSettingsPublicUpdateData(TypedDict, total=False):
    activeCurrencies: list
    commercePaymentMethod: str
    isDefaultOn: bool
    paymentMethodSettings: list
    paymentMethodUpdates: list
    supportedCurrencies: list


class PaymentsActionResponseWithSingleResultSimplePublicObjectRequired(TypedDict):
    category: str
    context: dict
    errors: list
    links: dict
    message: str
    status: str


class PaymentsActionResponseWithSingleResultSimplePublicObject(PaymentsActionResponseWithSingleResultSimplePublicObjectRequired, total=False):
    id: str
    subCategory: dict


class PaymentsActionResponseWithSingleResultSimplePublicObjectListMatch(TypedDict):
    payment_crm_object_id: str
    task_id: str


class PaymentsCreateManualPaymentPublicRequired(TypedDict):
    associations: list
    currencyCode: str
    id: str
    paymentAmount: float
    paymentDate: str
    paymentMethod: str


class PaymentsCreateManualPaymentPublic(PaymentsCreateManualPaymentPublicRequired, total=False):
    billingAddress: dict
    customerEmail: str


class PaymentsCreateManualPaymentPublicCreateDataRequired(TypedDict):
    associations: list
    currencyCode: str
    id: str
    paymentAmount: float
    paymentDate: str
    paymentMethod: str


class PaymentsCreateManualPaymentPublicCreateData(PaymentsCreateManualPaymentPublicCreateDataRequired, total=False):
    billingAddress: dict
    customerEmail: str


class PaymentsSettingsGetBillingSettingsPublicRequired(TypedDict):
    checkoutPrefillEnabled: bool
    collectFullBillingAddress: bool
    collectPaymentMethodOnFile: bool
    defaultFromEmailAddress: str
    paymentsGoogleAnalyticsEnabled: bool
    recaptchaEnabled: bool


class PaymentsSettingsGetBillingSettingsPublic(PaymentsSettingsGetBillingSettingsPublicRequired, total=False):
    accountGoogleAnalyticsEnabled: bool


class PaymentsSettingsGetBillingSettingsPublicLoadMatch(TypedDict, total=False):
    accountGoogleAnalyticsEnabled: bool
    checkoutPrefillEnabled: bool
    collectFullBillingAddress: bool
    collectPaymentMethodOnFile: bool
    defaultFromEmailAddress: str
    paymentsGoogleAnalyticsEnabled: bool
    recaptchaEnabled: bool


class PaymentsSettingsGetBillingSettingsPublicUpdateData(TypedDict, total=False):
    accountGoogleAnalyticsEnabled: bool
    checkoutPrefillEnabled: bool
    collectFullBillingAddress: bool
    collectPaymentMethodOnFile: bool
    defaultFromEmailAddress: str
    paymentsGoogleAnalyticsEnabled: bool
    recaptchaEnabled: bool


class PaymentsSettingsGetCheckoutFeesPublic(TypedDict):
    appliesToPaymentType: str
    checkoutFees: list
    feeValue: float
    feeValueType: str
    id: str
    name: str


class PaymentsSettingsGetCheckoutFeesPublicListMatch(TypedDict, total=False):
    appliesToPaymentType: str
    checkoutFees: list
    feeValue: float
    feeValueType: str
    id: str
    name: str


class PaymentsSettingsGetCheckoutFeesPublicUpdateData(TypedDict, total=False):
    appliesToPaymentType: str
    checkoutFees: list
    feeValue: float
    feeValueType: str
    id: str
    name: str


class PaymentsSettingsGetPolicySettingsPublicRequired(TypedDict):
    acknowledgementRequired: bool
    customPolicyEnabled: bool


class PaymentsSettingsGetPolicySettingsPublic(PaymentsSettingsGetPolicySettingsPublicRequired, total=False):
    cancellationPolicyText: str
    refundPolicyText: str
    termsOfServiceUrl: str


class PaymentsSettingsGetPolicySettingsPublicLoadMatch(TypedDict, total=False):
    acknowledgementRequired: bool
    cancellationPolicyText: str
    customPolicyEnabled: bool
    refundPolicyText: str
    termsOfServiceUrl: str


class PaymentsSettingsGetPolicySettingsPublicUpdateData(TypedDict, total=False):
    acknowledgementRequired: bool
    cancellationPolicyText: str
    customPolicyEnabled: bool
    refundPolicyText: str
    termsOfServiceUrl: str


class PaymentsSettingsGetShippingSettingsPublic(TypedDict):
    collectShippingAddressByDefault: bool
    countriesShippedTo: list


class PaymentsSettingsGetShippingSettingsPublicListMatch(TypedDict, total=False):
    collectShippingAddressByDefault: bool
    countriesShippedTo: list


class PaymentsSettingsGetShippingSettingsPublicUpdateData(TypedDict, total=False):
    collectShippingAddressByDefault: bool
    countriesShippedTo: list


class PaymentsaccountsPaymentAccountViewRequired(TypedDict):
    canPayout: bool
    canTransact: bool
    eligibleProcessorTypes: list
    enrollmentState: str
    hasTransacted: bool
    id: str
    processorType: str


class PaymentsaccountsPaymentAccountView(PaymentsaccountsPaymentAccountViewRequired, total=False):
    createdAt: str
    lastTransactedAt: str
    updatedAt: str


class PaymentsaccountsPaymentAccountViewListMatch(TypedDict, total=False):
    canPayout: bool
    canTransact: bool
    createdAt: str
    eligibleProcessorTypes: list
    enrollmentState: str
    hasTransacted: bool
    id: str
    lastTransactedAt: str
    processorType: str
    updatedAt: str


class PriceBookRequired(TypedDict):
    autoAssignmentEnabled: bool
    countOfIncludedProducts: int
    customProperties: dict
    id: str
    status: str
    supportedCurrencies: list


class PriceBook(PriceBookRequired, total=False):
    archived: bool
    archivedAt: str
    createdAt: str
    description: str
    name: str
    updatedAt: str


class PriceBookLoadMatchRequired(TypedDict):
    id: int


class PriceBookLoadMatch(PriceBookLoadMatchRequired, total=False):
    archived: bool


class PriceBookListMatch(TypedDict, total=False):
    after: str
    archived: bool
    limit: int


class PriceBookCreateDataRequired(TypedDict):
    autoAssignmentEnabled: bool
    countOfIncludedProducts: int
    customProperties: dict
    id: str
    status: str
    supportedCurrencies: list


class PriceBookCreateData(PriceBookCreateDataRequired, total=False):
    archived: bool
    archivedAt: str
    createdAt: str
    description: str
    name: str
    updatedAt: str


class PriceBookUpdateDataRequired(TypedDict):
    id: int


class PriceBookUpdateData(PriceBookUpdateDataRequired, total=False):
    archived: bool
    archivedAt: str
    autoAssignmentEnabled: bool
    countOfIncludedProducts: int
    createdAt: str
    customProperties: dict
    description: str
    name: str
    status: str
    supportedCurrencies: list
    updatedAt: str


class PriceBooksBatchResponsePriceBookItemRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class PriceBooksBatchResponsePriceBookItem(PriceBooksBatchResponsePriceBookItemRequired, total=False):
    links: dict
    requestedAt: str


class PriceBooksBatchResponsePriceBookItemCreateDataRequired(TypedDict):
    price_book_id: int
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class PriceBooksBatchResponsePriceBookItemCreateData(PriceBooksBatchResponsePriceBookItemCreateDataRequired, total=False):
    links: dict
    requestedAt: str


class PriceBooksCollectionResponsePriceBookItemResponseForwardRequired(TypedDict):
    customProperties: dict
    id: str
    pricing: dict
    productId: str


class PriceBooksCollectionResponsePriceBookItemResponseForward(PriceBooksCollectionResponsePriceBookItemResponseForwardRequired, total=False):
    archived: bool
    archivedAt: str
    billingFrequency: str
    billingPeriod: str
    costOfGoodsSold: str
    createdAt: str
    description: str
    images: str
    name: str
    priceBookId: str
    productClassification: str
    productType: str
    recurringBillingTerms: str
    sku: str
    status: str
    taxCategory: str
    updatedAt: str
    url: str


class PriceBooksCollectionResponsePriceBookItemResponseForwardListMatchRequired(TypedDict):
    price_book_id: int


class PriceBooksCollectionResponsePriceBookItemResponseForwardListMatch(PriceBooksCollectionResponsePriceBookItemResponseForwardListMatchRequired, total=False):
    after: str
    limit: int
    property: list


class PriceBooksPriceBookRequired(TypedDict):
    autoAssignmentEnabled: bool
    countOfIncludedProducts: int
    customProperties: dict
    id: str
    status: str
    supportedCurrencies: list


class PriceBooksPriceBook(PriceBooksPriceBookRequired, total=False):
    archived: bool
    archivedAt: str
    createdAt: str
    description: str
    name: str
    updatedAt: str


class PriceBooksPriceBookCreateDataRequired(TypedDict):
    price_book_id: int
    autoAssignmentEnabled: bool
    countOfIncludedProducts: int
    customProperties: dict
    id: str
    status: str
    supportedCurrencies: list


class PriceBooksPriceBookCreateData(PriceBooksPriceBookCreateDataRequired, total=False):
    archived: bool
    archivedAt: str
    createdAt: str
    description: str
    name: str
    updatedAt: str


class PriceBooksPriceBookItemRequired(TypedDict):
    customProperties: dict
    id: str
    pricing: dict
    productId: str


class PriceBooksPriceBookItem(PriceBooksPriceBookItemRequired, total=False):
    archived: bool
    archivedAt: str
    billingFrequency: str
    billingPeriod: str
    costOfGoodsSold: str
    createdAt: str
    description: str
    images: str
    name: str
    priceBookId: str
    productClassification: str
    productType: str
    recurringBillingTerms: str
    sku: str
    status: str
    taxCategory: str
    updatedAt: str
    url: str


class PriceBooksPriceBookItemLoadMatchRequired(TypedDict):
    id: int
    price_book_id: int


class PriceBooksPriceBookItemLoadMatch(PriceBooksPriceBookItemLoadMatchRequired, total=False):
    archived: bool
    property: list


class PriceBooksPriceBookItemCreateDataRequired(TypedDict):
    price_book_id: int
    customProperties: dict
    id: str
    pricing: dict
    productId: str


class PriceBooksPriceBookItemCreateData(PriceBooksPriceBookItemCreateDataRequired, total=False):
    archived: bool
    archivedAt: str
    billingFrequency: str
    billingPeriod: str
    costOfGoodsSold: str
    createdAt: str
    description: str
    images: str
    name: str
    priceBookId: str
    productClassification: str
    productType: str
    recurringBillingTerms: str
    sku: str
    status: str
    taxCategory: str
    updatedAt: str
    url: str


class PriceBooksPriceBookItemUpdateDataRequired(TypedDict):
    id: int
    price_book_id: int


class PriceBooksPriceBookItemUpdateData(PriceBooksPriceBookItemUpdateDataRequired, total=False):
    archived: bool
    archivedAt: str
    billingFrequency: str
    billingPeriod: str
    costOfGoodsSold: str
    createdAt: str
    customProperties: dict
    description: str
    images: str
    name: str
    priceBookId: str
    pricing: dict
    productClassification: str
    productId: str
    productType: str
    recurringBillingTerms: str
    sku: str
    status: str
    taxCategory: str
    updatedAt: str
    url: str


class PriceBooksPriceBookValidate(TypedDict):
    errors: list
    isValid: bool


class PriceBooksPriceBookValidateCreateData(TypedDict):
    price_book_id: int
    errors: list
    isValid: bool
