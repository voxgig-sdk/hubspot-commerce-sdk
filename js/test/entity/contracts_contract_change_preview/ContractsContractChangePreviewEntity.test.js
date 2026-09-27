
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


describe('ContractsContractChangePreviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.ContractsContractChangePreview()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"deltaLineItems":{"a":true,"h":"Delta Line Items","n":"deltaLineItems","r":true,"sh":"An array of LineItem objects representing the changes in line items compared to the current state of the contract.","t":"`$ARRAY`","key$":"deltaLineItems","index$":0},"proposedLineItems":{"a":true,"h":"Proposed Line Items","n":"proposedLineItems","r":true,"sh":"An array of LineItem objects representing the proposed state of line items after the changes are applied.","t":"`$ARRAY`","key$":"proposedLineItems","index$":1}},"name":"contracts_contract_change_preview","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /commerce/contracts/2027-03-beta/changes/preview","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/commerce/contracts/2027-03-beta/changes/preview","q":{},"r":{},"s":[{"lit":"commerce"},{"lit":"contracts"},{"lit":"2027-03-beta"},{"lit":"changes"},{"lit":"preview"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"contracts_contract_change_preview","name__orig":"contracts_contract_change_preview","Name":"ContractsContractChangePreview","name_":"contracts_contract_change_preview","name-":"contracts-contract-change-preview","NAME":"CONTRACTS_CONTRACT_CHANGE_PREVIEW","index$":6}, {"active":true,"entity":"contracts_contract_change_preview","key$":"BasicContractsContractChangePreviewFlow","kind":"basic","name":"BasicContractsContractChangePreviewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"contracts_contract_change_preview_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ContractsContractChangePreview', {"POST /commerce/contracts/2027-03-beta/changes/preview":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{},"example":null,"oneOf":[{"required":["autoAccept","lineItemChanges","prorating","type"],"type":"object","properties":{"autoAccept":{"type":"boolean","description":"A boolean indicating whether the contract change should be automatically accepted.","example":null},"contractId":{"type":"string","description":"A string that uniquely identifies the contract to which the change applies.","example":null},"effectiveDate":{"type":"string","description":"A string representing the date when the contract change becomes effective, in the format 'date'.","format":"date","example":null},"lineItemChanges":{"type":"array","description":"An array of line item changes to be applied to the contract. Each item in the array is a LineItemChangeRequest object.","example":null,"items":{"required":[],"type":"object","properties":{},"example":null,"x-ref":"#/components/schemas/ContractsLineItemChangeRequest"}},"name":{"type":"string","description":"A string representing the name of the contract change.","example":null},"prorating":{"type":"boolean","description":"A boolean indicating whether the contract change should be prorated.","example":null},"type":{"type":"string","description":"A string that specifies the type of contract change. The default and only valid value is 'DIRECT'.","example":null,"default":"DIRECT","enum":["DIRECT"]}},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/ContractsDirectContractChangeCreateRequest"},{"required":["prorating","quoteTemplateId","type"],"type":"object","properties":{"contractId":{"type":"string","description":"The unique identifier of the contract to which the change applies.","example":null},"dealId":{"type":"string","description":"The unique identifier of the associated deal.","example":null},"dealPipeline":{"type":"string","description":"A string representing the pipeline of the associated deal.","example":null},"dealStage":{"type":"string","description":"A string representing the stage of the associated deal.","example":null},"effectiveDate":{"type":"string","description":"The date when the contract change becomes effective, in the format 'date'.","format":"date","example":null},"name":{"type":"string","description":"A string representing the name of the contract change.","example":null},"prorating":{"type":"boolean","description":"A boolean indicating whether the contract change should be prorated.","example":null},"quoteTemplateId":{"type":"string","description":"The unique identifier of the quote template used for the contract change.","example":null},"type":{"type":"string","description":"The type of contract change, which is set to 'QUOTE'.","example":null,"default":"QUOTE","enum":["QUOTE"]}},"example":null,"x-hubspot-sub-type-impl":true,"x-ref":"#/components/schemas/ContractsQuoteContractChangeCreateRequest"}],"x-ref":"#/components/schemas/ContractsContractChangeCreateRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contracts_contract_change_preview_ref01_ent = client.ContractsContractChangePreview()
    let contracts_contract_change_preview_ref01_data = setup.data.new.contracts_contract_change_preview['contracts_contract_change_preview_ref01']

    contracts_contract_change_preview_ref01_data = (await contracts_contract_change_preview_ref01_ent.create(contracts_contract_change_preview_ref01_data)).data()
    assert(null != contracts_contract_change_preview_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/contracts_contract_change_preview/ContractsContractChangePreviewTestData.json')

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
    ['contracts_contract_change_preview01','contracts_contract_change_preview02','contracts_contract_change_preview03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID']
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
  
