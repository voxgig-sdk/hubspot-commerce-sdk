<?php
declare(strict_types=1);

// Typed models for the HubspotCommerce SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Advanced entity data model. */
class Advanced
{
}

/** Request payload for Advanced#create. */
class AdvancedCreateData
{
    public string $payment_crm_object_id;
}

/** Basic entity data model. */
class Basic
{
}

/** Request payload for Basic#remove. */
class BasicRemoveMatch
{
    public string $payment_link_id;
}

/** Batch entity data model. */
class Batch
{
}

/** Request payload for Batch#create. */
class BatchCreateData
{
    public int $price_book_id;
}

/** Contract entity data model. */
class Contract
{
    public array $addressTypesToCollect;
    public ?string $allTransactionsFeeName = null;
    public ?float $allTransactionsFeePercentage = null;
    public array $allowedPaymentMethods;
    public ?float $annualContractValue = null;
    public bool $automatedTaxesEnabled;
    public ?array $billingAddress = null;
    public ?string $billingCompanyId = null;
    public ?string $billingContactId = null;
    public ?string $billingStartDateOverride = null;
    public ?string $businessUnitId = null;
    public ?string $cardFeeName = null;
    public ?float $cardFeePercentage = null;
    public ?string $collectionProcess = null;
    public ?string $contractEffectiveDate = null;
    public ?string $contractSourceId = null;
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?float $currentAnnualRecurringRevenue = null;
    public ?float $currentMonthlyRecurringRevenue = null;
    public array $customProperties;
    public ?string $dealId = null;
    public ?string $directDebitFeeName = null;
    public ?float $directDebitFeePercentage = null;
    public ?string $discountCode = null;
    public ?string $endDate = null;
    public ?string $externalPaymentMethodReferenceId = null;
    public bool $hubspotBillingEnabled;
    public string $id;
    public ?string $language = null;
    public array $lineItems;
    public ?string $locale = null;
    public ?string $name = null;
    public ?int $netPaymentTerms = null;
    public array $ownerId;
    public bool $paymentEnabled;
    public ?string $paymentMethod = null;
    public ?string $poNumber = null;
    public ?float $preTerminationContractValue = null;
    public ?string $renewalContractId = null;
    public ?string $renewalDate = null;
    public ?array $sellerCompanyAddress = null;
    public array $sellerCompanyDomain;
    public ?string $sellerCompanyName = null;
    public ?string $sellerEmail = null;
    public ?string $sellerFirstName = null;
    public ?string $sellerLastName = null;
    public array $sellerPhone;
    public ?string $sellerPhoneNumber = null;
    public ?string $startDate = null;
    public string $status;
    public bool $storePaymentMethodAtCheckout;
    public ?string $terminationDate = null;
    public ?float $totalBilledAmount = null;
    public ?float $totalBilledAmountPreTax = null;
    public ?float $totalCollectedFees = null;
    public ?float $totalCollectedTaxes = null;
    public ?float $totalContractValue = null;
    public ?float $totalPaidAmount = null;
    public ?string $updatedAt = null;
}

/** Request payload for Contract#load. */
class ContractLoadMatch
{
    public string $id;
}

