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
(0, node_test_1.describe)('ContractsContractEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_COMMERCE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotCommerceSDK.test();
        const ent = testsdk.ContractsContract();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_COMMERCE_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contracts_contract.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "addressTypesToCollect": { "a": true, "h": "Address Types To Collect", "n": "addressTypesToCollect", "r": true, "sh": "An array indicating the types of addresses to collect.", "t": "`$ARRAY`", "key$": "addressTypesToCollect", "index$": 0 }, "allTransactionsFeeName": { "a": true, "h": "All Transactions Fee Name", "n": "allTransactionsFeeName", "r": false, "sh": "The name of the fee applied to all transactions.", "t": "`$STRING`", "key$": "allTransactionsFeeName", "index$": 1 }, "allTransactionsFeePercentage": { "a": true, "h": "All Transactions Fee Percentage", "n": "allTransactionsFeePercentage", "r": false, "sh": "The percentage of the fee applied to all transactions.", "t": "`$NUMBER`", "key$": "allTransactionsFeePercentage", "index$": 2 }, "allowedPaymentMethods": { "a": true, "h": "Allowed Payment Methods", "n": "allowedPaymentMethods", "r": true, "sh": "An array of allowed payment methods.", "t": "`$ARRAY`", "key$": "allowedPaymentMethods", "index$": 3 }, "annualContractValue": { "a": true, "h": "Annual Contract Value", "n": "annualContractValue", "r": false, "sh": "The annual value of the contract.", "t": "`$NUMBER`", "key$": "annualContractValue", "index$": 4 }, "automatedTaxesEnabled": { "a": true, "h": "Automated Taxes Enabled", "n": "automatedTaxesEnabled", "r": true, "sh": "Indicates whether automated taxes are enabled for the contract.", "t": "`$BOOLEAN`", "key$": "automatedTaxesEnabled", "index$": 5 }, "billingAddress": { "a": true, "h": "Billing Address", "n": "billingAddress", "r": false, "t": "`$OBJECT`", "key$": "billingAddress", "index$": 6 }, "billingCompanyId": { "a": true, "h": "Billing Company Id", "n": "billingCompanyId", "r": false, "sh": "The unique identifier of the billing company associated with the contract.", "t": "`$STRING`", "key$": "billingCompanyId", "index$": 7 }, "billingContactId": { "a": true, "h": "Billing Contact Id", "n": "billingContactId", "r": false, "sh": "The unique identifier of the billing contact associated with the contract.", "t": "`$STRING`", "key$": "billingContactId", "index$": 8 }, "billingStartDateOverride": { "a": true, "fo": "date", "h": "Billing Start Date Override", "n": "billingStartDateOverride", "r": false, "sh": "The date to override the billing start date, in ISO 8601 format.", "t": "`$STRING`", "key$": "billingStartDateOverride", "index$": 9 }, "businessUnitId": { "a": true, "h": "Business Unit Id", "n": "businessUnitId", "r": false, "sh": "The unique identifier of the business unit associated with the contract.", "t": "`$STRING`", "key$": "businessUnitId", "index$": 10 }, "cardFeeName": { "a": true, "h": "Card Fee Name", "n": "cardFeeName", "r": false, "sh": "The name of the fee applied to card transactions.", "t": "`$STRING`", "key$": "cardFeeName", "index$": 11 }, "cardFeePercentage": { "a": true, "h": "Card Fee Percentage", "n": "cardFeePercentage", "r": false, "sh": "The percentage of the fee applied to card transactions.", "t": "`$NUMBER`", "key$": "cardFeePercentage", "index$": 12 }, "collectionProcess": { "a": true, "h": "Collection Process", "n": "collectionProcess", "r": false, "sh": "The process for collecting payments.", "t": "`$STRING`", "key$": "collectionProcess", "index$": 13 }, "contractEffectiveDate": { "a": true, "fo": "date", "h": "Contract Effective Date", "n": "contractEffectiveDate", "r": false, "sh": "The date when the contract becomes effective, in ISO 8601 format.", "t": "`$STRING`", "key$": "contractEffectiveDate", "index$": 14 }, "contractSourceId": { "a": true, "h": "Contract Source Id", "n": "contractSourceId", "r": false, "sh": "The unique identifier of the source of the contract.", "t": "`$STRING`", "key$": "contractSourceId", "index$": 15 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "The date and time when the contract was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 16 }, "currencyCode": { "a": true, "h": "Currency Code", "n": "currencyCode", "r": false, "sh": "The currency code associated with the contract, represented as a string.", "t": "`$STRING`", "key$": "currencyCode", "index$": 17 }, "currentAnnualRecurringRevenue": { "a": true, "h": "Current Annual Recurring Revenue", "n": "currentAnnualRecurringRevenue", "r": false, "sh": "The current annual recurring revenue for the contract.", "t": "`$NUMBER`", "key$": "currentAnnualRecurringRevenue", "index$": 18 }, "currentMonthlyRecurringRevenue": { "a": true, "h": "Current Monthly Recurring Revenue", "n": "currentMonthlyRecurringRevenue", "r": false, "sh": "The current monthly recurring revenue for the contract.", "t": "`$NUMBER`", "key$": "currentMonthlyRecurringRevenue", "index$": 19 }, "customProperties": { "a": true, "h": "Custom Properties", "n": "customProperties", "r": true, "sh": "A map of custom property names to their values.", "t": "`$OBJECT`", "key$": "customProperties", "index$": 20 }, "dealId": { "a": true, "h": "Deal Id", "n": "dealId", "r": false, "sh": "The unique identifier of the deal associated with the contract.", "t": "`$STRING`", "key$": "dealId", "index$": 21 }, "directDebitFeeName": { "a": true, "h": "Direct Debit Fee Name", "n": "directDebitFeeName", "r": false, "sh": "The name of the fee applied to direct debit transactions.", "t": "`$STRING`", "key$": "directDebitFeeName", "index$": 22 }, "directDebitFeePercentage": { "a": true, "h": "Direct Debit Fee Percentage", "n": "directDebitFeePercentage", "r": false, "sh": "The percentage of the fee applied to direct debit transactions.", "t": "`$NUMBER`", "key$": "directDebitFeePercentage", "index$": 23 }, "discountCode": { "a": true, "h": "Discount Code", "n": "discountCode", "r": false, "sh": "The discount code applied to the contract.", "t": "`$STRING`", "key$": "discountCode", "index$": 24 }, "endDate": { "a": true, "fo": "date", "h": "End Date", "n": "endDate", "r": false, "sh": "The end date of the contract, in ISO 8601 format.", "t": "`$STRING`", "key$": "endDate", "index$": 25 }, "externalPaymentMethodReferenceId": { "a": true, "h": "External Payment Method Reference Id", "n": "externalPaymentMethodReferenceId", "r": false, "sh": "The external reference ID for the payment method.", "t": "`$STRING`", "key$": "externalPaymentMethodReferenceId", "index$": 26 }, "hubspotBillingEnabled": { "a": true, "h": "Hubspot Billing Enabled", "n": "hubspotBillingEnabled", "r": true, "sh": "Indicates whether HubSpot billing is enabled for the contract.", "t": "`$BOOLEAN`", "key$": "hubspotBillingEnabled", "index$": 27 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the contract.", "t": "`$STRING`", "key$": "id", "index$": 28 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "sh": "The language associated with the contract.", "t": "`$STRING`", "key$": "language", "index$": 29 }, "lineItems": { "a": true, "h": "Line Items", "n": "lineItems", "r": true, "sh": "An array of line items included in the contract.", "t": "`$ARRAY`", "key$": "lineItems", "index$": 30 }, "locale": { "a": true, "h": "Locale", "n": "locale", "r": false, "sh": "The locale associated with the contract.", "t": "`$STRING`", "key$": "locale", "index$": 31 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the contract.", "t": "`$STRING`", "key$": "name", "index$": 32 }, "netPaymentTerms": { "a": true, "fo": "int32", "h": "Net Payment Terms", "n": "netPaymentTerms", "r": false, "sh": "The net payment terms for the contract, represented as an integer.", "t": "`$INTEGER`", "key$": "netPaymentTerms", "index$": 33 }, "paymentEnabled": { "a": true, "h": "Payment Enabled", "n": "paymentEnabled", "r": true, "sh": "Indicates whether payment is enabled for the contract.", "t": "`$BOOLEAN`", "key$": "paymentEnabled", "index$": 34 }, "paymentMethod": { "a": true, "h": "Payment Method", "n": "paymentMethod", "r": false, "sh": "The payment method used for the contract.", "t": "`$STRING`", "key$": "paymentMethod", "index$": 35 }, "poNumber": { "a": true, "h": "Po Number", "n": "poNumber", "r": false, "sh": "The purchase order number associated with the contract.", "t": "`$STRING`", "key$": "poNumber", "index$": 36 }, "preTerminationContractValue": { "a": true, "h": "Pre Termination Contract Value", "n": "preTerminationContractValue", "r": false, "sh": "The value of the contract before termination.", "t": "`$NUMBER`", "key$": "preTerminationContractValue", "index$": 37 }, "renewalContractId": { "a": true, "h": "Renewal Contract Id", "n": "renewalContractId", "r": false, "sh": "The unique identifier of the renewal contract.", "t": "`$STRING`", "key$": "renewalContractId", "index$": 38 }, "renewalDate": { "a": true, "fo": "date", "h": "Renewal Date", "n": "renewalDate", "r": false, "sh": "The date when the contract is set to renew, in ISO 8601 format.", "t": "`$STRING`", "key$": "renewalDate", "index$": 39 }, "sellerCompanyAddress": { "a": true, "h": "Seller Company Address", "n": "sellerCompanyAddress", "r": false, "t": "`$OBJECT`", "key$": "sellerCompanyAddress", "index$": 40 }, "sellerCompanyName": { "a": true, "h": "Seller Company Name", "n": "sellerCompanyName", "r": false, "sh": "The name of the seller's company.", "t": "`$STRING`", "key$": "sellerCompanyName", "index$": 41 }, "sellerEmail": { "a": true, "h": "Seller Email", "n": "sellerEmail", "r": false, "sh": "The email address of the seller.", "t": "`$STRING`", "key$": "sellerEmail", "index$": 42 }, "sellerFirstName": { "a": true, "h": "Seller First Name", "n": "sellerFirstName", "r": false, "sh": "The first name of the seller.", "t": "`$STRING`", "key$": "sellerFirstName", "index$": 43 }, "sellerLastName": { "a": true, "h": "Seller Last Name", "n": "sellerLastName", "r": false, "sh": "The last name of the seller.", "t": "`$STRING`", "key$": "sellerLastName", "index$": 44 }, "sellerPhoneNumber": { "a": true, "h": "Seller Phone Number", "n": "sellerPhoneNumber", "r": false, "sh": "The phone number of the seller.", "t": "`$STRING`", "key$": "sellerPhoneNumber", "index$": 45 }, "startDate": { "a": true, "fo": "date", "h": "Start Date", "n": "startDate", "r": false, "sh": "The start date of the contract, in ISO 8601 format.", "t": "`$STRING`", "key$": "startDate", "index$": 46 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the contract.", "t": "`$STRING`", "key$": "status", "index$": 47 }, "storePaymentMethodAtCheckout": { "a": true, "h": "Store Payment Method At Checkout", "n": "storePaymentMethodAtCheckout", "r": true, "sh": "Indicates whether the payment method should be stored at checkout.", "t": "`$BOOLEAN`", "key$": "storePaymentMethodAtCheckout", "index$": 48 }, "terminationDate": { "a": true, "fo": "date", "h": "Termination Date", "n": "terminationDate", "r": false, "sh": "The date when the contract is terminated, in ISO 8601 format.", "t": "`$STRING`", "key$": "terminationDate", "index$": 49 }, "totalBilledAmount": { "a": true, "h": "Total Billed Amount", "n": "totalBilledAmount", "r": false, "sh": "The total amount billed under the contract.", "t": "`$NUMBER`", "key$": "totalBilledAmount", "index$": 50 }, "totalBilledAmountPreTax": { "a": true, "h": "Total Billed Amount Pre Tax", "n": "totalBilledAmountPreTax", "r": false, "sh": "The total amount billed under the contract before tax.", "t": "`$NUMBER`", "key$": "totalBilledAmountPreTax", "index$": 51 }, "totalCollectedFees": { "a": true, "h": "Total Collected Fees", "n": "totalCollectedFees", "r": false, "sh": "The total amount of fees collected under the contract.", "t": "`$NUMBER`", "key$": "totalCollectedFees", "index$": 52 }, "totalCollectedTaxes": { "a": true, "h": "Total Collected Taxes", "n": "totalCollectedTaxes", "r": false, "sh": "The total amount of taxes collected under the contract.", "t": "`$NUMBER`", "key$": "totalCollectedTaxes", "index$": 53 }, "totalContractValue": { "a": true, "h": "Total Contract Value", "n": "totalContractValue", "r": false, "sh": "The total value of the contract.", "t": "`$NUMBER`", "key$": "totalContractValue", "index$": 54 }, "totalPaidAmount": { "a": true, "h": "Total Paid Amount", "n": "totalPaidAmount", "r": false, "sh": "The total amount paid under the contract.", "t": "`$NUMBER`", "key$": "totalPaidAmount", "index$": 55 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "The date and time when the contract was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 56 } }, "id": { "field": "id", "name": "id" }, "name": "contracts_contract", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /commerce/contracts/2027-03-beta/contracts/{contractId}/terminate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "contract_id", "or": "contract_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/commerce/contracts/2027-03-beta/contracts/{contractId}/terminate", "q": { "exist": ["contract_id"] }, "r": { "param": { "contractId": "contract_id" } }, "s": [{ "lit": "commerce" }, { "lit": "contracts" }, { "lit": "2027-03-beta" }, { "lit": "contracts" }, { "var": "contract_id" }, { "lit": "terminate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.contract"]] }, "key$": "contracts_contract", "name__orig": "contracts_contract", "Name": "ContractsContract", "name_": "contracts_contract", "name-": "contracts-contract", "NAME": "CONTRACTS_CONTRACT", "index$": 4 }, { "active": true, "entity": "contracts_contract", "key$": "BasicContractsContractFlow", "kind": "basic", "name": "BasicContractsContractFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "contracts_contract_ref01" }, "m": { "contract_id": "contract01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ContractsContract', { "POST /commerce/contracts/2027-03-beta/contracts/{contractId}/terminate": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "terminationDate": { "type": "string", "description": "The date on which the contract termination is to take effect. It is represented as a string in the date format.", "format": "date", "example": null, "key$": "terminationDate" } }, "example": null, "x-ref": "#/components/schemas/ContractsContractTerminateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "contractId", "in": "path", "description": "The unique identifier of the contract to terminate.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const contracts_contract_ref01_ent = client.ContractsContract();
        let contracts_contract_ref01_data = setup.data.new.contracts_contract['contracts_contract_ref01'];
        contracts_contract_ref01_data['contract_id'] = setup.idmap['contract01'];
        contracts_contract_ref01_data = (await contracts_contract_ref01_ent.create(contracts_contract_ref01_data)).data();
        (0, node_assert_1.default)(null != contracts_contract_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contracts_contract/ContractsContractTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotCommerceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contracts_contract01', 'contracts_contract02', 'contracts_contract03', 'contract01', 'contract02', 'contract03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_ENTID': idmap,
        'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
        'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_COMMERCE_APIKEY': '',
    });
    idmap = env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_ENTID'];
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
//# sourceMappingURL=ContractsContractEntity.test.js.map