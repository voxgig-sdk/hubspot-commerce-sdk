# HubspotCommerce Python SDK



The Python SDK for the HubspotCommerce API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Advanced()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-commerce-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from hubspotcommerce_sdk import HubspotCommerceSDK

client = HubspotCommerceSDK({
    "apikey": os.environ.get("HUBSPOT_COMMERCE_APIKEY"),
})
```

### 3. Load a pricebookspricebookitem

PriceBooksPriceBookItem is nested under price_book, so provide the `price_book_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    pricebookspricebookitem = client.PriceBooksPriceBookItem().load({"price_book_id": 1, "id": 1})
    print(pricebookspricebookitem)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Advanced().create({"payment_crm_object_id": "example_payment_crm_object_id"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    paymentsaccountspaymentaccountviews = client.PaymentsaccountsPaymentAccountView().list()
    print(paymentsaccountspaymentaccountviews)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = HubspotCommerceSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
paymentsaccountspaymentaccountview = client.PaymentsaccountsPaymentAccountView().list()
# paymentsaccountspaymentaccountview contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = HubspotCommerceSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
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
cd py && pytest test/
```


## Reference

### HubspotCommerceSDK

```python
from hubspotcommerce_sdk import HubspotCommerceSDK

client = HubspotCommerceSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = HubspotCommerceSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### HubspotCommerceSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Advanced` | `(data) -> AdvancedEntity` | Create an Advanced entity instance. |
| `Basic` | `(data) -> BasicEntity` | Create a Basic entity instance. |
| `Batch` | `(data) -> BatchEntity` | Create a Batch entity instance. |
| `Contract` | `(data) -> ContractEntity` | Create a Contract entity instance. |
| `ContractsContract` | `(data) -> ContractsContractEntity` | Create a ContractsContract entity instance. |
| `ContractsContractChange` | `(data) -> ContractsContractChangeEntity` | Create a ContractsContractChange entity instance. |
| `ContractsContractChangePreview` | `(data) -> ContractsContractChangePreviewEntity` | Create a ContractsContractChangePreview entity instance. |
| `ContractsContractChangeSummary` | `(data) -> ContractsContractChangeSummaryEntity` | Create a ContractsContractChangeSummary entity instance. |
| `ContractsQuote` | `(data) -> ContractsQuoteEntity` | Create a ContractsQuote entity instance. |
| `Item` | `(data) -> ItemEntity` | Create an Item entity instance. |
| `PaymentLink` | `(data) -> PaymentLinkEntity` | Create a PaymentLink entity instance. |
| `PaymentMethodsCommercePaymentMethodSettingsPublic` | `(data) -> PaymentMethodsCommercePaymentMethodSettingsPublicEntity` | Create a PaymentMethodsCommercePaymentMethodSettingsPublic entity instance. |
| `PaymentsActionResponseWithSingleResultSimplePublicObject` | `(data) -> PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` | Create a PaymentsActionResponseWithSingleResultSimplePublicObject entity instance. |
| `PaymentsCreateManualPaymentPublic` | `(data) -> PaymentsCreateManualPaymentPublicEntity` | Create a PaymentsCreateManualPaymentPublic entity instance. |
| `PaymentsSettingsGetBillingSettingsPublic` | `(data) -> PaymentsSettingsGetBillingSettingsPublicEntity` | Create a PaymentsSettingsGetBillingSettingsPublic entity instance. |
| `PaymentsSettingsGetCheckoutFeesPublic` | `(data) -> PaymentsSettingsGetCheckoutFeesPublicEntity` | Create a PaymentsSettingsGetCheckoutFeesPublic entity instance. |
| `PaymentsSettingsGetPolicySettingsPublic` | `(data) -> PaymentsSettingsGetPolicySettingsPublicEntity` | Create a PaymentsSettingsGetPolicySettingsPublic entity instance. |
| `PaymentsSettingsGetShippingSettingsPublic` | `(data) -> PaymentsSettingsGetShippingSettingsPublicEntity` | Create a PaymentsSettingsGetShippingSettingsPublic entity instance. |
| `PaymentsaccountsPaymentAccountView` | `(data) -> PaymentsaccountsPaymentAccountViewEntity` | Create a PaymentsaccountsPaymentAccountView entity instance. |
| `PriceBook` | `(data) -> PriceBookEntity` | Create a PriceBook entity instance. |
| `PriceBooksBatchResponsePriceBookItem` | `(data) -> PriceBooksBatchResponsePriceBookItemEntity` | Create a PriceBooksBatchResponsePriceBookItem entity instance. |
| `PriceBooksCollectionResponsePriceBookItemResponseForward` | `(data) -> PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` | Create a PriceBooksCollectionResponsePriceBookItemResponseForward entity instance. |
| `PriceBooksPriceBook` | `(data) -> PriceBooksPriceBookEntity` | Create a PriceBooksPriceBook entity instance. |
| `PriceBooksPriceBookItem` | `(data) -> PriceBooksPriceBookItemEntity` | Create a PriceBooksPriceBookItem entity instance. |
| `PriceBooksPriceBookValidate` | `(data) -> PriceBooksPriceBookValidateEntity` | Create a PriceBooksPriceBookValidate entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Operations: Create, Load, Update.

API path: `/commerce/contracts/2027-03-beta/changes/{changeId}/accept`

#### ContractsContractChangePreview

| Field | Description |
| --- | --- |
| `deltaLineItems` | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

Operations: Create.

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

Operations: List.

API path: `/commerce/contracts/2027-03-beta/contracts/{contractId}/changes`

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

Create an instance: `advanced = client.Advanced()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
advanced = client.Advanced().create({
    "payment_crm_object_id": "example_payment_crm_object_id",  # str
})
```


### Basic

Create an instance: `basic = client.Basic()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Batch

Create an instance: `batch = client.Batch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
batch = client.Batch().create({
    "price_book_id": 1,  # int
})
```


### Contract

Create an instance: `contract = client.Contract()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addressTypesToCollect` | `list` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `str` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `list` | An array of allowed payment methods. |
| `annualContractValue` | `float` | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `dict` | An object representing the billing address for the contract. |
| `billingCompanyId` | `str` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `str` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `str` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `str` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `str` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `str` | The process for collecting payments. |
| `contractEffectiveDate` | `str` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `str` | The unique identifier of the source of the contract. |
| `createdAt` | `str` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `str` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float` | The current monthly recurring revenue for the contract. |
| `customProperties` | `dict` | A map of custom property names to their values. |
| `dealId` | `str` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `str` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `str` | The discount code applied to the contract. |
| `endDate` | `str` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `str` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `str` | The unique identifier for the contract. |
| `language` | `str` | The language associated with the contract. |
| `lineItems` | `list` | An array of line items included in the contract. |
| `locale` | `str` | The locale associated with the contract. |
| `name` | `str` | The name of the contract. |
| `netPaymentTerms` | `int` | The net payment terms for the contract, represented as an integer. |
| `ownerId` | `dict` | An object representing the ID of the contract owner. |
| `paymentEnabled` | `bool` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `str` | The payment method used for the contract. |
| `poNumber` | `str` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float` | The value of the contract before termination. |
| `renewalContractId` | `str` | The unique identifier of the renewal contract. |
| `renewalDate` | `str` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `dict` | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | `dict` | An object representing the domain of the seller's company. |
| `sellerCompanyName` | `str` | The name of the seller's company. |
| `sellerEmail` | `str` | The email address of the seller. |
| `sellerFirstName` | `str` | The first name of the seller. |
| `sellerLastName` | `str` | The last name of the seller. |
| `sellerPhone` | `dict` | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | `str` | The phone number of the seller. |
| `startDate` | `str` | The start date of the contract, in ISO 8601 format. |
| `status` | `str` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `str` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float` | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float` | The total value of the contract. |
| `totalPaidAmount` | `float` | The total amount paid under the contract. |
| `updatedAt` | `str` | The date and time when the contract was last updated, in ISO 8601 format. |

#### Example: Load

```python
contract = client.Contract().load({"id": "contract_id"})
```

#### Example: Create

```python
contract = client.Contract().create({
    "addressTypesToCollect": [],  # list
    "allowedPaymentMethods": [],  # list
    "automatedTaxesEnabled": True,  # bool
    "customProperties": {},  # dict
    "hubspotBillingEnabled": True,  # bool
    "id": "example_id",  # str
    "lineItems": [],  # list
    "ownerId": {},  # dict
    "paymentEnabled": True,  # bool
    "sellerCompanyDomain": {},  # dict
    "sellerPhone": {},  # dict
    "status": "example_status",  # str
    "storePaymentMethodAtCheckout": True,  # bool
})
```


### ContractsContract

Create an instance: `contracts_contract = client.ContractsContract()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addressTypesToCollect` | `list` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `str` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `list` | An array of allowed payment methods. |
| `annualContractValue` | `float` | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `dict` |  |
| `billingCompanyId` | `str` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `str` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `str` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `str` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `str` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `str` | The process for collecting payments. |
| `contractEffectiveDate` | `str` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `str` | The unique identifier of the source of the contract. |
| `createdAt` | `str` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `str` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float` | The current monthly recurring revenue for the contract. |
| `customProperties` | `dict` | A map of custom property names to their values. |
| `dealId` | `str` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `str` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `str` | The discount code applied to the contract. |
| `endDate` | `str` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `str` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `str` | The unique identifier for the contract. |
| `language` | `str` | The language associated with the contract. |
| `lineItems` | `list` | An array of line items included in the contract. |
| `locale` | `str` | The locale associated with the contract. |
| `name` | `str` | The name of the contract. |
| `netPaymentTerms` | `int` | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | `bool` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `str` | The payment method used for the contract. |
| `poNumber` | `str` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float` | The value of the contract before termination. |
| `renewalContractId` | `str` | The unique identifier of the renewal contract. |
| `renewalDate` | `str` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `dict` |  |
| `sellerCompanyName` | `str` | The name of the seller's company. |
| `sellerEmail` | `str` | The email address of the seller. |
| `sellerFirstName` | `str` | The first name of the seller. |
| `sellerLastName` | `str` | The last name of the seller. |
| `sellerPhoneNumber` | `str` | The phone number of the seller. |
| `startDate` | `str` | The start date of the contract, in ISO 8601 format. |
| `status` | `str` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `str` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float` | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float` | The total value of the contract. |
| `totalPaidAmount` | `float` | The total amount paid under the contract. |
| `updatedAt` | `str` | The date and time when the contract was last updated, in ISO 8601 format. |

#### Example: Create

```python
contracts_contract = client.ContractsContract().create({
    "contract_id": "example_contract_id",  # str
    "addressTypesToCollect": [],  # list
    "allowedPaymentMethods": [],  # list
    "automatedTaxesEnabled": True,  # bool
    "customProperties": {},  # dict
    "hubspotBillingEnabled": True,  # bool
    "id": "example_id",  # str
    "lineItems": [],  # list
    "paymentEnabled": True,  # bool
    "status": "example_status",  # str
    "storePaymentMethodAtCheckout": True,  # bool
})
```


### ContractsContractChange

Create an instance: `contracts_contract_change = client.ContractsContractChange()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contractId` | `str` | The unique identifier of the contract associated with this change. |
| `createdAt` | `str` | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | `list` | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | `str` | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | `str` | The unique identifier for the contract change. |
| `lineItemChanges` | `list` | An array of changes to line items associated with the contract change. |
| `name` | `str` | The name of the contract change. |
| `proposedLineItems` | `list` | An array of line items that are proposed as part of the contract change. |
| `prorating` | `bool` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `str` | The unique identifier of the quote associated with this contract change. |
| `status` | `str` | The current status of the contract change. |
| `type` | `str` | The type of contract change. |
| `updatedAt` | `str` | The date and time when the contract change was last updated, in ISO 8601 format. |

#### Example: Load

```python
contracts_contract_change = client.ContractsContractChange().load({"id": "contracts_contract_change_id"})
```

#### Example: Create

```python
contracts_contract_change = client.ContractsContractChange().create({
    "contractId": "example_contractId",  # str
    "deltaLineItems": [],  # list
    "id": "example_id",  # str
    "lineItemChanges": [],  # list
    "proposedLineItems": [],  # list
    "prorating": True,  # bool
    "status": "example_status",  # str
    "type": "example_type",  # str
})
```


### ContractsContractChangePreview

Create an instance: `contracts_contract_change_preview = client.ContractsContractChangePreview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaLineItems` | `list` | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | `list` | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

#### Example: Create

```python
contracts_contract_change_preview = client.ContractsContractChangePreview().create({
    "deltaLineItems": [],  # list
    "proposedLineItems": [],  # list
})
```


### ContractsContractChangeSummary

Create an instance: `contracts_contract_change_summary = client.ContractsContractChangeSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contractId` | `str` | The unique identifier of the contract associated with this change. |
| `createdAt` | `str` | The date and time when this contract change was created, in ISO 8601 format. |
| `effectiveDate` | `str` | The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'. |
| `id` | `str` | The unique identifier for this contract change. |
| `lineItemChanges` | `list` | An array of changes made to line items as part of this contract change. |
| `name` | `str` | The name assigned to this contract change. |
| `prorating` | `bool` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `str` | The unique identifier of the quote associated with this contract change, if applicable. |
| `status` | `str` | The current status of the contract change. |
| `type` | `str` | The type of contract change, which can be either 'DIRECT' or 'QUOTE'. |
| `updatedAt` | `str` | The date and time when this contract change was last updated, in ISO 8601 format. |

#### Example: List

```python
contracts_contract_change_summarys = client.ContractsContractChangeSummary().list({"contract_id": "example"})
```


### ContractsQuote

Create an instance: `contracts_quote = client.ContractsQuote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dealId` | `str` | The unique identifier of the deal associated with the renewal quote. |
| `dealPipeline` | `str` | The identifier of the pipeline in which the deal is located. |
| `dealStage` | `str` | The identifier of the stage within the pipeline that the deal is currently in. |
| `name` | `str` | The name of the renewal quote. |
| `quoteTemplateId` | `str` | The unique identifier of the quote template to be used for creating the renewal quote. |

#### Example: Create

```python
contracts_quote = client.ContractsQuote().create({
    "contract_id": "example_contract_id",  # str
    "quoteTemplateId": "example_quoteTemplateId",  # str
})
```


### Item

Create an instance: `item = client.Item()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### PaymentLink

Create an instance: `payment_link = client.PaymentLink()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptedPaymentMethods` | `list` | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | `list` | An array of additional form fields included in the payment link. |
| `archived` | `bool` | A boolean indicating whether the payment link is archived. |
| `archivedAt` | `str` | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | `bool` | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | `str` | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | `list` | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | `bool` | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | `bool` | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | `int` | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | `bool` | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | `str` | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | `str` | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | `dict` | An object containing deal configuration settings. |
| `descriptionHtml` | `str` | The HTML description of the payment link, represented as a string. |
| `discount` | `dict` |  |
| `discountCodeEnabled` | `bool` | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | `str` | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | `list` | An array of discount objects associated with the payment link. |
| `domainId` | `str` | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | `bool` | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | `dict` | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | `list` | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | `list` | An array of fee objects associated with the payment link. |
| `formGuid` | `str` | The form GUID associated with the payment link, represented as a string. |
| `id` | `str` | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | `bool` | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | `bool` | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | `list` | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | `list` | An array of line items associated with the payment link. |
| `paymentLinkName` | `str` | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | `str` | The URL of the payment link, represented as a string. |
| `state` | `str` | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | `bool` | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | `str` | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | `list` | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | `list` | An array of tax objects associated with the payment link. |
| `updatedAt` | `str` | The date and time when the payment link was last updated, in ISO 8601 format. |

#### Example: Load

```python
payment_link = client.PaymentLink().load({"id": "payment_link_id"})
```

#### Example: List

```python
payment_links = client.PaymentLink().list()
```

#### Example: Create

```python
payment_link = client.PaymentLink().create({
    "acceptedPaymentMethods": [],  # list
    "additionalFormFields": [],  # list
    "archived": True,  # bool
    "automatedSalesTaxEnabled": True,  # bool
    "checkoutFeeIds": [],  # list
    "collectFullBillingAddress": True,  # bool
    "collectShippingAddress": True,  # bool
    "completedPurchaseCount": 1,  # int
    "createContractOnPurchase": True,  # bool
    "currencyCode": "example_currencyCode",  # str
    "dealConfigurations": {},  # dict
    "discount": {},  # dict
    "discountCodeEnabled": True,  # bool
    "discounts": [],  # list
    "enableDefaultCheckoutFees": True,  # bool
    "feeObjectIds": [],  # list
    "fees": [],  # list
    "formGuid": "example_formGuid",  # str
    "id": "example_id",  # str
    "includeEmailInSuccessRedirect": True,  # bool
    "isOneTimeUseEnabled": True,  # bool
    "lineItemObjectIds": [],  # list
    "lineItems": [],  # list
    "paymentLinkName": "example_paymentLinkName",  # str
    "paymentLinkUrl": "example_paymentLinkUrl",  # str
    "state": "example_state",  # str
    "storePaymentMethodAtCheckout": True,  # bool
    "taxObjectIds": [],  # list
    "taxes": [],  # list
})
```


### PaymentMethodsCommercePaymentMethodSettingsPublic

Create an instance: `payment_methods_commerce_payment_method_settings_public = client.PaymentMethodsCommercePaymentMethodSettingsPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeCurrencies` | `list` | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | `str` | The type of payment method. |
| `isDefaultOn` | `bool` | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | `list` | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | `list` | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | `list` | A full list of currencies that are supported by the bundled commercePaymentMethod. |

#### Example: List

```python
payment_methods_commerce_payment_method_settings_publics = client.PaymentMethodsCommercePaymentMethodSettingsPublic().list()
```


### PaymentsActionResponseWithSingleResultSimplePublicObject

Create an instance: `payments_action_response_with_single_result_simple_public_object = client.PaymentsActionResponseWithSingleResultSimplePublicObject()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` | A string indicating the category of the error. |
| `context` | `dict` | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | `list` | An array of ErrorDetail objects providing further information about the error. |
| `id` | `str` | A string that uniquely identifies this specific error instance. |
| `links` | `dict` | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | `str` | A string containing a human-readable message describing the error. |
| `status` | `str` | A string representing the status of the error. |
| `subCategory` | `dict` | An object providing more specific details about the error category. |

#### Example: List

```python
payments_action_response_with_single_result_simple_public_objects = client.PaymentsActionResponseWithSingleResultSimplePublicObject().list({"payment_crm_object_id": "example", "task_id": "example"})
```


### PaymentsCreateManualPaymentPublic

Create an instance: `payments_create_manual_payment_public = client.PaymentsCreateManualPaymentPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associations` | `list` | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` | `dict` |  |
| `currencyCode` | `str` | The currency code for the payment, represented as a string. |
| `customerEmail` | `str` | The email address of the customer making the payment, represented as a string. |
| `id` | `str` | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | `float` | The amount of the payment, represented as a number. |
| `paymentDate` | `str` | The date of the payment, represented as a string. |
| `paymentMethod` | `str` | The method used for the payment, represented as a string. |

#### Example: Create

```python
payments_create_manual_payment_public = client.PaymentsCreateManualPaymentPublic().create({
    "associations": [],  # list
    "currencyCode": "example_currencyCode",  # str
    "id": "example_id",  # str
    "paymentAmount": 1,  # float
    "paymentDate": "example_paymentDate",  # str
    "paymentMethod": "example_paymentMethod",  # str
})
```


### PaymentsSettingsGetBillingSettingsPublic

Create an instance: `payments_settings_get_billing_settings_public = client.PaymentsSettingsGetBillingSettingsPublic()`

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
| `defaultFromEmailAddress` | `str` | The default email address used for sending communications. |
| `paymentsGoogleAnalyticsEnabled` | `bool` | Indicates whether Google Analytics tracking is enabled for payments. |
| `recaptchaEnabled` | `bool` | Indicates whether reCAPTCHA is enabled for additional security. |

#### Example: Load

```python
payments_settings_get_billing_settings_public = client.PaymentsSettingsGetBillingSettingsPublic().load()
```


### PaymentsSettingsGetCheckoutFeesPublic

Create an instance: `payments_settings_get_checkout_fees_public = client.PaymentsSettingsGetCheckoutFeesPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appliesToPaymentType` | `str` | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | `list` | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | `float` | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | `str` | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | `str` | The unique identifier for this checkout fee configuration. |
| `name` | `str` | The name of the checkout fee, used for identification and display purposes. |

#### Example: List

```python
payments_settings_get_checkout_fees_publics = client.PaymentsSettingsGetCheckoutFeesPublic().list()
```


### PaymentsSettingsGetPolicySettingsPublic

Create an instance: `payments_settings_get_policy_settings_public = client.PaymentsSettingsGetPolicySettingsPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acknowledgementRequired` | `bool` | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | `str` | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | `bool` | A boolean indicating whether a custom policy is enabled. |
| `refundPolicyText` | `str` | A string containing the text of the refund policy. |
| `termsOfServiceUrl` | `str` | A string representing the URL of the terms of service. |

#### Example: Load

```python
payments_settings_get_policy_settings_public = client.PaymentsSettingsGetPolicySettingsPublic().load()
```


### PaymentsSettingsGetShippingSettingsPublic

Create an instance: `payments_settings_get_shipping_settings_public = client.PaymentsSettingsGetShippingSettingsPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `collectShippingAddressByDefault` | `bool` | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | `list` | An array of strings representing the list of countries to which shipping is available. |

#### Example: List

```python
payments_settings_get_shipping_settings_publics = client.PaymentsSettingsGetShippingSettingsPublic().list()
```


### PaymentsaccountsPaymentAccountView

Create an instance: `paymentsaccounts_payment_account_view = client.PaymentsaccountsPaymentAccountView()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canPayout` | `bool` | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | `bool` | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | `str` | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | `list` | An array of processor types that the account is eligible to use. |
| `enrollmentState` | `str` | The current enrollment state of the payment account. |
| `hasTransacted` | `bool` | A boolean indicating whether the account has ever processed a transaction. |
| `id` | `str` | The portalId for the payment account. |
| `lastTransactedAt` | `str` | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | `str` | The type of payment processor associated with the account. |
| `updatedAt` | `str` | The date and time when the payment account was last updated, in ISO 8601 format. |

#### Example: List

```python
paymentsaccounts_payment_account_views = client.PaymentsaccountsPaymentAccountView().list()
```


### PriceBook

Create an instance: `price_book = client.PriceBook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether this price book is archived. |
| `archivedAt` | `str` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | The number of products included in this price book. |
| `createdAt` | `str` | The date and time when this price book was created. |
| `customProperties` | `dict` | A map of custom property names to their values for this price book. |
| `description` | `str` | A description of the price book. |
| `id` | `str` | The unique identifier for this price book. |
| `name` | `str` | The name of the price book. |
| `status` | `str` | The current status of the price book. |
| `supportedCurrencies` | `list` | An array of currency codes that this price book supports. |
| `updatedAt` | `str` | The date and time when this price book was last updated. |

#### Example: Load

```python
price_book = client.PriceBook().load({"id": 1})
```

#### Example: List

```python
price_books = client.PriceBook().list()
```

#### Example: Create

```python
price_book = client.PriceBook().create({
    "autoAssignmentEnabled": True,  # bool
    "countOfIncludedProducts": 1,  # int
    "customProperties": {},  # dict
    "id": "example_id",  # str
    "status": "example_status",  # str
    "supportedCurrencies": [],  # list
})
```


### PriceBooksBatchResponsePriceBookItem

Create an instance: `price_books_batch_response_price_book_item = client.PriceBooksBatchResponsePriceBookItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `list` | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | `dict` | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | `str` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | `str` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | The current status of the batch operation. |

#### Example: Create

```python
price_books_batch_response_price_book_item = client.PriceBooksBatchResponsePriceBookItem().create({
    "price_book_id": 1,  # int
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### PriceBooksCollectionResponsePriceBookItemResponseForward

Create an instance: `price_books_collection_response_price_book_item_response_forward = client.PriceBooksCollectionResponsePriceBookItemResponseForward()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `str` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `str` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `str` | The billing period for the price book item. |
| `costOfGoodsSold` | `str` | The cost of goods sold for the price book item. |
| `createdAt` | `str` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `dict` | A map of custom property names to their values for the price book item. |
| `description` | `str` | A description of the price book item. |
| `id` | `str` | The unique identifier for the price book item. |
| `images` | `str` | A string representing images associated with the price book item. |
| `name` | `str` | The name of the price book item. |
| `priceBookId` | `str` | The unique identifier for the price book containing this item. |
| `pricing` | `dict` |  |
| `productClassification` | `str` | The classification of the product. |
| `productId` | `str` | The unique identifier for the product associated with the price book item. |
| `productType` | `str` | The type of product. |
| `recurringBillingTerms` | `str` | The terms of recurring billing for the price book item. |
| `sku` | `str` | The stock keeping unit (SKU) of the price book item. |
| `status` | `str` | The current status of the price book item. |
| `taxCategory` | `str` | The tax category of the price book item. |
| `updatedAt` | `str` | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | `str` | A URL associated with the price book item. |

#### Example: List

```python
price_books_collection_response_price_book_item_response_forwards = client.PriceBooksCollectionResponsePriceBookItemResponseForward().list({"price_book_id": 1})
```


### PriceBooksPriceBook

Create an instance: `price_books_price_book = client.PriceBooksPriceBook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether this price book is archived. |
| `archivedAt` | `str` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | The number of products included in this price book. |
| `createdAt` | `str` | The date and time when this price book was created. |
| `customProperties` | `dict` | A map of custom property names to their values for this price book. |
| `description` | `str` | A description of the price book. |
| `id` | `str` | The unique identifier for this price book. |
| `name` | `str` | The name of the price book. |
| `status` | `str` | The current status of the price book. |
| `supportedCurrencies` | `list` | An array of currency codes that this price book supports. |
| `updatedAt` | `str` | The date and time when this price book was last updated. |

#### Example: Create

```python
price_books_price_book = client.PriceBooksPriceBook().create({
    "price_book_id": 1,  # int
    "autoAssignmentEnabled": True,  # bool
    "countOfIncludedProducts": 1,  # int
    "customProperties": {},  # dict
    "id": "example_id",  # str
    "status": "example_status",  # str
    "supportedCurrencies": [],  # list
})
```


### PriceBooksPriceBookItem

Create an instance: `price_books_price_book_item = client.PriceBooksPriceBookItem()`

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
| `archivedAt` | `str` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `str` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `str` | The billing period for the price book item. |
| `costOfGoodsSold` | `str` | The cost of goods sold for the price book item. |
| `createdAt` | `str` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `dict` | A map of custom property names to their values for the price book item. |
| `description` | `str` | A description of the price book item. |
| `id` | `str` | The unique identifier for the price book item. |
| `images` | `str` | A string representing images associated with the price book item. |
| `name` | `str` | The name of the price book item. |
| `priceBookId` | `str` | The unique identifier for the price book containing this item. |
| `pricing` | `dict` |  |
| `productClassification` | `str` | The classification of the product. |
| `productId` | `str` | The unique identifier for the product associated with the price book item. |
| `productType` | `str` | The type of product. |
| `recurringBillingTerms` | `str` | The terms of recurring billing for the price book item. |
| `sku` | `str` | The stock keeping unit (SKU) of the price book item. |
| `status` | `str` | The current status of the price book item. |
| `taxCategory` | `str` | The tax category of the price book item. |
| `updatedAt` | `str` | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | `str` | A URL associated with the price book item. |

#### Example: Load

```python
price_books_price_book_item = client.PriceBooksPriceBookItem().load({"id": 1, "price_book_id": 1})
```

#### Example: Create

```python
price_books_price_book_item = client.PriceBooksPriceBookItem().create({
    "price_book_id": 1,  # int
    "customProperties": {},  # dict
    "id": "example_id",  # str
    "pricing": {},  # dict
    "productId": "example_productId",  # str
})
```


### PriceBooksPriceBookValidate

Create an instance: `price_books_price_book_validate = client.PriceBooksPriceBookValidate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | `bool` | A boolean indicating whether the price book is valid. |

#### Example: Create

```python
price_books_price_book_validate = client.PriceBooksPriceBookValidate().create({
    "price_book_id": 1,  # int
    "errors": [],  # list
    "isValid": True,  # bool
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── hubspotcommerce_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`hubspotcommerce_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
paymentsaccountspaymentaccountview = client.PaymentsaccountsPaymentAccountView()
paymentsaccountspaymentaccountview.list()

# paymentsaccountspaymentaccountview.data_get() now returns the paymentsaccountspaymentaccountview data from the last list
# paymentsaccountspaymentaccountview.match_get() returns the last match criteria
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
