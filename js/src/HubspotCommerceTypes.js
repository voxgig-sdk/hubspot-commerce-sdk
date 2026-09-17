// Typed models for the HubspotCommerce SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Advanced
 */

/**
 * @typedef {Object} AdvancedCreateData
 * @property {string} payment_crm_object_id
 */

/**
 * @typedef {Object} Basic
 */

/**
 * @typedef {Object} BasicRemoveMatch
 * @property {string} payment_link_id
 */

/**
 * @typedef {Object} Batch
 */

/**
 * @typedef {Object} BatchCreateData
 * @property {number} price_book_id
 */

/**
 * @typedef {Object} Contract
 * @property {Array} addressTypesToCollect
 * @property {string} [allTransactionsFeeName]
 * @property {number} [allTransactionsFeePercentage]
 * @property {Array} allowedPaymentMethods
 * @property {number} [annualContractValue]
 * @property {boolean} automatedTaxesEnabled
 * @property {Object} [billingAddress]
 * @property {string} [billingCompanyId]
 * @property {string} [billingContactId]
 * @property {string} [billingStartDateOverride]
 * @property {string} [businessUnitId]
 * @property {string} [cardFeeName]
 * @property {number} [cardFeePercentage]
 * @property {string} [collectionProcess]
 * @property {string} [contractEffectiveDate]
 * @property {string} [contractSourceId]
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {number} [currentAnnualRecurringRevenue]
 * @property {number} [currentMonthlyRecurringRevenue]
 * @property {Object} customProperties
 * @property {string} [dealId]
 * @property {string} [directDebitFeeName]
 * @property {number} [directDebitFeePercentage]
 * @property {string} [discountCode]
 * @property {string} [endDate]
 * @property {string} [externalPaymentMethodReferenceId]
 * @property {boolean} hubspotBillingEnabled
 * @property {string} id
 * @property {string} [language]
 * @property {Array} lineItems
 * @property {string} [locale]
 * @property {string} [name]
 * @property {number} [netPaymentTerms]
 * @property {Object} ownerId
 * @property {boolean} paymentEnabled
 * @property {string} [paymentMethod]
 * @property {string} [poNumber]
 * @property {number} [preTerminationContractValue]
 * @property {string} [renewalContractId]
 * @property {string} [renewalDate]
 * @property {Object} [sellerCompanyAddress]
 * @property {Object} sellerCompanyDomain
 * @property {string} [sellerCompanyName]
 * @property {string} [sellerEmail]
 * @property {string} [sellerFirstName]
 * @property {string} [sellerLastName]
 * @property {Object} sellerPhone
 * @property {string} [sellerPhoneNumber]
 * @property {string} [startDate]
 * @property {string} status
 * @property {boolean} storePaymentMethodAtCheckout
 * @property {string} [terminationDate]
 * @property {number} [totalBilledAmount]
 * @property {number} [totalBilledAmountPreTax]
 * @property {number} [totalCollectedFees]
 * @property {number} [totalCollectedTaxes]
 * @property {number} [totalContractValue]
 * @property {number} [totalPaidAmount]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} ContractLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ContractCreateData
 * @property {Array} addressTypesToCollect
 * @property {string} [allTransactionsFeeName]
 * @property {number} [allTransactionsFeePercentage]
 * @property {Array} allowedPaymentMethods
 * @property {number} [annualContractValue]
 * @property {boolean} automatedTaxesEnabled
 * @property {Object} [billingAddress]
 * @property {string} [billingCompanyId]
 * @property {string} [billingContactId]
 * @property {string} [billingStartDateOverride]
 * @property {string} [businessUnitId]
 * @property {string} [cardFeeName]
 * @property {number} [cardFeePercentage]
 * @property {string} [collectionProcess]
 * @property {string} [contractEffectiveDate]
 * @property {string} [contractSourceId]
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {number} [currentAnnualRecurringRevenue]
 * @property {number} [currentMonthlyRecurringRevenue]
 * @property {Object} customProperties
 * @property {string} [dealId]
 * @property {string} [directDebitFeeName]
 * @property {number} [directDebitFeePercentage]
 * @property {string} [discountCode]
 * @property {string} [endDate]
 * @property {string} [externalPaymentMethodReferenceId]
 * @property {boolean} hubspotBillingEnabled
 * @property {string} id
 * @property {string} [language]
 * @property {Array} lineItems
 * @property {string} [locale]
 * @property {string} [name]
 * @property {number} [netPaymentTerms]
 * @property {Object} ownerId
 * @property {boolean} paymentEnabled
 * @property {string} [paymentMethod]
 * @property {string} [poNumber]
 * @property {number} [preTerminationContractValue]
 * @property {string} [renewalContractId]
 * @property {string} [renewalDate]
 * @property {Object} [sellerCompanyAddress]
 * @property {Object} sellerCompanyDomain
 * @property {string} [sellerCompanyName]
 * @property {string} [sellerEmail]
 * @property {string} [sellerFirstName]
 * @property {string} [sellerLastName]
 * @property {Object} sellerPhone
 * @property {string} [sellerPhoneNumber]
 * @property {string} [startDate]
 * @property {string} status
 * @property {boolean} storePaymentMethodAtCheckout
 * @property {string} [terminationDate]
 * @property {number} [totalBilledAmount]
 * @property {number} [totalBilledAmountPreTax]
 * @property {number} [totalCollectedFees]
 * @property {number} [totalCollectedTaxes]
 * @property {number} [totalContractValue]
 * @property {number} [totalPaidAmount]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} ContractUpdateData
 * @property {string} id
 * @property {Array} [addressTypesToCollect]
 * @property {string} [allTransactionsFeeName]
 * @property {number} [allTransactionsFeePercentage]
 * @property {Array} [allowedPaymentMethods]
 * @property {number} [annualContractValue]
 * @property {boolean} [automatedTaxesEnabled]
 * @property {Object} [billingAddress]
 * @property {string} [billingCompanyId]
 * @property {string} [billingContactId]
 * @property {string} [billingStartDateOverride]
 * @property {string} [businessUnitId]
 * @property {string} [cardFeeName]
 * @property {number} [cardFeePercentage]
 * @property {string} [collectionProcess]
 * @property {string} [contractEffectiveDate]
 * @property {string} [contractSourceId]
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {number} [currentAnnualRecurringRevenue]
 * @property {number} [currentMonthlyRecurringRevenue]
 * @property {Object} [customProperties]
 * @property {string} [dealId]
 * @property {string} [directDebitFeeName]
 * @property {number} [directDebitFeePercentage]
 * @property {string} [discountCode]
 * @property {string} [endDate]
 * @property {string} [externalPaymentMethodReferenceId]
 * @property {boolean} [hubspotBillingEnabled]
 * @property {string} [language]
 * @property {Array} [lineItems]
 * @property {string} [locale]
 * @property {string} [name]
 * @property {number} [netPaymentTerms]
 * @property {Object} [ownerId]
 * @property {boolean} [paymentEnabled]
 * @property {string} [paymentMethod]
 * @property {string} [poNumber]
 * @property {number} [preTerminationContractValue]
 * @property {string} [renewalContractId]
 * @property {string} [renewalDate]
 * @property {Object} [sellerCompanyAddress]
 * @property {Object} [sellerCompanyDomain]
 * @property {string} [sellerCompanyName]
 * @property {string} [sellerEmail]
 * @property {string} [sellerFirstName]
 * @property {string} [sellerLastName]
 * @property {Object} [sellerPhone]
 * @property {string} [sellerPhoneNumber]
 * @property {string} [startDate]
 * @property {string} [status]
 * @property {boolean} [storePaymentMethodAtCheckout]
 * @property {string} [terminationDate]
 * @property {number} [totalBilledAmount]
 * @property {number} [totalBilledAmountPreTax]
 * @property {number} [totalCollectedFees]
 * @property {number} [totalCollectedTaxes]
 * @property {number} [totalContractValue]
 * @property {number} [totalPaidAmount]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} ContractsContract
 * @property {Array} addressTypesToCollect
 * @property {string} [allTransactionsFeeName]
 * @property {number} [allTransactionsFeePercentage]
 * @property {Array} allowedPaymentMethods
 * @property {number} [annualContractValue]
 * @property {boolean} automatedTaxesEnabled
 * @property {Object} [billingAddress]
 * @property {string} [billingCompanyId]
 * @property {string} [billingContactId]
 * @property {string} [billingStartDateOverride]
 * @property {string} [businessUnitId]
 * @property {string} [cardFeeName]
 * @property {number} [cardFeePercentage]
 * @property {string} [collectionProcess]
 * @property {string} [contractEffectiveDate]
 * @property {string} [contractSourceId]
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {number} [currentAnnualRecurringRevenue]
 * @property {number} [currentMonthlyRecurringRevenue]
 * @property {Object} customProperties
 * @property {string} [dealId]
 * @property {string} [directDebitFeeName]
 * @property {number} [directDebitFeePercentage]
 * @property {string} [discountCode]
 * @property {string} [endDate]
 * @property {string} [externalPaymentMethodReferenceId]
 * @property {boolean} hubspotBillingEnabled
 * @property {string} id
 * @property {string} [language]
 * @property {Array} lineItems
 * @property {string} [locale]
 * @property {string} [name]
 * @property {number} [netPaymentTerms]
 * @property {boolean} paymentEnabled
 * @property {string} [paymentMethod]
 * @property {string} [poNumber]
 * @property {number} [preTerminationContractValue]
 * @property {string} [renewalContractId]
 * @property {string} [renewalDate]
 * @property {Object} [sellerCompanyAddress]
 * @property {string} [sellerCompanyName]
 * @property {string} [sellerEmail]
 * @property {string} [sellerFirstName]
 * @property {string} [sellerLastName]
 * @property {string} [sellerPhoneNumber]
 * @property {string} [startDate]
 * @property {string} status
 * @property {boolean} storePaymentMethodAtCheckout
 * @property {string} [terminationDate]
 * @property {number} [totalBilledAmount]
 * @property {number} [totalBilledAmountPreTax]
 * @property {number} [totalCollectedFees]
 * @property {number} [totalCollectedTaxes]
 * @property {number} [totalContractValue]
 * @property {number} [totalPaidAmount]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} ContractsContractCreateData
 * @property {string} contract_id
 * @property {Array} addressTypesToCollect
 * @property {string} [allTransactionsFeeName]
 * @property {number} [allTransactionsFeePercentage]
 * @property {Array} allowedPaymentMethods
 * @property {number} [annualContractValue]
 * @property {boolean} automatedTaxesEnabled
 * @property {Object} [billingAddress]
 * @property {string} [billingCompanyId]
 * @property {string} [billingContactId]
 * @property {string} [billingStartDateOverride]
 * @property {string} [businessUnitId]
 * @property {string} [cardFeeName]
 * @property {number} [cardFeePercentage]
 * @property {string} [collectionProcess]
 * @property {string} [contractEffectiveDate]
 * @property {string} [contractSourceId]
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {number} [currentAnnualRecurringRevenue]
 * @property {number} [currentMonthlyRecurringRevenue]
 * @property {Object} customProperties
 * @property {string} [dealId]
 * @property {string} [directDebitFeeName]
 * @property {number} [directDebitFeePercentage]
 * @property {string} [discountCode]
 * @property {string} [endDate]
 * @property {string} [externalPaymentMethodReferenceId]
 * @property {boolean} hubspotBillingEnabled
 * @property {string} id
 * @property {string} [language]
 * @property {Array} lineItems
 * @property {string} [locale]
 * @property {string} [name]
 * @property {number} [netPaymentTerms]
 * @property {boolean} paymentEnabled
 * @property {string} [paymentMethod]
 * @property {string} [poNumber]
 * @property {number} [preTerminationContractValue]
 * @property {string} [renewalContractId]
 * @property {string} [renewalDate]
 * @property {Object} [sellerCompanyAddress]
 * @property {string} [sellerCompanyName]
 * @property {string} [sellerEmail]
 * @property {string} [sellerFirstName]
 * @property {string} [sellerLastName]
 * @property {string} [sellerPhoneNumber]
 * @property {string} [startDate]
 * @property {string} status
 * @property {boolean} storePaymentMethodAtCheckout
 * @property {string} [terminationDate]
 * @property {number} [totalBilledAmount]
 * @property {number} [totalBilledAmountPreTax]
 * @property {number} [totalCollectedFees]
 * @property {number} [totalCollectedTaxes]
 * @property {number} [totalContractValue]
 * @property {number} [totalPaidAmount]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} ContractsContractChange
 * @property {string} contractId
 * @property {string} [createdAt]
 * @property {Array} deltaLineItems
 * @property {string} [effectiveDate]
 * @property {string} id
 * @property {Array} lineItemChanges
 * @property {string} [name]
 * @property {Array} proposedLineItems
 * @property {boolean} prorating
 * @property {string} [quoteId]
 * @property {string} status
 * @property {string} type
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} ContractsContractChangeLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ContractsContractChangeListMatch
 * @property {string} contract_id
 */

