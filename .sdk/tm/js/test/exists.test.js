
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { HubspotCommerceSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HubspotCommerceSDK.test()
    equal(null !== testsdk, true)
  })

})
