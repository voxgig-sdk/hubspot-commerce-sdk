-- PriceBooksPriceBookItem entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("hubspot-commerce_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("PriceBooksPriceBookItemEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:PriceBooksPriceBookItem(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = price_books_price_book_item_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "price_books_price_book_item." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local price_books_price_book_item_ref01_ent = client:PriceBooksPriceBookItem(nil)
    local price_books_price_book_item_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.price_books_price_book_item"), "price_books_price_book_item_ref01"))
    price_books_price_book_item_ref01_data["price_book_id"] = setup.idmap["price_book01"]

    local price_books_price_book_item_ref01_data_result, err = price_books_price_book_item_ref01_ent:create(price_books_price_book_item_ref01_data, nil)
    assert.is_nil(err)
    price_books_price_book_item_ref01_data = helpers.to_map(type(price_books_price_book_item_ref01_data_result) == 'table' and price_books_price_book_item_ref01_data_result.data_get and price_books_price_book_item_ref01_data_result:data_get() or price_books_price_book_item_ref01_data_result)
    assert.is_not_nil(price_books_price_book_item_ref01_data)
    assert.is_not_nil(price_books_price_book_item_ref01_data["id"])

    -- UPDATE
    local price_books_price_book_item_ref01_data_up0_up = {
      id = price_books_price_book_item_ref01_data["id"],
      ["price_book_id"] = setup.idmap["price_book_id"],
    }

    local price_books_price_book_item_ref01_markdef_up0_name = "archivedAt"
    local price_books_price_book_item_ref01_markdef_up0_value = "Mark01-price_books_price_book_item_ref01_" .. tostring(setup.now)
    price_books_price_book_item_ref01_data_up0_up[price_books_price_book_item_ref01_markdef_up0_name] = price_books_price_book_item_ref01_markdef_up0_value

    local price_books_price_book_item_ref01_resdata_up0_result, err = price_books_price_book_item_ref01_ent:update(price_books_price_book_item_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local price_books_price_book_item_ref01_resdata_up0 = helpers.to_map(type(price_books_price_book_item_ref01_resdata_up0_result) == 'table' and price_books_price_book_item_ref01_resdata_up0_result.data_get and price_books_price_book_item_ref01_resdata_up0_result:data_get() or price_books_price_book_item_ref01_resdata_up0_result)
    assert.is_not_nil(price_books_price_book_item_ref01_resdata_up0)
    assert.are.equal(price_books_price_book_item_ref01_resdata_up0["id"], price_books_price_book_item_ref01_data_up0_up["id"])
    assert.are.equal(price_books_price_book_item_ref01_resdata_up0[price_books_price_book_item_ref01_markdef_up0_name], price_books_price_book_item_ref01_markdef_up0_value)

    -- LOAD
    local price_books_price_book_item_ref01_match_dt0 = {
      id = price_books_price_book_item_ref01_data["id"],
    }
    local price_books_price_book_item_ref01_data_dt0_loaded, err = price_books_price_book_item_ref01_ent:load(price_books_price_book_item_ref01_match_dt0, nil)
    assert.is_nil(err)
    local price_books_price_book_item_ref01_data_dt0_load_result = helpers.to_map(type(price_books_price_book_item_ref01_data_dt0_loaded) == 'table' and price_books_price_book_item_ref01_data_dt0_loaded.data_get and price_books_price_book_item_ref01_data_dt0_loaded:data_get() or price_books_price_book_item_ref01_data_dt0_loaded)
    assert.is_not_nil(price_books_price_book_item_ref01_data_dt0_load_result)
    assert.are.equal(price_books_price_book_item_ref01_data_dt0_load_result["id"], price_books_price_book_item_ref01_data["id"])

  end)
end)

function price_books_price_book_item_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/price_books_price_book_item/PriceBooksPriceBookItemTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read price_books_price_book_item test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "price_books_price_book_item01", "price_books_price_book_item02", "price_books_price_book_item03", "price_book01", "price_book02", "price_book03" },
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
  local entid_env_raw = os.getenv("HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID"] = idmap,
    ["HUBSPOT_COMMERCE_TEST_LIVE"] = "FALSE",
    ["HUBSPOT_COMMERCE_TEST_EXPLAIN"] = "FALSE",
    ["HUBSPOT_COMMERCE_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["price_book_id"] == nil then
    idmap_resolved["price_book_id"] = idmap_resolved["price_book01"]
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
