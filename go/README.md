# HubspotCommerce Golang SDK



The Golang SDK for the HubspotCommerce API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Advanced(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/hubspot-commerce-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/hubspot-commerce-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/hubspot-commerce-sdk/go=../hubspot-commerce-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/hubspot-commerce-sdk/go"
)

func main() {
    client := sdk.NewHubspotCommerceSDK(map[string]any{
        "apikey": os.Getenv("HUBSPOT_COMMERCE_APIKEY"),
    })

    // Create a advanced.
    created, err := client.Advanced(nil).Create(map[string]any{"payment_crm_object_id": "example_payment_crm_object_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
paymentsaccountspaymentaccountviews, err := client.PaymentsaccountsPaymentAccountView(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = paymentsaccountspaymentaccountviews
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

paymentsaccountsPaymentAccountView, err := client.PaymentsaccountsPaymentAccountView(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(paymentsaccountsPaymentAccountView) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewHubspotCommerceSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewHubspotCommerceSDK

```go
func NewHubspotCommerceSDK(options map[string]any) *HubspotCommerceSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotCommerceSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotCommerceSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Advanced` | `(data map[string]any) HubspotCommerceEntity` | Create an Advanced entity instance. |
| `Basic` | `(data map[string]any) HubspotCommerceEntity` | Create a Basic entity instance. |
| `Batch` | `(data map[string]any) HubspotCommerceEntity` | Create a Batch entity instance. |
| `Contract` | `(data map[string]any) HubspotCommerceEntity` | Create a Contract entity instance. |
| `ContractsContract` | `(data map[string]any) HubspotCommerceEntity` | Create a ContractsContract entity instance. |
| `ContractsContractChange` | `(data map[string]any) HubspotCommerceEntity` | Create a ContractsContractChange entity instance. |
| `ContractsContractChangePreview` | `(data map[string]any) HubspotCommerceEntity` | Create a ContractsContractChangePreview entity instance. |
| `ContractsContractChangeSummary` | `(data map[string]any) HubspotCommerceEntity` | Create a ContractsContractChangeSummary entity instance. |
| `ContractsQuote` | `(data map[string]any) HubspotCommerceEntity` | Create a ContractsQuote entity instance. |
| `Item` | `(data map[string]any) HubspotCommerceEntity` | Create an Item entity instance. |
| `PaymentLink` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentLink entity instance. |
| `PaymentMethodsCommercePaymentMethodSettingsPublic` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentMethodsCommercePaymentMethodSettingsPublic entity instance. |
| `PaymentsActionResponseWithSingleResultSimplePublicObject` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentsActionResponseWithSingleResultSimplePublicObject entity instance. |
| `PaymentsCreateManualPaymentPublic` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentsCreateManualPaymentPublic entity instance. |
| `PaymentsSettingsGetBillingSettingsPublic` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentsSettingsGetBillingSettingsPublic entity instance. |
| `PaymentsSettingsGetCheckoutFeesPublic` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentsSettingsGetCheckoutFeesPublic entity instance. |
| `PaymentsSettingsGetPolicySettingsPublic` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentsSettingsGetPolicySettingsPublic entity instance. |
| `PaymentsSettingsGetShippingSettingsPublic` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentsSettingsGetShippingSettingsPublic entity instance. |
| `PaymentsaccountsPaymentAccountView` | `(data map[string]any) HubspotCommerceEntity` | Create a PaymentsaccountsPaymentAccountView entity instance. |
| `PriceBook` | `(data map[string]any) HubspotCommerceEntity` | Create a PriceBook entity instance. |
| `PriceBooksBatchResponsePriceBookItem` | `(data map[string]any) HubspotCommerceEntity` | Create a PriceBooksBatchResponsePriceBookItem entity instance. |
| `PriceBooksCollectionResponsePriceBookItemResponseForward` | `(data map[string]any) HubspotCommerceEntity` | Create a PriceBooksCollectionResponsePriceBookItemResponseForward entity instance. |
| `PriceBooksPriceBook` | `(data map[string]any) HubspotCommerceEntity` | Create a PriceBooksPriceBook entity instance. |
| `PriceBooksPriceBookItem` | `(data map[string]any) HubspotCommerceEntity` | Create a PriceBooksPriceBookItem entity instance. |
| `PriceBooksPriceBookValidate` | `(data map[string]any) HubspotCommerceEntity` | Create a PriceBooksPriceBookValidate entity instance. |

### Entity interface (HubspotCommerceEntity)

All entities implement the `HubspotCommerceEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    advanced, err := client.Advanced(nil).Create(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // advanced is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

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
| `"addressTypesToCollect"` | An array indicating the types of addresses to collect. |
| `"allTransactionsFeeName"` | The name of the fee applied to all transactions. |
| `"allTransactionsFeePercentage"` | The percentage of the fee applied to all transactions. |
| `"allowedPaymentMethods"` | An array of allowed payment methods. |
| `"annualContractValue"` | The annual value of the contract. |
| `"automatedTaxesEnabled"` | Indicates whether automated taxes are enabled for the contract. |
| `"billingAddress"` | An object representing the billing address for the contract. |
| `"billingCompanyId"` | The unique identifier of the billing company associated with the contract. |
| `"billingContactId"` | The unique identifier of the billing contact associated with the contract. |
| `"billingStartDateOverride"` | The date to override the billing start date, in ISO 8601 format. |
| `"businessUnitId"` | The unique identifier of the business unit associated with the contract. |
| `"cardFeeName"` | The name of the fee applied to card transactions. |
| `"cardFeePercentage"` | The percentage of the fee applied to card transactions. |
| `"collectionProcess"` | The process for collecting payments. |
| `"contractEffectiveDate"` | The date when the contract becomes effective, in ISO 8601 format. |
| `"contractSourceId"` | The unique identifier of the source of the contract. |
| `"createdAt"` | The date and time when the contract was created, in ISO 8601 format. |
| `"currencyCode"` | The currency code associated with the contract, represented as a string. |
| `"currentAnnualRecurringRevenue"` | The current annual recurring revenue for the contract. |
| `"currentMonthlyRecurringRevenue"` | The current monthly recurring revenue for the contract. |
| `"customProperties"` | A map of custom property names to their values. |
| `"dealId"` | The unique identifier of the deal associated with the contract. |
| `"directDebitFeeName"` | The name of the fee applied to direct debit transactions. |
| `"directDebitFeePercentage"` | The percentage of the fee applied to direct debit transactions. |
| `"discountCode"` | The discount code applied to the contract. |
| `"endDate"` | The end date of the contract, in ISO 8601 format. |
| `"externalPaymentMethodReferenceId"` | The external reference ID for the payment method. |
| `"hubspotBillingEnabled"` | Indicates whether HubSpot billing is enabled for the contract. |
| `"id"` | The unique identifier for the contract. |
| `"language"` | The language associated with the contract. |
| `"lineItems"` | An array of line items included in the contract. |
| `"locale"` | The locale associated with the contract. |
| `"name"` | The name of the contract. |
| `"netPaymentTerms"` | The net payment terms for the contract, represented as an integer. |
| `"ownerId"` | An object representing the ID of the contract owner. |
| `"paymentEnabled"` | Indicates whether payment is enabled for the contract. |
| `"paymentMethod"` | The payment method used for the contract. |
| `"poNumber"` | The purchase order number associated with the contract. |
| `"preTerminationContractValue"` | The value of the contract before termination. |
| `"renewalContractId"` | The unique identifier of the renewal contract. |
| `"renewalDate"` | The date when the contract is set to renew, in ISO 8601 format. |
| `"sellerCompanyAddress"` | An object representing the address of the seller's company. |
| `"sellerCompanyDomain"` | An object representing the domain of the seller's company. |
| `"sellerCompanyName"` | The name of the seller's company. |
| `"sellerEmail"` | The email address of the seller. |
| `"sellerFirstName"` | The first name of the seller. |
| `"sellerLastName"` | The last name of the seller. |
| `"sellerPhone"` | An object representing the phone number of the seller. |
| `"sellerPhoneNumber"` | The phone number of the seller. |
| `"startDate"` | The start date of the contract, in ISO 8601 format. |
| `"status"` | The current status of the contract. |
| `"storePaymentMethodAtCheckout"` | Indicates whether the payment method should be stored at checkout. |
| `"terminationDate"` | The date when the contract is terminated, in ISO 8601 format. |
| `"totalBilledAmount"` | The total amount billed under the contract. |
| `"totalBilledAmountPreTax"` | The total amount billed under the contract before tax. |
| `"totalCollectedFees"` | The total amount of fees collected under the contract. |
| `"totalCollectedTaxes"` | The total amount of taxes collected under the contract. |
| `"totalContractValue"` | The total value of the contract. |
| `"totalPaidAmount"` | The total amount paid under the contract. |
| `"updatedAt"` | The date and time when the contract was last updated, in ISO 8601 format. |

Operations: Create, Load, Update.

API path: `/commerce/contracts/2027-03-beta/contracts`

#### ContractsContract

| Field | Description |
| --- | --- |
| `"addressTypesToCollect"` | An array indicating the types of addresses to collect. |
| `"allTransactionsFeeName"` | The name of the fee applied to all transactions. |
| `"allTransactionsFeePercentage"` | The percentage of the fee applied to all transactions. |
| `"allowedPaymentMethods"` | An array of allowed payment methods. |
| `"annualContractValue"` | The annual value of the contract. |
| `"automatedTaxesEnabled"` | Indicates whether automated taxes are enabled for the contract. |
| `"billingAddress"` |  |
| `"billingCompanyId"` | The unique identifier of the billing company associated with the contract. |
| `"billingContactId"` | The unique identifier of the billing contact associated with the contract. |
| `"billingStartDateOverride"` | The date to override the billing start date, in ISO 8601 format. |
| `"businessUnitId"` | The unique identifier of the business unit associated with the contract. |
| `"cardFeeName"` | The name of the fee applied to card transactions. |
| `"cardFeePercentage"` | The percentage of the fee applied to card transactions. |
| `"collectionProcess"` | The process for collecting payments. |
| `"contractEffectiveDate"` | The date when the contract becomes effective, in ISO 8601 format. |
| `"contractSourceId"` | The unique identifier of the source of the contract. |
| `"createdAt"` | The date and time when the contract was created, in ISO 8601 format. |
| `"currencyCode"` | The currency code associated with the contract, represented as a string. |
| `"currentAnnualRecurringRevenue"` | The current annual recurring revenue for the contract. |
| `"currentMonthlyRecurringRevenue"` | The current monthly recurring revenue for the contract. |
| `"customProperties"` | A map of custom property names to their values. |
| `"dealId"` | The unique identifier of the deal associated with the contract. |
| `"directDebitFeeName"` | The name of the fee applied to direct debit transactions. |
| `"directDebitFeePercentage"` | The percentage of the fee applied to direct debit transactions. |
| `"discountCode"` | The discount code applied to the contract. |
| `"endDate"` | The end date of the contract, in ISO 8601 format. |
| `"externalPaymentMethodReferenceId"` | The external reference ID for the payment method. |
| `"hubspotBillingEnabled"` | Indicates whether HubSpot billing is enabled for the contract. |
| `"id"` | The unique identifier for the contract. |
| `"language"` | The language associated with the contract. |
| `"lineItems"` | An array of line items included in the contract. |
| `"locale"` | The locale associated with the contract. |
| `"name"` | The name of the contract. |
| `"netPaymentTerms"` | The net payment terms for the contract, represented as an integer. |
| `"paymentEnabled"` | Indicates whether payment is enabled for the contract. |
| `"paymentMethod"` | The payment method used for the contract. |
| `"poNumber"` | The purchase order number associated with the contract. |
| `"preTerminationContractValue"` | The value of the contract before termination. |
| `"renewalContractId"` | The unique identifier of the renewal contract. |
| `"renewalDate"` | The date when the contract is set to renew, in ISO 8601 format. |
| `"sellerCompanyAddress"` |  |
| `"sellerCompanyName"` | The name of the seller's company. |
| `"sellerEmail"` | The email address of the seller. |
| `"sellerFirstName"` | The first name of the seller. |
| `"sellerLastName"` | The last name of the seller. |
| `"sellerPhoneNumber"` | The phone number of the seller. |
| `"startDate"` | The start date of the contract, in ISO 8601 format. |
| `"status"` | The current status of the contract. |
| `"storePaymentMethodAtCheckout"` | Indicates whether the payment method should be stored at checkout. |
| `"terminationDate"` | The date when the contract is terminated, in ISO 8601 format. |
| `"totalBilledAmount"` | The total amount billed under the contract. |
| `"totalBilledAmountPreTax"` | The total amount billed under the contract before tax. |
| `"totalCollectedFees"` | The total amount of fees collected under the contract. |
| `"totalCollectedTaxes"` | The total amount of taxes collected under the contract. |
| `"totalContractValue"` | The total value of the contract. |
| `"totalPaidAmount"` | The total amount paid under the contract. |
| `"updatedAt"` | The date and time when the contract was last updated, in ISO 8601 format. |

Operations: Create.

API path: `/commerce/contracts/2027-03-beta/contracts/{contractId}/terminate`

#### ContractsContractChange

| Field | Description |
| --- | --- |
| `"contractId"` | The unique identifier of the contract associated with this change. |
| `"createdAt"` | The date and time when the contract change was created, in ISO 8601 format. |
| `"deltaLineItems"` | An array of line items that represent the difference resulting from the contract change. |
| `"effectiveDate"` | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `"id"` | The unique identifier for the contract change. |
| `"lineItemChanges"` | An array of changes to line items associated with the contract change. |
| `"name"` | The name of the contract change. |
| `"proposedLineItems"` | An array of line items that are proposed as part of the contract change. |
| `"prorating"` | A boolean indicating whether the contract change involves prorating. |
| `"quoteId"` | The unique identifier of the quote associated with this contract change. |
| `"status"` | The current status of the contract change. |
| `"type"` | The type of contract change. |
| `"updatedAt"` | The date and time when the contract change was last updated, in ISO 8601 format. |

Operations: Create, Load, Update.

API path: `/commerce/contracts/2027-03-beta/changes/{changeId}/accept`

#### ContractsContractChangePreview

| Field | Description |
| --- | --- |
| `"deltaLineItems"` | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `"proposedLineItems"` | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

Operations: Create.

API path: `/commerce/contracts/2027-03-beta/changes/preview`

#### ContractsContractChangeSummary

| Field | Description |
| --- | --- |
| `"contractId"` | The unique identifier of the contract associated with this change. |
| `"createdAt"` | The date and time when this contract change was created, in ISO 8601 format. |
| `"effectiveDate"` | The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'. |
| `"id"` | The unique identifier for this contract change. |
| `"lineItemChanges"` | An array of changes made to line items as part of this contract change. |
| `"name"` | The name assigned to this contract change. |
| `"prorating"` | A boolean indicating whether the contract change involves prorating. |
| `"quoteId"` | The unique identifier of the quote associated with this contract change, if applicable. |
| `"status"` | The current status of the contract change. |
| `"type"` | The type of contract change, which can be either 'DIRECT' or 'QUOTE'. |
| `"updatedAt"` | The date and time when this contract change was last updated, in ISO 8601 format. |

Operations: List.

API path: `/commerce/contracts/2027-03-beta/contracts/{contractId}/changes`

#### ContractsQuote

| Field | Description |
| --- | --- |
| `"dealId"` | The unique identifier of the deal associated with the renewal quote. |
| `"dealPipeline"` | The identifier of the pipeline in which the deal is located. |
| `"dealStage"` | The identifier of the stage within the pipeline that the deal is currently in. |
| `"name"` | The name of the renewal quote. |
| `"quoteTemplateId"` | The unique identifier of the quote template to be used for creating the renewal quote. |

Operations: Create.

API path: `/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes`

#### Item

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}`

#### PaymentLink

| Field | Description |
| --- | --- |
| `"acceptedPaymentMethods"` | An array of accepted payment methods for the payment link. |
| `"additionalFormFields"` | An array of additional form fields included in the payment link. |
| `"archived"` | A boolean indicating whether the payment link is archived. |
| `"archivedAt"` | The date and time when the payment link was archived, in ISO 8601 format. |
| `"automatedSalesTaxEnabled"` | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `"businessUnitId"` | The business unit ID associated with the payment link, represented as a string. |
| `"checkoutFeeIds"` | An array of checkout fee IDs associated with the payment link. |
| `"collectFullBillingAddress"` | A boolean indicating whether to collect the full billing address during checkout. |
| `"collectShippingAddress"` | A boolean indicating whether to collect the shipping address during checkout. |
| `"completedPurchaseCount"` | The number of completed purchases made through this payment link. |
| `"createContractOnPurchase"` | A boolean indicating whether a contract should be created upon purchase. |
| `"createdAt"` | The date and time when the payment link was created, in ISO 8601 format. |
| `"currencyCode"` | The currency code for the payment link, represented as a string. |
| `"dealConfigurations"` | An object containing deal configuration settings. |
| `"descriptionHtml"` | The HTML description of the payment link, represented as a string. |
| `"discount"` |  |
| `"discountCodeEnabled"` | A boolean indicating whether discount codes are enabled for the payment link. |
| `"discountObjectId"` | A string representing the object ID of a discount associated with the payment link. |
| `"discounts"` | An array of discount objects associated with the payment link. |
| `"domainId"` | The domain ID associated with the payment link, represented as a string. |
| `"enableDefaultCheckoutFees"` | A boolean indicating whether default checkout fees are enabled. |
| `"expirationSettings"` | An object representing the expiration settings for the payment link. |
| `"feeObjectIds"` | An array of strings representing the IDs of fee objects associated with the payment link. |
| `"fees"` | An array of fee objects associated with the payment link. |
| `"formGuid"` | The form GUID associated with the payment link, represented as a string. |
| `"id"` | The unique identifier for the payment link, represented as a string. |
| `"includeEmailInSuccessRedirect"` | A boolean indicating whether to include the email in the success redirect URL. |
| `"isOneTimeUseEnabled"` | A boolean indicating whether the payment link is enabled for one-time use. |
| `"lineItemObjectIds"` | An array of line item object IDs associated with the payment link, each represented as a string. |
| `"lineItems"` | An array of line items associated with the payment link. |
| `"paymentLinkName"` | The name of the payment link, represented as a string. |
| `"paymentLinkUrl"` | The URL of the payment link, represented as a string. |
| `"state"` | The current state of the payment link, represented as a string. |
| `"storePaymentMethodAtCheckout"` | A boolean indicating whether to store the payment method at checkout. |
| `"successUrl"` | The URL to redirect to upon successful payment, represented as a string. |
| `"taxObjectIds"` | An array of string IDs representing tax objects associated with the payment link. |
| `"taxes"` | An array of tax objects associated with the payment link. |
| `"updatedAt"` | The date and time when the payment link was last updated, in ISO 8601 format. |

Operations: Create, List, Load, Update.

API path: `/commerce/payment-links/2026-09/payment-links`

#### PaymentMethodsCommercePaymentMethodSettingsPublic

| Field | Description |
| --- | --- |
| `"activeCurrencies"` | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `"commercePaymentMethod"` | The type of payment method. |
| `"isDefaultOn"` | A boolean indicating whether this payment method is set as the default option. |
| `"paymentMethodSettings"` | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `"paymentMethodUpdates"` | An array of updates to be applied to commerce payment methods. |
| `"supportedCurrencies"` | A full list of currencies that are supported by the bundled commercePaymentMethod. |

Operations: List, Update.

API path: `/commerce/payment-methods/2027-03-beta/settings`

#### PaymentsActionResponseWithSingleResultSimplePublicObject

| Field | Description |
| --- | --- |
| `"category"` | A string indicating the category of the error. |
| `"context"` | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `"errors"` | An array of ErrorDetail objects providing further information about the error. |
| `"id"` | A string that uniquely identifies this specific error instance. |
| `"links"` | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `"message"` | A string containing a human-readable message describing the error. |
| `"status"` | A string representing the status of the error. |
| `"subCategory"` | An object providing more specific details about the error category. |

Operations: List.

API path: `/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status`

#### PaymentsCreateManualPaymentPublic

| Field | Description |
| --- | --- |
| `"associations"` | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `"billingAddress"` |  |
| `"currencyCode"` | The currency code for the payment, represented as a string. |
| `"customerEmail"` | The email address of the customer making the payment, represented as a string. |
| `"id"` | The unique identifier for the created manual payment, represented as a string. |
| `"paymentAmount"` | The amount of the payment, represented as a number. |
| `"paymentDate"` | The date of the payment, represented as a string. |
| `"paymentMethod"` | The method used for the payment, represented as a string. |

Operations: Create.

API path: `/commerce/payments/2027-03-beta/manual-payments`

#### PaymentsSettingsGetBillingSettingsPublic

| Field | Description |
| --- | --- |
| `"accountGoogleAnalyticsEnabled"` | Indicates whether Google Analytics tracking is enabled for the account. |
| `"checkoutPrefillEnabled"` | Indicates whether checkout fields should be prefilled. |
| `"collectFullBillingAddress"` | Indicates whether the full billing address should be collected. |
| `"collectPaymentMethodOnFile"` | Indicates whether a payment method should be kept on file. |
| `"defaultFromEmailAddress"` | The default email address used for sending communications. |
| `"paymentsGoogleAnalyticsEnabled"` | Indicates whether Google Analytics tracking is enabled for payments. |
| `"recaptchaEnabled"` | Indicates whether reCAPTCHA is enabled for additional security. |

Operations: Load, Update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/billing`

#### PaymentsSettingsGetCheckoutFeesPublic

| Field | Description |
| --- | --- |
| `"appliesToPaymentType"` | The type of payment to which this fee applies, represented as a string. |
| `"checkoutFees"` | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `"feeValue"` | The numerical value of the fee, indicating the amount to be charged. |
| `"feeValueType"` | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `"id"` | The unique identifier for this checkout fee configuration. |
| `"name"` | The name of the checkout fee, used for identification and display purposes. |

Operations: List, Update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees`

#### PaymentsSettingsGetPolicySettingsPublic

| Field | Description |
| --- | --- |
| `"acknowledgementRequired"` | A boolean indicating whether an acknowledgement is required for the policy. |
| `"cancellationPolicyText"` | A string containing the text of the cancellation policy. |
| `"customPolicyEnabled"` | A boolean indicating whether a custom policy is enabled. |
| `"refundPolicyText"` | A string containing the text of the refund policy. |
| `"termsOfServiceUrl"` | A string representing the URL of the terms of service. |

Operations: Load, Update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/policy`

#### PaymentsSettingsGetShippingSettingsPublic

| Field | Description |
| --- | --- |
| `"collectShippingAddressByDefault"` | A boolean indicating whether the shipping address is collected by default. |
| `"countriesShippedTo"` | An array of strings representing the list of countries to which shipping is available. |

Operations: List, Update.

API path: `/commerce/payments-settings/2027-03-beta/payments-settings/shipping`

#### PaymentsaccountsPaymentAccountView

| Field | Description |
| --- | --- |
| `"canPayout"` | A boolean indicating whether the account is capable of making payouts. |
| `"canTransact"` | A boolean indicating whether the account is capable of processing transactions. |
| `"createdAt"` | The date and time when the payment account was created, in ISO 8601 format. |
| `"eligibleProcessorTypes"` | An array of processor types that the account is eligible to use. |
| `"enrollmentState"` | The current enrollment state of the payment account. |
| `"hasTransacted"` | A boolean indicating whether the account has ever processed a transaction. |
| `"id"` | The portalId for the payment account. |
| `"lastTransactedAt"` | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `"processorType"` | The type of payment processor associated with the account. |
| `"updatedAt"` | The date and time when the payment account was last updated, in ISO 8601 format. |

Operations: List.

API path: `/commerce/payment-accounts/2026-09/status`

#### PriceBook

| Field | Description |
| --- | --- |
| `"archived"` | A boolean indicating whether this price book is archived. |
| `"archivedAt"` | The date and time when this price book was archived. |
| `"autoAssignmentEnabled"` | Indicates whether auto-assignment is enabled for the price book. |
| `"countOfIncludedProducts"` | The number of products included in this price book. |
| `"createdAt"` | The date and time when this price book was created. |
| `"customProperties"` | A map of custom property names to their values for this price book. |
| `"description"` | A description of the price book. |
| `"id"` | The unique identifier for this price book. |
| `"name"` | The name of the price book. |
| `"status"` | The current status of the price book. |
| `"supportedCurrencies"` | An array of currency codes that this price book supports. |
| `"updatedAt"` | The date and time when this price book was last updated. |

Operations: Create, List, Load, Update.

API path: `/commerce/price-books/2026-09/price-books`

#### PriceBooksBatchResponsePriceBookItem

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `"inputs"` | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `"links"` | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `"requestedAt"` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `"results"` | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `"startedAt"` | The date and time when the batch operation started, in ISO 8601 format. |
| `"status"` | The current status of the batch operation. |

Operations: Create.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create`

#### PriceBooksCollectionResponsePriceBookItemResponseForward

| Field | Description |
| --- | --- |
| `"archived"` | A boolean indicating whether the price book item is archived. |
| `"archivedAt"` | The date and time when the price book item was archived, in ISO 8601 format. |
| `"billingFrequency"` | The frequency at which billing occurs for the price book item. |
| `"billingPeriod"` | The billing period for the price book item. |
| `"costOfGoodsSold"` | The cost of goods sold for the price book item. |
| `"createdAt"` | The date and time when the price book item was created, in ISO 8601 format. |
| `"customProperties"` | A map of custom property names to their values for the price book item. |
| `"description"` | A description of the price book item. |
| `"id"` | The unique identifier for the price book item. |
| `"images"` | A string representing images associated with the price book item. |
| `"name"` | The name of the price book item. |
| `"priceBookId"` | The unique identifier for the price book containing this item. |
| `"pricing"` |  |
| `"productClassification"` | The classification of the product. |
| `"productId"` | The unique identifier for the product associated with the price book item. |
| `"productType"` | The type of product. |
| `"recurringBillingTerms"` | The terms of recurring billing for the price book item. |
| `"sku"` | The stock keeping unit (SKU) of the price book item. |
| `"status"` | The current status of the price book item. |
| `"taxCategory"` | The tax category of the price book item. |
| `"updatedAt"` | The date and time when the price book item was last updated, in ISO 8601 format. |
| `"url"` | A URL associated with the price book item. |

Operations: List.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items`

#### PriceBooksPriceBook

| Field | Description |
| --- | --- |
| `"archived"` | A boolean indicating whether this price book is archived. |
| `"archivedAt"` | The date and time when this price book was archived. |
| `"autoAssignmentEnabled"` | Indicates whether auto-assignment is enabled for the price book. |
| `"countOfIncludedProducts"` | The number of products included in this price book. |
| `"createdAt"` | The date and time when this price book was created. |
| `"customProperties"` | A map of custom property names to their values for this price book. |
| `"description"` | A description of the price book. |
| `"id"` | The unique identifier for this price book. |
| `"name"` | The name of the price book. |
| `"status"` | The current status of the price book. |
| `"supportedCurrencies"` | An array of currency codes that this price book supports. |
| `"updatedAt"` | The date and time when this price book was last updated. |

Operations: Create.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/activate`

#### PriceBooksPriceBookItem

| Field | Description |
| --- | --- |
| `"archived"` | A boolean indicating whether the price book item is archived. |
| `"archivedAt"` | The date and time when the price book item was archived, in ISO 8601 format. |
| `"billingFrequency"` | The frequency at which billing occurs for the price book item. |
| `"billingPeriod"` | The billing period for the price book item. |
| `"costOfGoodsSold"` | The cost of goods sold for the price book item. |
| `"createdAt"` | The date and time when the price book item was created, in ISO 8601 format. |
| `"customProperties"` | A map of custom property names to their values for the price book item. |
| `"description"` | A description of the price book item. |
| `"id"` | The unique identifier for the price book item. |
| `"images"` | A string representing images associated with the price book item. |
| `"name"` | The name of the price book item. |
| `"priceBookId"` | The unique identifier for the price book containing this item. |
| `"pricing"` |  |
| `"productClassification"` | The classification of the product. |
| `"productId"` | The unique identifier for the product associated with the price book item. |
| `"productType"` | The type of product. |
| `"recurringBillingTerms"` | The terms of recurring billing for the price book item. |
| `"sku"` | The stock keeping unit (SKU) of the price book item. |
| `"status"` | The current status of the price book item. |
| `"taxCategory"` | The tax category of the price book item. |
| `"updatedAt"` | The date and time when the price book item was last updated, in ISO 8601 format. |
| `"url"` | A URL associated with the price book item. |

Operations: Create, Load, Update.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/items`

#### PriceBooksPriceBookValidate

| Field | Description |
| --- | --- |
| `"errors"` | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `"isValid"` | A boolean indicating whether the price book is valid. |

Operations: Create.

API path: `/commerce/price-books/2026-09/price-books/{priceBookId}/validate`



## Entities


### Advanced

Create an instance: `advanced := client.Advanced(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Advanced(nil).Create(map[string]any{
    "payment_crm_object_id": "example_payment_crm_object_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Basic

Create an instance: `basic := client.Basic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Batch

Create an instance: `batch := client.Batch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Batch(nil).Create(map[string]any{
    "price_book_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Contract

Create an instance: `contract := client.Contract(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addressTypesToCollect` | `[]any` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float64` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `[]any` | An array of allowed payment methods. |
| `annualContractValue` | `float64` | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `map[string]any` | An object representing the billing address for the contract. |
| `billingCompanyId` | `string` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float64` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | The process for collecting payments. |
| `contractEffectiveDate` | `string` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | The unique identifier of the source of the contract. |
| `createdAt` | `string` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float64` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float64` | The current monthly recurring revenue for the contract. |
| `customProperties` | `map[string]any` | A map of custom property names to their values. |
| `dealId` | `string` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float64` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | The discount code applied to the contract. |
| `endDate` | `string` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | The unique identifier for the contract. |
| `language` | `string` | The language associated with the contract. |
| `lineItems` | `[]any` | An array of line items included in the contract. |
| `locale` | `string` | The locale associated with the contract. |
| `name` | `string` | The name of the contract. |
| `netPaymentTerms` | `int` | The net payment terms for the contract, represented as an integer. |
| `ownerId` | `map[string]any` | An object representing the ID of the contract owner. |
| `paymentEnabled` | `bool` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | The payment method used for the contract. |
| `poNumber` | `string` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float64` | The value of the contract before termination. |
| `renewalContractId` | `string` | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `map[string]any` | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | `map[string]any` | An object representing the domain of the seller's company. |
| `sellerCompanyName` | `string` | The name of the seller's company. |
| `sellerEmail` | `string` | The email address of the seller. |
| `sellerFirstName` | `string` | The first name of the seller. |
| `sellerLastName` | `string` | The last name of the seller. |
| `sellerPhone` | `map[string]any` | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | `string` | The phone number of the seller. |
| `startDate` | `string` | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float64` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float64` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float64` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float64` | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float64` | The total value of the contract. |
| `totalPaidAmount` | `float64` | The total amount paid under the contract. |
| `updatedAt` | `string` | The date and time when the contract was last updated, in ISO 8601 format. |

#### Example: Load

```go
contract, err := client.Contract(nil).Load(map[string]any{"id": "contract_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contract) // the loaded record
```

#### Example: Create

```go
result, err := client.Contract(nil).Create(map[string]any{
    "addressTypesToCollect": []any{},
    "allowedPaymentMethods": []any{},
    "automatedTaxesEnabled": true,
    "customProperties": map[string]any{},
    "hubspotBillingEnabled": true,
    "id": "example_id",
    "lineItems": []any{},
    "ownerId": map[string]any{},
    "paymentEnabled": true,
    "sellerCompanyDomain": map[string]any{},
    "sellerPhone": map[string]any{},
    "status": "example_status",
    "storePaymentMethodAtCheckout": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ContractsContract

Create an instance: `contractsContract := client.ContractsContract(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addressTypesToCollect` | `[]any` | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float64` | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `[]any` | An array of allowed payment methods. |
| `annualContractValue` | `float64` | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `map[string]any` |  |
| `billingCompanyId` | `string` | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float64` | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | The process for collecting payments. |
| `contractEffectiveDate` | `string` | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | The unique identifier of the source of the contract. |
| `createdAt` | `string` | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float64` | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float64` | The current monthly recurring revenue for the contract. |
| `customProperties` | `map[string]any` | A map of custom property names to their values. |
| `dealId` | `string` | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float64` | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | The discount code applied to the contract. |
| `endDate` | `string` | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | The unique identifier for the contract. |
| `language` | `string` | The language associated with the contract. |
| `lineItems` | `[]any` | An array of line items included in the contract. |
| `locale` | `string` | The locale associated with the contract. |
| `name` | `string` | The name of the contract. |
| `netPaymentTerms` | `int` | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | `bool` | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | The payment method used for the contract. |
| `poNumber` | `string` | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float64` | The value of the contract before termination. |
| `renewalContractId` | `string` | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `map[string]any` |  |
| `sellerCompanyName` | `string` | The name of the seller's company. |
| `sellerEmail` | `string` | The email address of the seller. |
| `sellerFirstName` | `string` | The first name of the seller. |
| `sellerLastName` | `string` | The last name of the seller. |
| `sellerPhoneNumber` | `string` | The phone number of the seller. |
| `startDate` | `string` | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float64` | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float64` | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float64` | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float64` | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float64` | The total value of the contract. |
| `totalPaidAmount` | `float64` | The total amount paid under the contract. |
| `updatedAt` | `string` | The date and time when the contract was last updated, in ISO 8601 format. |

#### Example: Create

```go
result, err := client.ContractsContract(nil).Create(map[string]any{
    "contract_id": "example_contract_id",
    "addressTypesToCollect": []any{},
    "allowedPaymentMethods": []any{},
    "automatedTaxesEnabled": true,
    "customProperties": map[string]any{},
    "hubspotBillingEnabled": true,
    "id": "example_id",
    "lineItems": []any{},
    "paymentEnabled": true,
    "status": "example_status",
    "storePaymentMethodAtCheckout": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ContractsContractChange

Create an instance: `contractsContractChange := client.ContractsContractChange(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contractId` | `string` | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | `[]any` | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | `string` | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | `string` | The unique identifier for the contract change. |
| `lineItemChanges` | `[]any` | An array of changes to line items associated with the contract change. |
| `name` | `string` | The name of the contract change. |
| `proposedLineItems` | `[]any` | An array of line items that are proposed as part of the contract change. |
| `prorating` | `bool` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | The unique identifier of the quote associated with this contract change. |
| `status` | `string` | The current status of the contract change. |
| `type` | `string` | The type of contract change. |
| `updatedAt` | `string` | The date and time when the contract change was last updated, in ISO 8601 format. |

#### Example: Load

```go
contractsContractChange, err := client.ContractsContractChange(nil).Load(map[string]any{"id": "contracts_contract_change_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contractsContractChange) // the loaded record
```

#### Example: Create

```go
result, err := client.ContractsContractChange(nil).Create(map[string]any{
    "contractId": "example_contractId",
    "deltaLineItems": []any{},
    "id": "example_id",
    "lineItemChanges": []any{},
    "proposedLineItems": []any{},
    "prorating": true,
    "status": "example_status",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ContractsContractChangePreview

Create an instance: `contractsContractChangePreview := client.ContractsContractChangePreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deltaLineItems` | `[]any` | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | `[]any` | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

#### Example: Create

```go
result, err := client.ContractsContractChangePreview(nil).Create(map[string]any{
    "deltaLineItems": []any{},
    "proposedLineItems": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ContractsContractChangeSummary

Create an instance: `contractsContractChangeSummary := client.ContractsContractChangeSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contractId` | `string` | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | The date and time when this contract change was created, in ISO 8601 format. |
| `effectiveDate` | `string` | The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'. |
| `id` | `string` | The unique identifier for this contract change. |
| `lineItemChanges` | `[]any` | An array of changes made to line items as part of this contract change. |
| `name` | `string` | The name assigned to this contract change. |
| `prorating` | `bool` | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | The unique identifier of the quote associated with this contract change, if applicable. |
| `status` | `string` | The current status of the contract change. |
| `type` | `string` | The type of contract change, which can be either 'DIRECT' or 'QUOTE'. |
| `updatedAt` | `string` | The date and time when this contract change was last updated, in ISO 8601 format. |

#### Example: List

```go
contractsContractChangeSummarys, err := client.ContractsContractChangeSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contractsContractChangeSummarys) // the array of records
```


### ContractsQuote

Create an instance: `contractsQuote := client.ContractsQuote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dealId` | `string` | The unique identifier of the deal associated with the renewal quote. |
| `dealPipeline` | `string` | The identifier of the pipeline in which the deal is located. |
| `dealStage` | `string` | The identifier of the stage within the pipeline that the deal is currently in. |
| `name` | `string` | The name of the renewal quote. |
| `quoteTemplateId` | `string` | The unique identifier of the quote template to be used for creating the renewal quote. |

#### Example: Create

```go
result, err := client.ContractsQuote(nil).Create(map[string]any{
    "contract_id": "example_contract_id",
    "quoteTemplateId": "example_quoteTemplateId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Item

Create an instance: `item := client.Item(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### PaymentLink

Create an instance: `paymentLink := client.PaymentLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptedPaymentMethods` | `[]any` | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | `[]any` | An array of additional form fields included in the payment link. |
| `archived` | `bool` | A boolean indicating whether the payment link is archived. |
| `archivedAt` | `string` | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | `bool` | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | `string` | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | `[]any` | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | `bool` | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | `bool` | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | `int` | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | `bool` | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | `string` | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | `string` | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | `map[string]any` | An object containing deal configuration settings. |
| `descriptionHtml` | `string` | The HTML description of the payment link, represented as a string. |
| `discount` | `map[string]any` |  |
| `discountCodeEnabled` | `bool` | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | `string` | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | `[]any` | An array of discount objects associated with the payment link. |
| `domainId` | `string` | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | `bool` | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | `map[string]any` | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | `[]any` | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | `[]any` | An array of fee objects associated with the payment link. |
| `formGuid` | `string` | The form GUID associated with the payment link, represented as a string. |
| `id` | `string` | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | `bool` | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | `bool` | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | `[]any` | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | `[]any` | An array of line items associated with the payment link. |
| `paymentLinkName` | `string` | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | `string` | The URL of the payment link, represented as a string. |
| `state` | `string` | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | `bool` | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | `string` | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | `[]any` | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | `[]any` | An array of tax objects associated with the payment link. |
| `updatedAt` | `string` | The date and time when the payment link was last updated, in ISO 8601 format. |

#### Example: Load

```go
paymentLink, err := client.PaymentLink(nil).Load(map[string]any{"id": "payment_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentLink) // the loaded record
```

#### Example: List

```go
paymentLinks, err := client.PaymentLink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentLinks) // the array of records
```

#### Example: Create

```go
result, err := client.PaymentLink(nil).Create(map[string]any{
    "acceptedPaymentMethods": []any{},
    "additionalFormFields": []any{},
    "archived": true,
    "automatedSalesTaxEnabled": true,
    "checkoutFeeIds": []any{},
    "collectFullBillingAddress": true,
    "collectShippingAddress": true,
    "completedPurchaseCount": 1,
    "createContractOnPurchase": true,
    "currencyCode": "example_currencyCode",
    "dealConfigurations": map[string]any{},
    "discount": map[string]any{},
    "discountCodeEnabled": true,
    "discounts": []any{},
    "enableDefaultCheckoutFees": true,
    "feeObjectIds": []any{},
    "fees": []any{},
    "formGuid": "example_formGuid",
    "id": "example_id",
    "includeEmailInSuccessRedirect": true,
    "isOneTimeUseEnabled": true,
    "lineItemObjectIds": []any{},
    "lineItems": []any{},
    "paymentLinkName": "example_paymentLinkName",
    "paymentLinkUrl": "example_paymentLinkUrl",
    "state": "example_state",
    "storePaymentMethodAtCheckout": true,
    "taxObjectIds": []any{},
    "taxes": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentMethodsCommercePaymentMethodSettingsPublic

Create an instance: `paymentMethodsCommercePaymentMethodSettingsPublic := client.PaymentMethodsCommercePaymentMethodSettingsPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeCurrencies` | `[]any` | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | `string` | The type of payment method. |
| `isDefaultOn` | `bool` | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | `[]any` | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | `[]any` | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | `[]any` | A full list of currencies that are supported by the bundled commercePaymentMethod. |

#### Example: List

```go
paymentMethodsCommercePaymentMethodSettingsPublics, err := client.PaymentMethodsCommercePaymentMethodSettingsPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentMethodsCommercePaymentMethodSettingsPublics) // the array of records
```


### PaymentsActionResponseWithSingleResultSimplePublicObject

Create an instance: `paymentsActionResponseWithSingleResultSimplePublicObject := client.PaymentsActionResponseWithSingleResultSimplePublicObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | A string indicating the category of the error. |
| `context` | `map[string]any` | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | `[]any` | An array of ErrorDetail objects providing further information about the error. |
| `id` | `string` | A string that uniquely identifies this specific error instance. |
| `links` | `map[string]any` | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | `string` | A string containing a human-readable message describing the error. |
| `status` | `string` | A string representing the status of the error. |
| `subCategory` | `map[string]any` | An object providing more specific details about the error category. |

#### Example: List

```go
paymentsActionResponseWithSingleResultSimplePublicObjects, err := client.PaymentsActionResponseWithSingleResultSimplePublicObject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentsActionResponseWithSingleResultSimplePublicObjects) // the array of records
```


### PaymentsCreateManualPaymentPublic

Create an instance: `paymentsCreateManualPaymentPublic := client.PaymentsCreateManualPaymentPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associations` | `[]any` | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` | `map[string]any` |  |
| `currencyCode` | `string` | The currency code for the payment, represented as a string. |
| `customerEmail` | `string` | The email address of the customer making the payment, represented as a string. |
| `id` | `string` | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | `float64` | The amount of the payment, represented as a number. |
| `paymentDate` | `string` | The date of the payment, represented as a string. |
| `paymentMethod` | `string` | The method used for the payment, represented as a string. |

#### Example: Create

```go
result, err := client.PaymentsCreateManualPaymentPublic(nil).Create(map[string]any{
    "associations": []any{},
    "currencyCode": "example_currencyCode",
    "id": "example_id",
    "paymentAmount": 1,
    "paymentDate": "example_paymentDate",
    "paymentMethod": "example_paymentMethod",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentsSettingsGetBillingSettingsPublic

Create an instance: `paymentsSettingsGetBillingSettingsPublic := client.PaymentsSettingsGetBillingSettingsPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
paymentsSettingsGetBillingSettingsPublic, err := client.PaymentsSettingsGetBillingSettingsPublic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentsSettingsGetBillingSettingsPublic) // the loaded record
```


### PaymentsSettingsGetCheckoutFeesPublic

Create an instance: `paymentsSettingsGetCheckoutFeesPublic := client.PaymentsSettingsGetCheckoutFeesPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appliesToPaymentType` | `string` | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | `[]any` | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | `float64` | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | `string` | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | `string` | The unique identifier for this checkout fee configuration. |
| `name` | `string` | The name of the checkout fee, used for identification and display purposes. |

#### Example: List

```go
paymentsSettingsGetCheckoutFeesPublics, err := client.PaymentsSettingsGetCheckoutFeesPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentsSettingsGetCheckoutFeesPublics) // the array of records
```


### PaymentsSettingsGetPolicySettingsPublic

Create an instance: `paymentsSettingsGetPolicySettingsPublic := client.PaymentsSettingsGetPolicySettingsPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acknowledgementRequired` | `bool` | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | `string` | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | `bool` | A boolean indicating whether a custom policy is enabled. |
| `refundPolicyText` | `string` | A string containing the text of the refund policy. |
| `termsOfServiceUrl` | `string` | A string representing the URL of the terms of service. |

#### Example: Load

```go
paymentsSettingsGetPolicySettingsPublic, err := client.PaymentsSettingsGetPolicySettingsPublic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentsSettingsGetPolicySettingsPublic) // the loaded record
```


### PaymentsSettingsGetShippingSettingsPublic

Create an instance: `paymentsSettingsGetShippingSettingsPublic := client.PaymentsSettingsGetShippingSettingsPublic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `collectShippingAddressByDefault` | `bool` | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | `[]any` | An array of strings representing the list of countries to which shipping is available. |

#### Example: List

```go
paymentsSettingsGetShippingSettingsPublics, err := client.PaymentsSettingsGetShippingSettingsPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentsSettingsGetShippingSettingsPublics) // the array of records
```


### PaymentsaccountsPaymentAccountView

Create an instance: `paymentsaccountsPaymentAccountView := client.PaymentsaccountsPaymentAccountView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `canPayout` | `bool` | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | `bool` | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | `string` | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | `[]any` | An array of processor types that the account is eligible to use. |
| `enrollmentState` | `string` | The current enrollment state of the payment account. |
| `hasTransacted` | `bool` | A boolean indicating whether the account has ever processed a transaction. |
| `id` | `string` | The portalId for the payment account. |
| `lastTransactedAt` | `string` | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | `string` | The type of payment processor associated with the account. |
| `updatedAt` | `string` | The date and time when the payment account was last updated, in ISO 8601 format. |

#### Example: List

```go
paymentsaccountsPaymentAccountViews, err := client.PaymentsaccountsPaymentAccountView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentsaccountsPaymentAccountViews) // the array of records
```


### PriceBook

Create an instance: `priceBook := client.PriceBook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | The number of products included in this price book. |
| `createdAt` | `string` | The date and time when this price book was created. |
| `customProperties` | `map[string]any` | A map of custom property names to their values for this price book. |
| `description` | `string` | A description of the price book. |
| `id` | `string` | The unique identifier for this price book. |
| `name` | `string` | The name of the price book. |
| `status` | `string` | The current status of the price book. |
| `supportedCurrencies` | `[]any` | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | The date and time when this price book was last updated. |

#### Example: Load

```go
priceBook, err := client.PriceBook(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(priceBook) // the loaded record
```

#### Example: List

```go
priceBooks, err := client.PriceBook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(priceBooks) // the array of records
```

#### Example: Create

```go
result, err := client.PriceBook(nil).Create(map[string]any{
    "autoAssignmentEnabled": true,
    "countOfIncludedProducts": 1,
    "customProperties": map[string]any{},
    "id": "example_id",
    "status": "example_status",
    "supportedCurrencies": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PriceBooksBatchResponsePriceBookItem

Create an instance: `priceBooksBatchResponsePriceBookItem := client.PriceBooksBatchResponsePriceBookItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | `map[string]any` | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```go
result, err := client.PriceBooksBatchResponsePriceBookItem(nil).Create(map[string]any{
    "price_book_id": 1,
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PriceBooksCollectionResponsePriceBookItemResponseForward

Create an instance: `priceBooksCollectionResponsePriceBookItemResponseForward := client.PriceBooksCollectionResponsePriceBookItemResponseForward(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | The cost of goods sold for the price book item. |
| `createdAt` | `string` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `map[string]any` | A map of custom property names to their values for the price book item. |
| `description` | `string` | A description of the price book item. |
| `id` | `string` | The unique identifier for the price book item. |
| `images` | `string` | A string representing images associated with the price book item. |
| `name` | `string` | The name of the price book item. |
| `priceBookId` | `string` | The unique identifier for the price book containing this item. |
| `pricing` | `map[string]any` |  |
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

```go
priceBooksCollectionResponsePriceBookItemResponseForwards, err := client.PriceBooksCollectionResponsePriceBookItemResponseForward(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(priceBooksCollectionResponsePriceBookItemResponseForwards) // the array of records
```


### PriceBooksPriceBook

Create an instance: `priceBooksPriceBook := client.PriceBooksPriceBook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | The number of products included in this price book. |
| `createdAt` | `string` | The date and time when this price book was created. |
| `customProperties` | `map[string]any` | A map of custom property names to their values for this price book. |
| `description` | `string` | A description of the price book. |
| `id` | `string` | The unique identifier for this price book. |
| `name` | `string` | The name of the price book. |
| `status` | `string` | The current status of the price book. |
| `supportedCurrencies` | `[]any` | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | The date and time when this price book was last updated. |

#### Example: Create

```go
result, err := client.PriceBooksPriceBook(nil).Create(map[string]any{
    "price_book_id": 1,
    "autoAssignmentEnabled": true,
    "countOfIncludedProducts": 1,
    "customProperties": map[string]any{},
    "id": "example_id",
    "status": "example_status",
    "supportedCurrencies": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PriceBooksPriceBookItem

Create an instance: `priceBooksPriceBookItem := client.PriceBooksPriceBookItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `string` | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `string` | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `string` | The billing period for the price book item. |
| `costOfGoodsSold` | `string` | The cost of goods sold for the price book item. |
| `createdAt` | `string` | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `map[string]any` | A map of custom property names to their values for the price book item. |
| `description` | `string` | A description of the price book item. |
| `id` | `string` | The unique identifier for the price book item. |
| `images` | `string` | A string representing images associated with the price book item. |
| `name` | `string` | The name of the price book item. |
| `priceBookId` | `string` | The unique identifier for the price book containing this item. |
| `pricing` | `map[string]any` |  |
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

```go
priceBooksPriceBookItem, err := client.PriceBooksPriceBookItem(nil).Load(map[string]any{"id": 1, "price_book_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(priceBooksPriceBookItem) // the loaded record
```

#### Example: Create

```go
result, err := client.PriceBooksPriceBookItem(nil).Create(map[string]any{
    "price_book_id": 1,
    "customProperties": map[string]any{},
    "id": "example_id",
    "pricing": map[string]any{},
    "productId": "example_productId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PriceBooksPriceBookValidate

Create an instance: `priceBooksPriceBookValidate := client.PriceBooksPriceBookValidate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | `bool` | A boolean indicating whether the price book is valid. |

#### Example: Create

```go
result, err := client.PriceBooksPriceBookValidate(nil).Create(map[string]any{
    "price_book_id": 1,
    "errors": []any{},
    "isValid": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/hubspot-commerce-sdk/go/
├── hubspot-commerce.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/hubspot-commerce-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
paymentsaccountspaymentaccountview := client.PaymentsaccountsPaymentAccountView(nil)
paymentsaccountspaymentaccountview.List(nil, nil)

// paymentsaccountspaymentaccountview.Data() now returns the paymentsaccountspaymentaccountview data from the last list
// paymentsaccountspaymentaccountview.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
