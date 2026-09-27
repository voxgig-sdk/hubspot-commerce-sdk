
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


describe('PaymentsSettingsGetBillingSettingsPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PaymentsSettingsGetBillingSettingsPublic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountGoogleAnalyticsEnabled":{"a":true,"h":"Account Google Analytics Enabled","n":"accountGoogleAnalyticsEnabled","r":false,"sh":"Indicates whether Google Analytics tracking is enabled for the account.","t":"`$BOOLEAN`","key$":"accountGoogleAnalyticsEnabled","index$":0},"checkoutPrefillEnabled":{"a":true,"h":"Checkout Prefill Enabled","n":"checkoutPrefillEnabled","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Indicates whether checkout fields should be prefilled.","t":"`$BOOLEAN`","key$":"checkoutPrefillEnabled","index$":1},"collectFullBillingAddress":{"a":true,"h":"Collect Full Billing Address","n":"collectFullBillingAddress","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Indicates whether the full billing address should be collected.","t":"`$BOOLEAN`","key$":"collectFullBillingAddress","index$":2},"collectPaymentMethodOnFile":{"a":true,"h":"Collect Payment Method On File","n":"collectPaymentMethodOnFile","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Indicates whether a payment method should be kept on file.","t":"`$BOOLEAN`","key$":"collectPaymentMethodOnFile","index$":3},"defaultFromEmailAddress":{"a":true,"h":"Default From Email Address","n":"defaultFromEmailAddress","r":true,"sh":"The default email address used for sending communications.","t":"`$STRING`","key$":"defaultFromEmailAddress","index$":4},"paymentsGoogleAnalyticsEnabled":{"a":true,"h":"Payments Google Analytics Enabled","n":"paymentsGoogleAnalyticsEnabled","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Indicates whether Google Analytics tracking is enabled for payments.","t":"`$BOOLEAN`","key$":"paymentsGoogleAnalyticsEnabled","index$":5},"recaptchaEnabled":{"a":true,"h":"Recaptcha Enabled","n":"recaptchaEnabled","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Indicates whether reCAPTCHA is enabled for additional security.","t":"`$BOOLEAN`","key$":"recaptchaEnabled","index$":6}},"name":"payments_settings_get_billing_settings_public","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /commerce/payments-settings/2027-03-beta/payments-settings/billing","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/commerce/payments-settings/2027-03-beta/payments-settings/billing","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"payments-settings"},{"lit":"2027-03-beta"},{"lit":"payments-settings"},{"lit":"billing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /commerce/payments-settings/2027-03-beta/payments-settings/billing","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/commerce/payments-settings/2027-03-beta/payments-settings/billing","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"payments-settings"},{"lit":"2027-03-beta"},{"lit":"payments-settings"},{"lit":"billing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"payments_settings_get_billing_settings_public","name__orig":"payments_settings_get_billing_settings_public","Name":"PaymentsSettingsGetBillingSettingsPublic","name_":"payments_settings_get_billing_settings_public","name-":"payments-settings-get-billing-settings-public","NAME":"PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC","index$":14}, {"active":true,"entity":"payments_settings_get_billing_settings_public","key$":"BasicPaymentsSettingsGetBillingSettingsPublicFlow","kind":"basic","name":"BasicPaymentsSettingsGetBillingSettingsPublicFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"payments_settings_get_billing_settings_public_ref01","srcdatavar":"payments_settings_get_billing_settings_public_ref01_data","suffix":"_up0","textfield":"defaultFromEmailAddress"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payments_settings_get_billing_settings_public_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"payments_settings_get_billing_settings_public_ref01","srcdatavar":"payments_settings_get_billing_settings_public_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payments_settings_get_billing_settings_public_ref01"}}],"index$":1}]}, 'PaymentsSettingsGetBillingSettingsPublic', {"GET /commerce/payments-settings/2027-03-beta/payments-settings/billing":{"protocol":"http","parameters":[]},"PATCH /commerce/payments-settings/2027-03-beta/payments-settings/billing":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["defaultFromEmailAddress"],"type":"object","properties":{"checkoutPrefillEnabled":{"type":"boolean","description":"A boolean indicating whether checkout forms should be pre-filled with known customer information.","example":null,"key$":"checkoutPrefillEnabled"},"collectFullBillingAddress":{"type":"boolean","description":"A boolean indicating whether the full billing address should be collected during the checkout process.","example":null,"key$":"collectFullBillingAddress"},"collectPaymentMethodOnFile":{"type":"boolean","description":"A boolean indicating whether the payment method should be stored on file for future transactions.","example":null,"key$":"collectPaymentMethodOnFile"},"defaultFromEmailAddress":{"type":"object","properties":{},"description":"An object representing the default email address used for sending communications related to billing.","example":null,"key$":"defaultFromEmailAddress"},"paymentsGoogleAnalyticsEnabled":{"type":"boolean","description":"A boolean indicating whether Google Analytics tracking is enabled for payment transactions.","example":null,"key$":"paymentsGoogleAnalyticsEnabled"},"recaptchaEnabled":{"type":"boolean","description":"A boolean indicating whether reCAPTCHA is enabled during the checkout process to prevent fraudulent activities.","example":null,"key$":"recaptchaEnabled"}},"example":null,"x-ref":"#/components/schemas/PaymentsSettingsUpdateBillingSettingsPublicRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payments_settings_get_billing_settings_public_ref01_data = Object.values(setup.data.existing.payments_settings_get_billing_settings_public)[0]

    // UPDATE
    const payments_settings_get_billing_settings_public_ref01_ent = client.PaymentsSettingsGetBillingSettingsPublic()
    const payments_settings_get_billing_settings_public_ref01_data_up0 = {}

    const payments_settings_get_billing_settings_public_ref01_markdef_up0 = { name: 'defaultFromEmailAddress', value: 'Mark01-payments_settings_get_billing_settings_public_ref01_' + setup.now }
    payments_settings_get_billing_settings_public_ref01_data_up0 [payments_settings_get_billing_settings_public_ref01_markdef_up0.name] = payments_settings_get_billing_settings_public_ref01_markdef_up0.value

    const payments_settings_get_billing_settings_public_ref01_resdata_up0 = (await payments_settings_get_billing_settings_public_ref01_ent.update(payments_settings_get_billing_settings_public_ref01_data_up0)).data()
    assert(null != payments_settings_get_billing_settings_public_ref01_resdata_up0)

    assert(payments_settings_get_billing_settings_public_ref01_resdata_up0[payments_settings_get_billing_settings_public_ref01_markdef_up0.name] === payments_settings_get_billing_settings_public_ref01_markdef_up0.value)


    // LOAD
    const payments_settings_get_billing_settings_public_ref01_match_dt0 = {}
    const payments_settings_get_billing_settings_public_ref01_data_dt0 = (await payments_settings_get_billing_settings_public_ref01_ent.load(payments_settings_get_billing_settings_public_ref01_match_dt0)).data()
    assert(null != payments_settings_get_billing_settings_public_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/payments_settings_get_billing_settings_public/PaymentsSettingsGetBillingSettingsPublicTestData.json')

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
    ['payments_settings_get_billing_settings_public01','payments_settings_get_billing_settings_public02','payments_settings_get_billing_settings_public03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC_ENTID']
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
  
