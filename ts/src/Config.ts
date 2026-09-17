
import { BaseFeature } from './feature/base/BaseFeature'
import { DebugFeature } from './feature/debug/DebugFeature'
import { IdempotencyFeature } from './feature/idempotency/IdempotencyFeature'
import { MetricsFeature } from './feature/metrics/MetricsFeature'
import { PagingFeature } from './feature/paging/PagingFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'HubspotCommerce',
        slug: "hubspot-commerce",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.hubapi.com",

    auth: {
      prefix: '',
      in: 'query',
      name: 'hapikey',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        advanced: {
        },
  
        basic: {
        },
  
        batch: {
        },
  
        contract: {
        },
  
        contracts_contract: {
        },
  
        contracts_contract_change: {
        },
  
        contracts_contract_change_preview: {
        },
  
        contracts_quote: {
        },
  
        item: {
        },
  
        payment_link: {
        },
  
        payment_methods_commerce_payment_method_settings_public: {
        },
  
        payments_action_response_with_single_result_simple_public_object: {
        },
  
        payments_create_manual_payment_public: {
        },
  
        payments_settings_get_billing_settings_public: {
        },
  
        payments_settings_get_checkout_fees_public: {
        },
  
        payments_settings_get_policy_settings_public: {
        },
  
        payments_settings_get_shipping_settings_public: {
        },
  
        paymentsaccounts_payment_account_view: {
        },
  
        price_book: {
        },
  
        price_books_batch_response_price_book_item: {
        },
  
        price_books_collection_response_price_book_item_response_forward: {
        },
  
        price_books_price_book: {
        },
  
        price_books_price_book_item: {
        },
  
        price_books_price_book_validate: {
        },
  
    }
  }


  entity = {
    "advanced": {
      "fields": [],
      "name": "advanced",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "payment_crm_object_id",
                    "orig": "payment_crm_object_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async",
              "rename": {
                "param": {
                  "paymentCrmObjectId": "payment_crm_object_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "var": "payment_crm_object_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "lit": "retry"
                },
                {
                  "lit": "async"
                }
              ],
              "select": {
                "exist": [
                  "payment_crm_object_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments",
                "2027-03-beta",
                "{payment_crm_object_id}",
                "actions",
                "retry",
                "async"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2027_03_beta"
          ]
        ]
      }
    },
    "basic": {
      "fields": [],
      "name": "basic",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "checkout_fee_id",
                    "orig": "checkout_fee_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}",
              "rename": {
                "param": {
                  "checkoutFeeId": "checkout_fee_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "checkout-fees"
                },
                {
                  "var": "checkout_fee_id"
                }
              ],
              "select": {
                "exist": [
                  "checkout_fee_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "checkout-fees",
                "{checkout_fee_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "payment_link_id",
                    "orig": "payment_link_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
              "rename": {
                "param": {
                  "paymentLinkId": "payment_link_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payment-links"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "payment-links"
                },
                {
                  "var": "payment_link_id"
                }
              ],
              "select": {
                "exist": [
                  "payment_link_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payment-links",
                "2026-09",
                "payment-links",
                "{payment_link_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                }
              ],
              "select": {
                "exist": [
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "payment_link"
          ],
          [
            "checkout_fee"
          ],
          [
            "price_book"
          ]
        ]
      }
    },
    "batch": {
      "fields": [],
      "name": "batch",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "items"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "archive"
                }
              ],
              "select": {
                "$action": "archive",
                "exist": [
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "items",
                "batch",
                "archive"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "price_book"
          ]
        ]
      }
    },
    "contract": {
      "fields": [
        {
          "name": "addressTypesToCollect",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array indicating the types of addresses to collect.",
          "type": "`$ARRAY`"
        },
        {
          "name": "allTransactionsFeeName",
          "short": "The name of the fee applied to all transactions.",
          "type": "`$STRING`"
        },
        {
          "name": "allTransactionsFeePercentage",
          "short": "The percentage of the fee applied to all transactions.",
          "type": "`$NUMBER`"
        },
        {
          "name": "allowedPaymentMethods",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of allowed payment methods.",
          "type": "`$ARRAY`"
        },
        {
          "name": "annualContractValue",
          "short": "The annual value of the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "automatedTaxesEnabled",
          "req": true,
          "short": "Indicates whether automated taxes are enabled for the contract.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "billingAddress",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "An object representing the billing address for the contract.",
          "type": "`$OBJECT`"
        },
        {
          "name": "billingCompanyId",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The unique identifier of the billing company associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "billingContactId",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The unique identifier of the billing contact associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "billingStartDateOverride",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The date to override the billing start date, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "businessUnitId",
          "short": "The unique identifier of the business unit associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "cardFeeName",
          "short": "The name of the fee applied to card transactions.",
          "type": "`$STRING`"
        },
        {
          "name": "cardFeePercentage",
          "short": "The percentage of the fee applied to card transactions.",
          "type": "`$NUMBER`"
        },
        {
          "name": "collectionProcess",
          "short": "The process for collecting payments.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "contractEffectiveDate",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The date when the contract becomes effective, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "contractSourceId",
          "short": "The unique identifier of the source of the contract.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when the contract was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "currencyCode",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The currency code associated with the contract, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "currentAnnualRecurringRevenue",
          "short": "The current annual recurring revenue for the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "currentMonthlyRecurringRevenue",
          "short": "The current monthly recurring revenue for the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "customProperties",
          "op": {
            "create": {
              "type": "`$OBJECT`"
            },
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "A map of custom property names to their values.",
          "type": "`$OBJECT`"
        },
        {
          "name": "dealId",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The unique identifier of the deal associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "directDebitFeeName",
          "short": "The name of the fee applied to direct debit transactions.",
          "type": "`$STRING`"
        },
        {
          "name": "directDebitFeePercentage",
          "short": "The percentage of the fee applied to direct debit transactions.",
          "type": "`$NUMBER`"
        },
        {
          "name": "discountCode",
          "short": "The discount code applied to the contract.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "endDate",
          "short": "The end date of the contract, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "externalPaymentMethodReferenceId",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The external reference ID for the payment method.",
          "type": "`$STRING`"
        },
        {
          "name": "hubspotBillingEnabled",
          "req": true,
          "short": "Indicates whether HubSpot billing is enabled for the contract.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "short": "The language associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "lineItems",
          "req": true,
          "short": "An array of line items included in the contract.",
          "type": "`$ARRAY`"
        },
        {
          "name": "locale",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The locale associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The name of the contract.",
          "type": "`$STRING`"
        },
        {
          "format": "int32",
          "name": "netPaymentTerms",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The net payment terms for the contract, represented as an integer.",
          "type": "`$INTEGER`"
        },
        {
          "name": "ownerId",
          "req": true,
          "short": "An object representing the ID of the contract owner.",
          "type": "`$OBJECT`"
        },
        {
          "name": "paymentEnabled",
          "req": true,
          "short": "Indicates whether payment is enabled for the contract.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "paymentMethod",
          "short": "The payment method used for the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "poNumber",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The purchase order number associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "preTerminationContractValue",
          "short": "The value of the contract before termination.",
          "type": "`$NUMBER`"
        },
        {
          "name": "renewalContractId",
          "short": "The unique identifier of the renewal contract.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "renewalDate",
          "short": "The date when the contract is set to renew, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerCompanyAddress",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "An object representing the address of the seller's company.",
          "type": "`$OBJECT`"
        },
        {
          "name": "sellerCompanyDomain",
          "req": true,
          "short": "An object representing the domain of the seller's company.",
          "type": "`$OBJECT`"
        },
        {
          "name": "sellerCompanyName",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The name of the seller's company.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerEmail",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The email address of the seller.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerFirstName",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The first name of the seller.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerLastName",
          "op": {
            "create": {
              "req": true,
              "type": "`$OBJECT`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The last name of the seller.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerPhone",
          "req": true,
          "short": "An object representing the phone number of the seller.",
          "type": "`$OBJECT`"
        },
        {
          "name": "sellerPhoneNumber",
          "short": "The phone number of the seller.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "startDate",
          "short": "The start date of the contract, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "storePaymentMethodAtCheckout",
          "req": true,
          "short": "Indicates whether the payment method should be stored at checkout.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date",
          "name": "terminationDate",
          "short": "The date when the contract is terminated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "totalBilledAmount",
          "short": "The total amount billed under the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalBilledAmountPreTax",
          "short": "The total amount billed under the contract before tax.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalCollectedFees",
          "short": "The total amount of fees collected under the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalCollectedTaxes",
          "short": "The total amount of taxes collected under the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalContractValue",
          "short": "The total value of the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalPaidAmount",
          "short": "The total amount paid under the contract.",
          "type": "`$NUMBER`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when the contract was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contract",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/contracts/2027-03-beta/contracts",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "contracts"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "contracts"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "contract_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}",
              "rename": {
                "param": {
                  "contractId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "contracts"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "contracts",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "contract_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}",
              "rename": {
                "param": {
                  "contractId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "contracts"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "contracts",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contracts_contract": {
      "fields": [
        {
          "name": "addressTypesToCollect",
          "req": true,
          "short": "An array indicating the types of addresses to collect.",
          "type": "`$ARRAY`"
        },
        {
          "name": "allTransactionsFeeName",
          "short": "The name of the fee applied to all transactions.",
          "type": "`$STRING`"
        },
        {
          "name": "allTransactionsFeePercentage",
          "short": "The percentage of the fee applied to all transactions.",
          "type": "`$NUMBER`"
        },
        {
          "name": "allowedPaymentMethods",
          "req": true,
          "short": "An array of allowed payment methods.",
          "type": "`$ARRAY`"
        },
        {
          "name": "annualContractValue",
          "short": "The annual value of the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "automatedTaxesEnabled",
          "req": true,
          "short": "Indicates whether automated taxes are enabled for the contract.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "billingAddress",
          "type": "`$OBJECT`"
        },
        {
          "name": "billingCompanyId",
          "short": "The unique identifier of the billing company associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "billingContactId",
          "short": "The unique identifier of the billing contact associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "billingStartDateOverride",
          "short": "The date to override the billing start date, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "businessUnitId",
          "short": "The unique identifier of the business unit associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "cardFeeName",
          "short": "The name of the fee applied to card transactions.",
          "type": "`$STRING`"
        },
        {
          "name": "cardFeePercentage",
          "short": "The percentage of the fee applied to card transactions.",
          "type": "`$NUMBER`"
        },
        {
          "name": "collectionProcess",
          "short": "The process for collecting payments.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "contractEffectiveDate",
          "short": "The date when the contract becomes effective, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "contractSourceId",
          "short": "The unique identifier of the source of the contract.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when the contract was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "currencyCode",
          "short": "The currency code associated with the contract, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "currentAnnualRecurringRevenue",
          "short": "The current annual recurring revenue for the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "currentMonthlyRecurringRevenue",
          "short": "The current monthly recurring revenue for the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "customProperties",
          "req": true,
          "short": "A map of custom property names to their values.",
          "type": "`$OBJECT`"
        },
        {
          "name": "dealId",
          "short": "The unique identifier of the deal associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "directDebitFeeName",
          "short": "The name of the fee applied to direct debit transactions.",
          "type": "`$STRING`"
        },
        {
          "name": "directDebitFeePercentage",
          "short": "The percentage of the fee applied to direct debit transactions.",
          "type": "`$NUMBER`"
        },
        {
          "name": "discountCode",
          "short": "The discount code applied to the contract.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "endDate",
          "short": "The end date of the contract, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "externalPaymentMethodReferenceId",
          "short": "The external reference ID for the payment method.",
          "type": "`$STRING`"
        },
        {
          "name": "hubspotBillingEnabled",
          "req": true,
          "short": "Indicates whether HubSpot billing is enabled for the contract.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "short": "The language associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "lineItems",
          "req": true,
          "short": "An array of line items included in the contract.",
          "type": "`$ARRAY`"
        },
        {
          "name": "locale",
          "short": "The locale associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the contract.",
          "type": "`$STRING`"
        },
        {
          "format": "int32",
          "name": "netPaymentTerms",
          "short": "The net payment terms for the contract, represented as an integer.",
          "type": "`$INTEGER`"
        },
        {
          "name": "paymentEnabled",
          "req": true,
          "short": "Indicates whether payment is enabled for the contract.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "paymentMethod",
          "short": "The payment method used for the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "poNumber",
          "short": "The purchase order number associated with the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "preTerminationContractValue",
          "short": "The value of the contract before termination.",
          "type": "`$NUMBER`"
        },
        {
          "name": "renewalContractId",
          "short": "The unique identifier of the renewal contract.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "renewalDate",
          "short": "The date when the contract is set to renew, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerCompanyAddress",
          "type": "`$OBJECT`"
        },
        {
          "name": "sellerCompanyName",
          "short": "The name of the seller's company.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerEmail",
          "short": "The email address of the seller.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerFirstName",
          "short": "The first name of the seller.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerLastName",
          "short": "The last name of the seller.",
          "type": "`$STRING`"
        },
        {
          "name": "sellerPhoneNumber",
          "short": "The phone number of the seller.",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "startDate",
          "short": "The start date of the contract, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the contract.",
          "type": "`$STRING`"
        },
        {
          "name": "storePaymentMethodAtCheckout",
          "req": true,
          "short": "Indicates whether the payment method should be stored at checkout.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date",
          "name": "terminationDate",
          "short": "The date when the contract is terminated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "totalBilledAmount",
          "short": "The total amount billed under the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalBilledAmountPreTax",
          "short": "The total amount billed under the contract before tax.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalCollectedFees",
          "short": "The total amount of fees collected under the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalCollectedTaxes",
          "short": "The total amount of taxes collected under the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalContractValue",
          "short": "The total value of the contract.",
          "type": "`$NUMBER`"
        },
        {
          "name": "totalPaidAmount",
          "short": "The total amount paid under the contract.",
          "type": "`$NUMBER`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when the contract was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contracts_contract",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "contract_id",
                    "orig": "contract_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/terminate",
              "rename": {
                "param": {
                  "contractId": "contract_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "contracts"
                },
                {
                  "var": "contract_id"
                },
                {
                  "lit": "terminate"
                }
              ],
              "select": {
                "exist": [
                  "contract_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "contracts",
                "{contract_id}",
                "terminate"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "contract"
          ]
        ]
      }
    },
    "contracts_contract_change": {
      "fields": [
        {
          "name": "contractId",
          "req": true,
          "short": "The unique identifier of the contract associated with this change.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when the contract change was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "deltaLineItems",
          "req": true,
          "short": "An array of line items that represent the difference resulting from the contract change.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date",
          "name": "effectiveDate",
          "short": "The date when the contract change becomes effective, in YYYY-MM-DD format.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the contract change.",
          "type": "`$STRING`"
        },
        {
          "name": "lineItemChanges",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of changes to line items associated with the contract change.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 3,
            "count": 1,
            "depth": 3
          }
        },
        {
          "name": "name",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The name of the contract change.",
          "type": "`$STRING`"
        },
        {
          "name": "proposedLineItems",
          "req": true,
          "short": "An array of line items that are proposed as part of the contract change.",
          "type": "`$ARRAY`"
        },
        {
          "name": "prorating",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether the contract change involves prorating.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "quoteId",
          "short": "The unique identifier of the quote associated with this contract change.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the contract change.",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of contract change.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when the contract change was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contracts_contract_change",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "change_id",
                    "orig": "change_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/contracts/2027-03-beta/changes/{changeId}/accept",
              "rename": {
                "param": {
                  "changeId": "change_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "changes"
                },
                {
                  "var": "change_id"
                },
                {
                  "lit": "accept"
                }
              ],
              "select": {
                "exist": [
                  "change_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "changes",
                "{change_id}",
                "accept"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "change_id",
                    "orig": "change_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/contracts/2027-03-beta/changes/{changeId}/cancel",
              "rename": {
                "param": {
                  "changeId": "change_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "changes"
                },
                {
                  "var": "change_id"
                },
                {
                  "lit": "cancel"
                }
              ],
              "select": {
                "exist": [
                  "change_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "changes",
                "{change_id}",
                "cancel"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "contract_id",
                    "orig": "contract_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/changes",
              "rename": {
                "param": {
                  "contractId": "contract_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "contracts"
                },
                {
                  "var": "contract_id"
                },
                {
                  "lit": "changes"
                }
              ],
              "select": {
                "exist": [
                  "contract_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "contracts",
                "{contract_id}",
                "changes"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/contracts/2027-03-beta/changes",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "changes"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "changes"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "contract_id",
                    "orig": "contract_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/changes",
              "rename": {
                "param": {
                  "contractId": "contract_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "contracts"
                },
                {
                  "var": "contract_id"
                },
                {
                  "lit": "changes"
                }
              ],
              "select": {
                "exist": [
                  "contract_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.changes`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "contracts",
                "{contract_id}",
                "changes"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "change_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/contracts/2027-03-beta/changes/{changeId}",
              "rename": {
                "param": {
                  "changeId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "changes"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "changes",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "change_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/contracts/2027-03-beta/changes/{changeId}",
              "rename": {
                "param": {
                  "changeId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "changes"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "changes",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "change"
          ],
          [
            "contract"
          ]
        ]
      }
    },
    "contracts_contract_change_preview": {
      "fields": [
        {
          "name": "deltaLineItems",
          "req": true,
          "short": "An array of LineItem objects representing the changes in line items compared to the current state of the contract.",
          "type": "`$ARRAY`"
        },
        {
          "name": "proposedLineItems",
          "req": true,
          "short": "An array of LineItem objects representing the proposed state of line items after the changes are applied.",
          "type": "`$ARRAY`"
        }
      ],
      "name": "contracts_contract_change_preview",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/contracts/2027-03-beta/changes/preview",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "changes"
                },
                {
                  "lit": "preview"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "changes",
                "preview"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contracts_quote": {
      "fields": [
        {
          "name": "dealId",
          "short": "The unique identifier of the deal associated with the renewal quote.",
          "type": "`$STRING`"
        },
        {
          "name": "dealPipeline",
          "short": "The identifier of the pipeline in which the deal is located.",
          "type": "`$STRING`"
        },
        {
          "name": "dealStage",
          "short": "The identifier of the stage within the pipeline that the deal is currently in.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the renewal quote.",
          "type": "`$STRING`"
        },
        {
          "name": "quoteTemplateId",
          "req": true,
          "short": "The unique identifier of the quote template to be used for creating the renewal quote.",
          "type": "`$STRING`"
        }
      ],
      "name": "contracts_quote",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "contract_id",
                    "orig": "contract_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes",
              "rename": {
                "param": {
                  "contractId": "contract_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "contracts"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "contracts"
                },
                {
                  "var": "contract_id"
                },
                {
                  "lit": "renewal-quotes"
                }
              ],
              "select": {
                "exist": [
                  "contract_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "contracts",
                "2027-03-beta",
                "contracts",
                "{contract_id}",
                "renewal-quotes"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "contract"
          ]
        ]
      }
    },
    "item": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "item",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "price_book_item_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id",
                  "priceBookItemId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "items",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "price_book"
          ]
        ]
      }
    },
    "payment_link": {
      "fields": [
        {
          "name": "acceptedPaymentMethods",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of accepted payment methods for the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "name": "additionalFormFields",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of additional form fields included in the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "name": "archived",
          "req": true,
          "short": "A boolean indicating whether the payment link is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "The date and time when the payment link was archived, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "automatedSalesTaxEnabled",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether automated sales tax is enabled for the payment link.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "businessUnitId",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The business unit ID associated with the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "checkoutFeeIds",
          "req": true,
          "short": "An array of checkout fee IDs associated with the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "name": "collectFullBillingAddress",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether to collect the full billing address during checkout.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "collectShippingAddress",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether to collect the shipping address during checkout.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int32",
          "name": "completedPurchaseCount",
          "req": true,
          "short": "The number of completed purchases made through this payment link.",
          "type": "`$INTEGER`"
        },
        {
          "name": "createContractOnPurchase",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether a contract should be created upon purchase.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when the payment link was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "currencyCode",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The currency code for the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "dealConfigurations",
          "req": true,
          "short": "An object containing deal configuration settings.",
          "type": "`$OBJECT`"
        },
        {
          "name": "descriptionHtml",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The HTML description of the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "discount",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "discountCodeEnabled",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether discount codes are enabled for the payment link.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "discountObjectId",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "A string representing the object ID of a discount associated with the payment link.",
          "type": "`$STRING`"
        },
        {
          "name": "discounts",
          "req": true,
          "short": "An array of discount objects associated with the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "name": "domainId",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The domain ID associated with the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "enableDefaultCheckoutFees",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether default checkout fees are enabled.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "expirationSettings",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "An object representing the expiration settings for the payment link.",
          "type": "`$OBJECT`"
        },
        {
          "name": "feeObjectIds",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of strings representing the IDs of fee objects associated with the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "name": "fees",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of fee objects associated with the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "name": "formGuid",
          "req": true,
          "short": "The form GUID associated with the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "includeEmailInSuccessRedirect",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether to include the email in the success redirect URL.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "isOneTimeUseEnabled",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether the payment link is enabled for one-time use.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "lineItemObjectIds",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of line item object IDs associated with the payment link, each represented as a string.",
          "type": "`$ARRAY`"
        },
        {
          "name": "lineItems",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of line items associated with the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "name": "paymentLinkName",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "paymentLinkUrl",
          "req": true,
          "short": "The URL of the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The current state of the payment link, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "storePaymentMethodAtCheckout",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether to store the payment method at checkout.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "successUrl",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The URL to redirect to upon successful payment, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "taxObjectIds",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of string IDs representing tax objects associated with the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "name": "taxes",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of tax objects associated with the payment link.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when the payment link was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "payment_link",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/payment-links/2026-09/payment-links",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payment-links"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "payment-links"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payment-links",
                "2026-09",
                "payment-links"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "created_after",
                    "orig": "created_after",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "created_at",
                    "orig": "created_at",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "created_before",
                    "orig": "created_before",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "updated_after",
                    "orig": "updated_after",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "updated_at",
                    "orig": "updated_at",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "updated_before",
                    "orig": "updated_before",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payment-links/2026-09/payment-links",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payment-links"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "payment-links"
                }
              ],
              "select": {
                "exist": [
                  "after",
                  "archived",
                  "created_after",
                  "created_at",
                  "created_before",
                  "limit",
                  "sort",
                  "updated_after",
                  "updated_at",
                  "updated_before"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payment-links",
                "2026-09",
                "payment-links"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "payment_link_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
              "rename": {
                "param": {
                  "paymentLinkId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payment-links"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "payment-links"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "archived",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payment-links",
                "2026-09",
                "payment-links",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "payment_link_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
              "rename": {
                "param": {
                  "paymentLinkId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payment-links"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "payment-links"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payment-links",
                "2026-09",
                "payment-links",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "payment_methods_commerce_payment_method_settings_public": {
      "fields": [
        {
          "name": "activeCurrencies",
          "req": true,
          "short": "A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod.",
          "type": "`$ARRAY`"
        },
        {
          "name": "commercePaymentMethod",
          "req": true,
          "short": "The type of payment method.",
          "type": "`$STRING`"
        },
        {
          "name": "isDefaultOn",
          "req": true,
          "short": "A boolean indicating whether this payment method is set as the default option.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "paymentMethodSettings",
          "req": true,
          "short": "A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.",
          "type": "`$ARRAY`"
        },
        {
          "name": "paymentMethodUpdates",
          "req": true,
          "short": "An array of updates to be applied to commerce payment methods.",
          "type": "`$ARRAY`"
        },
        {
          "name": "supportedCurrencies",
          "req": true,
          "short": "A full list of currencies that are supported by the bundled commercePaymentMethod.",
          "type": "`$ARRAY`"
        }
      ],
      "name": "payment_methods_commerce_payment_method_settings_public",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payment-methods/2027-03-beta/settings",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payment-methods"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "settings"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.paymentMethodSettings`"
              },
              "parts": [
                "commerce",
                "payment-methods",
                "2027-03-beta",
                "settings"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/payment-methods/2027-03-beta/settings",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payment-methods"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "settings"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payment-methods",
                "2027-03-beta",
                "settings"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "payments_action_response_with_single_result_simple_public_object": {
      "fields": [
        {
          "name": "category",
          "req": true,
          "short": "A string indicating the category of the error.",
          "type": "`$STRING`"
        },
        {
          "name": "context",
          "req": true,
          "short": "An object containing additional context about the error condition, where keys are context names and values are arrays of strings.",
          "type": "`$OBJECT`"
        },
        {
          "name": "errors",
          "req": true,
          "short": "An array of ErrorDetail objects providing further information about the error.",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "A string that uniquely identifies this specific error instance.",
          "type": "`$STRING`"
        },
        {
          "name": "links",
          "req": true,
          "short": "An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.",
          "type": "`$OBJECT`"
        },
        {
          "name": "message",
          "req": true,
          "short": "A string containing a human-readable message describing the error.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "A string representing the status of the error.",
          "type": "`$STRING`"
        },
        {
          "name": "subCategory",
          "short": "An object providing more specific details about the error category.",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "payments_action_response_with_single_result_simple_public_object",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "payment_crm_object_id",
                    "orig": "payment_crm_object_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "param",
                    "name": "task_id",
                    "orig": "task_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status",
              "rename": {
                "param": {
                  "paymentCrmObjectId": "payment_crm_object_id",
                  "taskId": "task_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "var": "payment_crm_object_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "lit": "retry"
                },
                {
                  "lit": "async"
                },
                {
                  "lit": "tasks"
                },
                {
                  "var": "task_id"
                },
                {
                  "lit": "status"
                }
              ],
              "select": {
                "exist": [
                  "payment_crm_object_id",
                  "task_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments",
                "2027-03-beta",
                "{payment_crm_object_id}",
                "actions",
                "retry",
                "async",
                "tasks",
                "{task_id}",
                "status"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2027_03_beta",
            "task"
          ]
        ]
      }
    },
    "payments_create_manual_payment_public": {
      "fields": [
        {
          "name": "associations",
          "req": true,
          "short": "An array of associations related to the payment, where each item is an AssociationPublicRequest object.",
          "type": "`$ARRAY`"
        },
        {
          "name": "billingAddress",
          "type": "`$OBJECT`"
        },
        {
          "name": "currencyCode",
          "req": true,
          "short": "The currency code for the payment, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "customerEmail",
          "short": "The email address of the customer making the payment, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the created manual payment, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "paymentAmount",
          "req": true,
          "short": "The amount of the payment, represented as a number.",
          "type": "`$NUMBER`"
        },
        {
          "name": "paymentDate",
          "req": true,
          "short": "The date of the payment, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "paymentMethod",
          "req": true,
          "short": "The method used for the payment, represented as a string.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "payments_create_manual_payment_public",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/payments/2027-03-beta/manual-payments",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "manual-payments"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments",
                "2027-03-beta",
                "manual-payments"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "payments_settings_get_billing_settings_public": {
      "fields": [
        {
          "name": "accountGoogleAnalyticsEnabled",
          "short": "Indicates whether Google Analytics tracking is enabled for the account.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "checkoutPrefillEnabled",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Indicates whether checkout fields should be prefilled.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "collectFullBillingAddress",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Indicates whether the full billing address should be collected.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "collectPaymentMethodOnFile",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Indicates whether a payment method should be kept on file.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "defaultFromEmailAddress",
          "req": true,
          "short": "The default email address used for sending communications.",
          "type": "`$STRING`"
        },
        {
          "name": "paymentsGoogleAnalyticsEnabled",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Indicates whether Google Analytics tracking is enabled for payments.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "recaptchaEnabled",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Indicates whether reCAPTCHA is enabled for additional security.",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "payments_settings_get_billing_settings_public",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/billing",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "billing"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "billing"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/billing",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "billing"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "billing"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "payments_settings_get_checkout_fees_public": {
      "fields": [
        {
          "name": "appliesToPaymentType",
          "req": true,
          "short": "The type of payment to which this fee applies, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "checkoutFees",
          "req": true,
          "short": "An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.",
          "type": "`$ARRAY`"
        },
        {
          "name": "feeValue",
          "req": true,
          "short": "The numerical value of the fee, indicating the amount to be charged.",
          "type": "`$NUMBER`"
        },
        {
          "name": "feeValueType",
          "req": true,
          "short": "The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount).",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for this checkout fee configuration.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the checkout fee, used for identification and display purposes.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "payments_settings_get_checkout_fees_public",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "checkout-fees"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.checkoutFees`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "checkout-fees"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "checkout-fees"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "checkout-fees"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "payments_settings_get_policy_settings_public": {
      "fields": [
        {
          "name": "acknowledgementRequired",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether an acknowledgement is required for the policy.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "cancellationPolicyText",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "A string containing the text of the cancellation policy.",
          "type": "`$STRING`"
        },
        {
          "name": "customPolicyEnabled",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether a custom policy is enabled.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "refundPolicyText",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "A string containing the text of the refund policy.",
          "type": "`$STRING`"
        },
        {
          "name": "termsOfServiceUrl",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "A string representing the URL of the terms of service.",
          "type": "`$STRING`"
        }
      ],
      "name": "payments_settings_get_policy_settings_public",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/policy",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "policy"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "policy"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/policy",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "policy"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "policy"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "payments_settings_get_shipping_settings_public": {
      "fields": [
        {
          "name": "collectShippingAddressByDefault",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether the shipping address is collected by default.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "countriesShippedTo",
          "req": true,
          "short": "An array of strings representing the list of countries to which shipping is available.",
          "type": "`$ARRAY`"
        }
      ],
      "name": "payments_settings_get_shipping_settings_public",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/shipping",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "shipping"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.countriesShippedTo`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "shipping"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/payments-settings/2027-03-beta/payments-settings/shipping",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "payments-settings"
                },
                {
                  "lit": "shipping"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "payments-settings",
                "2027-03-beta",
                "payments-settings",
                "shipping"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "paymentsaccounts_payment_account_view": {
      "fields": [
        {
          "name": "canPayout",
          "req": true,
          "short": "A boolean indicating whether the account is capable of making payouts.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "canTransact",
          "req": true,
          "short": "A boolean indicating whether the account is capable of processing transactions.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when the payment account was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "eligibleProcessorTypes",
          "req": true,
          "short": "An array of processor types that the account is eligible to use.",
          "type": "`$ARRAY`"
        },
        {
          "name": "enrollmentState",
          "req": true,
          "short": "The current enrollment state of the payment account.",
          "type": "`$STRING`"
        },
        {
          "name": "hasTransacted",
          "req": true,
          "short": "A boolean indicating whether the account has ever processed a transaction.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The portalId for the payment account.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "lastTransactedAt",
          "short": "The date and time of the last transaction made with this account, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "processorType",
          "req": true,
          "short": "The type of payment processor associated with the account.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when the payment account was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "paymentsaccounts_payment_account_view",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/payment-accounts/2026-09/status",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "payment-accounts"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "status"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.eligibleProcessorTypes`"
              },
              "parts": [
                "commerce",
                "payment-accounts",
                "2026-09",
                "status"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "price_book": {
      "fields": [
        {
          "name": "archived",
          "short": "A boolean indicating whether this price book is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "The date and time when this price book was archived.",
          "type": "`$STRING`"
        },
        {
          "name": "autoAssignmentEnabled",
          "req": true,
          "short": "Indicates whether auto-assignment is enabled for the price book.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int32",
          "name": "countOfIncludedProducts",
          "req": true,
          "short": "The number of products included in this price book.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when this price book was created.",
          "type": "`$STRING`"
        },
        {
          "name": "customProperties",
          "req": true,
          "short": "A map of custom property names to their values for this price book.",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "A description of the price book.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for this price book.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            },
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The name of the price book.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the price book.",
          "type": "`$STRING`"
        },
        {
          "name": "supportedCurrencies",
          "op": {
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of currency codes that this price book supports.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when this price book was last updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "price_book",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/price-books/2026-09/price-books",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/price-books/2026-09/price-books",
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                }
              ],
              "select": {
                "exist": [
                  "after",
                  "archived",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
              "rename": {
                "param": {
                  "priceBookId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "archived",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
              "rename": {
                "param": {
                  "priceBookId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "price_books_batch_response_price_book_item": {
      "fields": [
        {
          "format": "date-time",
          "name": "completedAt",
          "req": true,
          "short": "The date and time when the batch operation was completed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "inputs",
          "req": true,
          "short": "An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book.",
          "type": "`$ARRAY`"
        },
        {
          "name": "links",
          "short": "A map of link names to associated URIs providing additional information or actions related to the batch operation.",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "requestedAt",
          "short": "The date and time when the batch operation was requested, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "results",
          "req": true,
          "short": "An array of PriceBookItemResponse objects representing the individual results of the batch operation.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "startedAt",
          "req": true,
          "short": "The date and time when the batch operation started, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the batch operation.",
          "type": "`$STRING`"
        }
      ],
      "name": "price_books_batch_response_price_book_item",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "items"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "create"
                }
              ],
              "select": {
                "exist": [
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "items",
                "batch",
                "create"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "items"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "update"
                }
              ],
              "select": {
                "exist": [
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "items",
                "batch",
                "update"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "price_book"
          ]
        ]
      }
    },
    "price_books_collection_response_price_book_item_response_forward": {
      "fields": [
        {
          "name": "archived",
          "short": "A boolean indicating whether the price book item is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "The date and time when the price book item was archived, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "billingFrequency",
          "short": "The frequency at which billing occurs for the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "billingPeriod",
          "short": "The billing period for the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "costOfGoodsSold",
          "short": "The cost of goods sold for the price book item.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when the price book item was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "customProperties",
          "req": true,
          "short": "A map of custom property names to their values for the price book item.",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "short": "A description of the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "short": "A string representing images associated with the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "priceBookId",
          "short": "The unique identifier for the price book containing this item.",
          "type": "`$STRING`"
        },
        {
          "name": "pricing",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "productClassification",
          "short": "The classification of the product.",
          "type": "`$STRING`"
        },
        {
          "name": "productId",
          "req": true,
          "short": "The unique identifier for the product associated with the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "productType",
          "short": "The type of product.",
          "type": "`$STRING`"
        },
        {
          "name": "recurringBillingTerms",
          "short": "The terms of recurring billing for the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "sku",
          "short": "The stock keeping unit (SKU) of the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "The current status of the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "taxCategory",
          "short": "The tax category of the price book item.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when the price book item was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "A URL associated with the price book item.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "price_books_collection_response_price_book_item_response_forward",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "property",
                    "orig": "property",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "items"
                }
              ],
              "select": {
                "exist": [
                  "after",
                  "limit",
                  "price_book_id",
                  "property"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "items"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "price_book"
          ]
        ]
      }
    },
    "price_books_price_book": {
      "fields": [
        {
          "name": "archived",
          "short": "A boolean indicating whether this price book is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "The date and time when this price book was archived.",
          "type": "`$STRING`"
        },
        {
          "name": "autoAssignmentEnabled",
          "req": true,
          "short": "Indicates whether auto-assignment is enabled for the price book.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int32",
          "name": "countOfIncludedProducts",
          "req": true,
          "short": "The number of products included in this price book.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when this price book was created.",
          "type": "`$STRING`"
        },
        {
          "name": "customProperties",
          "req": true,
          "short": "A map of custom property names to their values for this price book.",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "short": "A description of the price book.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for this price book.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the price book.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the price book.",
          "type": "`$STRING`"
        },
        {
          "name": "supportedCurrencies",
          "req": true,
          "short": "An array of currency codes that this price book supports.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when this price book was last updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "price_books_price_book",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/activate",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "activate"
                }
              ],
              "select": {
                "exist": [
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "activate"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "deactivate"
                }
              ],
              "select": {
                "exist": [
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "deactivate"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "price_book"
          ]
        ]
      }
    },
    "price_books_price_book_item": {
      "fields": [
        {
          "name": "archived",
          "short": "A boolean indicating whether the price book item is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "The date and time when the price book item was archived, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "billingFrequency",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The frequency at which billing occurs for the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "billingPeriod",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The billing period for the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "costOfGoodsSold",
          "short": "The cost of goods sold for the price book item.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "The date and time when the price book item was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "customProperties",
          "req": true,
          "short": "A map of custom property names to their values for the price book item.",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "short": "A description of the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "short": "A string representing images associated with the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "The name of the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "priceBookId",
          "short": "The unique identifier for the price book containing this item.",
          "type": "`$STRING`"
        },
        {
          "name": "pricing",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "productClassification",
          "short": "The classification of the product.",
          "type": "`$STRING`"
        },
        {
          "name": "productId",
          "req": true,
          "short": "The unique identifier for the product associated with the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "productType",
          "short": "The type of product.",
          "type": "`$STRING`"
        },
        {
          "name": "recurringBillingTerms",
          "short": "The terms of recurring billing for the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "sku",
          "short": "The stock keeping unit (SKU) of the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The current status of the price book item.",
          "type": "`$STRING`"
        },
        {
          "name": "taxCategory",
          "short": "The tax category of the price book item.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "The date and time when the price book item was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "A URL associated with the price book item.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "price_books_price_book_item",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "items"
                }
              ],
              "select": {
                "exist": [
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "items"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "price_book_item_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "property",
                    "orig": "property",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id",
                  "priceBookItemId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "archived",
                  "id",
                  "price_book_id",
                  "property"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "items",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "price_book_item_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id",
                  "priceBookItemId": "id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "items"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "archived",
                  "id",
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "items",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "price_book"
          ]
        ]
      }
    },
    "price_books_price_book_validate": {
      "fields": [
        {
          "name": "errors",
          "req": true,
          "short": "An array of ErrorDetail objects providing information about any errors encountered during validation.",
          "type": "`$ARRAY`"
        },
        {
          "name": "isValid",
          "req": true,
          "short": "A boolean indicating whether the price book is valid.",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "price_books_price_book_validate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "price_book_id",
                    "orig": "price_book_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/validate",
              "rename": {
                "param": {
                  "priceBookId": "price_book_id"
                }
              },
              "segments": [
                {
                  "lit": "commerce"
                },
                {
                  "lit": "price-books"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "price-books"
                },
                {
                  "var": "price_book_id"
                },
                {
                  "lit": "validate"
                }
              ],
              "select": {
                "exist": [
                  "price_book_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "commerce",
                "price-books",
                "2026-09",
                "price-books",
                "{price_book_id}",
                "validate"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "price_book"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

