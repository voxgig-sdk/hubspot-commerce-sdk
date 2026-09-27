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
(0, node_test_1.describe)('PaymentsSettingsGetCheckoutFeesPublicEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.PaymentsSettingsGetCheckoutFeesPublic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'payments_settings_get_checkout_fees_public.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "appliesToPaymentType": { "a": true, "h": "Applies To Payment Type", "n": "appliesToPaymentType", "r": true, "sh": "The type of payment to which this fee applies, represented as a string.", "t": "`$STRING`", "key$": "appliesToPaymentType", "index$": 0 }, "checkoutFees": { "a": true, "h": "Checkout Fees", "n": "checkoutFees", "r": true, "sh": "An array of CheckoutFeePublic objects, each representing a specific fee applied during the checkout process.", "t": "`$ARRAY`", "key$": "checkoutFees", "index$": 1 }, "feeValue": { "a": true, "h": "Fee Value", "n": "feeValue", "r": true, "sh": "The numerical value of the fee, indicating the amount to be charged.", "t": "`$NUMBER`", "key$": "feeValue", "index$": 2 }, "feeValueType": { "a": true, "h": "Fee Value Type", "n": "feeValueType", "r": true, "sh": "The type of the fee value, represented as a string, which defines how the fee value is interpreted (e.g., as a percentage or a fixed amount).", "t": "`$STRING`", "key$": "feeValueType", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for this checkout fee configuration.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the checkout fee, used for identification and display purposes.", "t": "`$STRING`", "key$": "name", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "payments_settings_get_checkout_fees_public", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees", "q": {}, "r": {}, "s": [{ "lit": "commerce" }, { "lit": "payments-settings" }, { "lit": "2027-03-beta" }, { "lit": "payments-settings" }, { "lit": "checkout-fees" }], "t": { "req": "`reqdata`", "res": "`body.checkoutFees`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PATCH", "o": "/commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees", "q": {}, "r": {}, "s": [{ "lit": "commerce" }, { "lit": "payments-settings" }, { "lit": "2027-03-beta" }, { "lit": "payments-settings" }, { "lit": "checkout-fees" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "payments_settings_get_checkout_fees_public", "name__orig": "payments_settings_get_checkout_fees_public", "Name": "PaymentsSettingsGetCheckoutFeesPublic", "name_": "payments_settings_get_checkout_fees_public", "name-": "payments-settings-get-checkout-fees-public", "NAME": "PAYMENTS_SETTINGS_GET_CHECKOUT_FEES_PUBLIC", "index$": 15 }, { "active": true, "entity": "payments_settings_get_checkout_fees_public", "key$": "BasicPaymentsSettingsGetCheckoutFeesPublicFlow", "kind": "basic", "name": "BasicPaymentsSettingsGetCheckoutFeesPublicFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "payments_settings_get_checkout_fees_public_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "payments_settings_get_checkout_fees_public_ref01", "srcdatavar": "payments_settings_get_checkout_fees_public_ref01_data", "suffix": "_up0", "textfield": "appliesToPaymentType" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-payments_settings_get_checkout_fees_public_ref01" } }], "v": [], "index$": 1 }] }, 'PaymentsSettingsGetCheckoutFeesPublic', { "GET /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees": { "protocol": "http", "parameters": [] }, "PATCH /commerce/payments-settings/2027-03-beta/payments-settings/checkout-fees": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["checkoutFees"], "type": "object", "properties": { "checkoutFees": { "type": "array", "description": "An array of checkout fee objects to be updated. Each object must conform to the CheckoutFeePublicUpdateRequest schema.", "example": null, "items": { "required": ["appliesToPaymentType", "feeValue", "feeValueType", "name"], "type": "object", "properties": { "appliesToPaymentType": { "type": "string", "description": "The type of payment to which the checkout fee applies, represented as a string.", "example": null }, "feeValue": { "type": "number", "description": "The value of the checkout fee. This is a numeric value.", "example": null }, "feeValueType": { "type": "string", "description": "The type of the fee value, represented as a string.", "example": null }, "id": { "type": "string", "description": "The unique identifier for the checkout fee. This is a string value.", "example": null }, "name": { "type": "string", "description": "The name of the checkout fee. This is a string value.", "example": null } }, "example": null, "x-ref": "#/components/schemas/PaymentsSettingsCheckoutFeePublicUpdateRequest" }, "key$": "checkoutFees" } }, "example": null, "x-ref": "#/components/schemas/PaymentsSettingsUpdateCheckoutFeesPublicRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let payments_settings_get_checkout_fees_public_ref01_data = Object.values(setup.data.existing.payments_settings_get_checkout_fees_public)[0];
        // LIST
        const payments_settings_get_checkout_fees_public_ref01_ent = client.PaymentsSettingsGetCheckoutFeesPublic();
        const payments_settings_get_checkout_fees_public_ref01_match = {};
        const payments_settings_get_checkout_fees_public_ref01_list = (await payments_settings_get_checkout_fees_public_ref01_ent.list(payments_settings_get_checkout_fees_public_ref01_match)).map((e) => e.data());
        // UPDATE
        const payments_settings_get_checkout_fees_public_ref01_data_up0 = {};
        payments_settings_get_checkout_fees_public_ref01_data_up0.id = payments_settings_get_checkout_fees_public_ref01_data.id;
        const payments_settings_get_checkout_fees_public_ref01_markdef_up0 = { name: 'appliesToPaymentType', value: 'Mark01-payments_settings_get_checkout_fees_public_ref01_' + setup.now };
        payments_settings_get_checkout_fees_public_ref01_data_up0[payments_settings_get_checkout_fees_public_ref01_markdef_up0.name] = payments_settings_get_checkout_fees_public_ref01_markdef_up0.value;
        const payments_settings_get_checkout_fees_public_ref01_resdata_up0 = (await payments_settings_get_checkout_fees_public_ref01_ent.update(payments_settings_get_checkout_fees_public_ref01_data_up0)).data();
        (0, node_assert_1.default)(payments_settings_get_checkout_fees_public_ref01_resdata_up0.id === payments_settings_get_checkout_fees_public_ref01_data_up0.id);
        (0, node_assert_1.default)(payments_settings_get_checkout_fees_public_ref01_resdata_up0[payments_settings_get_checkout_fees_public_ref01_markdef_up0.name] === payments_settings_get_checkout_fees_public_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/payments_settings_get_checkout_fees_public/PaymentsSettingsGetCheckoutFeesPublicTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['payments_settings_get_checkout_fees_public01', 'payments_settings_get_checkout_fees_public02', 'payments_settings_get_checkout_fees_public03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_CHECKOUT_FEES_PUBLIC_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_CHECKOUT_FEES_PUBLIC_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_CHECKOUT_FEES_PUBLIC_ENTID'];
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
//# sourceMappingURL=PaymentsSettingsGetCheckoutFeesPublicEntity.test.js.map