# HubspotCommerce Golang SDK Reference

Complete API reference for the HubspotCommerce Golang SDK.


## HubspotCommerceSDK

### Constructor

```go
func NewHubspotCommerceSDK(options map[string]any) *HubspotCommerceSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *HubspotCommerceSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *HubspotCommerceSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Advanced(data map[string]any) HubspotCommerceEntity`

Create a new `Advanced` entity instance. Pass `nil` for no initial data.

#### `Basic(data map[string]any) HubspotCommerceEntity`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `Batch(data map[string]any) HubspotCommerceEntity`

Create a new `Batch` entity instance. Pass `nil` for no initial data.

#### `Contract(data map[string]any) HubspotCommerceEntity`

Create a new `Contract` entity instance. Pass `nil` for no initial data.

#### `ContractsContract(data map[string]any) HubspotCommerceEntity`

Create a new `ContractsContract` entity instance. Pass `nil` for no initial data.

#### `ContractsContractChange(data map[string]any) HubspotCommerceEntity`

Create a new `ContractsContractChange` entity instance. Pass `nil` for no initial data.

#### `ContractsContractChangePreview(data map[string]any) HubspotCommerceEntity`

Create a new `ContractsContractChangePreview` entity instance. Pass `nil` for no initial data.

#### `ContractsQuote(data map[string]any) HubspotCommerceEntity`

Create a new `ContractsQuote` entity instance. Pass `nil` for no initial data.

#### `Item(data map[string]any) HubspotCommerceEntity`

Create a new `Item` entity instance. Pass `nil` for no initial data.

#### `PaymentLink(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentLink` entity instance. Pass `nil` for no initial data.

#### `PaymentMethodsCommercePaymentMethodSettingsPublic(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentMethodsCommercePaymentMethodSettingsPublic` entity instance. Pass `nil` for no initial data.

#### `PaymentsActionResponseWithSingleResultSimplePublicObject(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentsActionResponseWithSingleResultSimplePublicObject` entity instance. Pass `nil` for no initial data.

#### `PaymentsCreateManualPaymentPublic(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentsCreateManualPaymentPublic` entity instance. Pass `nil` for no initial data.

#### `PaymentsSettingsGetBillingSettingsPublic(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentsSettingsGetBillingSettingsPublic` entity instance. Pass `nil` for no initial data.

#### `PaymentsSettingsGetCheckoutFeesPublic(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentsSettingsGetCheckoutFeesPublic` entity instance. Pass `nil` for no initial data.

#### `PaymentsSettingsGetPolicySettingsPublic(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentsSettingsGetPolicySettingsPublic` entity instance. Pass `nil` for no initial data.

#### `PaymentsSettingsGetShippingSettingsPublic(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentsSettingsGetShippingSettingsPublic` entity instance. Pass `nil` for no initial data.

#### `PaymentsaccountsPaymentAccountView(data map[string]any) HubspotCommerceEntity`

Create a new `PaymentsaccountsPaymentAccountView` entity instance. Pass `nil` for no initial data.

#### `PriceBook(data map[string]any) HubspotCommerceEntity`

Create a new `PriceBook` entity instance. Pass `nil` for no initial data.

#### `PriceBooksBatchResponsePriceBookItem(data map[string]any) HubspotCommerceEntity`

Create a new `PriceBooksBatchResponsePriceBookItem` entity instance. Pass `nil` for no initial data.

#### `PriceBooksCollectionResponsePriceBookItemResponseForward(data map[string]any) HubspotCommerceEntity`

Create a new `PriceBooksCollectionResponsePriceBookItemResponseForward` entity instance. Pass `nil` for no initial data.

#### `PriceBooksPriceBook(data map[string]any) HubspotCommerceEntity`

Create a new `PriceBooksPriceBook` entity instance. Pass `nil` for no initial data.

#### `PriceBooksPriceBookItem(data map[string]any) HubspotCommerceEntity`

Create a new `PriceBooksPriceBookItem` entity instance. Pass `nil` for no initial data.

#### `PriceBooksPriceBookValidate(data map[string]any) HubspotCommerceEntity`

