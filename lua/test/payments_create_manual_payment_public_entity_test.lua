-- PaymentsCreateManualPaymentPublic entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("hubspot-commerce_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("PaymentsCreateManualPaymentPublicEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:PaymentsCreateManualPaymentPublic(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = payments_create_manual_payment_public_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "payments_create_manual_payment_public." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local payments_create_manual_payment_public_ref01_ent = client:PaymentsCreateManualPaymentPublic(nil)
    local payments_create_manual_payment_public_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.payments_create_manual_payment_public"), "payments_create_manual_payment_public_ref01"))

    local payments_create_manual_payment_public_ref01_data_result, err = payments_create_manual_payment_public_ref01_ent:create(payments_create_manual_payment_public_ref01_data, nil)
    assert.is_nil(err)
    payments_create_manual_payment_public_ref01_data = helpers.to_map(type(payments_create_manual_payment_public_ref01_data_result) == 'table' and payments_create_manual_payment_public_ref01_data_result.data_get and payments_create_manual_payment_public_ref01_data_result:data_get() or payments_create_manual_payment_public_ref01_data_result)
    assert.is_not_nil(payments_create_manual_payment_public_ref01_data)
    assert.is_not_nil(payments_create_manual_payment_public_ref01_data["id"])

  end)
end)

function payments_create_manual_payment_public_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/payments_create_manual_payment_public/PaymentsCreateManualPaymentPublicTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read payments_create_manual_payment_public test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "payments_create_manual_payment_public01", "payments_create_manual_payment_public02", "payments_create_manual_payment_public03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID"] = idmap,
    ["HUBSPOT_COMMERCE_TEST_LIVE"] = "FALSE",
    ["HUBSPOT_COMMERCE_TEST_EXPLAIN"] = "FALSE",
    ["HUBSPOT_COMMERCE_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["HUBSPOT_COMMERCE_TEST_PAYMENTS_CREATE_MANUAL_PAYMENT_PUBLIC_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["HUBSPOT_COMMERCE_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["HUBSPOT_COMMERCE_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["HUBSPOT_COMMERCE_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["HUBSPOT_COMMERCE_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
