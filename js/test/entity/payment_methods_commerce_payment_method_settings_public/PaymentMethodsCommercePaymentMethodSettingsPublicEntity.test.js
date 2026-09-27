
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


describe('PaymentMethodsCommercePaymentMethodSettingsPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PaymentMethodsCommercePaymentMethodSettingsPublic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"activeCurrencies":{"a":true,"h":"Active Currencies","n":"activeCurrencies","r":true,"sh":"A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod.","t":"`$ARRAY`","key$":"activeCurrencies","index$":0},"commercePaymentMethod":{"a":true,"h":"Commerce Payment Method","n":"commercePaymentMethod","r":true,"sh":"The type of payment method.","t":"`$STRING`","key$":"commercePaymentMethod","index$":1},"isDefaultOn":{"a":true,"h":"Is Default On","n":"isDefaultOn","r":true,"sh":"A boolean indicating whether this payment method is set as the default option.","t":"`$BOOLEAN`","key$":"isDefaultOn","index$":2},"paymentMethodSettings":{"a":true,"h":"Payment Method Settings","n":"paymentMethodSettings","r":true,"sh":"A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.","t":"`$ARRAY`","key$":"paymentMethodSettings","index$":3},"paymentMethodUpdates":{"a":true,"h":"Payment Method Updates","n":"paymentMethodUpdates","r":true,"sh":"An array of updates to be applied to commerce payment methods.","t":"`$ARRAY`","key$":"paymentMethodUpdates","index$":4},"supportedCurrencies":{"a":true,"h":"Supported Currencies","n":"supportedCurrencies","r":true,"sh":"A full list of currencies that are supported by the bundled commercePaymentMethod.","t":"`$ARRAY`","key$":"supportedCurrencies","index$":5}},"name":"payment_methods_commerce_payment_method_settings_public","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /commerce/payment-methods/2027-03-beta/settings","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/commerce/payment-methods/2027-03-beta/settings","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"payment-methods"},{"lit":"2027-03-beta"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body.paymentMethodSettings`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /commerce/payment-methods/2027-03-beta/settings","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/commerce/payment-methods/2027-03-beta/settings","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"payment-methods"},{"lit":"2027-03-beta"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"payment_methods_commerce_payment_method_settings_public","name__orig":"payment_methods_commerce_payment_method_settings_public","Name":"PaymentMethodsCommercePaymentMethodSettingsPublic","name_":"payment_methods_commerce_payment_method_settings_public","name-":"payment-methods-commerce-payment-method-settings-public","NAME":"PAYMENT_METHODS_COMMERCE_PAYMENT_METHOD_SETTINGS_PUBLIC","index$":11}, {"active":true,"entity":"payment_methods_commerce_payment_method_settings_public","key$":"BasicPaymentMethodsCommercePaymentMethodSettingsPublicFlow","kind":"basic","name":"BasicPaymentMethodsCommercePaymentMethodSettingsPublicFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"payment_methods_commerce_payment_method_settings_public_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"payment_methods_commerce_payment_method_settings_public_ref01","srcdatavar":"payment_methods_commerce_payment_method_settings_public_ref01_data","suffix":"_up0","textfield":"commercePaymentMethod"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payment_methods_commerce_payment_method_settings_public_ref01"}}],"v":[],"index$":1}]}, 'PaymentMethodsCommercePaymentMethodSettingsPublic', {"GET /commerce/payment-methods/2027-03-beta/settings":{"protocol":"http","parameters":[]},"PATCH /commerce/payment-methods/2027-03-beta/settings":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["paymentMethodUpdates"],"type":"object","properties":{"paymentMethodUpdates":{"type":"array","description":"An array of updates to be applied to commerce payment methods. Each update specifies changes to a particular payment method.","example":null,"items":{"required":["commercePaymentMethod","isDefaultOn"],"type":"object","properties":{"commercePaymentMethod":{"type":"string","description":"The type of commerce payment method being updated. Valid values include 'CASH', 'CHECK', 'WIRE_TRANSFER', 'CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'KLARNA', 'AFFIRM', and 'OTHER'.","example":null,"enum":[]},"isDefaultOn":{"type":"boolean","description":"A boolean indicating whether this payment method is set as the default option.","example":null}},"example":null,"x-ref":"#/components/schemas/PaymentMethodsUpdateCommercePaymentMethodPublic"},"key$":"paymentMethodUpdates"}},"example":null,"x-ref":"#/components/schemas/PaymentMethodsUpdateCommercePaymentMethodSettingsPublicRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payment_methods_commerce_payment_method_settings_public_ref01_data = Object.values(setup.data.existing.payment_methods_commerce_payment_method_settings_public)[0]

    // LIST
    const payment_methods_commerce_payment_method_settings_public_ref01_ent = client.PaymentMethodsCommercePaymentMethodSettingsPublic()
    const payment_methods_commerce_payment_method_settings_public_ref01_match = {}

    const payment_methods_commerce_payment_method_settings_public_ref01_list = (await payment_methods_commerce_payment_method_settings_public_ref01_ent.list(payment_methods_commerce_payment_method_settings_public_ref01_match)).map((e) => e.data())


    // UPDATE
    const payment_methods_commerce_payment_method_settings_public_ref01_data_up0 = {}

    const payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0 = { name: 'commercePaymentMethod', value: 'Mark01-payment_methods_commerce_payment_method_settings_public_ref01_' + setup.now }
    payment_methods_commerce_payment_method_settings_public_ref01_data_up0 [payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0.name] = payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0.value

    const payment_methods_commerce_payment_method_settings_public_ref01_resdata_up0 = (await payment_methods_commerce_payment_method_settings_public_ref01_ent.update(payment_methods_commerce_payment_method_settings_public_ref01_data_up0)).data()
    assert(null != payment_methods_commerce_payment_method_settings_public_ref01_resdata_up0)

    assert(payment_methods_commerce_payment_method_settings_public_ref01_resdata_up0[payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0.name] === payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/payment_methods_commerce_payment_method_settings_public/PaymentMethodsCommercePaymentMethodSettingsPublicTestData.json')

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
    ['payment_methods_commerce_payment_method_settings_public01','payment_methods_commerce_payment_method_settings_public02','payment_methods_commerce_payment_method_settings_public03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PAYMENT_METHODS_COMMERCE_PAYMENT_METHOD_SETTINGS_PUBLIC_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENT_METHODS_COMMERCE_PAYMENT_METHOD_SETTINGS_PUBLIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENT_METHODS_COMMERCE_PAYMENT_METHOD_SETTINGS_PUBLIC_ENTID']
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
  
