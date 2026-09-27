
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

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":true,"sh":"A string indicating the category of the error.","t":"`$STRING`","key$":"category","index$":0},"context":{"a":true,"h":"Context","n":"context","r":true,"sh":"An object containing additional context about the error condition, where keys are context names and values are arrays of strings.","t":"`$OBJECT`","key$":"context","index$":1},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"An array of ErrorDetail objects providing further information about the error.","t":"`$ARRAY`","key$":"errors","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"A string that uniquely identifies this specific error instance.","t":"`$STRING`","key$":"id","index$":3},"links":{"a":true,"h":"Links","n":"links","r":true,"sh":"An object mapping link names to associated URIs that contain documentation or recommended remediation steps for the error.","t":"`$OBJECT`","key$":"links","index$":4},"message":{"a":true,"h":"Message","n":"message","r":true,"sh":"A string containing a human-readable message describing the error.","t":"`$STRING`","key$":"message","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"A string representing the status of the error.","t":"`$STRING`","key$":"status","index$":6},"subCategory":{"a":true,"h":"Sub Category","n":"subCategory","r":false,"sh":"An object providing more specific details about the error category.","t":"`$OBJECT`","key$":"subCategory","index$":7}},"id":{"field":"id","name":"id"},"name":"payments_action_response_with_single_result_simple_public_object","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"payment_crm_object_id","or":"payment_crm_object_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"param","n":"task_id","or":"task_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status","q":{"exist":["payment_crm_object_id","task_id"]},"r":{"param":{"paymentCrmObjectId":"payment_crm_object_id","taskId":"task_id"}},"s":[{"lit":"commerce"},{"lit":"payments"},{"lit":"2027-03-beta"},{"var":"payment_crm_object_id"},{"lit":"actions"},{"lit":"retry"},{"lit":"async"},{"lit":"tasks"},{"var":"task_id"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"payments_action_response_with_single_result_simple_public_object","name__orig":"payments_action_response_with_single_result_simple_public_object","Name":"PaymentsActionResponseWithSingleResultSimplePublicObject","name_":"payments_action_response_with_single_result_simple_public_object","name-":"payments-action-response-with-single-result-simple-public-object","NAME":"PAYMENTS_ACTION_RESPONSE_WITH_SINGLE_RESULT_SIMPLE_PUBLIC_OBJECT","index$":12}, {"active":true,"entity":"payments_action_response_with_single_result_simple_public_object","key$":"BasicPaymentsActionResponseWithSingleResultSimplePublicObjectFlow","kind":"basic","name":"BasicPaymentsActionResponseWithSingleResultSimplePublicObjectFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"payment_crm_object_id":"payment_crm_object01","task_id":"task01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"payments_action_response_with_single_result_simple_public_object_ref01"}}],"index$":0}]}, 'PaymentsActionResponseWithSingleResultSimplePublicObject', {"GET /commerce/payments/2027-03-beta/{paymentCrmObjectId}/actions/retry/async/tasks/{taskId}/status":{"protocol":"http","parameters":[{"name":"paymentCrmObjectId","in":"path","description":"The unique identifier of the payment CRM object associated with the task.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0},{"name":"taskId","in":"path","description":"The unique identifier of the task whose status is being retrieved.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payments_action_response_with_single_result_simple_public_object_ref01_data = Object.values(setup.data.existing.payments_action_response_with_single_result_simple_public_object)[0]

    // LIST
    const payments_action_response_with_single_result_simple_public_object_ref01_ent = client.PaymentsActionResponseWithSingleResultSimplePublicObject()
    const payments_action_response_with_single_result_simple_public_object_ref01_match = {}
    payments_action_response_with_single_result_simple_public_object_ref01_match['payment_crm_object_id'] = setup.idmap['payment_crm_object01']
    payments_action_response_with_single_result_simple_public_object_ref01_match['task_id'] = setup.idmap['task01']

    const payments_action_response_with_single_result_simple_public_object_ref01_list = (await payments_action_response_with_single_result_simple_public_object_ref01_ent.list(payments_action_response_with_single_result_simple_public_object_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
    ['payments_action_response_with_single_result_simple_public_object01','payments_action_response_with_single_result_simple_public_object02','payments_action_response_with_single_result_simple_public_object03','payment_crm_object01','task01'],
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
  
