# HubspotCommerce Python SDK Reference

Complete API reference for the HubspotCommerce Python SDK.


## HubspotCommerceSDK

### Constructor

```python
from hubspotcommerce_sdk import HubspotCommerceSDK

client = HubspotCommerceSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotCommerceSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = HubspotCommerceSDK.test()
```


### Instance Methods

#### `Advanced(data=None)`

Create a new `AdvancedEntity` instance. Pass `None` for no initial data.

#### `Basic(data=None)`

Create a new `BasicEntity` instance. Pass `None` for no initial data.

#### `Batch(data=None)`

Create a new `BatchEntity` instance. Pass `None` for no initial data.

#### `Contract(data=None)`

Create a new `ContractEntity` instance. Pass `None` for no initial data.

#### `ContractsContract(data=None)`

Create a new `ContractsContractEntity` instance. Pass `None` for no initial data.

#### `ContractsContractChange(data=None)`

Create a new `ContractsContractChangeEntity` instance. Pass `None` for no initial data.

#### `ContractsContractChangePreview(data=None)`

Create a new `ContractsContractChangePreviewEntity` instance. Pass `None` for no initial data.

#### `ContractsQuote(data=None)`

Create a new `ContractsQuoteEntity` instance. Pass `None` for no initial data.

#### `Item(data=None)`

Create a new `ItemEntity` instance. Pass `None` for no initial data.

#### `PaymentLink(data=None)`

Create a new `PaymentLinkEntity` instance. Pass `None` for no initial data.

#### `PaymentMethodsCommercePaymentMethodSettingsPublic(data=None)`

Create a new `PaymentMethodsCommercePaymentMethodSettingsPublicEntity` instance. Pass `None` for no initial data.

#### `PaymentsActionResponseWithSingleResultSimplePublicObject(data=None)`

Create a new `PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` instance. Pass `None` for no initial data.

#### `PaymentsCreateManualPaymentPublic(data=None)`

Create a new `PaymentsCreateManualPaymentPublicEntity` instance. Pass `None` for no initial data.

#### `PaymentsSettingsGetBillingSettingsPublic(data=None)`

Create a new `PaymentsSettingsGetBillingSettingsPublicEntity` instance. Pass `None` for no initial data.

#### `PaymentsSettingsGetCheckoutFeesPublic(data=None)`

Create a new `PaymentsSettingsGetCheckoutFeesPublicEntity` instance. Pass `None` for no initial data.

#### `PaymentsSettingsGetPolicySettingsPublic(data=None)`

Create a new `PaymentsSettingsGetPolicySettingsPublicEntity` instance. Pass `None` for no initial data.

#### `PaymentsSettingsGetShippingSettingsPublic(data=None)`

Create a new `PaymentsSettingsGetShippingSettingsPublicEntity` instance. Pass `None` for no initial data.

#### `PaymentsaccountsPaymentAccountView(data=None)`

Create a new `PaymentsaccountsPaymentAccountViewEntity` instance. Pass `None` for no initial data.

#### `PriceBook(data=None)`

Create a new `PriceBookEntity` instance. Pass `None` for no initial data.

#### `PriceBooksBatchResponsePriceBookItem(data=None)`

Create a new `PriceBooksBatchResponsePriceBookItemEntity` instance. Pass `None` for no initial data.

#### `PriceBooksCollectionResponsePriceBookItemResponseForward(data=None)`

Create a new `PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` instance. Pass `None` for no initial data.

#### `PriceBooksPriceBook(data=None)`

Create a new `PriceBooksPriceBookEntity` instance. Pass `None` for no initial data.

#### `PriceBooksPriceBookItem(data=None)`

Create a new `PriceBooksPriceBookItemEntity` instance. Pass `None` for no initial data.

#### `PriceBooksPriceBookValidate(data=None)`

Create a new `PriceBooksPriceBookValidateEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AdvancedEntity

```python
advanced = client.Advanced()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Advanced().create({
    "payment_crm_object_id": "example_payment_crm_object_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdvancedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BasicEntity

```python
basic = client.Basic()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Basic().remove({"payment_link_id": "payment_link_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BatchEntity

```python
batch = client.Batch()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Batch().create({
    "price_book_id": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContractEntity

```python
contract = client.Contract()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressTypesToCollect` | `list` | Yes | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `str` | No | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float` | No | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `list` | Yes | An array of allowed payment methods. |
| `annualContractValue` | `float` | No | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Yes | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `dict` | No | An object representing the billing address for the contract. |
| `billingCompanyId` | `str` | No | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `str` | No | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `str` | No | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `str` | No | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `str` | No | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float` | No | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `str` | No | The process for collecting payments. |
| `contractEffectiveDate` | `str` | No | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `str` | No | The unique identifier of the source of the contract. |
| `createdAt` | `str` | No | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `str` | No | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float` | No | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float` | No | The current monthly recurring revenue for the contract. |
| `customProperties` | `dict` | Yes | A map of custom property names to their values. |
| `dealId` | `str` | No | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `str` | No | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float` | No | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `str` | No | The discount code applied to the contract. |
| `endDate` | `str` | No | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `str` | No | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Yes | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `str` | Yes | The unique identifier for the contract. |
| `language` | `str` | No | The language associated with the contract. |
| `lineItems` | `list` | Yes | An array of line items included in the contract. |
| `locale` | `str` | No | The locale associated with the contract. |
| `name` | `str` | No | The name of the contract. |
| `netPaymentTerms` | `int` | No | The net payment terms for the contract, represented as an integer. |
| `ownerId` | `dict` | Yes | An object representing the ID of the contract owner. |
| `paymentEnabled` | `bool` | Yes | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `str` | No | The payment method used for the contract. |
| `poNumber` | `str` | No | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float` | No | The value of the contract before termination. |
| `renewalContractId` | `str` | No | The unique identifier of the renewal contract. |
| `renewalDate` | `str` | No | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `dict` | No | An object representing the address of the seller's company. |
| `sellerCompanyDomain` | `dict` | Yes | An object representing the domain of the seller's company. |
| `sellerCompanyName` | `str` | No | The name of the seller's company. |
| `sellerEmail` | `str` | No | The email address of the seller. |
| `sellerFirstName` | `str` | No | The first name of the seller. |
| `sellerLastName` | `str` | No | The last name of the seller. |
| `sellerPhone` | `dict` | Yes | An object representing the phone number of the seller. |
| `sellerPhoneNumber` | `str` | No | The phone number of the seller. |
| `startDate` | `str` | No | The start date of the contract, in ISO 8601 format. |
| `status` | `str` | Yes | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `str` | No | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float` | No | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float` | No | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float` | No | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float` | No | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float` | No | The total value of the contract. |
| `totalPaidAmount` | `float` | No | The total amount paid under the contract. |
| `updatedAt` | `str` | No | The date and time when the contract was last updated, in ISO 8601 format. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Contract().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Contract().load({"id": "contract_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Contract().update({
    "id": "contract_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContractEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContractsContractEntity

```python
contracts_contract = client.ContractsContract()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addressTypesToCollect` | `list` | Yes | An array indicating the types of addresses to collect. |
| `allTransactionsFeeName` | `str` | No | The name of the fee applied to all transactions. |
| `allTransactionsFeePercentage` | `float` | No | The percentage of the fee applied to all transactions. |
| `allowedPaymentMethods` | `list` | Yes | An array of allowed payment methods. |
| `annualContractValue` | `float` | No | The annual value of the contract. |
| `automatedTaxesEnabled` | `bool` | Yes | Indicates whether automated taxes are enabled for the contract. |
| `billingAddress` | `dict` | No |  |
| `billingCompanyId` | `str` | No | The unique identifier of the billing company associated with the contract. |
| `billingContactId` | `str` | No | The unique identifier of the billing contact associated with the contract. |
| `billingStartDateOverride` | `str` | No | The date to override the billing start date, in ISO 8601 format. |
| `businessUnitId` | `str` | No | The unique identifier of the business unit associated with the contract. |
| `cardFeeName` | `str` | No | The name of the fee applied to card transactions. |
| `cardFeePercentage` | `float` | No | The percentage of the fee applied to card transactions. |
| `collectionProcess` | `str` | No | The process for collecting payments. |
| `contractEffectiveDate` | `str` | No | The date when the contract becomes effective, in ISO 8601 format. |
| `contractSourceId` | `str` | No | The unique identifier of the source of the contract. |
| `createdAt` | `str` | No | The date and time when the contract was created, in ISO 8601 format. |
| `currencyCode` | `str` | No | The currency code associated with the contract, represented as a string. |
| `currentAnnualRecurringRevenue` | `float` | No | The current annual recurring revenue for the contract. |
| `currentMonthlyRecurringRevenue` | `float` | No | The current monthly recurring revenue for the contract. |
| `customProperties` | `dict` | Yes | A map of custom property names to their values. |
| `dealId` | `str` | No | The unique identifier of the deal associated with the contract. |
| `directDebitFeeName` | `str` | No | The name of the fee applied to direct debit transactions. |
| `directDebitFeePercentage` | `float` | No | The percentage of the fee applied to direct debit transactions. |
| `discountCode` | `str` | No | The discount code applied to the contract. |
| `endDate` | `str` | No | The end date of the contract, in ISO 8601 format. |
| `externalPaymentMethodReferenceId` | `str` | No | The external reference ID for the payment method. |
| `hubspotBillingEnabled` | `bool` | Yes | Indicates whether HubSpot billing is enabled for the contract. |
| `id` | `str` | Yes | The unique identifier for the contract. |
| `language` | `str` | No | The language associated with the contract. |
| `lineItems` | `list` | Yes | An array of line items included in the contract. |
| `locale` | `str` | No | The locale associated with the contract. |
| `name` | `str` | No | The name of the contract. |
| `netPaymentTerms` | `int` | No | The net payment terms for the contract, represented as an integer. |
| `paymentEnabled` | `bool` | Yes | Indicates whether payment is enabled for the contract. |
| `paymentMethod` | `str` | No | The payment method used for the contract. |
| `poNumber` | `str` | No | The purchase order number associated with the contract. |
| `preTerminationContractValue` | `float` | No | The value of the contract before termination. |
| `renewalContractId` | `str` | No | The unique identifier of the renewal contract. |
| `renewalDate` | `str` | No | The date when the contract is set to renew, in ISO 8601 format. |
| `sellerCompanyAddress` | `dict` | No |  |
| `sellerCompanyName` | `str` | No | The name of the seller's company. |
| `sellerEmail` | `str` | No | The email address of the seller. |
| `sellerFirstName` | `str` | No | The first name of the seller. |
| `sellerLastName` | `str` | No | The last name of the seller. |
| `sellerPhoneNumber` | `str` | No | The phone number of the seller. |
| `startDate` | `str` | No | The start date of the contract, in ISO 8601 format. |
| `status` | `str` | Yes | The current status of the contract. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | Indicates whether the payment method should be stored at checkout. |
| `terminationDate` | `str` | No | The date when the contract is terminated, in ISO 8601 format. |
| `totalBilledAmount` | `float` | No | The total amount billed under the contract. |
| `totalBilledAmountPreTax` | `float` | No | The total amount billed under the contract before tax. |
| `totalCollectedFees` | `float` | No | The total amount of fees collected under the contract. |
| `totalCollectedTaxes` | `float` | No | The total amount of taxes collected under the contract. |
| `totalContractValue` | `float` | No | The total value of the contract. |
| `totalPaidAmount` | `float` | No | The total amount paid under the contract. |
| `updatedAt` | `str` | No | The date and time when the contract was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContractsContract().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContractsContractEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContractsContractChangeEntity

```python
contracts_contract_change = client.ContractsContractChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contractId` | `str` | Yes | The unique identifier of the contract associated with this change. |
| `createdAt` | `str` | No | The date and time when the contract change was created, in ISO 8601 format. |
| `deltaLineItems` | `list` | Yes | An array of line items that represent the difference resulting from the contract change. |
| `effectiveDate` | `str` | No | The date when the contract change becomes effective, in YYYY-MM-DD format. |
| `id` | `str` | Yes | The unique identifier for the contract change. |
| `lineItemChanges` | `list` | Yes | An array of changes to line items associated with the contract change. |
| `name` | `str` | No | The name of the contract change. |
| `proposedLineItems` | `list` | Yes | An array of line items that are proposed as part of the contract change. |
| `prorating` | `bool` | Yes | A boolean indicating whether the contract change involves prorating. |
| `quoteId` | `str` | No | The unique identifier of the quote associated with this contract change. |
| `status` | `str` | Yes | The current status of the contract change. |
| `type` | `str` | Yes | The type of contract change. |
| `updatedAt` | `str` | No | The date and time when the contract change was last updated, in ISO 8601 format. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContractsContractChange().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContractsContractChange().list({"contract_id": "example"})
for contracts_contract_change in results:
    print(contracts_contract_change)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContractsContractChange().load({"id": "contracts_contract_change_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ContractsContractChange().update({
    "id": "contracts_contract_change_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContractsContractChangeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContractsContractChangePreviewEntity

```python
contracts_contract_change_preview = client.ContractsContractChangePreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deltaLineItems` | `list` | Yes | An array of LineItem objects representing the changes in line items compared to the current state of the contract. |
| `proposedLineItems` | `list` | Yes | An array of LineItem objects representing the proposed state of line items after the changes are applied. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContractsContractChangePreview().create({
    "deltaLineItems": [],  # list
    "proposedLineItems": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContractsContractChangePreviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContractsQuoteEntity

```python
contracts_quote = client.ContractsQuote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dealId` | `str` | No | The unique identifier of the deal associated with the renewal quote. |
| `dealPipeline` | `str` | No | The identifier of the pipeline in which the deal is located. |
| `dealStage` | `str` | No | The identifier of the stage within the pipeline that the deal is currently in. |
| `name` | `str` | No | The name of the renewal quote. |
| `quoteTemplateId` | `str` | Yes | The unique identifier of the quote template to be used for creating the renewal quote. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContractsQuote().create({
    "contract_id": "example_contract_id",  # str
    "quoteTemplateId": "example_quoteTemplateId",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContractsQuoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ItemEntity

```python
item = client.Item()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Item().remove({"id": 1, "price_book_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentLinkEntity

```python
payment_link = client.PaymentLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedPaymentMethods` | `list` | Yes | An array of accepted payment methods for the payment link. |
| `additionalFormFields` | `list` | Yes | An array of additional form fields included in the payment link. |
| `archived` | `bool` | Yes | A boolean indicating whether the payment link is archived. |
| `archivedAt` | `str` | No | The date and time when the payment link was archived, in ISO 8601 format. |
| `automatedSalesTaxEnabled` | `bool` | Yes | A boolean indicating whether automated sales tax is enabled for the payment link. |
| `businessUnitId` | `str` | No | The business unit ID associated with the payment link, represented as a string. |
| `checkoutFeeIds` | `list` | Yes | An array of checkout fee IDs associated with the payment link. |
| `collectFullBillingAddress` | `bool` | Yes | A boolean indicating whether to collect the full billing address during checkout. |
| `collectShippingAddress` | `bool` | Yes | A boolean indicating whether to collect the shipping address during checkout. |
| `completedPurchaseCount` | `int` | Yes | The number of completed purchases made through this payment link. |
| `createContractOnPurchase` | `bool` | Yes | A boolean indicating whether a contract should be created upon purchase. |
| `createdAt` | `str` | No | The date and time when the payment link was created, in ISO 8601 format. |
| `currencyCode` | `str` | Yes | The currency code for the payment link, represented as a string. |
| `dealConfigurations` | `dict` | Yes | An object containing deal configuration settings. |
| `descriptionHtml` | `str` | No | The HTML description of the payment link, represented as a string. |
| `discount` | `dict` | Yes |  |
| `discountCodeEnabled` | `bool` | Yes | A boolean indicating whether discount codes are enabled for the payment link. |
| `discountObjectId` | `str` | No | A string representing the object ID of a discount associated with the payment link. |
| `discounts` | `list` | Yes | An array of discount objects associated with the payment link. |
| `domainId` | `str` | No | The domain ID associated with the payment link, represented as a string. |
| `enableDefaultCheckoutFees` | `bool` | Yes | A boolean indicating whether default checkout fees are enabled. |
| `expirationSettings` | `dict` | No | An object representing the expiration settings for the payment link. |
| `feeObjectIds` | `list` | Yes | An array of strings representing the IDs of fee objects associated with the payment link. |
| `fees` | `list` | Yes | An array of fee objects associated with the payment link. |
| `formGuid` | `str` | Yes | The form GUID associated with the payment link, represented as a string. |
| `id` | `str` | Yes | The unique identifier for the payment link, represented as a string. |
| `includeEmailInSuccessRedirect` | `bool` | Yes | A boolean indicating whether to include the email in the success redirect URL. |
| `isOneTimeUseEnabled` | `bool` | Yes | A boolean indicating whether the payment link is enabled for one-time use. |
| `lineItemObjectIds` | `list` | Yes | An array of line item object IDs associated with the payment link, each represented as a string. |
| `lineItems` | `list` | Yes | An array of line items associated with the payment link. |
| `paymentLinkName` | `str` | Yes | The name of the payment link, represented as a string. |
| `paymentLinkUrl` | `str` | Yes | The URL of the payment link, represented as a string. |
| `state` | `str` | Yes | The current state of the payment link, represented as a string. |
| `storePaymentMethodAtCheckout` | `bool` | Yes | A boolean indicating whether to store the payment method at checkout. |
| `successUrl` | `str` | No | The URL to redirect to upon successful payment, represented as a string. |
| `taxObjectIds` | `list` | Yes | An array of string IDs representing tax objects associated with the payment link. |
| `taxes` | `list` | Yes | An array of tax objects associated with the payment link. |
| `updatedAt` | `str` | No | The date and time when the payment link was last updated, in ISO 8601 format. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentLink().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentLink().list()
for payment_link in results:
    print(payment_link)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentLink().load({"id": "payment_link_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PaymentLink().update({
    "id": "payment_link_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentMethodsCommercePaymentMethodSettingsPublicEntity

```python
payment_methods_commerce_payment_method_settings_public = client.PaymentMethodsCommercePaymentMethodSettingsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCurrencies` | `list` | Yes | A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. |
| `commercePaymentMethod` | `str` | Yes | The type of payment method. |
| `isDefaultOn` | `bool` | Yes | A boolean indicating whether this payment method is set as the default option. |
| `paymentMethodSettings` | `list` | Yes | A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods. |
| `paymentMethodUpdates` | `list` | Yes | An array of updates to be applied to commerce payment methods. |
| `supportedCurrencies` | `list` | Yes | A full list of currencies that are supported by the bundled commercePaymentMethod. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentMethodsCommercePaymentMethodSettingsPublic().list()
for payment_methods_commerce_payment_method_settings_public in results:
    print(payment_methods_commerce_payment_method_settings_public)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PaymentMethodsCommercePaymentMethodSettingsPublic().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodsCommercePaymentMethodSettingsPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentsActionResponseWithSingleResultSimplePublicObjectEntity

```python
payments_action_response_with_single_result_simple_public_object = client.PaymentsActionResponseWithSingleResultSimplePublicObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | Yes | A string indicating the category of the error. |
| `context` | `dict` | Yes | An object containing additional context about the error condition, where keys are context names and values are arrays of strings. |
| `errors` | `list` | Yes | An array of ErrorDetail objects providing further information about the error. |
| `id` | `str` | No | A string that uniquely identifies this specific error instance. |
| `links` | `dict` | Yes | An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error. |
| `message` | `str` | Yes | A string containing a human-readable message describing the error. |
| `status` | `str` | Yes | A string representing the status of the error. |
| `subCategory` | `dict` | No | An object providing more specific details about the error category. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentsActionResponseWithSingleResultSimplePublicObject().list({"payment_crm_object_id": "example", "task_id": "example"})
for payments_action_response_with_single_result_simple_public_object in results:
    print(payments_action_response_with_single_result_simple_public_object)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentsActionResponseWithSingleResultSimplePublicObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentsCreateManualPaymentPublicEntity

```python
payments_create_manual_payment_public = client.PaymentsCreateManualPaymentPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associations` | `list` | Yes | An array of associations related to the payment, where each item is an AssociationPublicRequest object. |
| `billingAddress` | `dict` | No |  |
| `currencyCode` | `str` | Yes | The currency code for the payment, represented as a string. |
| `customerEmail` | `str` | No | The email address of the customer making the payment, represented as a string. |
| `id` | `str` | Yes | The unique identifier for the created manual payment, represented as a string. |
| `paymentAmount` | `float` | Yes | The amount of the payment, represented as a number. |
| `paymentDate` | `str` | Yes | The date of the payment, represented as a string. |
| `paymentMethod` | `str` | Yes | The method used for the payment, represented as a string. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentsCreateManualPaymentPublic().create({
    "associations": [],  # list
    "currencyCode": "example_currencyCode",  # str
    "id": "example_id",  # str
    "paymentAmount": 1,  # float
    "paymentDate": "example_paymentDate",  # str
    "paymentMethod": "example_paymentMethod",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentsCreateManualPaymentPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentsSettingsGetBillingSettingsPublicEntity

```python
payments_settings_get_billing_settings_public = client.PaymentsSettingsGetBillingSettingsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountGoogleAnalyticsEnabled` | `bool` | No | Indicates whether Google Analytics tracking is enabled for the account. |
| `checkoutPrefillEnabled` | `bool` | Yes | Indicates whether checkout fields should be prefilled. |
| `collectFullBillingAddress` | `bool` | Yes | Indicates whether the full billing address should be collected. |
| `collectPaymentMethodOnFile` | `bool` | Yes | Indicates whether a payment method should be kept on file. |
| `defaultFromEmailAddress` | `str` | Yes | The default email address used for sending communications. |
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentsSettingsGetBillingSettingsPublic().load()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PaymentsSettingsGetBillingSettingsPublic().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentsSettingsGetBillingSettingsPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentsSettingsGetCheckoutFeesPublicEntity

```python
payments_settings_get_checkout_fees_public = client.PaymentsSettingsGetCheckoutFeesPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appliesToPaymentType` | `str` | Yes | The type of payment to which this fee applies, represented as a string. |
| `checkoutFees` | `list` | Yes | An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process. |
| `feeValue` | `float` | Yes | The numerical value of the fee, indicating the amount to be charged. |
| `feeValueType` | `str` | Yes | The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount). |
| `id` | `str` | Yes | The unique identifier for this checkout fee configuration. |
| `name` | `str` | Yes | The name of the checkout fee, used for identification and display purposes. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentsSettingsGetCheckoutFeesPublic().list()
for payments_settings_get_checkout_fees_public in results:
    print(payments_settings_get_checkout_fees_public)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PaymentsSettingsGetCheckoutFeesPublic().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentsSettingsGetCheckoutFeesPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentsSettingsGetPolicySettingsPublicEntity

```python
payments_settings_get_policy_settings_public = client.PaymentsSettingsGetPolicySettingsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledgementRequired` | `bool` | Yes | A boolean indicating whether an acknowledgement is required for the policy. |
| `cancellationPolicyText` | `str` | No | A string containing the text of the cancellation policy. |
| `customPolicyEnabled` | `bool` | Yes | A boolean indicating whether a custom policy is enabled. |
| `refundPolicyText` | `str` | No | A string containing the text of the refund policy. |
| `termsOfServiceUrl` | `str` | No | A string representing the URL of the terms of service. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `acknowledgementRequired` | - | Yes |
| `cancellationPolicyText` | - | Yes |
| `customPolicyEnabled` | - | Yes |
| `refundPolicyText` | - | Yes |
| `termsOfServiceUrl` | - | Yes |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentsSettingsGetPolicySettingsPublic().load()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PaymentsSettingsGetPolicySettingsPublic().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentsSettingsGetPolicySettingsPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentsSettingsGetShippingSettingsPublicEntity

```python
payments_settings_get_shipping_settings_public = client.PaymentsSettingsGetShippingSettingsPublic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `collectShippingAddressByDefault` | `bool` | Yes | A boolean indicating whether the shipping address is collected by default. |
| `countriesShippedTo` | `list` | Yes | An array of strings representing the list of countries to which shipping is available. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `collectShippingAddressByDefault` | - | Yes |
| `countriesShippedTo` | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentsSettingsGetShippingSettingsPublic().list()
for payments_settings_get_shipping_settings_public in results:
    print(payments_settings_get_shipping_settings_public)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PaymentsSettingsGetShippingSettingsPublic().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentsSettingsGetShippingSettingsPublicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentsaccountsPaymentAccountViewEntity

```python
paymentsaccounts_payment_account_view = client.PaymentsaccountsPaymentAccountView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `canPayout` | `bool` | Yes | A boolean indicating whether the account is capable of making payouts. |
| `canTransact` | `bool` | Yes | A boolean indicating whether the account is capable of processing transactions. |
| `createdAt` | `str` | No | The date and time when the payment account was created, in ISO 8601 format. |
| `eligibleProcessorTypes` | `list` | Yes | An array of processor types that the account is eligible to use. |
| `enrollmentState` | `str` | Yes | The current enrollment state of the payment account. |
| `hasTransacted` | `bool` | Yes | A boolean indicating whether the account has ever processed a transaction. |
| `id` | `str` | Yes | The portalId for the payment account. |
| `lastTransactedAt` | `str` | No | The date and time of the last transaction made with this account, in ISO 8601 format. |
| `processorType` | `str` | Yes | The type of payment processor associated with the account. |
| `updatedAt` | `str` | No | The date and time when the payment account was last updated, in ISO 8601 format. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentsaccountsPaymentAccountView().list()
for paymentsaccounts_payment_account_view in results:
    print(paymentsaccounts_payment_account_view)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentsaccountsPaymentAccountViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriceBookEntity

```python
price_book = client.PriceBook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether this price book is archived. |
| `archivedAt` | `str` | No | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Yes | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | Yes | The number of products included in this price book. |
| `createdAt` | `str` | No | The date and time when this price book was created. |
| `customProperties` | `dict` | Yes | A map of custom property names to their values for this price book. |
| `description` | `str` | No | A description of the price book. |
| `id` | `str` | Yes | The unique identifier for this price book. |
| `name` | `str` | No | The name of the price book. |
| `status` | `str` | Yes | The current status of the price book. |
| `supportedCurrencies` | `list` | Yes | An array of currency codes that this price book supports. |
| `updatedAt` | `str` | No | The date and time when this price book was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PriceBook().create({
    "autoAssignmentEnabled": True,  # bool
    "countOfIncludedProducts": 1,  # int
    "customProperties": {},  # dict
    "id": "example_id",  # str
    "status": "example_status",  # str
    "supportedCurrencies": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PriceBook().list()
for price_book in results:
    print(price_book)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PriceBook().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PriceBook().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriceBookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriceBooksBatchResponsePriceBookItemEntity

```python
price_books_batch_response_price_book_item = client.PriceBooksBatchResponsePriceBookItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `list` | Yes | An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. |
| `links` | `dict` | No | A map of link names to associated URIs providing additional information or actions related to the batch operation. |
| `requestedAt` | `str` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | Yes | An array of PriceBookItemResponse objects representing the individual results of the batch operation. |
| `startedAt` | `str` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PriceBooksBatchResponsePriceBookItem().create({
    "price_book_id": 1,  # int
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriceBooksBatchResponsePriceBookItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriceBooksCollectionResponsePriceBookItemResponseForwardEntity

```python
price_books_collection_response_price_book_item_response_forward = client.PriceBooksCollectionResponsePriceBookItemResponseForward()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `str` | No | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `str` | No | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `str` | No | The billing period for the price book item. |
| `costOfGoodsSold` | `str` | No | The cost of goods sold for the price book item. |
| `createdAt` | `str` | No | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `dict` | Yes | A map of custom property names to their values for the price book item. |
| `description` | `str` | No | A description of the price book item. |
| `id` | `str` | Yes | The unique identifier for the price book item. |
| `images` | `str` | No | A string representing images associated with the price book item. |
| `name` | `str` | No | The name of the price book item. |
| `priceBookId` | `str` | No | The unique identifier for the price book containing this item. |
| `pricing` | `dict` | Yes |  |
| `productClassification` | `str` | No | The classification of the product. |
| `productId` | `str` | Yes | The unique identifier for the product associated with the price book item. |
| `productType` | `str` | No | The type of product. |
| `recurringBillingTerms` | `str` | No | The terms of recurring billing for the price book item. |
| `sku` | `str` | No | The stock keeping unit (SKU) of the price book item. |
| `status` | `str` | No | The current status of the price book item. |
| `taxCategory` | `str` | No | The tax category of the price book item. |
| `updatedAt` | `str` | No | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | `str` | No | A URL associated with the price book item. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PriceBooksCollectionResponsePriceBookItemResponseForward().list({"price_book_id": 1})
for price_books_collection_response_price_book_item_response_forward in results:
    print(price_books_collection_response_price_book_item_response_forward)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriceBooksCollectionResponsePriceBookItemResponseForwardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriceBooksPriceBookEntity

```python
price_books_price_book = client.PriceBooksPriceBook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether this price book is archived. |
| `archivedAt` | `str` | No | The date and time when this price book was archived. |
| `autoAssignmentEnabled` | `bool` | Yes | Indicates whether auto-assignment is enabled for the price book. |
| `countOfIncludedProducts` | `int` | Yes | The number of products included in this price book. |
| `createdAt` | `str` | No | The date and time when this price book was created. |
| `customProperties` | `dict` | Yes | A map of custom property names to their values for this price book. |
| `description` | `str` | No | A description of the price book. |
| `id` | `str` | Yes | The unique identifier for this price book. |
| `name` | `str` | No | The name of the price book. |
| `status` | `str` | Yes | The current status of the price book. |
| `supportedCurrencies` | `list` | Yes | An array of currency codes that this price book supports. |
| `updatedAt` | `str` | No | The date and time when this price book was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PriceBooksPriceBook().create({
    "price_book_id": 1,  # int
    "autoAssignmentEnabled": True,  # bool
    "countOfIncludedProducts": 1,  # int
    "customProperties": {},  # dict
    "id": "example_id",  # str
    "status": "example_status",  # str
    "supportedCurrencies": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriceBooksPriceBookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriceBooksPriceBookItemEntity

```python
price_books_price_book_item = client.PriceBooksPriceBookItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | A boolean indicating whether the price book item is archived. |
| `archivedAt` | `str` | No | The date and time when the price book item was archived, in ISO 8601 format. |
| `billingFrequency` | `str` | No | The frequency at which billing occurs for the price book item. |
| `billingPeriod` | `str` | No | The billing period for the price book item. |
| `costOfGoodsSold` | `str` | No | The cost of goods sold for the price book item. |
| `createdAt` | `str` | No | The date and time when the price book item was created, in ISO 8601 format. |
| `customProperties` | `dict` | Yes | A map of custom property names to their values for the price book item. |
| `description` | `str` | No | A description of the price book item. |
| `id` | `str` | Yes | The unique identifier for the price book item. |
| `images` | `str` | No | A string representing images associated with the price book item. |
| `name` | `str` | No | The name of the price book item. |
| `priceBookId` | `str` | No | The unique identifier for the price book containing this item. |
| `pricing` | `dict` | Yes |  |
| `productClassification` | `str` | No | The classification of the product. |
| `productId` | `str` | Yes | The unique identifier for the product associated with the price book item. |
| `productType` | `str` | No | The type of product. |
| `recurringBillingTerms` | `str` | No | The terms of recurring billing for the price book item. |
| `sku` | `str` | No | The stock keeping unit (SKU) of the price book item. |
| `status` | `str` | No | The current status of the price book item. |
| `taxCategory` | `str` | No | The tax category of the price book item. |
| `updatedAt` | `str` | No | The date and time when the price book item was last updated, in ISO 8601 format. |
| `url` | `str` | No | A URL associated with the price book item. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PriceBooksPriceBookItem().create({
    "price_book_id": 1,  # int
    "customProperties": {},  # dict
    "id": "example_id",  # str
    "pricing": {},  # dict
    "productId": "example_productId",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PriceBooksPriceBookItem().load({"id": 1, "price_book_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PriceBooksPriceBookItem().update({
    "id": 1,
    "price_book_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriceBooksPriceBookItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriceBooksPriceBookValidateEntity

```python
price_books_price_book_validate = client.PriceBooksPriceBookValidate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | An array of ErrorDetail objects providing information about any errors encountered during validation. |
| `isValid` | `bool` | Yes | A boolean indicating whether the price book is valid. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PriceBooksPriceBookValidate().create({
    "price_book_id": 1,  # int
    "errors": [],  # list
    "isValid": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriceBooksPriceBookValidateEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = HubspotCommerceSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

