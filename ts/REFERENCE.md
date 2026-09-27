# HubspotCommerce TypeScript SDK Reference

Complete API reference for the HubspotCommerce TypeScript SDK.


## HubspotCommerceSDK

### Constructor

```ts
new HubspotCommerceSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotCommerceSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HubspotCommerceSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HubspotCommerceSDK` instance in test mode.


### Instance Methods

#### `Advanced(data?: object)`

Create a new `Advanced` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdvancedEntity` instance.

#### `Basic(data?: object)`

Create a new `Basic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BasicEntity` instance.

#### `Batch(data?: object)`

Create a new `Batch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BatchEntity` instance.

#### `Contract(data?: object)`

Create a new `Contract` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContractEntity` instance.

#### `ContractsContract(data?: object)`

Create a new `ContractsContract` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContractsContractEntity` instance.

#### `ContractsContractChange(data?: object)`

Create a new `ContractsContractChange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContractsContractChangeEntity` instance.

#### `ContractsContractChangePreview(data?: object)`

Create a new `ContractsContractChangePreview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContractsContractChangePreviewEntity` instance.

#### `ContractsContractChangeSummary(data?: object)`

Create a new `ContractsContractChangeSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContractsContractChangeSummaryEntity` instance.

#### `ContractsQuote(data?: object)`

Create a new `ContractsQuote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContractsQuoteEntity` instance.

#### `Item(data?: object)`

Create a new `Item` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ItemEntity` instance.

#### `PaymentLink(data?: object)`

Create a new `PaymentLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentLinkEntity` instance.

#### `PaymentMethodsCommercePaymentMethodSettingsPublic(data?: object)`

Create a new `PaymentMethodsCommercePaymentMethodSettingsPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentMethodsCommercePaymentMethodSettingsPublicEntity` instance.

#### `PaymentsActionResponseWithSingleResultSimplePublicObject(data?: object)`

Create a new `PaymentsActionResponseWithSingleResultSimplePublicObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` instance.

#### `PaymentsCreateManualPaymentPublic(data?: object)`

Create a new `PaymentsCreateManualPaymentPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentsCreateManualPaymentPublicEntity` instance.

#### `PaymentsSettingsGetBillingSettingsPublic(data?: object)`

Create a new `PaymentsSettingsGetBillingSettingsPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentsSettingsGetBillingSettingsPublicEntity` instance.

#### `PaymentsSettingsGetCheckoutFeesPublic(data?: object)`

Create a new `PaymentsSettingsGetCheckoutFeesPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentsSettingsGetCheckoutFeesPublicEntity` instance.

#### `PaymentsSettingsGetPolicySettingsPublic(data?: object)`

Create a new `PaymentsSettingsGetPolicySettingsPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentsSettingsGetPolicySettingsPublicEntity` instance.

#### `PaymentsSettingsGetShippingSettingsPublic(data?: object)`

Create a new `PaymentsSettingsGetShippingSettingsPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentsSettingsGetShippingSettingsPublicEntity` instance.

#### `PaymentsaccountsPaymentAccountView(data?: object)`

Create a new `PaymentsaccountsPaymentAccountView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentsaccountsPaymentAccountViewEntity` instance.

#### `PriceBook(data?: object)`

Create a new `PriceBook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriceBookEntity` instance.

#### `PriceBooksBatchResponsePriceBookItem(data?: object)`

Create a new `PriceBooksBatchResponsePriceBookItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriceBooksBatchResponsePriceBookItemEntity` instance.

#### `PriceBooksCollectionResponsePriceBookItemResponseForward(data?: object)`