Create a new `PriceBooksPriceBookValidate` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AdvancedEntity

```go
advanced := client.Advanced(nil)
fmt.Println(advanced.GetName()) // "advanced"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Advanced(nil).Create(map[string]any{
    "payment_crm_object_id": "example_payment_crm_object_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdvancedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BasicEntity

```go
basic := client.Basic(nil)
fmt.Println(basic.GetName()) // "basic"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Basic(nil).Remove(map[string]any{"payment_link_id": "payment_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BatchEntity

```go
batch := client.Batch(nil)
fmt.Println(batch.GetName()) // "batch"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Batch(nil).Create(map[string]any{
    "price_book_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BatchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContractEntity

```go
contract := client.Contract(nil)
fmt.Println(contract.GetName()) // "contract"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressTypesToCollect` | `[]any` | Yes | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | No | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float64` | No | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `[]any` | Yes | An array of allowed payment methods. |
| `annualContractValue` | `float64` | No | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Yes | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `map[string]any` | No | An object representing the billing address for the contract. |
| `billingCompanyId` | `string` | No | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | No | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | No | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | No | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | No | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float64` | No | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | No | The process for collecting payments. |
| `contractEffectiveDate` | `string` | No | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | No | The unique identifier of the source of the contract. |
| `createdAt` | `string` | No | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | No | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float64` | No | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float64` | No | The current monthly recurring revenue for the contract. |
| `customProperties` | `map[string]any` | Yes | A map of custom property names to their values. |
| `dealId` | `string` | No | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | No | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float64` | No | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | No | The discount code applied to the contract. |
| `endDate` | `string` | No | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | No | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Yes | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | Yes | The unique identifier for the contract. |
| `language` | `string` | No | The language associated with the contract. |
| `lineItems` | `[]any` | Yes | An array of line items included in the contract. |
| `locale` | `string` | No | The locale associated with the contract. |
| `name` | `string` | No | The name of the contract. |
| `netPaymentTerms` | `int` | No | The net payment terms for the contract, represented as an integer. |
| `ownerId` | `map[string]any` | Yes | An object representing the ID of the contract owner. |
| `paymentEnabled` | `bool` | Yes | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | No | The payment method used for the contract. |
| `poNumber` | `string` | No | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float64` | No | The value of the contract before termination. |
| `renewalContractId` | `string` | No | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | No | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `map[string]any` | No | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | `map[string]any` | Yes | An object representing the domain of the seller's company. |
| `sellerCompanyName` | `string` | No | The name of the seller's company. |
| `sellerEmail` | `string` | No | The email address of the seller. |
| `sellerFirstName` | `string` | No | The first name of the seller. |
| `sellerLastName` | `string` | No | The last name of the seller. |
| `sellerPhone` | `map[string]any` | Yes | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | `string` | No | The phone number of the seller. |
| `startDate` | `string` | No | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | No | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float64` | No | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float64` | No | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float64` | No | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float64` | No | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float64` | No | The total value of the contract. |
| `totalPaidAmount` | `float64` | No | The total amount paid under the contract. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Contract(nil).Load(map[string]any{"id": "contract_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Contract(nil).Update(map[string]any{
    "id": "contract_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContractEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContractsContractEntity

```go
contractsContract := client.ContractsContract(nil)
fmt.Println(contractsContract.GetName()) // "contracts_contract"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressTypesToCollect` | `[]any` | Yes | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `string` | No | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float64` | No | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `[]any` | Yes | An array of allowed payment methods. |
| `annualContractValue` | `float64` | No | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Yes | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `map[string]any` | No |  |
| `billingCompanyId` | `string` | No | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `string` | No | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `string` | No | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `string` | No | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `string` | No | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float64` | No | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `string` | No | The process for collecting payments. |
| `contractEffectiveDate` | `string` | No | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `string` | No | The unique identifier of the source of the contract. |
| `createdAt` | `string` | No | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `string` | No | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float64` | No | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float64` | No | The current monthly recurring revenue for the contract. |
| `customProperties` | `map[string]any` | Yes | A map of custom property names to their values. |
| `dealId` | `string` | No | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `string` | No | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float64` | No | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `string` | No | The discount code applied to the contract. |
| `endDate` | `string` | No | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `string` | No | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Yes | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `string` | Yes | The unique identifier for the contract. |
| `language` | `string` | No | The language associated with the contract. |
| `lineItems` | `[]any` | Yes | An array of line items included in the contract. |
| `locale` | `string` | No | The locale associated with the contract. |
| `name` | `string` | No | The name of the contract. |
| `netPaymentTerms` | `int` | No | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | `bool` | Yes | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `string` | No | The payment method used for the contract. |
| `poNumber` | `string` | No | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float64` | No | The value of the contract before termination. |
| `renewalContractId` | `string` | No | The unique identifier of the renewal contract. |
| `renewalDate` | `string` | No | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `map[string]any` | No |  |
| `sellerCompanyName` | `string` | No | The name of the seller's company. |
| `sellerEmail` | `string` | No | The email address of the seller. |
| `sellerFirstName` | `string` | No | The first name of the seller. |
| `sellerLastName` | `string` | No | The last name of the seller. |
| `sellerPhoneNumber` | `string` | No | The phone number of the seller. |
| `startDate` | `string` | No | The start date of the contract, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `string` | No | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float64` | No | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float64` | No | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float64` | No | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float64` | No | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float64` | No | The total value of the contract. |
| `totalPaidAmount` | `float64` | No | The total amount paid under the contract. |
| `updatedAt` | `string` | No | The date and time when the contract was last updated, in ISO 8601 format. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContractsContractEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContractsContractChangeEntity

```go
contractsContractChange := client.ContractsContractChange(nil)
fmt.Println(contractsContractChange.GetName()) // "contracts_contract_change"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contractId` | `string` | Yes | The unique identifier of the contract associated with this change. |
| `createdAt` | `string` | No | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | `[]any` | Yes | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | `string` | No | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | `string` | Yes | The unique identifier for the contract change. |
| `lineItemChanges` | `[]any` | Yes | An array of changes to line items associated with the contract change. |
| `name` | `string` | No | The name of the contract change. |
| `proposedLineItems` | `[]any` | Yes | An array of line items that are proposed as part of the contract change. |
| `prorating` | `bool` | Yes | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `string` | No | The unique identifier of the quote associated with this contract change. |
| `status` | `string` | Yes | The current status of the contract change. |
| `type` | `string` | Yes | The type of contract change. |
| `updatedAt` | `string` | No | The date and time when the contract change was last updated, in ISO 8601 format. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `contractId` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `deltaLineItems` | - | - | - | - |
| `effectiveDate` | - | - | - | - |
| `id` | - | - | - | - |
| `lineItemChanges` | - | - | - | Yes |
| `name` | - | - | - | Yes |
| `proposedLineItems` | - | - | - | - |
| `prorating` | - | - | - | Yes |
| `quoteId` | - | - | - | - |
| `status` | - | - | - | - |
| `type` | - | - | - | - |
| `updatedAt` | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContractsContractChange(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ContractsContractChange(nil).Load(map[string]any{"id": "contracts_contract_change_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ContractsContractChange(nil).Update(map[string]any{
    "id": "contracts_contract_change_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContractsContractChangeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContractsContractChangePreviewEntity

```go
contractsContractChangePreview := client.ContractsContractChangePreview(nil)
fmt.Println(contractsContractChangePreview.GetName()) // "contracts_contract_change_preview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaLineItems` | `[]any` | Yes | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | `[]any` | Yes | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContractsContractChangePreviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContractsQuoteEntity

```go
contractsQuote := client.ContractsQuote(nil)
fmt.Println(contractsQuote.GetName()) // "contracts_quote"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContractsQuoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ItemEntity

```go
item := client.Item(nil)
fmt.Println(item.GetName()) // "item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Item(nil).Remove(map[string]any{"id": 1, "price_book_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentLinkEntity

```go
paymentLink := client.PaymentLink(nil)
fmt.Println(paymentLink.GetName()) // "payment_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedPaymentMethods` | `[]any` | Yes | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | `[]any` | Yes | An array of additional form fields included in the payment link. |
| `archived` | `bool` | Yes | A boolean indicating whether the payment link is archived. |
| `archivedAt` | `string` | No | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | `bool` | Yes | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | `string` | No | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | `[]any` | Yes | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | `bool` | Yes | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | `bool` | Yes | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | `int` | Yes | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | `bool` | Yes | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | `string` | No | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | `string` | Yes | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | `map[string]any` | Yes | An object containing deal configuration settings. |
| `descriptionHtml` | `string` | No | The HTML description of the payment link, represented as a string. |
| `discount` | `map[string]any` | Yes |  |
| `discountCodeEnabled` | `bool` | Yes | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | `string` | No | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | `[]any` | Yes | An array of discount objects associated with the payment link. |
| `domainId` | `string` | No | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | `bool` | Yes | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | `map[string]any` | No | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | `[]any` | Yes | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | `[]any` | Yes | An array of fee objects associated with the payment link. |
| `formGuid` | `string` | Yes | The form GUID associated with the payment link, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | `bool` | Yes | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | `bool` | Yes | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | `[]any` | Yes | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | `[]any` | Yes | An array of line items associated with the payment link. |
| `paymentLinkName` | `string` | Yes | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | `string` | Yes | The URL of the payment link, represented as a string. |
| `state` | `string` | Yes | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | `string` | No | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | `[]any` | Yes | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | `[]any` | Yes | An array of tax objects associated with the payment link. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentLink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentLink(nil).Load(map[string]any{"id": "payment_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PaymentLink(nil).Update(map[string]any{
    "id": "payment_link_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentMethodsCommercePaymentMethodSettingsPublicEntity

```go
paymentMethodsCommercePaymentMethodSettingsPublic := client.PaymentMethodsCommercePaymentMethodSettingsPublic(nil)
fmt.Println(paymentMethodsCommercePaymentMethodSettingsPublic.GetName()) // "payment_methods_commerce_payment_method_settings_public"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCurrencies` | `[]any` | Yes | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | `string` | Yes | The type of payment method. |
| `isDefaultOn` | `bool` | Yes | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | `[]any` | Yes | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | `[]any` | Yes | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | `[]any` | Yes | A full list of currencies that are supported by the bundled commercePaymentMethod. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentMethodsCommercePaymentMethodSettingsPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PaymentMethodsCommercePaymentMethodSettingsPublic(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentMethodsCommercePaymentMethodSettingsPublicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentsActionResponseWithSingleResultSimplePublicObjectEntity

```go
paymentsActionResponseWithSingleResultSimplePublicObject := client.PaymentsActionResponseWithSingleResultSimplePublicObject(nil)
fmt.Println(paymentsActionResponseWithSingleResultSimplePublicObject.GetName()) // "payments_action_response_with_single_result_simple_public_object"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | A string indicating the category of the error. |
| `context` | `map[string]any` | Yes | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | `[]any` | Yes | An array of ErrorDetail objects providing further information about the error. |
| `id` | `string` | No | A string that uniquely identifies this specific error instance. |
| `links` | `map[string]any` | Yes | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | `string` | Yes | A string containing a human-readable message describing the error. |
| `status` | `string` | Yes | A string representing the status of the error. |
| `subCategory` | `map[string]any` | No | An object providing more specific details about the error category. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentsActionResponseWithSingleResultSimplePublicObject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentsCreateManualPaymentPublicEntity

```go
paymentsCreateManualPaymentPublic := client.PaymentsCreateManualPaymentPublic(nil)
fmt.Println(paymentsCreateManualPaymentPublic.GetName()) // "payments_create_manual_payment_public"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associations` | `[]any` | Yes | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` | `map[string]any` | No |  |
| `currencyCode` | `string` | Yes | The currency code for the payment, represented as a string. |
| `customerEmail` | `string` | No | The email address of the customer making the payment, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | `float64` | Yes | The amount of the payment, represented as a number. |
| `paymentDate` | `string` | Yes | The date of the payment, represented as a string. |
| `paymentMethod` | `string` | Yes | The method used for the payment, represented as a string. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentsCreateManualPaymentPublicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentsSettingsGetBillingSettingsPublicEntity

```go
paymentsSettingsGetBillingSettingsPublic := client.PaymentsSettingsGetBillingSettingsPublic(nil)
fmt.Println(paymentsSettingsGetBillingSettingsPublic.GetName()) // "payments_settings_get_billing_settings_public"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentsSettingsGetBillingSettingsPublic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PaymentsSettingsGetBillingSettingsPublic(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentsSettingsGetBillingSettingsPublicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentsSettingsGetCheckoutFeesPublicEntity

```go
paymentsSettingsGetCheckoutFeesPublic := client.PaymentsSettingsGetCheckoutFeesPublic(nil)
fmt.Println(paymentsSettingsGetCheckoutFeesPublic.GetName()) // "payments_settings_get_checkout_fees_public"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appliesToPaymentType` | `string` | Yes | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | `[]any` | Yes | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | `float64` | Yes | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | `string` | Yes | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | `string` | Yes | The unique identifier for this checkout fee configuration. |
| `name` | `string` | Yes | The name of the checkout fee, used for identification and display purposes. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentsSettingsGetCheckoutFeesPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PaymentsSettingsGetCheckoutFeesPublic(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentsSettingsGetCheckoutFeesPublicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentsSettingsGetPolicySettingsPublicEntity

```go
paymentsSettingsGetPolicySettingsPublic := client.PaymentsSettingsGetPolicySettingsPublic(nil)
fmt.Println(paymentsSettingsGetPolicySettingsPublic.GetName()) // "payments_settings_get_policy_settings_public"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentsSettingsGetPolicySettingsPublic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PaymentsSettingsGetPolicySettingsPublic(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentsSettingsGetPolicySettingsPublicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentsSettingsGetShippingSettingsPublicEntity

```go
paymentsSettingsGetShippingSettingsPublic := client.PaymentsSettingsGetShippingSettingsPublic(nil)
fmt.Println(paymentsSettingsGetShippingSettingsPublic.GetName()) // "payments_settings_get_shipping_settings_public"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `collectShippingAddressByDefault` | `bool` | Yes | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | `[]any` | Yes | An array of strings representing the list of countries to which shipping is available. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `collectShippingAddressByDefault` | - | Yes |
| `countriesShippedTo` | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentsSettingsGetShippingSettingsPublic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PaymentsSettingsGetShippingSettingsPublic(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentsSettingsGetShippingSettingsPublicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentsaccountsPaymentAccountViewEntity

```go
paymentsaccountsPaymentAccountView := client.PaymentsaccountsPaymentAccountView(nil)
fmt.Println(paymentsaccountsPaymentAccountView.GetName()) // "paymentsaccounts_payment_account_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canPayout` | `bool` | Yes | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | `bool` | Yes | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | `string` | No | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | `[]any` | Yes | An array of processor types that the account is eligible to use. |
| `enrollmentState` | `string` | Yes | The current enrollment state of the payment account. |
| `hasTransacted` | `bool` | Yes | A boolean indicating whether the account has ever processed a transaction. |
| `id` | `string` | Yes | The portalId for the payment account. |
| `lastTransactedAt` | `string` | No | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | `string` | Yes | The type of payment processor associated with the account. |
| `updatedAt` | `string` | No | The date and time when the payment account was last updated, in ISO 8601 format. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentsaccountsPaymentAccountView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentsaccountsPaymentAccountViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriceBookEntity

```go
priceBook := client.PriceBook(nil)
fmt.Println(priceBook.GetName()) // "price_book"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | No | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Yes | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | Yes | The number of products included in this price book. |
| `createdAt` | `string` | No | The date and time when this price book was created. |
| `customProperties` | `map[string]any` | Yes | A map of custom property names to their values for this price book. |
| `description` | `string` | No | A description of the price book. |
| `id` | `string` | Yes | The unique identifier for this price book. |
| `name` | `string` | No | The name of the price book. |
| `status` | `string` | Yes | The current status of the price book. |
| `supportedCurrencies` | `[]any` | Yes | An array of currency codes that this price book supports. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PriceBook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PriceBook(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PriceBook(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriceBookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriceBooksBatchResponsePriceBookItemEntity

```go
priceBooksBatchResponsePriceBookItem := client.PriceBooksBatchResponsePriceBookItem(nil)
fmt.Println(priceBooksBatchResponsePriceBookItem.GetName()) // "price_books_batch_response_price_book_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | Yes | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | `map[string]any` | No | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | Yes | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriceBooksBatchResponsePriceBookItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriceBooksCollectionResponsePriceBookItemResponseForwardEntity

```go
priceBooksCollectionResponsePriceBookItemResponseForward := client.PriceBooksCollectionResponsePriceBookItemResponseForward(nil)
fmt.Println(priceBooksCollectionResponsePriceBookItemResponseForward.GetName()) // "price_books_collection_response_price_book_item_response_forward"
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
| `customProperties` | `map[string]any` | Yes | A map of custom property names to their values for the price book item. |
| `description` | `string` | No | A description of the price book item. |
| `id` | `string` | Yes | The unique identifier for the price book item. |
| `images` | `string` | No | A string representing images associated with the price book item. |
| `name` | `string` | No | The name of the price book item. |
| `priceBookId` | `string` | No | The unique identifier for the price book containing this item. |
| `pricing` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PriceBooksCollectionResponsePriceBookItemResponseForward(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriceBooksPriceBookEntity

```go
priceBooksPriceBook := client.PriceBooksPriceBook(nil)
fmt.Println(priceBooksPriceBook.GetName()) // "price_books_price_book"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether this price book is archived. |
| `archivedAt` | `string` | No | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Yes | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | Yes | The number of products included in this price book. |
| `createdAt` | `string` | No | The date and time when this price book was created. |
| `customProperties` | `map[string]any` | Yes | A map of custom property names to their values for this price book. |
| `description` | `string` | No | A description of the price book. |
| `id` | `string` | Yes | The unique identifier for this price book. |
| `name` | `string` | No | The name of the price book. |
| `status` | `string` | Yes | The current status of the price book. |
| `supportedCurrencies` | `[]any` | Yes | An array of currency codes that this price book supports. |
| `updatedAt` | `string` | No | The date and time when this price book was last updated. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriceBooksPriceBookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriceBooksPriceBookItemEntity

```go
priceBooksPriceBookItem := client.PriceBooksPriceBookItem(nil)
fmt.Println(priceBooksPriceBookItem.GetName()) // "price_books_price_book_item"
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
| `customProperties` | `map[string]any` | Yes | A map of custom property names to their values for the price book item. |
| `description` | `string` | No | A description of the price book item. |
| `id` | `string` | Yes | The unique identifier for the price book item. |
| `images` | `string` | No | A string representing images associated with the price book item. |
| `name` | `string` | No | The name of the price book item. |
| `priceBookId` | `string` | No | The unique identifier for the price book containing this item. |
| `pricing` | `map[string]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PriceBooksPriceBookItem(nil).Load(map[string]any{"id": 1, "price_book_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PriceBooksPriceBookItem(nil).Update(map[string]any{
    "id": 1,
    "price_book_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriceBooksPriceBookItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriceBooksPriceBookValidateEntity

```go
priceBooksPriceBookValidate := client.PriceBooksPriceBookValidate(nil)
fmt.Println(priceBooksPriceBookValidate.GetName()) // "price_books_price_book_validate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | `bool` | Yes | A boolean indicating whether the price book is valid. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriceBooksPriceBookValidateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```go
client := sdk.NewHubspotCommerceSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
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

Request/response capture ring buffer for debugging.

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

Idempotency keys for safe retries of mutating operations.

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

Statistics capture: per-operation counters and latency.

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

Pagination signals for list operations.

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

Client-side rate limiting via a token bucket.

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

Automatic retry of transient failures with exponential backoff.

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

In-memory mock transport for testing without a live server.

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

Per-request timeout with transport abort.

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