/**
 * @typedef {Object} ContractsContractChangeCreateData
 * @property {string} contractId
 * @property {string} [createdAt]
 * @property {Array} deltaLineItems
 * @property {string} [effectiveDate]
 * @property {string} id
 * @property {Array} lineItemChanges
 * @property {string} [name]
 * @property {Array} proposedLineItems
 * @property {boolean} prorating
 * @property {string} [quoteId]
 * @property {string} status
 * @property {string} type
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} ContractsContractChangeUpdateData
 * @property {string} id
 * @property {string} [contractId]
 * @property {string} [createdAt]
 * @property {Array} [deltaLineItems]
 * @property {string} [effectiveDate]
 * @property {Array} [lineItemChanges]
 * @property {string} [name]
 * @property {Array} [proposedLineItems]
 * @property {boolean} [prorating]
 * @property {string} [quoteId]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} ContractsContractChangePreview
 * @property {Array} deltaLineItems
 * @property {Array} proposedLineItems
 */

/**
 * @typedef {Object} ContractsContractChangePreviewCreateData
 * @property {Array} deltaLineItems
 * @property {Array} proposedLineItems
 */

/**
 * @typedef {Object} ContractsQuote
 * @property {string} [dealId]
 * @property {string} [dealPipeline]
 * @property {string} [dealStage]
 * @property {string} [name]
 * @property {string} quoteTemplateId
 */