/** Request payload for Contract#create. */
class ContractCreateData
{
    public array $addressTypesToCollect;
    public ?string $allTransactionsFeeName = null;
    public ?float $allTransactionsFeePercentage = null;
    public array $allowedPaymentMethods;
    public ?float $annualContractValue = null;
    public bool $automatedTaxesEnabled;
    public ?array $billingAddress = null;
    public ?string $billingCompanyId = null;
    public ?string $billingContactId = null;
    public ?string $billingStartDateOverride = null;
    public ?string $businessUnitId = null;
    public ?string $cardFeeName = null;
    public ?float $cardFeePercentage = null;
    public ?string $collectionProcess = null;
    public ?string $contractEffectiveDate = null;
    public ?string $contractSourceId = null;
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?float $currentAnnualRecurringRevenue = null;
    public ?float $currentMonthlyRecurringRevenue = null;
    public array $customProperties;
    public ?string $dealId = null;
    public ?string $directDebitFeeName = null;
    public ?float $directDebitFeePercentage = null;
    public ?string $discountCode = null;
    public ?string $endDate = null;
    public ?string $externalPaymentMethodReferenceId = null;
    public bool $hubspotBillingEnabled;
    public string $id;
    public ?string $language = null;
    public array $lineItems;
    public ?string $locale = null;
    public ?string $name = null;
    public ?int $netPaymentTerms = null;
    public array $ownerId;
    public bool $paymentEnabled;
    public ?string $paymentMethod = null;
    public ?string $poNumber = null;
    public ?float $preTerminationContractValue = null;
    public ?string $renewalContractId = null;
    public ?string $renewalDate = null;
    public ?array $sellerCompanyAddress = null;
    public array $sellerCompanyDomain;
    public ?string $sellerCompanyName = null;
    public ?string $sellerEmail = null;
    public ?string $sellerFirstName = null;
    public ?string $sellerLastName = null;
    public array $sellerPhone;
    public ?string $sellerPhoneNumber = null;
    public ?string $startDate = null;
    public string $status;
    public bool $storePaymentMethodAtCheckout;
    public ?string $terminationDate = null;
    public ?float $totalBilledAmount = null;
    public ?float $totalBilledAmountPreTax = null;
    public ?float $totalCollectedFees = null;
    public ?float $totalCollectedTaxes = null;
    public ?float $totalContractValue = null;
    public ?float $totalPaidAmount = null;
    public ?string $updatedAt = null;
}

/** Request payload for Contract#update. */
class ContractUpdateData
{
    public string $id;
    public ?array $addressTypesToCollect = null;
    public ?string $allTransactionsFeeName = null;
    public ?float $allTransactionsFeePercentage = null;
    public ?array $allowedPaymentMethods = null;
    public ?float $annualContractValue = null;
    public ?bool $automatedTaxesEnabled = null;
    public ?array $billingAddress = null;
    public ?string $billingCompanyId = null;
    public ?string $billingContactId = null;
    public ?string $billingStartDateOverride = null;
    public ?string $businessUnitId = null;
    public ?string $cardFeeName = null;
    public ?float $cardFeePercentage = null;
    public ?string $collectionProcess = null;
    public ?string $contractEffectiveDate = null;
    public ?string $contractSourceId = null;
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?float $currentAnnualRecurringRevenue = null;
    public ?float $currentMonthlyRecurringRevenue = null;
    public ?array $customProperties = null;
    public ?string $dealId = null;
    public ?string $directDebitFeeName = null;
    public ?float $directDebitFeePercentage = null;
    public ?string $discountCode = null;
    public ?string $endDate = null;
    public ?string $externalPaymentMethodReferenceId = null;
    public ?bool $hubspotBillingEnabled = null;
    public ?string $language = null;
    public ?array $lineItems = null;
    public ?string $locale = null;
    public ?string $name = null;
    public ?int $netPaymentTerms = null;
    public ?array $ownerId = null;
    public ?bool $paymentEnabled = null;
    public ?string $paymentMethod = null;
    public ?string $poNumber = null;
    public ?float $preTerminationContractValue = null;
    public ?string $renewalContractId = null;
    public ?string $renewalDate = null;
    public ?array $sellerCompanyAddress = null;
    public ?array $sellerCompanyDomain = null;
    public ?string $sellerCompanyName = null;
    public ?string $sellerEmail = null;
    public ?string $sellerFirstName = null;
    public ?string $sellerLastName = null;
    public ?array $sellerPhone = null;
    public ?string $sellerPhoneNumber = null;
    public ?string $startDate = null;
    public ?string $status = null;
    public ?bool $storePaymentMethodAtCheckout = null;
    public ?string $terminationDate = null;
    public ?float $totalBilledAmount = null;
    public ?float $totalBilledAmountPreTax = null;
    public ?float $totalCollectedFees = null;
    public ?float $totalCollectedTaxes = null;
    public ?float $totalContractValue = null;
    public ?float $totalPaidAmount = null;
    public ?string $updatedAt = null;
}

