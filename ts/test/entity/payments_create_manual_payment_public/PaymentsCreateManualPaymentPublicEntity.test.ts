

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PaymentsCreateManualPaymentPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PaymentsCreateManualPaymentPublic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'payments_create_manual_payment_public.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"associations":{"a":true,"h":"Associations","n":"associations","r":true,"sh":"An array of associations related to the payment, where each item is an AssociationPublicRequest object.","t":"`$ARRAY`","key$":"associations","index$":0},"billingAddress":{"a":true,"h":"Billing Address","n":"billingAddress","r":false,"t":"`$OBJECT`","key$":"billingAddress","index$":1},"currencyCode":{"a":true,"h":"Currency Code","n":"currencyCode","r":true,"sh":"The currency code for the payment, represented as a string.","t":"`$STRING`","key$":"currencyCode","index$":2},"customerEmail":{"a":true,"h":"Customer Email","n":"customerEmail","r":false,"sh":"The email address of the customer making the payment, represented as a string.","t":"`$STRING`","key$":"customerEmail","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the created manual payment, represented as a string.","t":"`$STRING`","key$":"id","index$":4},"paymentAmount":{"a":true,"h":"Payment Amount","n":"paymentAmount","r":true,"sh":"The amount of the payment, represented as a number.","t":"`$NUMBER`","key$":"paymentAmount","index$":5},"paymentDate":{"a":true,"h":"Payment Date","n":"paymentDate","r":true,"sh":"The date of the payment, represented as a string.","t":"`$STRING`","key$":"paymentDate","index$":6},"paymentMethod":{"a":true,"h":"Payment Method","n":"paymentMethod","r":true,"sh":"The method used for the payment, represented as a string.","t":"`$STRING`","key$":"paymentMethod","index$":7}},"id":{"field":"id","name":"id"},"name":"payments_create_manual_payment_public","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /commerce/payments/2027-03-beta/manual-payments","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/commerce/payments/2027-03-beta/manual-payments","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"payments"},{"lit":"2027-03-beta"},{"lit":"manual-payments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"payments_create_manual_payment_public","name__orig":"payments_create_manual_payment_public","Name":"PaymentsCreateManualPaymentPublic","name_":"payments_create_manual_payment_public","name-":"payments-create-manual-payment-public","NAME":"PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC","index$":13}, {"active":true,"entity":"payments_create_manual_payment_public","key$":"BasicPaymentsCreateManualPaymentPublicFlow","kind":"basic","name":"BasicPaymentsCreateManualPaymentPublicFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"payments_create_manual_payment_public_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'PaymentsCreateManualPaymentPublic', {"POST /commerce/payments/2027-03-beta/manual-payments":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["associations","currencyCode","paymentAmount","paymentDate","paymentMethod"],"type":"object","properties":{"associations":{"type":"array","description":"An array of associations related to the payment, where each item is an AssociationPublicRequest object.","example":null,"items":{"required":["to","types"],"type":"object","properties":{"to":{"required":[],"type":"object","properties":{},"example":null,"x-ref":"#/components/schemas/PaymentsAssociationToPublicRequest"},"types":{"type":"array","description":"An array of association types, each defined by the AssociationTypePublicRequest schema. This specifies the nature of the association between the objects.","example":null,"items":{}}},"example":null,"x-ref":"#/components/schemas/PaymentsAssociationPublicRequest"},"key$":"associations"},"billingAddress":{"type":"object","properties":{"city":{"type":"string","description":"The city of the billing address.","example":null},"country":{"type":"string","description":"The country of the billing address.","example":null},"line1":{"type":"string","description":"The first line of the billing address, typically containing the street address or PO Box number.","example":null},"line2":{"type":"string","description":"The second line of the billing address, often used for apartment, suite, or unit numbers.","example":null},"postalCode":{"type":"string","description":"The postal or ZIP code of the billing address.","example":null},"state":{"type":"string","description":"The state or region of the billing address.","example":null}},"example":null,"x-ref":"#/components/schemas/PaymentsBillingAddress","key$":"billingAddress"},"currencyCode":{"type":"string","description":"The currency code for the payment, represented as a string.","example":null,"key$":"currencyCode"},"customerEmail":{"type":"string","description":"The email address of the customer making the payment, represented as a string.","example":null,"key$":"customerEmail"},"paymentAmount":{"type":"number","description":"The amount of the payment, represented as a number.","example":null,"key$":"paymentAmount"},"paymentDate":{"type":"string","description":"The date of the payment, represented as a string.","example":null,"key$":"paymentDate"},"paymentMethod":{"type":"string","description":"The method used for the payment, represented as a string.","example":null,"key$":"paymentMethod"}},"example":null,"x-ref":"#/components/schemas/PaymentsCreateManualPaymentPublicRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const payments_create_manual_payment_public_ref01_ent = client.PaymentsCreateManualPaymentPublic()
    let payments_create_manual_payment_public_ref01_data = setup.data.new.payments_create_manual_payment_public['payments_create_manual_payment_public_ref01']

    payments_create_manual_payment_public_ref01_data = (await payments_create_manual_payment_public_ref01_ent.create(payments_create_manual_payment_public_ref01_data)).data()
    assert(null != payments_create_manual_payment_public_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/payments_create_manual_payment_public/PaymentsCreateManualPaymentPublicTestData.json')

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
    ['payments_create_manual_payment_public01','payments_create_manual_payment_public02','payments_create_manual_payment_public03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID']
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
  