/**
 * @typedef {Object} ContractsQuoteCreateData
 * @property {string} contract_id
 * @property {string} [dealId]
 * @property {string} [dealPipeline]
 * @property {string} [dealStage]
 * @property {string} [name]
 * @property {string} quoteTemplateId
 */

/**
 * @typedef {Object} Item
 * @property {string} [id]
 */

/**
 * @typedef {Object} ItemRemoveMatch
 * @property {number} id
 * @property {number} price_book_id
 */

/**
 * @typedef {Object} PaymentLink
 * @property {Array} acceptedPaymentMethods
 * @property {Array} additionalFormFields
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {boolean} automatedSalesTaxEnabled
 * @property {string} [businessUnitId]
 * @property {Array} checkoutFeeIds
 * @property {boolean} collectFullBillingAddress
 * @property {boolean} collectShippingAddress
 * @property {number} completedPurchaseCount
 * @property {boolean} createContractOnPurchase
 * @property {string} [createdAt]
 * @property {string} currencyCode
 * @property {Object} dealConfigurations
 * @property {string} [descriptionHtml]
 * @property {Object} discount
 * @property {boolean} discountCodeEnabled
 * @property {string} [discountObjectId]
 * @property {Array} discounts
 * @property {string} [domainId]
 * @property {boolean} enableDefaultCheckoutFees
 * @property {Object} [expirationSettings]
 * @property {Array} feeObjectIds
 * @property {Array} fees
 * @property {string} formGuid
 * @property {string} id
 * @property {boolean} includeEmailInSuccessRedirect
 * @property {boolean} isOneTimeUseEnabled
 * @property {Array} lineItemObjectIds
 * @property {Array} lineItems
 * @property {string} paymentLinkName
 * @property {string} paymentLinkUrl
 * @property {string} state
 * @property {boolean} storePaymentMethodAtCheckout
 * @property {string} [successUrl]
 * @property {Array} taxObjectIds
 * @property {Array} taxes
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PaymentLinkLoadMatch
 * @property {string} id
 * @property {boolean} [archived]
 */

