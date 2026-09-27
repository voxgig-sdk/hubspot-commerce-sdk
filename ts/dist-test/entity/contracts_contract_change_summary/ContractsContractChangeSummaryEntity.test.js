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
(0, node_test_1.describe)('ContractsContractChangeSummaryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.ContractsContractChangeSummary();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contracts_contract_change_summary.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "contractId": { "a": true, "h": "Contract Id", "n": "contractId", "r": true, "sh": "The unique identifier of the contract associated with this change.", "t": "`$STRING`", "key$": "contractId", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "The date and time when this contract change was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "effectiveDate": { "a": true, "fo": "date", "h": "Effective Date", "n": "effectiveDate", "r": false, "sh": "The date on which this contract change becomes effective, in the format 'YYYY-MM-DD'.", "t": "`$STRING`", "key$": "effectiveDate", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for this contract change.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "lineItemChanges": { "a": true, "h": "Line Item Changes", "n": "lineItemChanges", "r": true, "sh": "An array of changes made to line items as part of this contract change.", "t": "`$ARRAY`", "union": { "branches": 3, "count": 1, "depth": 3 }, "key$": "lineItemChanges", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name assigned to this contract change.", "t": "`$STRING`", "key$": "name", "index$": 5 }, "prorating": { "a": true, "h": "Prorating", "n": "prorating", "r": true, "sh": "A boolean indicating whether the contract change involves prorating.", "t": "`$BOOLEAN`", "key$": "prorating", "index$": 6 }, "quoteId": { "a": true, "h": "Quote Id", "n": "quoteId", "r": false, "sh": "The unique identifier of the quote associated with this contract change, if applicable.", "t": "`$STRING`", "key$": "quoteId", "index$": 7 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the contract change.", "t": "`$STRING`", "key$": "status", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The type of contract change, which can be either 'DIRECT' or 'QUOTE'.", "t": "`$STRING`", "key$": "type", "index$": 9 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "The date and time when this contract change was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "contracts_contract_change_summary", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /commerce/contracts/2027-03-beta/contracts/{contractId}/changes", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "contract_id", "or": "contract_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/commerce/contracts/2027-03-beta/contracts/{contractId}/changes", "q": { "exist": ["contract_id"] }, "r": { "param": { "contractId": "contract_id" } }, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "contracts" }, { "var": "contract_id" }, { "lit": "changes" }], "t": { "req": "`reqdata`", "res": "`body.changes`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.contract"]] }, "key$": "contracts_contract_change_summary", "name__orig": "contracts_contract_change_summary", "Name": "ContractsContractChangeSummary", "name_": "contracts_contract_change_summary", "name-": "contracts-contract-change-summary", "NAME": "CONTRACTS_CONTRACT_CHANGE_SUMMARY", "index$": 7 }, { "active": true, "entity": "contracts_contract_change_summary", "key$": "BasicContractsContractChangeSummaryFlow", "kind": "basic", "name": "BasicContractsContractChangeSummaryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "contract_id": "contract01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "contracts_contract_change_summary_ref01" } }], "index$": 0 }] }, 'ContractsContractChangeSummary', { "GET /commerce/contracts/2027-03-beta/contracts/{contractId}/changes": { "protocol": "http", "parameters": [{ "name": "contractId", "in": "path", "description": "The unique identifier of the contract for which changes are being retrieved.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let contracts_contract_change_summary_ref01_data = Object.values(setup.data.existing.contracts_contract_change_summary)[0];
        // LIST
        const contracts_contract_change_summary_ref01_ent = client.ContractsContractChangeSummary();
        const contracts_contract_change_summary_ref01_match = {};
        contracts_contract_change_summary_ref01_match['contract_id'] = setup.idmap['contract01'];
        const contracts_contract_change_summary_ref01_list = (await contracts_contract_change_summary_ref01_ent.list(contracts_contract_change_summary_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contracts_contract_change_summary/ContractsContractChangeSummaryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contracts_contract_change_summary01', 'contracts_contract_change_summary02', 'contracts_contract_change_summary03', 'contract01', 'contract02', 'contract03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_SUMMARY_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_SUMMARY_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_SUMMARY_ENTID'];
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
//# sourceMappingURL=ContractsContractChangeSummaryEntity.test.js.map