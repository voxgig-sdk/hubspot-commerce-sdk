package sdktest

import (
	"encoding/json"
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

func TestContractsContractChangePreviewEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ContractsContractChangePreview(nil)
		if ent == nil {
			t.Fatal("expected non-nil ContractsContractChangePreviewEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := contracts_contract_change_previewBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "contracts_contract_change_preview." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		contractsContractChangePreviewRef01Ent := client.ContractsContractChangePreview(nil)
		contractsContractChangePreviewRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "contracts_contract_change_preview"}), "contracts_contract_change_preview_ref01"))

		contractsContractChangePreviewRef01DataResult, err := contractsContractChangePreviewRef01Ent.Create(contractsContractChangePreviewRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		contractsContractChangePreviewRef01Data = core.ToMapAny(entityData(contractsContractChangePreviewRef01DataResult))
		if contractsContractChangePreviewRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func contracts_contract_change_previewBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "contracts_contract_change_preview", "ContractsContractChangePreviewTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read contracts_contract_change_preview test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse contracts_contract_change_preview test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"contracts_contract_change_preview01", "contracts_contract_change_preview02", "contracts_contract_change_preview03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID": idmap,
		"HUBSPOT_COMMERCE_TEST_LIVE":      "FALSE",
		"HUBSPOT_COMMERCE_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_COMMERCE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_PREVIEW_ENTID"])
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