/**
 * @typedef {Object} PaymentLinkListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [created_after]
 * @property {number} [created_at]
 * @property {number} [created_before]
 * @property {number} [limit]
 * @property {string} [sort]
 * @property {number} [updated_after]
 * @property {number} [updated_at]
 * @property {number} [updated_before]
 */

/**
 * @typedef {Object} PaymentLinkCreateData
 * @property {Array} acceptedPaymentMethods
 * @property {Array} additionalFormFields
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {boolean} automatedSalesTaxEnabled
 * @property {string} [businessUnitId]
 * @property {Array} checkoutFeeIds
 * @property {boolean} collectFullBillingAddress
 * @property {boolean} collectShippingAddress
 * @property {number} completedPurchaseCount
 * @property {boolean} createContractOnPurchase
 * @property {string} [createdAt]
 * @property {string} currencyCode
 * @property {Object} dealConfigurations
 * @property {string} [descriptionHtml]
 * @property {Object} discount
 * @property {boolean} discountCodeEnabled
 * @property {string} [discountObjectId]
 * @property {Array} discounts
 * @property {string} [domainId]
 * @property {boolean} enableDefaultCheckoutFees
 * @property {Object} [expirationSettings]
 * @property {Array} feeObjectIds
 * @property {Array} fees
 * @property {string} formGuid
 * @property {string} id
 * @property {boolean} includeEmailInSuccessRedirect
 * @property {boolean} isOneTimeUseEnabled
 * @property {Array} lineItemObjectIds
 * @property {Array} lineItems
 * @property {string} paymentLinkName
 * @property {string} paymentLinkUrl
 * @property {string} state
 * @property {boolean} storePaymentMethodAtCheckout
 * @property {string} [successUrl]
 * @property {Array} taxObjectIds
 * @property {Array} taxes
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PaymentLinkUpdateData
 * @property {string} id
 * @property {Array} [acceptedPaymentMethods]
 * @property {Array} [additionalFormFields]
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {boolean} [automatedSalesTaxEnabled]
 * @property {string} [businessUnitId]
 * @property {Array} [checkoutFeeIds]
 * @property {boolean} [collectFullBillingAddress]
 * @property {boolean} [collectShippingAddress]
 * @property {number} [completedPurchaseCount]
 * @property {boolean} [createContractOnPurchase]
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {Object} [dealConfigurations]
 * @property {string} [descriptionHtml]
 * @property {Object} [discount]
 * @property {boolean} [discountCodeEnabled]
 * @property {string} [discountObjectId]
 * @property {Array} [discounts]
 * @property {string} [domainId]
 * @property {boolean} [enableDefaultCheckoutFees]
 * @property {Object} [expirationSettings]
 * @property {Array} [feeObjectIds]
 * @property {Array} [fees]
 * @property {string} [formGuid]
 * @property {boolean} [includeEmailInSuccessRedirect]
 * @property {boolean} [isOneTimeUseEnabled]
 * @property {Array} [lineItemObjectIds]
 * @property {Array} [lineItems]
 * @property {string} [paymentLinkName]
 * @property {string} [paymentLinkUrl]
 * @property {string} [state]
 * @property {boolean} [storePaymentMethodAtCheckout]
 * @property {string} [successUrl]
 * @property {Array} [taxObjectIds]
 * @property {Array} [taxes]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PaymentMethodsCommercePaymentMethodSettingsPublic
 * @property {Array} activeCurrencies
 * @property {string} commercePaymentMethod
 * @property {boolean} isDefaultOn
 * @property {Array} paymentMethodSettings
 * @property {Array} paymentMethodUpdates
 * @property {Array} supportedCurrencies
 */

