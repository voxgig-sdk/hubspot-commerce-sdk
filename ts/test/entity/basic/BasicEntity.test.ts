

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


describe('BasicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.Basic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'basic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"basic","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"checkout_fee_id","or":"checkout_fee_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}","q":{"exist":["checkout_fee_id"]},"r":{"param":{"checkoutFeeId":"checkout_fee_id"}},"s":[{"lit":"commerce"},{"lit":"payments-settings"},{"lit":"2027-03-beta"},{"lit":"payments-settings"},{"lit":"checkout-fees"},{"var":"checkout_fee_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /commerce/payment-links/2026-09/payment-links/{paymentLinkId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"payment_link_id","or":"payment_link_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/commerce/payment-links/2026-09/payment-links/{paymentLinkId}","q":{"exist":["payment_link_id"]},"r":{"param":{"paymentLinkId":"payment_link_id"}},"s":[{"lit":"commerce"},{"lit":"payment-links"},{"lit":"2026-09"},{"lit":"payment-links"},{"var":"payment_link_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /commerce/price-books/2026-09/price-books/{priceBookId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"price_book_id","or":"price_book_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/commerce/price-books/2026-09/price-books/{priceBookId}","q":{"exist":["price_book_id"]},"r":{"param":{"priceBookId":"price_book_id"}},"s":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.payment_link"],["$.main.kit.entity.price_book"]]},"key$":"basic","name__orig":"basic","Name":"Basic","name_":"basic","name-":"basic","NAME":"BASIC","index$":1}, {"active":true,"entity":"basic","key$":"BasicBasicFlow","kind":"basic","name":"BasicBasicFlow","param":{},"step":[]}, 'Basic', {"DELETE /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees/{checkoutFeeId}":{"protocol":"http","parameters":[{"name":"checkoutFeeId","in":"path","description":"The unique identifier of the checkout fee to delete.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]},"DELETE /commerce/payment-links/2026-09/payment-links/{paymentLinkId}":{"protocol":"http","parameters":[{"name":"paymentLinkId","in":"path","description":"The unique identifier of the payment link to delete.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]},"DELETE /commerce/price-books/2026-09/price-books/{priceBookId}":{"protocol":"http","parameters":[{"name":"priceBookId","in":"path","description":"The unique identifier of the price book to delete.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let basic_ref01_data = Object.values(setup.data.existing.basic)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/basic/BasicTestData.json')

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
    ['basic01','basic02','basic03','payment_link01','payment_link02','payment_link03','price_book01','price_book02','price_book03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_BASIC_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_BASIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_BASIC_ENTID']
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
  
