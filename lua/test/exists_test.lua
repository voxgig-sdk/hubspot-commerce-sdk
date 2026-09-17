-- HubspotCommerce SDK exists test

local sdk = require("hubspot-commerce_sdk")

describe("HubspotCommerceSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