/**
 * @typedef {Object} PaymentMethodsCommercePaymentMethodSettingsPublicListMatch
 * @property {Array} [activeCurrencies]
 * @property {string} [commercePaymentMethod]
 * @property {boolean} [isDefaultOn]
 * @property {Array} [paymentMethodSettings]
 * @property {Array} [paymentMethodUpdates]
 * @property {Array} [supportedCurrencies]
 */

/**
 * @typedef {Object} PaymentMethodsCommercePaymentMethodSettingsPublicUpdateData
 * @property {Array} [activeCurrencies]
 * @property {string} [commercePaymentMethod]
 * @property {boolean} [isDefaultOn]
 * @property {Array} [paymentMethodSettings]
 * @property {Array} [paymentMethodUpdates]
 * @property {Array} [supportedCurrencies]
 */

/**
 * @typedef {Object} PaymentsActionResponseWithSingleResultSimplePublicObject
 * @property {string} category
 * @property {Object} context
 * @property {Array} errors
 * @property {string} [id]
 * @property {Object} links
 * @property {string} message
 * @property {string} status
 * @property {Object} [subCategory]
 */

/**
 * @typedef {Object} PaymentsActionResponseWithSingleResultSimplePublicObjectListMatch
 * @property {string} payment_crm_object_id
 * @property {string} task_id
 */