/** ContractsContract entity data model. */
class ContractsContract
{
    public array $addressTypesToCollect;
    public ?string $allTransactionsFeeName = null;
    public ?float $allTransactionsFeePercentage = null;
    public array $allowedPaymentMethods;
    public ?float $annualContractValue = null;
    public bool $automatedTaxesEnabled;
    public ?array $billingAddress = null;
    public ?string $billingCompanyId = null;
    public ?string $billingContactId = null;
    public ?string $billingStartDateOverride = null;
    public ?string $businessUnitId = null;
    public ?string $cardFeeName = null;
    public ?float $cardFeePercentage = null;
    public ?string $collectionProcess = null;
    public ?string $contractEffectiveDate = null;
    public ?string $contractSourceId = null;
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?float $currentAnnualRecurringRevenue = null;
    public ?float $currentMonthlyRecurringRevenue = null;
    public array $customProperties;
    public ?string $dealId = null;
    public ?string $directDebitFeeName = null;
    public ?float $directDebitFeePercentage = null;
    public ?string $discountCode = null;
    public ?string $endDate = null;
    public ?string $externalPaymentMethodReferenceId = null;
    public bool $hubspotBillingEnabled;
    public string $id;
    public ?string $language = null;
    public array $lineItems;
    public ?string $locale = null;
    public ?string $name = null;
    public ?int $netPaymentTerms = null;
    public bool $paymentEnabled;
    public ?string $paymentMethod = null;
    public ?string $poNumber = null;
    public ?float $preTerminationContractValue = null;
    public ?string $renewalContractId = null;
    public ?string $renewalDate = null;
    public ?array $sellerCompanyAddress = null;
    public ?string $sellerCompanyName = null;
    public ?string $sellerEmail = null;
    public ?string $sellerFirstName = null;
    public ?string $sellerLastName = null;
    public ?string $sellerPhoneNumber = null;
    public ?string $startDate = null;
    public string $status;
    public bool $storePaymentMethodAtCheckout;
    public ?string $terminationDate = null;
    public ?float $totalBilledAmount = null;
    public ?float $totalBilledAmountPreTax = null;
    public ?float $totalCollectedFees = null;
    public ?float $totalCollectedTaxes = null;
    public ?float $totalContractValue = null;
    public ?float $totalPaidAmount = null;
    public ?string $updatedAt = null;
}

/** Request payload for ContractsContract#create. */
class ContractsContractCreateData
{
    public string $contract_id;
    public array $addressTypesToCollect;
    public ?string $allTransactionsFeeName = null;
    public ?float $allTransactionsFeePercentage = null;
    public array $allowedPaymentMethods;
    public ?float $annualContractValue = null;
    public bool $automatedTaxesEnabled;
    public ?array $billingAddress = null;
    public ?string $billingCompanyId = null;
    public ?string $billingContactId = null;
    public ?string $billingStartDateOverride = null;
    public ?string $businessUnitId = null;
    public ?string $cardFeeName = null;
    public ?float $cardFeePercentage = null;
    public ?string $collectionProcess = null;
    public ?string $contractEffectiveDate = null;
    public ?string $contractSourceId = null;
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?float $currentAnnualRecurringRevenue = null;
    public ?float $currentMonthlyRecurringRevenue = null;
    public array $customProperties;
    public ?string $dealId = null;
    public ?string $directDebitFeeName = null;
    public ?float $directDebitFeePercentage = null;
    public ?string $discountCode = null;
    public ?string $endDate = null;
    public ?string $externalPaymentMethodReferenceId = null;
    public bool $hubspotBillingEnabled;
    public string $id;
    public ?string $language = null;
    public array $lineItems;
    public ?string $locale = null;
    public ?string $name = null;
    public ?int $netPaymentTerms = null;
    public bool $paymentEnabled;
    public ?string $paymentMethod = null;
    public ?string $poNumber = null;
    public ?float $preTerminationContractValue = null;
    public ?string $renewalContractId = null;
    public ?string $renewalDate = null;
    public ?array $sellerCompanyAddress = null;
    public ?string $sellerCompanyName = null;
    public ?string $sellerEmail = null;
    public ?string $sellerFirstName = null;
    public ?string $sellerLastName = null;
    public ?string $sellerPhoneNumber = null;
    public ?string $startDate = null;
    public string $status;
    public bool $storePaymentMethodAtCheckout;
    public ?string $terminationDate = null;
    public ?float $totalBilledAmount = null;
    public ?float $totalBilledAmountPreTax = null;
    public ?float $totalCollectedFees = null;
    public ?float $totalCollectedTaxes = null;
    public ?float $totalContractValue = null;
    public ?float $totalPaidAmount = null;
    public ?string $updatedAt = null;
}

