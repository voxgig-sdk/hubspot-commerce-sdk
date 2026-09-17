
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { HubspotCommerceSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('PaymentMethodsCommercePaymentMethodSettingsPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_COMMERCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_COMMERCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotCommerceSDK.test()
    const ent = testsdk.PaymentMethodsCommercePaymentMethodSettingsPublic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"activeCurrencies","req":true,"short":"A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod.","type":"`$ARRAY`","index$":0},{"active":true,"name":"commercePaymentMethod","req":true,"short":"The type of payment method.","type":"`$STRING`","index$":1},{"active":true,"name":"isDefaultOn","req":true,"short":"A boolean indicating whether this payment method is set as the default option.","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"paymentMethodSettings","req":true,"short":"A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.","type":"`$ARRAY`","index$":3},{"active":true,"name":"paymentMethodUpdates","req":true,"short":"An array of updates to be applied to commerce payment methods.","type":"`$ARRAY`","index$":4},{"active":true,"name":"supportedCurrencies","req":true,"short":"A full list of currencies that are supported by the bundled commercePaymentMethod.","type":"`$ARRAY`","index$":5}],"name":"payment_methods_commerce_payment_method_settings_public","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /commerce/payment-methods/2027-03-beta/settings","json":"{\"operationId\":\"get-/commerce/payment-methods/2027-03-beta/settings\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paymentMethodSettings\":{\"description\":\"A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"activeCurrencies\":{\"description\":\"A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. Valid values are tied to the Multicurrency options available on the account.\",\"example\":\"USD,CAD,EUR,MXN\",\"items\":{\"enum\":[\"USD\",\"AED\",\"AFN\",\"ALL\",\"AMD\",\"ANG\",\"AOA\",\"ARS\",\"AUD\",\"AWG\",\"AZN\",\"BAM\",\"BBD\",\"BDT\",\"BIF\",\"BMD\",\"BND\",\"BOB\",\"BRL\",\"BSD\",\"BWP\",\"BYN\",\"BZD\",\"CAD\",\"CDF\",\"CHF\",\"CLP\",\"CNY\",\"COP\",\"CRC\",\"CVE\",\"CZK\",\"DJF\",\"DKK\",\"DOP\",\"DZD\",\"EGP\",\"ETB\",\"EUR\",\"FJD\",\"FKP\",\"GBP\",\"GEL\",\"GIP\",\"GMD\",\"GNF\",\"GTQ\",\"GYD\",\"HKD\",\"HNL\",\"HRK\",\"HTG\",\"HUF\",\"IDR\",\"ILS\",\"INR\",\"ISK\",\"JMD\",\"JPY\",\"KES\",\"KGS\",\"KHR\",\"KMF\",\"KRW\",\"KYD\",\"KZT\",\"LAK\",\"LBP\",\"LKR\",\"LRD\",\"LSL\",\"MAD\",\"MDL\",\"MGA\",\"MKD\",\"MMK\",\"MNT\",\"MOP\",\"MRO\",\"MUR\",\"MVR\",\"MWK\",\"MXN\",\"MYR\",\"MZN\",\"NAD\",\"NGN\",\"NIO\",\"NOK\",\"NPR\",\"NZD\",\"PAB\",\"PEN\",\"PGK\",\"PHP\",\"PKR\",\"PLN\",\"PYG\",\"QAR\",\"RON\",\"RSD\",\"RUB\",\"RWF\",\"SAR\",\"SBD\",\"SCR\",\"SEK\",\"SGD\",\"SHP\",\"SLE\",\"SLL\",\"SOS\",\"SRD\",\"STD\",\"SZL\",\"THB\",\"TJS\",\"TOP\",\"TRY\",\"TTD\",\"TWD\",\"TZS\",\"UAH\",\"UGX\",\"UYU\",\"UZS\",\"VND\",\"VUV\",\"WST\",\"XAF\",\"XCD\",\"XOF\",\"XPF\",\"YER\",\"ZAR\",\"ZMW\",\"BGN\",\"BHD\",\"BOV\",\"BTN\",\"CHE\",\"CHW\",\"CLF\",\"COU\",\"CUC\",\"CUP\",\"ERN\",\"GHS\",\"IQD\",\"IRR\",\"JOD\",\"KPW\",\"KWD\",\"LYD\",\"MRU\",\"MXV\",\"OMR\",\"SDG\",\"SSP\",\"STN\",\"SVC\",\"SYP\",\"TMT\",\"TND\",\"USN\",\"UYI\",\"VEF\",\"XAG\",\"XAU\",\"XBA\",\"XBB\",\"XBC\",\"XBD\",\"XDR\",\"XPD\",\"XPT\",\"XSU\",\"XUA\",\"ZWL\"],\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"commercePaymentMethod\":{\"description\":\"The type of payment method. Valid values include 'CASH', 'CHECK', 'WIRE_TRANSFER', 'CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'KLARNA', 'AFFIRM', and 'OTHER'.\",\"enum\":[\"ACH\",\"AFFIRM\",\"BACS\",\"CARD\",\"CASH\",\"CHECK\",\"KLARNA\",\"OTHER\",\"PADS\",\"SEPA\",\"WIRE_TRANSFER\"],\"example\":null,\"type\":\"string\"},\"isDefaultOn\":{\"description\":\"A boolean indicating whether this payment method is set as the default option.\",\"example\":null,\"type\":\"boolean\"},\"supportedCurrencies\":{\"description\":\"A full list of currencies that are supported by the bundled commercePaymentMethod.\",\"example\":\"USD,EUR,CAD,MXN\",\"items\":{\"enum\":[\"USD\",\"AED\",\"AFN\",\"ALL\",\"AMD\",\"ANG\",\"AOA\",\"ARS\",\"AUD\",\"AWG\",\"AZN\",\"BAM\",\"BBD\",\"BDT\",\"BIF\",\"BMD\",\"BND\",\"BOB\",\"BRL\",\"BSD\",\"BWP\",\"BYN\",\"BZD\",\"CAD\",\"CDF\",\"CHF\",\"CLP\",\"CNY\",\"COP\",\"CRC\",\"CVE\",\"CZK\",\"DJF\",\"DKK\",\"DOP\",\"DZD\",\"EGP\",\"ETB\",\"EUR\",\"FJD\",\"FKP\",\"GBP\",\"GEL\",\"GIP\",\"GMD\",\"GNF\",\"GTQ\",\"GYD\",\"HKD\",\"HNL\",\"HRK\",\"HTG\",\"HUF\",\"IDR\",\"ILS\",\"INR\",\"ISK\",\"JMD\",\"JPY\",\"KES\",\"KGS\",\"KHR\",\"KMF\",\"KRW\",\"KYD\",\"KZT\",\"LAK\",\"LBP\",\"LKR\",\"LRD\",\"LSL\",\"MAD\",\"MDL\",\"MGA\",\"MKD\",\"MMK\",\"MNT\",\"MOP\",\"MRO\",\"MUR\",\"MVR\",\"MWK\",\"MXN\",\"MYR\",\"MZN\",\"NAD\",\"NGN\",\"NIO\",\"NOK\",\"NPR\",\"NZD\",\"PAB\",\"PEN\",\"PGK\",\"PHP\",\"PKR\",\"PLN\",\"PYG\",\"QAR\",\"RON\",\"RSD\",\"RUB\",\"RWF\",\"SAR\",\"SBD\",\"SCR\",\"SEK\",\"SGD\",\"SHP\",\"SLE\",\"SLL\",\"SOS\",\"SRD\",\"STD\",\"SZL\",\"THB\",\"TJS\",\"TOP\",\"TRY\",\"TTD\",\"TWD\",\"TZS\",\"UAH\",\"UGX\",\"UYU\",\"UZS\",\"VND\",\"VUV\",\"WST\",\"XAF\",\"XCD\",\"XOF\",\"XPF\",\"YER\",\"ZAR\",\"ZMW\",\"BGN\",\"BHD\",\"BOV\",\"BTN\",\"CHE\",\"CHW\",\"CLF\",\"COU\",\"CUC\",\"CUP\",\"ERN\",\"GHS\",\"IQD\",\"IRR\",\"JOD\",\"KPW\",\"KWD\",\"LYD\",\"MRU\",\"MXV\",\"OMR\",\"SDG\",\"SSP\",\"STN\",\"SVC\",\"SYP\",\"TMT\",\"TND\",\"USN\",\"UYI\",\"VEF\",\"XAG\",\"XAU\",\"XBA\",\"XBB\",\"XBC\",\"XBD\",\"XDR\",\"XPD\",\"XPT\",\"XSU\",\"XUA\",\"ZWL\"],\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"activeCurrencies\",\"commercePaymentMethod\",\"isDefaultOn\",\"supportedCurrencies\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"paymentMethodSettings\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"crm.objects.invoices.read\"]},{\"oauth2\":[\"crm.schemas.invoices.read\"]},{\"oauth2\":[\"cpq.quotes.write\"]},{\"oauth2\":[\"crm.objects.quotes.read\"]},{\"oauth2\":[\"crm.schemas.quotes.read\"]},{\"oauth2\":[\"cpq.quotes.read\"]},{\"oauth2\":[\"crm.objects.subscriptions.read\"]},{\"oauth2\":[\"crm.schemas.subscriptions.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/commerce/payment-methods/2027-03-beta/settings","segments":[{"lit":"commerce"},{"lit":"payment-methods"},{"lit":"2027-03-beta"},{"lit":"settings"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.paymentMethodSettings`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{},"contract":{"id":"PATCH /commerce/payment-methods/2027-03-beta/settings","json":"{\"operationId\":\"patch-/commerce/payment-methods/2027-03-beta/settings\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paymentMethodUpdates\":{\"description\":\"An array of updates to be applied to commerce payment methods. Each update specifies changes to a particular payment method.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"commercePaymentMethod\":{\"description\":\"The type of commerce payment method being updated. Valid values include 'CASH', 'CHECK', 'WIRE_TRANSFER', 'CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'KLARNA', 'AFFIRM', and 'OTHER'.\",\"enum\":[\"ACH\",\"AFFIRM\",\"BACS\",\"CARD\",\"CASH\",\"CHECK\",\"KLARNA\",\"OTHER\",\"PADS\",\"SEPA\",\"WIRE_TRANSFER\"],\"example\":null,\"type\":\"string\"},\"isDefaultOn\":{\"description\":\"A boolean indicating whether this payment method is set as the default option.\",\"example\":null,\"type\":\"boolean\"}},\"required\":[\"commercePaymentMethod\",\"isDefaultOn\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"paymentMethodUpdates\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paymentMethodSettings\":{\"description\":\"A list of CommercePaymentMethodSettingPublic corresponding to individual payment methods.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"activeCurrencies\":{\"description\":\"A list of currencies that are active on this account and are suitable for the bundled commercePaymentMethod. Valid values are tied to the Multicurrency options available on the account.\",\"example\":\"USD,CAD,EUR,MXN\",\"items\":{\"enum\":[\"USD\",\"AED\",\"AFN\",\"ALL\",\"AMD\",\"ANG\",\"AOA\",\"ARS\",\"AUD\",\"AWG\",\"AZN\",\"BAM\",\"BBD\",\"BDT\",\"BIF\",\"BMD\",\"BND\",\"BOB\",\"BRL\",\"BSD\",\"BWP\",\"BYN\",\"BZD\",\"CAD\",\"CDF\",\"CHF\",\"CLP\",\"CNY\",\"COP\",\"CRC\",\"CVE\",\"CZK\",\"DJF\",\"DKK\",\"DOP\",\"DZD\",\"EGP\",\"ETB\",\"EUR\",\"FJD\",\"FKP\",\"GBP\",\"GEL\",\"GIP\",\"GMD\",\"GNF\",\"GTQ\",\"GYD\",\"HKD\",\"HNL\",\"HRK\",\"HTG\",\"HUF\",\"IDR\",\"ILS\",\"INR\",\"ISK\",\"JMD\",\"JPY\",\"KES\",\"KGS\",\"KHR\",\"KMF\",\"KRW\",\"KYD\",\"KZT\",\"LAK\",\"LBP\",\"LKR\",\"LRD\",\"LSL\",\"MAD\",\"MDL\",\"MGA\",\"MKD\",\"MMK\",\"MNT\",\"MOP\",\"MRO\",\"MUR\",\"MVR\",\"MWK\",\"MXN\",\"MYR\",\"MZN\",\"NAD\",\"NGN\",\"NIO\",\"NOK\",\"NPR\",\"NZD\",\"PAB\",\"PEN\",\"PGK\",\"PHP\",\"PKR\",\"PLN\",\"PYG\",\"QAR\",\"RON\",\"RSD\",\"RUB\",\"RWF\",\"SAR\",\"SBD\",\"SCR\",\"SEK\",\"SGD\",\"SHP\",\"SLE\",\"SLL\",\"SOS\",\"SRD\",\"STD\",\"SZL\",\"THB\",\"TJS\",\"TOP\",\"TRY\",\"TTD\",\"TWD\",\"TZS\",\"UAH\",\"UGX\",\"UYU\",\"UZS\",\"VND\",\"VUV\",\"WST\",\"XAF\",\"XCD\",\"XOF\",\"XPF\",\"YER\",\"ZAR\",\"ZMW\",\"BGN\",\"BHD\",\"BOV\",\"BTN\",\"CHE\",\"CHW\",\"CLF\",\"COU\",\"CUC\",\"CUP\",\"ERN\",\"GHS\",\"IQD\",\"IRR\",\"JOD\",\"KPW\",\"KWD\",\"LYD\",\"MRU\",\"MXV\",\"OMR\",\"SDG\",\"SSP\",\"STN\",\"SVC\",\"SYP\",\"TMT\",\"TND\",\"USN\",\"UYI\",\"VEF\",\"XAG\",\"XAU\",\"XBA\",\"XBB\",\"XBC\",\"XBD\",\"XDR\",\"XPD\",\"XPT\",\"XSU\",\"XUA\",\"ZWL\"],\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"commercePaymentMethod\":{\"description\":\"The type of payment method. Valid values include 'CASH', 'CHECK', 'WIRE_TRANSFER', 'CARD', 'ACH', 'SEPA', 'BACS', 'PADS', 'KLARNA', 'AFFIRM', and 'OTHER'.\",\"enum\":[\"ACH\",\"AFFIRM\",\"BACS\",\"CARD\",\"CASH\",\"CHECK\",\"KLARNA\",\"OTHER\",\"PADS\",\"SEPA\",\"WIRE_TRANSFER\"],\"example\":null,\"type\":\"string\"},\"isDefaultOn\":{\"description\":\"A boolean indicating whether this payment method is set as the default option.\",\"example\":null,\"type\":\"boolean\"},\"supportedCurrencies\":{\"description\":\"A full list of currencies that are supported by the bundled commercePaymentMethod.\",\"example\":\"USD,EUR,CAD,MXN\",\"items\":{\"enum\":[\"USD\",\"AED\",\"AFN\",\"ALL\",\"AMD\",\"ANG\",\"AOA\",\"ARS\",\"AUD\",\"AWG\",\"AZN\",\"BAM\",\"BBD\",\"BDT\",\"BIF\",\"BMD\",\"BND\",\"BOB\",\"BRL\",\"BSD\",\"BWP\",\"BYN\",\"BZD\",\"CAD\",\"CDF\",\"CHF\",\"CLP\",\"CNY\",\"COP\",\"CRC\",\"CVE\",\"CZK\",\"DJF\",\"DKK\",\"DOP\",\"DZD\",\"EGP\",\"ETB\",\"EUR\",\"FJD\",\"FKP\",\"GBP\",\"GEL\",\"GIP\",\"GMD\",\"GNF\",\"GTQ\",\"GYD\",\"HKD\",\"HNL\",\"HRK\",\"HTG\",\"HUF\",\"IDR\",\"ILS\",\"INR\",\"ISK\",\"JMD\",\"JPY\",\"KES\",\"KGS\",\"KHR\",\"KMF\",\"KRW\",\"KYD\",\"KZT\",\"LAK\",\"LBP\",\"LKR\",\"LRD\",\"LSL\",\"MAD\",\"MDL\",\"MGA\",\"MKD\",\"MMK\",\"MNT\",\"MOP\",\"MRO\",\"MUR\",\"MVR\",\"MWK\",\"MXN\",\"MYR\",\"MZN\",\"NAD\",\"NGN\",\"NIO\",\"NOK\",\"NPR\",\"NZD\",\"PAB\",\"PEN\",\"PGK\",\"PHP\",\"PKR\",\"PLN\",\"PYG\",\"QAR\",\"RON\",\"RSD\",\"RUB\",\"RWF\",\"SAR\",\"SBD\",\"SCR\",\"SEK\",\"SGD\",\"SHP\",\"SLE\",\"SLL\",\"SOS\",\"SRD\",\"STD\",\"SZL\",\"THB\",\"TJS\",\"TOP\",\"TRY\",\"TTD\",\"TWD\",\"TZS\",\"UAH\",\"UGX\",\"UYU\",\"UZS\",\"VND\",\"VUV\",\"WST\",\"XAF\",\"XCD\",\"XOF\",\"XPF\",\"YER\",\"ZAR\",\"ZMW\",\"BGN\",\"BHD\",\"BOV\",\"BTN\",\"CHE\",\"CHW\",\"CLF\",\"COU\",\"CUC\",\"CUP\",\"ERN\",\"GHS\",\"IQD\",\"IRR\",\"JOD\",\"KPW\",\"KWD\",\"LYD\",\"MRU\",\"MXV\",\"OMR\",\"SDG\",\"SSP\",\"STN\",\"SVC\",\"SYP\",\"TMT\",\"TND\",\"USN\",\"UYI\",\"VEF\",\"XAG\",\"XAU\",\"XBA\",\"XBB\",\"XBC\",\"XBD\",\"XDR\",\"XPD\",\"XPT\",\"XSU\",\"XUA\",\"ZWL\"],\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"activeCurrencies\",\"commercePaymentMethod\",\"isDefaultOn\",\"supportedCurrencies\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"paymentMethodSettings\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/commerce/payment-methods/2027-03-beta/settings","segments":[{"lit":"commerce"},{"lit":"payment-methods"},{"lit":"2027-03-beta"},{"lit":"settings"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"payment_methods_commerce_payment_method_settings_public","name__orig":"payment_methods_commerce_payment_method_settings_public","Name":"PaymentMethodsCommercePaymentMethodSettingsPublic","name_":"payment_methods_commerce_payment_method_settings_public","name-":"payment-methods-commerce-payment-method-settings-public","NAME":"PAYMENT_METHODS_COMMERCE_PAYMENT_METHOD_SETTINGS_PUBLIC","index$":10}, {"active":true,"entity":"payment_methods_commerce_payment_method_settings_public","key$":"BasicPaymentMethodsCommercePaymentMethodSettingsPublicFlow","kind":"basic","name":"BasicPaymentMethodsCommercePaymentMethodSettingsPublicFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"payment_methods_commerce_payment_method_settings_public_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"payment_methods_commerce_payment_method_settings_public_ref01","srcdatavar":"payment_methods_commerce_payment_method_settings_public_ref01_data","suffix":"_up0","textfield":"commercePaymentMethod"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payment_methods_commerce_payment_method_settings_public_ref01"}}],"valid":[],"index$":1}]}, 'PaymentMethodsCommercePaymentMethodSettingsPublic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payment_methods_commerce_payment_method_settings_public_ref01_data = Object.values(setup.data.existing.payment_methods_commerce_payment_method_settings_public)[0]

    // LIST
    const payment_methods_commerce_payment_method_settings_public_ref01_ent = client.PaymentMethodsCommercePaymentMethodSettingsPublic()
    const payment_methods_commerce_payment_method_settings_public_ref01_match = {}

    const payment_methods_commerce_payment_method_settings_public_ref01_list = (await payment_methods_commerce_payment_method_settings_public_ref01_ent.list(payment_methods_commerce_payment_method_settings_public_ref01_match)).map((e) => e.data())


    // UPDATE
    const payment_methods_commerce_payment_method_settings_public_ref01_data_up0 = {}

    const payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0 = { name: 'commercePaymentMethod', value: 'Mark01-payment_methods_commerce_payment_method_settings_public_ref01_' + setup.now }
    payment_methods_commerce_payment_method_settings_public_ref01_data_up0 [payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0.name] = payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0.value

    const payment_methods_commerce_payment_method_settings_public_ref01_resdata_up0 = (await payment_methods_commerce_payment_method_settings_public_ref01_ent.update(payment_methods_commerce_payment_method_settings_public_ref01_data_up0)).data()
    assert(null != payment_methods_commerce_payment_method_settings_public_ref01_resdata_up0)

    assert(payment_methods_commerce_payment_method_settings_public_ref01_resdata_up0[payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0.name] === payment_methods_commerce_payment_method_settings_public_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/payment_methods_commerce_payment_method_settings_public/PaymentMethodsCommercePaymentMethodSettingsPublicTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotCommerceSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['payment_methods_commerce_payment_method_settings_public01','payment_methods_commerce_payment_method_settings_public02','payment_methods_commerce_payment_method_settings_public03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_COMMERCE_TEST_PAYMENT_METHODS_COMMERCE_PAYMENT_METHOD_SETTINGS_PUBLIC_ENTID': idmap,
    'HUBSPOT_COMMERCE_TEST_LIVE': 'FALSE',
    'HUBSPOT_COMMERCE_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_COMMERCE_APIKEY': '',
  })

  idmap = env['HUBSPOT_COMMERCE_TEST_PAYMENT_METHODS_COMMERCE_PAYMENT_METHOD_SETTINGS_PUBLIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_COMMERCE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_COMMERCE_TEST_PAYMENT_METHODS_COMMERCE_PAYMENT_METHOD_SETTINGS_PUBLIC_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotCommerceSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HUBSPOT_COMMERCE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
