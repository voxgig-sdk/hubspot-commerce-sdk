package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HubspotCommerce",
			"slug": "hubspot-commerce",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.hubapi.com",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "hapikey",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"advanced": map[string]any{},
				"basic": map[string]any{},
				"batch": map[string]any{},
				"contract": map[string]any{},
				"contracts_contract": map[string]any{},
				"contracts_contract_change": map[string]any{},
				"contracts_contract_change_preview": map[string]any{},
				"contracts_quote": map[string]any{},
				"item": map[string]any{},
				"payment_link": map[string]any{},
				"payment_methods_commerce_payment_method_settings_public": map[string]any{},
				"payments_action_response_with_single_result_simple_public_object": map[string]any{},
				"payments_create_manual_payment_public": map[string]any{},
				"payments_settings_get_billing_settings_public": map[string]any{},
				"payments_settings_get_checkout_fees_public": map[string]any{},
				"payments_settings_get_policy_settings_public": map[string]any{},
				"payments_settings_get_shipping_settings_public": map[string]any{},
				"paymentsaccounts_payment_account_view": map[string]any{},
				"price_book": map[string]any{},
				"price_books_batch_response_price_book_item": map[string]any{},
				"price_books_collection_response_price_book_item_response_forward": map[string]any{},
				"price_books_price_book": map[string]any{},
				"price_books_price_book_item": map[string]any{},
				"price_books_price_book_validate": map[string]any{},
			},
		},
		"entity": map[string]any{
			"advanced": map[string]any{
				"fields": []any{},
				"name": "advanced",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "payment_crm_object_id",
											"orig": "payment_crm_object_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async",
								"rename": map[string]any{
									"param": map[string]any{
										"paymentCrmObjectId": "payment_crm_object_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"var": "payment_crm_object_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "retry",
									},
									map[string]any{
										"lit": "async",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"payment_crm_object_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments",
									"2027-03-beta",
									"{payment_crm_object_id}",
									"actions",
									"retry",
									"async",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2027_03_beta",
						},
					},
				},
			},
			"basic": map[string]any{
				"fields": []any{},
				"name": "basic",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "checkout_fee_id",
											"orig": "checkout_fee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}",
								"rename": map[string]any{
									"param": map[string]any{
										"checkoutFeeId": "checkout_fee_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "checkout-fees",
									},
									map[string]any{
										"var": "checkout_fee_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checkout_fee_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"checkout-fees",
									"{checkout_fee_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "payment_link_id",
											"orig": "payment_link_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
								"rename": map[string]any{
									"param": map[string]any{
										"paymentLinkId": "payment_link_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payment-links",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "payment-links",
									},
									map[string]any{
										"var": "payment_link_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"payment_link_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
									"{payment_link_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"payment_link",
						},
						[]any{
							"checkout_fee",
						},
						[]any{
							"price_book",
						},
					},
				},
			},
			"batch": map[string]any{
				"fields": []any{},
				"name": "batch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "archive",
									},
								},
								"select": map[string]any{
									"$action": "archive",
									"exist": []any{
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"batch",
									"archive",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"price_book",
						},
					},
				},
			},
			"contract": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "addressTypesToCollect",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array indicating the types of addresses to collect.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "allTransactionsFeeName",
						"short": "The name of the fee applied to all transactions.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "allTransactionsFeePercentage",
						"short": "The percentage of the fee applied to all transactions.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "allowedPaymentMethods",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of allowed payment methods.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "annualContractValue",
						"short": "The annual value of the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "automatedTaxesEnabled",
						"req": true,
						"short": "Indicates whether automated taxes are enabled for the contract.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "billingAddress",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "An object representing the billing address for the contract.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "billingCompanyId",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The unique identifier of the billing company associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "billingContactId",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The unique identifier of the billing contact associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "billingStartDateOverride",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The date to override the billing start date, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "businessUnitId",
						"short": "The unique identifier of the business unit associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cardFeeName",
						"short": "The name of the fee applied to card transactions.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cardFeePercentage",
						"short": "The percentage of the fee applied to card transactions.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "collectionProcess",
						"short": "The process for collecting payments.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "contractEffectiveDate",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The date when the contract becomes effective, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contractSourceId",
						"short": "The unique identifier of the source of the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when the contract was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currencyCode",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The currency code associated with the contract, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentAnnualRecurringRevenue",
						"short": "The current annual recurring revenue for the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "currentMonthlyRecurringRevenue",
						"short": "The current monthly recurring revenue for the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "customProperties",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "A map of custom property names to their values.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "dealId",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The unique identifier of the deal associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "directDebitFeeName",
						"short": "The name of the fee applied to direct debit transactions.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "directDebitFeePercentage",
						"short": "The percentage of the fee applied to direct debit transactions.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "discountCode",
						"short": "The discount code applied to the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "endDate",
						"short": "The end date of the contract, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "externalPaymentMethodReferenceId",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The external reference ID for the payment method.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hubspotBillingEnabled",
						"req": true,
						"short": "Indicates whether HubSpot billing is enabled for the contract.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"short": "The language associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItems",
						"req": true,
						"short": "An array of line items included in the contract.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "locale",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The locale associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The name of the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "netPaymentTerms",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The net payment terms for the contract, represented as an integer.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ownerId",
						"req": true,
						"short": "An object representing the ID of the contract owner.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "paymentEnabled",
						"req": true,
						"short": "Indicates whether payment is enabled for the contract.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "paymentMethod",
						"short": "The payment method used for the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "poNumber",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The purchase order number associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preTerminationContractValue",
						"short": "The value of the contract before termination.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "renewalContractId",
						"short": "The unique identifier of the renewal contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "renewalDate",
						"short": "The date when the contract is set to renew, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerCompanyAddress",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "An object representing the address of the seller's company.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sellerCompanyDomain",
						"req": true,
						"short": "An object representing the domain of the seller's company.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sellerCompanyName",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The name of the seller's company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerEmail",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The email address of the seller.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerFirstName",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The first name of the seller.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerLastName",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The last name of the seller.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerPhone",
						"req": true,
						"short": "An object representing the phone number of the seller.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sellerPhoneNumber",
						"short": "The phone number of the seller.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "startDate",
						"short": "The start date of the contract, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "storePaymentMethodAtCheckout",
						"req": true,
						"short": "Indicates whether the payment method should be stored at checkout.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date",
						"name": "terminationDate",
						"short": "The date when the contract is terminated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalBilledAmount",
						"short": "The total amount billed under the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalBilledAmountPreTax",
						"short": "The total amount billed under the contract before tax.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalCollectedFees",
						"short": "The total amount of fees collected under the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalCollectedTaxes",
						"short": "The total amount of taxes collected under the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalContractValue",
						"short": "The total value of the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalPaidAmount",
						"short": "The total amount paid under the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the contract was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contract",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/contracts",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "contracts",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "contract_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}",
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "contract_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}",
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contracts_contract": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "addressTypesToCollect",
						"req": true,
						"short": "An array indicating the types of addresses to collect.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "allTransactionsFeeName",
						"short": "The name of the fee applied to all transactions.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "allTransactionsFeePercentage",
						"short": "The percentage of the fee applied to all transactions.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "allowedPaymentMethods",
						"req": true,
						"short": "An array of allowed payment methods.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "annualContractValue",
						"short": "The annual value of the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "automatedTaxesEnabled",
						"req": true,
						"short": "Indicates whether automated taxes are enabled for the contract.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "billingAddress",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "billingCompanyId",
						"short": "The unique identifier of the billing company associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "billingContactId",
						"short": "The unique identifier of the billing contact associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "billingStartDateOverride",
						"short": "The date to override the billing start date, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "businessUnitId",
						"short": "The unique identifier of the business unit associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cardFeeName",
						"short": "The name of the fee applied to card transactions.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cardFeePercentage",
						"short": "The percentage of the fee applied to card transactions.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "collectionProcess",
						"short": "The process for collecting payments.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "contractEffectiveDate",
						"short": "The date when the contract becomes effective, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contractSourceId",
						"short": "The unique identifier of the source of the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when the contract was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currencyCode",
						"short": "The currency code associated with the contract, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentAnnualRecurringRevenue",
						"short": "The current annual recurring revenue for the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "currentMonthlyRecurringRevenue",
						"short": "The current monthly recurring revenue for the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "customProperties",
						"req": true,
						"short": "A map of custom property names to their values.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "dealId",
						"short": "The unique identifier of the deal associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "directDebitFeeName",
						"short": "The name of the fee applied to direct debit transactions.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "directDebitFeePercentage",
						"short": "The percentage of the fee applied to direct debit transactions.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "discountCode",
						"short": "The discount code applied to the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "endDate",
						"short": "The end date of the contract, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "externalPaymentMethodReferenceId",
						"short": "The external reference ID for the payment method.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hubspotBillingEnabled",
						"req": true,
						"short": "Indicates whether HubSpot billing is enabled for the contract.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"short": "The language associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItems",
						"req": true,
						"short": "An array of line items included in the contract.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "locale",
						"short": "The locale associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "netPaymentTerms",
						"short": "The net payment terms for the contract, represented as an integer.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "paymentEnabled",
						"req": true,
						"short": "Indicates whether payment is enabled for the contract.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "paymentMethod",
						"short": "The payment method used for the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "poNumber",
						"short": "The purchase order number associated with the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preTerminationContractValue",
						"short": "The value of the contract before termination.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "renewalContractId",
						"short": "The unique identifier of the renewal contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "renewalDate",
						"short": "The date when the contract is set to renew, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerCompanyAddress",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sellerCompanyName",
						"short": "The name of the seller's company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerEmail",
						"short": "The email address of the seller.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerFirstName",
						"short": "The first name of the seller.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerLastName",
						"short": "The last name of the seller.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sellerPhoneNumber",
						"short": "The phone number of the seller.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "startDate",
						"short": "The start date of the contract, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the contract.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "storePaymentMethodAtCheckout",
						"req": true,
						"short": "Indicates whether the payment method should be stored at checkout.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date",
						"name": "terminationDate",
						"short": "The date when the contract is terminated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalBilledAmount",
						"short": "The total amount billed under the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalBilledAmountPreTax",
						"short": "The total amount billed under the contract before tax.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalCollectedFees",
						"short": "The total amount of fees collected under the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalCollectedTaxes",
						"short": "The total amount of taxes collected under the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalContractValue",
						"short": "The total value of the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "totalPaidAmount",
						"short": "The total amount paid under the contract.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the contract was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contracts_contract",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "contract_id",
											"orig": "contract_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/terminate",
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "contract_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"var": "contract_id",
									},
									map[string]any{
										"lit": "terminate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contract_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{contract_id}",
									"terminate",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contract",
						},
					},
				},
			},
			"contracts_contract_change": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contractId",
						"req": true,
						"short": "The unique identifier of the contract associated with this change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when the contract change was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deltaLineItems",
						"req": true,
						"short": "An array of line items that represent the difference resulting from the contract change.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date",
						"name": "effectiveDate",
						"short": "The date when the contract change becomes effective, in YYYY-MM-DD format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the contract change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItemChanges",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of changes to line items associated with the contract change.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The name of the contract change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "proposedLineItems",
						"req": true,
						"short": "An array of line items that are proposed as part of the contract change.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "prorating",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether the contract change involves prorating.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "quoteId",
						"short": "The unique identifier of the quote associated with this contract change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the contract change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of contract change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the contract change was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contracts_contract_change",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "change_id",
											"orig": "change_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/changes/{changeId}/accept",
								"rename": map[string]any{
									"param": map[string]any{
										"changeId": "change_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "changes",
									},
									map[string]any{
										"var": "change_id",
									},
									map[string]any{
										"lit": "accept",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"change_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"{change_id}",
									"accept",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "change_id",
											"orig": "change_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/changes/{changeId}/cancel",
								"rename": map[string]any{
									"param": map[string]any{
										"changeId": "change_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "changes",
									},
									map[string]any{
										"var": "change_id",
									},
									map[string]any{
										"lit": "cancel",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"change_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"{change_id}",
									"cancel",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "contract_id",
											"orig": "contract_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/changes",
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "contract_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"var": "contract_id",
									},
									map[string]any{
										"lit": "changes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contract_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{contract_id}",
									"changes",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/changes",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "changes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "contract_id",
											"orig": "contract_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/changes",
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "contract_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"var": "contract_id",
									},
									map[string]any{
										"lit": "changes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contract_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.changes`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{contract_id}",
									"changes",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "change_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/contracts/2027-03-beta/changes/{changeId}",
								"rename": map[string]any{
									"param": map[string]any{
										"changeId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "changes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "change_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/contracts/2027-03-beta/changes/{changeId}",
								"rename": map[string]any{
									"param": map[string]any{
										"changeId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "changes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"change",
						},
						[]any{
							"contract",
						},
					},
				},
			},
			"contracts_contract_change_preview": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "deltaLineItems",
						"req": true,
						"short": "An array of LineItem objects representing the changes in line items compared to the current state of the contract.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "proposedLineItems",
						"req": true,
						"short": "An array of LineItem objects representing the proposed state of line items after the changes are applied.",
						"type": "`$ARRAY`",
					},
				},
				"name": "contracts_contract_change_preview",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/changes/preview",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "changes",
									},
									map[string]any{
										"lit": "preview",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"preview",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contracts_quote": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dealId",
						"short": "The unique identifier of the deal associated with the renewal quote.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dealPipeline",
						"short": "The identifier of the pipeline in which the deal is located.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dealStage",
						"short": "The identifier of the stage within the pipeline that the deal is currently in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the renewal quote.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quoteTemplateId",
						"req": true,
						"short": "The unique identifier of the quote template to be used for creating the renewal quote.",
						"type": "`$STRING`",
					},
				},
				"name": "contracts_quote",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "contract_id",
											"orig": "contract_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes",
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "contract_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "contracts",
									},
									map[string]any{
										"var": "contract_id",
									},
									map[string]any{
										"lit": "renewal-quotes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contract_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{contract_id}",
									"renewal-quotes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contract",
						},
					},
				},
			},
			"item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "item",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "price_book_item_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
										"priceBookItemId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"price_book",
						},
					},
				},
			},
			"payment_link": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "acceptedPaymentMethods",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of accepted payment methods for the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "additionalFormFields",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of additional form fields included in the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "A boolean indicating whether the payment link is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "The date and time when the payment link was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "automatedSalesTaxEnabled",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether automated sales tax is enabled for the payment link.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "businessUnitId",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The business unit ID associated with the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "checkoutFeeIds",
						"req": true,
						"short": "An array of checkout fee IDs associated with the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "collectFullBillingAddress",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether to collect the full billing address during checkout.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "collectShippingAddress",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether to collect the shipping address during checkout.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "int32",
						"name": "completedPurchaseCount",
						"req": true,
						"short": "The number of completed purchases made through this payment link.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "createContractOnPurchase",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether a contract should be created upon purchase.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when the payment link was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currencyCode",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The currency code for the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dealConfigurations",
						"req": true,
						"short": "An object containing deal configuration settings.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "descriptionHtml",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The HTML description of the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "discount",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "discountCodeEnabled",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether discount codes are enabled for the payment link.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "discountObjectId",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the object ID of a discount associated with the payment link.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "discounts",
						"req": true,
						"short": "An array of discount objects associated with the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "domainId",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The domain ID associated with the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enableDefaultCheckoutFees",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether default checkout fees are enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "expirationSettings",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "An object representing the expiration settings for the payment link.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "feeObjectIds",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of strings representing the IDs of fee objects associated with the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "fees",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of fee objects associated with the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "formGuid",
						"req": true,
						"short": "The form GUID associated with the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "includeEmailInSuccessRedirect",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether to include the email in the success redirect URL.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isOneTimeUseEnabled",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether the payment link is enabled for one-time use.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "lineItemObjectIds",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of line item object IDs associated with the payment link, each represented as a string.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "lineItems",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of line items associated with the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "paymentLinkName",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "paymentLinkUrl",
						"req": true,
						"short": "The URL of the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The current state of the payment link, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "storePaymentMethodAtCheckout",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether to store the payment method at checkout.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "successUrl",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The URL to redirect to upon successful payment, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "taxObjectIds",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of string IDs representing tax objects associated with the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "taxes",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of tax objects associated with the payment link.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the payment link was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "payment_link",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/payment-links/2026-09/payment-links",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payment-links",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "payment-links",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "created_after",
											"orig": "created_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "created_at",
											"orig": "created_at",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "created_before",
											"orig": "created_before",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "updated_at",
											"orig": "updated_at",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payment-links/2026-09/payment-links",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payment-links",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "payment-links",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"created_after",
										"created_at",
										"created_before",
										"limit",
										"sort",
										"updated_after",
										"updated_at",
										"updated_before",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "payment_link_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
								"rename": map[string]any{
									"param": map[string]any{
										"paymentLinkId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payment-links",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "payment-links",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "payment_link_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
								"rename": map[string]any{
									"param": map[string]any{
										"paymentLinkId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payment-links",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "payment-links",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payment_methods_commerce_payment_method_settings_public": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "activeCurrencies",
						"req": true,
						"short": "A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "commercePaymentMethod",
						"req": true,
						"short": "The type of payment method.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isDefaultOn",
						"req": true,
						"short": "A boolean indicating whether this payment method is set as the default option.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "paymentMethodSettings",
						"req": true,
						"short": "A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "paymentMethodUpdates",
						"req": true,
						"short": "An array of updates to be applied to commerce payment methods.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supportedCurrencies",
						"req": true,
						"short": "A full list of currencies that are supported by the bundled commercePaymentMethod.",
						"type": "`$ARRAY`",
					},
				},
				"name": "payment_methods_commerce_payment_method_settings_public",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payment-methods/2027-03-beta/settings",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payment-methods",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.paymentMethodSettings`",
								},
								"parts": []any{
									"commerce",
									"payment-methods",
									"2027-03-beta",
									"settings",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/payment-methods/2027-03-beta/settings",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payment-methods",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payment-methods",
									"2027-03-beta",
									"settings",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payments_action_response_with_single_result_simple_public_object": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "A string indicating the category of the error.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "context",
						"req": true,
						"short": "An object containing additional context about the error condition, where keys are context names and values are arrays of strings.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "errors",
						"req": true,
						"short": "An array of ErrorDetail objects providing further information about the error.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "A string that uniquely identifies this specific error instance.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "links",
						"req": true,
						"short": "An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "message",
						"req": true,
						"short": "A string containing a human-readable message describing the error.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "A string representing the status of the error.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subCategory",
						"short": "An object providing more specific details about the error category.",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "payments_action_response_with_single_result_simple_public_object",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "payment_crm_object_id",
											"orig": "payment_crm_object_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "task_id",
											"orig": "task_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status",
								"rename": map[string]any{
									"param": map[string]any{
										"paymentCrmObjectId": "payment_crm_object_id",
										"taskId": "task_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"var": "payment_crm_object_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "retry",
									},
									map[string]any{
										"lit": "async",
									},
									map[string]any{
										"lit": "tasks",
									},
									map[string]any{
										"var": "task_id",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"payment_crm_object_id",
										"task_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments",
									"2027-03-beta",
									"{payment_crm_object_id}",
									"actions",
									"retry",
									"async",
									"tasks",
									"{task_id}",
									"status",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2027_03_beta",
							"task",
						},
					},
				},
			},
			"payments_create_manual_payment_public": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associations",
						"req": true,
						"short": "An array of associations related to the payment, where each item is an AssociationPublicRequest object.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "billingAddress",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "currencyCode",
						"req": true,
						"short": "The currency code for the payment, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerEmail",
						"short": "The email address of the customer making the payment, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the created manual payment, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "paymentAmount",
						"req": true,
						"short": "The amount of the payment, represented as a number.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "paymentDate",
						"req": true,
						"short": "The date of the payment, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "paymentMethod",
						"req": true,
						"short": "The method used for the payment, represented as a string.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "payments_create_manual_payment_public",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/payments/2027-03-beta/manual-payments",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "manual-payments",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments",
									"2027-03-beta",
									"manual-payments",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payments_settings_get_billing_settings_public": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountGoogleAnalyticsEnabled",
						"short": "Indicates whether Google Analytics tracking is enabled for the account.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "checkoutPrefillEnabled",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Indicates whether checkout fields should be prefilled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "collectFullBillingAddress",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Indicates whether the full billing address should be collected.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "collectPaymentMethodOnFile",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Indicates whether a payment method should be kept on file.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "defaultFromEmailAddress",
						"req": true,
						"short": "The default email address used for sending communications.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "paymentsGoogleAnalyticsEnabled",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Indicates whether Google Analytics tracking is enabled for payments.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "recaptchaEnabled",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Indicates whether reCAPTCHA is enabled for additional security.",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "payments_settings_get_billing_settings_public",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/billing",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "billing",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"billing",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/billing",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "billing",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"billing",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payments_settings_get_checkout_fees_public": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "appliesToPaymentType",
						"req": true,
						"short": "The type of payment to which this fee applies, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "checkoutFees",
						"req": true,
						"short": "An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "feeValue",
						"req": true,
						"short": "The numerical value of the fee, indicating the amount to be charged.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "feeValueType",
						"req": true,
						"short": "The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for this checkout fee configuration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the checkout fee, used for identification and display purposes.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "payments_settings_get_checkout_fees_public",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "checkout-fees",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.checkoutFees`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"checkout-fees",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "checkout-fees",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"checkout-fees",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payments_settings_get_policy_settings_public": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "acknowledgementRequired",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether an acknowledgement is required for the policy.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "cancellationPolicyText",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string containing the text of the cancellation policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customPolicyEnabled",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether a custom policy is enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "refundPolicyText",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string containing the text of the refund policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "termsOfServiceUrl",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the URL of the terms of service.",
						"type": "`$STRING`",
					},
				},
				"name": "payments_settings_get_policy_settings_public",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/policy",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "policy",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"policy",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/policy",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "policy",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"policy",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payments_settings_get_shipping_settings_public": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "collectShippingAddressByDefault",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether the shipping address is collected by default.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "countriesShippedTo",
						"req": true,
						"short": "An array of strings representing the list of countries to which shipping is available.",
						"type": "`$ARRAY`",
					},
				},
				"name": "payments_settings_get_shipping_settings_public",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/shipping",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "shipping",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.countriesShippedTo`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"shipping",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/shipping",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "payments-settings",
									},
									map[string]any{
										"lit": "shipping",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"shipping",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"paymentsaccounts_payment_account_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "canPayout",
						"req": true,
						"short": "A boolean indicating whether the account is capable of making payouts.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "canTransact",
						"req": true,
						"short": "A boolean indicating whether the account is capable of processing transactions.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when the payment account was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eligibleProcessorTypes",
						"req": true,
						"short": "An array of processor types that the account is eligible to use.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "enrollmentState",
						"req": true,
						"short": "The current enrollment state of the payment account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hasTransacted",
						"req": true,
						"short": "A boolean indicating whether the account has ever processed a transaction.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The portalId for the payment account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastTransactedAt",
						"short": "The date and time of the last transaction made with this account, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "processorType",
						"req": true,
						"short": "The type of payment processor associated with the account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the payment account was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "paymentsaccounts_payment_account_view",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payment-accounts/2026-09/status",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "payment-accounts",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.eligibleProcessorTypes`",
								},
								"parts": []any{
									"commerce",
									"payment-accounts",
									"2026-09",
									"status",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"price_book": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"short": "A boolean indicating whether this price book is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "The date and time when this price book was archived.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "autoAssignmentEnabled",
						"req": true,
						"short": "Indicates whether auto-assignment is enabled for the price book.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "int32",
						"name": "countOfIncludedProducts",
						"req": true,
						"short": "The number of products included in this price book.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when this price book was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customProperties",
						"req": true,
						"short": "A map of custom property names to their values for this price book.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A description of the price book.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for this price book.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The name of the price book.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the price book.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "supportedCurrencies",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of currency codes that this price book supports.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when this price book was last updated.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "price_book",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/price-books/2026-09/price-books",
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"price_books_batch_response_price_book_item": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A map of link names to associated URIs providing additional information or actions related to the batch operation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of PriceBookItemResponse objects representing the individual results of the batch operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch operation.",
						"type": "`$STRING`",
					},
				},
				"name": "price_books_batch_response_price_book_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "create",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"batch",
									"create",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "update",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"batch",
									"update",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"price_book",
						},
					},
				},
			},
			"price_books_collection_response_price_book_item_response_forward": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"short": "A boolean indicating whether the price book item is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "The date and time when the price book item was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "billingFrequency",
						"short": "The frequency at which billing occurs for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "billingPeriod",
						"short": "The billing period for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "costOfGoodsSold",
						"short": "The cost of goods sold for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when the price book item was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customProperties",
						"req": true,
						"short": "A map of custom property names to their values for the price book item.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"short": "A string representing images associated with the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "priceBookId",
						"short": "The unique identifier for the price book containing this item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pricing",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "productClassification",
						"short": "The classification of the product.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productId",
						"req": true,
						"short": "The unique identifier for the product associated with the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productType",
						"short": "The type of product.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recurringBillingTerms",
						"short": "The terms of recurring billing for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sku",
						"short": "The stock keeping unit (SKU) of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "The current status of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "taxCategory",
						"short": "The tax category of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the price book item was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "A URL associated with the price book item.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "price_books_collection_response_price_book_item_response_forward",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "items",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
										"price_book_id",
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"price_book",
						},
					},
				},
			},
			"price_books_price_book": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"short": "A boolean indicating whether this price book is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "The date and time when this price book was archived.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "autoAssignmentEnabled",
						"req": true,
						"short": "Indicates whether auto-assignment is enabled for the price book.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "int32",
						"name": "countOfIncludedProducts",
						"req": true,
						"short": "The number of products included in this price book.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when this price book was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customProperties",
						"req": true,
						"short": "A map of custom property names to their values for this price book.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the price book.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for this price book.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the price book.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the price book.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "supportedCurrencies",
						"req": true,
						"short": "An array of currency codes that this price book supports.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when this price book was last updated.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "price_books_price_book",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/activate",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "activate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"activate",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "deactivate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"deactivate",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"price_book",
						},
					},
				},
			},
			"price_books_price_book_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"short": "A boolean indicating whether the price book item is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "The date and time when the price book item was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "billingFrequency",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The frequency at which billing occurs for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "billingPeriod",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The billing period for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "costOfGoodsSold",
						"short": "The cost of goods sold for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time when the price book item was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customProperties",
						"req": true,
						"short": "A map of custom property names to their values for the price book item.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"short": "A string representing images associated with the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "priceBookId",
						"short": "The unique identifier for the price book containing this item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pricing",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "productClassification",
						"short": "The classification of the product.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productId",
						"req": true,
						"short": "The unique identifier for the product associated with the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productType",
						"short": "The type of product.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recurringBillingTerms",
						"short": "The terms of recurring billing for the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sku",
						"short": "The stock keeping unit (SKU) of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The current status of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "taxCategory",
						"short": "The tax category of the price book item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the price book item was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "A URL associated with the price book item.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "price_books_price_book_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "items",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "price_book_item_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
										"priceBookItemId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
										"price_book_id",
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "price_book_item_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
										"priceBookItemId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "items",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"price_book",
						},
					},
				},
			},
			"price_books_price_book_validate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"req": true,
						"short": "An array of ErrorDetail objects providing information about any errors encountered during validation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "isValid",
						"req": true,
						"short": "A boolean indicating whether the price book is valid.",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "price_books_price_book_validate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "price_book_id",
											"orig": "price_book_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/validate",
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "commerce",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "price-books",
									},
									map[string]any{
										"var": "price_book_id",
									},
									map[string]any{
										"lit": "validate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"validate",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"price_book",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
