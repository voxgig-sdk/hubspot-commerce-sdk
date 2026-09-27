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
(0, node_test_1.describe)('PriceBookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.PriceBook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'price_book.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived": { "a": true, "h": "Archived", "n": "archived", "r": false, "sh": "A boolean indicating whether this price book is archived.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 0 }, "archivedAt": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The date and time when this price book was archived.", "t": "`$STRING`", "key$": "archivedAt", "index$": 1 }, "autoAssignmentEnabled": { "a": true, "h": "Auto Assignment Enabled", "n": "autoAssignmentEnabled", "r": true, "sh": "Indicates whether auto-assignment is enabled for the price book.", "t": "`$BOOLEAN`", "key$": "autoAssignmentEnabled", "index$": 2 }, "countOfIncludedProducts": { "a": true, "fo": "int32", "h": "Count Of Included Products", "n": "countOfIncludedProducts", "r": true, "sh": "The number of products included in this price book.", "t": "`$INTEGER`", "key$": "countOfIncludedProducts", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "The date and time when this price book was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "customProperties": { "a": true, "h": "Custom Properties", "n": "customProperties", "r": true, "sh": "A map of custom property names to their values for this price book.", "t": "`$OBJECT`", "key$": "customProperties", "index$": 5 }, "description": { "a": true, "h": "Description", "n": "description", "op": { "update": { "req": true, "type": "`$OBJECT`" } }, "r": false, "sh": "A description of the price book.", "t": "`$STRING`", "key$": "description", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for this price book.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "create": { "req": true, "type": "`$STRING`" }, "update": { "req": true, "type": "`$OBJECT`" } }, "r": false, "sh": "The name of the price book.", "t": "`$STRING`", "key$": "name", "index$": 8 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the price book.", "t": "`$STRING`", "key$": "status", "index$": 9 }, "supportedCurrencies": { "a": true, "h": "Supported Currencies", "n": "supportedCurrencies", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "An array of currency codes that this price book supports.", "t": "`$ARRAY`", "key$": "supportedCurrencies", "index$": 10 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "The date and time when this price book was last updated.", "t": "`$STRING`", "key$": "updatedAt", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "price_book", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /commerce/price-books/2026-09/price-books", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/commerce/price-books/2026-09/price-books", "q": {}, "r": {}, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /commerce/price-books/2026-09/price-books", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": null, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": null, "k": "query", "n": "archived", "or": "archived", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": null, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/commerce/price-books/2026-09/price-books", "q": { "exist": ["after", "archived", "limit"] }, "r": {}, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /commerce/price-books/2026-09/price-books/{priceBookId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "price_book_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "ex": null, "k": "query", "n": "archived", "or": "archived", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/commerce/price-books/2026-09/price-books/{priceBookId}", "q": { "exist": ["archived", "id"] }, "r": { "param": { "priceBookId": "id" } }, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /commerce/price-books/2026-09/price-books/{priceBookId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "price_book_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/commerce/price-books/2026-09/price-books/{priceBookId}", "q": { "exist": ["id"] }, "r": { "param": { "priceBookId": "id" } }, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "price_book", "name__orig": "price_book", "Name": "PriceBook", "name_": "price_book", "name-": "price-book", "NAME": "PRICE_BOOK", "index$": 19 }, { "active": true, "entity": "price_book", "key$": "BasicPriceBookFlow", "kind": "basic", "name": "BasicPriceBookFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "price_book_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "price_book_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "price_book_ref01", "srcdatavar": "price_book_ref01_data", "suffix": "_up0", "textfield": "archivedAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-price_book_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "price_book_ref01", "srcdatavar": "price_book_ref01_data", "suffix": "_dt0" }, "m": { "id": "price_book01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-price_book_ref01" } }], "index$": 3 }] }, 'PriceBook', { "POST /commerce/price-books/2026-09/price-books": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["customProperties", "name", "supportedCurrencies"], "type": "object", "properties": { "customProperties": { "type": "object", "additionalProperties": { "type": "string", "example": null }, "description": "An object containing custom properties for the price book. Each property is a key-value pair where the key is a string and the value is also a string. This is a required property.", "example": null, "key$": "customProperties" }, "description": { "type": "string", "description": "A description of the price book. This is an optional string property.", "example": null, "key$": "description" }, "name": { "type": "string", "description": "The name of the price book. It is a required string property.", "example": null, "key$": "name" }, "supportedCurrencies": { "type": "array", "description": "An array of strings representing the currencies supported by the price book. This is a required property.", "example": null, "items": { "type": "string", "example": null }, "key$": "supportedCurrencies" } }, "example": null, "x-ref": "#/components/schemas/PriceBooksPriceBookCreateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "GET /commerce/price-books/2026-09/price-books": { "protocol": "http", "parameters": [{ "name": "after", "in": "query", "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "example": null }, "index$": 0 }, { "name": "archived", "in": "query", "description": "Whether to return only results that have been archived.", "required": false, "style": "form", "explode": true, "schema": { "type": "boolean", "example": null }, "index$": 1 }, { "name": "limit", "in": "query", "description": "The maximum number of results to display per page.", "required": false, "style": "form", "explode": true, "schema": { "type": "integer", "format": "int32", "example": null }, "index$": 2 }] }, "GET /commerce/price-books/2026-09/price-books/{priceBookId}": { "protocol": "http", "parameters": [{ "name": "priceBookId", "in": "path", "description": "The unique identifier of the price book to retrieve.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }, { "name": "archived", "in": "query", "description": "Whether to return only results that have been archived.", "required": false, "style": "form", "explode": true, "schema": { "type": "boolean", "example": null }, "index$": 1 }] }, "PATCH /commerce/price-books/2026-09/price-books/{priceBookId}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["customProperties", "description", "name"], "type": "object", "properties": { "customProperties": { "type": "object", "additionalProperties": { "type": "string", "example": null }, "description": "An object containing custom properties for the price book, where each key is a property name and the value is a string.", "example": null, "key$": "customProperties" }, "description": { "type": "object", "properties": {}, "description": "An object representing the description of the price book to be updated.", "example": null, "key$": "description" }, "name": { "type": "object", "properties": {}, "description": "An object representing the name of the price book to be updated.", "example": null, "key$": "name" }, "supportedCurrencies": { "type": "array", "description": "An array of strings representing the currencies supported by the price book.", "example": null, "items": { "type": "string", "example": null }, "key$": "supportedCurrencies" } }, "example": null, "x-ref": "#/components/schemas/PriceBooksPriceBookUpdateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "priceBookId", "in": "path", "description": "The unique identifier of the price book to update.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const price_book_ref01_ent = client.PriceBook();
        let price_book_ref01_data = setup.data.new.price_book['price_book_ref01'];
        price_book_ref01_data = (await price_book_ref01_ent.create(price_book_ref01_data)).data();
        (0, node_assert_1.default)(null != price_book_ref01_data.id);
        // LIST
        const price_book_ref01_match = {};
        const price_book_ref01_list = (await price_book_ref01_ent.list(price_book_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(price_book_ref01_list, { id: price_book_ref01_data.id })));
        // UPDATE
        const price_book_ref01_data_up0 = {};
        price_book_ref01_data_up0.id = price_book_ref01_data.id;
        const price_book_ref01_markdef_up0 = { name: 'archivedAt', value: 'Mark01-price_book_ref01_' + setup.now };
        price_book_ref01_data_up0[price_book_ref01_markdef_up0.name] = price_book_ref01_markdef_up0.value;
        const price_book_ref01_resdata_up0 = (await price_book_ref01_ent.update(price_book_ref01_data_up0)).data();
        (0, node_assert_1.default)(price_book_ref01_resdata_up0.id === price_book_ref01_data_up0.id);
        (0, node_assert_1.default)(price_book_ref01_resdata_up0[price_book_ref01_markdef_up0.name] === price_book_ref01_markdef_up0.value);
        // LOAD
        const price_book_ref01_match_dt0 = {};
        price_book_ref01_match_dt0.id = price_book_ref01_data.id;
        const price_book_ref01_data_dt0 = (await price_book_ref01_ent.load(price_book_ref01_match_dt0)).data();
        (0, node_assert_1.default)(price_book_ref01_data_dt0.id === price_book_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/price_book/PriceBookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['price_book01', 'price_book02', 'price_book03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_PRICE_BOOK_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOK_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOK_ENTID'];
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
//# sourceMappingURL=PriceBookEntity.test.js.map