/**
 * @typedef {Object} PaymentsCreateManualPaymentPublic
 * @property {Array} associations
 * @property {Object} [billingAddress]
 * @property {string} currencyCode
 * @property {string} [customerEmail]
 * @property {string} id
 * @property {number} paymentAmount
 * @property {string} paymentDate
 * @property {string} paymentMethod
 */

/**
 * @typedef {Object} PaymentsCreateManualPaymentPublicCreateData
 * @property {Array} associations
 * @property {Object} [billingAddress]
 * @property {string} currencyCode
 * @property {string} [customerEmail]
 * @property {string} id
 * @property {number} paymentAmount
 * @property {string} paymentDate
 * @property {string} paymentMethod
 */

/**
 * @typedef {Object} PaymentsSettingsGetBillingSettingsPublic
 * @property {boolean} [accountGoogleAnalyticsEnabled]
 * @property {boolean} checkoutPrefillEnabled
 * @property {boolean} collectFullBillingAddress
 * @property {boolean} collectPaymentMethodOnFile
 * @property {string} defaultFromEmailAddress
 * @property {boolean} paymentsGoogleAnalyticsEnabled
 * @property {boolean} recaptchaEnabled
 */

/**
 * @typedef {Object} PaymentsSettingsGetBillingSettingsPublicLoadMatch
 * @property {boolean} [accountGoogleAnalyticsEnabled]
 * @property {boolean} [checkoutPrefillEnabled]
 * @property {boolean} [collectFullBillingAddress]
 * @property {boolean} [collectPaymentMethodOnFile]
 * @property {string} [defaultFromEmailAddress]
 * @property {boolean} [paymentsGoogleAnalyticsEnabled]
 * @property {boolean} [recaptchaEnabled]
 */

/**
 * @typedef {Object} PaymentsSettingsGetBillingSettingsPublicUpdateData
 * @property {boolean} [accountGoogleAnalyticsEnabled]
 * @property {boolean} [checkoutPrefillEnabled]
 * @property {boolean} [collectFullBillingAddress]
 * @property {boolean} [collectPaymentMethodOnFile]
 * @property {string} [defaultFromEmailAddress]
 * @property {boolean} [paymentsGoogleAnalyticsEnabled]
 * @property {boolean} [recaptchaEnabled]
 */

/**
 * @typedef {Object} PaymentsSettingsGetCheckoutFeesPublic
 * @property {string} appliesToPaymentType
 * @property {Array} checkoutFees
 * @property {number} feeValue
 * @property {string} feeValueType
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {Object} PaymentsSettingsGetCheckoutFeesPublicListMatch
 * @property {string} [appliesToPaymentType]
 * @property {Array} [checkoutFees]
 * @property {number} [feeValue]
 * @property {string} [feeValueType]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef {Object} PaymentsSettingsGetCheckoutFeesPublicUpdateData
 * @property {string} [appliesToPaymentType]
 * @property {Array} [checkoutFees]
 * @property {number} [feeValue]
 * @property {string} [feeValueType]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef {Object} PaymentsSettingsGetPolicySettingsPublic
 * @property {boolean} acknowledgementRequired
 * @property {string} [cancellationPolicyText]
 * @property {boolean} customPolicyEnabled
 * @property {string} [refundPolicyText]
 * @property {string} [termsOfServiceUrl]
 */

