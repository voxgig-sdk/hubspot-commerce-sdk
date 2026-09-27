
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


describe('PaymentsSettingsGetShippingSettingsPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PaymentsSettingsGetShippingSettingsPublic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"collectShippingAddressByDefault":{"a":true,"h":"Collect Shipping Address By Default","n":"collectShippingAddressByDefault","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"A boolean indicating whether the shipping address is collected by default.","t":"`$BOOLEAN`","key$":"collectShippingAddressByDefault","index$":0},"countriesShippedTo":{"a":true,"h":"Countries Shipped To","n":"countriesShippedTo","r":true,"sh":"An array of strings representing the list of countries to which shipping is available.","t":"`$ARRAY`","key$":"countriesShippedTo","index$":1}},"name":"payments_settings_get_shipping_settings_public","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /commerce/payments-settings/2027-03-beta/payments-settings/shipping","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/commerce/payments-settings/2027-03-beta/payments-settings/shipping","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"payments-settings"},{"lit":"2027-03-beta"},{"lit":"payments-settings"},{"lit":"shipping"}],"t":{"req":"`reqdata`","res":"`body.countriesShippedTo`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /commerce/payments-settings/2027-03-beta/payments-settings/shipping","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/commerce/payments-settings/2027-03-beta/payments-settings/shipping","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"payments-settings"},{"lit":"2027-03-beta"},{"lit":"payments-settings"},{"lit":"shipping"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"payments_settings_get_shipping_settings_public","name__orig":"payments_settings_get_shipping_settings_public","Name":"PaymentsSettingsGetShippingSettingsPublic","name_":"payments_settings_get_shipping_settings_public","name-":"payments-settings-get-shipping-settings-public","NAME":"PAYMENTS_SETTINGS_GET_SHIPPING_SETTINGS_PUBLIC","index$":17}, {"active":true,"entity":"payments_settings_get_shipping_settings_public","key$":"BasicPaymentsSettingsGetShippingSettingsPublicFlow","kind":"basic","name":"BasicPaymentsSettingsGetShippingSettingsPublicFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"payments_settings_get_shipping_settings_public_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"payments_settings_get_shipping_settings_public_ref01","srcdatavar":"payments_settings_get_shipping_settings_public_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payments_settings_get_shipping_settings_public_ref01"}}],"v":[],"index$":1}]}, 'PaymentsSettingsGetShippingSettingsPublic', {"GET /commerce/payments-settings/2027-03-beta/payments-settings/shipping":{"protocol":"http","parameters":[]},"PATCH /commerce/payments-settings/2027-03-beta/payments-settings/shipping":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["countriesShippedTo"],"type":"object","properties":{"collectShippingAddressByDefault":{"type":"boolean","description":"A boolean indicating whether the shipping address should be collected by default.","example":null,"key$":"collectShippingAddressByDefault"},"countriesShippedTo":{"type":"object","properties":{},"description":"An object representing the countries to which shipments are allowed. The structure of this object is not detailed in the specification.","example":null,"key$":"countriesShippedTo"}},"example":null,"x-ref":"#/components/schemas/PaymentsSettingsUpdateShippingSettingsPublicRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payments_settings_get_shipping_settings_public_ref01_data = Object.values(setup.data.existing.payments_settings_get_shipping_settings_public)[0]

    // LIST
    const payments_settings_get_shipping_settings_public_ref01_ent = client.PaymentsSettingsGetShippingSettingsPublic()
    const payments_settings_get_shipping_settings_public_ref01_match = {}

    const payments_settings_get_shipping_settings_public_ref01_list = (await payments_settings_get_shipping_settings_public_ref01_ent.list(payments_settings_get_shipping_settings_public_ref01_match)).map((e) => e.data())


    // UPDATE
    const payments_settings_get_shipping_settings_public_ref01_data_up0 = {}

    const payments_settings_get_shipping_settings_public_ref01_resdata_up0 = (await payments_settings_get_shipping_settings_public_ref01_ent.update(payments_settings_get_shipping_settings_public_ref01_data_up0)).data()
    assert(null != payments_settings_get_shipping_settings_public_ref01_resdata_up0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/payments_settings_get_shipping_settings_public/PaymentsSettingsGetShippingSettingsPublicTestData.json')

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
    ['payments_settings_get_shipping_settings_public01','payments_settings_get_shipping_settings_public02','payments_settings_get_shipping_settings_public03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_SHIPPING_SETTINGS_PUBLIC_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_SHIPPING_SETTINGS_PUBLIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_SHIPPING_SETTINGS_PUBLIC_ENTID']
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
  
