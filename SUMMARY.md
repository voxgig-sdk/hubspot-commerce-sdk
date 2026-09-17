# HubSpot Commerce API

HubSpot Commerce API, merged from the vendor&#39;s per-API OpenAPI documents.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 24 entities and 49 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Advanced](docs/api/advanced.html)

Results: accepted.

SDK operations: `create`.

### [Basic](docs/api/basic.html)

Results: No content.

SDK operations: `remove`.

### [Batch](docs/api/batch.html)

Results: No content.

SDK operations: `create`.

### [Contract](docs/api/contract.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `addressTypesToCollect`: An array indicating the types of addresses to collect. Valid values include &#39;BILLING_ADDRESS&#39; and &#39;SHIPPING_ADDRESS&#39;.
- `allTransactionsFeeName`: The name of the fee applied to all transactions.
- `allTransactionsFeePercentage`: The percentage of the fee applied to all transactions.
- `allowedPaymentMethods`: An array of allowed payment methods. Valid values include &#39;CREDIT_OR_DEBIT_CARD&#39;, &#39;ACH&#39;, &#39;SEPA&#39;, &#39;BACS&#39;, &#39;PADS&#39;, &#39;AFFIRM&#39;, and &#39;KLARNA&#39;.
- `annualContractValue`: The annual value of the contract.

### [ContractsContract](docs/api/contracts_contract.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `addressTypesToCollect`: An array indicating the types of addresses to collect. Valid values include &#39;BILLING_ADDRESS&#39; and &#39;SHIPPING_ADDRESS&#39;.
- `allTransactionsFeeName`: The name of the fee applied to all transactions.
- `allTransactionsFeePercentage`: The percentage of the fee applied to all transactions.
- `allowedPaymentMethods`: An array of allowed payment methods. Valid values include &#39;CREDIT_OR_DEBIT_CARD&#39;, &#39;ACH&#39;, &#39;SEPA&#39;, &#39;BACS&#39;, &#39;PADS&#39;, &#39;AFFIRM&#39;, and &#39;KLARNA&#39;.
- `annualContractValue`: The annual value of the contract.

### [ContractsContractChange](docs/api/contracts_contract_change.html)

Results: successful operation.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `contractId`: The unique identifier of the contract associated with this change.
- `createdAt`: The date and time when the contract change was created, in ISO 8601 format.
- `deltaLineItems`: An array of line items that represent the difference resulting from the contract change.
- `effectiveDate`: The date when the contract change becomes effective, in YYYY-MM-DD format.
- `id`: The unique identifier for the contract change.

### [ContractsContractChangePreview](docs/api/contracts_contract_change_preview.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `deltaLineItems`: An array of LineItem objects representing the changes in line items compared to the current state of the contract.
- `proposedLineItems`: An array of LineItem objects representing the proposed state of line items after the changes are applied.

### [ContractsQuote](docs/api/contracts_quote.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `dealId`: The unique identifier for the deal associated with the quote.
- `dealPipeline`: The identifier of the pipeline in which the deal is located.
- `dealStage`: The identifier of the stage within the pipeline that the deal is currently in.
- `name`: The name of the line item.
- `quoteTemplateId`: The unique identifier of the quote template to be used for creating the renewal quote.

### [Item](docs/api/item.html)

Results: No content.

SDK operations: `remove`.

### [PaymentLink](docs/api/payment_link.html)

Results: successful operation.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `acceptedPaymentMethods`: An array of accepted payment methods for the payment link. Valid values include &#39;CREDIT_OR_DEBIT_CARD&#39;, &#39;ACH&#39;, &#39;SEPA&#39;, &#39;BACS&#39;, and &#39;PADS&#39;.
- `additionalFormFields`: An array of additional form fields included in the payment link.
- `archived`: A boolean indicating whether the payment link is archived.
- `archivedAt`: The date and time when the payment link was archived, in ISO 8601 format.
- `automatedSalesTaxEnabled`: A boolean indicating whether automated sales tax is enabled for the payment link.

### [PaymentMethodsCommercePaymentMethodSettingsPublic](docs/api/payment_methods_commerce_payment_method_settings_public.html)

Results: successful operation.

SDK operations: `list`, `update`.

