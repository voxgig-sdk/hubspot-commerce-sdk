# HubspotCommerce PHP SDK Reference

Complete API reference for the HubspotCommerce PHP SDK.


## HubspotCommerceSDK

### Constructor

```php
require_once __DIR__ . '/hubspotcommerce_sdk.php';

$client = new HubspotCommerceSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotCommerceSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = HubspotCommerceSDK::test();
```


### Instance Methods

#### `Advanced($data = null)`

Create a new `AdvancedEntity` instance. Pass `null` for no initial data.

#### `Basic($data = null)`

Create a new `BasicEntity` instance. Pass `null` for no initial data.

#### `Batch($data = null)`

Create a new `BatchEntity` instance. Pass `null` for no initial data.

#### `Contract($data = null)`

Create a new `ContractEntity` instance. Pass `null` for no initial data.

#### `ContractsContract($data = null)`

Create a new `ContractsContractEntity` instance. Pass `null` for no initial data.

#### `ContractsContractChange($data = null)`

Create a new `ContractsContractChangeEntity` instance. Pass `null` for no initial data.

#### `ContractsContractChangePreview($data = null)`

Create a new `ContractsContractChangePreviewEntity` instance. Pass `null` for no initial data.

#### `ContractsContractChangeSummary($data = null)`

Create a new `ContractsContractChangeSummaryEntity` instance. Pass `null` for no initial data.

#### `ContractsQuote($data = null)`

Create a new `ContractsQuoteEntity` instance. Pass `null` for no initial data.

#### `Item($data = null)`

Create a new `ItemEntity` instance. Pass `null` for no initial data.

#### `PaymentLink($data = null)`

Create a new `PaymentLinkEntity` instance. Pass `null` for no initial data.

#### `PaymentMethodsCommercePaymentMethodSettingsPublic($data = null)`

Create a new `PaymentMethodsCommercePaymentMethodSettingsPublicEntity` instance. Pass `null` for no initial data.

#### `PaymentsActionResponseWithSingleResultSimplePublicObject($data = null)`

Create a new `PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` instance. Pass `null` for no initial data.

#### `PaymentsCreateManualPaymentPublic($data = null)`

Create a new `PaymentsCreateManualPaymentPublicEntity` instance. Pass `null` for no initial data.

#### `PaymentsSettingsGetBillingSettingsPublic($data = null)`

Create a new `PaymentsSettingsGetBillingSettingsPublicEntity` instance. Pass `null` for no initial data.

#### `PaymentsSettingsGetCheckoutFeesPublic($data = null)`

Create a new `PaymentsSettingsGetCheckoutFeesPublicEntity` instance. Pass `null` for no initial data.

#### `PaymentsSettingsGetPolicySettingsPublic($data = null)`

Create a new `PaymentsSettingsGetPolicySettingsPublicEntity` instance. Pass `null` for no initial data.

#### `PaymentsSettingsGetShippingSettingsPublic($data = null)`

Create a new `PaymentsSettingsGetShippingSettingsPublicEntity` instance. Pass `null` for no initial data.

#### `PaymentsaccountsPaymentAccountView($data = null)`

Create a new `PaymentsaccountsPaymentAccountViewEntity` instance. Pass `null` for no initial data.

#### `PriceBook($data = null)`

Create a new `PriceBookEntity` instance. Pass `null` for no initial data.

#### `PriceBooksBatchResponsePriceBookItem($data = null)`

Create a new `PriceBooksBatchResponsePriceBookItemEntity` instance. Pass `null` for no initial data.

#### `PriceBooksCollectionResponsePriceBookItemResponseForward($data = null)`

Create a new `PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` instance. Pass `null` for no initial data.

#### `PriceBooksPriceBook($data = null)`

Create a new `PriceBooksPriceBookEntity` instance. Pass `null` for no initial data.

#### `PriceBooksPriceBookItem($data = null)`

Create a new `PriceBooksPriceBookItemEntity` instance. Pass `null` for no initial data.

#### `PriceBooksPriceBookValidate($data = null)`

Create a new `PriceBooksPriceBookValidateEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): HubspotCommerceUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AdvancedEntity

```php
$advanced = $client->Advanced();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Advanced()->create([
  "payment_crm_object_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdvancedEntity`

Create a new `AdvancedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BasicEntity

```php
$basic = $client->Basic();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Basic()->remove(["payment_link_id" => "payment_link_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BasicEntity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BatchEntity

```php
$batch = $client->Batch();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Batch()->create([
  "price_book_id" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BatchEntity`

Create a new `BatchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContractEntity

```php
$contract = $client->Contract();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressTypesToCollect` | `array` | Yes | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | No | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float` | No | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `array` | Yes | An array of allowed payment methods. |
| `annualContractValue` | `float` | No | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Yes | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `array` | No | An object representing the billing address for the contract. |
| `billingCompanyId` | `string` | No | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | No | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | No | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | No | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | No | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float` | No | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | No | The process for collecting payments. |
| `contractEffectiveDate` | `string` | No | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | No | The unique identifier of the source of the contract. |
| `createdAt` | `string` | No | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | No | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float` | No | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float` | No | The current monthly recurring revenue for the contract. |
| `customProperties` | `array` | Yes | A map of custom property names to their values. |
| `dealId` | `string` | No | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | No | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float` | No | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | No | The discount code applied to the contract. |
| `endDate` | `string` | No | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | No | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Yes | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | Yes | The unique identifier for the contract. |
| `language` | `string` | No | The language associated with the contract. |
| `lineItems` | `array` | Yes | An array of line items included in the contract. |
| `locale` | `string` | No | The locale associated with the contract. |
| `name` | `string` | No | The name of the contract. |
| `netPaymentTerms` | `int` | No | The net payment terms for the contract, represented as an integer. |
| `ownerId` | `array` | Yes | An object representing the ID of the contract owner. |
| `paymentEnabled` | `bool` | Yes | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | No | The payment method used for the contract. |
| `poNumber` | `string` | No | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float` | No | The value of the contract before termination. |
| `renewalContractId` | `string` | No | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | No | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `array` | No | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | `array` | Yes | An object representing the domain of the seller's company. |
| `sellerCompanyName` | `string` | No | The name of the seller's company. |
| `sellerEmail` | `string` | No | The email address of the seller. |
| `sellerFirstName` | `string` | No | The first name of the seller. |
| `sellerLastName` | `string` | No | The last name of the seller. |
| `sellerPhone` | `array` | Yes | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | `string` | No | The phone number of the seller. |
| `startDate` | `string` | No | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | No | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float` | No | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float` | No | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float` | No | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float` | No | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float` | No | The total value of the contract. |
| `totalPaidAmount` | `float` | No | The total amount paid under the contract. |
| `updatedAt` | `string` | No | The date and time when the contract was last updated, in ISO 8601 format. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `addressTypesToCollect` | - | Yes | Yes |
| `allTransactionsFeeName` | - | - | - |
| `allTransactionsFeePercentage` | - | - | - |
| `allowedPaymentMethods` | - | Yes | Yes |
| `annualContractValue` | - | - | - |
| `automatedTaxesEnabled` | - | - | - |
| `billingAddress` | - | Yes | Yes |
| `billingCompanyId` | - | Yes | Yes |
| `billingContactId` | - | Yes | Yes |
| `billingStartDateOverride` | - | Yes | Yes |
| `businessUnitId` | - | - | - |
| `cardFeeName` | - | - | - |
| `cardFeePercentage` | - | - | - |
| `collectionProcess` | - | - | - |
| `contractEffectiveDate` | - | Yes | - |
| `contractSourceId` | - | - | - |
| `createdAt` | - | - | - |
| `currencyCode` | - | Yes | - |
| `currentAnnualRecurringRevenue` | - | - | - |
| `currentMonthlyRecurringRevenue` | - | - | - |
| `customProperties` | - | Yes | Yes |
| `dealId` | - | Yes | Yes |
| `directDebitFeeName` | - | - | - |
| `directDebitFeePercentage` | - | - | - |
| `discountCode` | - | - | - |
| `endDate` | - | - | - |
| `externalPaymentMethodReferenceId` | - | Yes | Yes |
| `hubspotBillingEnabled` | - | - | - |
| `id` | - | - | - |
| `language` | - | - | - |
| `lineItems` | - | - | - |
| `locale` | - | Yes | Yes |
| `name` | - | Yes | Yes |
| `netPaymentTerms` | - | Yes | Yes |
| `ownerId` | - | - | - |
| `paymentEnabled` | - | - | - |
| `paymentMethod` | - | - | - |
| `poNumber` | - | Yes | Yes |
| `preTerminationContractValue` | - | - | - |
| `renewalContractId` | - | - | - |
| `renewalDate` | - | - | - |
| `sellerCompanyAddress` | - | Yes | Yes |
| `sellerCompanyDomain` | - | - | - |
| `sellerCompanyName` | - | Yes | Yes |
| `sellerEmail` | - | Yes | Yes |
| `sellerFirstName` | - | Yes | Yes |
| `sellerLastName` | - | Yes | Yes |
| `sellerPhone` | - | - | - |
| `sellerPhoneNumber` | - | - | - |
| `startDate` | - | - | - |
| `status` | - | - | - |
| `storePaymentMethodAtCheckout` | - | - | - |
| `terminationDate` | - | - | - |
| `totalBilledAmount` | - | - | - |
| `totalBilledAmountPreTax` | - | - | - |
| `totalCollectedFees` | - | - | - |
| `totalCollectedTaxes` | - | - | - |
| `totalContractValue` | - | - | - |
| `totalPaidAmount` | - | - | - |
| `updatedAt` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Contract()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Contract()->load(["id" => "contract_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Contract()->update([
  "id" => "contract_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContractEntity`

Create a new `ContractEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContractsContractEntity

```php
$contracts_contract = $client->ContractsContract();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressTypesToCollect` | `array` | Yes | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | No | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float` | No | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `array` | Yes | An array of allowed payment methods. |
| `annualContractValue` | `float` | No | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Yes | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `array` | No |  |
| `billingCompanyId` | `string` | No | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | No | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | No | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | No | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | No | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float` | No | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | No | The process for collecting payments. |
| `contractEffectiveDate` | `string` | No | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | No | The unique identifier of the source of the contract. |
| `createdAt` | `string` | No | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | No | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float` | No | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float` | No | The current monthly recurring revenue for the contract. |
| `customProperties` | `array` | Yes | A map of custom property names to their values. |
| `dealId` | `string` | No | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | No | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float` | No | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | No | The discount code applied to the contract. |
| `endDate` | `string` | No | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | No | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Yes | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | Yes | The unique identifier for the contract. |
| `language` | `string` | No | The language associated with the contract. |
| `lineItems` | `array` | Yes | An array of line items included in the contract. |
| `locale` | `string` | No | The locale associated with the contract. |
| `name` | `string` | No | The name of the contract. |
| `netPaymentTerms` | `int` | No | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | `bool` | Yes | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | No | The payment method used for the contract. |
| `poNumber` | `string` | No | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float` | No | The value of the contract before termination. |
| `renewalContractId` | `string` | No | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | No | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `array` | No |  |
| `sellerCompanyName` | `string` | No | The name of the seller's company. |
| `sellerEmail` | `string` | No | The email address of the seller. |
| `sellerFirstName` | `string` | No | The first name of the seller. |
| `sellerLastName` | `string` | No | The last name of the seller. |
| `sellerPhoneNumber` | `string` | No | The phone number of the seller. |
| `startDate` | `string` | No | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | No | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float` | No | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float` | No | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float` | No | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float` | No | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float` | No | The total value of the contract. |
| `totalPaidAmount` | `float` | No | The total amount paid under the contract. |
| `updatedAt` | `string` | No | The date and time when the contract was last updated, in ISO 8601 format. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContractsContract()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContractsContractEntity`

Create a new `ContractsContractEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContractsContractChangeEntity

```php
$contracts_contract_change = $client->ContractsContractChange();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contractId` | `string` | Yes | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | No | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | `array` | Yes | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | `string` | No | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | `string` | Yes | The unique identifier for the contract change. |
| `lineItemChanges` | `array` | Yes | An array of changes to line items associated with the contract change. |
| `name` | `string` | No | The name of the contract change. |
| `proposedLineItems` | `array` | Yes | An array of line items that are proposed as part of the contract change. |
| `prorating` | `bool` | Yes | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | No | The unique identifier of the quote associated with this contract change. |
| `status` | `string` | Yes | The current status of the contract change. |
| `type` | `string` | Yes | The type of contract change. |
| `updatedAt` | `string` | No | The date and time when the contract change was last updated, in ISO 8601 format. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `contractId` | - | - | - |
| `createdAt` | - | - | - |
| `deltaLineItems` | - | - | - |
| `effectiveDate` | - | - | - |
| `id` | - | - | - |
| `lineItemChanges` | - | - | Yes |
| `name` | - | - | Yes |
| `proposedLineItems` | - | - | - |
| `prorating` | - | - | Yes |
| `quoteId` | - | - | - |
| `status` | - | - | - |
| `type` | - | - | - |
| `updatedAt` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContractsContractChange()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ContractsContractChange()->load(["id" => "contracts_contract_change_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ContractsContractChange()->update([
  "id" => "contracts_contract_change_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContractsContractChangeEntity`

Create a new `ContractsContractChangeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContractsContractChangePreviewEntity

```php
$contracts_contract_change_preview = $client->ContractsContractChangePreview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaLineItems` | `array` | Yes | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | `array` | Yes | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContractsContractChangePreview()->create([
  "deltaLineItems" => null, // array
  "proposedLineItems" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContractsContractChangePreviewEntity`

Create a new `ContractsContractChangePreviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContractsContractChangeSummaryEntity

```php
$contracts_contract_change_summary = $client->ContractsContractChangeSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contractId` | `string` | Yes | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | No | The date and time when this contract change was created, in ISO 8601 format. |
| `effectiveDate` | `string` | No | The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'. |
| `id` | `string` | Yes | The unique identifier for this contract change. |
| `lineItemChanges` | `array` | Yes | An array of changes made to line items as part of this contract change. |
| `name` | `string` | No | The name assigned to this contract change. |
| `prorating` | `bool` | Yes | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | No | The unique identifier of the quote associated with this contract change, if applicable. |
| `status` | `string` | Yes | The current status of the contract change. |
| `type` | `string` | Yes | The type of contract change, which can be either 'DIRECT' or 'QUOTE'. |
| `updatedAt` | `string` | No | The date and time when this contract change was last updated, in ISO 8601 format. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContractsContractChangeSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContractsContractChangeSummaryEntity`

Create a new `ContractsContractChangeSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContractsQuoteEntity

```php
$contracts_quote = $client->ContractsQuote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dealId` | `string` | No | The unique identifier of the deal associated with the renewal quote. |
| `dealPipeline` | `string` | No | The identifier of the pipeline in which the deal is located. |
| `dealStage` | `string` | No | The identifier of the stage within the pipeline that the deal is currently in. |
| `name` | `string` | No | The name of the renewal quote. |
| `quoteTemplateId` | `string` | Yes | The unique identifier of the quote template to be used for creating the renewal quote. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContractsQuote()->create([
  "contract_id" => null, // string
  "quoteTemplateId" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContractsQuoteEntity`

Create a new `ContractsQuoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ItemEntity

```php
$item = $client->Item();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Item()->remove(["id" => 1, "price_book_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ItemEntity`

Create a new `ItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentLinkEntity

```php
$payment_link = $client->PaymentLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedPaymentMethods` | `array` | Yes | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | `array` | Yes | An array of additional form fields included in the payment link. |
| `archived` | `bool` | Yes | A boolean indicating whether the payment link is archived. |
| `archivedAt` | `string` | No | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | `bool` | Yes | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | `string` | No | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | `array` | Yes | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | `bool` | Yes | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | `bool` | Yes | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | `int` | Yes | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | `bool` | Yes | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | `string` | No | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | `string` | Yes | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | `array` | Yes | An object containing deal configuration settings. |
| `descriptionHtml` | `string` | No | The HTML description of the payment link, represented as a string. |
| `discount` | `array` | Yes |  |
| `discountCodeEnabled` | `bool` | Yes | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | `string` | No | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | `array` | Yes | An array of discount objects associated with the payment link. |
| `domainId` | `string` | No | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | `bool` | Yes | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | `array` | No | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | `array` | Yes | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | `array` | Yes | An array of fee objects associated with the payment link. |
| `formGuid` | `string` | Yes | The form GUID associated with the payment link, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | `bool` | Yes | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | `bool` | Yes | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | `array` | Yes | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | `array` | Yes | An array of line items associated with the payment link. |
| `paymentLinkName` | `string` | Yes | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | `string` | Yes | The URL of the payment link, represented as a string. |
| `state` | `string` | Yes | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | `string` | No | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | `array` | Yes | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | `array` | Yes | An array of tax objects associated with the payment link. |
| `updatedAt` | `string` | No | The date and time when the payment link was last updated, in ISO 8601 format. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `acceptedPaymentMethods` | - | - | - | Yes |
| `additionalFormFields` | - | - | - | Yes |
| `archived` | - | - | - | - |
| `archivedAt` | - | - | - | - |
| `automatedSalesTaxEnabled` | - | - | Yes | Yes |
| `businessUnitId` | - | - | - | Yes |
| `checkoutFeeIds` | - | - | - | - |
| `collectFullBillingAddress` | - | - | Yes | Yes |
| `collectShippingAddress` | - | - | Yes | Yes |
| `completedPurchaseCount` | - | - | - | - |
| `createContractOnPurchase` | - | - | Yes | Yes |
| `createdAt` | - | - | - | - |
| `currencyCode` | - | - | - | Yes |
| `dealConfigurations` | - | - | - | - |
| `descriptionHtml` | - | - | - | Yes |
| `discount` | - | - | - | - |
| `discountCodeEnabled` | - | - | Yes | Yes |
| `discountObjectId` | - | - | - | Yes |
| `discounts` | - | - | - | - |
| `domainId` | - | - | - | Yes |
| `enableDefaultCheckoutFees` | - | - | - | Yes |
| `expirationSettings` | - | - | - | Yes |
| `feeObjectIds` | - | - | - | Yes |
| `fees` | - | - | - | Yes |
| `formGuid` | - | - | - | - |
| `id` | - | - | - | - |
| `includeEmailInSuccessRedirect` | - | - | - | Yes |
| `isOneTimeUseEnabled` | - | - | - | Yes |
| `lineItemObjectIds` | - | - | - | Yes |
| `lineItems` | - | - | - | Yes |
| `paymentLinkName` | - | - | - | Yes |
| `paymentLinkUrl` | - | - | - | - |
| `state` | - | - | - | Yes |
| `storePaymentMethodAtCheckout` | - | - | Yes | Yes |
| `successUrl` | - | - | - | Yes |
| `taxObjectIds` | - | - | - | Yes |
| `taxes` | - | - | - | Yes |
| `updatedAt` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentLink()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentLink()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentLink()->load(["id" => "payment_link_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PaymentLink()->update([
  "id" => "payment_link_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentLinkEntity`

Create a new `PaymentLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentMethodsCommercePaymentMethodSettingsPublicEntity

```php
$payment_methods_commerce_payment_method_settings_public = $client->PaymentMethodsCommercePaymentMethodSettingsPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCurrencies` | `array` | Yes | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | `string` | Yes | The type of payment method. |
| `isDefaultOn` | `bool` | Yes | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | `array` | Yes | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | `array` | Yes | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | `array` | Yes | A full list of currencies that are supported by the bundled commercePaymentMethod. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentMethodsCommercePaymentMethodSettingsPublic()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PaymentMethodsCommercePaymentMethodSettingsPublic()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentMethodsCommercePaymentMethodSettingsPublicEntity`

Create a new `PaymentMethodsCommercePaymentMethodSettingsPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentsActionResponseWithSingleResultSimplePublicObjectEntity

```php
$payments_action_response_with_single_result_simple_public_object = $client->PaymentsActionResponseWithSingleResultSimplePublicObject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | A string indicating the category of the error. |
| `context` | `array` | Yes | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | `array` | Yes | An array of ErrorDetail objects providing further information about the error. |
| `id` | `string` | No | A string that uniquely identifies this specific error instance. |
| `links` | `array` | Yes | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | `string` | Yes | A string containing a human-readable message describing the error. |
| `status` | `string` | Yes | A string representing the status of the error. |
| `subCategory` | `array` | No | An object providing more specific details about the error category. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentsActionResponseWithSingleResultSimplePublicObject()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentsActionResponseWithSingleResultSimplePublicObjectEntity`

Create a new `PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentsCreateManualPaymentPublicEntity

```php
$payments_create_manual_payment_public = $client->PaymentsCreateManualPaymentPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associations` | `array` | Yes | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` | `array` | No |  |
| `currencyCode` | `string` | Yes | The currency code for the payment, represented as a string. |
| `customerEmail` | `string` | No | The email address of the customer making the payment, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | `float` | Yes | The amount of the payment, represented as a number. |
| `paymentDate` | `string` | Yes | The date of the payment, represented as a string. |
| `paymentMethod` | `string` | Yes | The method used for the payment, represented as a string. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentsCreateManualPaymentPublic()->create([
  "associations" => null, // array
  "currencyCode" => null, // string
  "id" => null, // string
  "paymentAmount" => null, // float
  "paymentDate" => null, // string
  "paymentMethod" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentsCreateManualPaymentPublicEntity`

Create a new `PaymentsCreateManualPaymentPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentsSettingsGetBillingSettingsPublicEntity

```php
$payments_settings_get_billing_settings_public = $client->PaymentsSettingsGetBillingSettingsPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountGoogleAnalyticsEnabled` | `bool` | No | Indicates whether Google Analytics tracking is enabled for the account. |
| `checkoutPrefillEnabled` | `bool` | Yes | Indicates whether checkout fields should be prefilled. |
| `collectFullBillingAddress` | `bool` | Yes | Indicates whether the full billing address should be collected. |
| `collectPaymentMethodOnFile` | `bool` | Yes | Indicates whether a payment method should be kept on file. |
| `defaultFromEmailAddress` | `string` | Yes | The default email address used for sending communications. |
| `paymentsGoogleAnalyticsEnabled` | `bool` | Yes | Indicates whether Google Analytics tracking is enabled for payments. |
| `recaptchaEnabled` | `bool` | Yes | Indicates whether reCAPTCHA is enabled for additional security. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `accountGoogleAnalyticsEnabled` | - | - |
| `checkoutPrefillEnabled` | - | Yes |
| `collectFullBillingAddress` | - | Yes |
| `collectPaymentMethodOnFile` | - | Yes |
| `defaultFromEmailAddress` | - | - |
| `paymentsGoogleAnalyticsEnabled` | - | Yes |
| `recaptchaEnabled` | - | Yes |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentsSettingsGetBillingSettingsPublic()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PaymentsSettingsGetBillingSettingsPublic()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentsSettingsGetBillingSettingsPublicEntity`

Create a new `PaymentsSettingsGetBillingSettingsPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentsSettingsGetCheckoutFeesPublicEntity

```php
$payments_settings_get_checkout_fees_public = $client->PaymentsSettingsGetCheckoutFeesPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appliesToPaymentType` | `string` | Yes | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | `array` | Yes | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | `float` | Yes | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | `string` | Yes | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | `string` | Yes | The unique identifier for this checkout fee configuration. |
| `name` | `string` | Yes | The name of the checkout fee, used for identification and display purposes. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentsSettingsGetCheckoutFeesPublic()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PaymentsSettingsGetCheckoutFeesPublic()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentsSettingsGetCheckoutFeesPublicEntity`

Create a new `PaymentsSettingsGetCheckoutFeesPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentsSettingsGetPolicySettingsPublicEntity

```php
$payments_settings_get_policy_settings_public = $client->PaymentsSettingsGetPolicySettingsPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledgementRequired` | `bool` | Yes | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | `string` | No | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | `bool` | Yes | A boolean indicating whether a custom policy is enabled. |
| `refundPolicyText` | `string` | No | A string containing the text of the refund policy. |
| `termsOfServiceUrl` | `string` | No | A string representing the URL of the terms of service. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `acknowledgementRequired` | - | Yes |
| `cancellationPolicyText` | - | Yes |
| `customPolicyEnabled` | - | Yes |
| `refundPolicyText` | - | Yes |
| `termsOfServiceUrl` | - | Yes |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentsSettingsGetPolicySettingsPublic()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PaymentsSettingsGetPolicySettingsPublic()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentsSettingsGetPolicySettingsPublicEntity`

Create a new `PaymentsSettingsGetPolicySettingsPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentsSettingsGetShippingSettingsPublicEntity

```php
$payments_settings_get_shipping_settings_public = $client->PaymentsSettingsGetShippingSettingsPublic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `collectShippingAddressByDefault` | `bool` | Yes | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | `array` | Yes | An array of strings representing the list of countries to which shipping is available. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `collectShippingAddressByDefault` | - | Yes |
| `countriesShippedTo` | - | - |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentsSettingsGetShippingSettingsPublic()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PaymentsSettingsGetShippingSettingsPublic()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentsSettingsGetShippingSettingsPublicEntity`

Create a new `PaymentsSettingsGetShippingSettingsPublicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentsaccountsPaymentAccountViewEntity

```php
$paymentsaccounts_payment_account_view = $client->PaymentsaccountsPaymentAccountView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canPayout` | `bool` | Yes | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | `bool` | Yes | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | `string` | No | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | `array` | Yes | An array of processor types that the account is eligible to use. |
| `enrollmentState` | `string` | Yes | The current enrollment state of the payment account. |
| `hasTransacted` | `bool` | Yes | A boolean indicating whether the account has ever processed a transaction. |
| `id` | `string` | Yes | The portalId for the payment account. |
| `lastTransactedAt` | `string` | No | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | `string` | Yes | The type of payment processor associated with the account. |
| `updatedAt` | `string` | No | The date and time when the payment account was last updated, in ISO 8601 format. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentsaccountsPaymentAccountView()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentsaccountsPaymentAccountViewEntity`

Create a new `PaymentsaccountsPaymentAccountViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriceBookEntity

```php
$price_book = $client->PriceBook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | No | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Yes | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | Yes | The number of products included in this price book. |
| `createdAt` | `string` | No | The date and time when this price book was created. |
| `customProperties` | `array` | Yes | A map of custom property names to their values for this price book. |
| `description` | `string` | No | A description of the price book. |
| `id` | `string` | Yes | The unique identifier for this price book. |
| `name` | `string` | No | The name of the price book. |
| `status` | `string` | Yes | The current status of the price book. |
| `supportedCurrencies` | `array` | Yes | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | No | The date and time when this price book was last updated. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `archived` | - | - | - | - |
| `archivedAt` | - | - | - | - |
| `autoAssignmentEnabled` | - | - | - | - |
| `countOfIncludedProducts` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `customProperties` | - | - | - | - |
| `description` | - | - | - | Yes |
| `id` | - | - | - | - |
| `name` | - | - | Yes | Yes |
| `status` | - | - | - | - |
| `supportedCurrencies` | - | - | - | Yes |
| `updatedAt` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PriceBook()->create([
  "autoAssignmentEnabled" => null, // bool
  "countOfIncludedProducts" => null, // int
  "customProperties" => null, // array
  "id" => null, // string
  "status" => null, // string
  "supportedCurrencies" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PriceBook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PriceBook()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PriceBook()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriceBookEntity`

Create a new `PriceBookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriceBooksBatchResponsePriceBookItemEntity

```php
$price_books_batch_response_price_book_item = $client->PriceBooksBatchResponsePriceBookItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `array` | Yes | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | `array` | No | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | Yes | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PriceBooksBatchResponsePriceBookItem()->create([
  "price_book_id" => null, // int
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriceBooksBatchResponsePriceBookItemEntity`

Create a new `PriceBooksBatchResponsePriceBookItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriceBooksCollectionResponsePriceBookItemResponseForwardEntity

```php
$price_books_collection_response_price_book_item_response_forward = $client->PriceBooksCollectionResponsePriceBookItemResponseForward();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | No | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | No | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | No | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | No | The cost of goods sold for the price book item. |
| `createdAt` | `string` | No | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `array` | Yes | A map of custom property names to their values for the price book item. |
| `description` | `string` | No | A description of the price book item. |
| `id` | `string` | Yes | The unique identifier for the price book item. |
| `images` | `string` | No | A string representing images associated with the price book item. |
| `name` | `string` | No | The name of the price book item. |
| `priceBookId` | `string` | No | The unique identifier for the price book containing this item. |
| `pricing` | `array` | Yes |  |
| `productClassification` | `string` | No | The classification of the product. |
| `productId` | `string` | Yes | The unique identifier for the product associated with the price book item. |
| `productType` | `string` | No | The type of product. |
| `recurringBillingTerms` | `string` | No | The terms of recurring billing for the price book item. |
| `sku` | `string` | No | The stock keeping unit (SKU) of the price book item. |
| `status` | `string` | No | The current status of the price book item. |
| `taxCategory` | `string` | No | The tax category of the price book item. |
| `updatedAt` | `string` | No | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | `string` | No | A URL associated with the price book item. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PriceBooksCollectionResponsePriceBookItemResponseForward()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriceBooksCollectionResponsePriceBookItemResponseForwardEntity`

Create a new `PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriceBooksPriceBookEntity

```php
$price_books_price_book = $client->PriceBooksPriceBook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | No | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Yes | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | Yes | The number of products included in this price book. |
| `createdAt` | `string` | No | The date and time when this price book was created. |
| `customProperties` | `array` | Yes | A map of custom property names to their values for this price book. |
| `description` | `string` | No | A description of the price book. |
| `id` | `string` | Yes | The unique identifier for this price book. |
| `name` | `string` | No | The name of the price book. |
| `status` | `string` | Yes | The current status of the price book. |
| `supportedCurrencies` | `array` | Yes | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | No | The date and time when this price book was last updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PriceBooksPriceBook()->create([
  "price_book_id" => null, // int
  "autoAssignmentEnabled" => null, // bool
  "countOfIncludedProducts" => null, // int
  "customProperties" => null, // array
  "id" => null, // string
  "status" => null, // string
  "supportedCurrencies" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriceBooksPriceBookEntity`

Create a new `PriceBooksPriceBookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriceBooksPriceBookItemEntity

```php
$price_books_price_book_item = $client->PriceBooksPriceBookItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | No | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | No | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | No | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | No | The cost of goods sold for the price book item. |
| `createdAt` | `string` | No | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `array` | Yes | A map of custom property names to their values for the price book item. |
| `description` | `string` | No | A description of the price book item. |
| `id` | `string` | Yes | The unique identifier for the price book item. |
| `images` | `string` | No | A string representing images associated with the price book item. |
| `name` | `string` | No | The name of the price book item. |
| `priceBookId` | `string` | No | The unique identifier for the price book containing this item. |
| `pricing` | `array` | Yes |  |
| `productClassification` | `string` | No | The classification of the product. |
| `productId` | `string` | Yes | The unique identifier for the product associated with the price book item. |
| `productType` | `string` | No | The type of product. |
| `recurringBillingTerms` | `string` | No | The terms of recurring billing for the price book item. |
| `sku` | `string` | No | The stock keeping unit (SKU) of the price book item. |
| `status` | `string` | No | The current status of the price book item. |
| `taxCategory` | `string` | No | The tax category of the price book item. |
| `updatedAt` | `string` | No | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | `string` | No | A URL associated with the price book item. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `archived` | - | - | - |
| `archivedAt` | - | - | - |
| `billingFrequency` | - | - | Yes |
| `billingPeriod` | - | - | Yes |
| `costOfGoodsSold` | - | - | - |
| `createdAt` | - | - | - |
| `customProperties` | - | - | - |
| `description` | - | - | - |
| `id` | - | - | - |
| `images` | - | - | - |
| `name` | - | - | - |
| `priceBookId` | - | - | - |
| `pricing` | - | - | - |
| `productClassification` | - | - | - |
| `productId` | - | - | - |
| `productType` | - | - | - |
| `recurringBillingTerms` | - | - | - |
| `sku` | - | - | - |
| `status` | - | - | Yes |
| `taxCategory` | - | - | - |
| `updatedAt` | - | - | - |
| `url` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PriceBooksPriceBookItem()->create([
  "price_book_id" => null, // int
  "customProperties" => null, // array
  "id" => null, // string
  "pricing" => null, // array
  "productId" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PriceBooksPriceBookItem()->load(["id" => 1, "price_book_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PriceBooksPriceBookItem()->update([
  "id" => 1,
  "price_book_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriceBooksPriceBookItemEntity`

Create a new `PriceBooksPriceBookItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriceBooksPriceBookValidateEntity

```php
$price_books_price_book_validate = $client->PriceBooksPriceBookValidate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | `bool` | Yes | A boolean indicating whether the price book is valid. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PriceBooksPriceBookValidate()->create([
  "price_book_id" => null, // int
  "errors" => null, // array
  "isValid" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriceBooksPriceBookValidateEntity`

Create a new `PriceBooksPriceBookValidateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```php
$client = new HubspotCommerceSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

