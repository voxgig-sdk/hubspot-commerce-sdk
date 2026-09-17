

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


describe('PaymentsActionResponseWithSingleResultSimplePublicObjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PaymentsActionResponseWithSingleResultSimplePublicObject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'payments_action_response_with_single_result_simple_public_object.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":true,"short":"A string indicating the category of the error.","type":"`$STRING`","index$":0},{"active":true,"name":"context","req":true,"short":"An object containing additional context about the error condition, where keys are context names and values are arrays of strings.","type":"`$OBJECT`","index$":1},{"active":true,"name":"errors","req":true,"short":"An array of ErrorDetail objects providing further information about the error.","type":"`$ARRAY`","index$":2},{"active":true,"name":"id","req":false,"short":"A string that uniquely identifies this specific error instance.","type":"`$STRING`","index$":3},{"active":true,"name":"links","req":true,"short":"An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.","type":"`$OBJECT`","index$":4},{"active":true,"name":"message","req":true,"short":"A string containing a human-readable message describing the error.","type":"`$STRING`","index$":5},{"active":true,"name":"status","req":true,"short":"A string representing the status of the error.","type":"`$STRING`","index$":6},{"active":true,"name":"subCategory","req":false,"short":"An object providing more specific details about the error category.","type":"`$OBJECT`","index$":7}],"id":{"field":"id","name":"id"},"name":"payments_action_response_with_single_result_simple_public_object","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"payment_crm_object_id","orig":"payment_crm_object_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"param","name":"task_id","orig":"task_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status","json":"{\"operationId\":\"get-/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status_/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status\",\"parameters\":[{\"description\":\"The unique identifier of the payment CRM object associated with the task.\",\"explode\":false,\"in\":\"path\",\"name\":\"paymentCrmObjectId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"The unique identifier of the task whose status is being retrieved.\",\"explode\":false,\"in\":\"path\",\"name\":\"taskId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"description\":\"The date and time when the action was completed, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"errors\":{\"description\":\"An array of StandardError objects providing details about any errors that occurred.\",\"example\":null,\"items\":{\"description\":\"Ye olde error\",\"example\":null,\"properties\":{\"category\":{\"description\":\"A string indicating the category of the error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object containing additional context about the error condition, where keys are context names and values are arrays of strings.\",\"example\":null,\"type\":\"object\"},\"errors\":{\"description\":\"An array of ErrorDetail objects providing further information about the error.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"A string that uniquely identifies this specific error instance.\",\"example\":null,\"type\":\"string\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A string containing a human-readable message describing the error.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"A string representing the status of the error.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"An object providing more specific details about the error category.\",\"example\":null,\"properties\":{},\"type\":\"object\"}},\"required\":[\"category\",\"context\",\"errors\",\"links\",\"message\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs, providing additional information or resources related to the action.\",\"example\":null,\"type\":\"object\"},\"numErrors\":{\"description\":\"An integer indicating the number of errors encountered during the action.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"requestedAt\":{\"description\":\"The date and time when the action was requested, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"result\":{\"description\":\"A simple public object.\",\"example\":null,\"properties\":{\"archived\":{\"description\":\"A boolean indicating whether this object is archived.\",\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"description\":\"The date and time when this object was archived, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when this object was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for this object, represented as a string.\",\"example\":null,\"type\":\"string\"},\"objectWriteTraceId\":{\"description\":\"A string identifier used for tracing write operations on this object.\",\"example\":null,\"type\":\"string\"},\"properties\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of property names to their current values, where each value is a string.\",\"example\":null,\"type\":\"object\"},\"propertiesWithHistory\":{\"additionalProperties\":{\"example\":null,\"items\":{\"description\":\"Property model that includes timestamp.\",\"example\":null,\"properties\":{\"sourceId\":{\"description\":\"A string identifier for the specific source of the value.\",\"example\":null,\"type\":\"string\"},\"sourceLabel\":{\"description\":\"A string label providing a human-readable description of the source.\",\"example\":null,\"type\":\"string\"},\"sourceType\":{\"description\":\"A string indicating the type of source from which the value originated. This is a required field.\",\"example\":null,\"type\":\"string\"},\"timestamp\":{\"description\":\"The date and time when the value was recorded, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"updatedByUserId\":{\"description\":\"An integer representing the ID of the user who last updated the value.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"value\":{\"description\":\"The value associated with the timestamp. It is a string representing the data at that point in time.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"sourceType\",\"timestamp\",\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"description\":\"A map of property names to arrays of historical values, each with a timestamp and source information.\",\"example\":null,\"type\":\"object\"},\"updatedAt\":{\"description\":\"The date and time when this object was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"A string representing the URL associated with this object.\",\"example\":null,\"type\":\"string\"},\"warnings\":{\"description\":\"An array of warnings related to this object, with each warning containing a category, message, and context.\",\"example\":null,\"items\":{\"description\":\"Represents a warning message related to a public object in HubSpot, providing details about the nature and context of the warning.\",\"example\":null,\"properties\":{\"category\":{\"description\":\"The category of the warning, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object containing additional context about the warning, where each key-value pair provides further information.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A descriptive message providing details about the warning, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"context\",\"message\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"archived\",\"createdAt\",\"id\",\"properties\",\"updatedAt\"],\"type\":\"object\"},\"startedAt\":{\"description\":\"The date and time when the action started processing, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"description\":\"The current status of the action. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.\",\"enum\":[\"CANCELED\",\"COMPLETE\",\"PENDING\",\"PROCESSING\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"completedAt\",\"startedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category. Type: string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition. Type: object with additional properties of type array of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. Type: string, Format: uuid.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error. Type: array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/properties/code\"},\"context\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/properties/context\"},\"in\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/properties/in\"},\"message\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/properties/message\"},\"subCategory\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/errors/items/properties/errors/items/properties/subCategory\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps. Type: object with additional properties of type string.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. Type: string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error. Type: string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"crm.objects.commercepayments.write\"]},{\"oauth2\":[\"crm.schemas.commercepayments.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status","rename":{"param":{"paymentCrmObjectId":"payment_crm_object_id","taskId":"task_id"}},"segments":[{"lit":"commerce"},{"lit":"payments"},{"lit":"2027-03-beta"},{"var":"payment_crm_object_id"},{"lit":"actions"},{"lit":"retry"},{"lit":"async"},{"lit":"tasks"},{"var":"task_id"},{"lit":"status"}],"select":{"exist":["payment_crm_object_id","task_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["2027_03_beta","task"]]},"key$":"payments_action_response_with_single_result_simple_public_object","name__orig":"payments_action_response_with_single_result_simple_public_object","Name":"PaymentsActionResponseWithSingleResultSimplePublicObject","name_":"payments_action_response_with_single_result_simple_public_object","name-":"payments-action-response-with-single-result-simple-public-object","NAME":"PAYMENTS_ACTION_RESPONSE_WITH_SINGLE_RESULT_SIMPLE_PUBLIC_OBJECT","index$":11}, {"active":true,"entity":"payments_action_response_with_single_result_simple_public_object","key$":"BasicPaymentsActionResponseWithSingleResultSimplePublicObjectFlow","kind":"basic","name":"BasicPaymentsActionResponseWithSingleResultSimplePublicObjectFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"payment_crm_object_id":"payment_crm_object01","task_id":"task01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"payments_action_response_with_single_result_simple_public_object_ref01"}}],"index$":0}]}, 'PaymentsActionResponseWithSingleResultSimplePublicObject')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payments_action_response_with_single_result_simple_public_object_ref01_data = Object.values(setup.data.existing.payments_action_response_with_single_result_simple_public_object)[0] as any

    // LIST
    const payments_action_response_with_single_result_simple_public_object_ref01_ent = client.PaymentsActionResponseWithSingleResultSimplePublicObject()
    const payments_action_response_with_single_result_simple_public_object_ref01_match: any = {}
    payments_action_response_with_single_result_simple_public_object_ref01_match['payment_crm_object_id'] = setup.idmap['payment_crm_object01']
    payments_action_response_with_single_result_simple_public_object_ref01_match['task_id'] = setup.idmap['task01']

    const payments_action_response_with_single_result_simple_public_object_ref01_list = (await payments_action_response_with_single_result_simple_public_object_ref01_ent.list(payments_action_response_with_single_result_simple_public_object_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/payments_action_response_with_single_result_simple_public_object/PaymentsActionResponseWithSingleResultSimplePublicObjectTestData.json')

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
    ['payments_action_response_with_single_result_simple_public_object01','payments_action_response_with_single_result_simple_public_object02','payments_action_response_with_single_result_simple_public_object03','2027_03_beta01','2027_03_beta02','2027_03_beta03','task01','task02','task03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PAYMENTS_ACTION_RESPONSE_WITH_SINGLE_RESULT_SIMPLE_PUBLIC_OBJECT_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTS_ACTION_RESPONSE_WITH_SINGLE_RESULT_SIMPLE_PUBLIC_OBJECT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTS_ACTION_RESPONSE_WITH_SINGLE_RESULT_SIMPLE_PUBLIC_OBJECT_ENTID']
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
  
