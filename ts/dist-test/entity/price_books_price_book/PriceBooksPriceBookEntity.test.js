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
(0, node_test_1.describe)('PriceBooksPriceBookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.PriceBooksPriceBook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'price_books_price_book.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived": { "a": true, "h": "Archived", "n": "archived", "r": false, "sh": "A boolean indicating whether this price book is archived.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 0 }, "archivedAt": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The date and time when this price book was archived.", "t": "`$STRING`", "key$": "archivedAt", "index$": 1 }, "autoAssignmentEnabled": { "a": true, "h": "Auto Assignment Enabled", "n": "autoAssignmentEnabled", "r": true, "sh": "Indicates whether auto-assignment is enabled for the price book.", "t": "`$BOOLEAN`", "key$": "autoAssignmentEnabled", "index$": 2 }, "countOfIncludedProducts": { "a": true, "fo": "int32", "h": "Count Of Included Products", "n": "countOfIncludedProducts", "r": true, "sh": "The number of products included in this price book.", "t": "`$INTEGER`", "key$": "countOfIncludedProducts", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "The date and time when this price book was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "customProperties": { "a": true, "h": "Custom Properties", "n": "customProperties", "r": true, "sh": "A map of custom property names to their values for this price book.", "t": "`$OBJECT`", "key$": "customProperties", "index$": 5 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A description of the price book.", "t": "`$STRING`", "key$": "description", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for this price book.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the price book.", "t": "`$STRING`", "key$": "name", "index$": 8 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the price book.", "t": "`$STRING`", "key$": "status", "index$": 9 }, "supportedCurrencies": { "a": true, "h": "Supported Currencies", "n": "supportedCurrencies", "r": true, "sh": "An array of currency codes that this price book supports.", "t": "`$ARRAY`", "key$": "supportedCurrencies", "index$": 10 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "The date and time when this price book was last updated.", "t": "`$STRING`", "key$": "updatedAt", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "price_books_price_book", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /commerce/price-books/2026-09/price-books/{priceBookId}/activate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "price_book_id", "or": "price_book_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/price-books/2026-09/price-books/{priceBookId}/activate", "q": { "exist": ["price_book_id"] }, "r": { "param": { "priceBookId": "price_book_id" } }, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }, { "var": "price_book_id" }, { "lit": "activate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /commerce/price-books/2026-09/price-books/{priceBookId}/deactivate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "price_book_id", "or": "price_book_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/price-books/2026-09/price-books/{priceBookId}/deactivate", "q": { "exist": ["price_book_id"] }, "r": { "param": { "priceBookId": "price_book_id" } }, "s": [{ "lit": "commerce" }, { "lit": "price-books" }, { "lit": "2026-09" }, { "lit": "price-books" }, { "var": "price_book_id" }, { "lit": "deactivate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.price_book"]] }, "key$": "price_books_price_book", "name__orig": "price_books_price_book", "Name": "PriceBooksPriceBook", "name_": "price_books_price_book", "name-": "price-books-price-book", "NAME": "PRICE_BOOKS_PRICE_BOOK", "index$": 22 }, { "active": true, "entity": "price_books_price_book", "key$": "BasicPriceBooksPriceBookFlow", "kind": "basic", "name": "BasicPriceBooksPriceBookFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "price_books_price_book_ref01" }, "m": { "price_book_id": "price_book01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'PriceBooksPriceBook', { "POST /commerce/price-books/2026-09/price-books/{priceBookId}/activate": { "protocol": "http", "parameters": [{ "name": "priceBookId", "in": "path", "description": "The unique identifier of the price book to activate.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] }, "POST /commerce/price-books/2026-09/price-books/{priceBookId}/deactivate": { "protocol": "http", "parameters": [{ "name": "priceBookId", "in": "path", "description": "The unique identifier of the price book to deactivate.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const price_books_price_book_ref01_ent = client.PriceBooksPriceBook();
        let price_books_price_book_ref01_data = setup.data.new.price_books_price_book['price_books_price_book_ref01'];
        price_books_price_book_ref01_data['price_book_id'] = setup.idmap['price_book01'];
        price_books_price_book_ref01_data = (await price_books_price_book_ref01_ent.create(price_books_price_book_ref01_data)).data();
        (0, node_assert_1.default)(null != price_books_price_book_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/price_books_price_book/PriceBooksPriceBookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['price_books_price_book01', 'price_books_price_book02', 'price_books_price_book03', 'price_book01', 'price_book02', 'price_book03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ENTID'];
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
//# sourceMappingURL=PriceBooksPriceBookEntity.test.js.map