/** ContractsContractChange entity data model. */
class ContractsContractChange
{
    public string $contractId;
    public ?string $createdAt = null;
    public array $deltaLineItems;
    public ?string $effectiveDate = null;
    public string $id;
    public array $lineItemChanges;
    public ?string $name = null;
    public array $proposedLineItems;
    public bool $prorating;
    public ?string $quoteId = null;
    public string $status;
    public string $type;
    public ?string $updatedAt = null;
}

/** Request payload for ContractsContractChange#load. */
class ContractsContractChangeLoadMatch
{
    public string $id;
}

/** Request payload for ContractsContractChange#list. */
class ContractsContractChangeListMatch
{
    public string $contract_id;
}

/** Request payload for ContractsContractChange#create. */
class ContractsContractChangeCreateData
{
    public string $contractId;
    public ?string $createdAt = null;
    public array $deltaLineItems;
    public ?string $effectiveDate = null;
    public string $id;
    public array $lineItemChanges;
    public ?string $name = null;
    public array $proposedLineItems;
    public bool $prorating;
    public ?string $quoteId = null;
    public string $status;
    public string $type;
    public ?string $updatedAt = null;
}

/** Request payload for ContractsContractChange#update. */
class ContractsContractChangeUpdateData
{
    public string $id;
    public ?string $contractId = null;
    public ?string $createdAt = null;
    public ?array $deltaLineItems = null;
    public ?string $effectiveDate = null;
    public ?array $lineItemChanges = null;
    public ?string $name = null;
    public ?array $proposedLineItems = null;
    public ?bool $prorating = null;
    public ?string $quoteId = null;
    public ?string $status = null;
    public ?string $type = null;
    public ?string $updatedAt = null;
}

/** ContractsContractChangePreview entity data model. */
class ContractsContractChangePreview
{
    public array $deltaLineItems;
    public array $proposedLineItems;
}

/** Request payload for ContractsContractChangePreview#create. */
class ContractsContractChangePreviewCreateData
{
    public array $deltaLineItems;
    public array $proposedLineItems;
}

/** ContractsQuote entity data model. */
class ContractsQuote
{
    public ?string $dealId = null;
    public ?string $dealPipeline = null;
    public ?string $dealStage = null;
    public ?string $name = null;
    public string $quoteTemplateId;
}

/** Request payload for ContractsQuote#create. */
class ContractsQuoteCreateData
{
    public string $contract_id;
    public ?string $dealId = null;
    public ?string $dealPipeline = null;
    public ?string $dealStage = null;
    public ?string $name = null;
    public string $quoteTemplateId;
}

/** Item entity data model. */
class Item
{
    public ?string $id = null;
}

/** Request payload for Item#remove. */
class ItemRemoveMatch
{
    public int $id;
    public int $price_book_id;
}

/** PaymentLink entity data model. */
class PaymentLink
{
    public array $acceptedPaymentMethods;
    public array $additionalFormFields;
    public bool $archived;
    public ?string $archivedAt = null;
    public bool $automatedSalesTaxEnabled;
    public ?string $businessUnitId = null;
    public array $checkoutFeeIds;
    public bool $collectFullBillingAddress;
    public bool $collectShippingAddress;
    public int $completedPurchaseCount;
    public bool $createContractOnPurchase;
    public ?string $createdAt = null;
    public string $currencyCode;
    public array $dealConfigurations;
    public ?string $descriptionHtml = null;
    public array $discount;
    public bool $discountCodeEnabled;
    public ?string $discountObjectId = null;
    public array $discounts;
    public ?string $domainId = null;
    public bool $enableDefaultCheckoutFees;
    public ?array $expirationSettings = null;
    public array $feeObjectIds;
    public array $fees;
    public string $formGuid;
    public string $id;
    public bool $includeEmailInSuccessRedirect;
    public bool $isOneTimeUseEnabled;
    public array $lineItemObjectIds;
    public array $lineItems;
    public string $paymentLinkName;
    public string $paymentLinkUrl;
    public string $state;
    public bool $storePaymentMethodAtCheckout;
    public ?string $successUrl = null;
    public array $taxObjectIds;
    public array $taxes;
    public ?string $updatedAt = null;
}

/** Request payload for PaymentLink#load. */
class PaymentLinkLoadMatch
{
    public string $id;
    public ?bool $archived = null;
}

/** Request payload for PaymentLink#list. */
class PaymentLinkListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $created_after = null;
    public ?int $created_at = null;
    public ?int $created_before = null;
    public ?int $limit = null;
    public ?string $sort = null;
    public ?int $updated_after = null;
    public ?int $updated_at = null;
    public ?int $updated_before = null;
}

