
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { HubspotCommerceSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ContractEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.Contract()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"addressTypesToCollect":{"a":true,"h":"Address Types To Collect","n":"addressTypesToCollect","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"An array indicating the types of addresses to collect.","t":"`$ARRAY`","key$":"addressTypesToCollect","index$":0},"allTransactionsFeeName":{"a":true,"h":"All Transactions Fee Name","n":"allTransactionsFeeName","r":false,"sh":"The name of the fee applied to all transactions.","t":"`$STRING`","key$":"allTransactionsFeeName","index$":1},"allTransactionsFeePercentage":{"a":true,"h":"All Transactions Fee Percentage","n":"allTransactionsFeePercentage","r":false,"sh":"The percentage of the fee applied to all transactions.","t":"`$NUMBER`","key$":"allTransactionsFeePercentage","index$":2},"allowedPaymentMethods":{"a":true,"h":"Allowed Payment Methods","n":"allowedPaymentMethods","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"An array of allowed payment methods.","t":"`$ARRAY`","key$":"allowedPaymentMethods","index$":3},"annualContractValue":{"a":true,"h":"Annual Contract Value","n":"annualContractValue","r":false,"sh":"The annual value of the contract.","t":"`$NUMBER`","key$":"annualContractValue","index$":4},"automatedTaxesEnabled":{"a":true,"h":"Automated Taxes Enabled","n":"automatedTaxesEnabled","r":true,"sh":"Indicates whether automated taxes are enabled for the contract.","t":"`$BOOLEAN`","key$":"automatedTaxesEnabled","index$":5},"billingAddress":{"a":true,"h":"Billing Address","n":"billingAddress","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"An object representing the billing address for the contract.","t":"`$OBJECT`","key$":"billingAddress","index$":6},"billingCompanyId":{"a":true,"h":"Billing Company Id","n":"billingCompanyId","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The unique identifier of the billing company associated with the contract.","t":"`$STRING`","key$":"billingCompanyId","index$":7},"billingContactId":{"a":true,"h":"Billing Contact Id","n":"billingContactId","op":{"create":{"req":true,"type":"`$STRING`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The unique identifier of the billing contact associated with the contract.","t":"`$STRING`","key$":"billingContactId","index$":8},"billingStartDateOverride":{"a":true,"fo":"date","h":"Billing Start Date Override","n":"billingStartDateOverride","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The date to override the billing start date, in ISO 8601 format.","t":"`$STRING`","key$":"billingStartDateOverride","index$":9},"businessUnitId":{"a":true,"h":"Business Unit Id","n":"businessUnitId","r":false,"sh":"The unique identifier of the business unit associated with the contract.","t":"`$STRING`","key$":"businessUnitId","index$":10},"cardFeeName":{"a":true,"h":"Card Fee Name","n":"cardFeeName","r":false,"sh":"The name of the fee applied to card transactions.","t":"`$STRING`","key$":"cardFeeName","index$":11},"cardFeePercentage":{"a":true,"h":"Card Fee Percentage","n":"cardFeePercentage","r":false,"sh":"The percentage of the fee applied to card transactions.","t":"`$NUMBER`","key$":"cardFeePercentage","index$":12},"collectionProcess":{"a":true,"h":"Collection Process","n":"collectionProcess","r":false,"sh":"The process for collecting payments.","t":"`$STRING`","key$":"collectionProcess","index$":13},"contractEffectiveDate":{"a":true,"fo":"date","h":"Contract Effective Date","n":"contractEffectiveDate","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The date when the contract becomes effective, in ISO 8601 format.","t":"`$STRING`","key$":"contractEffectiveDate","index$":14},"contractSourceId":{"a":true,"h":"Contract Source Id","n":"contractSourceId","r":false,"sh":"The unique identifier of the source of the contract.","t":"`$STRING`","key$":"contractSourceId","index$":15},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":false,"sh":"The date and time when the contract was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":16},"currencyCode":{"a":true,"h":"Currency Code","n":"currencyCode","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The currency code associated with the contract, represented as a string.","t":"`$STRING`","key$":"currencyCode","index$":17},"currentAnnualRecurringRevenue":{"a":true,"h":"Current Annual Recurring Revenue","n":"currentAnnualRecurringRevenue","r":false,"sh":"The current annual recurring revenue for the contract.","t":"`$NUMBER`","key$":"currentAnnualRecurringRevenue","index$":18},"currentMonthlyRecurringRevenue":{"a":true,"h":"Current Monthly Recurring Revenue","n":"currentMonthlyRecurringRevenue","r":false,"sh":"The current monthly recurring revenue for the contract.","t":"`$NUMBER`","key$":"currentMonthlyRecurringRevenue","index$":19},"customProperties":{"a":true,"h":"Custom Properties","n":"customProperties","op":{"create":{"req":false,"type":"`$OBJECT`"},"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"sh":"A map of custom property names to their values.","t":"`$OBJECT`","key$":"customProperties","index$":20},"dealId":{"a":true,"h":"Deal Id","n":"dealId","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The unique identifier of the deal associated with the contract.","t":"`$STRING`","key$":"dealId","index$":21},"directDebitFeeName":{"a":true,"h":"Direct Debit Fee Name","n":"directDebitFeeName","r":false,"sh":"The name of the fee applied to direct debit transactions.","t":"`$STRING`","key$":"directDebitFeeName","index$":22},"directDebitFeePercentage":{"a":true,"h":"Direct Debit Fee Percentage","n":"directDebitFeePercentage","r":false,"sh":"The percentage of the fee applied to direct debit transactions.","t":"`$NUMBER`","key$":"directDebitFeePercentage","index$":23},"discountCode":{"a":true,"h":"Discount Code","n":"discountCode","r":false,"sh":"The discount code applied to the contract.","t":"`$STRING`","key$":"discountCode","index$":24},"endDate":{"a":true,"fo":"date","h":"End Date","n":"endDate","r":false,"sh":"The end date of the contract, in ISO 8601 format.","t":"`$STRING`","key$":"endDate","index$":25},"externalPaymentMethodReferenceId":{"a":true,"h":"External Payment Method Reference Id","n":"externalPaymentMethodReferenceId","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The external reference ID for the payment method.","t":"`$STRING`","key$":"externalPaymentMethodReferenceId","index$":26},"hubspotBillingEnabled":{"a":true,"h":"Hubspot Billing Enabled","n":"hubspotBillingEnabled","r":true,"sh":"Indicates whether HubSpot billing is enabled for the contract.","t":"`$BOOLEAN`","key$":"hubspotBillingEnabled","index$":27},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the contract.","t":"`$STRING`","key$":"id","index$":28},"language":{"a":true,"h":"Language","n":"language","r":false,"sh":"The language associated with the contract.","t":"`$STRING`","key$":"language","index$":29},"lineItems":{"a":true,"h":"Line Items","n":"lineItems","r":true,"sh":"An array of line items included in the contract.","t":"`$ARRAY`","key$":"lineItems","index$":30},"locale":{"a":true,"h":"Locale","n":"locale","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The locale associated with the contract.","t":"`$STRING`","key$":"locale","index$":31},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The name of the contract.","t":"`$STRING`","key$":"name","index$":32},"netPaymentTerms":{"a":true,"fo":"int32","h":"Net Payment Terms","n":"netPaymentTerms","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The net payment terms for the contract, represented as an integer.","t":"`$INTEGER`","key$":"netPaymentTerms","index$":33},"ownerId":{"a":true,"h":"Owner Id","n":"ownerId","r":true,"sh":"An object representing the ID of the contract owner.","t":"`$OBJECT`","key$":"ownerId","index$":34},"paymentEnabled":{"a":true,"h":"Payment Enabled","n":"paymentEnabled","r":true,"sh":"Indicates whether payment is enabled for the contract.","t":"`$BOOLEAN`","key$":"paymentEnabled","index$":35},"paymentMethod":{"a":true,"h":"Payment Method","n":"paymentMethod","r":false,"sh":"The payment method used for the contract.","t":"`$STRING`","key$":"paymentMethod","index$":36},"poNumber":{"a":true,"h":"Po Number","n":"poNumber","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The purchase order number associated with the contract.","t":"`$STRING`","key$":"poNumber","index$":37},"preTerminationContractValue":{"a":true,"h":"Pre Termination Contract Value","n":"preTerminationContractValue","r":false,"sh":"The value of the contract before termination.","t":"`$NUMBER`","key$":"preTerminationContractValue","index$":38},"renewalContractId":{"a":true,"h":"Renewal Contract Id","n":"renewalContractId","r":false,"sh":"The unique identifier of the renewal contract.","t":"`$STRING`","key$":"renewalContractId","index$":39},"renewalDate":{"a":true,"fo":"date","h":"Renewal Date","n":"renewalDate","r":false,"sh":"The date when the contract is set to renew, in ISO 8601 format.","t":"`$STRING`","key$":"renewalDate","index$":40},"sellerCompanyAddress":{"a":true,"h":"Seller Company Address","n":"sellerCompanyAddress","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"An object representing the address of the seller's company.","t":"`$OBJECT`","key$":"sellerCompanyAddress","index$":41},"sellerCompanyDomain":{"a":true,"h":"Seller Company Domain","n":"sellerCompanyDomain","r":true,"sh":"An object representing the domain of the seller's company.","t":"`$OBJECT`","key$":"sellerCompanyDomain","index$":42},"sellerCompanyName":{"a":true,"h":"Seller Company Name","n":"sellerCompanyName","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The name of the seller's company.","t":"`$STRING`","key$":"sellerCompanyName","index$":43},"sellerEmail":{"a":true,"h":"Seller Email","n":"sellerEmail","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The email address of the seller.","t":"`$STRING`","key$":"sellerEmail","index$":44},"sellerFirstName":{"a":true,"h":"Seller First Name","n":"sellerFirstName","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The first name of the seller.","t":"`$STRING`","key$":"sellerFirstName","index$":45},"sellerLastName":{"a":true,"h":"Seller Last Name","n":"sellerLastName","op":{"create":{"req":true,"type":"`$OBJECT`"},"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The last name of the seller.","t":"`$STRING`","key$":"sellerLastName","index$":46},"sellerPhone":{"a":true,"h":"Seller Phone","n":"sellerPhone","r":true,"sh":"An object representing the phone number of the seller.","t":"`$OBJECT`","key$":"sellerPhone","index$":47},"sellerPhoneNumber":{"a":true,"h":"Seller Phone Number","n":"sellerPhoneNumber","r":false,"sh":"The phone number of the seller.","t":"`$STRING`","key$":"sellerPhoneNumber","index$":48},"startDate":{"a":true,"fo":"date","h":"Start Date","n":"startDate","r":false,"sh":"The start date of the contract, in ISO 8601 format.","t":"`$STRING`","key$":"startDate","index$":49},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The current status of the contract.","t":"`$STRING`","key$":"status","index$":50},"storePaymentMethodAtCheckout":{"a":true,"h":"Store Payment Method At Checkout","n":"storePaymentMethodAtCheckout","r":true,"sh":"Indicates whether the payment method should be stored at checkout.","t":"`$BOOLEAN`","key$":"storePaymentMethodAtCheckout","index$":51},"terminationDate":{"a":true,"fo":"date","h":"Termination Date","n":"terminationDate","r":false,"sh":"The date when the contract is terminated, in ISO 8601 format.","t":"`$STRING`","key$":"terminationDate","index$":52},"totalBilledAmount":{"a":true,"h":"Total Billed Amount","n":"totalBilledAmount","r":false,"sh":"The total amount billed under the contract.","t":"`$NUMBER`","key$":"totalBilledAmount","index$":53},"totalBilledAmountPreTax":{"a":true,"h":"Total Billed Amount Pre Tax","n":"totalBilledAmountPreTax","r":false,"sh":"The total amount billed under the contract before tax.","t":"`$NUMBER`","key$":"totalBilledAmountPreTax","index$":54},"totalCollectedFees":{"a":true,"h":"Total Collected Fees","n":"totalCollectedFees","r":false,"sh":"The total amount of fees collected under the contract.","t":"`$NUMBER`","key$":"totalCollectedFees","index$":55},"totalCollectedTaxes":{"a":true,"h":"Total Collected Taxes","n":"totalCollectedTaxes","r":false,"sh":"The total amount of taxes collected under the contract.","t":"`$NUMBER`","key$":"totalCollectedTaxes","index$":56},"totalContractValue":{"a":true,"h":"Total Contract Value","n":"totalContractValue","r":false,"sh":"The total value of the contract.","t":"`$NUMBER`","key$":"totalContractValue","index$":57},"totalPaidAmount":{"a":true,"h":"Total Paid Amount","n":"totalPaidAmount","r":false,"sh":"The total amount paid under the contract.","t":"`$NUMBER`","key$":"totalPaidAmount","index$":58},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":false,"sh":"The date and time when the contract was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":59}},"id":{"field":"id","name":"id"},"name":"contract","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /commerce/contracts/2027-03-beta/contracts","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/commerce/contracts/2027-03-beta/contracts","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"contracts"},{"lit":"2027-03-beta"},{"lit":"contracts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /commerce/contracts/2027-03-beta/contracts/{contractId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"contract_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/commerce/contracts/2027-03-beta/contracts/{contractId}","q":{"exist":["id"]},"r":{"param":{"contractId":"id"}},"s":[{"lit":"commerce"},{"lit":"contracts"},{"lit":"2027-03-beta"},{"lit":"contracts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /commerce/contracts/2027-03-beta/contracts/{contractId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"contract_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/commerce/contracts/2027-03-beta/contracts/{contractId}","q":{"exist":["id"]},"r":{"param":{"contractId":"id"}},"s":[{"lit":"commerce"},{"lit":"contracts"},{"lit":"2027-03-beta"},{"lit":"contracts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"contract","name__orig":"contract","Name":"Contract","name_":"contract","name-":"contract","NAME":"CONTRACT","index$":3}, {"active":true,"entity":"contract","key$":"BasicContractFlow","kind":"basic","name":"BasicContractFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"contract_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"contract_ref01","srcdatavar":"contract_ref01_data","suffix":"_up0","textfield":"allTransactionsFeeName"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-contract_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"contract_ref01","srcdatavar":"contract_ref01_data","suffix":"_dt0"},"m":{"id":"contract01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-contract_ref01"}}],"index$":2}]}, 'Contract', {"POST /commerce/contracts/2027-03-beta/contracts":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["automatedTaxesEnabled","billingAddress","billingCompanyId","billingContactId","billingStartDateOverride","contractEffectiveDate","currencyCode","dealId","externalPaymentMethodReferenceId","hubspotBillingEnabled","lineItems","locale","name","netPaymentTerms","ownerId","paymentEnabled","poNumber","sellerCompanyAddress","sellerCompanyDomain","sellerCompanyName","sellerEmail","sellerFirstName","sellerLastName","sellerPhone"],"type":"object","properties":{"addressTypesToCollect":{"type":"array","description":"An array of address types to collect, which can include 'BILLING_ADDRESS' and 'SHIPPING_ADDRESS'.","example":null,"items":{"type":"string","example":null,"enum":["BILLING_ADDRESS","SHIPPING_ADDRESS"]},"key$":"addressTypesToCollect"},"allowedPaymentMethods":{"type":"array","description":"An array of allowed payment methods for the contract, such as 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'AFFIRM', and 'KLARNA'.","example":null,"items":{"type":"string","example":null,"enum":["CREDIT_OR_DEBIT_CARD","ACH","SEPA","BACS","PADS","AFFIRM","KLARNA"]},"key$":"allowedPaymentMethods"},"automatedTaxesEnabled":{"type":"object","properties":{},"description":"An object indicating whether automated taxes are enabled for the contract.","example":null,"key$":"automatedTaxesEnabled"},"billingAddress":{"type":"object","properties":{},"description":"An object representing the billing address for the contract.","example":null,"key$":"billingAddress"},"billingCompanyId":{"type":"object","properties":{},"description":"An object representing the ID of the billing company.","example":null,"key$":"billingCompanyId"},"billingContactId":{"type":"string","description":"A string representing the ID of the billing contact.","example":null,"key$":"billingContactId"},"billingStartDateOverride":{"type":"object","properties":{},"description":"An object representing an override for the billing start date.","example":null,"key$":"billingStartDateOverride"},"businessUnitId":{"type":"string","description":"A string representing the ID of the business unit associated with the contract.","example":null,"key$":"businessUnitId"},"collectionProcess":{"type":"string","description":"A string indicating the collection process for the contract, which can be 'MANUAL_PAYMENTS' or 'AUTOMATIC_PAYMENTS'.","example":null,"enum":["AUTOMATIC_PAYMENTS","MANUAL_PAYMENTS"],"key$":"collectionProcess"},"contractEffectiveDate":{"type":"string","description":"A string representing the effective date of the contract, in date format.","format":"date","example":null,"key$":"contractEffectiveDate"},"currencyCode":{"type":"string","description":"A string representing the currency code for the contract.","example":null,"key$":"currencyCode"},"customProperties":{"type":"object","additionalProperties":{"type":"string","example":null},"description":"An object containing custom properties for the contract, with string values.","example":null,"key$":"customProperties"},"dealId":{"type":"object","properties":{},"description":"An object representing the ID of the associated deal.","example":null,"key$":"dealId"},"externalPaymentMethodReferenceId":{"type":"object","properties":{},"description":"An object representing the external payment method reference ID.","example":null,"key$":"externalPaymentMethodReferenceId"},"hubspotBillingEnabled":{"type":"boolean","description":"A boolean indicating whether HubSpot billing is enabled for the contract.","example":null,"key$":"hubspotBillingEnabled"},"lineItems":{"type":"array","description":"An array of line items included in the contract, which can be custom, from a product, or cloned.","example":null,"items":{"example":null,"oneOf":[{"title":"CUSTOM","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/ContractsLineItemCustomCreateRequest"},{"title":"FROM_PRODUCT","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/ContractsLineItemFromProductCreateRequest"},{"title":"CLONE","required":[],"type":"object","properties":{},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/ContractsLineItemCloneCreateRequest"}]},"key$":"lineItems"},"locale":{"type":"object","properties":{},"description":"An object representing the locale settings for the contract.","example":null,"key$":"locale"},"name":{"type":"string","description":"A string representing the name of the contract.","example":null,"key$":"name"},"netPaymentTerms":{"type":"object","properties":{},"description":"An object representing the net payment terms for the contract.","example":null,"key$":"netPaymentTerms"},"ownerId":{"type":"object","properties":{},"description":"An object representing the ID of the contract owner.","example":null,"key$":"ownerId"},"paymentEnabled":{"type":"boolean","description":"A boolean indicating whether payment is enabled for the contract.","example":null,"key$":"paymentEnabled"},"poNumber":{"type":"object","properties":{},"description":"An object representing the purchase order number for the contract.","example":null,"key$":"poNumber"},"sellerCompanyAddress":{"type":"object","properties":{},"description":"An object representing the address of the seller's company.","example":null,"key$":"sellerCompanyAddress"},"sellerCompanyDomain":{"type":"object","properties":{},"description":"An object representing the domain of the seller's company.","example":null,"key$":"sellerCompanyDomain"},"sellerCompanyName":{"type":"object","properties":{},"description":"An object representing the name of the seller's company.","example":null,"key$":"sellerCompanyName"},"sellerEmail":{"type":"object","properties":{},"description":"An object representing the email address of the seller.","example":null,"key$":"sellerEmail"},"sellerFirstName":{"type":"object","properties":{},"description":"An object representing the first name of the seller.","example":null,"key$":"sellerFirstName"},"sellerLastName":{"type":"object","properties":{},"description":"An object representing the last name of the seller.","example":null,"key$":"sellerLastName"},"sellerPhone":{"type":"object","properties":{},"description":"An object representing the phone number of the seller.","example":null,"key$":"sellerPhone"}},"example":null,"x-ref":"#/components/schemas/ContractsContractCreateRequest","index$":1},"example":null}},"required":true},"parameters":[]},"GET /commerce/contracts/2027-03-beta/contracts/{contractId}":{"protocol":"http","parameters":[{"name":"contractId","in":"path","description":"The unique identifier of the contract to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]},"PATCH /commerce/contracts/2027-03-beta/contracts/{contractId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["automatedTaxesEnabled","billingAddress","billingCompanyId","billingContactId","billingStartDateOverride","dealId","externalPaymentMethodReferenceId","locale","name","netPaymentTerms","ownerId","poNumber","sellerCompanyAddress","sellerCompanyDomain","sellerCompanyName","sellerEmail","sellerFirstName","sellerLastName","sellerPhone"],"type":"object","properties":{"addressTypesToCollect":{"type":"array","description":"An array of strings indicating the types of addresses to collect, such as 'BILLING_ADDRESS' or 'SHIPPING_ADDRESS'.","example":null,"items":{"type":"string","example":null,"enum":["BILLING_ADDRESS","SHIPPING_ADDRESS"]},"key$":"addressTypesToCollect"},"allowedPaymentMethods":{"type":"array","description":"An array of strings specifying the allowed payment methods, which can include 'CREDIT_OR_DEBIT_CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'AFFIRM', and 'KLARNA'.","example":null,"items":{"type":"string","example":null,"enum":["CREDIT_OR_DEBIT_CARD","ACH","SEPA","BACS","PADS","AFFIRM","KLARNA"]},"key$":"allowedPaymentMethods"},"automatedTaxesEnabled":{"type":"object","properties":{},"description":"An object indicating whether automated taxes are enabled for the contract.","example":null,"key$":"automatedTaxesEnabled"},"billingAddress":{"type":"object","properties":{},"description":"An object representing the billing address for the contract.","example":null,"key$":"billingAddress"},"billingCompanyId":{"type":"object","properties":{},"description":"An object representing the ID of the billing company associated with the contract.","example":null,"key$":"billingCompanyId"},"billingContactId":{"type":"object","properties":{},"description":"An object representing the ID of the billing contact associated with the contract.","example":null,"key$":"billingContactId"},"billingStartDateOverride":{"type":"object","properties":{},"description":"An object representing the override for the billing start date.","example":null,"key$":"billingStartDateOverride"},"customProperties":{"type":"object","additionalProperties":{"type":"string","example":null},"description":"An object containing a map of custom property names to their values, represented as strings.","example":null,"key$":"customProperties"},"dealId":{"type":"object","properties":{},"description":"An object representing the ID of the deal associated with the contract.","example":null,"key$":"dealId"},"externalPaymentMethodReferenceId":{"type":"object","properties":{},"description":"An object representing the external reference ID for the payment method.","example":null,"key$":"externalPaymentMethodReferenceId"},"locale":{"type":"object","properties":{},"description":"An object representing the locale settings for the contract.","example":null,"key$":"locale"},"name":{"type":"object","properties":{},"description":"An object representing the name of the contract.","example":null,"key$":"name"},"netPaymentTerms":{"type":"object","properties":{},"description":"An object representing the net payment terms for the contract.","example":null,"key$":"netPaymentTerms"},"ownerId":{"type":"object","properties":{},"description":"An object representing the ID of the owner of the contract.","example":null,"key$":"ownerId"},"poNumber":{"type":"object","properties":{},"description":"An object representing the purchase order number for the contract.","example":null,"key$":"poNumber"},"sellerCompanyAddress":{"type":"object","properties":{},"description":"An object representing the address of the seller's company.","example":null,"key$":"sellerCompanyAddress"},"sellerCompanyDomain":{"type":"object","properties":{},"description":"An object representing the domain of the seller's company.","example":null,"key$":"sellerCompanyDomain"},"sellerCompanyName":{"type":"object","properties":{},"description":"An object representing the name of the seller's company.","example":null,"key$":"sellerCompanyName"},"sellerEmail":{"type":"object","properties":{},"description":"An object representing the email address of the seller.","example":null,"key$":"sellerEmail"},"sellerFirstName":{"type":"object","properties":{},"description":"An object representing the first name of the seller.","example":null,"key$":"sellerFirstName"},"sellerLastName":{"type":"object","properties":{},"description":"An object representing the last name of the seller.","example":null,"key$":"sellerLastName"},"sellerPhone":{"type":"object","properties":{},"description":"An object representing the phone number of the seller.","example":null,"key$":"sellerPhone"}},"example":null,"x-ref":"#/components/schemas/ContractsContractEditRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"contractId","in":"path","description":"The unique identifier of the contract to update.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contract_ref01_ent = client.Contract()
    let contract_ref01_data = setup.data.new.contract['contract_ref01']

    contract_ref01_data = (await contract_ref01_ent.create(contract_ref01_data)).data()
    assert(null != contract_ref01_data.id)


    // UPDATE
    const contract_ref01_data_up0 = {}
    contract_ref01_data_up0.id = contract_ref01_data.id

    const contract_ref01_markdef_up0 = { name: 'allTransactionsFeeName', value: 'Mark01-contract_ref01_' + setup.now }
    contract_ref01_data_up0 [contract_ref01_markdef_up0.name] = contract_ref01_markdef_up0.value

    const contract_ref01_resdata_up0 = (await contract_ref01_ent.update(contract_ref01_data_up0)).data()
    assert(contract_ref01_resdata_up0.id === contract_ref01_data_up0.id)

    assert(contract_ref01_resdata_up0[contract_ref01_markdef_up0.name] === contract_ref01_markdef_up0.value)


    // LOAD
    const contract_ref01_match_dt0 = {}
    contract_ref01_match_dt0.id = contract_ref01_data.id
    const contract_ref01_data_dt0 = (await contract_ref01_ent.load(contract_ref01_match_dt0)).data()
    assert(contract_ref01_data_dt0.id === contract_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/contract/ContractTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotCommerceSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['contract01','contract02','contract03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_CONTRACT_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotCommerceSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HUBSPOT_COMMERCE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HUBSPOT_COMMERCE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
