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
(0, node_test_1.describe)('PriceBooksCollectionResponsePriceBookItemResponseForwardEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.PriceBooksCollectionResponsePriceBookItemResponseForward();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'price_books_collection_response_price_book_item_response_forward.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived": { "a": true, "h": "Archived", "n": "archived", "r": false, "sh": "A boolean indicating whether the price book item is archived.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 0 }, "archivedAt": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The date and time when the price book item was archived, in ISO 8601 format.", "t": "`$STRING`", "key$": "archivedAt", "index$": 1 }, "billingFrequency": { "a": true, "h": "Billing Frequency", "n": "billingFrequency", "r": false, "sh": "The frequency at which billing occurs for the price book item.", "t": "`$STRING`", "key$": "billingFrequency", "index$": 2 }, "billingPeriod": { "a": true, "h": "Billing Period", "n": "billingPeriod", "r": false, "sh": "The billing period for the price book item.", "t": "`$STRING`", "key$": "billingPeriod", "index$": 3 }, "costOfGoodsSold": { "a": true, "h": "Cost Of Goods Sold", "n": "costOfGoodsSold", "r": false, "sh": "The cost of goods sold for the price book item.", "t": "`$STRING`", "key$": "costOfGoodsSold", "index$": 4 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "The date and time when the price book item was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 5 }, "customProperties": { "a": true, "h": "Custom Properties", "n": "customProperties", "r": true, "sh": "A map of custom property names to their values for the price book item.", "t": "`$OBJECT`", "key$": "customProperties", "index$": 6 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A description of the price book item.", "t": "`$STRING`", "key$": "description", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the price book item.", "t": "`$STRING`", "key$": "id", "index$": 8 }, "images": { "a": true, "h": "Images", "n": "images", "r": false, "sh": "A string representing images associated with the price book item.", "t": "`$STRING`", "key$": "images", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the price book item.", "t": "`$STRING`", "key$": "name", "index$": 10 }, "priceBookId": { "a": true, "h": "Price Book Id", "n": "priceBookId", "r": false, "sh": "The unique identifier for the price book containing this item.", "t": "`$STRING`", "key$": "priceBookId", "index$": 11 }, "pricing": { "a": true, "h": "Pricing", "n": "pricing", "r": true, "t": "`$OBJECT`", "key$": "pricing", "index$": 12 }, "productClassification": { "a": true, "h": "Product Classification", "n": "productClassification", "r": false, "sh": "The classification of the product.", "t": "`$STRING`", "key$": "productClassification", "index$": 13 }, "productId": { "a": true, "h": "Product Id", "n": "productId", "r": true, "sh": "The unique identifier for the product associated with the price book item.", "t": "`$STRING`", "key$": "productId", "index$": 14 }, "productType": { "a": true, "h": "Product Type", "n": "productType", "r": false, "sh": "The type of product.", "t": "`$STRING`", "key$": "productType", "index$": 15 }, "recurringBillingTerms": { "a": true, "h": "Recurring Billing Terms", "n": "recurringBillingTerms", "r": false, "sh": "The terms of recurring billing for the price book item.", "t": "`$STRING`", "key$": "recurringBillingTerms", "index$": 16 }, "sku": { "a": true, "h": "Sku", "n": "sku", "r": false, "sh": "The stock keeping unit (SKU) of the price book item.", "t": "`$STRING`", "key$": "sku", "index$": 17 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The current status of the price book item.", "t": "`$STRING`", "key$": "status", "index$": 18 }, "taxCategory": { "a": true, "h": "Tax Category", "n": "taxCategory", "r": false, "sh": "The tax category of the price book item.", "t": "`$STRING`", "key$": "taxCategory", "index$": 19 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "The date and time when the price book item was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 20 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "A URL associated with the price book item.", "t": "`$STRING`", "key$": "url", "index$": 21 } }, "id": { "field": "id", "name": "id" }, "name": "price_books_collection_response_price_book_item_response_forward", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /commerce/price-books/2026-09/price-books/{priceBookId}/items", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "price_book_id", "or": "price_book_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "ex": null, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": null, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": null, "k": "query", "n": "property", "or": "property", "r": false, "t": "`$ARRAY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/commerce/price-books/2026-09/price-books/{priceBookId}/items", "q": { "exist": ["after", "limit", "price_book_id", "property"] }, "r": { "param": { "priceBookId": "price_book_id" } }, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }, { "var": "price_book_id" }, { "lit": "items" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.price_book"]] }, "key$": "price_books_collection_response_price_book_item_response_forward", "name__orig": "price_books_collection_response_price_book_item_response_forward", "Name": "PriceBooksCollectionResponsePriceBookItemResponseForward", "name_": "price_books_collection_response_price_book_item_response_forward", "name-": "price-books-collection-response-price-book-item-response-forward", "NAME": "PRICE_BOOKS_COLLECTION_RESPONSE_PRICE_BOOK_ITEM_RESPONSE_FORWARD", "index$": 21 }, { "active": true, "entity": "price_books_collection_response_price_book_item_response_forward", "key$": "BasicPriceBooksCollectionResponsePriceBookItemResponseForwardFlow", "kind": "basic", "name": "BasicPriceBooksCollectionResponsePriceBookItemResponseForwardFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "price_book_id": "price_book01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "price_books_collection_response_price_book_item_response_forward_ref01" } }], "index$": 0 }] }, 'PriceBooksCollectionResponsePriceBookItemResponseForward', { "GET /commerce/price-books/2026-09/price-books/{priceBookId}/items": { "protocol": "http", "parameters": [{ "name": "priceBookId", "in": "path", "description": "The unique identifier of the price book to retrieve items for.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }, { "name": "after", "in": "query", "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "example": null }, "index$": 1 }, { "name": "limit", "in": "query", "description": "The maximum number of results to display per page.", "required": false, "style": "form", "explode": true, "schema": { "type": "integer", "format": "int32", "example": null }, "index$": 2 }, { "name": "properties", "in": "query", "description": "A list of property names to include in the response.", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "example": null, "items": { "type": "string", "example": null } }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let price_books_collection_response_price_book_item_response_forward_ref01_data = Object.values(setup.data.existing.price_books_collection_response_price_book_item_response_forward)[0];
        // LIST
        const price_books_collection_response_price_book_item_response_forward_ref01_ent = client.PriceBooksCollectionResponsePriceBookItemResponseForward();
        const price_books_collection_response_price_book_item_response_forward_ref01_match = {};
        price_books_collection_response_price_book_item_response_forward_ref01_match['price_book_id'] = setup.idmap['price_book01'];
        const price_books_collection_response_price_book_item_response_forward_ref01_list = (await price_books_collection_response_price_book_item_response_forward_ref01_ent.list(price_books_collection_response_price_book_item_response_forward_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/price_books_collection_response_price_book_item_response_forward/PriceBooksCollectionResponsePriceBookItemResponseForwardTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['price_books_collection_response_price_book_item_response_forward01', 'price_books_collection_response_price_book_item_response_forward02', 'price_books_collection_response_price_book_item_response_forward03', 'price_book01', 'price_book02', 'price_book03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_COLLECTION_RESPONSE_PRICE_BOOK_ITEM_RESPONSE_FORWARD_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_COLLECTION_RESPONSE_PRICE_BOOK_ITEM_RESPONSE_FORWARD_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_COLLECTION_RESPONSE_PRICE_BOOK_ITEM_RESPONSE_FORWARD_ENTID'];
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
//# sourceMappingURL=PriceBooksCollectionResponsePriceBookItemResponseForwardEntity.test.js.map