-- HubspotCommerce SDK error

local HubspotCommerceError = {}
HubspotCommerceError.__index = HubspotCommerceError


function HubspotCommerceError.new(code, msg, ctx)
  local self = setmetatable({}, HubspotCommerceError)
  self.is_sdk_error = true
  self.sdk = "HubspotCommerce"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HubspotCommerceError:error()
  return self.msg
end


function HubspotCommerceError:__tostring()
  return self.msg
end


return HubspotCommerceError