Key fields to recognise:

- `activeCurrencies`: A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. Valid values are tied to the Multicurrency options available on the account.
- `commercePaymentMethod`: The type of payment method. Valid values include &#39;CASH&#39;, &#39;CHECK&#39;, &#39;WIRE_TRANSFER&#39;, &#39;CARD&#39;, &#39;ACH&#39;, &#39;SEPA&#39;, &#39;BACS&#39;, &#39;PADS&#39;, &#39;KLARNA&#39;, &#39;AFFIRM&#39;, and &#39;OTHER&#39;.
- `isDefaultOn`: A boolean indicating whether this payment method is set as the default option.
- `paymentMethodSettings`: A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.
- `paymentMethodUpdates`: An array of updates to be applied to commerce payment methods.

### [PaymentsActionResponseWithSingleResultSimplePublicObject](docs/api/payments_action_response_with_single_result_simple_public_object.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `category`: A string indicating the category of the error.
- `context`: An object containing additional context about the error condition, where keys are context names and values are arrays of strings.
- `errors`: An array of StandardError objects providing details about any errors that occurred.
- `id`: A string that uniquely identifies this specific error instance.
- `links`: A map of link names to associated URIs, providing additional information or resources related to the action.

### [PaymentsCreateManualPaymentPublic](docs/api/payments_create_manual_payment_public.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `associations`: An array of associations related to the payment, where each item is an AssociationPublicRequest object.
- `currencyCode`: The currency code for the payment, represented as a string.
- `customerEmail`: The email address of the customer making the payment, represented as a string.
- `id`: The unique identifier for the created manual payment, represented as a string.
- `paymentAmount`: The amount of the payment, represented as a number.

### [PaymentsSettingsGetBillingSettingsPublic](docs/api/payments_settings_get_billing_settings_public.html)

Results: successful operation.

SDK operations: `load`, `update`.

Key fields to recognise:

- `accountGoogleAnalyticsEnabled`: Indicates whether Google Analytics tracking is enabled for the account. A boolean value.
- `checkoutPrefillEnabled`: Indicates whether checkout fields should be prefilled. A boolean value.
- `collectFullBillingAddress`: Indicates whether the full billing address should be collected. A boolean value.
- `collectPaymentMethodOnFile`: Indicates whether a payment method should be kept on file. A boolean value.
- `defaultFromEmailAddress`: The default email address used for sending communications. A string value.

### [PaymentsSettingsGetCheckoutFeesPublic](docs/api/payments_settings_get_checkout_fees_public.html)

Results: successful operation.

SDK operations: `list`, `update`.

Key fields to recognise:

- `appliesToPaymentType`: The type of payment to which this fee applies, represented as a string.
- `checkoutFees`: An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.
- `feeValue`: The numerical value of the fee, indicating the amount to be charged.
- `feeValueType`: The type of the fee value, represented as a string, which defines how the fee value is interpreted (for example, as a percentage or a fixed amount).
- `id`: The unique identifier for this checkout fee configuration.

### [PaymentsSettingsGetPolicySettingsPublic](docs/api/payments_settings_get_policy_settings_public.html)

Results: successful operation.

SDK operations: `load`, `update`.

Key fields to recognise:

- `acknowledgementRequired`: A boolean indicating whether an acknowledgement is required for the policy.
- `cancellationPolicyText`: A string containing the text of the cancellation policy.
- `customPolicyEnabled`: A boolean indicating whether a custom policy is enabled.
- `refundPolicyText`: A string containing the text of the refund policy.
- `termsOfServiceUrl`: A string representing the URL of the terms of service.

### [PaymentsSettingsGetShippingSettingsPublic](docs/api/payments_settings_get_shipping_settings_public.html)

Results: successful operation.

SDK operations: `list`, `update`.

Key fields to recognise:

- `collectShippingAddressByDefault`: A boolean indicating whether the shipping address is collected by default.
- `countriesShippedTo`: An array of strings representing the list of countries to which shipping is available. Two digit ISO country codes are used.

