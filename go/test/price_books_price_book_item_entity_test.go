package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hubspot-commerce-sdk/go"
	"github.com/voxgig-sdk/hubspot-commerce-sdk/go/core"

	vs "github.com/voxgig-sdk/hubspot-commerce-sdk/go/utility/struct"
)

func TestPriceBooksPriceBookItemEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PriceBooksPriceBookItem(nil)
		if ent == nil {
			t.Fatal("expected non-nil PriceBooksPriceBookItemEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := price_books_price_book_itemBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "price_books_price_book_item." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		priceBooksPriceBookItemRef01Ent := client.PriceBooksPriceBookItem(nil)
		priceBooksPriceBookItemRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "price_books_price_book_item"}), "price_books_price_book_item_ref01"))
		priceBooksPriceBookItemRef01Data["price_book_id"] = setup.idmap["price_book01"]

		priceBooksPriceBookItemRef01DataResult, err := priceBooksPriceBookItemRef01Ent.Create(priceBooksPriceBookItemRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		priceBooksPriceBookItemRef01Data = core.ToMapAny(entityData(priceBooksPriceBookItemRef01DataResult))
		if priceBooksPriceBookItemRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if priceBooksPriceBookItemRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		priceBooksPriceBookItemRef01DataUp0Up := map[string]any{
			"id": priceBooksPriceBookItemRef01Data["id"],
			"price_book_id": setup.idmap["price_book_id"],
		}

		priceBooksPriceBookItemRef01MarkdefUp0Name := "archivedAt"
		priceBooksPriceBookItemRef01MarkdefUp0Value := fmt.Sprintf("Mark01-price_books_price_book_item_ref01_%d", setup.now)
		priceBooksPriceBookItemRef01DataUp0Up[priceBooksPriceBookItemRef01MarkdefUp0Name] = priceBooksPriceBookItemRef01MarkdefUp0Value

		priceBooksPriceBookItemRef01ResdataUp0Result, err := priceBooksPriceBookItemRef01Ent.Update(priceBooksPriceBookItemRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		priceBooksPriceBookItemRef01ResdataUp0 := core.ToMapAny(entityData(priceBooksPriceBookItemRef01ResdataUp0Result))
		if priceBooksPriceBookItemRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if priceBooksPriceBookItemRef01ResdataUp0["id"] != priceBooksPriceBookItemRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if priceBooksPriceBookItemRef01ResdataUp0[priceBooksPriceBookItemRef01MarkdefUp0Name] != priceBooksPriceBookItemRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", priceBooksPriceBookItemRef01MarkdefUp0Name, priceBooksPriceBookItemRef01ResdataUp0[priceBooksPriceBookItemRef01MarkdefUp0Name])
		}

		// LOAD
		priceBooksPriceBookItemRef01MatchDt0 := map[string]any{
			"id": priceBooksPriceBookItemRef01Data["id"],
		}
		priceBooksPriceBookItemRef01DataDt0Loaded, err := priceBooksPriceBookItemRef01Ent.Load(priceBooksPriceBookItemRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		priceBooksPriceBookItemRef01DataDt0LoadResult := core.ToMapAny(entityData(priceBooksPriceBookItemRef01DataDt0Loaded))
		if priceBooksPriceBookItemRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if priceBooksPriceBookItemRef01DataDt0LoadResult["id"] != priceBooksPriceBookItemRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func price_books_price_book_itemBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "price_books_price_book_item", "PriceBooksPriceBookItemTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read price_books_price_book_item test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse price_books_price_book_item test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"price_books_price_book_item01", "price_books_price_book_item02", "price_books_price_book_item03", "price_book01", "price_book02", "price_book03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID": idmap,
		"HUBSPOT_COMMERCE_TEST_LIVE":      "FALSE",
		"HUBSPOT_COMMERCE_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_COMMERCE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_COMMERCE_TEST_PRICE_BOOKS_PRICE_BOOK_ITEM_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add price_book_id alias for update test.
	if idmapResolved["price_book_id"] == nil {
		idmapResolved["price_book_id"] = idmapResolved["price_book01"]
	}

	if env["HUBSPOT_COMMERCE_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HUBSPOT_COMMERCE_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHubspotCommerceSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HUBSPOT_COMMERCE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HUBSPOT_COMMERCE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
