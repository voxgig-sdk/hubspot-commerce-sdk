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
(0, node_test_1.describe)('ContractsContractChangeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.ContractsContractChange();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contracts_contract_change.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "contractId": { "a": true, "h": "Contract Id", "n": "contractId", "r": true, "sh": "The unique identifier of the contract associated with this change.", "t": "`$STRING`", "key$": "contractId", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "The date and time when the contract change was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "deltaLineItems": { "a": true, "h": "Delta Line Items", "n": "deltaLineItems", "r": true, "sh": "An array of line items that represent the difference resulting from the contract change.", "t": "`$ARRAY`", "key$": "deltaLineItems", "index$": 2 }, "effectiveDate": { "a": true, "fo": "date", "h": "Effective Date", "n": "effectiveDate", "r": false, "sh": "The date when the contract change becomes effective, in YYYY-MM-DD format.", "t": "`$STRING`", "key$": "effectiveDate", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the contract change.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "lineItemChanges": { "a": true, "h": "Line Item Changes", "n": "lineItemChanges", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "An array of changes to line items associated with the contract change.", "t": "`$ARRAY`", "union": { "branches": 3, "count": 1, "depth": 3 }, "key$": "lineItemChanges", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": true, "type": "`$OBJECT`" } }, "r": false, "sh": "The name of the contract change.", "t": "`$STRING`", "key$": "name", "index$": 6 }, "proposedLineItems": { "a": true, "h": "Proposed Line Items", "n": "proposedLineItems", "r": true, "sh": "An array of line items that are proposed as part of the contract change.", "t": "`$ARRAY`", "key$": "proposedLineItems", "index$": 7 }, "prorating": { "a": true, "h": "Prorating", "n": "prorating", "op": { "update": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "sh": "A boolean indicating whether the contract change involves prorating.", "t": "`$BOOLEAN`", "key$": "prorating", "index$": 8 }, "quoteId": { "a": true, "h": "Quote Id", "n": "quoteId", "r": false, "sh": "The unique identifier of the quote associated with this contract change.", "t": "`$STRING`", "key$": "quoteId", "index$": 9 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the contract change.", "t": "`$STRING`", "key$": "status", "index$": 10 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The type of contract change.", "t": "`$STRING`", "key$": "type", "index$": 11 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "The date and time when the contract change was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "contracts_contract_change", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /commerce/contracts/2027-03-beta/changes/{changeId}/accept", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "change_id", "or": "change_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/contracts/2027-03-beta/changes/{changeId}/accept", "q": { "exist": ["change_id"] }, "r": { "param": { "changeId": "change_id" } }, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "changes" }, { "var": "change_id" }, { "lit": "accept" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /commerce/contracts/2027-03-beta/changes/{changeId}/cancel", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "change_id", "or": "change_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/contracts/2027-03-beta/changes/{changeId}/cancel", "q": { "exist": ["change_id"] }, "r": { "param": { "changeId": "change_id" } }, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "changes" }, { "var": "change_id" }, { "lit": "cancel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /commerce/contracts/2027-03-beta/contracts/{contractId}/changes", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "contract_id", "or": "contract_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/contracts/2027-03-beta/contracts/{contractId}/changes", "q": { "exist": ["contract_id"] }, "r": { "param": { "contractId": "contract_id" } }, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "contracts" }, { "var": "contract_id" }, { "lit": "changes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /commerce/contracts/2027-03-beta/changes", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/commerce/contracts/2027-03-beta/changes", "q": {}, "r": {}, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "changes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /commerce/contracts/2027-03-beta/changes/{changeId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "change_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/commerce/contracts/2027-03-beta/changes/{changeId}", "q": { "exist": ["id"] }, "r": { "param": { "changeId": "id" } }, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "changes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /commerce/contracts/2027-03-beta/changes/{changeId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "change_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/commerce/contracts/2027-03-beta/changes/{changeId}", "q": { "exist": ["id"] }, "r": { "param": { "changeId": "id" } }, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "changes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.contract"]] }, "key$": "contracts_contract_change", "name__orig": "contracts_contract_change", "Name": "ContractsContractChange", "name_": "contracts_contract_change", "name-": "contracts-contract-change", "NAME": "CONTRACTS_CONTRACT_CHANGE", "index$": 5 }, { "active": true, "entity": "contracts_contract_change", "key$": "BasicContractsContractChangeFlow", "kind": "basic", "name": "BasicContractsContractChangeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "contracts_contract_change_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "contracts_contract_change_ref01", "srcdatavar": "contracts_contract_change_ref01_data", "suffix": "_up0", "textfield": "contractId" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-contracts_contract_change_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "contracts_contract_change_ref01", "srcdatavar": "contracts_contract_change_ref01_data", "suffix": "_dt0" }, "m": { "id": "contracts_contract_change01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-contracts_contract_change_ref01" } }], "index$": 2 }] }, 'ContractsContractChange', { "POST /commerce/contracts/2027-03-beta/changes/{changeId}/accept": { "protocol": "http", "parameters": [{ "name": "changeId", "in": "path", "description": "The unique identifier of the contract change to accept.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }] }, "POST /commerce/contracts/2027-03-beta/changes/{changeId}/cancel": { "protocol": "http", "parameters": [{ "name": "changeId", "in": "path", "description": "The unique identifier of the contract change to cancel.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }] }, "POST /commerce/contracts/2027-03-beta/contracts/{contractId}/changes": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": {}, "example": null, "oneOf": [{ "required": ["autoAccept", "lineItemChanges", "prorating", "type"], "type": "object", "properties": { "autoAccept": { "type": "boolean", "description": "A boolean indicating whether the contract change should be automatically accepted.", "example": null }, "contractId": { "type": "string", "description": "A string that uniquely identifies the contract to which the change applies.", "example": null }, "effectiveDate": { "type": "string", "description": "A string representing the date when the contract change becomes effective, in the format 'date'.", "format": "date", "example": null }, "lineItemChanges": { "type": "array", "description": "An array of line item changes to be applied to the contract. Each item in the array is a LineItemChangeRequest object.", "example": null, "items": { "required": [], "type": "object", "properties": {}, "example": null, "x-ref": "#/components/schemas/ContractsLineItemChangeRequest" } }, "name": { "type": "string", "description": "A string representing the name of the contract change.", "example": null }, "prorating": { "type": "boolean", "description": "A boolean indicating whether the contract change should be prorated.", "example": null }, "type": { "type": "string", "description": "A string that specifies the type of contract change. The default and only valid value is 'DIRECT'.", "example": null, "default": "DIRECT", "enum": ["DIRECT"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/ContractsDirectContractChangeCreateRequest" }, { "required": ["prorating", "quoteTemplateId", "type"], "type": "object", "properties": { "contractId": { "type": "string", "description": "The unique identifier of the contract to which the change applies.", "example": null }, "dealId": { "type": "string", "description": "The unique identifier of the associated deal.", "example": null }, "dealPipeline": { "type": "string", "description": "A string representing the pipeline of the associated deal.", "example": null }, "dealStage": { "type": "string", "description": "A string representing the stage of the associated deal.", "example": null }, "effectiveDate": { "type": "string", "description": "The date when the contract change becomes effective, in the format 'date'.", "format": "date", "example": null }, "name": { "type": "string", "description": "A string representing the name of the contract change.", "example": null }, "prorating": { "type": "boolean", "description": "A boolean indicating whether the contract change should be prorated.", "example": null }, "quoteTemplateId": { "type": "string", "description": "The unique identifier of the quote template used for the contract change.", "example": null }, "type": { "type": "string", "description": "The type of contract change, which is set to 'QUOTE'.", "example": null, "default": "QUOTE", "enum": ["QUOTE"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/ContractsQuoteContractChangeCreateRequest" }], "x-ref": "#/components/schemas/ContractsContractChangeCreateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "contractId", "in": "path", "description": "The unique identifier of the contract for which the change is being created.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }] }, "POST /commerce/contracts/2027-03-beta/changes": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "properties": {}, "example": null, "oneOf": [{ "required": ["autoAccept", "lineItemChanges", "prorating", "type"], "type": "object", "properties": { "autoAccept": { "type": "boolean", "description": "A boolean indicating whether the contract change should be automatically accepted.", "example": null }, "contractId": { "type": "string", "description": "A string that uniquely identifies the contract to which the change applies.", "example": null }, "effectiveDate": { "type": "string", "description": "A string representing the date when the contract change becomes effective, in the format 'date'.", "format": "date", "example": null }, "lineItemChanges": { "type": "array", "description": "An array of line item changes to be applied to the contract. Each item in the array is a LineItemChangeRequest object.", "example": null, "items": { "required": [], "type": "object", "properties": {}, "example": null, "x-ref": "#/components/schemas/ContractsLineItemChangeRequest" } }, "name": { "type": "string", "description": "A string representing the name of the contract change.", "example": null }, "prorating": { "type": "boolean", "description": "A boolean indicating whether the contract change should be prorated.", "example": null }, "type": { "type": "string", "description": "A string that specifies the type of contract change. The default and only valid value is 'DIRECT'.", "example": null, "default": "DIRECT", "enum": ["DIRECT"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/ContractsDirectContractChangeCreateRequest" }, { "required": ["prorating", "quoteTemplateId", "type"], "type": "object", "properties": { "contractId": { "type": "string", "description": "The unique identifier of the contract to which the change applies.", "example": null }, "dealId": { "type": "string", "description": "The unique identifier of the associated deal.", "example": null }, "dealPipeline": { "type": "string", "description": "A string representing the pipeline of the associated deal.", "example": null }, "dealStage": { "type": "string", "description": "A string representing the stage of the associated deal.", "example": null }, "effectiveDate": { "type": "string", "description": "The date when the contract change becomes effective, in the format 'date'.", "format": "date", "example": null }, "name": { "type": "string", "description": "A string representing the name of the contract change.", "example": null }, "prorating": { "type": "boolean", "description": "A boolean indicating whether the contract change should be prorated.", "example": null }, "quoteTemplateId": { "type": "string", "description": "The unique identifier of the quote template used for the contract change.", "example": null }, "type": { "type": "string", "description": "The type of contract change, which is set to 'QUOTE'.", "example": null, "default": "QUOTE", "enum": ["QUOTE"] } }, "example": null, "x-hubspot-sub-type-impl": true, "x-ref": "#/components/schemas/ContractsQuoteContractChangeCreateRequest" }], "x-ref": "#/components/schemas/ContractsContractChangeCreateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "GET /commerce/contracts/2027-03-beta/changes/{changeId}": { "protocol": "http", "parameters": [{ "name": "changeId", "in": "path", "description": "The unique identifier of the contract change to retrieve.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }] }, "PATCH /commerce/contracts/2027-03-beta/changes/{changeId}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["name"], "type": "object", "properties": { "effectiveDate": { "type": "string", "description": "The date when the contract change becomes effective, formatted as a date string.", "format": "date", "example": null, "key$": "effectiveDate" }, "lineItemChanges": { "type": "array", "description": "An array of line item changes to be applied to the contract, each represented by a LineItemChangeRequest object.", "example": null, "items": { "required": ["action"], "type": "object", "properties": { "action": { "type": "string", "description": "The action to be performed on the line item. Valid values include 'ADD', 'UPDATE', and 'REMOVE'.", "example": null, "enum": [] }, "lineItemAdd": { "description": "Details of the line item to be added. This can be a custom line item, a line item from a product, or a cloned line item.", "example": null, "oneOf": [] }, "lineItemUpdate": { "required": [], "type": "object", "properties": {}, "example": null, "x-ref": "#/components/schemas/ContractsLineItemChangeUpdate" }, "rampKey": { "type": "string", "description": "A unique identifier for the ramp, formatted as a UUID.", "format": "uuid", "example": null } }, "example": null, "x-ref": "#/components/schemas/ContractsLineItemChangeRequest" }, "key$": "lineItemChanges" }, "name": { "type": "object", "properties": {}, "description": "An object representing the name of the contract change.", "example": null, "key$": "name" }, "prorating": { "type": "boolean", "description": "A boolean indicating whether the contract change should be prorated.", "example": null, "key$": "prorating" } }, "example": null, "x-ref": "#/components/schemas/ContractsContractChangeUpdateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "changeId", "in": "path", "description": "The unique identifier of the contract change to update.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const contracts_contract_change_ref01_ent = client.ContractsContractChange();
        let contracts_contract_change_ref01_data = setup.data.new.contracts_contract_change['contracts_contract_change_ref01'];
        contracts_contract_change_ref01_data = (await contracts_contract_change_ref01_ent.create(contracts_contract_change_ref01_data)).data();
        (0, node_assert_1.default)(null != contracts_contract_change_ref01_data.id);
        // UPDATE
        const contracts_contract_change_ref01_data_up0 = {};
        contracts_contract_change_ref01_data_up0.id = contracts_contract_change_ref01_data.id;
        const contracts_contract_change_ref01_markdef_up0 = { name: 'contractId', value: 'Mark01-contracts_contract_change_ref01_' + setup.now };
        contracts_contract_change_ref01_data_up0[contracts_contract_change_ref01_markdef_up0.name] = contracts_contract_change_ref01_markdef_up0.value;
        const contracts_contract_change_ref01_resdata_up0 = (await contracts_contract_change_ref01_ent.update(contracts_contract_change_ref01_data_up0)).data();
        (0, node_assert_1.default)(contracts_contract_change_ref01_resdata_up0.id === contracts_contract_change_ref01_data_up0.id);
        (0, node_assert_1.default)(contracts_contract_change_ref01_resdata_up0[contracts_contract_change_ref01_markdef_up0.name] === contracts_contract_change_ref01_markdef_up0.value);
        // LOAD
        const contracts_contract_change_ref01_match_dt0 = {};
        contracts_contract_change_ref01_match_dt0.id = contracts_contract_change_ref01_data.id;
        const contracts_contract_change_ref01_data_dt0 = (await contracts_contract_change_ref01_ent.load(contracts_contract_change_ref01_match_dt0)).data();
        (0, node_assert_1.default)(contracts_contract_change_ref01_data_dt0.id === contracts_contract_change_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contracts_contract_change/ContractsContractChangeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contracts_contract_change01', 'contracts_contract_change02', 'contracts_contract_change03', 'contract01', 'contract02', 'contract03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_ENTID'];
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
//# sourceMappingURL=ContractsContractChangeEntity.test.js.map