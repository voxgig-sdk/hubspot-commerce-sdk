
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


describe('PriceBooksCollectionResponsePriceBookItemResponseForwardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PriceBooksCollectionResponsePriceBookItemResponseForward()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archived","req":false,"short":"A boolean indicating whether the price book item is archived.","type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"archivedAt","req":false,"short":"The date and time when the price book item was archived, in ISO 8601 format.","type":"`$STRING`","index$":1},{"active":true,"name":"billingFrequency","req":false,"short":"The frequency at which billing occurs for the price book item.","type":"`$STRING`","index$":2},{"active":true,"name":"billingPeriod","req":false,"short":"The billing period for the price book item.","type":"`$STRING`","index$":3},{"active":true,"name":"costOfGoodsSold","req":false,"short":"The cost of goods sold for the price book item.","type":"`$STRING`","index$":4},{"active":true,"format":"date-time","name":"createdAt","req":false,"short":"The date and time when the price book item was created, in ISO 8601 format.","type":"`$STRING`","index$":5},{"active":true,"name":"customProperties","req":true,"short":"A map of custom property names to their values for the price book item.","type":"`$OBJECT`","index$":6},{"active":true,"name":"description","req":false,"short":"A description of the price book item.","type":"`$STRING`","index$":7},{"active":true,"name":"id","req":true,"short":"The unique identifier for the price book item.","type":"`$STRING`","index$":8},{"active":true,"name":"images","req":false,"short":"A string representing images associated with the price book item.","type":"`$STRING`","index$":9},{"active":true,"name":"name","req":false,"short":"The name of the price book item.","type":"`$STRING`","index$":10},{"active":true,"name":"priceBookId","req":false,"short":"The unique identifier for the price book containing this item.","type":"`$STRING`","index$":11},{"active":true,"name":"pricing","req":true,"type":"`$OBJECT`","index$":12},{"active":true,"name":"productClassification","req":false,"short":"The classification of the product.","type":"`$STRING`","index$":13},{"active":true,"name":"productId","req":true,"short":"The unique identifier for the product associated with the price book item.","type":"`$STRING`","index$":14},{"active":true,"name":"productType","req":false,"short":"The type of product.","type":"`$STRING`","index$":15},{"active":true,"name":"recurringBillingTerms","req":false,"short":"The terms of recurring billing for the price book item.","type":"`$STRING`","index$":16},{"active":true,"name":"sku","req":false,"short":"The stock keeping unit (SKU) of the price book item.","type":"`$STRING`","index$":17},{"active":true,"name":"status","req":false,"short":"The current status of the price book item.","type":"`$STRING`","index$":18},{"active":true,"name":"taxCategory","req":false,"short":"The tax category of the price book item.","type":"`$STRING`","index$":19},{"active":true,"format":"date-time","name":"updatedAt","req":false,"short":"The date and time when the price book item was last updated, in ISO 8601 format.","type":"`$STRING`","index$":20},{"active":true,"name":"url","req":false,"short":"A URL associated with the price book item.","type":"`$STRING`","index$":21}],"id":{"field":"id","name":"id"},"name":"price_books_collection_response_price_book_item_response_forward","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"price_book_id","orig":"price_book_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":null,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":null,"kind":"query","name":"property","orig":"property","reqd":false,"type":"`$ARRAY`","index$":2}]},"contract":{"id":"GET /commerce/price-books/2026-09/price-books/{priceBookId}/items","json":"{\"operationId\":\"get-/commerce/price-books/2026-09/price-books/{priceBookId}/items_/commerce/price-books/2026-09-beta/price-books/{priceBookId}/items\",\"parameters\":[{\"description\":\"The unique identifier of the price book to retrieve items for.\",\"explode\":false,\"in\":\"path\",\"name\":\"priceBookId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"A list of property names to include in the response.\",\"explode\":true,\"in\":\"query\",\"name\":\"properties\",\"required\":false,\"schema\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"description\":\"Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.\",\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A string token used as a cursor for pagination to retrieve the next set of results.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A string URL that provides a direct link to the next page of results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"description\":\"An array of price book items, each represented by a PriceBookItemResponse object.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"archived\":{\"description\":\"A boolean indicating whether the price book item is archived.\",\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"description\":\"The date and time when the price book item was archived, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"billingFrequency\":{\"description\":\"The frequency at which billing occurs for the price book item. Valid values include 'annually', 'biweekly', 'monthly', 'one_time', 'per_five_years', 'per_four_years', 'per_six_months', 'per_three_years', 'per_two_years', 'quarterly', and 'weekly'.\",\"enum\":[\"ANNUALLY\",\"BIWEEKLY\",\"MONTHLY\",\"PER_FIVE_YEARS\",\"PER_FOUR_YEARS\",\"PER_SIX_MONTHS\",\"PER_THREE_YEARS\",\"PER_TWO_YEARS\",\"QUARTERLY\",\"WEEKLY\"],\"example\":null,\"type\":\"string\"},\"billingPeriod\":{\"description\":\"The billing period for the price book item.\",\"example\":null,\"type\":\"string\"},\"costOfGoodsSold\":{\"description\":\"The cost of goods sold for the price book item.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The date and time when the price book item was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"customProperties\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of custom property names to their values for the price book item.\",\"example\":null,\"type\":\"object\"},\"description\":{\"description\":\"A description of the price book item.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the price book item.\",\"example\":null,\"type\":\"string\"},\"images\":{\"description\":\"A string representing images associated with the price book item.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the price book item.\",\"example\":null,\"type\":\"string\"},\"priceBookId\":{\"description\":\"The unique identifier for the price book containing this item.\",\"example\":null,\"type\":\"string\"},\"pricing\":{\"example\":null,\"properties\":{\"prices\":{\"description\":\"An array of price entries, each detailing the amount and currency for a specific pricing tier.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"currencyCode\":{\"description\":\"A string representing the currency in which the price is denominated.\",\"example\":null,\"type\":\"string\"},\"maxQuantity\":{\"description\":\"A string specifying the maximum quantity for which this pricing entry is applicable.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"price\":{\"description\":\"A number indicating the price of the product or service.\",\"example\":null,\"type\":\"number\"}},\"required\":[\"currencyCode\",\"price\"],\"type\":\"object\"},\"type\":\"array\"},\"pricingModel\":{\"description\":\"The type of pricing model applied, which can be one of the following: 'FLAT', 'GRADUATED', 'STAIRSTEP', or 'VOLUME'.\",\"enum\":[\"FLAT\",\"GRADUATED\",\"STAIRSTEP\",\"VOLUME\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"prices\",\"pricingModel\"],\"type\":\"object\"},\"productClassification\":{\"description\":\"The classification of the product. Valid values include 'BUNDLE', 'STANDALONE', and 'VARIANT'.\",\"enum\":[\"BUNDLE\",\"STANDALONE\",\"VARIANT\"],\"example\":null,\"type\":\"string\"},\"productId\":{\"description\":\"The unique identifier for the product associated with the price book item.\",\"example\":null,\"type\":\"string\"},\"productType\":{\"description\":\"The type of product. Valid values include 'INVENTORY', 'NON_INVENTORY', and 'SERVICE'.\",\"enum\":[\"INVENTORY\",\"NON_INVENTORY\",\"SERVICE\"],\"example\":null,\"type\":\"string\"},\"recurringBillingTerms\":{\"description\":\"The terms of recurring billing for the price book item. Valid values include 'AUTOMATICALLY_RENEW' and 'FIXED'.\",\"enum\":[\"AUTOMATICALLY_RENEW\",\"FIXED\"],\"example\":null,\"type\":\"string\"},\"sku\":{\"description\":\"The stock keeping unit (SKU) of the price book item.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"The current status of the price book item. Valid values include 'active' and 'inactive'.\",\"enum\":[\"active\",\"inactive\"],\"example\":null,\"type\":\"string\"},\"taxCategory\":{\"description\":\"The tax category of the price book item.\",\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the price book item was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"A URL associated with the price book item.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"customProperties\",\"id\",\"productId\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object providing context about the error condition. It contains additional properties, each being an array of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request, represented as a UUID string. Include this value with any error reports or support tickets.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"An array providing further information about the error, with each item being an ErrorDetail object.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, which may include additional information such as missing scopes or invalid property names.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required property.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object that maps link names to associated URIs containing documentation about the error or recommended remediation steps. Each property is a string.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. It is a string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"price-book-read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/commerce/price-books/2026-09/price-books/{priceBookId}/items","rename":{"param":{"priceBookId":"price_book_id"}},"segments":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"items"}],"select":{"exist":["after","limit","price_book_id","property"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["price_book"]]},"key$":"price_books_collection_response_price_book_item_response_forward","name__orig":"price_books_collection_response_price_book_item_response_forward","Name":"PriceBooksCollectionResponsePriceBookItemResponseForward","name_":"price_books_collection_response_price_book_item_response_forward","name-":"price-books-collection-response-price-book-item-response-forward","NAME":"PRICE_BOOKS_COLLECTION_RESPONSE_PRICE_BOOK_ITEM_RESPONSE_FORWARD","index$":20}, {"active":true,"entity":"price_books_collection_response_price_book_item_response_forward","key$":"BasicPriceBooksCollectionResponsePriceBookItemResponseForwardFlow","kind":"basic","name":"BasicPriceBooksCollectionResponsePriceBookItemResponseForwardFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"price_book_id":"price_book01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"price_books_collection_response_price_book_item_response_forward_ref01"}}],"index$":0}]}, 'PriceBooksCollectionResponsePriceBookItemResponseForward')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let price_books_collection_response_price_book_item_response_forward_ref01_data = Object.values(setup.data.existing.price_books_collection_response_price_book_item_response_forward)[0]

    // LIST
    const price_books_collection_response_price_book_item_response_forward_ref01_ent = client.PriceBooksCollectionResponsePriceBookItemResponseForward()
    const price_books_collection_response_price_book_item_response_forward_ref01_match = {}
    price_books_collection_response_price_book_item_response_forward_ref01_match['price_book_id'] = setup.idmap['price_book01']

    const price_books_collection_response_price_book_item_response_forward_ref01_list = (await price_books_collection_response_price_book_item_response_forward_ref01_ent.list(price_books_collection_response_price_book_item_response_forward_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/price_books_collection_response_price_book_item_response_forward/PriceBooksCollectionResponsePriceBookItemResponseForwardTestData.json')

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
    ['price_books_collection_response_price_book_item_response_forward01','price_books_collection_response_price_book_item_response_forward02','price_books_collection_response_price_book_item_response_forward03','price_book01','price_book02','price_book03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_COLLECTION_RESPONSE_PRICE_BOOK_ITEM_RESPONSE_FORWARD_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_COLLECTION_RESPONSE_PRICE_BOOK_ITEM_RESPONSE_FORWARD_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_COLLECTION_RESPONSE_PRICE_BOOK_ITEM_RESPONSE_FORWARD_ENTID']
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
  