/** Request payload for PaymentLink#create. */
class PaymentLinkCreateData
{
    public array $acceptedPaymentMethods;
    public array $additionalFormFields;
    public bool $archived;
    public ?string $archivedAt = null;
    public bool $automatedSalesTaxEnabled;
    public ?string $businessUnitId = null;
    public array $checkoutFeeIds;
    public bool $collectFullBillingAddress;
    public bool $collectShippingAddress;
    public int $completedPurchaseCount;
    public bool $createContractOnPurchase;
    public ?string $createdAt = null;
    public string $currencyCode;
    public array $dealConfigurations;
    public ?string $descriptionHtml = null;
    public array $discount;
    public bool $discountCodeEnabled;
    public ?string $discountObjectId = null;
    public array $discounts;
    public ?string $domainId = null;
    public bool $enableDefaultCheckoutFees;
    public ?array $expirationSettings = null;
    public array $feeObjectIds;
    public array $fees;
    public string $formGuid;
    public string $id;
    public bool $includeEmailInSuccessRedirect;
    public bool $isOneTimeUseEnabled;
    public array $lineItemObjectIds;
    public array $lineItems;
    public string $paymentLinkName;
    public string $paymentLinkUrl;
    public string $state;
    public bool $storePaymentMethodAtCheckout;
    public ?string $successUrl = null;
    public array $taxObjectIds;
    public array $taxes;
    public ?string $updatedAt = null;
}

/** Request payload for PaymentLink#update. */
class PaymentLinkUpdateData
{
    public string $id;
    public ?array $acceptedPaymentMethods = null;
    public ?array $additionalFormFields = null;
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?bool $automatedSalesTaxEnabled = null;
    public ?string $businessUnitId = null;
    public ?array $checkoutFeeIds = null;
    public ?bool $collectFullBillingAddress = null;
    public ?bool $collectShippingAddress = null;
    public ?int $completedPurchaseCount = null;
    public ?bool $createContractOnPurchase = null;
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?array $dealConfigurations = null;
    public ?string $descriptionHtml = null;
    public ?array $discount = null;
    public ?bool $discountCodeEnabled = null;
    public ?string $discountObjectId = null;
    public ?array $discounts = null;
    public ?string $domainId = null;
    public ?bool $enableDefaultCheckoutFees = null;
    public ?array $expirationSettings = null;
    public ?array $feeObjectIds = null;
    public ?array $fees = null;
    public ?string $formGuid = null;
    public ?bool $includeEmailInSuccessRedirect = null;
    public ?bool $isOneTimeUseEnabled = null;
    public ?array $lineItemObjectIds = null;
    public ?array $lineItems = null;
    public ?string $paymentLinkName = null;
    public ?string $paymentLinkUrl = null;
    public ?string $state = null;
    public ?bool $storePaymentMethodAtCheckout = null;
    public ?string $successUrl = null;
    public ?array $taxObjectIds = null;
    public ?array $taxes = null;
    public ?string $updatedAt = null;
}

/** PaymentMethodsCommercePaymentMethodSettingsPublic entity data model. */
class PaymentMethodsCommercePaymentMethodSettingsPublic
{
    public array $activeCurrencies;
    public string $commercePaymentMethod;
    public bool $isDefaultOn;
    public array $paymentMethodSettings;
    public array $paymentMethodUpdates;
    public array $supportedCurrencies;
}

/** Request payload for PaymentMethodsCommercePaymentMethodSettingsPublic#list. */
class PaymentMethodsCommercePaymentMethodSettingsPublicListMatch
{
    public ?array $activeCurrencies = null;
    public ?string $commercePaymentMethod = null;
    public ?bool $isDefaultOn = null;
    public ?array $paymentMethodSettings = null;
    public ?array $paymentMethodUpdates = null;
    public ?array $supportedCurrencies = null;
}

/** Request payload for PaymentMethodsCommercePaymentMethodSettingsPublic#update. */
class PaymentMethodsCommercePaymentMethodSettingsPublicUpdateData
{
    public ?array $activeCurrencies = null;
    public ?string $commercePaymentMethod = null;
    public ?bool $isDefaultOn = null;
    public ?array $paymentMethodSettings = null;
    public ?array $paymentMethodUpdates = null;
    public ?array $supportedCurrencies = null;
}

