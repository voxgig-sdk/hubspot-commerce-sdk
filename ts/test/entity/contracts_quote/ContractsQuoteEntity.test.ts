

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HubspotCommerceSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ContractsQuoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.ContractsQuote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contracts_quote.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"dealId","req":false,"short":"The unique identifier of the deal associated with the renewal quote.","type":"`$STRING`","index$":0},{"active":true,"name":"dealPipeline","req":false,"short":"The identifier of the pipeline in which the deal is located.","type":"`$STRING`","index$":1},{"active":true,"name":"dealStage","req":false,"short":"The identifier of the stage within the pipeline that the deal is currently in.","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"The name of the renewal quote.","type":"`$STRING`","index$":3},{"active":true,"name":"quoteTemplateId","req":true,"short":"The unique identifier of the quote template to be used for creating the renewal quote.","type":"`$STRING`","index$":4}],"name":"contracts_quote","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"contract_id","orig":"contract_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes","json":"{\"operationId\":\"post-/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes\",\"parameters\":[{\"description\":\"The unique identifier of the contract for which the renewal quote is being created.\",\"explode\":false,\"in\":\"path\",\"name\":\"contractId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"dealId\":{\"description\":\"The unique identifier of the deal associated with the renewal quote. It is a string.\",\"example\":null,\"type\":\"string\"},\"dealPipeline\":{\"description\":\"The identifier of the pipeline in which the deal is located. It is a string.\",\"example\":null,\"type\":\"string\"},\"dealStage\":{\"description\":\"The identifier of the stage within the pipeline that the deal is currently in. It is a string.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the renewal quote. It is a string.\",\"example\":null,\"type\":\"string\"},\"quoteTemplateId\":{\"description\":\"The unique identifier of the quote template to be used for creating the renewal quote. It is a required string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"quoteTemplateId\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"archived\":{\"description\":\"Indicates whether the quote is archived. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"description\":\"The date and time when the quote was archived, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"automatedTaxesEnabled\":{\"description\":\"Indicates whether automated taxes are enabled for the quote. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"buyerCompanyId\":{\"description\":\"The unique identifier for the buyer's company associated with the quote.\",\"example\":null,\"type\":\"string\"},\"buyerContactId\":{\"description\":\"The unique identifier for the buyer's contact associated with the quote.\",\"example\":null,\"type\":\"string\"},\"comments\":{\"description\":\"Additional comments or notes associated with the quote.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when the quote was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"currencyCode\":{\"description\":\"The currency code in which the quote is denominated.\",\"example\":null,\"type\":\"string\"},\"customProperties\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of custom property names to their values for the quote.\",\"example\":null,\"type\":\"object\"},\"dealId\":{\"description\":\"The unique identifier for the deal associated with the quote.\",\"example\":null,\"type\":\"string\"},\"esignDate\":{\"description\":\"The date when the quote was electronically signed, in ISO 8601 format.\",\"example\":null,\"format\":\"date\",\"type\":\"string\"},\"esignNumSignersCompleted\":{\"description\":\"The number of signers who have completed the electronic signing process.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"esignNumSignersRequired\":{\"description\":\"The total number of signers required to complete the electronic signing process.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"expirationDate\":{\"description\":\"The date when the quote expires, in ISO 8601 format.\",\"example\":null,\"format\":\"date\",\"type\":\"string\"},\"feedback\":{\"description\":\"Feedback or additional information related to the quote.\",\"example\":null,\"type\":\"string\"},\"hubspotBillingEnabled\":{\"description\":\"Indicates whether HubSpot billing is enabled for the quote. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"id\":{\"description\":\"The unique identifier for the quote.\",\"example\":null,\"type\":\"string\"},\"language\":{\"description\":\"The language in which the quote is presented.\",\"example\":null,\"type\":\"string\"},\"lineItems\":{\"description\":\"An array of line items included in the quote.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"acv\":{\"description\":\"The annual contract value for this line item. A number.\",\"example\":null,\"type\":\"number\"},\"allowBuyerSelectedQuantity\":{\"description\":\"Indicates whether the buyer can select the quantity of this line item. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"amount\":{\"description\":\"The total amount for this line item, calculated as price multiplied by quantity. A number.\",\"example\":null,\"type\":\"number\"},\"archived\":{\"description\":\"Indicates whether this line item is archived. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"description\":\"The date and time when this line item was archived, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"arr\":{\"description\":\"The annual recurring revenue for this line item. A number.\",\"example\":null,\"type\":\"number\"},\"billingCycleAnchorDate\":{\"description\":\"The anchor date for the billing cycle, in ISO 8601 date format.\",\"example\":null,\"format\":\"date\",\"type\":\"string\"},\"billingPeriodEndDate\":{\"description\":\"The end date of the billing period, in ISO 8601 date format.\",\"example\":null,\"format\":\"date\",\"type\":\"string\"},\"billingPeriodStartDate\":{\"description\":\"The start date of the billing period, in ISO 8601 date format.\",\"example\":null,\"format\":\"date\",\"type\":\"string\"},\"billingStartDelayDays\":{\"description\":\"The delay in days before billing starts. An integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"billingStartDelayMonths\":{\"description\":\"The delay in months before billing starts. An integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"billingStartDelayType\":{\"description\":\"The type of delay before billing starts. Valid values include 'HS_BILLING_START_DELAY_DAYS', 'HS_BILLING_START_DELAY_MONTHS', and 'HS_RECURRING_BILLING_START_DATE'.\",\"enum\":[\"HS_BILLING_START_DELAY_DAYS\",\"HS_BILLING_START_DELAY_MONTHS\",\"HS_RECURRING_BILLING_START_DATE\"],\"example\":null,\"type\":\"string\"},\"buyerSelectedQuantityMax\":{\"description\":\"The maximum quantity the buyer can select for this line item. A number.\",\"example\":null,\"type\":\"number\"},\"buyerSelectedQuantityMin\":{\"description\":\"The minimum quantity the buyer can select for this line item. A number.\",\"example\":null,\"type\":\"number\"},\"createdAt\":{\"description\":\"The date and time when this line item was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"A text description of the line item.\",\"example\":null,\"type\":\"string\"},\"discount\":{\"description\":\"The discount applied to this line item. A number.\",\"example\":null,\"type\":\"number\"},\"discountPercentage\":{\"description\":\"The discount percentage applied to this line item. A number.\",\"example\":null,\"type\":\"number\"},\"effectiveUnitPrice\":{\"description\":\"The effective price per unit after discounts. A number.\",\"example\":null,\"type\":\"number\"},\"externalId\":{\"description\":\"An external identifier for this line item.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for this line item.\",\"example\":null,\"type\":\"string\"},\"images\":{\"description\":\"A URL or reference to images associated with this line item.\",\"example\":null,\"type\":\"string\"},\"isEditablePrice\":{\"description\":\"Indicates whether the price of this line item is editable. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"isOptional\":{\"description\":\"Indicates whether this line item is optional. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"isParent\":{\"description\":\"Indicates whether this line item is a parent item. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"lineItemCurrencyCode\":{\"description\":\"The currency code for this line item, following ISO 4217 format.\",\"example\":null,\"type\":\"string\"},\"mrr\":{\"description\":\"The monthly recurring revenue for this line item. A number.\",\"example\":null,\"type\":\"number\"},\"name\":{\"description\":\"The name of the line item.\",\"example\":null,\"type\":\"string\"},\"parentLineItemId\":{\"description\":\"The unique identifier for the parent line item, if applicable.\",\"example\":null,\"type\":\"string\"},\"positionOnQuote\":{\"description\":\"The position of this line item on a quote. An integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"postTaxAmount\":{\"description\":\"The total amount after tax is applied. A number.\",\"example\":null,\"type\":\"number\"},\"preDiscountAmount\":{\"description\":\"The amount before any discounts are applied. A number.\",\"example\":null,\"type\":\"number\"},\"price\":{\"description\":\"The price of a single unit of the line item. A number.\",\"example\":null,\"type\":\"number\"},\"priceBookId\":{\"description\":\"The unique identifier for the price book associated with this line item.\",\"example\":null,\"type\":\"string\"},\"pricing\":{\"example\":null,\"properties\":{\"prices\":{\"description\":\"An array of price entries, each specifying a currency code and the corresponding price for the line item.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"currencyCode\":{\"description\":\"The currency in which the price is denominated, represented as a string.\",\"example\":null,\"type\":\"string\"},\"maxQuantity\":{\"description\":\"The maximum quantity for which this price is applicable, represented as an integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"price\":{\"description\":\"The cost of the product or service in the specified currency, represented as a number.\",\"example\":null,\"type\":\"number\"}},\"required\":[\"currencyCode\",\"price\"],\"type\":\"object\"},\"type\":\"array\"},\"pricingModel\":{\"description\":\"The pricing model applied to the line item. Valid values include 'FLAT', 'GRADUATED', 'STAIRSTEP', and 'VOLUME'.\",\"enum\":[\"FLAT\",\"GRADUATED\",\"STAIRSTEP\",\"VOLUME\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"prices\",\"pricingModel\"],\"type\":\"object\"},\"pricingModel\":{\"description\":\"The pricing model used for this line item. Valid values include 'FLAT', 'GRADUATED', 'STAIRSTEP', and 'VOLUME'.\",\"enum\":[\"FLAT\",\"GRADUATED\",\"STAIRSTEP\",\"VOLUME\"],\"example\":null,\"type\":\"string\"},\"productId\":{\"description\":\"The unique identifier for the product associated with this line item.\",\"example\":null,\"type\":\"string\"},\"productType\":{\"description\":\"The type of product for this line item.\",\"example\":null,\"type\":\"string\"},\"quantity\":{\"description\":\"The quantity of the line item. A number.\",\"example\":null,\"type\":\"number\"},\"rampKey\":{\"description\":\"A unique identifier for the ramp associated with this line item.\",\"example\":null,\"type\":\"string\"},\"recurringBillingDayOfMonth\":{\"description\":\"The day of the month on which recurring billing occurs. An integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"recurringBillingEndDate\":{\"description\":\"The end date for recurring billing, in ISO 8601 date format.\",\"example\":null,\"format\":\"date\",\"type\":\"string\"},\"recurringBillingFrequency\":{\"description\":\"The frequency of recurring billing for this line item. Valid values include 'ANNUALLY', 'BIWEEKLY', 'MONTHLY', 'PER_FIVE_YEARS', 'PER_FOUR_YEARS', 'PER_SIX_MONTHS', 'PER_THREE_YEARS', 'PER_TWO_YEARS', 'QUARTERLY', and 'WEEKLY'.\",\"enum\":[\"ANNUALLY\",\"BIWEEKLY\",\"MONTHLY\",\"PER_FIVE_YEARS\",\"PER_FOUR_YEARS\",\"PER_SIX_MONTHS\",\"PER_THREE_YEARS\",\"PER_TWO_YEARS\",\"QUARTERLY\",\"WEEKLY\"],\"example\":null,\"type\":\"string\"},\"recurringBillingNumberOfPayments\":{\"description\":\"The number of payments for recurring billing. An integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"recurringBillingPeriod\":{\"description\":\"The period for recurring billing.\",\"example\":null,\"type\":\"string\"},\"recurringBillingStartDate\":{\"description\":\"The start date for recurring billing, in ISO 8601 date format.\",\"example\":null,\"format\":\"date\",\"type\":\"string\"},\"recurringBillingTerms\":{\"description\":\"The terms for recurring billing. Valid values include 'AUTOMATICALLY_RENEW' and 'FIXED'.\",\"enum\":[\"AUTOMATICALLY_RENEW\",\"FIXED\"],\"example\":null,\"type\":\"string\"},\"richTextDescription\":{\"description\":\"A rich text description of the line item.\",\"example\":null,\"type\":\"string\"},\"sku\":{\"description\":\"The stock keeping unit (SKU) for this line item.\",\"example\":null,\"type\":\"string\"},\"tax\":{\"description\":\"The tax rate applied to this line item. A number.\",\"example\":null,\"type\":\"number\"},\"taxAmount\":{\"description\":\"The total tax amount for this line item. A number.\",\"example\":null,\"type\":\"number\"},\"taxCategory\":{\"description\":\"The tax category for this line item.\",\"example\":null,\"type\":\"string\"},\"taxRateGroupId\":{\"description\":\"The unique identifier for the tax rate group associated with this line item.\",\"example\":null,\"type\":\"string\"},\"tcv\":{\"description\":\"The total contract value for this line item. A number.\",\"example\":null,\"type\":\"number\"},\"termInMonths\":{\"description\":\"The term length in months for this line item. An integer.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"tierAmount\":{\"description\":\"The amount for the current pricing tier. A number.\",\"example\":null,\"type\":\"number\"},\"totalDiscount\":{\"description\":\"The total discount amount for this line item. A number.\",\"example\":null,\"type\":\"number\"},\"updatedAt\":{\"description\":\"The date and time when this line item was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"variantId\":{\"description\":\"The unique identifier for the product variant associated with this line item.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"pricing\",\"quantity\"],\"type\":\"object\"},\"type\":\"array\"},\"locale\":{\"description\":\"The locale setting for the quote, affecting formatting and presentation.\",\"example\":null,\"type\":\"string\"},\"paymentEnabled\":{\"description\":\"Indicates whether payment is enabled for the quote. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"pdfDownloadLink\":{\"description\":\"A link to download the quote as a PDF document.\",\"example\":null,\"type\":\"string\"},\"quoteAmount\":{\"description\":\"The total amount of the quote.\",\"example\":null,\"type\":\"number\"},\"quoteNumber\":{\"description\":\"The unique number assigned to the quote.\",\"example\":null,\"type\":\"string\"},\"senderCompanyAddress\":{\"example\":null,\"properties\":{\"address\":{\"description\":\"The primary street address. It is a string representing the main location detail.\",\"example\":null,\"type\":\"string\"},\"address2\":{\"description\":\"An additional street address line. This is a string used for supplementary location details.\",\"example\":null,\"type\":\"string\"},\"city\":{\"description\":\"The city where the address is located. It is represented as a string.\",\"example\":null,\"type\":\"string\"},\"country\":{\"description\":\"The country of the address. This is a string indicating the nation associated with the address.\",\"example\":null,\"type\":\"string\"},\"countryCode\":{\"description\":\"The code representing the country of the address. It is a string, typically following international country code standards.\",\"example\":null,\"type\":\"string\"},\"state\":{\"description\":\"The state or region of the address. This is a string that specifies the subdivision within the country.\",\"example\":null,\"type\":\"string\"},\"zip\":{\"description\":\"The postal code for the address. It is a string used for mail delivery purposes.\",\"example\":null,\"type\":\"string\"}},\"type\":\"object\"},\"senderCompanyDomain\":{\"description\":\"The domain of the sender's company.\",\"example\":null,\"type\":\"string\"},\"senderCompanyImageUrl\":{\"description\":\"The URL of the image representing the sender's company.\",\"example\":null,\"type\":\"string\"},\"senderCompanyName\":{\"description\":\"The name of the sender's company.\",\"example\":null,\"type\":\"string\"},\"senderEmail\":{\"description\":\"The email address of the sender.\",\"example\":null,\"type\":\"string\"},\"senderFirstname\":{\"description\":\"The first name of the sender.\",\"example\":null,\"type\":\"string\"},\"senderJobtitle\":{\"description\":\"The job title of the sender.\",\"example\":null,\"type\":\"string\"},\"senderLastname\":{\"description\":\"The last name of the sender.\",\"example\":null,\"type\":\"string\"},\"senderPhone\":{\"description\":\"The phone number of the sender.\",\"example\":null,\"type\":\"string\"},\"showSignatureBox\":{\"description\":\"Indicates whether the signature box is shown on the quote. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"status\":{\"description\":\"The current status of the quote.\",\"example\":null,\"type\":\"string\"},\"terms\":{\"description\":\"The terms and conditions associated with the quote.\",\"example\":null,\"type\":\"string\"},\"timezone\":{\"description\":\"The timezone in which the quote is applicable.\",\"example\":null,\"type\":\"string\"},\"title\":{\"description\":\"The title of the quote.\",\"example\":null,\"type\":\"string\"},\"type\":{\"description\":\"The type of the quote.\",\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the quote was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"automatedTaxesEnabled\",\"customProperties\",\"hubspotBillingEnabled\",\"id\",\"lineItems\",\"paymentEnabled\",\"showSignatureBox\"],\"type\":\"object\"}}},\"description\":\"successful operation\",\"headers\":{\"Location\":{\"description\":\"URL of the newly created resource\",\"explode\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}}},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, provided as an object with additional properties that are arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object where each key is a string and each value is an array of strings. This provides additional information about the error.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found. This is an optional string field.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field and is of type string.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, provided as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes","rename":{"param":{"contractId":"contract_id"}},"segments":[{"lit":"commerce"},{"lit":"contracts"},{"lit":"2027-03-beta"},{"lit":"contracts"},{"var":"contract_id"},{"lit":"renewal-quotes"}],"select":{"exist":["contract_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["contract"]]},"key$":"contracts_quote","name__orig":"contracts_quote","Name":"ContractsQuote","name_":"contracts_quote","name-":"contracts-quote","NAME":"CONTRACTS_QUOTE","index$":7}, {"active":true,"entity":"contracts_quote","key$":"BasicContractsQuoteFlow","kind":"basic","name":"BasicContractsQuoteFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"contracts_quote_ref01"},"match":{"contract_id":"contract01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ContractsQuote')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contracts_quote_ref01_ent = client.ContractsQuote()
    let contracts_quote_ref01_data = setup.data.new.contracts_quote['contracts_quote_ref01']
    contracts_quote_ref01_data['contract_id'] = setup.idmap['contract01']

    contracts_quote_ref01_data = (await contracts_quote_ref01_ent.create(contracts_quote_ref01_data)).data()
    assert(null != contracts_quote_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/contracts_quote/ContractsQuoteTestData.json')

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
    ['contracts_quote01','contracts_quote02','contracts_quote03','contract01','contract02','contract03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
