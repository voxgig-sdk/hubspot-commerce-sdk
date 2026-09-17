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
(0, node_test_1.describe)('PaymentsCreateManualPaymentPublicEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.PaymentsCreateManualPaymentPublic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'payments_create_manual_payment_public.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "associations", "req": true, "short": "An array of associations related to the payment, where each item is an AssociationPublicRequest object.", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "billingAddress", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "currencyCode", "req": true, "short": "The currency code for the payment, represented as a string.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "customerEmail", "req": false, "short": "The email address of the customer making the payment, represented as a string.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier for the created manual payment, represented as a string.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "paymentAmount", "req": true, "short": "The amount of the payment, represented as a number.", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "paymentDate", "req": true, "short": "The date of the payment, represented as a string.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "paymentMethod", "req": true, "short": "The method used for the payment, represented as a string.", "type": "`$STRING`", "index$": 7 }], "id": { "field": "id", "name": "id" }, "name": "payments_create_manual_payment_public", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /commerce/payments/2027-03-beta/manual-payments", "json": "{\"operationId\":\"post-/commerce/payments/2027-03-beta/manual-payments_/commerce/payments/2027-03-beta/manual-payments\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"associations\":{\"description\":\"An array of associations related to the payment, where each item is an AssociationPublicRequest object.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"to\":{\"example\":null,\"properties\":{\"id\":{\"description\":\"The unique identifier for the target object. It is a required string property.\",\"example\":null,\"type\":\"string\"},\"objectType\":{\"description\":\"The type of the target object. This is a string property that specifies the kind of object being associated.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"},\"types\":{\"description\":\"An array of association types, each defined by the AssociationTypePublicRequest schema. This specifies the nature of the association between the objects.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"associationCategory\":{\"description\":\"A string representing the category of the association.\",\"example\":null,\"type\":\"string\"},\"associationTypeId\":{\"description\":\"A string representing the unique identifier for the association type.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"associationCategory\",\"associationTypeId\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"to\",\"types\"],\"type\":\"object\"},\"type\":\"array\"},\"billingAddress\":{\"example\":null,\"properties\":{\"city\":{\"description\":\"The city of the billing address.\",\"example\":null,\"type\":\"string\"},\"country\":{\"description\":\"The country of the billing address.\",\"example\":null,\"type\":\"string\"},\"line1\":{\"description\":\"The first line of the billing address, typically containing the street address or PO Box number.\",\"example\":null,\"type\":\"string\"},\"line2\":{\"description\":\"The second line of the billing address, often used for apartment, suite, or unit numbers.\",\"example\":null,\"type\":\"string\"},\"postalCode\":{\"description\":\"The postal or ZIP code of the billing address.\",\"example\":null,\"type\":\"string\"},\"state\":{\"description\":\"The state or region of the billing address.\",\"example\":null,\"type\":\"string\"}},\"type\":\"object\"},\"currencyCode\":{\"description\":\"The currency code for the payment, represented as a string.\",\"example\":null,\"type\":\"string\"},\"customerEmail\":{\"description\":\"The email address of the customer making the payment, represented as a string.\",\"example\":null,\"type\":\"string\"},\"paymentAmount\":{\"description\":\"The amount of the payment, represented as a number.\",\"example\":null,\"type\":\"number\"},\"paymentDate\":{\"description\":\"The date of the payment, represented as a string.\",\"example\":null,\"type\":\"string\"},\"paymentMethod\":{\"description\":\"The method used for the payment, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"associations\",\"currencyCode\",\"paymentAmount\",\"paymentDate\",\"paymentMethod\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"id\":{\"description\":\"The unique identifier for the created manual payment, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category. Type: string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition. Type: object with additional properties of type array of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. Type: string, Format: uuid.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error. Type: array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps. Type: object with additional properties of type string.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. Type: string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error. Type: string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"crm.objects.commercepayments.write\"]},{\"oauth2\":[\"crm.schemas.commercepayments.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/commerce/payments/2027-03-beta/manual-payments", "segments": [{ "lit": "commerce" }, { "lit": "payments" }, { "lit": "2027-03-beta" }, { "lit": "manual-payments" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "payments_create_manual_payment_public", "name__orig": "payments_create_manual_payment_public", "Name": "PaymentsCreateManualPaymentPublic", "name_": "payments_create_manual_payment_public", "name-": "payments-create-manual-payment-public", "NAME": "PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC", "index$": 12 }, { "active": true, "entity": "payments_create_manual_payment_public", "key$": "BasicPaymentsCreateManualPaymentPublicFlow", "kind": "basic", "name": "BasicPaymentsCreateManualPaymentPublicFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "payments_create_manual_payment_public_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'PaymentsCreateManualPaymentPublic');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const payments_create_manual_payment_public_ref01_ent = client.PaymentsCreateManualPaymentPublic();
        let payments_create_manual_payment_public_ref01_data = setup.data.new.payments_create_manual_payment_public['payments_create_manual_payment_public_ref01'];
        payments_create_manual_payment_public_ref01_data = (await payments_create_manual_payment_public_ref01_ent.create(payments_create_manual_payment_public_ref01_data)).data();
        (0, node_assert_1.default)(null != payments_create_manual_payment_public_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/payments_create_manual_payment_public/PaymentsCreateManualPaymentPublicTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['payments_create_manual_payment_public01', 'payments_create_manual_payment_public02', 'payments_create_manual_payment_public03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID'];
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
//# sourceMappingURL=PaymentsCreateManualPaymentPublicEntity.test.js.map