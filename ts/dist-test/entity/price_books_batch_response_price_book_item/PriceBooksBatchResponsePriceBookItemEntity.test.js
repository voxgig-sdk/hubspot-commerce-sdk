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
(0, node_test_1.describe)('PriceBooksBatchResponsePriceBookItemEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.PriceBooksBatchResponsePriceBookItem();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'price_books_batch_response_price_book_item.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completedAt": { "a": true, "fo": "date-time", "h": "Completed At", "n": "completedAt", "r": true, "sh": "The date and time when the batch operation was completed, in ISO 8601 format.", "t": "`$STRING`", "key$": "completedAt", "index$": 0 }, "inputs": { "a": true, "h": "Inputs", "n": "inputs", "r": true, "sh": "An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book.", "t": "`$ARRAY`", "key$": "inputs", "index$": 1 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "sh": "A map of link names to associated URIs providing additional information or actions related to the batch operation.", "t": "`$OBJECT`", "key$": "links", "index$": 2 }, "requestedAt": { "a": true, "fo": "date-time", "h": "Requested At", "n": "requestedAt", "r": false, "sh": "The date and time when the batch operation was requested, in ISO 8601 format.", "t": "`$STRING`", "key$": "requestedAt", "index$": 3 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "sh": "An array of PriceBookItemResponse objects representing the individual results of the batch operation.", "t": "`$ARRAY`", "key$": "results", "index$": 4 }, "startedAt": { "a": true, "fo": "date-time", "h": "Started At", "n": "startedAt", "r": true, "sh": "The date and time when the batch operation started, in ISO 8601 format.", "t": "`$STRING`", "key$": "startedAt", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the batch operation.", "t": "`$STRING`", "key$": "status", "index$": 6 } }, "name": "price_books_batch_response_price_book_item", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "price_book_id", "or": "price_book_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create", "q": { "exist": ["price_book_id"] }, "r": { "param": { "priceBookId": "price_book_id" } }, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }, { "var": "price_book_id" }, { "lit": "items" }, { "lit": "batch" }, { "lit": "create" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "price_book_id", "or": "price_book_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update", "q": { "exist": ["price_book_id"] }, "r": { "param": { "priceBookId": "price_book_id" } }, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }, { "var": "price_book_id" }, { "lit": "items" }, { "lit": "batch" }, { "lit": "update" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.price_book"]] }, "key$": "price_books_batch_response_price_book_item", "name__orig": "price_books_batch_response_price_book_item", "Name": "PriceBooksBatchResponsePriceBookItem", "name_": "price_books_batch_response_price_book_item", "name-": "price-books-batch-response-price-book-item", "NAME": "PRICE_BOOKS_BATCH_RESPONSE_PRICE_BOOK_ITEM", "index$": 20 }, { "active": true, "entity": "price_books_batch_response_price_book_item", "key$": "BasicPriceBooksBatchResponsePriceBookItemFlow", "kind": "basic", "name": "BasicPriceBooksBatchResponsePriceBookItemFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "price_books_batch_response_price_book_item_ref01" }, "m": { "price_book_id": "price_book01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'PriceBooksBatchResponsePriceBookItem', { "POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/create": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["inputs"], "type": "object", "properties": { "inputs": { "type": "array", "description": "An array of PriceBookAddProductRequest objects, each representing a product to be added to the price book. This property is required.", "example": null, "items": { "required": ["productId"], "type": "object", "properties": { "productId": { "type": "string", "description": "The unique identifier of the product to be added to the price book. It is a string and is required.", "example": null, "key$": "productId" } }, "example": null, "x-ref": "#/components/schemas/PriceBooksPriceBookAddProductRequest" }, "key$": "inputs" } }, "example": null, "x-ref": "#/components/schemas/PriceBooksBatchInputPriceBookAddProductRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "priceBookId", "in": "path", "description": "The unique identifier of the price book to which the items will be added.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] }, "POST /commerce/price-books/2026-09/price-books/{priceBookId}/items/batch/update": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["inputs"], "type": "object", "properties": { "inputs": { "type": "array", "description": "An array of objects, each representing a price book item to be updated. Each object must conform to the PriceBookItemBatchUpdateInput schema.", "example": null, "items": { "required": ["id", "properties"], "type": "object", "properties": { "id": { "type": "string", "description": "The unique identifier for the price book item to be updated. It is a string.", "example": null }, "properties": { "required": [], "type": "object", "properties": {}, "example": null, "x-ref": "#/components/schemas/PriceBooksPriceBookItemUpdateRequest" } }, "example": null, "x-ref": "#/components/schemas/PriceBooksPriceBookItemBatchUpdateInput" }, "key$": "inputs" } }, "example": null, "x-ref": "#/components/schemas/PriceBooksBatchInputPriceBookItemBatchUpdateInput", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "priceBookId", "in": "path", "description": "The unique identifier of the price book containing the items to update.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const price_books_batch_response_price_book_item_ref01_ent = client.PriceBooksBatchResponsePriceBookItem();
        let price_books_batch_response_price_book_item_ref01_data = setup.data.new.price_books_batch_response_price_book_item['price_books_batch_response_price_book_item_ref01'];
        price_books_batch_response_price_book_item_ref01_data['price_book_id'] = setup.idmap['price_book01'];
        price_books_batch_response_price_book_item_ref01_data = (await price_books_batch_response_price_book_item_ref01_ent.create(price_books_batch_response_price_book_item_ref01_data)).data();
        (0, node_assert_1.default)(null != price_books_batch_response_price_book_item_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/price_books_batch_response_price_book_item/PriceBooksBatchResponsePriceBookItemTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['price_books_batch_response_price_book_item01', 'price_books_batch_response_price_book_item02', 'price_books_batch_response_price_book_item03', 'price_book01', 'price_book02', 'price_book03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_BATCH_RESPONSE_PRICE_BOOK_ITEM_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_BATCH_RESPONSE_PRICE_BOOK_ITEM_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_BATCH_RESPONSE_PRICE_BOOK_ITEM_ENTID'];
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
//# sourceMappingURL=PriceBooksBatchResponsePriceBookItemEntity.test.js.map