<?php
declare(strict_types=1);

// HubspotCommerce SDK configuration

class HubspotCommerceConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "HubspotCommerce",
                "slug" => "hubspot-commerce",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "debug" => [
          'options' => [
            'active' => false,
            'max' => 100,
            'redact' => [
              'authorization',
              'cookie',
              'set-cookie',
              'api-key',
              'apikey',
              'x-api-key',
              'idempotency-key',
            ],
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'onEntry' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "idempotency" => [
          'options' => [
            'active' => false,
            'header' => 'Idempotency-Key',
            'methods' => [
              'POST',
              'PUT',
              'PATCH',
              'DELETE',
            ],
            'ops' => [
              'create',
              'update',
              'remove',
            ],
          ],
          'optspec' => [
            'keygen' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "metrics" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "paging" => [
          'options' => [
            'active' => false,
            'afterVar' => 'after',
            'cursorParam' => 'cursor',
            'firstVar' => 'first',
            'limitParam' => 'limit',
            'pageParam' => 'page',
            'startPage' => 1,
          ],
          'optspec' => [
            'limit' => '`$NUMBER`',
            'ops' => '`$LIST`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.hubapi.com",
                "auth" => [
                    "prefix" => "",
                    "in" => "query",
                    "name" => "hapikey",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "advanced" => [],
                    "basic" => [],
                    "batch" => [],
                    "contract" => [],
                    "contracts_contract" => [],
                    "contracts_contract_change" => [],
                    "contracts_contract_change_preview" => [],
                    "contracts_contract_change_summary" => [],
                    "contracts_quote" => [],
                    "item" => [],
                    "payment_link" => [],
                    "payment_methods_commerce_payment_method_settings_public" => [],
                    "payments_action_response_with_single_result_simple_public_object" => [],
                    "payments_create_manual_payment_public" => [],
                    "payments_settings_get_billing_settings_public" => [],
                    "payments_settings_get_checkout_fees_public" => [],
                    "payments_settings_get_policy_settings_public" => [],
                    "payments_settings_get_shipping_settings_public" => [],
                    "paymentsaccounts_payment_account_view" => [],
                    "price_book" => [],
                    "price_books_batch_response_price_book_item" => [],
                    "price_books_collection_response_price_book_item_response_forward" => [],
                    "price_books_price_book" => [],
                    "price_books_price_book_item" => [],
                    "price_books_price_book_validate" => [],
                ],
            ],
            "entity" => [
        'advanced' => [
          'fields' => [],
          'name' => 'advanced',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'var' => 'payment_crm_object_id',
                    ],
                    [
                      'lit' => 'actions',
                    ],
                    [
                      'lit' => 'retry',
                    ],
                    [
                      'lit' => 'async',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments',
                    '2027-03-beta',
                    '{payment_crm_object_id}',
                    'actions',
                    'retry',
                    'async',
                  ],
                  'rename' => [
                    'param' => [
                      'paymentCrmObjectId' => 'payment_crm_object_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'payment_crm_object_id',
                        'orig' => 'payment_crm_object_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'payment_crm_object_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'basic' => [
          'fields' => [],
          'name' => 'basic',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'checkout-fees',
                    ],
                    [
                      'var' => 'checkout_fee_id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'checkout-fees',
                    '{checkout_fee_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'checkoutFeeId' => 'checkout_fee_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'checkout_fee_id',
                        'orig' => 'checkout_fee_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'checkout_fee_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/commerce/payment-links/2026-09/payment-links/{paymentLinkId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                    [
                      'var' => 'payment_link_id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payment-links',
                    '2026-09',
                    'payment-links',
                    '{payment_link_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'paymentLinkId' => 'payment_link_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'payment_link_id',
                        'orig' => 'payment_link_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'payment_link_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'price_book_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.payment_link',
              ],
              [
                '$.main.kit.entity.price_book',
              ],
            ],
          ],
        ],
        'batch' => [
          'fields' => [],
          'name' => 'batch',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'items',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'archive',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'items',
                    'batch',
                    'archive',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'archive',
                    'exist' => [
                      'price_book_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.price_book',
              ],
            ],
          ],
        ],
        'contract' => [
          'fields' => [
            [
              'name' => 'addressTypesToCollect',
              'title' => 'Address Types To Collect',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array indicating the types of addresses to collect.',
            ],
            [
              'name' => 'allTransactionsFeeName',
              'title' => 'All Transactions Fee Name',
              'type' => '`$STRING`',
              'short' => 'The name of the fee applied to all transactions.',
            ],
            [
              'name' => 'allTransactionsFeePercentage',
              'title' => 'All Transactions Fee Percentage',
              'type' => '`$NUMBER`',
              'short' => 'The percentage of the fee applied to all transactions.',
            ],
            [
              'name' => 'allowedPaymentMethods',
              'title' => 'Allowed Payment Methods',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of allowed payment methods.',
            ],
            [
              'name' => 'annualContractValue',
              'title' => 'Annual Contract Value',
              'type' => '`$NUMBER`',
              'short' => 'The annual value of the contract.',
            ],
            [
              'name' => 'automatedTaxesEnabled',
              'title' => 'Automated Taxes Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether automated taxes are enabled for the contract.',
            ],
            [
              'name' => 'billingAddress',
              'title' => 'Billing Address',
              'type' => '`$OBJECT`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'An object representing the billing address for the contract.',
            ],
            [
              'name' => 'billingCompanyId',
              'title' => 'Billing Company Id',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The unique identifier of the billing company associated with the contract.',
            ],
            [
              'name' => 'billingContactId',
              'title' => 'Billing Contact Id',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The unique identifier of the billing contact associated with the contract.',
            ],
            [
              'name' => 'billingStartDateOverride',
              'title' => 'Billing Start Date Override',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The date to override the billing start date, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'businessUnitId',
              'title' => 'Business Unit Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the business unit associated with the contract.',
            ],
            [
              'name' => 'cardFeeName',
              'title' => 'Card Fee Name',
              'type' => '`$STRING`',
              'short' => 'The name of the fee applied to card transactions.',
            ],
            [
              'name' => 'cardFeePercentage',
              'title' => 'Card Fee Percentage',
              'type' => '`$NUMBER`',
              'short' => 'The percentage of the fee applied to card transactions.',
            ],
            [
              'name' => 'collectionProcess',
              'title' => 'Collection Process',
              'type' => '`$STRING`',
              'short' => 'The process for collecting payments.',
            ],
            [
              'name' => 'contractEffectiveDate',
              'title' => 'Contract Effective Date',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The date when the contract becomes effective, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'contractSourceId',
              'title' => 'Contract Source Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the source of the contract.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the contract was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'currencyCode',
              'title' => 'Currency Code',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The currency code associated with the contract, represented as a string.',
            ],
            [
              'name' => 'currentAnnualRecurringRevenue',
              'title' => 'Current Annual Recurring Revenue',
              'type' => '`$NUMBER`',
              'short' => 'The current annual recurring revenue for the contract.',
            ],
            [
              'name' => 'currentMonthlyRecurringRevenue',
              'title' => 'Current Monthly Recurring Revenue',
              'type' => '`$NUMBER`',
              'short' => 'The current monthly recurring revenue for the contract.',
            ],
            [
              'name' => 'customProperties',
              'title' => 'Custom Properties',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A map of custom property names to their values.',
            ],
            [
              'name' => 'dealId',
              'title' => 'Deal Id',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The unique identifier of the deal associated with the contract.',
            ],
            [
              'name' => 'directDebitFeeName',
              'title' => 'Direct Debit Fee Name',
              'type' => '`$STRING`',
              'short' => 'The name of the fee applied to direct debit transactions.',
            ],
            [
              'name' => 'directDebitFeePercentage',
              'title' => 'Direct Debit Fee Percentage',
              'type' => '`$NUMBER`',
              'short' => 'The percentage of the fee applied to direct debit transactions.',
            ],
            [
              'name' => 'discountCode',
              'title' => 'Discount Code',
              'type' => '`$STRING`',
              'short' => 'The discount code applied to the contract.',
            ],
            [
              'name' => 'endDate',
              'title' => 'End Date',
              'type' => '`$STRING`',
              'short' => 'The end date of the contract, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'externalPaymentMethodReferenceId',
              'title' => 'External Payment Method Reference Id',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The external reference ID for the payment method.',
            ],
            [
              'name' => 'hubspotBillingEnabled',
              'title' => 'Hubspot Billing Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether HubSpot billing is enabled for the contract.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the contract.',
            ],
            [
              'name' => 'language',
              'title' => 'Language',
              'type' => '`$STRING`',
              'short' => 'The language associated with the contract.',
            ],
            [
              'name' => 'lineItems',
              'title' => 'Line Items',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of line items included in the contract.',
            ],
            [
              'name' => 'locale',
              'title' => 'Locale',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The locale associated with the contract.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The name of the contract.',
            ],
            [
              'name' => 'netPaymentTerms',
              'title' => 'Net Payment Terms',
              'type' => '`$INTEGER`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The net payment terms for the contract, represented as an integer.',
              'format' => 'int32',
            ],
            [
              'name' => 'ownerId',
              'title' => 'Owner Id',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object representing the ID of the contract owner.',
            ],
            [
              'name' => 'paymentEnabled',
              'title' => 'Payment Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether payment is enabled for the contract.',
            ],
            [
              'name' => 'paymentMethod',
              'title' => 'Payment Method',
              'type' => '`$STRING`',
              'short' => 'The payment method used for the contract.',
            ],
            [
              'name' => 'poNumber',
              'title' => 'Po Number',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The purchase order number associated with the contract.',
            ],
            [
              'name' => 'preTerminationContractValue',
              'title' => 'Pre Termination Contract Value',
              'type' => '`$NUMBER`',
              'short' => 'The value of the contract before termination.',
            ],
            [
              'name' => 'renewalContractId',
              'title' => 'Renewal Contract Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the renewal contract.',
            ],
            [
              'name' => 'renewalDate',
              'title' => 'Renewal Date',
              'type' => '`$STRING`',
              'short' => 'The date when the contract is set to renew, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'sellerCompanyAddress',
              'title' => 'Seller Company Address',
              'type' => '`$OBJECT`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'An object representing the address of the seller\'s company.',
            ],
            [
              'name' => 'sellerCompanyDomain',
              'title' => 'Seller Company Domain',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object representing the domain of the seller\'s company.',
            ],
            [
              'name' => 'sellerCompanyName',
              'title' => 'Seller Company Name',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The name of the seller\'s company.',
            ],
            [
              'name' => 'sellerEmail',
              'title' => 'Seller Email',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The email address of the seller.',
            ],
            [
              'name' => 'sellerFirstName',
              'title' => 'Seller First Name',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The first name of the seller.',
            ],
            [
              'name' => 'sellerLastName',
              'title' => 'Seller Last Name',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The last name of the seller.',
            ],
            [
              'name' => 'sellerPhone',
              'title' => 'Seller Phone',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object representing the phone number of the seller.',
            ],
            [
              'name' => 'sellerPhoneNumber',
              'title' => 'Seller Phone Number',
              'type' => '`$STRING`',
              'short' => 'The phone number of the seller.',
            ],
            [
              'name' => 'startDate',
              'title' => 'Start Date',
              'type' => '`$STRING`',
              'short' => 'The start date of the contract, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the contract.',
            ],
            [
              'name' => 'storePaymentMethodAtCheckout',
              'title' => 'Store Payment Method At Checkout',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether the payment method should be stored at checkout.',
            ],
            [
              'name' => 'terminationDate',
              'title' => 'Termination Date',
              'type' => '`$STRING`',
              'short' => 'The date when the contract is terminated, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'totalBilledAmount',
              'title' => 'Total Billed Amount',
              'type' => '`$NUMBER`',
              'short' => 'The total amount billed under the contract.',
            ],
            [
              'name' => 'totalBilledAmountPreTax',
              'title' => 'Total Billed Amount Pre Tax',
              'type' => '`$NUMBER`',
              'short' => 'The total amount billed under the contract before tax.',
            ],
            [
              'name' => 'totalCollectedFees',
              'title' => 'Total Collected Fees',
              'type' => '`$NUMBER`',
              'short' => 'The total amount of fees collected under the contract.',
            ],
            [
              'name' => 'totalCollectedTaxes',
              'title' => 'Total Collected Taxes',
              'type' => '`$NUMBER`',
              'short' => 'The total amount of taxes collected under the contract.',
            ],
            [
              'name' => 'totalContractValue',
              'title' => 'Total Contract Value',
              'type' => '`$NUMBER`',
              'short' => 'The total value of the contract.',
            ],
            [
              'name' => 'totalPaidAmount',
              'title' => 'Total Paid Amount',
              'type' => '`$NUMBER`',
              'short' => 'The total amount paid under the contract.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the contract was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'contract',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/contracts/2027-03-beta/contracts',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'contracts',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/contracts/2027-03-beta/contracts/{contractId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'contracts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'contractId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'contract_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/contracts/2027-03-beta/contracts/{contractId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'contracts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'contractId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'contract_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'contracts_contract' => [
          'fields' => [
            [
              'name' => 'addressTypesToCollect',
              'title' => 'Address Types To Collect',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array indicating the types of addresses to collect.',
            ],
            [
              'name' => 'allTransactionsFeeName',
              'title' => 'All Transactions Fee Name',
              'type' => '`$STRING`',
              'short' => 'The name of the fee applied to all transactions.',
            ],
            [
              'name' => 'allTransactionsFeePercentage',
              'title' => 'All Transactions Fee Percentage',
              'type' => '`$NUMBER`',
              'short' => 'The percentage of the fee applied to all transactions.',
            ],
            [
              'name' => 'allowedPaymentMethods',
              'title' => 'Allowed Payment Methods',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of allowed payment methods.',
            ],
            [
              'name' => 'annualContractValue',
              'title' => 'Annual Contract Value',
              'type' => '`$NUMBER`',
              'short' => 'The annual value of the contract.',
            ],
            [
              'name' => 'automatedTaxesEnabled',
              'title' => 'Automated Taxes Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether automated taxes are enabled for the contract.',
            ],
            [
              'name' => 'billingAddress',
              'title' => 'Billing Address',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'billingCompanyId',
              'title' => 'Billing Company Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the billing company associated with the contract.',
            ],
            [
              'name' => 'billingContactId',
              'title' => 'Billing Contact Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the billing contact associated with the contract.',
            ],
            [
              'name' => 'billingStartDateOverride',
              'title' => 'Billing Start Date Override',
              'type' => '`$STRING`',
              'short' => 'The date to override the billing start date, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'businessUnitId',
              'title' => 'Business Unit Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the business unit associated with the contract.',
            ],
            [
              'name' => 'cardFeeName',
              'title' => 'Card Fee Name',
              'type' => '`$STRING`',
              'short' => 'The name of the fee applied to card transactions.',
            ],
            [
              'name' => 'cardFeePercentage',
              'title' => 'Card Fee Percentage',
              'type' => '`$NUMBER`',
              'short' => 'The percentage of the fee applied to card transactions.',
            ],
            [
              'name' => 'collectionProcess',
              'title' => 'Collection Process',
              'type' => '`$STRING`',
              'short' => 'The process for collecting payments.',
            ],
            [
              'name' => 'contractEffectiveDate',
              'title' => 'Contract Effective Date',
              'type' => '`$STRING`',
              'short' => 'The date when the contract becomes effective, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'contractSourceId',
              'title' => 'Contract Source Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the source of the contract.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the contract was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'currencyCode',
              'title' => 'Currency Code',
              'type' => '`$STRING`',
              'short' => 'The currency code associated with the contract, represented as a string.',
            ],
            [
              'name' => 'currentAnnualRecurringRevenue',
              'title' => 'Current Annual Recurring Revenue',
              'type' => '`$NUMBER`',
              'short' => 'The current annual recurring revenue for the contract.',
            ],
            [
              'name' => 'currentMonthlyRecurringRevenue',
              'title' => 'Current Monthly Recurring Revenue',
              'type' => '`$NUMBER`',
              'short' => 'The current monthly recurring revenue for the contract.',
            ],
            [
              'name' => 'customProperties',
              'title' => 'Custom Properties',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'A map of custom property names to their values.',
            ],
            [
              'name' => 'dealId',
              'title' => 'Deal Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the deal associated with the contract.',
            ],
            [
              'name' => 'directDebitFeeName',
              'title' => 'Direct Debit Fee Name',
              'type' => '`$STRING`',
              'short' => 'The name of the fee applied to direct debit transactions.',
            ],
            [
              'name' => 'directDebitFeePercentage',
              'title' => 'Direct Debit Fee Percentage',
              'type' => '`$NUMBER`',
              'short' => 'The percentage of the fee applied to direct debit transactions.',
            ],
            [
              'name' => 'discountCode',
              'title' => 'Discount Code',
              'type' => '`$STRING`',
              'short' => 'The discount code applied to the contract.',
            ],
            [
              'name' => 'endDate',
              'title' => 'End Date',
              'type' => '`$STRING`',
              'short' => 'The end date of the contract, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'externalPaymentMethodReferenceId',
              'title' => 'External Payment Method Reference Id',
              'type' => '`$STRING`',
              'short' => 'The external reference ID for the payment method.',
            ],
            [
              'name' => 'hubspotBillingEnabled',
              'title' => 'Hubspot Billing Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether HubSpot billing is enabled for the contract.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the contract.',
            ],
            [
              'name' => 'language',
              'title' => 'Language',
              'type' => '`$STRING`',
              'short' => 'The language associated with the contract.',
            ],
            [
              'name' => 'lineItems',
              'title' => 'Line Items',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of line items included in the contract.',
            ],
            [
              'name' => 'locale',
              'title' => 'Locale',
              'type' => '`$STRING`',
              'short' => 'The locale associated with the contract.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the contract.',
            ],
            [
              'name' => 'netPaymentTerms',
              'title' => 'Net Payment Terms',
              'type' => '`$INTEGER`',
              'short' => 'The net payment terms for the contract, represented as an integer.',
              'format' => 'int32',
            ],
            [
              'name' => 'paymentEnabled',
              'title' => 'Payment Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether payment is enabled for the contract.',
            ],
            [
              'name' => 'paymentMethod',
              'title' => 'Payment Method',
              'type' => '`$STRING`',
              'short' => 'The payment method used for the contract.',
            ],
            [
              'name' => 'poNumber',
              'title' => 'Po Number',
              'type' => '`$STRING`',
              'short' => 'The purchase order number associated with the contract.',
            ],
            [
              'name' => 'preTerminationContractValue',
              'title' => 'Pre Termination Contract Value',
              'type' => '`$NUMBER`',
              'short' => 'The value of the contract before termination.',
            ],
            [
              'name' => 'renewalContractId',
              'title' => 'Renewal Contract Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the renewal contract.',
            ],
            [
              'name' => 'renewalDate',
              'title' => 'Renewal Date',
              'type' => '`$STRING`',
              'short' => 'The date when the contract is set to renew, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'sellerCompanyAddress',
              'title' => 'Seller Company Address',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'sellerCompanyName',
              'title' => 'Seller Company Name',
              'type' => '`$STRING`',
              'short' => 'The name of the seller\'s company.',
            ],
            [
              'name' => 'sellerEmail',
              'title' => 'Seller Email',
              'type' => '`$STRING`',
              'short' => 'The email address of the seller.',
            ],
            [
              'name' => 'sellerFirstName',
              'title' => 'Seller First Name',
              'type' => '`$STRING`',
              'short' => 'The first name of the seller.',
            ],
            [
              'name' => 'sellerLastName',
              'title' => 'Seller Last Name',
              'type' => '`$STRING`',
              'short' => 'The last name of the seller.',
            ],
            [
              'name' => 'sellerPhoneNumber',
              'title' => 'Seller Phone Number',
              'type' => '`$STRING`',
              'short' => 'The phone number of the seller.',
            ],
            [
              'name' => 'startDate',
              'title' => 'Start Date',
              'type' => '`$STRING`',
              'short' => 'The start date of the contract, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the contract.',
            ],
            [
              'name' => 'storePaymentMethodAtCheckout',
              'title' => 'Store Payment Method At Checkout',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether the payment method should be stored at checkout.',
            ],
            [
              'name' => 'terminationDate',
              'title' => 'Termination Date',
              'type' => '`$STRING`',
              'short' => 'The date when the contract is terminated, in ISO 8601 format.',
              'format' => 'date',
            ],
            [
              'name' => 'totalBilledAmount',
              'title' => 'Total Billed Amount',
              'type' => '`$NUMBER`',
              'short' => 'The total amount billed under the contract.',
            ],
            [
              'name' => 'totalBilledAmountPreTax',
              'title' => 'Total Billed Amount Pre Tax',
              'type' => '`$NUMBER`',
              'short' => 'The total amount billed under the contract before tax.',
            ],
            [
              'name' => 'totalCollectedFees',
              'title' => 'Total Collected Fees',
              'type' => '`$NUMBER`',
              'short' => 'The total amount of fees collected under the contract.',
            ],
            [
              'name' => 'totalCollectedTaxes',
              'title' => 'Total Collected Taxes',
              'type' => '`$NUMBER`',
              'short' => 'The total amount of taxes collected under the contract.',
            ],
            [
              'name' => 'totalContractValue',
              'title' => 'Total Contract Value',
              'type' => '`$NUMBER`',
              'short' => 'The total value of the contract.',
            ],
            [
              'name' => 'totalPaidAmount',
              'title' => 'Total Paid Amount',
              'type' => '`$NUMBER`',
              'short' => 'The total amount paid under the contract.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the contract was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'contracts_contract',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/contracts/2027-03-beta/contracts/{contractId}/terminate',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'var' => 'contract_id',
                    ],
                    [
                      'lit' => 'terminate',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'contracts',
                    '{contract_id}',
                    'terminate',
                  ],
                  'rename' => [
                    'param' => [
                      'contractId' => 'contract_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'contract_id',
                        'orig' => 'contract_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'contract_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.contract',
              ],
            ],
          ],
        ],
        'contracts_contract_change' => [
          'fields' => [
            [
              'name' => 'contractId',
              'title' => 'Contract Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier of the contract associated with this change.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the contract change was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'deltaLineItems',
              'title' => 'Delta Line Items',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of line items that represent the difference resulting from the contract change.',
            ],
            [
              'name' => 'effectiveDate',
              'title' => 'Effective Date',
              'type' => '`$STRING`',
              'short' => 'The date when the contract change becomes effective, in YYYY-MM-DD format.',
              'format' => 'date',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the contract change.',
            ],
            [
              'name' => 'lineItemChanges',
              'title' => 'Line Item Changes',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of changes to line items associated with the contract change.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The name of the contract change.',
            ],
            [
              'name' => 'proposedLineItems',
              'title' => 'Proposed Line Items',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of line items that are proposed as part of the contract change.',
            ],
            [
              'name' => 'prorating',
              'title' => 'Prorating',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether the contract change involves prorating.',
            ],
            [
              'name' => 'quoteId',
              'title' => 'Quote Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the quote associated with this contract change.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the contract change.',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of contract change.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the contract change was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'contracts_contract_change',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/contracts/2027-03-beta/changes/{changeId}/accept',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'changes',
                    ],
                    [
                      'var' => 'change_id',
                    ],
                    [
                      'lit' => 'accept',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'changes',
                    '{change_id}',
                    'accept',
                  ],
                  'rename' => [
                    'param' => [
                      'changeId' => 'change_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'change_id',
                        'orig' => 'change_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'change_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/contracts/2027-03-beta/changes/{changeId}/cancel',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'changes',
                    ],
                    [
                      'var' => 'change_id',
                    ],
                    [
                      'lit' => 'cancel',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'changes',
                    '{change_id}',
                    'cancel',
                  ],
                  'rename' => [
                    'param' => [
                      'changeId' => 'change_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'change_id',
                        'orig' => 'change_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'change_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/contracts/2027-03-beta/contracts/{contractId}/changes',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'var' => 'contract_id',
                    ],
                    [
                      'lit' => 'changes',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'contracts',
                    '{contract_id}',
                    'changes',
                  ],
                  'rename' => [
                    'param' => [
                      'contractId' => 'contract_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'contract_id',
                        'orig' => 'contract_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'contract_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/contracts/2027-03-beta/changes',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'changes',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'changes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/contracts/2027-03-beta/changes/{changeId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'changes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'changes',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'changeId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'change_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/contracts/2027-03-beta/changes/{changeId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'changes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'changes',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'changeId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'change_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.contract',
              ],
            ],
          ],
        ],
        'contracts_contract_change_preview' => [
          'fields' => [
            [
              'name' => 'deltaLineItems',
              'title' => 'Delta Line Items',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of LineItem objects representing the changes in line items compared to the current state of the contract.',
            ],
            [
              'name' => 'proposedLineItems',
              'title' => 'Proposed Line Items',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of LineItem objects representing the proposed state of line items after the changes are applied.',
            ],
          ],
          'name' => 'contracts_contract_change_preview',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/contracts/2027-03-beta/changes/preview',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'changes',
                    ],
                    [
                      'lit' => 'preview',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'changes',
                    'preview',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'contracts_contract_change_summary' => [
          'fields' => [
            [
              'name' => 'contractId',
              'title' => 'Contract Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier of the contract associated with this change.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when this contract change was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'effectiveDate',
              'title' => 'Effective Date',
              'type' => '`$STRING`',
              'short' => 'The date on which this contract change becomes effective, in the format \'YYYY-MM-DD\'.',
              'format' => 'date',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for this contract change.',
            ],
            [
              'name' => 'lineItemChanges',
              'title' => 'Line Item Changes',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of changes made to line items as part of this contract change.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name assigned to this contract change.',
            ],
            [
              'name' => 'prorating',
              'title' => 'Prorating',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the contract change involves prorating.',
            ],
            [
              'name' => 'quoteId',
              'title' => 'Quote Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the quote associated with this contract change, if applicable.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the contract change.',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of contract change, which can be either \'DIRECT\' or \'QUOTE\'.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when this contract change was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'contracts_contract_change_summary',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/contracts/2027-03-beta/contracts/{contractId}/changes',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'var' => 'contract_id',
                    ],
                    [
                      'lit' => 'changes',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'contracts',
                    '{contract_id}',
                    'changes',
                  ],
                  'rename' => [
                    'param' => [
                      'contractId' => 'contract_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.changes`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'contract_id',
                        'orig' => 'contract_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'contract_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.contract',
              ],
            ],
          ],
        ],
        'contracts_quote' => [
          'fields' => [
            [
              'name' => 'dealId',
              'title' => 'Deal Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier of the deal associated with the renewal quote.',
            ],
            [
              'name' => 'dealPipeline',
              'title' => 'Deal Pipeline',
              'type' => '`$STRING`',
              'short' => 'The identifier of the pipeline in which the deal is located.',
            ],
            [
              'name' => 'dealStage',
              'title' => 'Deal Stage',
              'type' => '`$STRING`',
              'short' => 'The identifier of the stage within the pipeline that the deal is currently in.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the renewal quote.',
            ],
            [
              'name' => 'quoteTemplateId',
              'title' => 'Quote Template Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier of the quote template to be used for creating the renewal quote.',
            ],
          ],
          'name' => 'contracts_quote',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'contracts',
                    ],
                    [
                      'var' => 'contract_id',
                    ],
                    [
                      'lit' => 'renewal-quotes',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'contracts',
                    '2027-03-beta',
                    'contracts',
                    '{contract_id}',
                    'renewal-quotes',
                  ],
                  'rename' => [
                    'param' => [
                      'contractId' => 'contract_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'contract_id',
                        'orig' => 'contract_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'contract_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.contract',
              ],
            ],
          ],
        ],
        'item' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'item',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'items',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'items',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                      'priceBookItemId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'price_book_item_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'price_book_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.price_book',
              ],
            ],
          ],
        ],
        'payment_link' => [
          'fields' => [
            [
              'name' => 'acceptedPaymentMethods',
              'title' => 'Accepted Payment Methods',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of accepted payment methods for the payment link.',
            ],
            [
              'name' => 'additionalFormFields',
              'title' => 'Additional Form Fields',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of additional form fields included in the payment link.',
            ],
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the payment link is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the payment link was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'automatedSalesTaxEnabled',
              'title' => 'Automated Sales Tax Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether automated sales tax is enabled for the payment link.',
            ],
            [
              'name' => 'businessUnitId',
              'title' => 'Business Unit Id',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The business unit ID associated with the payment link, represented as a string.',
            ],
            [
              'name' => 'checkoutFeeIds',
              'title' => 'Checkout Fee Ids',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of checkout fee IDs associated with the payment link.',
            ],
            [
              'name' => 'collectFullBillingAddress',
              'title' => 'Collect Full Billing Address',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether to collect the full billing address during checkout.',
            ],
            [
              'name' => 'collectShippingAddress',
              'title' => 'Collect Shipping Address',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether to collect the shipping address during checkout.',
            ],
            [
              'name' => 'completedPurchaseCount',
              'title' => 'Completed Purchase Count',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'The number of completed purchases made through this payment link.',
              'format' => 'int32',
            ],
            [
              'name' => 'createContractOnPurchase',
              'title' => 'Create Contract On Purchase',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether a contract should be created upon purchase.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the payment link was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'currencyCode',
              'title' => 'Currency Code',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The currency code for the payment link, represented as a string.',
            ],
            [
              'name' => 'dealConfigurations',
              'title' => 'Deal Configurations',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object containing deal configuration settings.',
            ],
            [
              'name' => 'descriptionHtml',
              'title' => 'Description Html',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The HTML description of the payment link, represented as a string.',
            ],
            [
              'name' => 'discount',
              'title' => 'Discount',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'discountCodeEnabled',
              'title' => 'Discount Code Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether discount codes are enabled for the payment link.',
            ],
            [
              'name' => 'discountObjectId',
              'title' => 'Discount Object Id',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A string representing the object ID of a discount associated with the payment link.',
            ],
            [
              'name' => 'discounts',
              'title' => 'Discounts',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of discount objects associated with the payment link.',
            ],
            [
              'name' => 'domainId',
              'title' => 'Domain Id',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The domain ID associated with the payment link, represented as a string.',
            ],
            [
              'name' => 'enableDefaultCheckoutFees',
              'title' => 'Enable Default Checkout Fees',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether default checkout fees are enabled.',
            ],
            [
              'name' => 'expirationSettings',
              'title' => 'Expiration Settings',
              'type' => '`$OBJECT`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'An object representing the expiration settings for the payment link.',
            ],
            [
              'name' => 'feeObjectIds',
              'title' => 'Fee Object Ids',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of strings representing the IDs of fee objects associated with the payment link.',
            ],
            [
              'name' => 'fees',
              'title' => 'Fees',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of fee objects associated with the payment link.',
            ],
            [
              'name' => 'formGuid',
              'title' => 'Form Guid',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The form GUID associated with the payment link, represented as a string.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the payment link, represented as a string.',
            ],
            [
              'name' => 'includeEmailInSuccessRedirect',
              'title' => 'Include Email In Success Redirect',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether to include the email in the success redirect URL.',
            ],
            [
              'name' => 'isOneTimeUseEnabled',
              'title' => 'Is One Time Use Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether the payment link is enabled for one-time use.',
            ],
            [
              'name' => 'lineItemObjectIds',
              'title' => 'Line Item Object Ids',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of line item object IDs associated with the payment link, each represented as a string.',
            ],
            [
              'name' => 'lineItems',
              'title' => 'Line Items',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of line items associated with the payment link.',
            ],
            [
              'name' => 'paymentLinkName',
              'title' => 'Payment Link Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The name of the payment link, represented as a string.',
            ],
            [
              'name' => 'paymentLinkUrl',
              'title' => 'Payment Link Url',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The URL of the payment link, represented as a string.',
            ],
            [
              'name' => 'state',
              'title' => 'State',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The current state of the payment link, represented as a string.',
            ],
            [
              'name' => 'storePaymentMethodAtCheckout',
              'title' => 'Store Payment Method At Checkout',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether to store the payment method at checkout.',
            ],
            [
              'name' => 'successUrl',
              'title' => 'Success Url',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The URL to redirect to upon successful payment, represented as a string.',
            ],
            [
              'name' => 'taxObjectIds',
              'title' => 'Tax Object Ids',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of string IDs representing tax objects associated with the payment link.',
            ],
            [
              'name' => 'taxes',
              'title' => 'Taxes',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of tax objects associated with the payment link.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the payment link was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'payment_link',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/payment-links/2026-09/payment-links',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payment-links',
                    '2026-09',
                    'payment-links',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payment-links/2026-09/payment-links',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payment-links',
                    '2026-09',
                    'payment-links',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'created_after',
                        'orig' => 'created_after',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'created_at',
                        'orig' => 'created_at',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'created_before',
                        'orig' => 'created_before',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'updated_after',
                        'orig' => 'updated_after',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'updated_at',
                        'orig' => 'updated_at',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'updated_before',
                        'orig' => 'updated_before',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'created_after',
                      'created_at',
                      'created_before',
                      'limit',
                      'sort',
                      'updated_after',
                      'updated_at',
                      'updated_before',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payment-links/2026-09/payment-links/{paymentLinkId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payment-links',
                    '2026-09',
                    'payment-links',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'paymentLinkId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'payment_link_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/payment-links/2026-09/payment-links/{paymentLinkId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'payment-links',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payment-links',
                    '2026-09',
                    'payment-links',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'paymentLinkId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'payment_link_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'payment_methods_commerce_payment_method_settings_public' => [
          'fields' => [
            [
              'name' => 'activeCurrencies',
              'title' => 'Active Currencies',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod.',
            ],
            [
              'name' => 'commercePaymentMethod',
              'title' => 'Commerce Payment Method',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of payment method.',
            ],
            [
              'name' => 'isDefaultOn',
              'title' => 'Is Default On',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether this payment method is set as the default option.',
            ],
            [
              'name' => 'paymentMethodSettings',
              'title' => 'Payment Method Settings',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.',
            ],
            [
              'name' => 'paymentMethodUpdates',
              'title' => 'Payment Method Updates',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of updates to be applied to commerce payment methods.',
            ],
            [
              'name' => 'supportedCurrencies',
              'title' => 'Supported Currencies',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'A full list of currencies that are supported by the bundled commercePaymentMethod.',
            ],
          ],
          'name' => 'payment_methods_commerce_payment_method_settings_public',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payment-methods/2027-03-beta/settings',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payment-methods',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payment-methods',
                    '2027-03-beta',
                    'settings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.paymentMethodSettings`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/payment-methods/2027-03-beta/settings',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payment-methods',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payment-methods',
                    '2027-03-beta',
                    'settings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'payments_action_response_with_single_result_simple_public_object' => [
          'fields' => [
            [
              'name' => 'category',
              'title' => 'Category',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string indicating the category of the error.',
            ],
            [
              'name' => 'context',
              'title' => 'Context',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object containing additional context about the error condition, where keys are context names and values are arrays of strings.',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of ErrorDetail objects providing further information about the error.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'A string that uniquely identifies this specific error instance.',
            ],
            [
              'name' => 'links',
              'title' => 'Links',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.',
            ],
            [
              'name' => 'message',
              'title' => 'Message',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string containing a human-readable message describing the error.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A string representing the status of the error.',
            ],
            [
              'name' => 'subCategory',
              'title' => 'Sub Category',
              'type' => '`$OBJECT`',
              'short' => 'An object providing more specific details about the error category.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'payments_action_response_with_single_result_simple_public_object',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'var' => 'payment_crm_object_id',
                    ],
                    [
                      'lit' => 'actions',
                    ],
                    [
                      'lit' => 'retry',
                    ],
                    [
                      'lit' => 'async',
                    ],
                    [
                      'lit' => 'tasks',
                    ],
                    [
                      'var' => 'task_id',
                    ],
                    [
                      'lit' => 'status',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments',
                    '2027-03-beta',
                    '{payment_crm_object_id}',
                    'actions',
                    'retry',
                    'async',
                    'tasks',
                    '{task_id}',
                    'status',
                  ],
                  'rename' => [
                    'param' => [
                      'paymentCrmObjectId' => 'payment_crm_object_id',
                      'taskId' => 'task_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'payment_crm_object_id',
                        'orig' => 'payment_crm_object_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'task_id',
                        'orig' => 'task_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'payment_crm_object_id',
                      'task_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'payments_create_manual_payment_public' => [
          'fields' => [
            [
              'name' => 'associations',
              'title' => 'Associations',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of associations related to the payment, where each item is an AssociationPublicRequest object.',
            ],
            [
              'name' => 'billingAddress',
              'title' => 'Billing Address',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'currencyCode',
              'title' => 'Currency Code',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The currency code for the payment, represented as a string.',
            ],
            [
              'name' => 'customerEmail',
              'title' => 'Customer Email',
              'type' => '`$STRING`',
              'short' => 'The email address of the customer making the payment, represented as a string.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the created manual payment, represented as a string.',
            ],
            [
              'name' => 'paymentAmount',
              'title' => 'Payment Amount',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'The amount of the payment, represented as a number.',
            ],
            [
              'name' => 'paymentDate',
              'title' => 'Payment Date',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date of the payment, represented as a string.',
            ],
            [
              'name' => 'paymentMethod',
              'title' => 'Payment Method',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The method used for the payment, represented as a string.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'payments_create_manual_payment_public',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/payments/2027-03-beta/manual-payments',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'manual-payments',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments',
                    '2027-03-beta',
                    'manual-payments',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'payments_settings_get_billing_settings_public' => [
          'fields' => [
            [
              'name' => 'accountGoogleAnalyticsEnabled',
              'title' => 'Account Google Analytics Enabled',
              'type' => '`$BOOLEAN`',
              'short' => 'Indicates whether Google Analytics tracking is enabled for the account.',
            ],
            [
              'name' => 'checkoutPrefillEnabled',
              'title' => 'Checkout Prefill Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'Indicates whether checkout fields should be prefilled.',
            ],
            [
              'name' => 'collectFullBillingAddress',
              'title' => 'Collect Full Billing Address',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'Indicates whether the full billing address should be collected.',
            ],
            [
              'name' => 'collectPaymentMethodOnFile',
              'title' => 'Collect Payment Method On File',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'Indicates whether a payment method should be kept on file.',
            ],
            [
              'name' => 'defaultFromEmailAddress',
              'title' => 'Default From Email Address',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The default email address used for sending communications.',
            ],
            [
              'name' => 'paymentsGoogleAnalyticsEnabled',
              'title' => 'Payments Google Analytics Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'Indicates whether Google Analytics tracking is enabled for payments.',
            ],
            [
              'name' => 'recaptchaEnabled',
              'title' => 'Recaptcha Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'Indicates whether reCAPTCHA is enabled for additional security.',
            ],
          ],
          'name' => 'payments_settings_get_billing_settings_public',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/billing',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'billing',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'billing',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/billing',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'billing',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'billing',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'payments_settings_get_checkout_fees_public' => [
          'fields' => [
            [
              'name' => 'appliesToPaymentType',
              'title' => 'Applies To Payment Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of payment to which this fee applies, represented as a string.',
            ],
            [
              'name' => 'checkoutFees',
              'title' => 'Checkout Fees',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.',
            ],
            [
              'name' => 'feeValue',
              'title' => 'Fee Value',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'The numerical value of the fee, indicating the amount to be charged.',
            ],
            [
              'name' => 'feeValueType',
              'title' => 'Fee Value Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount).',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for this checkout fee configuration.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the checkout fee, used for identification and display purposes.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'payments_settings_get_checkout_fees_public',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'checkout-fees',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'checkout-fees',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.checkoutFees`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'checkout-fees',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'checkout-fees',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'payments_settings_get_policy_settings_public' => [
          'fields' => [
            [
              'name' => 'acknowledgementRequired',
              'title' => 'Acknowledgement Required',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether an acknowledgement is required for the policy.',
            ],
            [
              'name' => 'cancellationPolicyText',
              'title' => 'Cancellation Policy Text',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A string containing the text of the cancellation policy.',
            ],
            [
              'name' => 'customPolicyEnabled',
              'title' => 'Custom Policy Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether a custom policy is enabled.',
            ],
            [
              'name' => 'refundPolicyText',
              'title' => 'Refund Policy Text',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A string containing the text of the refund policy.',
            ],
            [
              'name' => 'termsOfServiceUrl',
              'title' => 'Terms Of Service Url',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A string representing the URL of the terms of service.',
            ],
          ],
          'name' => 'payments_settings_get_policy_settings_public',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/policy',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'policy',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'policy',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/policy',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'policy',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'policy',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'payments_settings_get_shipping_settings_public' => [
          'fields' => [
            [
              'name' => 'collectShippingAddressByDefault',
              'title' => 'Collect Shipping Address By Default',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'A boolean indicating whether the shipping address is collected by default.',
            ],
            [
              'name' => 'countriesShippedTo',
              'title' => 'Countries Shipped To',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of strings representing the list of countries to which shipping is available.',
            ],
          ],
          'name' => 'payments_settings_get_shipping_settings_public',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/shipping',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'shipping',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'shipping',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.countriesShippedTo`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/payments-settings/2027-03-beta/payments-settings/shipping',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'payments-settings',
                    ],
                    [
                      'lit' => 'shipping',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payments-settings',
                    '2027-03-beta',
                    'payments-settings',
                    'shipping',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'paymentsaccounts_payment_account_view' => [
          'fields' => [
            [
              'name' => 'canPayout',
              'title' => 'Can Payout',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the account is capable of making payouts.',
            ],
            [
              'name' => 'canTransact',
              'title' => 'Can Transact',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the account is capable of processing transactions.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the payment account was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'eligibleProcessorTypes',
              'title' => 'Eligible Processor Types',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of processor types that the account is eligible to use.',
            ],
            [
              'name' => 'enrollmentState',
              'title' => 'Enrollment State',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current enrollment state of the payment account.',
            ],
            [
              'name' => 'hasTransacted',
              'title' => 'Has Transacted',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the account has ever processed a transaction.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The portalId for the payment account.',
            ],
            [
              'name' => 'lastTransactedAt',
              'title' => 'Last Transacted At',
              'type' => '`$STRING`',
              'short' => 'The date and time of the last transaction made with this account, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'processorType',
              'title' => 'Processor Type',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The type of payment processor associated with the account.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the payment account was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'paymentsaccounts_payment_account_view',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/payment-accounts/2026-09/status',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'payment-accounts',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'status',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'payment-accounts',
                    '2026-09',
                    'status',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.eligibleProcessorTypes`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'price_book' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'short' => 'A boolean indicating whether this price book is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'The date and time when this price book was archived.',
              'format' => 'date-time',
            ],
            [
              'name' => 'autoAssignmentEnabled',
              'title' => 'Auto Assignment Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether auto-assignment is enabled for the price book.',
            ],
            [
              'name' => 'countOfIncludedProducts',
              'title' => 'Count Of Included Products',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'The number of products included in this price book.',
              'format' => 'int32',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when this price book was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'customProperties',
              'title' => 'Custom Properties',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'A map of custom property names to their values for this price book.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'A description of the price book.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for this price book.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The name of the price book.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the price book.',
            ],
            [
              'name' => 'supportedCurrencies',
              'title' => 'Supported Currencies',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'An array of currency codes that this price book supports.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when this price book was last updated.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'price_book',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/price-books/2026-09/price-books',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/price-books/2026-09/price-books',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'limit',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'price_books_batch_response_price_book_item' => [
          'fields' => [
            [
              'name' => 'completedAt',
              'title' => 'Completed At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the batch operation was completed, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'inputs',
              'title' => 'Inputs',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book.',
            ],
            [
              'name' => 'links',
              'title' => 'Links',
              'type' => '`$OBJECT`',
              'short' => 'A map of link names to associated URIs providing additional information or actions related to the batch operation.',
            ],
            [
              'name' => 'requestedAt',
              'title' => 'Requested At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the batch operation was requested, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'results',
              'title' => 'Results',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of PriceBookItemResponse objects representing the individual results of the batch operation.',
            ],
            [
              'name' => 'startedAt',
              'title' => 'Started At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the batch operation started, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the batch operation.',
            ],
          ],
          'name' => 'price_books_batch_response_price_book_item',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'items',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'create',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'items',
                    'batch',
                    'create',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'price_book_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'items',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'update',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'items',
                    'batch',
                    'update',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'price_book_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.price_book',
              ],
            ],
          ],
        ],
        'price_books_collection_response_price_book_item_response_forward' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'short' => 'A boolean indicating whether the price book item is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the price book item was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'billingFrequency',
              'title' => 'Billing Frequency',
              'type' => '`$STRING`',
              'short' => 'The frequency at which billing occurs for the price book item.',
            ],
            [
              'name' => 'billingPeriod',
              'title' => 'Billing Period',
              'type' => '`$STRING`',
              'short' => 'The billing period for the price book item.',
            ],
            [
              'name' => 'costOfGoodsSold',
              'title' => 'Cost Of Goods Sold',
              'type' => '`$STRING`',
              'short' => 'The cost of goods sold for the price book item.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the price book item was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'customProperties',
              'title' => 'Custom Properties',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'A map of custom property names to their values for the price book item.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'A description of the price book item.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the price book item.',
            ],
            [
              'name' => 'images',
              'title' => 'Images',
              'type' => '`$STRING`',
              'short' => 'A string representing images associated with the price book item.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the price book item.',
            ],
            [
              'name' => 'priceBookId',
              'title' => 'Price Book Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier for the price book containing this item.',
            ],
            [
              'name' => 'pricing',
              'title' => 'Pricing',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'productClassification',
              'title' => 'Product Classification',
              'type' => '`$STRING`',
              'short' => 'The classification of the product.',
            ],
            [
              'name' => 'productId',
              'title' => 'Product Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the product associated with the price book item.',
            ],
            [
              'name' => 'productType',
              'title' => 'Product Type',
              'type' => '`$STRING`',
              'short' => 'The type of product.',
            ],
            [
              'name' => 'recurringBillingTerms',
              'title' => 'Recurring Billing Terms',
              'type' => '`$STRING`',
              'short' => 'The terms of recurring billing for the price book item.',
            ],
            [
              'name' => 'sku',
              'title' => 'Sku',
              'type' => '`$STRING`',
              'short' => 'The stock keeping unit (SKU) of the price book item.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'The current status of the price book item.',
            ],
            [
              'name' => 'taxCategory',
              'title' => 'Tax Category',
              'type' => '`$STRING`',
              'short' => 'The tax category of the price book item.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the price book item was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'A URL associated with the price book item.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'price_books_collection_response_price_book_item_response_forward',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/items',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'items',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'items',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'limit',
                      'price_book_id',
                      'property',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.price_book',
              ],
            ],
          ],
        ],
        'price_books_price_book' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'short' => 'A boolean indicating whether this price book is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'The date and time when this price book was archived.',
              'format' => 'date-time',
            ],
            [
              'name' => 'autoAssignmentEnabled',
              'title' => 'Auto Assignment Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether auto-assignment is enabled for the price book.',
            ],
            [
              'name' => 'countOfIncludedProducts',
              'title' => 'Count Of Included Products',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'The number of products included in this price book.',
              'format' => 'int32',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when this price book was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'customProperties',
              'title' => 'Custom Properties',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'A map of custom property names to their values for this price book.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'A description of the price book.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for this price book.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the price book.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the price book.',
            ],
            [
              'name' => 'supportedCurrencies',
              'title' => 'Supported Currencies',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of currency codes that this price book supports.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when this price book was last updated.',
              'format' => 'date-time',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'price_books_price_book',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/activate',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'activate',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'activate',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'price_book_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'deactivate',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'deactivate',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'price_book_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.price_book',
              ],
            ],
          ],
        ],
        'price_books_price_book_item' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'short' => 'A boolean indicating whether the price book item is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the price book item was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'billingFrequency',
              'title' => 'Billing Frequency',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The frequency at which billing occurs for the price book item.',
            ],
            [
              'name' => 'billingPeriod',
              'title' => 'Billing Period',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The billing period for the price book item.',
            ],
            [
              'name' => 'costOfGoodsSold',
              'title' => 'Cost Of Goods Sold',
              'type' => '`$STRING`',
              'short' => 'The cost of goods sold for the price book item.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the price book item was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'customProperties',
              'title' => 'Custom Properties',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'A map of custom property names to their values for the price book item.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'A description of the price book item.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the price book item.',
            ],
            [
              'name' => 'images',
              'title' => 'Images',
              'type' => '`$STRING`',
              'short' => 'A string representing images associated with the price book item.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'The name of the price book item.',
            ],
            [
              'name' => 'priceBookId',
              'title' => 'Price Book Id',
              'type' => '`$STRING`',
              'short' => 'The unique identifier for the price book containing this item.',
            ],
            [
              'name' => 'pricing',
              'title' => 'Pricing',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'productClassification',
              'title' => 'Product Classification',
              'type' => '`$STRING`',
              'short' => 'The classification of the product.',
            ],
            [
              'name' => 'productId',
              'title' => 'Product Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the product associated with the price book item.',
            ],
            [
              'name' => 'productType',
              'title' => 'Product Type',
              'type' => '`$STRING`',
              'short' => 'The type of product.',
            ],
            [
              'name' => 'recurringBillingTerms',
              'title' => 'Recurring Billing Terms',
              'type' => '`$STRING`',
              'short' => 'The terms of recurring billing for the price book item.',
            ],
            [
              'name' => 'sku',
              'title' => 'Sku',
              'type' => '`$STRING`',
              'short' => 'The stock keeping unit (SKU) of the price book item.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'op' => [
                'update' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The current status of the price book item.',
            ],
            [
              'name' => 'taxCategory',
              'title' => 'Tax Category',
              'type' => '`$STRING`',
              'short' => 'The tax category of the price book item.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the price book item was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'A URL associated with the price book item.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'price_books_price_book_item',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/items',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'items',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'items',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'price_book_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'items',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'items',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                      'priceBookItemId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'price_book_item_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                      'price_book_id',
                      'property',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'items',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'items',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                      'priceBookItemId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'price_book_item_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                      'price_book_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.price_book',
              ],
            ],
          ],
        ],
        'price_books_price_book_validate' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of ErrorDetail objects providing information about any errors encountered during validation.',
            ],
            [
              'name' => 'isValid',
              'title' => 'Is Valid',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'A boolean indicating whether the price book is valid.',
            ],
          ],
          'name' => 'price_books_price_book_validate',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/commerce/price-books/2026-09/price-books/{priceBookId}/validate',
                  'segments' => [
                    [
                      'lit' => 'commerce',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'lit' => '2026-09',
                    ],
                    [
                      'lit' => 'price-books',
                    ],
                    [
                      'var' => 'price_book_id',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                  ],
                  'parts' => [
                    'commerce',
                    'price-books',
                    '2026-09',
                    'price-books',
                    '{price_book_id}',
                    'validate',
                  ],
                  'rename' => [
                    'param' => [
                      'priceBookId' => 'price_book_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'price_book_id',
                        'orig' => 'price_book_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'price_book_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.price_book',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return HubspotCommerceFeatures::make_feature($name);
    }
}
