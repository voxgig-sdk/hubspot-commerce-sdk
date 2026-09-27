"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ContractsQuoteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.ContractsQuote();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contracts_quote.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "dealId": { "a": true, "h": "Deal Id", "n": "dealId", "r": false, "sh": "The unique identifier of the deal associated with the renewal quote.", "t": "`$STRING`", "key$": "dealId", "index$": 0 }, "dealPipeline": { "a": true, "h": "Deal Pipeline", "n": "dealPipeline", "r": false, "sh": "The identifier of the pipeline in which the deal is located.", "t": "`$STRING`", "key$": "dealPipeline", "index$": 1 }, "dealStage": { "a": true, "h": "Deal Stage", "n": "dealStage", "r": false, "sh": "The identifier of the stage within the pipeline that the deal is currently in.", "t": "`$STRING`", "key$": "dealStage", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the renewal quote.", "t": "`$STRING`", "key$": "name", "index$": 3 }, "quoteTemplateId": { "a": true, "h": "Quote Template Id", "n": "quoteTemplateId", "r": true, "sh": "The unique identifier of the quote template to be used for creating the renewal quote.", "t": "`$STRING`", "key$": "quoteTemplateId", "index$": 4 } }, "name": "contracts_quote", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "contract_id", "or": "contract_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes", "q": { "exist": ["contract_id"] }, "r": { "param": { "contractId": "contract_id" } }, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "contracts" }, { "var": "contract_id" }, { "lit": "renewal-quotes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.contract"]] }, "key$": "contracts_quote", "name__orig": "contracts_quote", "Name": "ContractsQuote", "name_": "contracts_quote", "name-": "contracts-quote", "NAME": "CONTRACTS_QUOTE", "index$": 8 }, { "active": true, "entity": "contracts_quote", "key$": "BasicContractsQuoteFlow", "kind": "basic", "name": "BasicContractsQuoteFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "contracts_quote_ref01" }, "m": { "contract_id": "contract01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ContractsQuote', { "POST /commerce/contracts/2027-03-beta/contracts/{contractId}/renewal-quotes": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["quoteTemplateId"], "type": "object", "properties": { "dealId": { "type": "string", "description": "The unique identifier of the deal associated with the renewal quote. It is a string.", "example": null, "key$": "dealId" }, "dealPipeline": { "type": "string", "description": "The identifier of the pipeline in which the deal is located. It is a string.", "example": null, "key$": "dealPipeline" }, "dealStage": { "type": "string", "description": "The identifier of the stage within the pipeline that the deal is currently in. It is a string.", "example": null, "key$": "dealStage" }, "name": { "type": "string", "description": "The name of the renewal quote. It is a string.", "example": null, "key$": "name" }, "quoteTemplateId": { "type": "string", "description": "The unique identifier of the quote template to be used for creating the renewal quote. It is a required string.", "example": null, "key$": "quoteTemplateId" } }, "example": null, "x-ref": "#/components/schemas/ContractsCreateRenewalQuoteRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "contractId", "in": "path", "description": "The unique identifier of the contract for which the renewal quote is being created.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const contracts_quote_ref01_ent = client.ContractsQuote();
        let contracts_quote_ref01_data = setup.data.new.contracts_quote['contracts_quote_ref01'];
        contracts_quote_ref01_data['contract_id'] = setup.idmap['contract01'];
        contracts_quote_ref01_data = (await contracts_quote_ref01_ent.create(contracts_quote_ref01_data)).data();
        (0, node_assert_1.default)(null != contracts_quote_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contracts_quote/ContractsQuoteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contracts_quote01', 'contracts_quote02', 'contracts_quote03', 'contract01', 'contract02', 'contract03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.HubspotCommerceSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ContractsQuoteEntity.test.js.map