/** PaymentsActionResponseWithSingleResultSimplePublicObject entity data model. */
class PaymentsActionResponseWithSingleResultSimplePublicObject
{
    public string $category;
    public array $context;
    public array $errors;
    public ?string $id = null;
    public array $links;
    public string $message;
    public string $status;
    public ?array $subCategory = null;
}

/** Request payload for PaymentsActionResponseWithSingleResultSimplePublicObject#list. */
class PaymentsActionResponseWithSingleResultSimplePublicObjectListMatch
{
    public string $payment_crm_object_id;
    public string $task_id;
}

/** PaymentsCreateManualPaymentPublic entity data model. */
class PaymentsCreateManualPaymentPublic
{
    public array $associations;
    public ?array $billingAddress = null;
    public string $currencyCode;
    public ?string $customerEmail = null;
    public string $id;
    public float $paymentAmount;
    public string $paymentDate;
    public string $paymentMethod;
}

/** Request payload for PaymentsCreateManualPaymentPublic#create. */
class PaymentsCreateManualPaymentPublicCreateData
{
    public array $associations;
    public ?array $billingAddress = null;
    public string $currencyCode;
    public ?string $customerEmail = null;
    public string $id;
    public float $paymentAmount;
    public string $paymentDate;
    public string $paymentMethod;
}

/** PaymentsSettingsGetBillingSettingsPublic entity data model. */
class PaymentsSettingsGetBillingSettingsPublic
{
    public ?bool $accountGoogleAnalyticsEnabled = null;
    public bool $checkoutPrefillEnabled;
    public bool $collectFullBillingAddress;
    public bool $collectPaymentMethodOnFile;
    public string $defaultFromEmailAddress;
    public bool $paymentsGoogleAnalyticsEnabled;
    public bool $recaptchaEnabled;
}

/** Request payload for PaymentsSettingsGetBillingSettingsPublic#load. */
class PaymentsSettingsGetBillingSettingsPublicLoadMatch
{
    public ?bool $accountGoogleAnalyticsEnabled = null;
    public ?bool $checkoutPrefillEnabled = null;
    public ?bool $collectFullBillingAddress = null;
    public ?bool $collectPaymentMethodOnFile = null;
    public ?string $defaultFromEmailAddress = null;
    public ?bool $paymentsGoogleAnalyticsEnabled = null;
    public ?bool $recaptchaEnabled = null;
}

/** Request payload for PaymentsSettingsGetBillingSettingsPublic#update. */
class PaymentsSettingsGetBillingSettingsPublicUpdateData
{
    public ?bool $accountGoogleAnalyticsEnabled = null;
    public ?bool $checkoutPrefillEnabled = null;
    public ?bool $collectFullBillingAddress = null;
    public ?bool $collectPaymentMethodOnFile = null;
    public ?string $defaultFromEmailAddress = null;
    public ?bool $paymentsGoogleAnalyticsEnabled = null;
    public ?bool $recaptchaEnabled = null;
}

/** PaymentsSettingsGetCheckoutFeesPublic entity data model. */
class PaymentsSettingsGetCheckoutFeesPublic
{
    public string $appliesToPaymentType;
    public array $checkoutFees;
    public float $feeValue;
    public string $feeValueType;
    public string $id;
    public string $name;
}

