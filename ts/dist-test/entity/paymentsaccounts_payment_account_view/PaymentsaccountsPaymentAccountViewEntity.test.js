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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PaymentsaccountsPaymentAccountViewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.PaymentsaccountsPaymentAccountView();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paymentsaccounts_payment_account_view.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "canPayout", "req": true, "short": "A boolean indicating whether the account is capable of making payouts.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "canTransact", "req": true, "short": "A boolean indicating whether the account is capable of processing transactions.", "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "format": "date-time", "name": "createdAt", "req": false, "short": "The date and time when the payment account was created, in ISO 8601 format.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "eligibleProcessorTypes", "req": true, "short": "An array of processor types that the account is eligible to use.", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "enrollmentState", "req": true, "short": "The current enrollment state of the payment account.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "hasTransacted", "req": true, "short": "A boolean indicating whether the account has ever processed a transaction.", "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "id", "req": true, "short": "The portalId for the payment account.", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "date-time", "name": "lastTransactedAt", "req": false, "short": "The date and time of the last transaction made with this account, in ISO 8601 format.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "processorType", "req": true, "short": "The type of payment processor associated with the account.", "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": false, "short": "The date and time when the payment account was last updated, in ISO 8601 format.", "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "paymentsaccounts_payment_account_view", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /commerce/payment-accounts/2026-09/status", "json": "{\"operationId\":\"get-/commerce/payment-accounts/2026-09/status\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"canPayout\":{\"description\":\"A boolean indicating whether the account is capable of making payouts.\",\"example\":null,\"type\":\"boolean\"},\"canTransact\":{\"description\":\"A boolean indicating whether the account is capable of processing transactions.\",\"example\":null,\"type\":\"boolean\"},\"createdAt\":{\"description\":\"The date and time when the payment account was created, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"eligibleProcessorTypes\":{\"description\":\"An array of processor types that the account is eligible to use. Valid values include 'HS_PAYMENTS', and 'BYO_STRIPE'.\",\"example\":null,\"items\":{\"enum\":[\"NOT_ENROLLED\",\"HS_PAYMENTS\",\"BYO_STRIPE\"],\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"enrollmentState\":{\"description\":\"The current enrollment state of the payment account. Valid values include 'NOT_STARTED', 'IN_PROGRESS', 'IN_UNDERWRITING', 'ACTIVE', 'SUSPENDED', 'REJECTED', 'OPTED_OUT', and 'DISCONNECTED'.\",\"enum\":[\"ACTIVE\",\"DISCONNECTED\",\"IN_PROGRESS\",\"IN_UNDERWRITING\",\"NOT_STARTED\",\"OPTED_OUT\",\"REJECTED\",\"SUSPENDED\"],\"example\":null,\"type\":\"string\"},\"hasTransacted\":{\"description\":\"A boolean indicating whether the account has ever processed a transaction.\",\"example\":null,\"type\":\"boolean\"},\"id\":{\"description\":\"The portalId for the payment account.\",\"example\":null,\"type\":\"string\"},\"lastTransactedAt\":{\"description\":\"The date and time of the last transaction made with this account, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"processorType\":{\"description\":\"The type of payment processor associated with the account. Valid values include 'NOT_ENROLLED', 'HS_PAYMENTS', and 'BYO_STRIPE'.\",\"enum\":[\"BYO_STRIPE\",\"HS_PAYMENTS\",\"NOT_ENROLLED\"],\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the payment account was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"canPayout\",\"canTransact\",\"eligibleProcessorTypes\",\"enrollmentState\",\"hasTransacted\",\"id\",\"processorType\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"cpq.quotes.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/commerce/payment-accounts/2026-09/status", "segments": [{ "lit": "commerce" }, { "lit": "payment-accounts" }, { "lit": "2026-09" }, { "lit": "status" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.eligibleProcessorTypes`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "paymentsaccounts_payment_account_view", "name__orig": "paymentsaccounts_payment_account_view", "Name": "PaymentsaccountsPaymentAccountView", "name_": "paymentsaccounts_payment_account_view", "name-": "paymentsaccounts-payment-account-view", "NAME": "PAYMENTSACCOUNTS_PAYMENT_ACCOUNT_VIEW", "index$": 17 }, { "active": true, "entity": "paymentsaccounts_payment_account_view", "key$": "BasicPaymentsaccountsPaymentAccountViewFlow", "kind": "basic", "name": "BasicPaymentsaccountsPaymentAccountViewFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "paymentsaccounts_payment_account_view_ref01" } }], "index$": 0 }] }, 'PaymentsaccountsPaymentAccountView');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paymentsaccounts_payment_account_view_ref01_data = Object.values(setup.data.existing.paymentsaccounts_payment_account_view)[0];
        // LIST
        const paymentsaccounts_payment_account_view_ref01_ent = client.PaymentsaccountsPaymentAccountView();
        const paymentsaccounts_payment_account_view_ref01_match = {};
        const paymentsaccounts_payment_account_view_ref01_list = (await paymentsaccounts_payment_account_view_ref01_ent.list(paymentsaccounts_payment_account_view_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paymentsaccounts_payment_account_view/PaymentsaccountsPaymentAccountViewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paymentsaccounts_payment_account_view01', 'paymentsaccounts_payment_account_view02', 'paymentsaccounts_payment_account_view03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_PAYMENTSACCOUNTS_PAYMENT_ACCOUNT_VIEW_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTSACCOUNTS_PAYMENT_ACCOUNT_VIEW_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTSACCOUNTS_PAYMENT_ACCOUNT_VIEW_ENTID'];
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
//# sourceMappingURL=PaymentsaccountsPaymentAccountViewEntity.test.js.map