
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HubspotCommerceSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HubspotCommerceSDK.test()
    equal(testsdk instanceof HubspotCommerceSDK, true,
      'HubspotCommerceSDK.test() must return a client synchronously')
  })

})
