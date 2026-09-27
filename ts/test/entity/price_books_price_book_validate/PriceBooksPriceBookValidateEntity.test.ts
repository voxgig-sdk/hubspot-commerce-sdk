

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


describe('PriceBooksPriceBookValidateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PriceBooksPriceBookValidate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'price_books_price_book_validate.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"An array of ErrorDetail objects providing information about any errors encountered during validation.","t":"`$ARRAY`","key$":"errors","index$":0},"isValid":{"a":true,"h":"Is Valid","n":"isValid","r":true,"sh":"A boolean indicating whether the price book is valid.","t":"`$BOOLEAN`","key$":"isValid","index$":1}},"name":"price_books_price_book_validate","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /commerce/price-books/2026-09/price-books/{priceBookId}/validate","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"price_book_id","or":"price_book_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/commerce/price-books/2026-09/price-books/{priceBookId}/validate","q":{"exist":["price_book_id"]},"r":{"param":{"priceBookId":"price_book_id"}},"s":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"validate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.price_book"]]},"key$":"price_books_price_book_validate","name__orig":"price_books_price_book_validate","Name":"PriceBooksPriceBookValidate","name_":"price_books_price_book_validate","name-":"price-books-price-book-validate","NAME":"PRICE_BOOKS_PRICE_BOOK_VALIDATE","index$":24}, {"active":true,"entity":"price_books_price_book_validate","key$":"BasicPriceBooksPriceBookValidateFlow","kind":"basic","name":"BasicPriceBooksPriceBookValidateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"price_books_price_book_validate_ref01"},"m":{"price_book_id":"price_book01"},"o":"create","s":[],"v":[],"index$":0}]}, 'PriceBooksPriceBookValidate', {"POST /commerce/price-books/2026-09/price-books/{priceBookId}/validate":{"protocol":"http","parameters":[{"name":"priceBookId","in":"path","description":"The unique identifier of the price book to validate.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const price_books_price_book_validate_ref01_ent = client.PriceBooksPriceBookValidate()
    let price_books_price_book_validate_ref01_data = setup.data.new.price_books_price_book_validate['price_books_price_book_validate_ref01']
    price_books_price_book_validate_ref01_data['price_book_id'] = setup.idmap['price_book01']

    price_books_price_book_validate_ref01_data = (await price_books_price_book_validate_ref01_ent.create(price_books_price_book_validate_ref01_data)).data()
    assert(null != price_books_price_book_validate_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/price_books_price_book_validate/PriceBooksPriceBookValidateTestData.json')

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
    ['price_books_price_book_validate01','price_books_price_book_validate02','price_books_price_book_validate03','price_book01','price_book02','price_book03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_VALIDATE_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_VALIDATE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_VALIDATE_ENTID']
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
  
