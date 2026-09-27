

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


describe('BatchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.Batch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'batch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"batch","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"price_book_id","or":"price_book_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive","q":{"$action":"archive","exist":["price_book_id"]},"r":{"param":{"priceBookId":"price_book_id"}},"s":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"items"},{"lit":"batch"},{"lit":"archive"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.price_book"]]},"key$":"batch","name__orig":"batch","Name":"Batch","name_":"batch","name-":"batch","NAME":"BATCH","index$":2}, {"active":true,"entity":"batch","key$":"BasicBatchFlow","kind":"basic","name":"BasicBatchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"batch_ref01"},"m":{"price_book_id":"price_book01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Batch', {"POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/archive":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of SimplePublicObjectId objects, each representing a unique identifier for a public object. This property is required and is used to specify the objects involved in the batch operation.","example":null,"items":{"required":["id"],"type":"object","properties":{"id":{"type":"string","description":"The unique identifier for this object, represented as a string.","example":"430001"}},"description":"Contains the Id of a Public Object","example":null,"x-ref":"#/components/schemas/PriceBooksSimplePublicObjectId"}}},"description":"Represents a batch input payload containing a list of simple public object IDs. This component is used when performing batch operations on multiple objects within HubSpot.","example":null,"x-ref":"#/components/schemas/PriceBooksBatchInputSimplePublicObjectId"},"example":null}},"required":true},"parameters":[{"name":"priceBookId","in":"path","description":"The unique identifier of the price book containing the items to be archived.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const batch_ref01_ent = client.Batch()
    let batch_ref01_data = setup.data.new.batch['batch_ref01']
    batch_ref01_data['price_book_id'] = setup.idmap['price_book01']

    batch_ref01_data = (await batch_ref01_ent.create(batch_ref01_data)).data()
    assert(null != batch_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/batch/BatchTestData.json')

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
    ['batch01','batch02','batch03','price_book01','price_book02','price_book03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_BATCH_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_BATCH_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_BATCH_ENTID']
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
  