/**
 * @typedef {Object} PaymentsSettingsGetPolicySettingsPublicLoadMatch
 * @property {boolean} [acknowledgementRequired]
 * @property {string} [cancellationPolicyText]
 * @property {boolean} [customPolicyEnabled]
 * @property {string} [refundPolicyText]
 * @property {string} [termsOfServiceUrl]
 */

/**
 * @typedef {Object} PaymentsSettingsGetPolicySettingsPublicUpdateData
 * @property {boolean} [acknowledgementRequired]
 * @property {string} [cancellationPolicyText]
 * @property {boolean} [customPolicyEnabled]
 * @property {string} [refundPolicyText]
 * @property {string} [termsOfServiceUrl]
 */

/**
 * @typedef {Object} PaymentsSettingsGetShippingSettingsPublic
 * @property {boolean} collectShippingAddressByDefault
 * @property {Array} countriesShippedTo
 */

/**
 * @typedef {Object} PaymentsSettingsGetShippingSettingsPublicListMatch
 * @property {boolean} [collectShippingAddressByDefault]
 * @property {Array} [countriesShippedTo]
 */

/**
 * @typedef {Object} PaymentsSettingsGetShippingSettingsPublicUpdateData
 * @property {boolean} [collectShippingAddressByDefault]
 * @property {Array} [countriesShippedTo]
 */

/**
 * @typedef {Object} PaymentsaccountsPaymentAccountView
 * @property {boolean} canPayout
 * @property {boolean} canTransact
 * @property {string} [createdAt]
 * @property {Array} eligibleProcessorTypes
 * @property {string} enrollmentState
 * @property {boolean} hasTransacted
 * @property {string} id
 * @property {string} [lastTransactedAt]
 * @property {string} processorType
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PaymentsaccountsPaymentAccountViewListMatch
 * @property {boolean} [canPayout]
 * @property {boolean} [canTransact]
 * @property {string} [createdAt]
 * @property {Array} [eligibleProcessorTypes]
 * @property {string} [enrollmentState]
 * @property {boolean} [hasTransacted]
 * @property {string} [id]
 * @property {string} [lastTransactedAt]
 * @property {string} [processorType]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PriceBook
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {boolean} autoAssignmentEnabled
 * @property {number} countOfIncludedProducts
 * @property {string} [createdAt]
 * @property {Object} customProperties
 * @property {string} [description]
 * @property {string} id
 * @property {string} [name]
 * @property {string} status
 * @property {Array} supportedCurrencies
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PriceBookLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 */

/**
 * @typedef {Object} PriceBookListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} PriceBookCreateData
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {boolean} autoAssignmentEnabled
 * @property {number} countOfIncludedProducts
 * @property {string} [createdAt]
 * @property {Object} customProperties
 * @property {string} [description]
 * @property {string} id
 * @property {string} [name]
 * @property {string} status
 * @property {Array} supportedCurrencies
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PriceBookUpdateData
 * @property {number} id
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {boolean} [autoAssignmentEnabled]
 * @property {number} [countOfIncludedProducts]
 * @property {string} [createdAt]
 * @property {Object} [customProperties]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [status]
 * @property {Array} [supportedCurrencies]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PriceBooksBatchResponsePriceBookItem
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} PriceBooksBatchResponsePriceBookItemCreateData
 * @property {number} price_book_id
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} PriceBooksCollectionResponsePriceBookItemResponseForward
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {string} [billingFrequency]
 * @property {string} [billingPeriod]
 * @property {string} [costOfGoodsSold]
 * @property {string} [createdAt]
 * @property {Object} customProperties
 * @property {string} [description]
 * @property {string} id
 * @property {string} [images]
 * @property {string} [name]
 * @property {string} [priceBookId]
 * @property {Object} pricing
 * @property {string} [productClassification]
 * @property {string} productId
 * @property {string} [productType]
 * @property {string} [recurringBillingTerms]
 * @property {string} [sku]
 * @property {string} [status]
 * @property {string} [taxCategory]
 * @property {string} [updatedAt]
 * @property {string} [url]
 */