/** Request payload for PaymentsSettingsGetCheckoutFeesPublic#list. */
class PaymentsSettingsGetCheckoutFeesPublicListMatch
{
    public ?string $appliesToPaymentType = null;
    public ?array $checkoutFees = null;
    public ?float $feeValue = null;
    public ?string $feeValueType = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for PaymentsSettingsGetCheckoutFeesPublic#update. */
class PaymentsSettingsGetCheckoutFeesPublicUpdateData
{
    public ?string $appliesToPaymentType = null;
    public ?array $checkoutFees = null;
    public ?float $feeValue = null;
    public ?string $feeValueType = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** PaymentsSettingsGetPolicySettingsPublic entity data model. */
class PaymentsSettingsGetPolicySettingsPublic
{
    public bool $acknowledgementRequired;
    public ?string $cancellationPolicyText = null;
    public bool $customPolicyEnabled;
    public ?string $refundPolicyText = null;
    public ?string $termsOfServiceUrl = null;
}

/** Request payload for PaymentsSettingsGetPolicySettingsPublic#load. */
class PaymentsSettingsGetPolicySettingsPublicLoadMatch
{
    public ?bool $acknowledgementRequired = null;
    public ?string $cancellationPolicyText = null;
    public ?bool $customPolicyEnabled = null;
    public ?string $refundPolicyText = null;
    public ?string $termsOfServiceUrl = null;
}

/** Request payload for PaymentsSettingsGetPolicySettingsPublic#update. */
class PaymentsSettingsGetPolicySettingsPublicUpdateData
{
    public ?bool $acknowledgementRequired = null;
    public ?string $cancellationPolicyText = null;
    public ?bool $customPolicyEnabled = null;
    public ?string $refundPolicyText = null;
    public ?string $termsOfServiceUrl = null;
}

/** PaymentsSettingsGetShippingSettingsPublic entity data model. */
class PaymentsSettingsGetShippingSettingsPublic
{
    public bool $collectShippingAddressByDefault;
    public array $countriesShippedTo;
}

/** Request payload for PaymentsSettingsGetShippingSettingsPublic#list. */
class PaymentsSettingsGetShippingSettingsPublicListMatch
{
    public ?bool $collectShippingAddressByDefault = null;
    public ?array $countriesShippedTo = null;
}

/** Request payload for PaymentsSettingsGetShippingSettingsPublic#update. */
class PaymentsSettingsGetShippingSettingsPublicUpdateData
{
    public ?bool $collectShippingAddressByDefault = null;
    public ?array $countriesShippedTo = null;
}

/** PaymentsaccountsPaymentAccountView entity data model. */
class PaymentsaccountsPaymentAccountView
{
    public bool $canPayout;
    public bool $canTransact;
    public ?string $createdAt = null;
    public array $eligibleProcessorTypes;
    public string $enrollmentState;
    public bool $hasTransacted;
    public string $id;
    public ?string $lastTransactedAt = null;
    public string $processorType;
    public ?string $updatedAt = null;
}

/** Request payload for PaymentsaccountsPaymentAccountView#list. */
class PaymentsaccountsPaymentAccountViewListMatch
{
    public ?bool $canPayout = null;
    public ?bool $canTransact = null;
    public ?string $createdAt = null;
    public ?array $eligibleProcessorTypes = null;
    public ?string $enrollmentState = null;
    public ?bool $hasTransacted = null;
    public ?string $id = null;
    public ?string $lastTransactedAt = null;
    public ?string $processorType = null;
    public ?string $updatedAt = null;
}

/** PriceBook entity data model. */
class PriceBook
{
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public bool $autoAssignmentEnabled;
    public int $countOfIncludedProducts;
    public ?string $createdAt = null;
    public array $customProperties;
    public ?string $description = null;
    public string $id;
    public ?string $name = null;
    public string $status;
    public array $supportedCurrencies;
    public ?string $updatedAt = null;
}

/** Request payload for PriceBook#load. */
class PriceBookLoadMatch
{
    public int $id;
    public ?bool $archived = null;
}

/** Request payload for PriceBook#list. */
class PriceBookListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $limit = null;
}

/** Request payload for PriceBook#create. */
class PriceBookCreateData
{
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public bool $autoAssignmentEnabled;
    public int $countOfIncludedProducts;
    public ?string $createdAt = null;
    public array $customProperties;
    public ?string $description = null;
    public string $id;
    public ?string $name = null;
    public string $status;
    public array $supportedCurrencies;
    public ?string $updatedAt = null;
}

/** Request payload for PriceBook#update. */
class PriceBookUpdateData
{
    public int $id;
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?bool $autoAssignmentEnabled = null;
    public ?int $countOfIncludedProducts = null;
    public ?string $createdAt = null;
    public ?array $customProperties = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?string $status = null;
    public ?array $supportedCurrencies = null;
    public ?string $updatedAt = null;
}

/** PriceBooksBatchResponsePriceBookItem entity data model. */
class PriceBooksBatchResponsePriceBookItem
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for PriceBooksBatchResponsePriceBookItem#create. */
class PriceBooksBatchResponsePriceBookItemCreateData
{
    public int $price_book_id;
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** PriceBooksCollectionResponsePriceBookItemResponseForward entity data model. */
class PriceBooksCollectionResponsePriceBookItemResponseForward
{
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?string $billingFrequency = null;
    public ?string $billingPeriod = null;
    public ?string $costOfGoodsSold = null;
    public ?string $createdAt = null;
    public array $customProperties;
    public ?string $description = null;
    public string $id;
    public ?string $images = null;
    public ?string $name = null;
    public ?string $priceBookId = null;
    public array $pricing;
    public ?string $productClassification = null;
    public string $productId;
    public ?string $productType = null;
    public ?string $recurringBillingTerms = null;
    public ?string $sku = null;
    public ?string $status = null;
    public ?string $taxCategory = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for PriceBooksCollectionResponsePriceBookItemResponseForward#list. */
class PriceBooksCollectionResponsePriceBookItemResponseForwardListMatch
{
    public int $price_book_id;
    public ?string $after = null;
    public ?int $limit = null;
    public ?array $property = null;
}

/** PriceBooksPriceBook entity data model. */
class PriceBooksPriceBook
{
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public bool $autoAssignmentEnabled;
    public int $countOfIncludedProducts;
    public ?string $createdAt = null;
    public array $customProperties;
    public ?string $description = null;
    public string $id;
    public ?string $name = null;
    public string $status;
    public array $supportedCurrencies;
    public ?string $updatedAt = null;
}

/** Request payload for PriceBooksPriceBook#create. */
class PriceBooksPriceBookCreateData
{
    public int $price_book_id;
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public bool $autoAssignmentEnabled;
    public int $countOfIncludedProducts;
    public ?string $createdAt = null;
    public array $customProperties;
    public ?string $description = null;
    public string $id;
    public ?string $name = null;
    public string $status;
    public array $supportedCurrencies;
    public ?string $updatedAt = null;
}

/** PriceBooksPriceBookItem entity data model. */
class PriceBooksPriceBookItem
{
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?string $billingFrequency = null;
    public ?string $billingPeriod = null;
    public ?string $costOfGoodsSold = null;
    public ?string $createdAt = null;
    public array $customProperties;
    public ?string $description = null;
    public string $id;
    public ?string $images = null;
    public ?string $name = null;
    public ?string $priceBookId = null;
    public array $pricing;
    public ?string $productClassification = null;
    public string $productId;
    public ?string $productType = null;
    public ?string $recurringBillingTerms = null;
    public ?string $sku = null;
    public ?string $status = null;
    public ?string $taxCategory = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for PriceBooksPriceBookItem#load. */
class PriceBooksPriceBookItemLoadMatch
{
    public int $id;
    public int $price_book_id;
    public ?bool $archived = null;
    public ?array $property = null;
}

/** Request payload for PriceBooksPriceBookItem#create. */
class PriceBooksPriceBookItemCreateData
{
    public int $price_book_id;
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?string $billingFrequency = null;
    public ?string $billingPeriod = null;
    public ?string $costOfGoodsSold = null;
    public ?string $createdAt = null;
    public array $customProperties;
    public ?string $description = null;
    public string $id;
    public ?string $images = null;
    public ?string $name = null;
    public ?string $priceBookId = null;
    public array $pricing;
    public ?string $productClassification = null;
    public string $productId;
    public ?string $productType = null;
    public ?string $recurringBillingTerms = null;
    public ?string $sku = null;
    public ?string $status = null;
    public ?string $taxCategory = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for PriceBooksPriceBookItem#update. */
class PriceBooksPriceBookItemUpdateData
{
    public int $id;
    public int $price_book_id;
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?string $billingFrequency = null;
    public ?string $billingPeriod = null;
    public ?string $costOfGoodsSold = null;
    public ?string $createdAt = null;
    public ?array $customProperties = null;
    public ?string $description = null;
    public ?string $images = null;
    public ?string $name = null;
    public ?string $priceBookId = null;
    public ?array $pricing = null;
    public ?string $productClassification = null;
    public ?string $productId = null;
    public ?string $productType = null;
    public ?string $recurringBillingTerms = null;
    public ?string $sku = null;
    public ?string $status = null;
    public ?string $taxCategory = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
}

/** PriceBooksPriceBookValidate entity data model. */
class PriceBooksPriceBookValidate
{
    public array $errors;
    public bool $isValid;
}

/** Request payload for PriceBooksPriceBookValidate#create. */
class PriceBooksPriceBookValidateCreateData
{
    public int $price_book_id;
    public array $errors;
    public bool $isValid;
}