Create a new `PriceBooksCollectionResponsePriceBookItemResponseForward` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` instance.

#### `PriceBooksPriceBook(data?: object)`

Create a new `PriceBooksPriceBook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriceBooksPriceBookEntity` instance.

#### `PriceBooksPriceBookItem(data?: object)`

Create a new `PriceBooksPriceBookItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriceBooksPriceBookItemEntity` instance.

#### `PriceBooksPriceBookValidate(data?: object)`

Create a new `PriceBooksPriceBookValidate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriceBooksPriceBookValidateEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HubspotCommerceSDK.test()`.

**Returns:** `HubspotCommerceSDK` instance in test mode.


---

## AdvancedEntity

```ts
const advanced = client.Advanced()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Advanced().create({
  payment_crm_object_id: 'example_payment_crm_object_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdvancedEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BasicEntity

```ts
const basic = client.Basic()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Basic().remove({ payment_link_id: 'payment_link_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BatchEntity

```ts
const batch = client.Batch()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive` | `client.Batch().create({ $action: 'archive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Batch record — check the API definition for its shape.

```ts
const result = await client.Batch().create({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Batch().create({
  price_book_id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BatchEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContractEntity

```ts
const contract = client.Contract()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressTypesToCollect` | `any[]` | Yes | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | No | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `number` | No | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `any[]` | Yes | An array of allowed payment methods. |
| `annualContractValue` | `number` | No | The annual value of the contract. |
| `automatedTaxesEnabled` | `boolean` | Yes | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `Record<string, any>` | No | An object representing the billing address for the contract. |
| `billingCompanyId` | `string` | No | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | No | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | No | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | No | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | No | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `number` | No | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | No | The process for collecting payments. |
| `contractEffectiveDate` | `string` | No | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | No | The unique identifier of the source of the contract. |
| `createdAt` | `string` | No | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | No | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `number` | No | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `number` | No | The current monthly recurring revenue for the contract. |
| `customProperties` | `Record<string, any>` | Yes | A map of custom property names to their values. |
| `dealId` | `string` | No | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | No | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `number` | No | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | No | The discount code applied to the contract. |
| `endDate` | `string` | No | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | No | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `boolean` | Yes | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | Yes | The unique identifier for the contract. |
| `language` | `string` | No | The language associated with the contract. |
| `lineItems` | `any[]` | Yes | An array of line items included in the contract. |
| `locale` | `string` | No | The locale associated with the contract. |
| `name` | `string` | No | The name of the contract. |
| `netPaymentTerms` | `number` | No | The net payment terms for the contract, represented as an integer. |
| `ownerId` | `Record<string, any>` | Yes | An object representing the ID of the contract owner. |
| `paymentEnabled` | `boolean` | Yes | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | No | The payment method used for the contract. |
| `poNumber` | `string` | No | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `number` | No | The value of the contract before termination. |
| `renewalContractId` | `string` | No | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | No | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `Record<string, any>` | No | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | `Record<string, any>` | Yes | An object representing the domain of the seller's company. |
| `sellerCompanyName` | `string` | No | The name of the seller's company. |
| `sellerEmail` | `string` | No | The email address of the seller. |
| `sellerFirstName` | `string` | No | The first name of the seller. |
| `sellerLastName` | `string` | No | The last name of the seller. |
| `sellerPhone` | `Record<string, any>` | Yes | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | `string` | No | The phone number of the seller. |
| `startDate` | `string` | No | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `boolean` | Yes | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | No | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `number` | No | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `number` | No | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `number` | No | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `number` | No | The total amount of taxes collected under the contract. |
| `totalContractValue` | `number` | No | The total value of the contract. |
| `totalPaidAmount` | `number` | No | The total amount paid under the contract. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Contract().create({
  addressTypesToCollect: [],
  allowedPaymentMethods: [],
  automatedTaxesEnabled: true,
  customProperties: {},
  hubspotBillingEnabled: true,
  id: 'example_id',
  lineItems: [],
  ownerId: {},
  paymentEnabled: true,
  sellerCompanyDomain: {},
  sellerPhone: {},
  status: 'example_status',
  storePaymentMethodAtCheckout: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Contract().load({ id: 'contract_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Contract().update({
  id: 'contract_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContractEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContractsContractEntity

```ts
const contracts_contract = client.ContractsContract()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressTypesToCollect` | `any[]` | Yes | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | No | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `number` | No | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `any[]` | Yes | An array of allowed payment methods. |
| `annualContractValue` | `number` | No | The annual value of the contract. |
| `automatedTaxesEnabled` | `boolean` | Yes | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `Record<string, any>` | No |  |
| `billingCompanyId` | `string` | No | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | No | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | No | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | No | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | No | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `number` | No | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | No | The process for collecting payments. |
| `contractEffectiveDate` | `string` | No | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | No | The unique identifier of the source of the contract. |
| `createdAt` | `string` | No | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | No | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `number` | No | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `number` | No | The current monthly recurring revenue for the contract. |
| `customProperties` | `Record<string, any>` | Yes | A map of custom property names to their values. |
| `dealId` | `string` | No | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | No | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `number` | No | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | No | The discount code applied to the contract. |
| `endDate` | `string` | No | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | No | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `boolean` | Yes | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | Yes | The unique identifier for the contract. |
| `language` | `string` | No | The language associated with the contract. |
| `lineItems` | `any[]` | Yes | An array of line items included in the contract. |
| `locale` | `string` | No | The locale associated with the contract. |
| `name` | `string` | No | The name of the contract. |
| `netPaymentTerms` | `number` | No | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | `boolean` | Yes | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | No | The payment method used for the contract. |
| `poNumber` | `string` | No | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `number` | No | The value of the contract before termination. |
| `renewalContractId` | `string` | No | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | No | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `Record<string, any>` | No |  |
| `sellerCompanyName` | `string` | No | The name of the seller's company. |
| `sellerEmail` | `string` | No | The email address of the seller. |
| `sellerFirstName` | `string` | No | The first name of the seller. |
| `sellerLastName` | `string` | No | The last name of the seller. |
| `sellerPhoneNumber` | `string` | No | The phone number of the seller. |
| `startDate` | `string` | No | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `boolean` | Yes | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | No | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `number` | No | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `number` | No | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `number` | No | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `number` | No | The total amount of taxes collected under the contract. |
| `totalContractValue` | `number` | No | The total value of the contract. |
| `totalPaidAmount` | `number` | No | The total amount paid under the contract. |
| `updatedAt` | `string` | No | The date and time when the contract was last updated, in ISO 8601 format. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContractsContract().create({
  contract_id: 'example_contract_id',
  addressTypesToCollect: [],
  allowedPaymentMethods: [],
  automatedTaxesEnabled: true,
  customProperties: {},
  hubspotBillingEnabled: true,
  id: 'example_id',
  lineItems: [],
  paymentEnabled: true,
  status: 'example_status',
  storePaymentMethodAtCheckout: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContractsContractEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContractsContractChangeEntity

```ts
const contracts_contract_change = client.ContractsContractChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contractId` | `string` | Yes | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | No | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | `any[]` | Yes | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | `string` | No | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | `string` | Yes | The unique identifier for the contract change. |
| `lineItemChanges` | `any[]` | Yes | An array of changes to line items associated with the contract change. |
| `name` | `string` | No | The name of the contract change. |
| `proposedLineItems` | `any[]` | Yes | An array of line items that are proposed as part of the contract change. |
| `prorating` | `boolean` | Yes | A boolean indicating whether the contract change involves prorating. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContractsContractChange().create({
  contractId: 'example_contractId',
  deltaLineItems: [],
  id: 'example_id',
  lineItemChanges: [],
  proposedLineItems: [],
  prorating: true,
  status: 'example_status',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ContractsContractChange().load({ id: 'contracts_contract_change_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ContractsContractChange().update({
  id: 'contracts_contract_change_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContractsContractChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContractsContractChangePreviewEntity

```ts
const contracts_contract_change_preview = client.ContractsContractChangePreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaLineItems` | `any[]` | Yes | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | `any[]` | Yes | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContractsContractChangePreview().create({
  deltaLineItems: [],
  proposedLineItems: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContractsContractChangePreviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContractsContractChangeSummaryEntity

```ts
const contracts_contract_change_summary = client.ContractsContractChangeSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contractId` | `string` | Yes | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | No | The date and time when this contract change was created, in ISO 8601 format. |
| `effectiveDate` | `string` | No | The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'. |
| `id` | `string` | Yes | The unique identifier for this contract change. |
| `lineItemChanges` | `any[]` | Yes | An array of changes made to line items as part of this contract change. |
| `name` | `string` | No | The name assigned to this contract change. |
| `prorating` | `boolean` | Yes | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | No | The unique identifier of the quote associated with this contract change, if applicable. |
| `status` | `string` | Yes | The current status of the contract change. |
| `type` | `string` | Yes | The type of contract change, which can be either 'DIRECT' or 'QUOTE'. |
| `updatedAt` | `string` | No | The date and time when this contract change was last updated, in ISO 8601 format. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContractsContractChangeSummary().list({ contract_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContractsContractChangeSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContractsQuoteEntity

```ts
const contracts_quote = client.ContractsQuote()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContractsQuote().create({
  contract_id: 'example_contract_id',
  quoteTemplateId: 'example_quoteTemplateId',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContractsQuoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ItemEntity

```ts
const item = client.Item()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Item().remove({ id: 1, price_book_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentLinkEntity

```ts
const payment_link = client.PaymentLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedPaymentMethods` | `any[]` | Yes | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | `any[]` | Yes | An array of additional form fields included in the payment link. |
| `archived` | `boolean` | Yes | A boolean indicating whether the payment link is archived. |
| `archivedAt` | `string` | No | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | `boolean` | Yes | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | `string` | No | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | `any[]` | Yes | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | `boolean` | Yes | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | `boolean` | Yes | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | `number` | Yes | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | `boolean` | Yes | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | `string` | No | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | `string` | Yes | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | `Record<string, any>` | Yes | An object containing deal configuration settings. |
| `descriptionHtml` | `string` | No | The HTML description of the payment link, represented as a string. |
| `discount` | `Record<string, any>` | Yes |  |
| `discountCodeEnabled` | `boolean` | Yes | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | `string` | No | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | `any[]` | Yes | An array of discount objects associated with the payment link. |
| `domainId` | `string` | No | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | `boolean` | Yes | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | `Record<string, any>` | No | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | `any[]` | Yes | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | `any[]` | Yes | An array of fee objects associated with the payment link. |
| `formGuid` | `string` | Yes | The form GUID associated with the payment link, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | `boolean` | Yes | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | `boolean` | Yes | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | `any[]` | Yes | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | `any[]` | Yes | An array of line items associated with the payment link. |
| `paymentLinkName` | `string` | Yes | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | `string` | Yes | The URL of the payment link, represented as a string. |
| `state` | `string` | Yes | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | `boolean` | Yes | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | `string` | No | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | `any[]` | Yes | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | `any[]` | Yes | An array of tax objects associated with the payment link. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentLink().create({
  acceptedPaymentMethods: [],
  additionalFormFields: [],
  archived: true,
  automatedSalesTaxEnabled: true,
  checkoutFeeIds: [],
  collectFullBillingAddress: true,
  collectShippingAddress: true,
  completedPurchaseCount: 1,
  createContractOnPurchase: true,
  currencyCode: 'example_currencyCode',
  dealConfigurations: {},
  discount: {},
  discountCodeEnabled: true,
  discounts: [],
  enableDefaultCheckoutFees: true,
  feeObjectIds: [],
  fees: [],
  formGuid: 'example_formGuid',
  id: 'example_id',
  includeEmailInSuccessRedirect: true,
  isOneTimeUseEnabled: true,
  lineItemObjectIds: [],
  lineItems: [],
  paymentLinkName: 'example_paymentLinkName',
  paymentLinkUrl: 'example_paymentLinkUrl',
  state: 'example_state',
  storePaymentMethodAtCheckout: true,
  taxObjectIds: [],
  taxes: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentLink().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentLink().load({ id: 'payment_link_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PaymentLink().update({
  id: 'payment_link_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentMethodsCommercePaymentMethodSettingsPublicEntity

```ts
const payment_methods_commerce_payment_method_settings_public = client.PaymentMethodsCommercePaymentMethodSettingsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCurrencies` | `any[]` | Yes | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | `string` | Yes | The type of payment method. |
| `isDefaultOn` | `boolean` | Yes | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | `any[]` | Yes | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | `any[]` | Yes | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | `any[]` | Yes | A full list of currencies that are supported by the bundled commercePaymentMethod. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentMethodsCommercePaymentMethodSettingsPublic().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PaymentMethodsCommercePaymentMethodSettingsPublic().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentMethodsCommercePaymentMethodSettingsPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentsActionResponseWithSingleResultSimplePublicObjectEntity

```ts
const payments_action_response_with_single_result_simple_public_object = client.PaymentsActionResponseWithSingleResultSimplePublicObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | A string indicating the category of the error. |
| `context` | `Record<string, any>` | Yes | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | `any[]` | Yes | An array of ErrorDetail objects providing further information about the error. |
| `id` | `string` | No | A string that uniquely identifies this specific error instance. |
| `links` | `Record<string, any>` | Yes | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | `string` | Yes | A string containing a human-readable message describing the error. |
| `status` | `string` | Yes | A string representing the status of the error. |
| `subCategory` | `Record<string, any>` | No | An object providing more specific details about the error category. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentsActionResponseWithSingleResultSimplePublicObject().list({ payment_crm_object_id: "example", task_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentsCreateManualPaymentPublicEntity

```ts
const payments_create_manual_payment_public = client.PaymentsCreateManualPaymentPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associations` | `any[]` | Yes | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` | `Record<string, any>` | No |  |
| `currencyCode` | `string` | Yes | The currency code for the payment, represented as a string. |
| `customerEmail` | `string` | No | The email address of the customer making the payment, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | `number` | Yes | The amount of the payment, represented as a number. |
| `paymentDate` | `string` | Yes | The date of the payment, represented as a string. |
| `paymentMethod` | `string` | Yes | The method used for the payment, represented as a string. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentsCreateManualPaymentPublic().create({
  associations: [],
  currencyCode: 'example_currencyCode',
  id: 'example_id',
  paymentAmount: 1,
  paymentDate: 'example_paymentDate',
  paymentMethod: 'example_paymentMethod',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentsCreateManualPaymentPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentsSettingsGetBillingSettingsPublicEntity

```ts
const payments_settings_get_billing_settings_public = client.PaymentsSettingsGetBillingSettingsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountGoogleAnalyticsEnabled` | `boolean` | No | Indicates whether Google Analytics tracking is enabled for the account. |
| `checkoutPrefillEnabled` | `boolean` | Yes | Indicates whether checkout fields should be prefilled. |
| `collectFullBillingAddress` | `boolean` | Yes | Indicates whether the full billing address should be collected. |
| `collectPaymentMethodOnFile` | `boolean` | Yes | Indicates whether a payment method should be kept on file. |
| `defaultFromEmailAddress` | `string` | Yes | The default email address used for sending communications. |
| `paymentsGoogleAnalyticsEnabled` | `boolean` | Yes | Indicates whether Google Analytics tracking is enabled for payments. |
| `recaptchaEnabled` | `boolean` | Yes | Indicates whether reCAPTCHA is enabled for additional security. |

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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentsSettingsGetBillingSettingsPublic().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PaymentsSettingsGetBillingSettingsPublic().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentsSettingsGetBillingSettingsPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentsSettingsGetCheckoutFeesPublicEntity

```ts
const payments_settings_get_checkout_fees_public = client.PaymentsSettingsGetCheckoutFeesPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appliesToPaymentType` | `string` | Yes | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | `any[]` | Yes | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | `number` | Yes | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | `string` | Yes | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | `string` | Yes | The unique identifier for this checkout fee configuration. |
| `name` | `string` | Yes | The name of the checkout fee, used for identification and display purposes. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentsSettingsGetCheckoutFeesPublic().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PaymentsSettingsGetCheckoutFeesPublic().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentsSettingsGetCheckoutFeesPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentsSettingsGetPolicySettingsPublicEntity

```ts
const payments_settings_get_policy_settings_public = client.PaymentsSettingsGetPolicySettingsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledgementRequired` | `boolean` | Yes | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | `string` | No | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | `boolean` | Yes | A boolean indicating whether a custom policy is enabled. |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentsSettingsGetPolicySettingsPublic().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PaymentsSettingsGetPolicySettingsPublic().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentsSettingsGetPolicySettingsPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentsSettingsGetShippingSettingsPublicEntity

```ts
const payments_settings_get_shipping_settings_public = client.PaymentsSettingsGetShippingSettingsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `collectShippingAddressByDefault` | `boolean` | Yes | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | `any[]` | Yes | An array of strings representing the list of countries to which shipping is available. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `collectShippingAddressByDefault` | - | Yes |
| `countriesShippedTo` | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentsSettingsGetShippingSettingsPublic().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PaymentsSettingsGetShippingSettingsPublic().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentsSettingsGetShippingSettingsPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentsaccountsPaymentAccountViewEntity

```ts
const paymentsaccounts_payment_account_view = client.PaymentsaccountsPaymentAccountView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canPayout` | `boolean` | Yes | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | `boolean` | Yes | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | `string` | No | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | `any[]` | Yes | An array of processor types that the account is eligible to use. |
| `enrollmentState` | `string` | Yes | The current enrollment state of the payment account. |
| `hasTransacted` | `boolean` | Yes | A boolean indicating whether the account has ever processed a transaction. |
| `id` | `string` | Yes | The portalId for the payment account. |
| `lastTransactedAt` | `string` | No | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | `string` | Yes | The type of payment processor associated with the account. |
| `updatedAt` | `string` | No | The date and time when the payment account was last updated, in ISO 8601 format. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentsaccountsPaymentAccountView().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentsaccountsPaymentAccountViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriceBookEntity

```ts
const price_book = client.PriceBook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | No | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `boolean` | Yes | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `number` | Yes | The number of products included in this price book. |
| `createdAt` | `string` | No | The date and time when this price book was created. |
| `customProperties` | `Record<string, any>` | Yes | A map of custom property names to their values for this price book. |
| `description` | `string` | No | A description of the price book. |
| `id` | `string` | Yes | The unique identifier for this price book. |
| `name` | `string` | No | The name of the price book. |
| `status` | `string` | Yes | The current status of the price book. |
| `supportedCurrencies` | `any[]` | Yes | An array of currency codes that this price book supports. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PriceBook().create({
  autoAssignmentEnabled: true,
  countOfIncludedProducts: 1,
  customProperties: {},
  id: 'example_id',
  status: 'example_status',
  supportedCurrencies: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PriceBook().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PriceBook().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PriceBook().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriceBookEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriceBooksBatchResponsePriceBookItemEntity

```ts
const price_books_batch_response_price_book_item = client.PriceBooksBatchResponsePriceBookItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `any[]` | Yes | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | `Record<string, any>` | No | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `any[]` | Yes | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PriceBooksBatchResponsePriceBookItem().create({
  price_book_id: 1,
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriceBooksBatchResponsePriceBookItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriceBooksCollectionResponsePriceBookItemResponseForwardEntity

```ts
const price_books_collection_response_price_book_item_response_forward = client.PriceBooksCollectionResponsePriceBookItemResponseForward()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | No | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | No | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | No | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | No | The cost of goods sold for the price book item. |
| `createdAt` | `string` | No | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `Record<string, any>` | Yes | A map of custom property names to their values for the price book item. |
| `description` | `string` | No | A description of the price book item. |
| `id` | `string` | Yes | The unique identifier for the price book item. |
| `images` | `string` | No | A string representing images associated with the price book item. |
| `name` | `string` | No | The name of the price book item. |
| `priceBookId` | `string` | No | The unique identifier for the price book containing this item. |
| `pricing` | `Record<string, any>` | Yes |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PriceBooksCollectionResponsePriceBookItemResponseForward().list({ price_book_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriceBooksPriceBookEntity

```ts
const price_books_price_book = client.PriceBooksPriceBook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | No | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `boolean` | Yes | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `number` | Yes | The number of products included in this price book. |
| `createdAt` | `string` | No | The date and time when this price book was created. |
| `customProperties` | `Record<string, any>` | Yes | A map of custom property names to their values for this price book. |
| `description` | `string` | No | A description of the price book. |
| `id` | `string` | Yes | The unique identifier for this price book. |
| `name` | `string` | No | The name of the price book. |
| `status` | `string` | Yes | The current status of the price book. |
| `supportedCurrencies` | `any[]` | Yes | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | No | The date and time when this price book was last updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PriceBooksPriceBook().create({
  price_book_id: 1,
  autoAssignmentEnabled: true,
  countOfIncludedProducts: 1,
  customProperties: {},
  id: 'example_id',
  status: 'example_status',
  supportedCurrencies: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriceBooksPriceBookEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriceBooksPriceBookItemEntity

```ts
const price_books_price_book_item = client.PriceBooksPriceBookItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | No | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | No | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | No | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | No | The cost of goods sold for the price book item. |
| `createdAt` | `string` | No | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `Record<string, any>` | Yes | A map of custom property names to their values for the price book item. |
| `description` | `string` | No | A description of the price book item. |
| `id` | `string` | Yes | The unique identifier for the price book item. |
| `images` | `string` | No | A string representing images associated with the price book item. |
| `name` | `string` | No | The name of the price book item. |
| `priceBookId` | `string` | No | The unique identifier for the price book containing this item. |
| `pricing` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PriceBooksPriceBookItem().create({
  price_book_id: 1,
  customProperties: {},
  id: 'example_id',
  pricing: {},
  productId: 'example_productId',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PriceBooksPriceBookItem().load({ id: 1, price_book_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PriceBooksPriceBookItem().update({
  id: 1,
  price_book_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriceBooksPriceBookItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriceBooksPriceBookValidateEntity

```ts
const price_books_price_book_validate = client.PriceBooksPriceBookValidate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | `boolean` | Yes | A boolean indicating whether the price book is valid. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PriceBooksPriceBookValidate().create({
  price_book_id: 1,
  errors: [],
  isValid: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriceBooksPriceBookValidateEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotCommerceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new HubspotCommerceSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
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

