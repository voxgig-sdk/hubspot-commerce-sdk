# HubspotCommerce PHP SDK



The PHP SDK for the HubspotCommerce API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Advanced()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hubspot-commerce-sdk/releases](https://github.com/voxgig-sdk/hubspot-commerce-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'hubspotcommerce_sdk.php';

$client = new HubspotCommerceSDK([
    "apikey" => getenv("HUBSPOT_COMMERCE_APIKEY"),
]);
```

### 3. Load a pricebookspricebookitem

PriceBooksPriceBookItem is nested under price_book, so provide the `price_book_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the PriceBooksPriceBookItem record (throws on error).
    $pricebookspricebookitem = $client->PriceBooksPriceBookItem()->load(["price_book_id" => 1, "id" => 1]);
    print_r($pricebookspricebookitem->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Advanced record.
$created = $client->Advanced()->create(["payment_crm_object_id" => "example_payment_crm_object_id"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $paymentsaccountspaymentaccountviews = $client->PaymentsaccountsPaymentAccountView()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = HubspotCommerceSDK::test([
    "entity" => ["pricebook" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$pricebook = $client->PriceBook()->list();
print_r(array_map(fn($item) => $item->data_get(), $pricebook));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new HubspotCommerceSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_COMMERCE_TEST_LIVE=TRUE
HUBSPOT_COMMERCE_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### HubspotCommerceSDK

```php
require_once 'hubspotcommerce_sdk.php';
$client = new HubspotCommerceSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = HubspotCommerceSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### HubspotCommerceSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Advanced` | `($data): AdvancedEntity` | Create an Advanced entity instance. |
| `Basic` | `($data): BasicEntity` | Create a Basic entity instance. |
| `Batch` | `($data): BatchEntity` | Create a Batch entity instance. |
| `Contract` | `($data): ContractEntity` | Create a Contract entity instance. |
| `ContractsContract` | `($data): ContractsContractEntity` | Create a ContractsContract entity instance. |
| `ContractsContractChange` | `($data): ContractsContractChangeEntity` | Create a ContractsContractChange entity instance. |
| `ContractsContractChangePreview` | `($data): ContractsContractChangePreviewEntity` | Create a ContractsContractChangePreview entity instance. |
| `ContractsQuote` | `($data): ContractsQuoteEntity` | Create a ContractsQuote entity instance. |
| `Item` | `($data): ItemEntity` | Create an Item entity instance. |
| `PaymentLink` | `($data): PaymentLinkEntity` | Create a PaymentLink entity instance. |
| `PaymentMethodsCommercePaymentMethodSettingsPublic` | `($data): PaymentMethodsCommercePaymentMethodSettingsPublicEntity` | Create a PaymentMethodsCommercePaymentMethodSettingsPublic entity instance. |
| `PaymentsActionResponseWithSingleResultSimplePublicObject` | `($data): PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` | Create a PaymentsActionResponseWithSingleResultSimplePublicObject entity instance. |
| `PaymentsCreateManualPaymentPublic` | `($data): PaymentsCreateManualPaymentPublicEntity` | Create a PaymentsCreateManualPaymentPublic entity instance. |
| `PaymentsSettingsGetBillingSettingsPublic` | `($data): PaymentsSettingsGetBillingSettingsPublicEntity` | Create a PaymentsSettingsGetBillingSettingsPublic entity instance. |
| `PaymentsSettingsGetCheckoutFeesPublic` | `($data): PaymentsSettingsGetCheckoutFeesPublicEntity` | Create a PaymentsSettingsGetCheckoutFeesPublic entity instance. |
| `PaymentsSettingsGetPolicySettingsPublic` | `($data): PaymentsSettingsGetPolicySettingsPublicEntity` | Create a PaymentsSettingsGetPolicySettingsPublic entity instance. |
| `PaymentsSettingsGetShippingSettingsPublic` | `($data): PaymentsSettingsGetShippingSettingsPublicEntity` | Create a PaymentsSettingsGetShippingSettingsPublic entity instance. |
| `PaymentsaccountsPaymentAccountView` | `($data): PaymentsaccountsPaymentAccountViewEntity` | Create a PaymentsaccountsPaymentAccountView entity instance. |
| `PriceBook` | `($data): PriceBookEntity` | Create a PriceBook entity instance. |
| `PriceBooksBatchResponsePriceBookItem` | `($data): PriceBooksBatchResponsePriceBookItemEntity` | Create a PriceBooksBatchResponsePriceBookItem entity instance. |
| `PriceBooksCollectionResponsePriceBookItemResponseForward` | `($data): PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` | Create a PriceBooksCollectionResponsePriceBookItemResponseForward entity instance. |
| `PriceBooksPriceBook` | `($data): PriceBooksPriceBookEntity` | Create a PriceBooksPriceBook entity instance. |
| `PriceBooksPriceBookItem` | `($data): PriceBooksPriceBookItemEntity` | Create a PriceBooksPriceBookItem entity instance. |
| `PriceBooksPriceBookValidate` | `($data): PriceBooksPriceBookValidateEntity` | Create a PriceBooksPriceBookValidate entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Advanced

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async`

#### Basic

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}`

#### Batch

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive`

#### Contract

| Field | Description |
| --- | --- |
| `addressTypesToCollect` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | An array of allowed payment methods. |
| `annualContractValue` | The annual value of the contract. |
| `automatedTaxesEnabled` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | An object representing the billing address for the contract. |
| `billingCompanyId` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | The process for collecting payments. |
| `contractEffectiveDate` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | The unique identifier of the source of the contract. |
| `createdAt` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | The current monthly recurring revenue for the contract. |
| `customProperties` | A map of custom property names to their values. |
| `dealId` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | The discount code applied to the contract. |
| `endDate` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | The unique identifier for the contract. |
| `language` | The language associated with the contract. |
| `lineItems` | An array of line items included in the contract. |
| `locale` | The locale associated with the contract. |
| `name` | The name of the contract. |
| `netPaymentTerms` | The net payment terms for the contract, represented as an integer. |
| `ownerId` | An object representing the ID of the contract owner. |
| `paymentEnabled` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | The payment method used for the contract. |
| `poNumber` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | The value of the contract before termination. |
| `renewalContractId` | The unique identifier of the renewal contract. |
| `renewalDate` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | An object representing the domain of the seller's company. |
| `sellerCompanyName` | The name of the seller's company. |
| `sellerEmail` | The email address of the seller. |
| `sellerFirstName` | The first name of the seller. |
| `sellerLastName` | The last name of the seller. |
| `sellerPhone` | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | The phone number of the seller. |
| `startDate` | The start date of the contract, in ISO 8601 format. |
| `status` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | The total amount of taxes collected under the contract. |
| `totalContractValue` | The total value of the contract. |
| `totalPaidAmount` | The total amount paid under the contract. |
| `updatedAt` | The date and time when the contract was last updated, in ISO 8601 format. |

Operations: Create, Load, Update.

API path: `/commerce/contracts/2027-03-beta/contracts`

#### ContractsContract

| Field | Description |
| --- | --- |
| `addressTypesToCollect` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | An array of allowed payment methods. |
| `annualContractValue` | The annual value of the contract. |
| `automatedTaxesEnabled` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` |  |
| `billingCompanyId` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | The process for collecting payments. |
| `contractEffectiveDate` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | The unique identifier of the source of the contract. |
| `createdAt` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | The current monthly recurring revenue for the contract. |
| `customProperties` | A map of custom property names to their values. |
| `dealId` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | The discount code applied to the contract. |
| `endDate` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | The unique identifier for the contract. |
| `language` | The language associated with the contract. |
| `lineItems` | An array of line items included in the contract. |
| `locale` | The locale associated with the contract. |
| `name` | The name of the contract. |
| `netPaymentTerms` | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | The payment method used for the contract. |
| `poNumber` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | The value of the contract before termination. |
| `renewalContractId` | The unique identifier of the renewal contract. |
| `renewalDate` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` |  |
| `sellerCompanyName` | The name of the seller's company. |
| `sellerEmail` | The email address of the seller. |
| `sellerFirstName` | The first name of the seller. |
| `sellerLastName` | The last name of the seller. |
| `sellerPhoneNumber` | The phone number of the seller. |
| `startDate` | The start date of the contract, in ISO 8601 format. |
| `status` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | The total amount of taxes collected under the contract. |
| `totalContractValue` | The total value of the contract. |
| `totalPaidAmount` | The total amount paid under the contract. |
| `updatedAt` | The date and time when the contract was last updated, in ISO 8601 format. |

Operations: Create.

API path: `/commerce/contracts/2027-03-beta/contracts/{contractId}/terminate`

#### ContractsContractChange

| Field | Description |
| --- | --- |
| `contractId` | The unique identifier of the contract associated with this change. |
| `createdAt` | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | The unique identifier for the contract change. |
| `lineItemChanges` | An array of changes to line items associated with the contract change. |
| `name` | The name of the contract change. |
| `proposedLineItems` | An array of line items that are proposed as part of the contract change. |
| `prorating` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | The unique identifier of the quote associated with this contract change. |
| `status` | The current status of the contract change. |
| `type` | The type of contract change. |
| `updatedAt` | The date and time when the contract change was last updated, in ISO 8601 format. |

Operations: Create, List, Load, Update.

API path: `/commerce/contracts/2027-03-beta/changes/{changeId}/accept`

#### ContractsContractChangePreview

| Field | Description |
| --- | --- |
| `deltaLineItems` | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

Operations: Create.

API path: `/commerce/contracts/2027-03-beta/changes/preview`

#### ContractsQuote

| Field | Description |
| --- | --- |
| `dealId` | The unique identifier of the deal associated with the renewal quote. |
| `dealPipeline` | The identifier of the pipeline in which the deal is located. |
| `dealStage` | The identifier of the stage within the pipeline that the deal is currently in. |
| `name` | The name of the renewal quote. |
| `quoteTemplateId` | The unique identifier of the quote template to be used for creating the renewal quote. |

Operations: Create.

API path: `/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes`

#### Item

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}`

#### PaymentLink

| Field | Description |
| --- | --- |
| `acceptedPaymentMethods` | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | An array of additional form fields included in the payment link. |
| `archived` | A boolean indicating whether the payment link is archived. |
| `archivedAt` | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | An object containing deal configuration settings. |
| `descriptionHtml` | The HTML description of the payment link, represented as a string. |
| `discount` |  |
| `discountCodeEnabled` | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | An array of discount objects associated with the payment link. |
| `domainId` | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | An array of fee objects associated with the payment link. |
| `formGuid` | The form GUID associated with the payment link, represented as a string. |
| `id` | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | An array of line items associated with the payment link. |
| `paymentLinkName` | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | The URL of the payment link, represented as a string. |
| `state` | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | An array of tax objects associated with the payment link. |
| `updatedAt` | The date and time when the payment link was last updated, in ISO 8601 format. |

Operations: Create, List, Load, Update.

API path: `/commerce/payment-links/2026-09/payment-links`

#### PaymentMethodsCommercePaymentMethodSettingsPublic

| Field | Description |
| --- | --- |
| `activeCurrencies` | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | The type of payment method. |
| `isDefaultOn` | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | A full list of currencies that are supported by the bundled commercePaymentMethod. |

Operations: List, Update.

API path: `/commerce/payment-methods/2027-03-beta/settings`

#### PaymentsActionResponseWithSingleResultSimplePublicObject

| Field | Description |
| --- | --- |
| `category` | A string indicating the category of the error. |
| `context` | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | An array of ErrorDetail objects providing further information about the error. |
| `id` | A string that uniquely identifies this specific error instance. |
| `links` | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | A string containing a human-readable message describing the error. |
| `status` | A string representing the status of the error. |
| `subCategory` | An object providing more specific details about the error category. |

Operations: List.

API path: `/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status`

#### PaymentsCreateManualPaymentPublic

| Field | Description |
| --- | --- |
| `associations` | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` |  |
| `currencyCode` | The currency code for the payment, represented as a string. |
| `customerEmail` | The email address of the customer making the payment, represented as a string. |
| `id` | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | The amount of the payment, represented as a number. |
| `paymentDate` | The date of the payment, represented as a string. |
| `paymentMethod` | The method used for the payment, represented as a string. |

Operations: Create.

API path: `/commerce/payments/2027-03-beta/manual-payments`

#### PaymentsSettingsGetBillingSettingsPublic

| Field | Description |
| --- | --- |
| `accountGoogleAnalyticsEnabled` | Indicates whether Google Analytics tracking is enabled for the account. |
| `checkoutPrefillEnabled` | Indicates whether checkout fields should be prefilled. |
| `collectFullBillingAddress` | Indicates whether the full billing address should be collected. |
| `collectPaymentMethodOnFile` | Indicates whether a payment method should be kept on file. |
| `defaultFromEmailAddress` | The default email address used for sending communications. |
| `paymentsGoogleAnalyticsEnabled` | Indicates whether Google Analytics tracking is enabled for payments. |
| `recaptchaEnabled` | Indicates whether reCAPTCHA is enabled for additional security. |

Operations: Load, Update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/billing`

#### PaymentsSettingsGetCheckoutFeesPublic

| Field | Description |
| --- | --- |
| `appliesToPaymentType` | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | The unique identifier for this checkout fee configuration. |
| `name` | The name of the checkout fee, used for identification and display purposes. |

Operations: List, Update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees`

#### PaymentsSettingsGetPolicySettingsPublic

| Field | Description |
| --- | --- |
| `acknowledgementRequired` | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | A boolean indicating whether a custom policy is enabled. |
| `refundPolicyText` | A string containing the text of the refund policy. |
| `termsOfServiceUrl` | A string representing the URL of the terms of service. |

Operations: Load, Update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/policy`

#### PaymentsSettingsGetShippingSettingsPublic

| Field | Description |
| --- | --- |
| `collectShippingAddressByDefault` | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | An array of strings representing the list of countries to which shipping is available. |

Operations: List, Update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/shipping`

#### PaymentsaccountsPaymentAccountView

| Field | Description |
| --- | --- |
| `canPayout` | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | An array of processor types that the account is eligible to use. |
| `enrollmentState` | The current enrollment state of the payment account. |
| `hasTransacted` | A boolean indicating whether the account has ever processed a transaction. |
| `id` | The portalId for the payment account. |
| `lastTransactedAt` | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | The type of payment processor associated with the account. |
| `updatedAt` | The date and time when the payment account was last updated, in ISO 8601 format. |

Operations: List.

API path: `/commerce/payment-accounts/2026-09/status`

#### PriceBook

| Field | Description |
| --- | --- |
| `archived` | A boolean indicating whether this price book is archived. |
| `archivedAt` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | The number of products included in this price book. |
| `createdAt` | The date and time when this price book was created. |
| `customProperties` | A map of custom property names to their values for this price book. |
| `description` | A description of the price book. |
| `id` | The unique identifier for this price book. |
| `name` | The name of the price book. |
| `status` | The current status of the price book. |
| `supportedCurrencies` | An array of currency codes that this price book supports. |
| `updatedAt` | The date and time when this price book was last updated. |

Operations: Create, List, Load, Update.

API path: `/commerce/price-books/2026-09/price-books`

#### PriceBooksBatchResponsePriceBookItem

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | The current status of the batch operation. |

Operations: Create.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create`

#### PriceBooksCollectionResponsePriceBookItemResponseForward

| Field | Description |
| --- | --- |
| `archived` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | The billing period for the price book item. |
| `costOfGoodsSold` | The cost of goods sold for the price book item. |
| `createdAt` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | A map of custom property names to their values for the price book item. |
| `description` | A description of the price book item. |
| `id` | The unique identifier for the price book item. |
| `images` | A string representing images associated with the price book item. |
| `name` | The name of the price book item. |
| `priceBookId` | The unique identifier for the price book containing this item. |
| `pricing` |  |
| `productClassification` | The classification of the product. |
| `productId` | The unique identifier for the product associated with the price book item. |
| `productType` | The type of product. |
| `recurringBillingTerms` | The terms of recurring billing for the price book item. |
| `sku` | The stock keeping unit (SKU) of the price book item. |
| `status` | The current status of the price book item. |
| `taxCategory` | The tax category of the price book item. |
| `updatedAt` | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | A URL associated with the price book item. |

Operations: List.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items`

#### PriceBooksPriceBook

| Field | Description |
| --- | --- |
| `archived` | A boolean indicating whether this price book is archived. |
| `archivedAt` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | The number of products included in this price book. |
| `createdAt` | The date and time when this price book was created. |
| `customProperties` | A map of custom property names to their values for this price book. |
| `description` | A description of the price book. |
| `id` | The unique identifier for this price book. |
| `name` | The name of the price book. |
| `status` | The current status of the price book. |
| `supportedCurrencies` | An array of currency codes that this price book supports. |
| `updatedAt` | The date and time when this price book was last updated. |

Operations: Create.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/activate`

#### PriceBooksPriceBookItem

| Field | Description |
| --- | --- |
| `archived` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | The billing period for the price book item. |
| `costOfGoodsSold` | The cost of goods sold for the price book item. |
| `createdAt` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | A map of custom property names to their values for the price book item. |
| `description` | A description of the price book item. |
| `id` | The unique identifier for the price book item. |
| `images` | A string representing images associated with the price book item. |
| `name` | The name of the price book item. |
| `priceBookId` | The unique identifier for the price book containing this item. |
| `pricing` |  |
| `productClassification` | The classification of the product. |
| `productId` | The unique identifier for the product associated with the price book item. |
| `productType` | The type of product. |
| `recurringBillingTerms` | The terms of recurring billing for the price book item. |
| `sku` | The stock keeping unit (SKU) of the price book item. |
| `status` | The current status of the price book item. |
| `taxCategory` | The tax category of the price book item. |
| `updatedAt` | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | A URL associated with the price book item. |

Operations: Create, Load, Update.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items`

#### PriceBooksPriceBookValidate

| Field | Description |
| --- | --- |
| `errors` | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | A boolean indicating whether the price book is valid. |

Operations: Create.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/validate`



## Entities


### Advanced

Create an instance: `$advanced = $client->Advanced();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$advanced = $client->Advanced()->create([
    "payment_crm_object_id" => null, // string
]);
```


### Basic

Create an instance: `$basic = $client->Basic();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Batch

Create an instance: `$batch = $client->Batch();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$batch = $client->Batch()->create([
    "price_book_id" => null, // int
]);
```


### Contract

Create an instance: `$contract = $client->Contract();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addressTypesToCollect` | `array` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `array` | An array of allowed payment methods. |
| `annualContractValue` | `float` | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `array` | An object representing the billing address for the contract. |
| `billingCompanyId` | `string` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | The process for collecting payments. |
| `contractEffectiveDate` | `string` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | The unique identifier of the source of the contract. |
| `createdAt` | `string` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float` | The current monthly recurring revenue for the contract. |
| `customProperties` | `array` | A map of custom property names to their values. |
| `dealId` | `string` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | The discount code applied to the contract. |
| `endDate` | `string` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | The unique identifier for the contract. |
| `language` | `string` | The language associated with the contract. |
| `lineItems` | `array` | An array of line items included in the contract. |
| `locale` | `string` | The locale associated with the contract. |
| `name` | `string` | The name of the contract. |
| `netPaymentTerms` | `int` | The net payment terms for the contract, represented as an integer. |
| `ownerId` | `array` | An object representing the ID of the contract owner. |
| `paymentEnabled` | `bool` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | The payment method used for the contract. |
| `poNumber` | `string` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float` | The value of the contract before termination. |
| `renewalContractId` | `string` | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `array` | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | `array` | An object representing the domain of the seller's company. |
| `sellerCompanyName` | `string` | The name of the seller's company. |
| `sellerEmail` | `string` | The email address of the seller. |
| `sellerFirstName` | `string` | The first name of the seller. |
| `sellerLastName` | `string` | The last name of the seller. |
| `sellerPhone` | `array` | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | `string` | The phone number of the seller. |
| `startDate` | `string` | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float` | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float` | The total value of the contract. |
| `totalPaidAmount` | `float` | The total amount paid under the contract. |
| `updatedAt` | `string` | The date and time when the contract was last updated, in ISO 8601 format. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Contract record (throws on error).
$contract = $client->Contract()->load(["id" => "contract_id"]);
```

#### Example: Create

```php
$contract = $client->Contract()->create([
    "addressTypesToCollect" => null, // array
    "allowedPaymentMethods" => null, // array
    "automatedTaxesEnabled" => null, // bool
    "customProperties" => null, // array
    "hubspotBillingEnabled" => null, // bool
    "id" => null, // string
    "lineItems" => null, // array
    "ownerId" => null, // array
    "paymentEnabled" => null, // bool
    "sellerCompanyDomain" => null, // array
    "sellerPhone" => null, // array
    "status" => null, // string
    "storePaymentMethodAtCheckout" => null, // bool
]);
```


### ContractsContract

Create an instance: `$contracts_contract = $client->ContractsContract();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addressTypesToCollect` | `array` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `array` | An array of allowed payment methods. |
| `annualContractValue` | `float` | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `array` |  |
| `billingCompanyId` | `string` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | The process for collecting payments. |
| `contractEffectiveDate` | `string` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | The unique identifier of the source of the contract. |
| `createdAt` | `string` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float` | The current monthly recurring revenue for the contract. |
| `customProperties` | `array` | A map of custom property names to their values. |
| `dealId` | `string` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | The discount code applied to the contract. |
| `endDate` | `string` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | The unique identifier for the contract. |
| `language` | `string` | The language associated with the contract. |
| `lineItems` | `array` | An array of line items included in the contract. |
| `locale` | `string` | The locale associated with the contract. |
| `name` | `string` | The name of the contract. |
| `netPaymentTerms` | `int` | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | `bool` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | The payment method used for the contract. |
| `poNumber` | `string` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float` | The value of the contract before termination. |
| `renewalContractId` | `string` | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `array` |  |
| `sellerCompanyName` | `string` | The name of the seller's company. |
| `sellerEmail` | `string` | The email address of the seller. |
| `sellerFirstName` | `string` | The first name of the seller. |
| `sellerLastName` | `string` | The last name of the seller. |
| `sellerPhoneNumber` | `string` | The phone number of the seller. |
| `startDate` | `string` | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float` | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float` | The total value of the contract. |
| `totalPaidAmount` | `float` | The total amount paid under the contract. |
| `updatedAt` | `string` | The date and time when the contract was last updated, in ISO 8601 format. |

#### Example: Create

```php
$contracts_contract = $client->ContractsContract()->create([
    "contract_id" => null, // string
    "addressTypesToCollect" => null, // array
    "allowedPaymentMethods" => null, // array
    "automatedTaxesEnabled" => null, // bool
    "customProperties" => null, // array
    "hubspotBillingEnabled" => null, // bool
    "id" => null, // string
    "lineItems" => null, // array
    "paymentEnabled" => null, // bool
    "status" => null, // string
    "storePaymentMethodAtCheckout" => null, // bool
]);
```


### ContractsContractChange

Create an instance: `$contracts_contract_change = $client->ContractsContractChange();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contractId` | `string` | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | `array` | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | `string` | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | `string` | The unique identifier for the contract change. |
| `lineItemChanges` | `array` | An array of changes to line items associated with the contract change. |
| `name` | `string` | The name of the contract change. |
| `proposedLineItems` | `array` | An array of line items that are proposed as part of the contract change. |
| `prorating` | `bool` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | The unique identifier of the quote associated with this contract change. |
| `status` | `string` | The current status of the contract change. |
| `type` | `string` | The type of contract change. |
| `updatedAt` | `string` | The date and time when the contract change was last updated, in ISO 8601 format. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ContractsContractChange record (throws on error).
$contracts_contract_change = $client->ContractsContractChange()->load(["id" => "contracts_contract_change_id"]);
```

#### Example: List

```php
// list() returns an array of ContractsContractChange records (throws on error).
$contracts_contract_changes = $client->ContractsContractChange()->list();
```

#### Example: Create

```php
$contracts_contract_change = $client->ContractsContractChange()->create([
    "contractId" => null, // string
    "deltaLineItems" => null, // array
    "id" => null, // string
    "lineItemChanges" => null, // array
    "proposedLineItems" => null, // array
    "prorating" => null, // bool
    "status" => null, // string
    "type" => null, // string
]);
```


### ContractsContractChangePreview

Create an instance: `$contracts_contract_change_preview = $client->ContractsContractChangePreview();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaLineItems` | `array` | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | `array` | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

#### Example: Create

```php
$contracts_contract_change_preview = $client->ContractsContractChangePreview()->create([
    "deltaLineItems" => null, // array
    "proposedLineItems" => null, // array
]);
```


### ContractsQuote

Create an instance: `$contracts_quote = $client->ContractsQuote();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dealId` | `string` | The unique identifier of the deal associated with the renewal quote. |
| `dealPipeline` | `string` | The identifier of the pipeline in which the deal is located. |
| `dealStage` | `string` | The identifier of the stage within the pipeline that the deal is currently in. |
| `name` | `string` | The name of the renewal quote. |
| `quoteTemplateId` | `string` | The unique identifier of the quote template to be used for creating the renewal quote. |

#### Example: Create

```php
$contracts_quote = $client->ContractsQuote()->create([
    "contract_id" => null, // string
    "quoteTemplateId" => null, // string
]);
```


### Item

Create an instance: `$item = $client->Item();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### PaymentLink

Create an instance: `$payment_link = $client->PaymentLink();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptedPaymentMethods` | `array` | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | `array` | An array of additional form fields included in the payment link. |
| `archived` | `bool` | A boolean indicating whether the payment link is archived. |
| `archivedAt` | `string` | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | `bool` | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | `string` | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | `array` | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | `bool` | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | `bool` | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | `int` | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | `bool` | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | `string` | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | `array` | An object containing deal configuration settings. |
| `descriptionHtml` | `string` | The HTML description of the payment link, represented as a string. |
| `discount` | `array` |  |
| `discountCodeEnabled` | `bool` | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | `string` | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | `array` | An array of discount objects associated with the payment link. |
| `domainId` | `string` | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | `bool` | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | `array` | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | `array` | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | `array` | An array of fee objects associated with the payment link. |
| `formGuid` | `string` | The form GUID associated with the payment link, represented as a string. |
| `id` | `string` | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | `bool` | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | `bool` | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | `array` | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | `array` | An array of line items associated with the payment link. |
| `paymentLinkName` | `string` | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | `string` | The URL of the payment link, represented as a string. |
| `state` | `string` | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | `bool` | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | `string` | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | `array` | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | `array` | An array of tax objects associated with the payment link. |
| `updatedAt` | `string` | The date and time when the payment link was last updated, in ISO 8601 format. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PaymentLink record (throws on error).
$payment_link = $client->PaymentLink()->load(["id" => "payment_link_id"]);
```

#### Example: List

```php
// list() returns an array of PaymentLink records (throws on error).
$payment_links = $client->PaymentLink()->list();
```

#### Example: Create

```php
$payment_link = $client->PaymentLink()->create([
    "acceptedPaymentMethods" => null, // array
    "additionalFormFields" => null, // array
    "archived" => null, // bool
    "automatedSalesTaxEnabled" => null, // bool
    "checkoutFeeIds" => null, // array
    "collectFullBillingAddress" => null, // bool
    "collectShippingAddress" => null, // bool
    "completedPurchaseCount" => null, // int
    "createContractOnPurchase" => null, // bool
    "currencyCode" => null, // string
    "dealConfigurations" => null, // array
    "discount" => null, // array
    "discountCodeEnabled" => null, // bool
    "discounts" => null, // array
    "enableDefaultCheckoutFees" => null, // bool
    "feeObjectIds" => null, // array
    "fees" => null, // array
    "formGuid" => null, // string
    "id" => null, // string
    "includeEmailInSuccessRedirect" => null, // bool
    "isOneTimeUseEnabled" => null, // bool
    "lineItemObjectIds" => null, // array
    "lineItems" => null, // array
    "paymentLinkName" => null, // string
    "paymentLinkUrl" => null, // string
    "state" => null, // string
    "storePaymentMethodAtCheckout" => null, // bool
    "taxObjectIds" => null, // array
    "taxes" => null, // array
]);
```


### PaymentMethodsCommercePaymentMethodSettingsPublic

Create an instance: `$payment_methods_commerce_payment_method_settings_public = $client->PaymentMethodsCommercePaymentMethodSettingsPublic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeCurrencies` | `array` | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | `string` | The type of payment method. |
| `isDefaultOn` | `bool` | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | `array` | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | `array` | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | `array` | A full list of currencies that are supported by the bundled commercePaymentMethod. |

#### Example: List

```php
// list() returns an array of PaymentMethodsCommercePaymentMethodSettingsPublic records (throws on error).
$payment_methods_commerce_payment_method_settings_publics = $client->PaymentMethodsCommercePaymentMethodSettingsPublic()->list();
```


### PaymentsActionResponseWithSingleResultSimplePublicObject

Create an instance: `$payments_action_response_with_single_result_simple_public_object = $client->PaymentsActionResponseWithSingleResultSimplePublicObject();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | A string indicating the category of the error. |
| `context` | `array` | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | `array` | An array of ErrorDetail objects providing further information about the error. |
| `id` | `string` | A string that uniquely identifies this specific error instance. |
| `links` | `array` | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | `string` | A string containing a human-readable message describing the error. |
| `status` | `string` | A string representing the status of the error. |
| `subCategory` | `array` | An object providing more specific details about the error category. |

#### Example: List

```php
// list() returns an array of PaymentsActionResponseWithSingleResultSimplePublicObject records (throws on error).
$payments_action_response_with_single_result_simple_public_objects = $client->PaymentsActionResponseWithSingleResultSimplePublicObject()->list();
```


### PaymentsCreateManualPaymentPublic

Create an instance: `$payments_create_manual_payment_public = $client->PaymentsCreateManualPaymentPublic();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associations` | `array` | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` | `array` |  |
| `currencyCode` | `string` | The currency code for the payment, represented as a string. |
| `customerEmail` | `string` | The email address of the customer making the payment, represented as a string. |
| `id` | `string` | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | `float` | The amount of the payment, represented as a number. |
| `paymentDate` | `string` | The date of the payment, represented as a string. |
| `paymentMethod` | `string` | The method used for the payment, represented as a string. |

#### Example: Create

```php
$payments_create_manual_payment_public = $client->PaymentsCreateManualPaymentPublic()->create([
    "associations" => null, // array
    "currencyCode" => null, // string
    "id" => null, // string
    "paymentAmount" => null, // float
    "paymentDate" => null, // string
    "paymentMethod" => null, // string
]);
```


### PaymentsSettingsGetBillingSettingsPublic

Create an instance: `$payments_settings_get_billing_settings_public = $client->PaymentsSettingsGetBillingSettingsPublic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountGoogleAnalyticsEnabled` | `bool` | Indicates whether Google Analytics tracking is enabled for the account. |
| `checkoutPrefillEnabled` | `bool` | Indicates whether checkout fields should be prefilled. |
| `collectFullBillingAddress` | `bool` | Indicates whether the full billing address should be collected. |
| `collectPaymentMethodOnFile` | `bool` | Indicates whether a payment method should be kept on file. |
| `defaultFromEmailAddress` | `string` | The default email address used for sending communications. |
| `paymentsGoogleAnalyticsEnabled` | `bool` | Indicates whether Google Analytics tracking is enabled for payments. |
| `recaptchaEnabled` | `bool` | Indicates whether reCAPTCHA is enabled for additional security. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PaymentsSettingsGetBillingSettingsPublic record (throws on error).
$payments_settings_get_billing_settings_public = $client->PaymentsSettingsGetBillingSettingsPublic()->load();
```


### PaymentsSettingsGetCheckoutFeesPublic

Create an instance: `$payments_settings_get_checkout_fees_public = $client->PaymentsSettingsGetCheckoutFeesPublic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appliesToPaymentType` | `string` | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | `array` | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | `float` | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | `string` | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | `string` | The unique identifier for this checkout fee configuration. |
| `name` | `string` | The name of the checkout fee, used for identification and display purposes. |

#### Example: List

```php
// list() returns an array of PaymentsSettingsGetCheckoutFeesPublic records (throws on error).
$payments_settings_get_checkout_fees_publics = $client->PaymentsSettingsGetCheckoutFeesPublic()->list();
```


### PaymentsSettingsGetPolicySettingsPublic

Create an instance: `$payments_settings_get_policy_settings_public = $client->PaymentsSettingsGetPolicySettingsPublic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acknowledgementRequired` | `bool` | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | `string` | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | `bool` | A boolean indicating whether a custom policy is enabled. |
| `refundPolicyText` | `string` | A string containing the text of the refund policy. |
| `termsOfServiceUrl` | `string` | A string representing the URL of the terms of service. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PaymentsSettingsGetPolicySettingsPublic record (throws on error).
$payments_settings_get_policy_settings_public = $client->PaymentsSettingsGetPolicySettingsPublic()->load();
```


### PaymentsSettingsGetShippingSettingsPublic

Create an instance: `$payments_settings_get_shipping_settings_public = $client->PaymentsSettingsGetShippingSettingsPublic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `collectShippingAddressByDefault` | `bool` | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | `array` | An array of strings representing the list of countries to which shipping is available. |

#### Example: List

```php
// list() returns an array of PaymentsSettingsGetShippingSettingsPublic records (throws on error).
$payments_settings_get_shipping_settings_publics = $client->PaymentsSettingsGetShippingSettingsPublic()->list();
```


### PaymentsaccountsPaymentAccountView

Create an instance: `$paymentsaccounts_payment_account_view = $client->PaymentsaccountsPaymentAccountView();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canPayout` | `bool` | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | `bool` | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | `string` | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | `array` | An array of processor types that the account is eligible to use. |
| `enrollmentState` | `string` | The current enrollment state of the payment account. |
| `hasTransacted` | `bool` | A boolean indicating whether the account has ever processed a transaction. |
| `id` | `string` | The portalId for the payment account. |
| `lastTransactedAt` | `string` | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | `string` | The type of payment processor associated with the account. |
| `updatedAt` | `string` | The date and time when the payment account was last updated, in ISO 8601 format. |

#### Example: List

```php
// list() returns an array of PaymentsaccountsPaymentAccountView records (throws on error).
$paymentsaccounts_payment_account_views = $client->PaymentsaccountsPaymentAccountView()->list();
```


### PriceBook

Create an instance: `$price_book = $client->PriceBook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | The number of products included in this price book. |
| `createdAt` | `string` | The date and time when this price book was created. |
| `customProperties` | `array` | A map of custom property names to their values for this price book. |
| `description` | `string` | A description of the price book. |
| `id` | `string` | The unique identifier for this price book. |
| `name` | `string` | The name of the price book. |
| `status` | `string` | The current status of the price book. |
| `supportedCurrencies` | `array` | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | The date and time when this price book was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PriceBook record (throws on error).
$price_book = $client->PriceBook()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of PriceBook records (throws on error).
$price_books = $client->PriceBook()->list();
```

#### Example: Create

```php
$price_book = $client->PriceBook()->create([
    "autoAssignmentEnabled" => null, // bool
    "countOfIncludedProducts" => null, // int
    "customProperties" => null, // array
    "id" => null, // string
    "status" => null, // string
    "supportedCurrencies" => null, // array
]);
```


### PriceBooksBatchResponsePriceBookItem

Create an instance: `$price_books_batch_response_price_book_item = $client->PriceBooksBatchResponsePriceBookItem();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `array` | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | `array` | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```php
$price_books_batch_response_price_book_item = $client->PriceBooksBatchResponsePriceBookItem()->create([
    "price_book_id" => null, // int
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### PriceBooksCollectionResponsePriceBookItemResponseForward

Create an instance: `$price_books_collection_response_price_book_item_response_forward = $client->PriceBooksCollectionResponsePriceBookItemResponseForward();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | The cost of goods sold for the price book item. |
| `createdAt` | `string` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `array` | A map of custom property names to their values for the price book item. |
| `description` | `string` | A description of the price book item. |
| `id` | `string` | The unique identifier for the price book item. |
| `images` | `string` | A string representing images associated with the price book item. |
| `name` | `string` | The name of the price book item. |
| `priceBookId` | `string` | The unique identifier for the price book containing this item. |
| `pricing` | `array` |  |
| `productClassification` | `string` | The classification of the product. |
| `productId` | `string` | The unique identifier for the product associated with the price book item. |
| `productType` | `string` | The type of product. |
| `recurringBillingTerms` | `string` | The terms of recurring billing for the price book item. |
| `sku` | `string` | The stock keeping unit (SKU) of the price book item. |
| `status` | `string` | The current status of the price book item. |
| `taxCategory` | `string` | The tax category of the price book item. |
| `updatedAt` | `string` | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | `string` | A URL associated with the price book item. |

#### Example: List

```php
// list() returns an array of PriceBooksCollectionResponsePriceBookItemResponseForward records (throws on error).
$price_books_collection_response_price_book_item_response_forwards = $client->PriceBooksCollectionResponsePriceBookItemResponseForward()->list();
```


### PriceBooksPriceBook

Create an instance: `$price_books_price_book = $client->PriceBooksPriceBook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | The number of products included in this price book. |
| `createdAt` | `string` | The date and time when this price book was created. |
| `customProperties` | `array` | A map of custom property names to their values for this price book. |
| `description` | `string` | A description of the price book. |
| `id` | `string` | The unique identifier for this price book. |
| `name` | `string` | The name of the price book. |
| `status` | `string` | The current status of the price book. |
| `supportedCurrencies` | `array` | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | The date and time when this price book was last updated. |

#### Example: Create

```php
$price_books_price_book = $client->PriceBooksPriceBook()->create([
    "price_book_id" => null, // int
    "autoAssignmentEnabled" => null, // bool
    "countOfIncludedProducts" => null, // int
    "customProperties" => null, // array
    "id" => null, // string
    "status" => null, // string
    "supportedCurrencies" => null, // array
]);
```


### PriceBooksPriceBookItem

Create an instance: `$price_books_price_book_item = $client->PriceBooksPriceBookItem();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | The cost of goods sold for the price book item. |
| `createdAt` | `string` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `array` | A map of custom property names to their values for the price book item. |
| `description` | `string` | A description of the price book item. |
| `id` | `string` | The unique identifier for the price book item. |
| `images` | `string` | A string representing images associated with the price book item. |
| `name` | `string` | The name of the price book item. |
| `priceBookId` | `string` | The unique identifier for the price book containing this item. |
| `pricing` | `array` |  |
| `productClassification` | `string` | The classification of the product. |
| `productId` | `string` | The unique identifier for the product associated with the price book item. |
| `productType` | `string` | The type of product. |
| `recurringBillingTerms` | `string` | The terms of recurring billing for the price book item. |
| `sku` | `string` | The stock keeping unit (SKU) of the price book item. |
| `status` | `string` | The current status of the price book item. |
| `taxCategory` | `string` | The tax category of the price book item. |
| `updatedAt` | `string` | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | `string` | A URL associated with the price book item. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PriceBooksPriceBookItem record (throws on error).
$price_books_price_book_item = $client->PriceBooksPriceBookItem()->load(["id" => 1, "price_book_id" => 1]);
```

#### Example: Create

```php
$price_books_price_book_item = $client->PriceBooksPriceBookItem()->create([
    "price_book_id" => null, // int
    "customProperties" => null, // array
    "id" => null, // string
    "pricing" => null, // array
    "productId" => null, // string
]);
```


### PriceBooksPriceBookValidate

Create an instance: `$price_books_price_book_validate = $client->PriceBooksPriceBookValidate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | `bool` | A boolean indicating whether the price book is valid. |

#### Example: Create

```php
$price_books_price_book_validate = $client->PriceBooksPriceBookValidate()->create([
    "price_book_id" => null, // int
    "errors" => null, // array
    "isValid" => null, // bool
]);
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

1 field is carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes it with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `contracts_contract_change` | `lineItemChanges` | 3 | 3 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── hubspotcommerce_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`hubspotcommerce_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$paymentsaccountspaymentaccountview = $client->PaymentsaccountsPaymentAccountView();
$paymentsaccountspaymentaccountview->list();

// $paymentsaccountspaymentaccountview->data_get() now returns the paymentsaccountspaymentaccountview data from the last list
// $paymentsaccountspaymentaccountview->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