### [PaymentsaccountsPaymentAccountView](docs/api/paymentsaccounts_payment_account_view.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `canPayout`: A boolean indicating whether the account is capable of making payouts.
- `canTransact`: A boolean indicating whether the account is capable of processing transactions.
- `createdAt`: The date and time when the payment account was created, in ISO 8601 format.
- `eligibleProcessorTypes`: An array of processor types that the account is eligible to use. Valid values include &#39;HS_PAYMENTS&#39;, and &#39;BYO_STRIPE&#39;.
- `enrollmentState`: The current enrollment state of the payment account. Valid values include &#39;NOT_STARTED&#39;, &#39;IN_PROGRESS&#39;, &#39;IN_UNDERWRITING&#39;, &#39;ACTIVE&#39;, &#39;SUSPENDED&#39;, &#39;REJECTED&#39;, &#39;OPTED_OUT&#39;, and &#39;DISCONNECTED&#39;.

### [PriceBook](docs/api/price_book.html)

Results: successful operation.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archived`: A boolean indicating whether this price book is archived.
- `archivedAt`: The date and time when this price book was archived.
- `autoAssignmentEnabled`: Indicates whether auto-assignment is enabled for the price book. A boolean value.
- `countOfIncludedProducts`: The number of products included in this price book.
- `createdAt`: The date and time when this price book was created.

### [PriceBooksBatchResponsePriceBookItem](docs/api/price_books_batch_response_price_book_item.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch operation was completed, in ISO 8601 format.
- `inputs`: An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book.
- `links`: A map of link names to associated URIs providing additional information or actions related to the batch operation.
- `requestedAt`: The date and time when the batch operation was requested, in ISO 8601 format.
- `results`: An array of PriceBookItemResponse objects representing the individual results of the batch operation.

### [PriceBooksCollectionResponsePriceBookItemResponseForward](docs/api/price_books_collection_response_price_book_item_response_forward.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `archived`: A boolean indicating whether the price book item is archived.
- `archivedAt`: The date and time when the price book item was archived, in ISO 8601 format.
- `billingFrequency`: The frequency at which billing occurs for the price book item. Valid values include &#39;annually&#39;, &#39;biweekly&#39;, &#39;monthly&#39;, &#39;one_time&#39;, &#39;per_five_years&#39;, &#39;per_four_years&#39;, &#39;per_six_months&#39;, &#39;per_three_years&#39;, &#39;per_two_years&#39;, &#39;quarterly&#39;, and &#39;weekly&#39;.
- `billingPeriod`: The billing period for the price book item.
- `costOfGoodsSold`: The cost of goods sold for the price book item.

### [PriceBooksPriceBook](docs/api/price_books_price_book.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `archived`: A boolean indicating whether this price book is archived.
- `archivedAt`: The date and time when this price book was archived.
- `autoAssignmentEnabled`: Indicates whether auto-assignment is enabled for the price book. A boolean value.
- `countOfIncludedProducts`: The number of products included in this price book.
- `createdAt`: The date and time when this price book was created.

### [PriceBooksPriceBookItem](docs/api/price_books_price_book_item.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `archived`: A boolean indicating whether the price book item is archived.
- `archivedAt`: The date and time when the price book item was archived, in ISO 8601 format.
- `billingFrequency`: The frequency at which billing occurs for the price book item. Valid values include &#39;annually&#39;, &#39;biweekly&#39;, &#39;monthly&#39;, &#39;one_time&#39;, &#39;per_five_years&#39;, &#39;per_four_years&#39;, &#39;per_six_months&#39;, &#39;per_three_years&#39;, &#39;per_two_years&#39;, &#39;quarterly&#39;, and &#39;weekly&#39;.
- `billingPeriod`: The billing period for the price book item.
- `costOfGoodsSold`: The cost of goods sold for the price book item.

### [PriceBooksPriceBookValidate](docs/api/price_books_price_book_validate.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `errors`: An array of ErrorDetail objects providing information about any errors encountered during validation.
- `isValid`: A boolean indicating whether the price book is valid.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Advanced](docs/api/advanced.html) | `create` | `POST /commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /commerce/payment-links/2026-09/payment-links/{paymentLinkId}` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /commerce/price-books/2026-09/price-books/{priceBookId}` | Required |
| [Batch](docs/api/batch.html) | `create` | `POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive` | Required |
| [Contract](docs/api/contract.html) | `create` | `POST /commerce/contracts/2027-03-beta/contracts` | Not required |
| [Contract](docs/api/contract.html) | `load` | `GET /commerce/contracts/2027-03-beta/contracts/{contractId}` | Not required |
| [Contract](docs/api/contract.html) | `update` | `PATCH /commerce/contracts/2027-03-beta/contracts/{contractId}` | Not required |
| [ContractsContract](docs/api/contracts_contract.html) | `create` | `POST /commerce/contracts/2027-03-beta/contracts/{contractId}/terminate` | Not required |
| [ContractsContractChange](docs/api/contracts_contract_change.html) | `create` | `POST /commerce/contracts/2027-03-beta/changes/{changeId}/accept` | Not required |
| [ContractsContractChange](docs/api/contracts_contract_change.html) | `create` | `POST /commerce/contracts/2027-03-beta/changes/{changeId}/cancel` | Not required |
| [ContractsContractChange](docs/api/contracts_contract_change.html) | `create` | `POST /commerce/contracts/2027-03-beta/contracts/{contractId}/changes` | Not required |
| [ContractsContractChange](docs/api/contracts_contract_change.html) | `create` | `POST /commerce/contracts/2027-03-beta/changes` | Not required |
| [ContractsContractChange](docs/api/contracts_contract_change.html) | `list` | `GET /commerce/contracts/2027-03-beta/contracts/{contractId}/changes` | Not required |
| [ContractsContractChange](docs/api/contracts_contract_change.html) | `load` | `GET /commerce/contracts/2027-03-beta/changes/{changeId}` | Not required |
| [ContractsContractChange](docs/api/contracts_contract_change.html) | `update` | `PATCH /commerce/contracts/2027-03-beta/changes/{changeId}` | Not required |
| [ContractsContractChangePreview](docs/api/contracts_contract_change_preview.html) | `create` | `POST /commerce/contracts/2027-03-beta/changes/preview` | Not required |
| [ContractsQuote](docs/api/contracts_quote.html) | `create` | `POST /commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes` | Not required |
| [Item](docs/api/item.html) | `remove` | `DELETE /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}` | Required |
| [PaymentLink](docs/api/payment_link.html) | `create` | `POST /commerce/payment-links/2026-09/payment-links` | Required |
| [PaymentLink](docs/api/payment_link.html) | `list` | `GET /commerce/payment-links/2026-09/payment-links` | Required |
| [PaymentLink](docs/api/payment_link.html) | `load` | `GET /commerce/payment-links/2026-09/payment-links/{paymentLinkId}` | Required |
| [PaymentLink](docs/api/payment_link.html) | `update` | `PATCH /commerce/payment-links/2026-09/payment-links/{paymentLinkId}` | Required |
| [PaymentMethodsCommercePaymentMethodSettingsPublic](docs/api/payment_methods_commerce_payment_method_settings_public.html) | `list` | `GET /commerce/payment-methods/2027-03-beta/settings` | Required |
| [PaymentMethodsCommercePaymentMethodSettingsPublic](docs/api/payment_methods_commerce_payment_method_settings_public.html) | `update` | `PATCH /commerce/payment-methods/2027-03-beta/settings` | Not required |
| [PaymentsActionResponseWithSingleResultSimplePublicObject](docs/api/payments_action_response_with_single_result_simple_public_object.html) | `list` | `GET /commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status` | Required |
| [PaymentsCreateManualPaymentPublic](docs/api/payments_create_manual_payment_public.html) | `create` | `POST /commerce/payments/2027-03-beta/manual-payments` | Required |
| [PaymentsSettingsGetBillingSettingsPublic](docs/api/payments_settings_get_billing_settings_public.html) | `load` | `GET /commerce/payments-settings/2027-03-beta/payments-settings/billing` | Required |
| [PaymentsSettingsGetBillingSettingsPublic](docs/api/payments_settings_get_billing_settings_public.html) | `update` | `PATCH /commerce/payments-settings/2027-03-beta/payments-settings/billing` | Required |
| [PaymentsSettingsGetCheckoutFeesPublic](docs/api/payments_settings_get_checkout_fees_public.html) | `list` | `GET /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees` | Required |
| [PaymentsSettingsGetCheckoutFeesPublic](docs/api/payments_settings_get_checkout_fees_public.html) | `update` | `PATCH /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees` | Required |
| [PaymentsSettingsGetPolicySettingsPublic](docs/api/payments_settings_get_policy_settings_public.html) | `load` | `GET /commerce/payments-settings/2027-03-beta/payments-settings/policy` | Required |
| [PaymentsSettingsGetPolicySettingsPublic](docs/api/payments_settings_get_policy_settings_public.html) | `update` | `PATCH /commerce/payments-settings/2027-03-beta/payments-settings/policy` | Required |
| [PaymentsSettingsGetShippingSettingsPublic](docs/api/payments_settings_get_shipping_settings_public.html) | `list` | `GET /commerce/payments-settings/2027-03-beta/payments-settings/shipping` | Required |
| [PaymentsSettingsGetShippingSettingsPublic](docs/api/payments_settings_get_shipping_settings_public.html) | `update` | `PATCH /commerce/payments-settings/2027-03-beta/payments-settings/shipping` | Required |
| [PaymentsaccountsPaymentAccountView](docs/api/paymentsaccounts_payment_account_view.html) | `list` | `GET /commerce/payment-accounts/2026-09/status` | Required |
| [PriceBook](docs/api/price_book.html) | `create` | `POST /commerce/price-books/2026-09/price-books` | Required |
| [PriceBook](docs/api/price_book.html) | `list` | `GET /commerce/price-books/2026-09/price-books` | Required |
| [PriceBook](docs/api/price_book.html) | `load` | `GET /commerce/price-books/2026-09/price-books/{priceBookId}` | Required |
| [PriceBook](docs/api/price_book.html) | `update` | `PATCH /commerce/price-books/2026-09/price-books/{priceBookId}` | Required |
| [PriceBooksBatchResponsePriceBookItem](docs/api/price_books_batch_response_price_book_item.html) | `create` | `POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create` | Required |
| [PriceBooksBatchResponsePriceBookItem](docs/api/price_books_batch_response_price_book_item.html) | `create` | `POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update` | Required |
| [PriceBooksCollectionResponsePriceBookItemResponseForward](docs/api/price_books_collection_response_price_book_item_response_forward.html) | `list` | `GET /commerce/price-books/2026-09/price-books/{priceBookId}/items` | Required |
| [PriceBooksPriceBook](docs/api/price_books_price_book.html) | `create` | `POST /commerce/price-books/2026-09/price-books/{priceBookId}/activate` | Required |
| [PriceBooksPriceBook](docs/api/price_books_price_book.html) | `create` | `POST /commerce/price-books/2026-09/price-books/{priceBookId}/deactivate` | Required |
| [PriceBooksPriceBookItem](docs/api/price_books_price_book_item.html) | `create` | `POST /commerce/price-books/2026-09/price-books/{priceBookId}/items` | Required |
| [PriceBooksPriceBookItem](docs/api/price_books_price_book_item.html) | `load` | `GET /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}` | Required |
| [PriceBooksPriceBookItem](docs/api/price_books_price_book_item.html) | `update` | `PATCH /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}` | Required |
| [PriceBooksPriceBookValidate](docs/api/price_books_price_book_validate.html) | `create` | `POST /commerce/price-books/2026-09/price-books/{priceBookId}/validate` | Required |

## Connect to the API

- API server: `https://api.hubapi.com`

The default credential is sent in the `hapikey` query.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `hubspot-commerce_list`: List records for an entity. Supported entities: `contracts_contract_change`, `payment_link`, `payment_methods_commerce_payment_method_settings_public`, `payments_action_response_with_single_result_simple_public_object`, `payments_settings_get_checkout_fees_public`, `payments_settings_get_shipping_settings_public`, `paymentsaccounts_payment_account_view`, `price_book`, `price_books_collection_response_price_book_item_response_forward`.
- `hubspot-commerce_load`: Load one record for an entity. Supported entities: `contract`, `contracts_contract_change`, `payment_link`, `payments_settings_get_billing_settings_public`, `payments_settings_get_policy_settings_public`, `price_book`, `price_books_price_book_item`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

