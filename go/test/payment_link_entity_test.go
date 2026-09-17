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

func TestPaymentLinkEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PaymentLink(nil)
		if ent == nil {
			t.Fatal("expected non-nil PaymentLinkEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"payment_link": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PaymentLink(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.PaymentLink(nil).Stream("list", nil, nil) {
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
		setup := payment_linkBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "payment_link." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_PAYMENT_LINK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		paymentLinkRef01Ent := client.PaymentLink(nil)
		paymentLinkRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "payment_link"}), "payment_link_ref01"))

		paymentLinkRef01DataResult, err := paymentLinkRef01Ent.Create(paymentLinkRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		paymentLinkRef01Data = core.ToMapAny(entityData(paymentLinkRef01DataResult))
		if paymentLinkRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if paymentLinkRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		paymentLinkRef01Match := map[string]any{}

		paymentLinkRef01ListResult, err := paymentLinkRef01Ent.List(paymentLinkRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		paymentLinkRef01List, paymentLinkRef01ListOk := paymentLinkRef01ListResult.([]any)
		if !paymentLinkRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", paymentLinkRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(paymentLinkRef01List), map[string]any{"id": paymentLinkRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		paymentLinkRef01DataUp0Up := map[string]any{
			"id": paymentLinkRef01Data["id"],
		}

		paymentLinkRef01MarkdefUp0Name := "archivedAt"
		paymentLinkRef01MarkdefUp0Value := fmt.Sprintf("Mark01-payment_link_ref01_%d", setup.now)
		paymentLinkRef01DataUp0Up[paymentLinkRef01MarkdefUp0Name] = paymentLinkRef01MarkdefUp0Value

		paymentLinkRef01ResdataUp0Result, err := paymentLinkRef01Ent.Update(paymentLinkRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		paymentLinkRef01ResdataUp0 := core.ToMapAny(entityData(paymentLinkRef01ResdataUp0Result))
		if paymentLinkRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if paymentLinkRef01ResdataUp0["id"] != paymentLinkRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if paymentLinkRef01ResdataUp0[paymentLinkRef01MarkdefUp0Name] != paymentLinkRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", paymentLinkRef01MarkdefUp0Name, paymentLinkRef01ResdataUp0[paymentLinkRef01MarkdefUp0Name])
		}

		// LOAD
		paymentLinkRef01MatchDt0 := map[string]any{
			"id": paymentLinkRef01Data["id"],
		}
		paymentLinkRef01DataDt0Loaded, err := paymentLinkRef01Ent.Load(paymentLinkRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		paymentLinkRef01DataDt0LoadResult := core.ToMapAny(entityData(paymentLinkRef01DataDt0Loaded))
		if paymentLinkRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if paymentLinkRef01DataDt0LoadResult["id"] != paymentLinkRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func payment_linkBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "payment_link", "PaymentLinkTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read payment_link test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse payment_link test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"payment_link01", "payment_link02", "payment_link03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_COMMERCE_TEST_PAYMENT_LINK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_COMMERCE_TEST_PAYMENT_LINK_ENTID": idmap,
		"HUBSPOT_COMMERCE_TEST_LIVE":      "FALSE",
		"HUBSPOT_COMMERCE_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_COMMERCE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_COMMERCE_TEST_PAYMENT_LINK_ENTID"])
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
