# HubspotCommerce TypeScript SDK



The TypeScript SDK for the HubspotCommerce API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Advanced()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hubspot-commerce-sdk/releases](https://github.com/voxgig-sdk/hubspot-commerce-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { HubspotCommerceSDK } from '@voxgig-sdk/hubspot-commerce-sdk'

const client = new HubspotCommerceSDK({
  apikey: process.env.HUBSPOT_COMMERCE_APIKEY,
})
```

### 3. Load a pricebookspricebookitem

PriceBooksPriceBookItem is nested under price_book, so provide the `price_book_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const pricebookspricebookitem = await client.PriceBooksPriceBookItem().load({
    price_book_id: 1,
    id: 1,
  })
  console.log(pricebookspricebookitem)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Advanced ENTITY (.data() for the record)
const created = await client.Advanced().create({
  payment_crm_object_id: 'example_payment_crm_object_id',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const paymentsaccountspaymentaccountviews = await client.PaymentsaccountsPaymentAccountView().list()
  console.log(paymentsaccountspaymentaccountviews)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = HubspotCommerceSDK.test()

const paymentsaccountspaymentaccountview = await client.PaymentsaccountsPaymentAccountView().list()
// paymentsaccountspaymentaccountview is the entity, populated with mock response data
// — call paymentsaccountspaymentaccountview.data() for the record itself
console.log(paymentsaccountspaymentaccountview)
```

You can also use the instance method:

```ts
const client = new HubspotCommerceSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.PaymentsaccountsPaymentAccountView()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new HubspotCommerceSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_COMMERCE_TEST_LIVE=TRUE
HUBSPOT_COMMERCE_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### HubspotCommerceSDK

#### Constructor

```ts
new HubspotCommerceSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Advanced(data?)` | `AdvancedEntity` | Create an Advanced entity instance. |
| `Basic(data?)` | `BasicEntity` | Create a Basic entity instance. |
| `Batch(data?)` | `BatchEntity` | Create a Batch entity instance. |
| `Contract(data?)` | `ContractEntity` | Create a Contract entity instance. |
| `ContractsContract(data?)` | `ContractsContractEntity` | Create a ContractsContract entity instance. |
| `ContractsContractChange(data?)` | `ContractsContractChangeEntity` | Create a ContractsContractChange entity instance. |
| `ContractsContractChangePreview(data?)` | `ContractsContractChangePreviewEntity` | Create a ContractsContractChangePreview entity instance. |
| `ContractsContractChangeSummary(data?)` | `ContractsContractChangeSummaryEntity` | Create a ContractsContractChangeSummary entity instance. |
| `ContractsQuote(data?)` | `ContractsQuoteEntity` | Create a ContractsQuote entity instance. |
| `Item(data?)` | `ItemEntity` | Create an Item entity instance. |
| `PaymentLink(data?)` | `PaymentLinkEntity` | Create a PaymentLink entity instance. |
| `PaymentMethodsCommercePaymentMethodSettingsPublic(data?)` | `PaymentMethodsCommercePaymentMethodSettingsPublicEntity` | Create a PaymentMethodsCommercePaymentMethodSettingsPublic entity instance. |
| `PaymentsActionResponseWithSingleResultSimplePublicObject(data?)` | `PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` | Create a PaymentsActionResponseWithSingleResultSimplePublicObject entity instance. |
| `PaymentsCreateManualPaymentPublic(data?)` | `PaymentsCreateManualPaymentPublicEntity` | Create a PaymentsCreateManualPaymentPublic entity instance. |
| `PaymentsSettingsGetBillingSettingsPublic(data?)` | `PaymentsSettingsGetBillingSettingsPublicEntity` | Create a PaymentsSettingsGetBillingSettingsPublic entity instance. |
| `PaymentsSettingsGetCheckoutFeesPublic(data?)` | `PaymentsSettingsGetCheckoutFeesPublicEntity` | Create a PaymentsSettingsGetCheckoutFeesPublic entity instance. |
| `PaymentsSettingsGetPolicySettingsPublic(data?)` | `PaymentsSettingsGetPolicySettingsPublicEntity` | Create a PaymentsSettingsGetPolicySettingsPublic entity instance. |
| `PaymentsSettingsGetShippingSettingsPublic(data?)` | `PaymentsSettingsGetShippingSettingsPublicEntity` | Create a PaymentsSettingsGetShippingSettingsPublic entity instance. |
| `PaymentsaccountsPaymentAccountView(data?)` | `PaymentsaccountsPaymentAccountViewEntity` | Create a PaymentsaccountsPaymentAccountView entity instance. |
| `PriceBook(data?)` | `PriceBookEntity` | Create a PriceBook entity instance. |
| `PriceBooksBatchResponsePriceBookItem(data?)` | `PriceBooksBatchResponsePriceBookItemEntity` | Create a PriceBooksBatchResponsePriceBookItem entity instance. |
| `PriceBooksCollectionResponsePriceBookItemResponseForward(data?)` | `PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` | Create a PriceBooksCollectionResponsePriceBookItemResponseForward entity instance. |
| `PriceBooksPriceBook(data?)` | `PriceBooksPriceBookEntity` | Create a PriceBooksPriceBook entity instance. |
| `PriceBooksPriceBookItem(data?)` | `PriceBooksPriceBookItemEntity` | Create a PriceBooksPriceBookItem entity instance. |
| `PriceBooksPriceBookValidate(data?)` | `PriceBooksPriceBookValidateEntity` | Create a PriceBooksPriceBookValidate entity instance. |
| `tester(testopts?, sdkopts?)` | `HubspotCommerceSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `HubspotCommerceSDK.test(testopts?, sdkopts?)` | `HubspotCommerceSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): HubspotCommerceSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Advanced

| Field | Description |
| --- | --- |

Operations: create.

API path: `/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async`

#### Basic

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}`

#### Batch

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: create, load, update.

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

Operations: create.

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

Operations: create, load, update.

API path: `/commerce/contracts/2027-03-beta/changes/{changeId}/accept`

#### ContractsContractChangePreview

| Field | Description |
| --- | --- |
| `deltaLineItems` | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

Operations: create.

API path: `/commerce/contracts/2027-03-beta/changes/preview`

#### ContractsContractChangeSummary

| Field | Description |
| --- | --- |
| `contractId` | The unique identifier of the contract associated with this change. |
| `createdAt` | The date and time when this contract change was created, in ISO 8601 format. |
| `effectiveDate` | The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'. |
| `id` | The unique identifier for this contract change. |
| `lineItemChanges` | An array of changes made to line items as part of this contract change. |
| `name` | The name assigned to this contract change. |
| `prorating` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | The unique identifier of the quote associated with this contract change, if applicable. |
| `status` | The current status of the contract change. |
| `type` | The type of contract change, which can be either 'DIRECT' or 'QUOTE'. |
| `updatedAt` | The date and time when this contract change was last updated, in ISO 8601 format. |

Operations: list.

API path: `/commerce/contracts/2027-03-beta/contracts/{contractId}/changes`

#### ContractsQuote

| Field | Description |
| --- | --- |
| `dealId` | The unique identifier of the deal associated with the renewal quote. |
| `dealPipeline` | The identifier of the pipeline in which the deal is located. |
| `dealStage` | The identifier of the stage within the pipeline that the deal is currently in. |
| `name` | The name of the renewal quote. |
| `quoteTemplateId` | The unique identifier of the quote template to be used for creating the renewal quote. |

Operations: create.

API path: `/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes`

#### Item

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

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

Operations: create, list, load, update.

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

Operations: list, update.

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

Operations: list.

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

Operations: create.

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

Operations: load, update.

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

Operations: list, update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees`

#### PaymentsSettingsGetPolicySettingsPublic

| Field | Description |
| --- | --- |
| `acknowledgementRequired` | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | A boolean indicating whether a custom policy is enabled. |
| `refundPolicyText` | A string containing the text of the refund policy. |
| `termsOfServiceUrl` | A string representing the URL of the terms of service. |

Operations: load, update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/policy`

#### PaymentsSettingsGetShippingSettingsPublic

| Field | Description |
| --- | --- |
| `collectShippingAddressByDefault` | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | An array of strings representing the list of countries to which shipping is available. |

Operations: list, update.

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

Operations: list.

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

Operations: create, list, load, update.

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

Operations: create.

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

Operations: list.

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

Operations: create.

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

Operations: create, load, update.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items`

#### PriceBooksPriceBookValidate

| Field | Description |
| --- | --- |
| `errors` | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | A boolean indicating whether the price book is valid. |

Operations: create.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/validate`



## Entities


### Advanced

Create an instance: `const advanced = client.Advanced()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const advanced = await client.Advanced().create({
  payment_crm_object_id: 'example_payment_crm_object_id',
})
```


### Basic

Create an instance: `const basic = client.Basic()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Batch

Create an instance: `const batch = client.Batch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const batch = await client.Batch().create({
  price_book_id: 1,
})
```


### Contract

Create an instance: `const contract = client.Contract()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addressTypesToCollect` | `any[]` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `number` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `any[]` | An array of allowed payment methods. |
| `annualContractValue` | `number` | The annual value of the contract. |
| `automatedTaxesEnabled` | `boolean` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `Record<string, any>` | An object representing the billing address for the contract. |
| `billingCompanyId` | `string` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `number` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | The process for collecting payments. |
| `contractEffectiveDate` | `string` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | The unique identifier of the source of the contract. |
| `createdAt` | `string` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `number` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `number` | The current monthly recurring revenue for the contract. |
| `customProperties` | `Record<string, any>` | A map of custom property names to their values. |
| `dealId` | `string` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `number` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | The discount code applied to the contract. |
| `endDate` | `string` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `boolean` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | The unique identifier for the contract. |
| `language` | `string` | The language associated with the contract. |
| `lineItems` | `any[]` | An array of line items included in the contract. |
| `locale` | `string` | The locale associated with the contract. |
| `name` | `string` | The name of the contract. |
| `netPaymentTerms` | `number` | The net payment terms for the contract, represented as an integer. |
| `ownerId` | `Record<string, any>` | An object representing the ID of the contract owner. |
| `paymentEnabled` | `boolean` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | The payment method used for the contract. |
| `poNumber` | `string` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `number` | The value of the contract before termination. |
| `renewalContractId` | `string` | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `Record<string, any>` | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | `Record<string, any>` | An object representing the domain of the seller's company. |
| `sellerCompanyName` | `string` | The name of the seller's company. |
| `sellerEmail` | `string` | The email address of the seller. |
| `sellerFirstName` | `string` | The first name of the seller. |
| `sellerLastName` | `string` | The last name of the seller. |
| `sellerPhone` | `Record<string, any>` | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | `string` | The phone number of the seller. |
| `startDate` | `string` | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `boolean` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `number` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `number` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `number` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `number` | The total amount of taxes collected under the contract. |
| `totalContractValue` | `number` | The total value of the contract. |
| `totalPaidAmount` | `number` | The total amount paid under the contract. |
| `updatedAt` | `string` | The date and time when the contract was last updated, in ISO 8601 format. |

#### Example: Load

```ts
const contract = await client.Contract().load({ id: 'contract_id' })
```

#### Example: Create

```ts
const contract = await client.Contract().create({
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


### ContractsContract

Create an instance: `const contracts_contract = client.ContractsContract()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addressTypesToCollect` | `any[]` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `number` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `any[]` | An array of allowed payment methods. |
| `annualContractValue` | `number` | The annual value of the contract. |
| `automatedTaxesEnabled` | `boolean` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `Record<string, any>` |  |
| `billingCompanyId` | `string` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `number` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | The process for collecting payments. |
| `contractEffectiveDate` | `string` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | The unique identifier of the source of the contract. |
| `createdAt` | `string` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `number` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `number` | The current monthly recurring revenue for the contract. |
| `customProperties` | `Record<string, any>` | A map of custom property names to their values. |
| `dealId` | `string` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `number` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | The discount code applied to the contract. |
| `endDate` | `string` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `boolean` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | The unique identifier for the contract. |
| `language` | `string` | The language associated with the contract. |
| `lineItems` | `any[]` | An array of line items included in the contract. |
| `locale` | `string` | The locale associated with the contract. |
| `name` | `string` | The name of the contract. |
| `netPaymentTerms` | `number` | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | `boolean` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | The payment method used for the contract. |
| `poNumber` | `string` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `number` | The value of the contract before termination. |
| `renewalContractId` | `string` | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `Record<string, any>` |  |
| `sellerCompanyName` | `string` | The name of the seller's company. |
| `sellerEmail` | `string` | The email address of the seller. |
| `sellerFirstName` | `string` | The first name of the seller. |
| `sellerLastName` | `string` | The last name of the seller. |
| `sellerPhoneNumber` | `string` | The phone number of the seller. |
| `startDate` | `string` | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `boolean` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `number` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `number` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `number` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `number` | The total amount of taxes collected under the contract. |
| `totalContractValue` | `number` | The total value of the contract. |
| `totalPaidAmount` | `number` | The total amount paid under the contract. |
| `updatedAt` | `string` | The date and time when the contract was last updated, in ISO 8601 format. |

#### Example: Create

```ts
const contracts_contract = await client.ContractsContract().create({
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


### ContractsContractChange

Create an instance: `const contracts_contract_change = client.ContractsContractChange()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contractId` | `string` | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | `any[]` | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | `string` | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | `string` | The unique identifier for the contract change. |
| `lineItemChanges` | `any[]` | An array of changes to line items associated with the contract change. |
| `name` | `string` | The name of the contract change. |
| `proposedLineItems` | `any[]` | An array of line items that are proposed as part of the contract change. |
| `prorating` | `boolean` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | The unique identifier of the quote associated with this contract change. |
| `status` | `string` | The current status of the contract change. |
| `type` | `string` | The type of contract change. |
| `updatedAt` | `string` | The date and time when the contract change was last updated, in ISO 8601 format. |

#### Example: Load

```ts
const contracts_contract_change = await client.ContractsContractChange().load({ id: 'contracts_contract_change_id' })
```

#### Example: Create

```ts
const contracts_contract_change = await client.ContractsContractChange().create({
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


### ContractsContractChangePreview

Create an instance: `const contracts_contract_change_preview = client.ContractsContractChangePreview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaLineItems` | `any[]` | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | `any[]` | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

#### Example: Create

```ts
const contracts_contract_change_preview = await client.ContractsContractChangePreview().create({
  deltaLineItems: [],
  proposedLineItems: [],
})
```


### ContractsContractChangeSummary

Create an instance: `const contracts_contract_change_summary = client.ContractsContractChangeSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contractId` | `string` | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | The date and time when this contract change was created, in ISO 8601 format. |
| `effectiveDate` | `string` | The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'. |
| `id` | `string` | The unique identifier for this contract change. |
| `lineItemChanges` | `any[]` | An array of changes made to line items as part of this contract change. |
| `name` | `string` | The name assigned to this contract change. |
| `prorating` | `boolean` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | The unique identifier of the quote associated with this contract change, if applicable. |
| `status` | `string` | The current status of the contract change. |
| `type` | `string` | The type of contract change, which can be either 'DIRECT' or 'QUOTE'. |
| `updatedAt` | `string` | The date and time when this contract change was last updated, in ISO 8601 format. |

#### Example: List

```ts
const contracts_contract_change_summarys = await client.ContractsContractChangeSummary().list({ contract_id: "example" })
```


### ContractsQuote

Create an instance: `const contracts_quote = client.ContractsQuote()`

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

```ts
const contracts_quote = await client.ContractsQuote().create({
  contract_id: 'example_contract_id',
  quoteTemplateId: 'example_quoteTemplateId',
})
```


### Item

Create an instance: `const item = client.Item()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### PaymentLink

Create an instance: `const payment_link = client.PaymentLink()`

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
| `acceptedPaymentMethods` | `any[]` | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | `any[]` | An array of additional form fields included in the payment link. |
| `archived` | `boolean` | A boolean indicating whether the payment link is archived. |
| `archivedAt` | `string` | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | `boolean` | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | `string` | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | `any[]` | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | `boolean` | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | `boolean` | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | `number` | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | `boolean` | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | `string` | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | `Record<string, any>` | An object containing deal configuration settings. |
| `descriptionHtml` | `string` | The HTML description of the payment link, represented as a string. |
| `discount` | `Record<string, any>` |  |
| `discountCodeEnabled` | `boolean` | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | `string` | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | `any[]` | An array of discount objects associated with the payment link. |
| `domainId` | `string` | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | `boolean` | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | `Record<string, any>` | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | `any[]` | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | `any[]` | An array of fee objects associated with the payment link. |
| `formGuid` | `string` | The form GUID associated with the payment link, represented as a string. |
| `id` | `string` | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | `boolean` | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | `boolean` | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | `any[]` | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | `any[]` | An array of line items associated with the payment link. |
| `paymentLinkName` | `string` | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | `string` | The URL of the payment link, represented as a string. |
| `state` | `string` | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | `boolean` | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | `string` | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | `any[]` | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | `any[]` | An array of tax objects associated with the payment link. |
| `updatedAt` | `string` | The date and time when the payment link was last updated, in ISO 8601 format. |

#### Example: Load

```ts
const payment_link = await client.PaymentLink().load({ id: 'payment_link_id' })
```

#### Example: List

```ts
const payment_links = await client.PaymentLink().list()
```

#### Example: Create

```ts
const payment_link = await client.PaymentLink().create({
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


### PaymentMethodsCommercePaymentMethodSettingsPublic

Create an instance: `const payment_methods_commerce_payment_method_settings_public = client.PaymentMethodsCommercePaymentMethodSettingsPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeCurrencies` | `any[]` | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | `string` | The type of payment method. |
| `isDefaultOn` | `boolean` | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | `any[]` | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | `any[]` | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | `any[]` | A full list of currencies that are supported by the bundled commercePaymentMethod. |

#### Example: List

```ts
const payment_methods_commerce_payment_method_settings_publics = await client.PaymentMethodsCommercePaymentMethodSettingsPublic().list()
```


### PaymentsActionResponseWithSingleResultSimplePublicObject

Create an instance: `const payments_action_response_with_single_result_simple_public_object = client.PaymentsActionResponseWithSingleResultSimplePublicObject()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | A string indicating the category of the error. |
| `context` | `Record<string, any>` | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | `any[]` | An array of ErrorDetail objects providing further information about the error. |
| `id` | `string` | A string that uniquely identifies this specific error instance. |
| `links` | `Record<string, any>` | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | `string` | A string containing a human-readable message describing the error. |
| `status` | `string` | A string representing the status of the error. |
| `subCategory` | `Record<string, any>` | An object providing more specific details about the error category. |

#### Example: List

```ts
const payments_action_response_with_single_result_simple_public_objects = await client.PaymentsActionResponseWithSingleResultSimplePublicObject().list({ payment_crm_object_id: "example", task_id: "example" })
```


### PaymentsCreateManualPaymentPublic

Create an instance: `const payments_create_manual_payment_public = client.PaymentsCreateManualPaymentPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associations` | `any[]` | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` | `Record<string, any>` |  |
| `currencyCode` | `string` | The currency code for the payment, represented as a string. |
| `customerEmail` | `string` | The email address of the customer making the payment, represented as a string. |
| `id` | `string` | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | `number` | The amount of the payment, represented as a number. |
| `paymentDate` | `string` | The date of the payment, represented as a string. |
| `paymentMethod` | `string` | The method used for the payment, represented as a string. |

#### Example: Create

```ts
const payments_create_manual_payment_public = await client.PaymentsCreateManualPaymentPublic().create({
  associations: [],
  currencyCode: 'example_currencyCode',
  id: 'example_id',
  paymentAmount: 1,
  paymentDate: 'example_paymentDate',
  paymentMethod: 'example_paymentMethod',
})
```


### PaymentsSettingsGetBillingSettingsPublic

Create an instance: `const payments_settings_get_billing_settings_public = client.PaymentsSettingsGetBillingSettingsPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountGoogleAnalyticsEnabled` | `boolean` | Indicates whether Google Analytics tracking is enabled for the account. |
| `checkoutPrefillEnabled` | `boolean` | Indicates whether checkout fields should be prefilled. |
| `collectFullBillingAddress` | `boolean` | Indicates whether the full billing address should be collected. |
| `collectPaymentMethodOnFile` | `boolean` | Indicates whether a payment method should be kept on file. |
| `defaultFromEmailAddress` | `string` | The default email address used for sending communications. |
| `paymentsGoogleAnalyticsEnabled` | `boolean` | Indicates whether Google Analytics tracking is enabled for payments. |
| `recaptchaEnabled` | `boolean` | Indicates whether reCAPTCHA is enabled for additional security. |

#### Example: Load

```ts
const payments_settings_get_billing_settings_public = await client.PaymentsSettingsGetBillingSettingsPublic().load()
```


### PaymentsSettingsGetCheckoutFeesPublic

Create an instance: `const payments_settings_get_checkout_fees_public = client.PaymentsSettingsGetCheckoutFeesPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appliesToPaymentType` | `string` | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | `any[]` | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | `number` | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | `string` | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | `string` | The unique identifier for this checkout fee configuration. |
| `name` | `string` | The name of the checkout fee, used for identification and display purposes. |

#### Example: List

```ts
const payments_settings_get_checkout_fees_publics = await client.PaymentsSettingsGetCheckoutFeesPublic().list()
```


### PaymentsSettingsGetPolicySettingsPublic

Create an instance: `const payments_settings_get_policy_settings_public = client.PaymentsSettingsGetPolicySettingsPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acknowledgementRequired` | `boolean` | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | `string` | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | `boolean` | A boolean indicating whether a custom policy is enabled. |
| `refundPolicyText` | `string` | A string containing the text of the refund policy. |
| `termsOfServiceUrl` | `string` | A string representing the URL of the terms of service. |

#### Example: Load

```ts
const payments_settings_get_policy_settings_public = await client.PaymentsSettingsGetPolicySettingsPublic().load()
```


### PaymentsSettingsGetShippingSettingsPublic

Create an instance: `const payments_settings_get_shipping_settings_public = client.PaymentsSettingsGetShippingSettingsPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `collectShippingAddressByDefault` | `boolean` | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | `any[]` | An array of strings representing the list of countries to which shipping is available. |

#### Example: List

```ts
const payments_settings_get_shipping_settings_publics = await client.PaymentsSettingsGetShippingSettingsPublic().list()
```


### PaymentsaccountsPaymentAccountView

Create an instance: `const paymentsaccounts_payment_account_view = client.PaymentsaccountsPaymentAccountView()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canPayout` | `boolean` | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | `boolean` | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | `string` | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | `any[]` | An array of processor types that the account is eligible to use. |
| `enrollmentState` | `string` | The current enrollment state of the payment account. |
| `hasTransacted` | `boolean` | A boolean indicating whether the account has ever processed a transaction. |
| `id` | `string` | The portalId for the payment account. |
| `lastTransactedAt` | `string` | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | `string` | The type of payment processor associated with the account. |
| `updatedAt` | `string` | The date and time when the payment account was last updated, in ISO 8601 format. |

#### Example: List

```ts
const paymentsaccounts_payment_account_views = await client.PaymentsaccountsPaymentAccountView().list()
```


### PriceBook

Create an instance: `const price_book = client.PriceBook()`

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
| `archived` | `boolean` | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `boolean` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `number` | The number of products included in this price book. |
| `createdAt` | `string` | The date and time when this price book was created. |
| `customProperties` | `Record<string, any>` | A map of custom property names to their values for this price book. |
| `description` | `string` | A description of the price book. |
| `id` | `string` | The unique identifier for this price book. |
| `name` | `string` | The name of the price book. |
| `status` | `string` | The current status of the price book. |
| `supportedCurrencies` | `any[]` | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | The date and time when this price book was last updated. |

#### Example: Load

```ts
const price_book = await client.PriceBook().load({ id: 1 })
```

#### Example: List

```ts
const price_books = await client.PriceBook().list()
```

#### Example: Create

```ts
const price_book = await client.PriceBook().create({
  autoAssignmentEnabled: true,
  countOfIncludedProducts: 1,
  customProperties: {},
  id: 'example_id',
  status: 'example_status',
  supportedCurrencies: [],
})
```


### PriceBooksBatchResponsePriceBookItem

Create an instance: `const price_books_batch_response_price_book_item = client.PriceBooksBatchResponsePriceBookItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `any[]` | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | `Record<string, any>` | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `any[]` | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```ts
const price_books_batch_response_price_book_item = await client.PriceBooksBatchResponsePriceBookItem().create({
  price_book_id: 1,
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### PriceBooksCollectionResponsePriceBookItemResponseForward

Create an instance: `const price_books_collection_response_price_book_item_response_forward = client.PriceBooksCollectionResponsePriceBookItemResponseForward()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | The cost of goods sold for the price book item. |
| `createdAt` | `string` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `Record<string, any>` | A map of custom property names to their values for the price book item. |
| `description` | `string` | A description of the price book item. |
| `id` | `string` | The unique identifier for the price book item. |
| `images` | `string` | A string representing images associated with the price book item. |
| `name` | `string` | The name of the price book item. |
| `priceBookId` | `string` | The unique identifier for the price book containing this item. |
| `pricing` | `Record<string, any>` |  |
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

```ts
const price_books_collection_response_price_book_item_response_forwards = await client.PriceBooksCollectionResponsePriceBookItemResponseForward().list({ price_book_id: 1 })
```


### PriceBooksPriceBook

Create an instance: `const price_books_price_book = client.PriceBooksPriceBook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `boolean` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `number` | The number of products included in this price book. |
| `createdAt` | `string` | The date and time when this price book was created. |
| `customProperties` | `Record<string, any>` | A map of custom property names to their values for this price book. |
| `description` | `string` | A description of the price book. |
| `id` | `string` | The unique identifier for this price book. |
| `name` | `string` | The name of the price book. |
| `status` | `string` | The current status of the price book. |
| `supportedCurrencies` | `any[]` | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | The date and time when this price book was last updated. |

#### Example: Create

```ts
const price_books_price_book = await client.PriceBooksPriceBook().create({
  price_book_id: 1,
  autoAssignmentEnabled: true,
  countOfIncludedProducts: 1,
  customProperties: {},
  id: 'example_id',
  status: 'example_status',
  supportedCurrencies: [],
})
```


### PriceBooksPriceBookItem

Create an instance: `const price_books_price_book_item = client.PriceBooksPriceBookItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | The cost of goods sold for the price book item. |
| `createdAt` | `string` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `Record<string, any>` | A map of custom property names to their values for the price book item. |
| `description` | `string` | A description of the price book item. |
| `id` | `string` | The unique identifier for the price book item. |
| `images` | `string` | A string representing images associated with the price book item. |
| `name` | `string` | The name of the price book item. |
| `priceBookId` | `string` | The unique identifier for the price book containing this item. |
| `pricing` | `Record<string, any>` |  |
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

```ts
const price_books_price_book_item = await client.PriceBooksPriceBookItem().load({ id: 1, price_book_id: 1 })
```

#### Example: Create

```ts
const price_books_price_book_item = await client.PriceBooksPriceBookItem().create({
  price_book_id: 1,
  customProperties: {},
  id: 'example_id',
  pricing: {},
  productId: 'example_productId',
})
```


### PriceBooksPriceBookValidate

Create an instance: `const price_books_price_book_validate = client.PriceBooksPriceBookValidate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | `boolean` | A boolean indicating whether the price book is valid. |

#### Example: Create

```ts
const price_books_price_book_validate = await client.PriceBooksPriceBookValidate().create({
  price_book_id: 1,
  errors: [],
  isValid: true,
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

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

Rate limiting.

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

Retry.

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

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

2 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `contracts_contract_change` | `lineItemChanges` | 3 | 3 levels |
| `contracts_contract_change_summary` | `lineItemChanges` | 3 | 3 levels |

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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
hubspot-commerce/
├── src/
│   ├── HubspotCommerceSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { HubspotCommerceSDK } from '@voxgig-sdk/hubspot-commerce-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const paymentsaccountspaymentaccountview = client.PaymentsaccountsPaymentAccountView()
await paymentsaccountspaymentaccountview.list()

// paymentsaccountspaymentaccountview.data() now returns the paymentsaccountspaymentaccountview data from the last `list`
// paymentsaccountspaymentaccountview.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
