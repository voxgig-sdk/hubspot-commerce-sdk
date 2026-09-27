-- HubspotCommerce SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("hubspot-commerce_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local HubspotCommerceSDK = {}
HubspotCommerceSDK.__index = HubspotCommerceSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

HubspotCommerceSDK._make_feature = _make_feature


function HubspotCommerceSDK.new(options)
  local self = setmetatable({}, HubspotCommerceSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function HubspotCommerceSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function HubspotCommerceSDK:get_utility()
  return Utility.copy(self._utility)
end


function HubspotCommerceSDK:get_root_ctx()
  return self._rootctx
end


function HubspotCommerceSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function HubspotCommerceSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function HubspotCommerceSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function HubspotCommerceSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "HubspotCommerceSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function HubspotCommerceSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function HubspotCommerceSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "HubspotCommerceSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Advanced():list() / client:Advanced():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:Advanced(data)
  local EntityMod = require("entity.advanced_entity")
  if data == nil then
    if self._advanced == nil then
      self._advanced = EntityMod.new(self, nil)
    end
    return self._advanced
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Basic():list() / client:Basic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:Basic(data)
  local EntityMod = require("entity.basic_entity")
  if data == nil then
    if self._basic == nil then
      self._basic = EntityMod.new(self, nil)
    end
    return self._basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Batch():list() / client:Batch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:Batch(data)
  local EntityMod = require("entity.batch_entity")
  if data == nil then
    if self._batch == nil then
      self._batch = EntityMod.new(self, nil)
    end
    return self._batch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Contract():list() / client:Contract():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:Contract(data)
  local EntityMod = require("entity.contract_entity")
  if data == nil then
    if self._contract == nil then
      self._contract = EntityMod.new(self, nil)
    end
    return self._contract
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContractsContract():list() / client:ContractsContract():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:ContractsContract(data)
  local EntityMod = require("entity.contracts_contract_entity")
  if data == nil then
    if self._contracts_contract == nil then
      self._contracts_contract = EntityMod.new(self, nil)
    end
    return self._contracts_contract
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContractsContractChange():list() / client:ContractsContractChange():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:ContractsContractChange(data)
  local EntityMod = require("entity.contracts_contract_change_entity")
  if data == nil then
    if self._contracts_contract_change == nil then
      self._contracts_contract_change = EntityMod.new(self, nil)
    end
    return self._contracts_contract_change
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContractsContractChangePreview():list() / client:ContractsContractChangePreview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:ContractsContractChangePreview(data)
  local EntityMod = require("entity.contracts_contract_change_preview_entity")
  if data == nil then
    if self._contracts_contract_change_preview == nil then
      self._contracts_contract_change_preview = EntityMod.new(self, nil)
    end
    return self._contracts_contract_change_preview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContractsContractChangeSummary():list() / client:ContractsContractChangeSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:ContractsContractChangeSummary(data)
  local EntityMod = require("entity.contracts_contract_change_summary_entity")
  if data == nil then
    if self._contracts_contract_change_summary == nil then
      self._contracts_contract_change_summary = EntityMod.new(self, nil)
    end
    return self._contracts_contract_change_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContractsQuote():list() / client:ContractsQuote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:ContractsQuote(data)
  local EntityMod = require("entity.contracts_quote_entity")
  if data == nil then
    if self._contracts_quote == nil then
      self._contracts_quote = EntityMod.new(self, nil)
    end
    return self._contracts_quote
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Item():list() / client:Item():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:Item(data)
  local EntityMod = require("entity.item_entity")
  if data == nil then
    if self._item == nil then
      self._item = EntityMod.new(self, nil)
    end
    return self._item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentLink():list() / client:PaymentLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentLink(data)
  local EntityMod = require("entity.payment_link_entity")
  if data == nil then
    if self._payment_link == nil then
      self._payment_link = EntityMod.new(self, nil)
    end
    return self._payment_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentMethodsCommercePaymentMethodSettingsPublic():list() / client:PaymentMethodsCommercePaymentMethodSettingsPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentMethodsCommercePaymentMethodSettingsPublic(data)
  local EntityMod = require("entity.payment_methods_commerce_payment_method_settings_public_entity")
  if data == nil then
    if self._payment_methods_commerce_payment_method_settings_public == nil then
      self._payment_methods_commerce_payment_method_settings_public = EntityMod.new(self, nil)
    end
    return self._payment_methods_commerce_payment_method_settings_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentsActionResponseWithSingleResultSimplePublicObject():list() / client:PaymentsActionResponseWithSingleResultSimplePublicObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentsActionResponseWithSingleResultSimplePublicObject(data)
  local EntityMod = require("entity.payments_action_response_with_single_result_simple_public_object_entity")
  if data == nil then
    if self._payments_action_response_with_single_result_simple_public_object == nil then
      self._payments_action_response_with_single_result_simple_public_object = EntityMod.new(self, nil)
    end
    return self._payments_action_response_with_single_result_simple_public_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentsCreateManualPaymentPublic():list() / client:PaymentsCreateManualPaymentPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentsCreateManualPaymentPublic(data)
  local EntityMod = require("entity.payments_create_manual_payment_public_entity")
  if data == nil then
    if self._payments_create_manual_payment_public == nil then
      self._payments_create_manual_payment_public = EntityMod.new(self, nil)
    end
    return self._payments_create_manual_payment_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentsSettingsGetBillingSettingsPublic():list() / client:PaymentsSettingsGetBillingSettingsPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentsSettingsGetBillingSettingsPublic(data)
  local EntityMod = require("entity.payments_settings_get_billing_settings_public_entity")
  if data == nil then
    if self._payments_settings_get_billing_settings_public == nil then
      self._payments_settings_get_billing_settings_public = EntityMod.new(self, nil)
    end
    return self._payments_settings_get_billing_settings_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentsSettingsGetCheckoutFeesPublic():list() / client:PaymentsSettingsGetCheckoutFeesPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentsSettingsGetCheckoutFeesPublic(data)
  local EntityMod = require("entity.payments_settings_get_checkout_fees_public_entity")
  if data == nil then
    if self._payments_settings_get_checkout_fees_public == nil then
      self._payments_settings_get_checkout_fees_public = EntityMod.new(self, nil)
    end
    return self._payments_settings_get_checkout_fees_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentsSettingsGetPolicySettingsPublic():list() / client:PaymentsSettingsGetPolicySettingsPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentsSettingsGetPolicySettingsPublic(data)
  local EntityMod = require("entity.payments_settings_get_policy_settings_public_entity")
  if data == nil then
    if self._payments_settings_get_policy_settings_public == nil then
      self._payments_settings_get_policy_settings_public = EntityMod.new(self, nil)
    end
    return self._payments_settings_get_policy_settings_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentsSettingsGetShippingSettingsPublic():list() / client:PaymentsSettingsGetShippingSettingsPublic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentsSettingsGetShippingSettingsPublic(data)
  local EntityMod = require("entity.payments_settings_get_shipping_settings_public_entity")
  if data == nil then
    if self._payments_settings_get_shipping_settings_public == nil then
      self._payments_settings_get_shipping_settings_public = EntityMod.new(self, nil)
    end
    return self._payments_settings_get_shipping_settings_public
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentsaccountsPaymentAccountView():list() / client:PaymentsaccountsPaymentAccountView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PaymentsaccountsPaymentAccountView(data)
  local EntityMod = require("entity.paymentsaccounts_payment_account_view_entity")
  if data == nil then
    if self._paymentsaccounts_payment_account_view == nil then
      self._paymentsaccounts_payment_account_view = EntityMod.new(self, nil)
    end
    return self._paymentsaccounts_payment_account_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriceBook():list() / client:PriceBook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PriceBook(data)
  local EntityMod = require("entity.price_book_entity")
  if data == nil then
    if self._price_book == nil then
      self._price_book = EntityMod.new(self, nil)
    end
    return self._price_book
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriceBooksBatchResponsePriceBookItem():list() / client:PriceBooksBatchResponsePriceBookItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PriceBooksBatchResponsePriceBookItem(data)
  local EntityMod = require("entity.price_books_batch_response_price_book_item_entity")
  if data == nil then
    if self._price_books_batch_response_price_book_item == nil then
      self._price_books_batch_response_price_book_item = EntityMod.new(self, nil)
    end
    return self._price_books_batch_response_price_book_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriceBooksCollectionResponsePriceBookItemResponseForward():list() / client:PriceBooksCollectionResponsePriceBookItemResponseForward():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PriceBooksCollectionResponsePriceBookItemResponseForward(data)
  local EntityMod = require("entity.price_books_collection_response_price_book_item_response_forward_entity")
  if data == nil then
    if self._price_books_collection_response_price_book_item_response_forward == nil then
      self._price_books_collection_response_price_book_item_response_forward = EntityMod.new(self, nil)
    end
    return self._price_books_collection_response_price_book_item_response_forward
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriceBooksPriceBook():list() / client:PriceBooksPriceBook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PriceBooksPriceBook(data)
  local EntityMod = require("entity.price_books_price_book_entity")
  if data == nil then
    if self._price_books_price_book == nil then
      self._price_books_price_book = EntityMod.new(self, nil)
    end
    return self._price_books_price_book
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriceBooksPriceBookItem():list() / client:PriceBooksPriceBookItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PriceBooksPriceBookItem(data)
  local EntityMod = require("entity.price_books_price_book_item_entity")
  if data == nil then
    if self._price_books_price_book_item == nil then
      self._price_books_price_book_item = EntityMod.new(self, nil)
    end
    return self._price_books_price_book_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PriceBooksPriceBookValidate():list() / client:PriceBooksPriceBookValidate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotCommerceSDK:PriceBooksPriceBookValidate(data)
  local EntityMod = require("entity.price_books_price_book_validate_entity")
  if data == nil then
    if self._price_books_price_book_validate == nil then
      self._price_books_price_book_validate = EntityMod.new(self, nil)
    end
    return self._price_books_price_book_validate
  end
  return EntityMod.new(self, data)
end




function HubspotCommerceSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = HubspotCommerceSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return HubspotCommerceSDK