/**
 * @typedef {Object} PriceBooksCollectionResponsePriceBookItemResponseForwardListMatch
 * @property {number} price_book_id
 * @property {string} [after]
 * @property {number} [limit]
 * @property {Array} [property]
 */

/**
 * @typedef {Object} PriceBooksPriceBook
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {boolean} autoAssignmentEnabled
 * @property {number} countOfIncludedProducts
 * @property {string} [createdAt]
 * @property {Object} customProperties
 * @property {string} [description]
 * @property {string} id
 * @property {string} [name]
 * @property {string} status
 * @property {Array} supportedCurrencies
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PriceBooksPriceBookCreateData
 * @property {number} price_book_id
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {boolean} autoAssignmentEnabled
 * @property {number} countOfIncludedProducts
 * @property {string} [createdAt]
 * @property {Object} customProperties
 * @property {string} [description]
 * @property {string} id
 * @property {string} [name]
 * @property {string} status
 * @property {Array} supportedCurrencies
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} PriceBooksPriceBookItem
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {string} [billingFrequency]
 * @property {string} [billingPeriod]
 * @property {string} [costOfGoodsSold]
 * @property {string} [createdAt]
 * @property {Object} customProperties
 * @property {string} [description]
 * @property {string} id
 * @property {string} [images]
 * @property {string} [name]
 * @property {string} [priceBookId]
 * @property {Object} pricing
 * @property {string} [productClassification]
 * @property {string} productId
 * @property {string} [productType]
 * @property {string} [recurringBillingTerms]
 * @property {string} [sku]
 * @property {string} [status]
 * @property {string} [taxCategory]
 * @property {string} [updatedAt]
 * @property {string} [url]
 */

/**
 * @typedef {Object} PriceBooksPriceBookItemLoadMatch
 * @property {number} id
 * @property {number} price_book_id
 * @property {boolean} [archived]
 * @property {Array} [property]
 */

/**
 * @typedef {Object} PriceBooksPriceBookItemCreateData
 * @property {number} price_book_id
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {string} [billingFrequency]
 * @property {string} [billingPeriod]
 * @property {string} [costOfGoodsSold]
 * @property {string} [createdAt]
 * @property {Object} customProperties
 * @property {string} [description]
 * @property {string} id
 * @property {string} [images]
 * @property {string} [name]
 * @property {string} [priceBookId]
 * @property {Object} pricing
 * @property {string} [productClassification]
 * @property {string} productId
 * @property {string} [productType]
 * @property {string} [recurringBillingTerms]
 * @property {string} [sku]
 * @property {string} [status]
 * @property {string} [taxCategory]
 * @property {string} [updatedAt]
 * @property {string} [url]
 */

/**
 * @typedef {Object} PriceBooksPriceBookItemUpdateData
 * @property {number} id
 * @property {number} price_book_id
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {string} [billingFrequency]
 * @property {string} [billingPeriod]
 * @property {string} [costOfGoodsSold]
 * @property {string} [createdAt]
 * @property {Object} [customProperties]
 * @property {string} [description]
 * @property {string} [images]
 * @property {string} [name]
 * @property {string} [priceBookId]
 * @property {Object} [pricing]
 * @property {string} [productClassification]
 * @property {string} [productId]
 * @property {string} [productType]
 * @property {string} [recurringBillingTerms]
 * @property {string} [sku]
 * @property {string} [status]
 * @property {string} [taxCategory]
 * @property {string} [updatedAt]
 * @property {string} [url]
 */

/**
 * @typedef {Object} PriceBooksPriceBookValidate
 * @property {Array} errors
 * @property {boolean} isValid
 */

/**
 * @typedef {Object} PriceBooksPriceBookValidateCreateData
 * @property {number} price_book_id
 * @property {Array} errors
 * @property {boolean} isValid
 */

