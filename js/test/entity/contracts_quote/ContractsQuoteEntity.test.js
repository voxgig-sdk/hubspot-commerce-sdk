
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


describe('ContractsQuoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.ContractsQuote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dealId":{"a":true,"h":"Deal Id","n":"dealId","r":false,"sh":"The unique identifier of the deal associated with the renewal quote.","t":"`$STRING`","key$":"dealId","index$":0},"dealPipeline":{"a":true,"h":"Deal Pipeline","n":"dealPipeline","r":false,"sh":"The identifier of the pipeline in which the deal is located.","t":"`$STRING`","key$":"dealPipeline","index$":1},"dealStage":{"a":true,"h":"Deal Stage","n":"dealStage","r":false,"sh":"The identifier of the stage within the pipeline that the deal is currently in.","t":"`$STRING`","key$":"dealStage","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the renewal quote.","t":"`$STRING`","key$":"name","index$":3},"quoteTemplateId":{"a":true,"h":"Quote Template Id","n":"quoteTemplateId","r":true,"sh":"The unique identifier of the quote template to be used for creating the renewal quote.","t":"`$STRING`","key$":"quoteTemplateId","index$":4}},"name":"contracts_quote","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"contract_id","or":"contract_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes","q":{"exist":["contract_id"]},"r":{"param":{"contractId":"contract_id"}},"s":[{"lit":"commerce"},{"lit":"contracts"},{"lit":"2027-03-beta"},{"lit":"contracts"},{"var":"contract_id"},{"lit":"renewal-quotes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.contract"]]},"key$":"contracts_quote","name__orig":"contracts_quote","Name":"ContractsQuote","name_":"contracts_quote","name-":"contracts-quote","NAME":"CONTRACTS_QUOTE","index$":8}, {"active":true,"entity":"contracts_quote","key$":"BasicContractsQuoteFlow","kind":"basic","name":"BasicContractsQuoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"contracts_quote_ref01"},"m":{"contract_id":"contract01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ContractsQuote', {"POST /commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["quoteTemplateId"],"type":"object","properties":{"dealId":{"type":"string","description":"The unique identifier of the deal associated with the renewal quote. It is a string.","example":null,"key$":"dealId"},"dealPipeline":{"type":"string","description":"The identifier of the pipeline in which the deal is located. It is a string.","example":null,"key$":"dealPipeline"},"dealStage":{"type":"string","description":"The identifier of the stage within the pipeline that the deal is currently in. It is a string.","example":null,"key$":"dealStage"},"name":{"type":"string","description":"The name of the renewal quote. It is a string.","example":null,"key$":"name"},"quoteTemplateId":{"type":"string","description":"The unique identifier of the quote template to be used for creating the renewal quote. It is a required string.","example":null,"key$":"quoteTemplateId"}},"example":null,"x-ref":"#/components/schemas/ContractsCreateRenewalQuoteRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"contractId","in":"path","description":"The unique identifier of the contract for which the renewal quote is being created.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contracts_quote_ref01_ent = client.ContractsQuote()
    let contracts_quote_ref01_data = setup.data.new.contracts_quote['contracts_quote_ref01']
    contracts_quote_ref01_data['contract_id'] = setup.idmap['contract01']

    contracts_quote_ref01_data = (await contracts_quote_ref01_ent.create(contracts_quote_ref01_data)).data()
    assert(null != contracts_quote_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/contracts_quote/ContractsQuoteTestData.json')

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
    ['contracts_quote01','contracts_quote02','contracts_quote03','contract01','contract02','contract03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID']
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
  
