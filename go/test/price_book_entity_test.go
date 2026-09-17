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

func TestPriceBookEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PriceBook(nil)
		if ent == nil {
			t.Fatal("expected non-nil PriceBookEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"price_book": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PriceBook(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.PriceBook(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := price_bookBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "price_book." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_PRICE_BOOK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		priceBookRef01Ent := client.PriceBook(nil)
		priceBookRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "price_book"}), "price_book_ref01"))

		priceBookRef01DataResult, err := priceBookRef01Ent.Create(priceBookRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		priceBookRef01Data = core.ToMapAny(entityData(priceBookRef01DataResult))
		if priceBookRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if priceBookRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		priceBookRef01Match := map[string]any{}

		priceBookRef01ListResult, err := priceBookRef01Ent.List(priceBookRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		priceBookRef01List, priceBookRef01ListOk := priceBookRef01ListResult.([]any)
		if !priceBookRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", priceBookRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(priceBookRef01List), map[string]any{"id": priceBookRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		priceBookRef01DataUp0Up := map[string]any{
			"id": priceBookRef01Data["id"],
		}

		priceBookRef01MarkdefUp0Name := "archivedAt"
		priceBookRef01MarkdefUp0Value := fmt.Sprintf("Mark01-price_book_ref01_%d", setup.now)
		priceBookRef01DataUp0Up[priceBookRef01MarkdefUp0Name] = priceBookRef01MarkdefUp0Value

		priceBookRef01ResdataUp0Result, err := priceBookRef01Ent.Update(priceBookRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		priceBookRef01ResdataUp0 := core.ToMapAny(entityData(priceBookRef01ResdataUp0Result))
		if priceBookRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if priceBookRef01ResdataUp0["id"] != priceBookRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if priceBookRef01ResdataUp0[priceBookRef01MarkdefUp0Name] != priceBookRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", priceBookRef01MarkdefUp0Name, priceBookRef01ResdataUp0[priceBookRef01MarkdefUp0Name])
		}

		// LOAD
		priceBookRef01MatchDt0 := map[string]any{
			"id": priceBookRef01Data["id"],
		}
		priceBookRef01DataDt0Loaded, err := priceBookRef01Ent.Load(priceBookRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		priceBookRef01DataDt0LoadResult := core.ToMapAny(entityData(priceBookRef01DataDt0Loaded))
		if priceBookRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if priceBookRef01DataDt0LoadResult["id"] != priceBookRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func price_bookBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "price_book", "PriceBookTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read price_book test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse price_book test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"price_book01", "price_book02", "price_book03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_COMMERCE_TEST_PRICE_BOOK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_COMMERCE_TEST_PRICE_BOOK_ENTID": idmap,
		"HUBSPOT_COMMERCE_TEST_LIVE":      "FALSE",
		"HUBSPOT_COMMERCE_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_COMMERCE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_COMMERCE_TEST_PRICE_BOOK_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
