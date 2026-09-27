
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


describe('PriceBooksBatchResponsePriceBookItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PriceBooksBatchResponsePriceBookItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completedAt":{"a":true,"fo":"date-time","h":"Completed At","n":"completedAt","r":true,"sh":"The date and time when the batch operation was completed, in ISO 8601 format.","t":"`$STRING`","key$":"completedAt","index$":0},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":true,"sh":"An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book.","t":"`$ARRAY`","key$":"inputs","index$":1},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"A map of link names to associated URIs providing additional information or actions related to the batch operation.","t":"`$OBJECT`","key$":"links","index$":2},"requestedAt":{"a":true,"fo":"date-time","h":"Requested At","n":"requestedAt","r":false,"sh":"The date and time when the batch operation was requested, in ISO 8601 format.","t":"`$STRING`","key$":"requestedAt","index$":3},"results":{"a":true,"h":"Results","n":"results","r":true,"sh":"An array of PriceBookItemResponse objects representing the individual results of the batch operation.","t":"`$ARRAY`","key$":"results","index$":4},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":true,"sh":"The date and time when the batch operation started, in ISO 8601 format.","t":"`$STRING`","key$":"startedAt","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The current status of the batch operation.","t":"`$STRING`","key$":"status","index$":6}},"name":"price_books_batch_response_price_book_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"price_book_id","or":"price_book_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create","q":{"exist":["price_book_id"]},"r":{"param":{"priceBookId":"price_book_id"}},"s":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"items"},{"lit":"batch"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"price_book_id","or":"price_book_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update","q":{"exist":["price_book_id"]},"r":{"param":{"priceBookId":"price_book_id"}},"s":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"items"},{"lit":"batch"},{"lit":"update"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.price_book"]]},"key$":"price_books_batch_response_price_book_item","name__orig":"price_books_batch_response_price_book_item","Name":"PriceBooksBatchResponsePriceBookItem","name_":"price_books_batch_response_price_book_item","name-":"price-books-batch-response-price-book-item","NAME":"PRICE_BOOKS_BATCH_RESPONSE_PRICE_BOOK_ITEM","index$":20}, {"active":true,"entity":"price_books_batch_response_price_book_item","key$":"BasicPriceBooksBatchResponsePriceBookItemFlow","kind":"basic","name":"BasicPriceBooksBatchResponsePriceBookItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"price_books_batch_response_price_book_item_ref01"},"m":{"price_book_id":"price_book01"},"o":"create","s":[],"v":[],"index$":0}]}, 'PriceBooksBatchResponsePriceBookItem', {"POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. This property is required.","example":null,"items":{"required":["productId"],"type":"object","properties":{"productId":{"type":"string","description":"The unique identifier of the product to be added to the price book. It is a string and is required.","example":null,"key$":"productId"}},"example":null,"x-ref":"#/components/schemas/PriceBooksPriceBookAddProductRequest"},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/PriceBooksBatchInputPriceBookAddProductRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"priceBookId","in":"path","description":"The unique identifier of the price book to which the items will be added.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]},"POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of objects, each representing a price book item to be updated. Each object must conform to the PriceBookItemBatchUpdateInput schema.","example":null,"items":{"required":["id","properties"],"type":"object","properties":{"id":{"type":"string","description":"The unique identifier for the price book item to be updated. It is a string.","example":null},"properties":{"required":[],"type":"object","properties":{},"example":null,"x-ref":"#/components/schemas/PriceBooksPriceBookItemUpdateRequest"}},"example":null,"x-ref":"#/components/schemas/PriceBooksPriceBookItemBatchUpdateInput"},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/PriceBooksBatchInputPriceBookItemBatchUpdateInput","index$":1},"example":null}},"required":true},"parameters":[{"name":"priceBookId","in":"path","description":"The unique identifier of the price book containing the items to update.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const price_books_batch_response_price_book_item_ref01_ent = client.PriceBooksBatchResponsePriceBookItem()
    let price_books_batch_response_price_book_item_ref01_data = setup.data.new.price_books_batch_response_price_book_item['price_books_batch_response_price_book_item_ref01']
    price_books_batch_response_price_book_item_ref01_data['price_book_id'] = setup.idmap['price_book01']

    price_books_batch_response_price_book_item_ref01_data = (await price_books_batch_response_price_book_item_ref01_ent.create(price_books_batch_response_price_book_item_ref01_data)).data()
    assert(null != price_books_batch_response_price_book_item_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/price_books_batch_response_price_book_item/PriceBooksBatchResponsePriceBookItemTestData.json')

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
    ['price_books_batch_response_price_book_item01','price_books_batch_response_price_book_item02','price_books_batch_response_price_book_item03','price_book01','price_book02','price_book03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_BATCH_RESPONSE_PRICE_BOOK_ITEM_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_BATCH_RESPONSE_PRICE_BOOK_ITEM_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_BATCH_RESPONSE_PRICE_BOOK_ITEM_ENTID']
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
  
