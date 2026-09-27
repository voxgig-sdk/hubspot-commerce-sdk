
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


describe('PriceBooksPriceBookItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PriceBooksPriceBookItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":false,"sh":"A boolean indicating whether the price book item is archived.","t":"`$BOOLEAN`","key$":"archived","index$":0},"archivedAt":{"a":true,"fo":"date-time","h":"Archived At","n":"archivedAt","r":false,"sh":"The date and time when the price book item was archived, in ISO 8601 format.","t":"`$STRING`","key$":"archivedAt","index$":1},"billingFrequency":{"a":true,"h":"Billing Frequency","n":"billingFrequency","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The frequency at which billing occurs for the price book item.","t":"`$STRING`","key$":"billingFrequency","index$":2},"billingPeriod":{"a":true,"h":"Billing Period","n":"billingPeriod","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The billing period for the price book item.","t":"`$STRING`","key$":"billingPeriod","index$":3},"costOfGoodsSold":{"a":true,"h":"Cost Of Goods Sold","n":"costOfGoodsSold","r":false,"sh":"The cost of goods sold for the price book item.","t":"`$STRING`","key$":"costOfGoodsSold","index$":4},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":false,"sh":"The date and time when the price book item was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":5},"customProperties":{"a":true,"h":"Custom Properties","n":"customProperties","r":true,"sh":"A map of custom property names to their values for the price book item.","t":"`$OBJECT`","key$":"customProperties","index$":6},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"A description of the price book item.","t":"`$STRING`","key$":"description","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the price book item.","t":"`$STRING`","key$":"id","index$":8},"images":{"a":true,"h":"Images","n":"images","r":false,"sh":"A string representing images associated with the price book item.","t":"`$STRING`","key$":"images","index$":9},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the price book item.","t":"`$STRING`","key$":"name","index$":10},"priceBookId":{"a":true,"h":"Price Book Id","n":"priceBookId","r":false,"sh":"The unique identifier for the price book containing this item.","t":"`$STRING`","key$":"priceBookId","index$":11},"pricing":{"a":true,"h":"Pricing","n":"pricing","r":true,"t":"`$OBJECT`","key$":"pricing","index$":12},"productClassification":{"a":true,"h":"Product Classification","n":"productClassification","r":false,"sh":"The classification of the product.","t":"`$STRING`","key$":"productClassification","index$":13},"productId":{"a":true,"h":"Product Id","n":"productId","r":true,"sh":"The unique identifier for the product associated with the price book item.","t":"`$STRING`","key$":"productId","index$":14},"productType":{"a":true,"h":"Product Type","n":"productType","r":false,"sh":"The type of product.","t":"`$STRING`","key$":"productType","index$":15},"recurringBillingTerms":{"a":true,"h":"Recurring Billing Terms","n":"recurringBillingTerms","r":false,"sh":"The terms of recurring billing for the price book item.","t":"`$STRING`","key$":"recurringBillingTerms","index$":16},"sku":{"a":true,"h":"Sku","n":"sku","r":false,"sh":"The stock keeping unit (SKU) of the price book item.","t":"`$STRING`","key$":"sku","index$":17},"status":{"a":true,"h":"Status","n":"status","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The current status of the price book item.","t":"`$STRING`","key$":"status","index$":18},"taxCategory":{"a":true,"h":"Tax Category","n":"taxCategory","r":false,"sh":"The tax category of the price book item.","t":"`$STRING`","key$":"taxCategory","index$":19},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":false,"sh":"The date and time when the price book item was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":20},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"A URL associated with the price book item.","t":"`$STRING`","key$":"url","index$":21}},"id":{"field":"id","name":"id"},"name":"price_books_price_book_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /commerce/price-books/2026-09/price-books/{priceBookId}/items","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"price_book_id","or":"price_book_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/commerce/price-books/2026-09/price-books/{priceBookId}/items","q":{"exist":["price_book_id"]},"r":{"param":{"priceBookId":"price_book_id"}},"s":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"items"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"price_book_item_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"price_book_id","or":"price_book_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$ARRAY`","index$":1}]},"k":"http","m":"GET","o":"/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}","q":{"exist":["archived","id","price_book_id","property"]},"r":{"param":{"priceBookId":"price_book_id","priceBookItemId":"id"}},"s":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"price_book_item_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"ex":null,"k":"param","n":"price_book_id","or":"price_book_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"PATCH","o":"/commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}","q":{"exist":["archived","id","price_book_id"]},"r":{"param":{"priceBookId":"price_book_id","priceBookItemId":"id"}},"s":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.price_book"]]},"key$":"price_books_price_book_item","name__orig":"price_books_price_book_item","Name":"PriceBooksPriceBookItem","name_":"price_books_price_book_item","name-":"price-books-price-book-item","NAME":"PRICE_BOOKS_PRICE_BOOK_ITEM","index$":23}, {"active":true,"entity":"price_books_price_book_item","key$":"BasicPriceBooksPriceBookItemFlow","kind":"basic","name":"BasicPriceBooksPriceBookItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"price_books_price_book_item_ref01"},"m":{"price_book_id":"price_book01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"price_book_id":"price_book01"},"i":{"ref":"price_books_price_book_item_ref01","srcdatavar":"price_books_price_book_item_ref01_data","suffix":"_up0","textfield":"archivedAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-price_books_price_book_item_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"price_books_price_book_item_ref01","srcdatavar":"price_books_price_book_item_ref01_data","suffix":"_dt0"},"m":{"id":"price_books_price_book_item01","price_book_id":"price_book01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-price_books_price_book_item_ref01"}}],"index$":2}]}, 'PriceBooksPriceBookItem', {"POST /commerce/price-books/2026-09/price-books/{priceBookId}/items":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["productId"],"type":"object","properties":{"productId":{"type":"string","description":"The unique identifier of the product to be added to the price book. It is a string and is required.","example":null,"key$":"productId"}},"example":null,"x-ref":"#/components/schemas/PriceBooksPriceBookAddProductRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"priceBookId","in":"path","description":"The unique identifier of the price book to which items will be added.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]},"GET /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}":{"protocol":"http","parameters":[{"name":"priceBookId","in":"path","description":"The unique identifier of the price book containing the item.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0},{"name":"priceBookItemId","in":"path","description":"The unique identifier of the item within the price book.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":1},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":2},{"name":"properties","in":"query","description":"A list of property names to include in the response.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":3}]},"PATCH /commerce/price-books/2026-09/price-books/{priceBookId}/items/{priceBookItemId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["billingFrequency","billingPeriod","customProperties","status"],"type":"object","properties":{"archived":{"type":"boolean","description":"A boolean indicating whether the price book item is archived.","example":null,"key$":"archived"},"billingFrequency":{"type":"object","properties":{},"description":"An object specifying the frequency at which billing occurs for the price book item.","example":null,"key$":"billingFrequency"},"billingPeriod":{"type":"object","properties":{},"description":"An object specifying the period over which billing occurs for the price book item.","example":null,"key$":"billingPeriod"},"customProperties":{"type":"object","additionalProperties":{"type":"string","example":null},"description":"A map of custom property names to their values, allowing for additional customization of the price book item.","example":null,"key$":"customProperties"},"pricing":{"required":["prices"],"type":"object","properties":{"prices":{"type":"array","description":"An array of PriceUpdateEntry objects, each representing the pricing details for a product, including the currency code and amount.","example":null,"items":{"required":[],"type":"object","properties":{},"example":null,"x-ref":"#/components/schemas/PriceBooksPriceUpdateEntry"}}},"example":null,"x-ref":"#/components/schemas/PriceBooksPricingUpdateRequest","key$":"pricing"},"status":{"type":"object","properties":{},"description":"An object indicating the current status of the price book item.","example":null,"key$":"status"}},"example":null,"x-ref":"#/components/schemas/PriceBooksPriceBookItemUpdateRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"priceBookId","in":"path","description":"The unique identifier of the price book containing the item to update.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0},{"name":"priceBookItemId","in":"path","description":"The unique identifier of the item within the price book to update.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":1},{"name":"archived","in":"query","description":"Whether to return only results that have been archived.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const price_books_price_book_item_ref01_ent = client.PriceBooksPriceBookItem()
    let price_books_price_book_item_ref01_data = setup.data.new.price_books_price_book_item['price_books_price_book_item_ref01']
    price_books_price_book_item_ref01_data['price_book_id'] = setup.idmap['price_book01']

    price_books_price_book_item_ref01_data = (await price_books_price_book_item_ref01_ent.create(price_books_price_book_item_ref01_data)).data()
    assert(null != price_books_price_book_item_ref01_data.id)


    // UPDATE
    const price_books_price_book_item_ref01_data_up0 = {}
    price_books_price_book_item_ref01_data_up0.id = price_books_price_book_item_ref01_data.id
    price_books_price_book_item_ref01_data_up0 ['price_book_id'] = setup.idmap['price_book_id']

    const price_books_price_book_item_ref01_markdef_up0 = { name: 'archivedAt', value: 'Mark01-price_books_price_book_item_ref01_' + setup.now }
    price_books_price_book_item_ref01_data_up0 [price_books_price_book_item_ref01_markdef_up0.name] = price_books_price_book_item_ref01_markdef_up0.value

    const price_books_price_book_item_ref01_resdata_up0 = (await price_books_price_book_item_ref01_ent.update(price_books_price_book_item_ref01_data_up0)).data()
    assert(price_books_price_book_item_ref01_resdata_up0.id === price_books_price_book_item_ref01_data_up0.id)

    assert(price_books_price_book_item_ref01_resdata_up0[price_books_price_book_item_ref01_markdef_up0.name] === price_books_price_book_item_ref01_markdef_up0.value)


    // LOAD
    const price_books_price_book_item_ref01_match_dt0 = {}
    price_books_price_book_item_ref01_match_dt0.id = price_books_price_book_item_ref01_data.id
    const price_books_price_book_item_ref01_data_dt0 = (await price_books_price_book_item_ref01_ent.load(price_books_price_book_item_ref01_match_dt0)).data()
    assert(price_books_price_book_item_ref01_data_dt0.id === price_books_price_book_item_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/price_books_price_book_item/PriceBooksPriceBookItemTestData.json')

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
    ['price_books_price_book_item01','price_books_price_book_item02','price_books_price_book_item03','price_book01','price_book02','price_book03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID']
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
  
