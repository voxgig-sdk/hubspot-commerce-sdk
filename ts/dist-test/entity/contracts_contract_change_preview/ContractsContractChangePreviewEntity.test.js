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
(0, node_test_1.describe)('ContractsContractChangePreviewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.ContractsContractChangePreview();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contracts_contract_change_preview.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "deltaLineItems": { "a": true, "h": "Delta Line Items", "n": "deltaLineItems", "r": true, "sh": "An array of LineItem objects representing the changes in line items compared to the current state of the contract.", "t": "`$ARRAY`", "key$": "deltaLineItems", "index$": 0 }, "proposedLineItems": { "a": true, "h": "Proposed Line Items", "n": "proposedLineItems", "r": true, "sh": "An array of LineItem objects representing the proposed state of line items after the changes are applied.", "t": "`$ARRAY`", "key$": "proposedLineItems", "index$": 1 } }, "name": "contracts_contract_change_preview", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /commerce/contracts/2027-03-beta/changes/preview", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/commerce/contracts/2027-03-beta/changes/preview", "q": {}, "r": {}, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "changes" }, { "lit": "preview" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "contracts_contract_change_preview", "name__orig": "contracts_contract_change_preview", "Name": "ContractsContractChangePreview", "name_": "contracts_contract_change_preview", "name-": "contracts-contract-change-preview", "NAME": "CONTRACTS_CONTRACT_CHANGE_PREVIEW", "index$": 6 }, { "active": true, "entity": "contracts_contract_change_preview", "key$": "BasicContractsContractChangePreviewFlow", "kind": "basic", "name": "BasicContractsContractChangePreviewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "contracts_contract_change_preview_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ContractsContractChangePreview', { "POST /commerce/contracts/2027-03-beta/changes/preview": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": {}, "example": null, "oneOf": [{ "required": ["autoAccept", "lineItemChanges", "prorating", "type"], "type": "object", "properties": { "autoAccept": { "type": "boolean", "description": "A boolean indicating whether the contract change should be automatically accepted.", "example": null }, "contractId": { "type": "string", "description": "A string that uniquely identifies the contract to which the change applies.", "example": null }, "effectiveDate": { "type": "string", "description": "A string representing the date when the contract change becomes effective, in the format 'date'.", "format": "date", "example": null }, "lineItemChanges": { "type": "array", "description": "An array of line item changes to be applied to the contract. Each item in the array is a LineItemChangeRequest object.", "example": null, "items": { "required": [], "type": "object", "properties": {}, "example": null, "x-ref": "#/components/schemas/ContractsLineItemChangeRequest" } }, "name": { "type": "string", "description": "A string representing the name of the contract change.", "example": null }, "prorating": { "type": "boolean", "description": "A boolean indicating whether the contract change should be prorated.", "example": null }, "type": { "type": "string", "description": "A string that specifies the type of contract change. The default and only valid value is 'DIRECT'.", "example": null, "default": "DIRECT", "enum": ["DIRECT"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/ContractsDirectContractChangeCreateRequest" }, { "required": ["prorating", "quoteTemplateId", "type"], "type": "object", "properties": { "contractId": { "type": "string", "description": "The unique identifier of the contract to which the change applies.", "example": null }, "dealId": { "type": "string", "description": "The unique identifier of the associated deal.", "example": null }, "dealPipeline": { "type": "string", "description": "A string representing the pipeline of the associated deal.", "example": null }, "dealStage": { "type": "string", "description": "A string representing the stage of the associated deal.", "example": null }, "effectiveDate": { "type": "string", "description": "The date when the contract change becomes effective, in the format 'date'.", "format": "date", "example": null }, "name": { "type": "string", "description": "A string representing the name of the contract change.", "example": null }, "prorating": { "type": "boolean", "description": "A boolean indicating whether the contract change should be prorated.", "example": null }, "quoteTemplateId": { "type": "string", "description": "The unique identifier of the quote template used for the contract change.", "example": null }, "type": { "type": "string", "description": "The type of contract change, which is set to 'QUOTE'.", "example": null, "default": "QUOTE", "enum": ["QUOTE"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/ContractsQuoteContractChangeCreateRequest" }], "x-ref": "#/components/schemas/ContractsContractChangeCreateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const contracts_contract_change_preview_ref01_ent = client.ContractsContractChangePreview();
        let contracts_contract_change_preview_ref01_data = setup.data.new.contracts_contract_change_preview['contracts_contract_change_preview_ref01'];
        contracts_contract_change_preview_ref01_data = (await contracts_contract_change_preview_ref01_ent.create(contracts_contract_change_preview_ref01_data)).data();
        (0, node_assert_1.default)(null != contracts_contract_change_preview_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contracts_contract_change_preview/ContractsContractChangePreviewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contracts_contract_change_preview01', 'contracts_contract_change_preview02', 'contracts_contract_change_preview03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID'];
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
//# sourceMappingURL=ContractsContractChangePreviewEntity.test.js.map