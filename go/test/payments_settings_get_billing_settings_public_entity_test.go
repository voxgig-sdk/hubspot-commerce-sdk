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

func TestPaymentsSettingsGetBillingSettingsPublicEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PaymentsSettingsGetBillingSettingsPublic(nil)
		if ent == nil {
			t.Fatal("expected non-nil PaymentsSettingsGetBillingSettingsPublicEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := payments_settings_get_billing_settings_publicBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "payments_settings_get_billing_settings_public." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		paymentsSettingsGetBillingSettingsPublicRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.payments_settings_get_billing_settings_public")))
		var paymentsSettingsGetBillingSettingsPublicRef01Data map[string]any
		if len(paymentsSettingsGetBillingSettingsPublicRef01DataRaw) > 0 {
			paymentsSettingsGetBillingSettingsPublicRef01Data = core.ToMapAny(paymentsSettingsGetBillingSettingsPublicRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = paymentsSettingsGetBillingSettingsPublicRef01Data

		// UPDATE
		paymentsSettingsGetBillingSettingsPublicRef01Ent := client.PaymentsSettingsGetBillingSettingsPublic(nil)
		paymentsSettingsGetBillingSettingsPublicRef01DataUp0Up := map[string]any{
		}

		paymentsSettingsGetBillingSettingsPublicRef01MarkdefUp0Name := "defaultFromEmailAddress"
		paymentsSettingsGetBillingSettingsPublicRef01MarkdefUp0Value := fmt.Sprintf("Mark01-payments_settings_get_billing_settings_public_ref01_%d", setup.now)
		paymentsSettingsGetBillingSettingsPublicRef01DataUp0Up[paymentsSettingsGetBillingSettingsPublicRef01MarkdefUp0Name] = paymentsSettingsGetBillingSettingsPublicRef01MarkdefUp0Value

		paymentsSettingsGetBillingSettingsPublicRef01ResdataUp0Result, err := paymentsSettingsGetBillingSettingsPublicRef01Ent.Update(paymentsSettingsGetBillingSettingsPublicRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		paymentsSettingsGetBillingSettingsPublicRef01ResdataUp0 := core.ToMapAny(entityData(paymentsSettingsGetBillingSettingsPublicRef01ResdataUp0Result))
		if paymentsSettingsGetBillingSettingsPublicRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if paymentsSettingsGetBillingSettingsPublicRef01ResdataUp0[paymentsSettingsGetBillingSettingsPublicRef01MarkdefUp0Name] != paymentsSettingsGetBillingSettingsPublicRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", paymentsSettingsGetBillingSettingsPublicRef01MarkdefUp0Name, paymentsSettingsGetBillingSettingsPublicRef01ResdataUp0[paymentsSettingsGetBillingSettingsPublicRef01MarkdefUp0Name])
		}

		// LOAD
		paymentsSettingsGetBillingSettingsPublicRef01MatchDt0 := map[string]any{}
		paymentsSettingsGetBillingSettingsPublicRef01DataDt0Loaded, err := paymentsSettingsGetBillingSettingsPublicRef01Ent.Load(paymentsSettingsGetBillingSettingsPublicRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if paymentsSettingsGetBillingSettingsPublicRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func payments_settings_get_billing_settings_publicBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "payments_settings_get_billing_settings_public", "PaymentsSettingsGetBillingSettingsPublicTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read payments_settings_get_billing_settings_public test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse payments_settings_get_billing_settings_public test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"payments_settings_get_billing_settings_public01", "payments_settings_get_billing_settings_public02", "payments_settings_get_billing_settings_public03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC_ENTID": idmap,
		"HUBSPOT_COMMERCE_TEST_LIVE":      "FALSE",
		"HUBSPOT_COMMERCE_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_COMMERCE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC_ENTID"])
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
