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
				"contracts_contract_change_summary": map[string]any{},
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
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async",
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
								"parts": []any{
									"commerce",
									"payments",
									"2027-03-beta",
									"{payment_crm_object_id}",
									"actions",
									"retry",
									"async",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"paymentCrmObjectId": "payment_crm_object_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "payment_crm_object_id",
											"orig": "payment_crm_object_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"payment_crm_object_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}",
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"checkout-fees",
									"{checkout_fee_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"checkoutFeeId": "checkout_fee_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "checkout_fee_id",
											"orig": "checkout_fee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checkout_fee_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
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
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
									"{payment_link_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"paymentLinkId": "payment_link_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "payment_link_id",
											"orig": "payment_link_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"payment_link_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.payment_link",
						},
						[]any{
							"$.main.kit.entity.price_book",
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
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive",
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
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"$action": "archive",
									"exist": []any{
										"price_book_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.price_book",
						},
					},
				},
			},
			"contract": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "addressTypesToCollect",
						"title": "Address Types To Collect",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array indicating the types of addresses to collect.",
					},
					map[string]any{
						"name": "allTransactionsFeeName",
						"title": "All Transactions Fee Name",
						"type": "`$STRING`",
						"short": "The name of the fee applied to all transactions.",
					},
					map[string]any{
						"name": "allTransactionsFeePercentage",
						"title": "All Transactions Fee Percentage",
						"type": "`$NUMBER`",
						"short": "The percentage of the fee applied to all transactions.",
					},
					map[string]any{
						"name": "allowedPaymentMethods",
						"title": "Allowed Payment Methods",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of allowed payment methods.",
					},
					map[string]any{
						"name": "annualContractValue",
						"title": "Annual Contract Value",
						"type": "`$NUMBER`",
						"short": "The annual value of the contract.",
					},
					map[string]any{
						"name": "automatedTaxesEnabled",
						"title": "Automated Taxes Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether automated taxes are enabled for the contract.",
					},
					map[string]any{
						"name": "billingAddress",
						"title": "Billing Address",
						"type": "`$OBJECT`",
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
					},
					map[string]any{
						"name": "billingCompanyId",
						"title": "Billing Company Id",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "billingContactId",
						"title": "Billing Contact Id",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "billingStartDateOverride",
						"title": "Billing Start Date Override",
						"type": "`$STRING`",
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
						"format": "date",
					},
					map[string]any{
						"name": "businessUnitId",
						"title": "Business Unit Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the business unit associated with the contract.",
					},
					map[string]any{
						"name": "cardFeeName",
						"title": "Card Fee Name",
						"type": "`$STRING`",
						"short": "The name of the fee applied to card transactions.",
					},
					map[string]any{
						"name": "cardFeePercentage",
						"title": "Card Fee Percentage",
						"type": "`$NUMBER`",
						"short": "The percentage of the fee applied to card transactions.",
					},
					map[string]any{
						"name": "collectionProcess",
						"title": "Collection Process",
						"type": "`$STRING`",
						"short": "The process for collecting payments.",
					},
					map[string]any{
						"name": "contractEffectiveDate",
						"title": "Contract Effective Date",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The date when the contract becomes effective, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "contractSourceId",
						"title": "Contract Source Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the source of the contract.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when the contract was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The currency code associated with the contract, represented as a string.",
					},
					map[string]any{
						"name": "currentAnnualRecurringRevenue",
						"title": "Current Annual Recurring Revenue",
						"type": "`$NUMBER`",
						"short": "The current annual recurring revenue for the contract.",
					},
					map[string]any{
						"name": "currentMonthlyRecurringRevenue",
						"title": "Current Monthly Recurring Revenue",
						"type": "`$NUMBER`",
						"short": "The current monthly recurring revenue for the contract.",
					},
					map[string]any{
						"name": "customProperties",
						"title": "Custom Properties",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "A map of custom property names to their values.",
					},
					map[string]any{
						"name": "dealId",
						"title": "Deal Id",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "directDebitFeeName",
						"title": "Direct Debit Fee Name",
						"type": "`$STRING`",
						"short": "The name of the fee applied to direct debit transactions.",
					},
					map[string]any{
						"name": "directDebitFeePercentage",
						"title": "Direct Debit Fee Percentage",
						"type": "`$NUMBER`",
						"short": "The percentage of the fee applied to direct debit transactions.",
					},
					map[string]any{
						"name": "discountCode",
						"title": "Discount Code",
						"type": "`$STRING`",
						"short": "The discount code applied to the contract.",
					},
					map[string]any{
						"name": "endDate",
						"title": "End Date",
						"type": "`$STRING`",
						"short": "The end date of the contract, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "externalPaymentMethodReferenceId",
						"title": "External Payment Method Reference Id",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "hubspotBillingEnabled",
						"title": "Hubspot Billing Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether HubSpot billing is enabled for the contract.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the contract.",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"short": "The language associated with the contract.",
					},
					map[string]any{
						"name": "lineItems",
						"title": "Line Items",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of line items included in the contract.",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "netPaymentTerms",
						"title": "Net Payment Terms",
						"type": "`$INTEGER`",
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
						"format": "int32",
					},
					map[string]any{
						"name": "ownerId",
						"title": "Owner Id",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object representing the ID of the contract owner.",
					},
					map[string]any{
						"name": "paymentEnabled",
						"title": "Payment Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether payment is enabled for the contract.",
					},
					map[string]any{
						"name": "paymentMethod",
						"title": "Payment Method",
						"type": "`$STRING`",
						"short": "The payment method used for the contract.",
					},
					map[string]any{
						"name": "poNumber",
						"title": "Po Number",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "preTerminationContractValue",
						"title": "Pre Termination Contract Value",
						"type": "`$NUMBER`",
						"short": "The value of the contract before termination.",
					},
					map[string]any{
						"name": "renewalContractId",
						"title": "Renewal Contract Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the renewal contract.",
					},
					map[string]any{
						"name": "renewalDate",
						"title": "Renewal Date",
						"type": "`$STRING`",
						"short": "The date when the contract is set to renew, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "sellerCompanyAddress",
						"title": "Seller Company Address",
						"type": "`$OBJECT`",
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
					},
					map[string]any{
						"name": "sellerCompanyDomain",
						"title": "Seller Company Domain",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object representing the domain of the seller's company.",
					},
					map[string]any{
						"name": "sellerCompanyName",
						"title": "Seller Company Name",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "sellerEmail",
						"title": "Seller Email",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "sellerFirstName",
						"title": "Seller First Name",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "sellerLastName",
						"title": "Seller Last Name",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "sellerPhone",
						"title": "Seller Phone",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object representing the phone number of the seller.",
					},
					map[string]any{
						"name": "sellerPhoneNumber",
						"title": "Seller Phone Number",
						"type": "`$STRING`",
						"short": "The phone number of the seller.",
					},
					map[string]any{
						"name": "startDate",
						"title": "Start Date",
						"type": "`$STRING`",
						"short": "The start date of the contract, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the contract.",
					},
					map[string]any{
						"name": "storePaymentMethodAtCheckout",
						"title": "Store Payment Method At Checkout",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the payment method should be stored at checkout.",
					},
					map[string]any{
						"name": "terminationDate",
						"title": "Termination Date",
						"type": "`$STRING`",
						"short": "The date when the contract is terminated, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "totalBilledAmount",
						"title": "Total Billed Amount",
						"type": "`$NUMBER`",
						"short": "The total amount billed under the contract.",
					},
					map[string]any{
						"name": "totalBilledAmountPreTax",
						"title": "Total Billed Amount Pre Tax",
						"type": "`$NUMBER`",
						"short": "The total amount billed under the contract before tax.",
					},
					map[string]any{
						"name": "totalCollectedFees",
						"title": "Total Collected Fees",
						"type": "`$NUMBER`",
						"short": "The total amount of fees collected under the contract.",
					},
					map[string]any{
						"name": "totalCollectedTaxes",
						"title": "Total Collected Taxes",
						"type": "`$NUMBER`",
						"short": "The total amount of taxes collected under the contract.",
					},
					map[string]any{
						"name": "totalContractValue",
						"title": "Total Contract Value",
						"type": "`$NUMBER`",
						"short": "The total value of the contract.",
					},
					map[string]any{
						"name": "totalPaidAmount",
						"title": "Total Paid Amount",
						"type": "`$NUMBER`",
						"short": "The total amount paid under the contract.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the contract was last updated, in ISO 8601 format.",
						"format": "date-time",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "contract_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "contract_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Address Types To Collect",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array indicating the types of addresses to collect.",
					},
					map[string]any{
						"name": "allTransactionsFeeName",
						"title": "All Transactions Fee Name",
						"type": "`$STRING`",
						"short": "The name of the fee applied to all transactions.",
					},
					map[string]any{
						"name": "allTransactionsFeePercentage",
						"title": "All Transactions Fee Percentage",
						"type": "`$NUMBER`",
						"short": "The percentage of the fee applied to all transactions.",
					},
					map[string]any{
						"name": "allowedPaymentMethods",
						"title": "Allowed Payment Methods",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of allowed payment methods.",
					},
					map[string]any{
						"name": "annualContractValue",
						"title": "Annual Contract Value",
						"type": "`$NUMBER`",
						"short": "The annual value of the contract.",
					},
					map[string]any{
						"name": "automatedTaxesEnabled",
						"title": "Automated Taxes Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether automated taxes are enabled for the contract.",
					},
					map[string]any{
						"name": "billingAddress",
						"title": "Billing Address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "billingCompanyId",
						"title": "Billing Company Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the billing company associated with the contract.",
					},
					map[string]any{
						"name": "billingContactId",
						"title": "Billing Contact Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the billing contact associated with the contract.",
					},
					map[string]any{
						"name": "billingStartDateOverride",
						"title": "Billing Start Date Override",
						"type": "`$STRING`",
						"short": "The date to override the billing start date, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "businessUnitId",
						"title": "Business Unit Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the business unit associated with the contract.",
					},
					map[string]any{
						"name": "cardFeeName",
						"title": "Card Fee Name",
						"type": "`$STRING`",
						"short": "The name of the fee applied to card transactions.",
					},
					map[string]any{
						"name": "cardFeePercentage",
						"title": "Card Fee Percentage",
						"type": "`$NUMBER`",
						"short": "The percentage of the fee applied to card transactions.",
					},
					map[string]any{
						"name": "collectionProcess",
						"title": "Collection Process",
						"type": "`$STRING`",
						"short": "The process for collecting payments.",
					},
					map[string]any{
						"name": "contractEffectiveDate",
						"title": "Contract Effective Date",
						"type": "`$STRING`",
						"short": "The date when the contract becomes effective, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "contractSourceId",
						"title": "Contract Source Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the source of the contract.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when the contract was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"short": "The currency code associated with the contract, represented as a string.",
					},
					map[string]any{
						"name": "currentAnnualRecurringRevenue",
						"title": "Current Annual Recurring Revenue",
						"type": "`$NUMBER`",
						"short": "The current annual recurring revenue for the contract.",
					},
					map[string]any{
						"name": "currentMonthlyRecurringRevenue",
						"title": "Current Monthly Recurring Revenue",
						"type": "`$NUMBER`",
						"short": "The current monthly recurring revenue for the contract.",
					},
					map[string]any{
						"name": "customProperties",
						"title": "Custom Properties",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A map of custom property names to their values.",
					},
					map[string]any{
						"name": "dealId",
						"title": "Deal Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the deal associated with the contract.",
					},
					map[string]any{
						"name": "directDebitFeeName",
						"title": "Direct Debit Fee Name",
						"type": "`$STRING`",
						"short": "The name of the fee applied to direct debit transactions.",
					},
					map[string]any{
						"name": "directDebitFeePercentage",
						"title": "Direct Debit Fee Percentage",
						"type": "`$NUMBER`",
						"short": "The percentage of the fee applied to direct debit transactions.",
					},
					map[string]any{
						"name": "discountCode",
						"title": "Discount Code",
						"type": "`$STRING`",
						"short": "The discount code applied to the contract.",
					},
					map[string]any{
						"name": "endDate",
						"title": "End Date",
						"type": "`$STRING`",
						"short": "The end date of the contract, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "externalPaymentMethodReferenceId",
						"title": "External Payment Method Reference Id",
						"type": "`$STRING`",
						"short": "The external reference ID for the payment method.",
					},
					map[string]any{
						"name": "hubspotBillingEnabled",
						"title": "Hubspot Billing Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether HubSpot billing is enabled for the contract.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the contract.",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"short": "The language associated with the contract.",
					},
					map[string]any{
						"name": "lineItems",
						"title": "Line Items",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of line items included in the contract.",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
						"short": "The locale associated with the contract.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the contract.",
					},
					map[string]any{
						"name": "netPaymentTerms",
						"title": "Net Payment Terms",
						"type": "`$INTEGER`",
						"short": "The net payment terms for the contract, represented as an integer.",
						"format": "int32",
					},
					map[string]any{
						"name": "paymentEnabled",
						"title": "Payment Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether payment is enabled for the contract.",
					},
					map[string]any{
						"name": "paymentMethod",
						"title": "Payment Method",
						"type": "`$STRING`",
						"short": "The payment method used for the contract.",
					},
					map[string]any{
						"name": "poNumber",
						"title": "Po Number",
						"type": "`$STRING`",
						"short": "The purchase order number associated with the contract.",
					},
					map[string]any{
						"name": "preTerminationContractValue",
						"title": "Pre Termination Contract Value",
						"type": "`$NUMBER`",
						"short": "The value of the contract before termination.",
					},
					map[string]any{
						"name": "renewalContractId",
						"title": "Renewal Contract Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the renewal contract.",
					},
					map[string]any{
						"name": "renewalDate",
						"title": "Renewal Date",
						"type": "`$STRING`",
						"short": "The date when the contract is set to renew, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "sellerCompanyAddress",
						"title": "Seller Company Address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sellerCompanyName",
						"title": "Seller Company Name",
						"type": "`$STRING`",
						"short": "The name of the seller's company.",
					},
					map[string]any{
						"name": "sellerEmail",
						"title": "Seller Email",
						"type": "`$STRING`",
						"short": "The email address of the seller.",
					},
					map[string]any{
						"name": "sellerFirstName",
						"title": "Seller First Name",
						"type": "`$STRING`",
						"short": "The first name of the seller.",
					},
					map[string]any{
						"name": "sellerLastName",
						"title": "Seller Last Name",
						"type": "`$STRING`",
						"short": "The last name of the seller.",
					},
					map[string]any{
						"name": "sellerPhoneNumber",
						"title": "Seller Phone Number",
						"type": "`$STRING`",
						"short": "The phone number of the seller.",
					},
					map[string]any{
						"name": "startDate",
						"title": "Start Date",
						"type": "`$STRING`",
						"short": "The start date of the contract, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the contract.",
					},
					map[string]any{
						"name": "storePaymentMethodAtCheckout",
						"title": "Store Payment Method At Checkout",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the payment method should be stored at checkout.",
					},
					map[string]any{
						"name": "terminationDate",
						"title": "Termination Date",
						"type": "`$STRING`",
						"short": "The date when the contract is terminated, in ISO 8601 format.",
						"format": "date",
					},
					map[string]any{
						"name": "totalBilledAmount",
						"title": "Total Billed Amount",
						"type": "`$NUMBER`",
						"short": "The total amount billed under the contract.",
					},
					map[string]any{
						"name": "totalBilledAmountPreTax",
						"title": "Total Billed Amount Pre Tax",
						"type": "`$NUMBER`",
						"short": "The total amount billed under the contract before tax.",
					},
					map[string]any{
						"name": "totalCollectedFees",
						"title": "Total Collected Fees",
						"type": "`$NUMBER`",
						"short": "The total amount of fees collected under the contract.",
					},
					map[string]any{
						"name": "totalCollectedTaxes",
						"title": "Total Collected Taxes",
						"type": "`$NUMBER`",
						"short": "The total amount of taxes collected under the contract.",
					},
					map[string]any{
						"name": "totalContractValue",
						"title": "Total Contract Value",
						"type": "`$NUMBER`",
						"short": "The total value of the contract.",
					},
					map[string]any{
						"name": "totalPaidAmount",
						"title": "Total Paid Amount",
						"type": "`$NUMBER`",
						"short": "The total amount paid under the contract.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the contract was last updated, in ISO 8601 format.",
						"format": "date-time",
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
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/terminate",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{contract_id}",
									"terminate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "contract_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "contract_id",
											"orig": "contract_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contract_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.contract",
						},
					},
				},
			},
			"contracts_contract_change": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contractId",
						"title": "Contract Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the contract associated with this change.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when the contract change was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "deltaLineItems",
						"title": "Delta Line Items",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of line items that represent the difference resulting from the contract change.",
					},
					map[string]any{
						"name": "effectiveDate",
						"title": "Effective Date",
						"type": "`$STRING`",
						"short": "The date when the contract change becomes effective, in YYYY-MM-DD format.",
						"format": "date",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the contract change.",
					},
					map[string]any{
						"name": "lineItemChanges",
						"title": "Line Item Changes",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of changes to line items associated with the contract change.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The name of the contract change.",
					},
					map[string]any{
						"name": "proposedLineItems",
						"title": "Proposed Line Items",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of line items that are proposed as part of the contract change.",
					},
					map[string]any{
						"name": "prorating",
						"title": "Prorating",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether the contract change involves prorating.",
					},
					map[string]any{
						"name": "quoteId",
						"title": "Quote Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the quote associated with this contract change.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the contract change.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of contract change.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the contract change was last updated, in ISO 8601 format.",
						"format": "date-time",
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
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/changes/{changeId}/accept",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"{change_id}",
									"accept",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"changeId": "change_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "change_id",
											"orig": "change_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"change_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/changes/{changeId}/cancel",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"{change_id}",
									"cancel",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"changeId": "change_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "change_id",
											"orig": "change_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"change_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/changes",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{contract_id}",
									"changes",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "contract_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "contract_id",
											"orig": "contract_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contract_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/contracts/2027-03-beta/changes/{changeId}",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"changeId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "change_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/contracts/2027-03-beta/changes/{changeId}",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"changeId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "change_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.contract",
						},
					},
				},
			},
			"contracts_contract_change_preview": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "deltaLineItems",
						"title": "Delta Line Items",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of LineItem objects representing the changes in line items compared to the current state of the contract.",
					},
					map[string]any{
						"name": "proposedLineItems",
						"title": "Proposed Line Items",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of LineItem objects representing the proposed state of line items after the changes are applied.",
					},
				},
				"name": "contracts_contract_change_preview",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"changes",
									"preview",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contracts_contract_change_summary": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contractId",
						"title": "Contract Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the contract associated with this change.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when this contract change was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "effectiveDate",
						"title": "Effective Date",
						"type": "`$STRING`",
						"short": "The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'.",
						"format": "date",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for this contract change.",
					},
					map[string]any{
						"name": "lineItemChanges",
						"title": "Line Item Changes",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of changes made to line items as part of this contract change.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name assigned to this contract change.",
					},
					map[string]any{
						"name": "prorating",
						"title": "Prorating",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the contract change involves prorating.",
					},
					map[string]any{
						"name": "quoteId",
						"title": "Quote Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the quote associated with this contract change, if applicable.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the contract change.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of contract change, which can be either 'DIRECT' or 'QUOTE'.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when this contract change was last updated, in ISO 8601 format.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contracts_contract_change_summary",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/changes",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{contract_id}",
									"changes",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "contract_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.changes`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "contract_id",
											"orig": "contract_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contract_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.contract",
						},
					},
				},
			},
			"contracts_quote": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dealId",
						"title": "Deal Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the deal associated with the renewal quote.",
					},
					map[string]any{
						"name": "dealPipeline",
						"title": "Deal Pipeline",
						"type": "`$STRING`",
						"short": "The identifier of the pipeline in which the deal is located.",
					},
					map[string]any{
						"name": "dealStage",
						"title": "Deal Stage",
						"type": "`$STRING`",
						"short": "The identifier of the stage within the pipeline that the deal is currently in.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the renewal quote.",
					},
					map[string]any{
						"name": "quoteTemplateId",
						"title": "Quote Template Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the quote template to be used for creating the renewal quote.",
					},
				},
				"name": "contracts_quote",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes",
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
								"parts": []any{
									"commerce",
									"contracts",
									"2027-03-beta",
									"contracts",
									"{contract_id}",
									"renewal-quotes",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contractId": "contract_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "contract_id",
											"orig": "contract_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contract_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.contract",
						},
					},
				},
			},
			"item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
										"priceBookItemId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "price_book_item_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"price_book_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.price_book",
						},
					},
				},
			},
			"payment_link": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "acceptedPaymentMethods",
						"title": "Accepted Payment Methods",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of accepted payment methods for the payment link.",
					},
					map[string]any{
						"name": "additionalFormFields",
						"title": "Additional Form Fields",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of additional form fields included in the payment link.",
					},
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the payment link is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "The date and time when the payment link was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "automatedSalesTaxEnabled",
						"title": "Automated Sales Tax Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether automated sales tax is enabled for the payment link.",
					},
					map[string]any{
						"name": "businessUnitId",
						"title": "Business Unit Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The business unit ID associated with the payment link, represented as a string.",
					},
					map[string]any{
						"name": "checkoutFeeIds",
						"title": "Checkout Fee Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of checkout fee IDs associated with the payment link.",
					},
					map[string]any{
						"name": "collectFullBillingAddress",
						"title": "Collect Full Billing Address",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether to collect the full billing address during checkout.",
					},
					map[string]any{
						"name": "collectShippingAddress",
						"title": "Collect Shipping Address",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether to collect the shipping address during checkout.",
					},
					map[string]any{
						"name": "completedPurchaseCount",
						"title": "Completed Purchase Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The number of completed purchases made through this payment link.",
						"format": "int32",
					},
					map[string]any{
						"name": "createContractOnPurchase",
						"title": "Create Contract On Purchase",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether a contract should be created upon purchase.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when the payment link was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The currency code for the payment link, represented as a string.",
					},
					map[string]any{
						"name": "dealConfigurations",
						"title": "Deal Configurations",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object containing deal configuration settings.",
					},
					map[string]any{
						"name": "descriptionHtml",
						"title": "Description Html",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The HTML description of the payment link, represented as a string.",
					},
					map[string]any{
						"name": "discount",
						"title": "Discount",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "discountCodeEnabled",
						"title": "Discount Code Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether discount codes are enabled for the payment link.",
					},
					map[string]any{
						"name": "discountObjectId",
						"title": "Discount Object Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the object ID of a discount associated with the payment link.",
					},
					map[string]any{
						"name": "discounts",
						"title": "Discounts",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of discount objects associated with the payment link.",
					},
					map[string]any{
						"name": "domainId",
						"title": "Domain Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The domain ID associated with the payment link, represented as a string.",
					},
					map[string]any{
						"name": "enableDefaultCheckoutFees",
						"title": "Enable Default Checkout Fees",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether default checkout fees are enabled.",
					},
					map[string]any{
						"name": "expirationSettings",
						"title": "Expiration Settings",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "An object representing the expiration settings for the payment link.",
					},
					map[string]any{
						"name": "feeObjectIds",
						"title": "Fee Object Ids",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of strings representing the IDs of fee objects associated with the payment link.",
					},
					map[string]any{
						"name": "fees",
						"title": "Fees",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of fee objects associated with the payment link.",
					},
					map[string]any{
						"name": "formGuid",
						"title": "Form Guid",
						"type": "`$STRING`",
						"req": true,
						"short": "The form GUID associated with the payment link, represented as a string.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the payment link, represented as a string.",
					},
					map[string]any{
						"name": "includeEmailInSuccessRedirect",
						"title": "Include Email In Success Redirect",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether to include the email in the success redirect URL.",
					},
					map[string]any{
						"name": "isOneTimeUseEnabled",
						"title": "Is One Time Use Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether the payment link is enabled for one-time use.",
					},
					map[string]any{
						"name": "lineItemObjectIds",
						"title": "Line Item Object Ids",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of line item object IDs associated with the payment link, each represented as a string.",
					},
					map[string]any{
						"name": "lineItems",
						"title": "Line Items",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of line items associated with the payment link.",
					},
					map[string]any{
						"name": "paymentLinkName",
						"title": "Payment Link Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the payment link, represented as a string.",
					},
					map[string]any{
						"name": "paymentLinkUrl",
						"title": "Payment Link Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The URL of the payment link, represented as a string.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The current state of the payment link, represented as a string.",
					},
					map[string]any{
						"name": "storePaymentMethodAtCheckout",
						"title": "Store Payment Method At Checkout",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether to store the payment method at checkout.",
					},
					map[string]any{
						"name": "successUrl",
						"title": "Success Url",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The URL to redirect to upon successful payment, represented as a string.",
					},
					map[string]any{
						"name": "taxObjectIds",
						"title": "Tax Object Ids",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of string IDs representing tax objects associated with the payment link.",
					},
					map[string]any{
						"name": "taxes",
						"title": "Taxes",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of tax objects associated with the payment link.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the payment link was last updated, in ISO 8601 format.",
						"format": "date-time",
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
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "created_after",
											"orig": "created_after",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "created_at",
											"orig": "created_at",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "created_before",
											"orig": "created_before",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "updated_at",
											"orig": "updated_at",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
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
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"paymentLinkId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "payment_link_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/payment-links/2026-09/payment-links/{paymentLinkId}",
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
								"parts": []any{
									"commerce",
									"payment-links",
									"2026-09",
									"payment-links",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"paymentLinkId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "payment_link_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Active Currencies",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod.",
					},
					map[string]any{
						"name": "commercePaymentMethod",
						"title": "Commerce Payment Method",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of payment method.",
					},
					map[string]any{
						"name": "isDefaultOn",
						"title": "Is Default On",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether this payment method is set as the default option.",
					},
					map[string]any{
						"name": "paymentMethodSettings",
						"title": "Payment Method Settings",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.",
					},
					map[string]any{
						"name": "paymentMethodUpdates",
						"title": "Payment Method Updates",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of updates to be applied to commerce payment methods.",
					},
					map[string]any{
						"name": "supportedCurrencies",
						"title": "Supported Currencies",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A full list of currencies that are supported by the bundled commercePaymentMethod.",
					},
				},
				"name": "payment_methods_commerce_payment_method_settings_public",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payment-methods",
									"2027-03-beta",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.paymentMethodSettings`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payment-methods",
									"2027-03-beta",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
						"short": "A string indicating the category of the error.",
					},
					map[string]any{
						"name": "context",
						"title": "Context",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object containing additional context about the error condition, where keys are context names and values are arrays of strings.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of ErrorDetail objects providing further information about the error.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "A string that uniquely identifies this specific error instance.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
						"short": "An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
						"short": "A string containing a human-readable message describing the error.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "A string representing the status of the error.",
					},
					map[string]any{
						"name": "subCategory",
						"title": "Sub Category",
						"type": "`$OBJECT`",
						"short": "An object providing more specific details about the error category.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status",
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
								"rename": map[string]any{
									"param": map[string]any{
										"paymentCrmObjectId": "payment_crm_object_id",
										"taskId": "task_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "payment_crm_object_id",
											"orig": "payment_crm_object_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "task_id",
											"orig": "task_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"payment_crm_object_id",
										"task_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payments_create_manual_payment_public": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associations",
						"title": "Associations",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of associations related to the payment, where each item is an AssociationPublicRequest object.",
					},
					map[string]any{
						"name": "billingAddress",
						"title": "Billing Address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "The currency code for the payment, represented as a string.",
					},
					map[string]any{
						"name": "customerEmail",
						"title": "Customer Email",
						"type": "`$STRING`",
						"short": "The email address of the customer making the payment, represented as a string.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the created manual payment, represented as a string.",
					},
					map[string]any{
						"name": "paymentAmount",
						"title": "Payment Amount",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The amount of the payment, represented as a number.",
					},
					map[string]any{
						"name": "paymentDate",
						"title": "Payment Date",
						"type": "`$STRING`",
						"req": true,
						"short": "The date of the payment, represented as a string.",
					},
					map[string]any{
						"name": "paymentMethod",
						"title": "Payment Method",
						"type": "`$STRING`",
						"req": true,
						"short": "The method used for the payment, represented as a string.",
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
								"parts": []any{
									"commerce",
									"payments",
									"2027-03-beta",
									"manual-payments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Account Google Analytics Enabled",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether Google Analytics tracking is enabled for the account.",
					},
					map[string]any{
						"name": "checkoutPrefillEnabled",
						"title": "Checkout Prefill Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Indicates whether checkout fields should be prefilled.",
					},
					map[string]any{
						"name": "collectFullBillingAddress",
						"title": "Collect Full Billing Address",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Indicates whether the full billing address should be collected.",
					},
					map[string]any{
						"name": "collectPaymentMethodOnFile",
						"title": "Collect Payment Method On File",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Indicates whether a payment method should be kept on file.",
					},
					map[string]any{
						"name": "defaultFromEmailAddress",
						"title": "Default From Email Address",
						"type": "`$STRING`",
						"req": true,
						"short": "The default email address used for sending communications.",
					},
					map[string]any{
						"name": "paymentsGoogleAnalyticsEnabled",
						"title": "Payments Google Analytics Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Indicates whether Google Analytics tracking is enabled for payments.",
					},
					map[string]any{
						"name": "recaptchaEnabled",
						"title": "Recaptcha Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Indicates whether reCAPTCHA is enabled for additional security.",
					},
				},
				"name": "payments_settings_get_billing_settings_public",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"billing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"billing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Applies To Payment Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of payment to which this fee applies, represented as a string.",
					},
					map[string]any{
						"name": "checkoutFees",
						"title": "Checkout Fees",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.",
					},
					map[string]any{
						"name": "feeValue",
						"title": "Fee Value",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The numerical value of the fee, indicating the amount to be charged.",
					},
					map[string]any{
						"name": "feeValueType",
						"title": "Fee Value Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount).",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for this checkout fee configuration.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the checkout fee, used for identification and display purposes.",
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"checkout-fees",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.checkoutFees`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"checkout-fees",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Acknowledgement Required",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether an acknowledgement is required for the policy.",
					},
					map[string]any{
						"name": "cancellationPolicyText",
						"title": "Cancellation Policy Text",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string containing the text of the cancellation policy.",
					},
					map[string]any{
						"name": "customPolicyEnabled",
						"title": "Custom Policy Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether a custom policy is enabled.",
					},
					map[string]any{
						"name": "refundPolicyText",
						"title": "Refund Policy Text",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string containing the text of the refund policy.",
					},
					map[string]any{
						"name": "termsOfServiceUrl",
						"title": "Terms Of Service Url",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A string representing the URL of the terms of service.",
					},
				},
				"name": "payments_settings_get_policy_settings_public",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"policy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"policy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Collect Shipping Address By Default",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether the shipping address is collected by default.",
					},
					map[string]any{
						"name": "countriesShippedTo",
						"title": "Countries Shipped To",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of strings representing the list of countries to which shipping is available.",
					},
				},
				"name": "payments_settings_get_shipping_settings_public",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"shipping",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.countriesShippedTo`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"payments-settings",
									"2027-03-beta",
									"payments-settings",
									"shipping",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Can Payout",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the account is capable of making payouts.",
					},
					map[string]any{
						"name": "canTransact",
						"title": "Can Transact",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the account is capable of processing transactions.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when the payment account was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "eligibleProcessorTypes",
						"title": "Eligible Processor Types",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of processor types that the account is eligible to use.",
					},
					map[string]any{
						"name": "enrollmentState",
						"title": "Enrollment State",
						"type": "`$STRING`",
						"req": true,
						"short": "The current enrollment state of the payment account.",
					},
					map[string]any{
						"name": "hasTransacted",
						"title": "Has Transacted",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the account has ever processed a transaction.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The portalId for the payment account.",
					},
					map[string]any{
						"name": "lastTransactedAt",
						"title": "Last Transacted At",
						"type": "`$STRING`",
						"short": "The date and time of the last transaction made with this account, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "processorType",
						"title": "Processor Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of payment processor associated with the account.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the payment account was last updated, in ISO 8601 format.",
						"format": "date-time",
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
								"parts": []any{
									"commerce",
									"payment-accounts",
									"2026-09",
									"status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.eligibleProcessorTypes`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"short": "A boolean indicating whether this price book is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "The date and time when this price book was archived.",
						"format": "date-time",
					},
					map[string]any{
						"name": "autoAssignmentEnabled",
						"title": "Auto Assignment Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether auto-assignment is enabled for the price book.",
					},
					map[string]any{
						"name": "countOfIncludedProducts",
						"title": "Count Of Included Products",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The number of products included in this price book.",
						"format": "int32",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when this price book was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "customProperties",
						"title": "Custom Properties",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A map of custom property names to their values for this price book.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "A description of the price book.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for this price book.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
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
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the price book.",
					},
					map[string]any{
						"name": "supportedCurrencies",
						"title": "Supported Currencies",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of currency codes that this price book supports.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when this price book was last updated.",
						"format": "date-time",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"archived",
										"limit",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"short": "A map of link names to associated URIs providing additional information or actions related to the batch operation.",
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of PriceBookItemResponse objects representing the individual results of the batch operation.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the batch operation.",
					},
				},
				"name": "price_books_batch_response_price_book_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create",
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
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update",
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
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.price_book",
						},
					},
				},
			},
			"price_books_collection_response_price_book_item_response_forward": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"short": "A boolean indicating whether the price book item is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "The date and time when the price book item was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "billingFrequency",
						"title": "Billing Frequency",
						"type": "`$STRING`",
						"short": "The frequency at which billing occurs for the price book item.",
					},
					map[string]any{
						"name": "billingPeriod",
						"title": "Billing Period",
						"type": "`$STRING`",
						"short": "The billing period for the price book item.",
					},
					map[string]any{
						"name": "costOfGoodsSold",
						"title": "Cost Of Goods Sold",
						"type": "`$STRING`",
						"short": "The cost of goods sold for the price book item.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when the price book item was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "customProperties",
						"title": "Custom Properties",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A map of custom property names to their values for the price book item.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the price book item.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the price book item.",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$STRING`",
						"short": "A string representing images associated with the price book item.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the price book item.",
					},
					map[string]any{
						"name": "priceBookId",
						"title": "Price Book Id",
						"type": "`$STRING`",
						"short": "The unique identifier for the price book containing this item.",
					},
					map[string]any{
						"name": "pricing",
						"title": "Pricing",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "productClassification",
						"title": "Product Classification",
						"type": "`$STRING`",
						"short": "The classification of the product.",
					},
					map[string]any{
						"name": "productId",
						"title": "Product Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the product associated with the price book item.",
					},
					map[string]any{
						"name": "productType",
						"title": "Product Type",
						"type": "`$STRING`",
						"short": "The type of product.",
					},
					map[string]any{
						"name": "recurringBillingTerms",
						"title": "Recurring Billing Terms",
						"type": "`$STRING`",
						"short": "The terms of recurring billing for the price book item.",
					},
					map[string]any{
						"name": "sku",
						"title": "Sku",
						"type": "`$STRING`",
						"short": "The stock keeping unit (SKU) of the price book item.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "The current status of the price book item.",
					},
					map[string]any{
						"name": "taxCategory",
						"title": "Tax Category",
						"type": "`$STRING`",
						"short": "The tax category of the price book item.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the price book item was last updated, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "A URL associated with the price book item.",
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
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.price_book",
						},
					},
				},
			},
			"price_books_price_book": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"short": "A boolean indicating whether this price book is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "The date and time when this price book was archived.",
						"format": "date-time",
					},
					map[string]any{
						"name": "autoAssignmentEnabled",
						"title": "Auto Assignment Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether auto-assignment is enabled for the price book.",
					},
					map[string]any{
						"name": "countOfIncludedProducts",
						"title": "Count Of Included Products",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The number of products included in this price book.",
						"format": "int32",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when this price book was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "customProperties",
						"title": "Custom Properties",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A map of custom property names to their values for this price book.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the price book.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for this price book.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the price book.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the price book.",
					},
					map[string]any{
						"name": "supportedCurrencies",
						"title": "Supported Currencies",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of currency codes that this price book supports.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when this price book was last updated.",
						"format": "date-time",
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
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/activate",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"activate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"deactivate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.price_book",
						},
					},
				},
			},
			"price_books_price_book_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"short": "A boolean indicating whether the price book item is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "The date and time when the price book item was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "billingFrequency",
						"title": "Billing Frequency",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The frequency at which billing occurs for the price book item.",
					},
					map[string]any{
						"name": "billingPeriod",
						"title": "Billing Period",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The billing period for the price book item.",
					},
					map[string]any{
						"name": "costOfGoodsSold",
						"title": "Cost Of Goods Sold",
						"type": "`$STRING`",
						"short": "The cost of goods sold for the price book item.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time when the price book item was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "customProperties",
						"title": "Custom Properties",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A map of custom property names to their values for the price book item.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the price book item.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the price book item.",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$STRING`",
						"short": "A string representing images associated with the price book item.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the price book item.",
					},
					map[string]any{
						"name": "priceBookId",
						"title": "Price Book Id",
						"type": "`$STRING`",
						"short": "The unique identifier for the price book containing this item.",
					},
					map[string]any{
						"name": "pricing",
						"title": "Pricing",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "productClassification",
						"title": "Product Classification",
						"type": "`$STRING`",
						"short": "The classification of the product.",
					},
					map[string]any{
						"name": "productId",
						"title": "Product Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the product associated with the price book item.",
					},
					map[string]any{
						"name": "productType",
						"title": "Product Type",
						"type": "`$STRING`",
						"short": "The type of product.",
					},
					map[string]any{
						"name": "recurringBillingTerms",
						"title": "Recurring Billing Terms",
						"type": "`$STRING`",
						"short": "The terms of recurring billing for the price book item.",
					},
					map[string]any{
						"name": "sku",
						"title": "Sku",
						"type": "`$STRING`",
						"short": "The stock keeping unit (SKU) of the price book item.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The current status of the price book item.",
					},
					map[string]any{
						"name": "taxCategory",
						"title": "Tax Category",
						"type": "`$STRING`",
						"short": "The tax category of the price book item.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the price book item was last updated, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "A URL associated with the price book item.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
										"priceBookItemId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "price_book_item_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
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
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"items",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
										"priceBookItemId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "price_book_item_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
										"price_book_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.price_book",
						},
					},
				},
			},
			"price_books_price_book_validate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of ErrorDetail objects providing information about any errors encountered during validation.",
					},
					map[string]any{
						"name": "isValid",
						"title": "Is Valid",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the price book is valid.",
					},
				},
				"name": "price_books_price_book_validate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/commerce/price-books/2026-09/price-books/{priceBookId}/validate",
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
								"parts": []any{
									"commerce",
									"price-books",
									"2026-09",
									"price-books",
									"{price_book_id}",
									"validate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"priceBookId": "price_book_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_book_id",
											"orig": "price_book_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_book_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.price_book",
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
