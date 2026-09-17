

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PriceBooksPriceBookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PriceBooksPriceBook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'price_books_price_book.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archived","req":false,"short":"A boolean indicating whether this price book is archived.","type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"archivedAt","req":false,"short":"The date and time when this price book was archived.","type":"`$STRING`","index$":1},{"active":true,"name":"autoAssignmentEnabled","req":true,"short":"Indicates whether auto-assignment is enabled for the price book.","type":"`$BOOLEAN`","index$":2},{"active":true,"format":"int32","name":"countOfIncludedProducts","req":true,"short":"The number of products included in this price book.","type":"`$INTEGER`","index$":3},{"active":true,"format":"date-time","name":"createdAt","req":false,"short":"The date and time when this price book was created.","type":"`$STRING`","index$":4},{"active":true,"name":"customProperties","req":true,"short":"A map of custom property names to their values for this price book.","type":"`$OBJECT`","index$":5},{"active":true,"name":"description","req":false,"short":"A description of the price book.","type":"`$STRING`","index$":6},{"active":true,"name":"id","req":true,"short":"The unique identifier for this price book.","type":"`$STRING`","index$":7},{"active":true,"name":"name","req":false,"short":"The name of the price book.","type":"`$STRING`","index$":8},{"active":true,"name":"status","req":true,"short":"The current status of the price book.","type":"`$STRING`","index$":9},{"active":true,"name":"supportedCurrencies","req":true,"short":"An array of currency codes that this price book supports.","type":"`$ARRAY`","index$":10},{"active":true,"format":"date-time","name":"updatedAt","req":false,"short":"The date and time when this price book was last updated.","type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"price_books_price_book","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"price_book_id","orig":"price_book_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"POST /commerce/price-books/2026-09/price-books/{priceBookId}/activate","json":"{\"operationId\":\"post-/commerce/price-books/2026-09/price-books/{priceBookId}/activate\",\"parameters\":[{\"description\":\"The unique identifier of the price book to activate.\",\"explode\":false,\"in\":\"path\",\"name\":\"priceBookId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"archived\":{\"description\":\"A boolean indicating whether this price book is archived.\",\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"description\":\"The date and time when this price book was archived.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"autoAssignmentEnabled\":{\"description\":\"Indicates whether auto-assignment is enabled for the price book. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"countOfIncludedProducts\":{\"description\":\"The number of products included in this price book.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"createdAt\":{\"description\":\"The date and time when this price book was created.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"customProperties\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of custom property names to their values for this price book.\",\"example\":null,\"type\":\"object\"},\"description\":{\"description\":\"A description of the price book.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for this price book.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the price book.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"The current status of the price book. Valid values include 'ACTIVE' and 'INACTIVE'.\",\"enum\":[\"ACTIVE\",\"INACTIVE\"],\"example\":null,\"type\":\"string\"},\"supportedCurrencies\":{\"description\":\"An array of currency codes that this price book supports.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"updatedAt\":{\"description\":\"The date and time when this price book was last updated.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"autoAssignmentEnabled\",\"countOfIncludedProducts\",\"customProperties\",\"id\",\"status\",\"supportedCurrencies\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object providing context about the error condition. It contains additional properties, each being an array of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request, represented as a UUID string. Include this value with any error reports or support tickets.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"An array providing further information about the error, with each item being an ErrorDetail object.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, which may include additional information such as missing scopes or invalid property names.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required property.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object that maps link names to associated URIs containing documentation about the error or recommended remediation steps. Each property is a string.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. It is a string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"price-book-write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/commerce/price-books/2026-09/price-books/{priceBookId}/activate","rename":{"param":{"priceBookId":"price_book_id"}},"segments":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"activate"}],"select":{"exist":["price_book_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"price_book_id","orig":"price_book_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"POST /commerce/price-books/2026-09/price-books/{priceBookId}/deactivate","json":"{\"operationId\":\"post-/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate\",\"parameters\":[{\"description\":\"The unique identifier of the price book to deactivate.\",\"explode\":false,\"in\":\"path\",\"name\":\"priceBookId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"archived\":{\"description\":\"A boolean indicating whether this price book is archived.\",\"example\":null,\"type\":\"boolean\"},\"archivedAt\":{\"description\":\"The date and time when this price book was archived.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"autoAssignmentEnabled\":{\"description\":\"Indicates whether auto-assignment is enabled for the price book. A boolean value.\",\"example\":null,\"type\":\"boolean\"},\"countOfIncludedProducts\":{\"description\":\"The number of products included in this price book.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"createdAt\":{\"description\":\"The date and time when this price book was created.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"customProperties\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of custom property names to their values for this price book.\",\"example\":null,\"type\":\"object\"},\"description\":{\"description\":\"A description of the price book.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for this price book.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the price book.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"The current status of the price book. Valid values include 'ACTIVE' and 'INACTIVE'.\",\"enum\":[\"ACTIVE\",\"INACTIVE\"],\"example\":null,\"type\":\"string\"},\"supportedCurrencies\":{\"description\":\"An array of currency codes that this price book supports.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"updatedAt\":{\"description\":\"The date and time when this price book was last updated.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"autoAssignmentEnabled\",\"countOfIncludedProducts\",\"customProperties\",\"id\",\"status\",\"supportedCurrencies\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object providing context about the error condition. It contains additional properties, each being an array of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request, represented as a UUID string. Include this value with any error reports or support tickets.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"An array providing further information about the error, with each item being an ErrorDetail object.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, which may include additional information such as missing scopes or invalid property names.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required property.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"An object that maps link names to associated URIs containing documentation about the error or recommended remediation steps. Each property is a string.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. It is a string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"price-book-write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate","rename":{"param":{"priceBookId":"price_book_id"}},"segments":[{"lit":"commerce"},{"lit":"price-books"},{"lit":"2026-09"},{"lit":"price-books"},{"var":"price_book_id"},{"lit":"deactivate"}],"select":{"exist":["price_book_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["price_book"]]},"key$":"price_books_price_book","name__orig":"price_books_price_book","Name":"PriceBooksPriceBook","name_":"price_books_price_book","name-":"price-books-price-book","NAME":"PRICE_BOOKS_PRICE_BOOK","index$":21}, {"active":true,"entity":"price_books_price_book","key$":"BasicPriceBooksPriceBookFlow","kind":"basic","name":"BasicPriceBooksPriceBookFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"price_books_price_book_ref01"},"match":{"price_book_id":"price_book01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'PriceBooksPriceBook')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const price_books_price_book_ref01_ent = client.PriceBooksPriceBook()
    let price_books_price_book_ref01_data = setup.data.new.price_books_price_book['price_books_price_book_ref01']
    price_books_price_book_ref01_data['price_book_id'] = setup.idmap['price_book01']

    price_books_price_book_ref01_data = (await price_books_price_book_ref01_ent.create(price_books_price_book_ref01_data)).data()
    assert(null != price_books_price_book_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/price_books_price_book/PriceBooksPriceBookTestData.json')

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
    ['price_books_price_book01','price_books_price_book02','price_books_price_book03','price_book01','price_book02','price_book03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ENTID']
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
  
