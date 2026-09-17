

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


describe('PaymentsSettingsGetCheckoutFeesPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PaymentsSettingsGetCheckoutFeesPublic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'payments_settings_get_checkout_fees_public.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"appliesToPaymentType","req":true,"short":"The type of payment to which this fee applies, represented as a string.","type":"`$STRING`","index$":0},{"active":true,"name":"checkoutFees","req":true,"short":"An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.","type":"`$ARRAY`","index$":1},{"active":true,"name":"feeValue","req":true,"short":"The numerical value of the fee, indicating the amount to be charged.","type":"`$NUMBER`","index$":2},{"active":true,"name":"feeValueType","req":true,"short":"The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount).","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"short":"The unique identifier for this checkout fee configuration.","type":"`$STRING`","index$":4},{"active":true,"name":"name","req":true,"short":"The name of the checkout fee, used for identification and display purposes.","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"payments_settings_get_checkout_fees_public","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees","json":"{\"operationId\":\"get-/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"checkoutFees\":{\"description\":\"An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"appliesToPaymentType\":{\"description\":\"The type of payment to which this fee applies, represented as a string.\",\"example\":null,\"type\":\"string\"},\"feeValue\":{\"description\":\"The numerical value of the fee, indicating the amount to be charged.\",\"example\":null,\"type\":\"number\"},\"feeValueType\":{\"description\":\"The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount).\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for this checkout fee configuration.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the checkout fee, used for identification and display purposes.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"appliesToPaymentType\",\"feeValue\",\"feeValueType\",\"id\",\"name\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"checkoutFees\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. Format: UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object. It may include additional properties, each containing an array of strings, to provide more detailed information about the error.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found. It is a string that helps identify the source of the error.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, providing further classification.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"contracts-read\"]},{\"oauth2\":[\"crm.objects.invoices.read\"]},{\"oauth2\":[\"crm.schemas.invoices.read\"]},{\"oauth2\":[\"payment-links-read\"]},{\"oauth2\":[\"payments-checkout-settings-read\"]},{\"oauth2\":[\"cpq.quotes.write\"]},{\"oauth2\":[\"crm.objects.quotes.read\"]},{\"oauth2\":[\"crm.schemas.quotes.read\"]},{\"oauth2\":[\"cpq.quotes.read\"]},{\"oauth2\":[\"crm.objects.subscriptions.read\"]},{\"oauth2\":[\"crm.schemas.subscriptions.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees","segments":[{"lit":"commerce"},{"lit":"payments-settings"},{"lit":"2027-03-beta"},{"lit":"payments-settings"},{"lit":"checkout-fees"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.checkoutFees`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{},"contract":{"id":"PATCH /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees","json":"{\"operationId\":\"patch-/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"checkoutFees\":{\"description\":\"An array of checkout fee objects to be updated. Each object must conform to the CheckoutFeePublicUpdateRequest schema.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"appliesToPaymentType\":{\"description\":\"The type of payment to which the checkout fee applies, represented as a string.\",\"example\":null,\"type\":\"string\"},\"feeValue\":{\"description\":\"The value of the checkout fee. This is a numeric value.\",\"example\":null,\"type\":\"number\"},\"feeValueType\":{\"description\":\"The type of the fee value, represented as a string.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the checkout fee. This is a string value.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the checkout fee. This is a string value.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"appliesToPaymentType\",\"feeValue\",\"feeValueType\",\"name\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"checkoutFees\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"checkoutFees\":{\"description\":\"An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"appliesToPaymentType\":{\"description\":\"The type of payment to which this fee applies, represented as a string.\",\"example\":null,\"type\":\"string\"},\"feeValue\":{\"description\":\"The numerical value of the fee, indicating the amount to be charged.\",\"example\":null,\"type\":\"number\"},\"feeValueType\":{\"description\":\"The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount).\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for this checkout fee configuration.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the checkout fee, used for identification and display purposes.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"appliesToPaymentType\",\"feeValue\",\"feeValueType\",\"id\",\"name\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"checkoutFees\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. Format: UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object. It may include additional properties, each containing an array of strings, to provide more detailed information about the error.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found. It is a string that helps identify the source of the error.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, providing further classification.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"payments-checkout-settings-write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees","segments":[{"lit":"commerce"},{"lit":"payments-settings"},{"lit":"2027-03-beta"},{"lit":"payments-settings"},{"lit":"checkout-fees"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"payments_settings_get_checkout_fees_public","name__orig":"payments_settings_get_checkout_fees_public","Name":"PaymentsSettingsGetCheckoutFeesPublic","name_":"payments_settings_get_checkout_fees_public","name-":"payments-settings-get-checkout-fees-public","NAME":"PAYMENTS_SETTINGS_GET_CHECKOUT_FEES_PUBLIC","index$":14}, {"active":true,"entity":"payments_settings_get_checkout_fees_public","key$":"BasicPaymentsSettingsGetCheckoutFeesPublicFlow","kind":"basic","name":"BasicPaymentsSettingsGetCheckoutFeesPublicFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"payments_settings_get_checkout_fees_public_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"payments_settings_get_checkout_fees_public_ref01","srcdatavar":"payments_settings_get_checkout_fees_public_ref01_data","suffix":"_up0","textfield":"appliesToPaymentType"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payments_settings_get_checkout_fees_public_ref01"}}],"valid":[],"index$":1}]}, 'PaymentsSettingsGetCheckoutFeesPublic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payments_settings_get_checkout_fees_public_ref01_data = Object.values(setup.data.existing.payments_settings_get_checkout_fees_public)[0] as any

    // LIST
    const payments_settings_get_checkout_fees_public_ref01_ent = client.PaymentsSettingsGetCheckoutFeesPublic()
    const payments_settings_get_checkout_fees_public_ref01_match: any = {}

    const payments_settings_get_checkout_fees_public_ref01_list = (await payments_settings_get_checkout_fees_public_ref01_ent.list(payments_settings_get_checkout_fees_public_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const payments_settings_get_checkout_fees_public_ref01_data_up0: any = {}
    payments_settings_get_checkout_fees_public_ref01_data_up0.id = payments_settings_get_checkout_fees_public_ref01_data.id

    const payments_settings_get_checkout_fees_public_ref01_markdef_up0 = { name: 'appliesToPaymentType', value: 'Mark01-payments_settings_get_checkout_fees_public_ref01_' + setup.now }
    ;(payments_settings_get_checkout_fees_public_ref01_data_up0 as any)[payments_settings_get_checkout_fees_public_ref01_markdef_up0.name] = payments_settings_get_checkout_fees_public_ref01_markdef_up0.value

    const payments_settings_get_checkout_fees_public_ref01_resdata_up0 = (await payments_settings_get_checkout_fees_public_ref01_ent.update(payments_settings_get_checkout_fees_public_ref01_data_up0)).data()
    assert(payments_settings_get_checkout_fees_public_ref01_resdata_up0.id === payments_settings_get_checkout_fees_public_ref01_data_up0.id)

    assert((payments_settings_get_checkout_fees_public_ref01_resdata_up0 as any)[payments_settings_get_checkout_fees_public_ref01_markdef_up0.name] === payments_settings_get_checkout_fees_public_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/payments_settings_get_checkout_fees_public/PaymentsSettingsGetCheckoutFeesPublicTestData.json')

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
    ['payments_settings_get_checkout_fees_public01','payments_settings_get_checkout_fees_public02','payments_settings_get_checkout_fees_public03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_CHECKOUT_FEES_PUBLIC_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_CHECKOUT_FEES_PUBLIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_CHECKOUT_FEES_PUBLIC_ENTID']
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
  
