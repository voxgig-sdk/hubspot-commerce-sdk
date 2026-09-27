export interface Advanced {
}
export interface AdvancedCreateData {
    payment_crm_object_id: string;
}
export interface Basic {
}
export interface BasicRemoveMatch {
    payment_link_id: string;
}
export interface Batch {
}
export interface BatchCreateData {
    price_book_id: number;
    $action?: string;
    [action: string]: any;
}
export interface Contract {
    addressTypesToCollect: any[];
    allTransactionsFeeName?: string;
    allTransactionsFeePercentage?: number;
    allowedPaymentMethods: any[];
    annualContractValue?: number;
    automatedTaxesEnabled: boolean;
    billingAddress?: Record<string, any>;
    billingCompanyId?: string;
    billingContactId?: string;
    billingStartDateOverride?: string;
    businessUnitId?: string;
    cardFeeName?: string;
    cardFeePercentage?: number;
    collectionProcess?: string;
    contractEffectiveDate?: string;
    contractSourceId?: string;
    createdAt?: string;
    currencyCode?: string;
    currentAnnualRecurringRevenue?: number;
    currentMonthlyRecurringRevenue?: number;
    customProperties: Record<string, any>;
    dealId?: string;
    directDebitFeeName?: string;
    directDebitFeePercentage?: number;
    discountCode?: string;
    endDate?: string;
    externalPaymentMethodReferenceId?: string;
    hubspotBillingEnabled: boolean;
    id: string;
    language?: string;
    lineItems: any[];
    locale?: string;
    name?: string;
    netPaymentTerms?: number;
    ownerId: Record<string, any>;
    paymentEnabled: boolean;
    paymentMethod?: string;
    poNumber?: string;
    preTerminationContractValue?: number;
    renewalContractId?: string;
    renewalDate?: string;
    sellerCompanyAddress?: Record<string, any>;
    sellerCompanyDomain: Record<string, any>;
    sellerCompanyName?: string;
    sellerEmail?: string;
    sellerFirstName?: string;
    sellerLastName?: string;
    sellerPhone: Record<string, any>;
    sellerPhoneNumber?: string;
    startDate?: string;
    status: string;
    storePaymentMethodAtCheckout: boolean;
    terminationDate?: string;
    totalBilledAmount?: number;
    totalBilledAmountPreTax?: number;
    totalCollectedFees?: number;
    totalCollectedTaxes?: number;
    totalContractValue?: number;
    totalPaidAmount?: number;
    updatedAt?: string;
}
export interface ContractLoadMatch {
    id: string;
}
export interface ContractCreateData {
    addressTypesToCollect: any[];
    allTransactionsFeeName?: string;
    allTransactionsFeePercentage?: number;
    allowedPaymentMethods: any[];
    annualContractValue?: number;
    automatedTaxesEnabled: boolean;
    billingAddress?: Record<string, any>;
    billingCompanyId?: string;
    billingContactId?: string;
    billingStartDateOverride?: string;
    businessUnitId?: string;
    cardFeeName?: string;
    cardFeePercentage?: number;
    collectionProcess?: string;
    contractEffectiveDate?: string;
    contractSourceId?: string;
    createdAt?: string;
    currencyCode?: string;
    currentAnnualRecurringRevenue?: number;
    currentMonthlyRecurringRevenue?: number;
    customProperties: Record<string, any>;
    dealId?: string;
    directDebitFeeName?: string;
    directDebitFeePercentage?: number;
    discountCode?: string;
    endDate?: string;
    externalPaymentMethodReferenceId?: string;
    hubspotBillingEnabled: boolean;
    id: string;
    language?: string;
    lineItems: any[];
    locale?: string;
    name?: string;
    netPaymentTerms?: number;
    ownerId: Record<string, any>;
    paymentEnabled: boolean;
    paymentMethod?: string;
    poNumber?: string;
    preTerminationContractValue?: number;
    renewalContractId?: string;
    renewalDate?: string;
    sellerCompanyAddress?: Record<string, any>;
    sellerCompanyDomain: Record<string, any>;
    sellerCompanyName?: string;
    sellerEmail?: string;
    sellerFirstName?: string;
    sellerLastName?: string;
    sellerPhone: Record<string, any>;
    sellerPhoneNumber?: string;
    startDate?: string;
    status: string;
    storePaymentMethodAtCheckout: boolean;
    terminationDate?: string;
    totalBilledAmount?: number;
    totalBilledAmountPreTax?: number;
    totalCollectedFees?: number;
    totalCollectedTaxes?: number;
    totalContractValue?: number;
    totalPaidAmount?: number;
    updatedAt?: string;
}
export interface ContractUpdateData {
    id: string;
    addressTypesToCollect?: any[];
    allTransactionsFeeName?: string;
    allTransactionsFeePercentage?: number;
    allowedPaymentMethods?: any[];
    annualContractValue?: number;
    automatedTaxesEnabled?: boolean;
    billingAddress?: Record<string, any>;
    billingCompanyId?: string;
    billingContactId?: string;
    billingStartDateOverride?: string;
    businessUnitId?: string;
    cardFeeName?: string;
    cardFeePercentage?: number;
    collectionProcess?: string;
    contractEffectiveDate?: string;
    contractSourceId?: string;
    createdAt?: string;
    currencyCode?: string;
    currentAnnualRecurringRevenue?: number;
    currentMonthlyRecurringRevenue?: number;
    customProperties?: Record<string, any>;
    dealId?: string;
    directDebitFeeName?: string;
    directDebitFeePercentage?: number;
    discountCode?: string;
    endDate?: string;
    externalPaymentMethodReferenceId?: string;
    hubspotBillingEnabled?: boolean;
    language?: string;
    lineItems?: any[];
    locale?: string;
    name?: string;
    netPaymentTerms?: number;
    ownerId?: Record<string, any>;
    paymentEnabled?: boolean;
    paymentMethod?: string;
    poNumber?: string;
    preTerminationContractValue?: number;
    renewalContractId?: string;
    renewalDate?: string;
    sellerCompanyAddress?: Record<string, any>;
    sellerCompanyDomain?: Record<string, any>;
    sellerCompanyName?: string;
    sellerEmail?: string;
    sellerFirstName?: string;
    sellerLastName?: string;
    sellerPhone?: Record<string, any>;
    sellerPhoneNumber?: string;
    startDate?: string;
    status?: string;
    storePaymentMethodAtCheckout?: boolean;
    terminationDate?: string;
    totalBilledAmount?: number;
    totalBilledAmountPreTax?: number;
    totalCollectedFees?: number;
    totalCollectedTaxes?: number;
    totalContractValue?: number;
    totalPaidAmount?: number;
    updatedAt?: string;
}
export interface ContractsContract {
    addressTypesToCollect: any[];
    allTransactionsFeeName?: string;
    allTransactionsFeePercentage?: number;
    allowedPaymentMethods: any[];
    annualContractValue?: number;
    automatedTaxesEnabled: boolean;
    billingAddress?: Record<string, any>;
    billingCompanyId?: string;
    billingContactId?: string;
    billingStartDateOverride?: string;
    businessUnitId?: string;
    cardFeeName?: string;
    cardFeePercentage?: number;
    collectionProcess?: string;
    contractEffectiveDate?: string;
    contractSourceId?: string;
    createdAt?: string;
    currencyCode?: string;
    currentAnnualRecurringRevenue?: number;
    currentMonthlyRecurringRevenue?: number;
    customProperties: Record<string, any>;
    dealId?: string;
    directDebitFeeName?: string;
    directDebitFeePercentage?: number;
    discountCode?: string;
    endDate?: string;
    externalPaymentMethodReferenceId?: string;
    hubspotBillingEnabled: boolean;
    id: string;
    language?: string;
    lineItems: any[];
    locale?: string;
    name?: string;
    netPaymentTerms?: number;
    paymentEnabled: boolean;
    paymentMethod?: string;
    poNumber?: string;
    preTerminationContractValue?: number;
    renewalContractId?: string;
    renewalDate?: string;
    sellerCompanyAddress?: Record<string, any>;
    sellerCompanyName?: string;
    sellerEmail?: string;
    sellerFirstName?: string;
    sellerLastName?: string;
    sellerPhoneNumber?: string;
    startDate?: string;
    status: string;
    storePaymentMethodAtCheckout: boolean;
    terminationDate?: string;
    totalBilledAmount?: number;
    totalBilledAmountPreTax?: number;
    totalCollectedFees?: number;
    totalCollectedTaxes?: number;
    totalContractValue?: number;
    totalPaidAmount?: number;
    updatedAt?: string;
}
export interface ContractsContractCreateData {
    contract_id: string;
    addressTypesToCollect: any[];
    allTransactionsFeeName?: string;
    allTransactionsFeePercentage?: number;
    allowedPaymentMethods: any[];
    annualContractValue?: number;
    automatedTaxesEnabled: boolean;
    billingAddress?: Record<string, any>;
    billingCompanyId?: string;
    billingContactId?: string;
    billingStartDateOverride?: string;
    businessUnitId?: string;
    cardFeeName?: string;
    cardFeePercentage?: number;
    collectionProcess?: string;
    contractEffectiveDate?: string;
    contractSourceId?: string;
    createdAt?: string;
    currencyCode?: string;
    currentAnnualRecurringRevenue?: number;
    currentMonthlyRecurringRevenue?: number;
    customProperties: Record<string, any>;
    dealId?: string;
    directDebitFeeName?: string;
    directDebitFeePercentage?: number;
    discountCode?: string;
    endDate?: string;
    externalPaymentMethodReferenceId?: string;
    hubspotBillingEnabled: boolean;
    id: string;
    language?: string;
    lineItems: any[];
    locale?: string;
    name?: string;
    netPaymentTerms?: number;
    paymentEnabled: boolean;
    paymentMethod?: string;
    poNumber?: string;
    preTerminationContractValue?: number;
    renewalContractId?: string;
    renewalDate?: string;
    sellerCompanyAddress?: Record<string, any>;
    sellerCompanyName?: string;
    sellerEmail?: string;
    sellerFirstName?: string;
    sellerLastName?: string;
    sellerPhoneNumber?: string;
    startDate?: string;
    status: string;
    storePaymentMethodAtCheckout: boolean;
    terminationDate?: string;
    totalBilledAmount?: number;
    totalBilledAmountPreTax?: number;
    totalCollectedFees?: number;
    totalCollectedTaxes?: number;
    totalContractValue?: number;
    totalPaidAmount?: number;
    updatedAt?: string;
}
export interface ContractsContractChange {
    contractId: string;
    createdAt?: string;
    deltaLineItems: any[];
    effectiveDate?: string;
    id: string;
    lineItemChanges: any[];
    name?: string;
    proposedLineItems: any[];
    prorating: boolean;
    quoteId?: string;
    status: string;
    type: string;
    updatedAt?: string;
}
export interface ContractsContractChangeLoadMatch {
    id: string;
}
export interface ContractsContractChangeCreateData {
    contractId: string;
    createdAt?: string;
    deltaLineItems: any[];
    effectiveDate?: string;
    id: string;
    lineItemChanges: any[];
    name?: string;
    proposedLineItems: any[];
    prorating: boolean;
    quoteId?: string;
    status: string;
    type: string;
    updatedAt?: string;
}
export interface ContractsContractChangeUpdateData {
    id: string;
    contractId?: string;
    createdAt?: string;
    deltaLineItems?: any[];
    effectiveDate?: string;
    lineItemChanges?: any[];
    name?: string;
    proposedLineItems?: any[];
    prorating?: boolean;
    quoteId?: string;
    status?: string;
    type?: string;
    updatedAt?: string;
}
export interface ContractsContractChangePreview {
    deltaLineItems: any[];
    proposedLineItems: any[];
}
export interface ContractsContractChangePreviewCreateData {
    deltaLineItems: any[];
    proposedLineItems: any[];
}
export interface ContractsContractChangeSummary {
    contractId: string;
    createdAt?: string;
    effectiveDate?: string;
    id: string;
    lineItemChanges: any[];
    name?: string;
    prorating: boolean;
    quoteId?: string;
    status: string;
    type: string;
    updatedAt?: string;
}
export interface ContractsContractChangeSummaryListMatch {
    contract_id: string;
}
export interface ContractsQuote {
    dealId?: string;
    dealPipeline?: string;
    dealStage?: string;
    name?: string;
    quoteTemplateId: string;
}
export interface ContractsQuoteCreateData {
    contract_id: string;
    dealId?: string;
    dealPipeline?: string;
    dealStage?: string;
    name?: string;
    quoteTemplateId: string;
}
export interface Item {
    id?: string;
}
export interface ItemRemoveMatch {
    id: number;
    price_book_id: number;
}
export interface PaymentLink {
    acceptedPaymentMethods: any[];
    additionalFormFields: any[];
    archived: boolean;
    archivedAt?: string;
    automatedSalesTaxEnabled: boolean;
    businessUnitId?: string;
    checkoutFeeIds: any[];
    collectFullBillingAddress: boolean;
    collectShippingAddress: boolean;
    completedPurchaseCount: number;
    createContractOnPurchase: boolean;
    createdAt?: string;
    currencyCode: string;
    dealConfigurations: Record<string, any>;
    descriptionHtml?: string;
    discount: Record<string, any>;
    discountCodeEnabled: boolean;
    discountObjectId?: string;
    discounts: any[];
    domainId?: string;
    enableDefaultCheckoutFees: boolean;
    expirationSettings?: Record<string, any>;
    feeObjectIds: any[];
    fees: any[];
    formGuid: string;
    id: string;
    includeEmailInSuccessRedirect: boolean;
    isOneTimeUseEnabled: boolean;
    lineItemObjectIds: any[];
    lineItems: any[];
    paymentLinkName: string;
    paymentLinkUrl: string;
    state: string;
    storePaymentMethodAtCheckout: boolean;
    successUrl?: string;
    taxObjectIds: any[];
    taxes: any[];
    updatedAt?: string;
}
export interface PaymentLinkLoadMatch {
    id: string;
    archived?: boolean;
}
export interface PaymentLinkListMatch {
    after?: string;
    archived?: boolean;
    created_after?: number;
    created_at?: number;
    created_before?: number;
    limit?: number;
    sort?: string;
    updated_after?: number;
    updated_at?: number;
    updated_before?: number;
}
export interface PaymentLinkCreateData {
    acceptedPaymentMethods: any[];
    additionalFormFields: any[];
    archived: boolean;
    archivedAt?: string;
    automatedSalesTaxEnabled: boolean;
    businessUnitId?: string;
    checkoutFeeIds: any[];
    collectFullBillingAddress: boolean;
    collectShippingAddress: boolean;
    completedPurchaseCount: number;
    createContractOnPurchase: boolean;
    createdAt?: string;
    currencyCode: string;
    dealConfigurations: Record<string, any>;
    descriptionHtml?: string;
    discount: Record<string, any>;
    discountCodeEnabled: boolean;
    discountObjectId?: string;
    discounts: any[];
    domainId?: string;
    enableDefaultCheckoutFees: boolean;
    expirationSettings?: Record<string, any>;
    feeObjectIds: any[];
    fees: any[];
    formGuid: string;
    id: string;
    includeEmailInSuccessRedirect: boolean;
    isOneTimeUseEnabled: boolean;
    lineItemObjectIds: any[];
    lineItems: any[];
    paymentLinkName: string;
    paymentLinkUrl: string;
    state: string;
    storePaymentMethodAtCheckout: boolean;
    successUrl?: string;
    taxObjectIds: any[];
    taxes: any[];
    updatedAt?: string;
}
export interface PaymentLinkUpdateData {
    id: string;
    acceptedPaymentMethods?: any[];
    additionalFormFields?: any[];
    archived?: boolean;
    archivedAt?: string;
    automatedSalesTaxEnabled?: boolean;
    businessUnitId?: string;
    checkoutFeeIds?: any[];
    collectFullBillingAddress?: boolean;
    collectShippingAddress?: boolean;
    completedPurchaseCount?: number;
    createContractOnPurchase?: boolean;
    createdAt?: string;
    currencyCode?: string;
    dealConfigurations?: Record<string, any>;
    descriptionHtml?: string;
    discount?: Record<string, any>;
    discountCodeEnabled?: boolean;
    discountObjectId?: string;
    discounts?: any[];
    domainId?: string;
    enableDefaultCheckoutFees?: boolean;
    expirationSettings?: Record<string, any>;
    feeObjectIds?: any[];
    fees?: any[];
    formGuid?: string;
    includeEmailInSuccessRedirect?: boolean;
    isOneTimeUseEnabled?: boolean;
    lineItemObjectIds?: any[];
    lineItems?: any[];
    paymentLinkName?: string;
    paymentLinkUrl?: string;
    state?: string;
    storePaymentMethodAtCheckout?: boolean;
    successUrl?: string;
    taxObjectIds?: any[];
    taxes?: any[];
    updatedAt?: string;
}
export interface PaymentMethodsCommercePaymentMethodSettingsPublic {
    activeCurrencies: any[];
    commercePaymentMethod: string;
    isDefaultOn: boolean;
    paymentMethodSettings: any[];
    paymentMethodUpdates: any[];
    supportedCurrencies: any[];
}
export interface PaymentMethodsCommercePaymentMethodSettingsPublicListMatch {
    activeCurrencies?: any[];
    commercePaymentMethod?: string;
    isDefaultOn?: boolean;
    paymentMethodSettings?: any[];
    paymentMethodUpdates?: any[];
    supportedCurrencies?: any[];
}
export interface PaymentMethodsCommercePaymentMethodSettingsPublicUpdateData {
    activeCurrencies?: any[];
    commercePaymentMethod?: string;
    isDefaultOn?: boolean;
    paymentMethodSettings?: any[];
    paymentMethodUpdates?: any[];
    supportedCurrencies?: any[];
}
export interface PaymentsActionResponseWithSingleResultSimplePublicObject {
    category: string;
    context: Record<string, any>;
    errors: any[];
    id?: string;
    links: Record<string, any>;
    message: string;
    status: string;
    subCategory?: Record<string, any>;
}
export interface PaymentsActionResponseWithSingleResultSimplePublicObjectListMatch {
    payment_crm_object_id: string;
    task_id: string;
}
export interface PaymentsCreateManualPaymentPublic {
    associations: any[];
    billingAddress?: Record<string, any>;
    currencyCode: string;
    customerEmail?: string;
    id: string;
    paymentAmount: number;
    paymentDate: string;
    paymentMethod: string;
}
export interface PaymentsCreateManualPaymentPublicCreateData {
    associations: any[];
    billingAddress?: Record<string, any>;
    currencyCode: string;
    customerEmail?: string;
    id: string;
    paymentAmount: number;
    paymentDate: string;
    paymentMethod: string;
}
export interface PaymentsSettingsGetBillingSettingsPublic {
    accountGoogleAnalyticsEnabled?: boolean;
    checkoutPrefillEnabled: boolean;
    collectFullBillingAddress: boolean;
    collectPaymentMethodOnFile: boolean;
    defaultFromEmailAddress: string;
    paymentsGoogleAnalyticsEnabled: boolean;
    recaptchaEnabled: boolean;
}
export interface PaymentsSettingsGetBillingSettingsPublicLoadMatch {
    accountGoogleAnalyticsEnabled?: boolean;
    checkoutPrefillEnabled?: boolean;
    collectFullBillingAddress?: boolean;
    collectPaymentMethodOnFile?: boolean;
    defaultFromEmailAddress?: string;
    paymentsGoogleAnalyticsEnabled?: boolean;
    recaptchaEnabled?: boolean;
}
export interface PaymentsSettingsGetBillingSettingsPublicUpdateData {
    accountGoogleAnalyticsEnabled?: boolean;
    checkoutPrefillEnabled?: boolean;
    collectFullBillingAddress?: boolean;
    collectPaymentMethodOnFile?: boolean;
    defaultFromEmailAddress?: string;
    paymentsGoogleAnalyticsEnabled?: boolean;
    recaptchaEnabled?: boolean;
}
export interface PaymentsSettingsGetCheckoutFeesPublic {
    appliesToPaymentType: string;
    checkoutFees: any[];
    feeValue: number;
    feeValueType: string;
    id: string;
    name: string;
}
export interface PaymentsSettingsGetCheckoutFeesPublicListMatch {
    appliesToPaymentType?: string;
    checkoutFees?: any[];
    feeValue?: number;
    feeValueType?: string;
    id?: string;
    name?: string;
}
export interface PaymentsSettingsGetCheckoutFeesPublicUpdateData {
    appliesToPaymentType?: string;
    checkoutFees?: any[];
    feeValue?: number;
    feeValueType?: string;
    id?: string;
    name?: string;
}
export interface PaymentsSettingsGetPolicySettingsPublic {
    acknowledgementRequired: boolean;
    cancellationPolicyText?: string;
    customPolicyEnabled: boolean;
    refundPolicyText?: string;
    termsOfServiceUrl?: string;
}
export interface PaymentsSettingsGetPolicySettingsPublicLoadMatch {
    acknowledgementRequired?: boolean;
    cancellationPolicyText?: string;
    customPolicyEnabled?: boolean;
    refundPolicyText?: string;
    termsOfServiceUrl?: string;
}
export interface PaymentsSettingsGetPolicySettingsPublicUpdateData {
    acknowledgementRequired?: boolean;
    cancellationPolicyText?: string;
    customPolicyEnabled?: boolean;
    refundPolicyText?: string;
    termsOfServiceUrl?: string;
}
export interface PaymentsSettingsGetShippingSettingsPublic {
    collectShippingAddressByDefault: boolean;
    countriesShippedTo: any[];
}
export interface PaymentsSettingsGetShippingSettingsPublicListMatch {
    collectShippingAddressByDefault?: boolean;
    countriesShippedTo?: any[];
}
export interface PaymentsSettingsGetShippingSettingsPublicUpdateData {
    collectShippingAddressByDefault?: boolean;
    countriesShippedTo?: any[];
}
export interface PaymentsaccountsPaymentAccountView {
    canPayout: boolean;
    canTransact: boolean;
    createdAt?: string;
    eligibleProcessorTypes: any[];
    enrollmentState: string;
    hasTransacted: boolean;
    id: string;
    lastTransactedAt?: string;
    processorType: string;
    updatedAt?: string;
}
export interface PaymentsaccountsPaymentAccountViewListMatch {
    canPayout?: boolean;
    canTransact?: boolean;
    createdAt?: string;
    eligibleProcessorTypes?: any[];
    enrollmentState?: string;
    hasTransacted?: boolean;
    id?: string;
    lastTransactedAt?: string;
    processorType?: string;
    updatedAt?: string;
}
export interface PriceBook {
    archived?: boolean;
    archivedAt?: string;
    autoAssignmentEnabled: boolean;
    countOfIncludedProducts: number;
    createdAt?: string;
    customProperties: Record<string, any>;
    description?: string;
    id: string;
    name?: string;
    status: string;
    supportedCurrencies: any[];
    updatedAt?: string;
}
export interface PriceBookLoadMatch {
    id: number;
    archived?: boolean;
}
export interface PriceBookListMatch {
    after?: string;
    archived?: boolean;
    limit?: number;
}
export interface PriceBookCreateData {
    archived?: boolean;
    archivedAt?: string;
    autoAssignmentEnabled: boolean;
    countOfIncludedProducts: number;
    createdAt?: string;
    customProperties: Record<string, any>;
    description?: string;
    id: string;
    name?: string;
    status: string;
    supportedCurrencies: any[];
    updatedAt?: string;
}
export interface PriceBookUpdateData {
    id: number;
    archived?: boolean;
    archivedAt?: string;
    autoAssignmentEnabled?: boolean;
    countOfIncludedProducts?: number;
    createdAt?: string;
    customProperties?: Record<string, any>;
    description?: string;
    name?: string;
    status?: string;
    supportedCurrencies?: any[];
    updatedAt?: string;
}
export interface PriceBooksBatchResponsePriceBookItem {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface PriceBooksBatchResponsePriceBookItemCreateData {
    price_book_id: number;
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface PriceBooksCollectionResponsePriceBookItemResponseForward {
    archived?: boolean;
    archivedAt?: string;
    billingFrequency?: string;
    billingPeriod?: string;
    costOfGoodsSold?: string;
    createdAt?: string;
    customProperties: Record<string, any>;
    description?: string;
    id: string;
    images?: string;
    name?: string;
    priceBookId?: string;
    pricing: Record<string, any>;
    productClassification?: string;
    productId: string;
    productType?: string;
    recurringBillingTerms?: string;
    sku?: string;
    status?: string;
    taxCategory?: string;
    updatedAt?: string;
    url?: string;
}
export interface PriceBooksCollectionResponsePriceBookItemResponseForwardListMatch {
    price_book_id: number;
    after?: string;
    limit?: number;
    property?: any[];
}
export interface PriceBooksPriceBook {
    archived?: boolean;
    archivedAt?: string;
    autoAssignmentEnabled: boolean;
    countOfIncludedProducts: number;
    createdAt?: string;
    customProperties: Record<string, any>;
    description?: string;
    id: string;
    name?: string;
    status: string;
    supportedCurrencies: any[];
    updatedAt?: string;
}
export interface PriceBooksPriceBookCreateData {
    price_book_id: number;
    archived?: boolean;
    archivedAt?: string;
    autoAssignmentEnabled: boolean;
    countOfIncludedProducts: number;
    createdAt?: string;
    customProperties: Record<string, any>;
    description?: string;
    id: string;
    name?: string;
    status: string;
    supportedCurrencies: any[];
    updatedAt?: string;
}
export interface PriceBooksPriceBookItem {
    archived?: boolean;
    archivedAt?: string;
    billingFrequency?: string;
    billingPeriod?: string;
    costOfGoodsSold?: string;
    createdAt?: string;
    customProperties: Record<string, any>;
    description?: string;
    id: string;
    images?: string;
    name?: string;
    priceBookId?: string;
    pricing: Record<string, any>;
    productClassification?: string;
    productId: string;
    productType?: string;
    recurringBillingTerms?: string;
    sku?: string;
    status?: string;
    taxCategory?: string;
    updatedAt?: string;
    url?: string;
}
export interface PriceBooksPriceBookItemLoadMatch {
    id: number;
    price_book_id: number;
    archived?: boolean;
    property?: any[];
}
export interface PriceBooksPriceBookItemCreateData {
    price_book_id: number;
    archived?: boolean;
    archivedAt?: string;
    billingFrequency?: string;
    billingPeriod?: string;
    costOfGoodsSold?: string;
    createdAt?: string;
    customProperties: Record<string, any>;
    description?: string;
    id: string;
    images?: string;
    name?: string;
    priceBookId?: string;
    pricing: Record<string, any>;
    productClassification?: string;
    productId: string;
    productType?: string;
    recurringBillingTerms?: string;
    sku?: string;
    status?: string;
    taxCategory?: string;
    updatedAt?: string;
    url?: string;
}
export interface PriceBooksPriceBookItemUpdateData {
    id: number;
    price_book_id: number;
    archived?: boolean;
    archivedAt?: string;
    billingFrequency?: string;
    billingPeriod?: string;
    costOfGoodsSold?: string;
    createdAt?: string;
    customProperties?: Record<string, any>;
    description?: string;
    images?: string;
    name?: string;
    priceBookId?: string;
    pricing?: Record<string, any>;
    productClassification?: string;
    productId?: string;
    productType?: string;
    recurringBillingTerms?: string;
    sku?: string;
    status?: string;
    taxCategory?: string;
    updatedAt?: string;
    url?: string;
}
export interface PriceBooksPriceBookValidate {
    errors: any[];
    isValid: boolean;
}
export interface PriceBooksPriceBookValidateCreateData {
    price_book_id: number;
    errors: any[];
    isValid: boolean;
}
