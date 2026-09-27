
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


describe('PaymentsaccountsPaymentAccountViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PaymentsaccountsPaymentAccountView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"canPayout":{"a":true,"h":"Can Payout","n":"canPayout","r":true,"sh":"A boolean indicating whether the account is capable of making payouts.","t":"`$BOOLEAN`","key$":"canPayout","index$":0},"canTransact":{"a":true,"h":"Can Transact","n":"canTransact","r":true,"sh":"A boolean indicating whether the account is capable of processing transactions.","t":"`$BOOLEAN`","key$":"canTransact","index$":1},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":false,"sh":"The date and time when the payment account was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":2},"eligibleProcessorTypes":{"a":true,"h":"Eligible Processor Types","n":"eligibleProcessorTypes","r":true,"sh":"An array of processor types that the account is eligible to use.","t":"`$ARRAY`","key$":"eligibleProcessorTypes","index$":3},"enrollmentState":{"a":true,"h":"Enrollment State","n":"enrollmentState","r":true,"sh":"The current enrollment state of the payment account.","t":"`$STRING`","key$":"enrollmentState","index$":4},"hasTransacted":{"a":true,"h":"Has Transacted","n":"hasTransacted","r":true,"sh":"A boolean indicating whether the account has ever processed a transaction.","t":"`$BOOLEAN`","key$":"hasTransacted","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The portalId for the payment account.","t":"`$STRING`","key$":"id","index$":6},"lastTransactedAt":{"a":true,"fo":"date-time","h":"Last Transacted At","n":"lastTransactedAt","r":false,"sh":"The date and time of the last transaction made with this account, in ISO 8601 format.","t":"`$STRING`","key$":"lastTransactedAt","index$":7},"processorType":{"a":true,"h":"Processor Type","n":"processorType","r":true,"sh":"The type of payment processor associated with the account.","t":"`$STRING`","key$":"processorType","index$":8},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":false,"sh":"The date and time when the payment account was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":9}},"id":{"field":"id","name":"id"},"name":"paymentsaccounts_payment_account_view","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /commerce/payment-accounts/2026-09/status","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/commerce/payment-accounts/2026-09/status","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"payment-accounts"},{"lit":"2026-09"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body.eligibleProcessorTypes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"paymentsaccounts_payment_account_view","name__orig":"paymentsaccounts_payment_account_view","Name":"PaymentsaccountsPaymentAccountView","name_":"paymentsaccounts_payment_account_view","name-":"paymentsaccounts-payment-account-view","NAME":"PAYMENTSACCOUNTS_PAYMENT_ACCOUNT_VIEW","index$":18}, {"active":true,"entity":"paymentsaccounts_payment_account_view","key$":"BasicPaymentsaccountsPaymentAccountViewFlow","kind":"basic","name":"BasicPaymentsaccountsPaymentAccountViewFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paymentsaccounts_payment_account_view_ref01"}}],"index$":0}]}, 'PaymentsaccountsPaymentAccountView', {"GET /commerce/payment-accounts/2026-09/status":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paymentsaccounts_payment_account_view_ref01_data = Object.values(setup.data.existing.paymentsaccounts_payment_account_view)[0]

    // LIST
    const paymentsaccounts_payment_account_view_ref01_ent = client.PaymentsaccountsPaymentAccountView()
    const paymentsaccounts_payment_account_view_ref01_match = {}

    const paymentsaccounts_payment_account_view_ref01_list = (await paymentsaccounts_payment_account_view_ref01_ent.list(paymentsaccounts_payment_account_view_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/paymentsaccounts_payment_account_view/PaymentsaccountsPaymentAccountViewTestData.json')

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
    ['paymentsaccounts_payment_account_view01','paymentsaccounts_payment_account_view02','paymentsaccounts_payment_account_view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PAYMENTSACCOUNTS_PAYMENT_ACCOUNT_VIEW_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTSACCOUNTS_PAYMENT_ACCOUNT_VIEW_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTSACCOUNTS_PAYMENT_ACCOUNT_VIEW_ENTID']
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
  
