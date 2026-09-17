package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/hubspot-commerce-sdk/go"
	"github.com/voxgig-sdk/hubspot-commerce-sdk/go/core"
)

func TestPaymentsActionResponseWithSingleResultSimplePublicObjectDirect(t *testing.T) {
	t.Run("direct-list-payments_action_response_with_single_result_simple_public_object", func(t *testing.T) {
		setup := payments_action_response_with_single_result_simple_public_objectDirectSetup([]any{
			map[string]any{"id": "direct01"},
			map[string]any{"id": "direct02"},
		})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-payments_action_response_with_single_result_simple_public_object", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		if setup.live {
			for _, _liveKey := range []string{"payment_crm_object01", "task01"} {
				if v := setup.idmap[_liveKey]; v == nil {
					t.Skipf("live test needs %s via *_ENTID env var (synthetic IDs only)", _liveKey)
					return
				}
			}
		}
		client := setup.client

		params := map[string]any{}
		if setup.live {
			params["payment_crm_object_id"] = setup.idmap["payment_crm_object01"]
		} else {
			params["payment_crm_object_id"] = "direct01"
		}
		if setup.live {
			params["task_id"] = setup.idmap["task01"]
		} else {
			params["task_id"] = "direct02"
		}

		result, err := client.Direct(map[string]any{
			"path":   "commerce/payments/2027-03-beta/{payment_crm_object_id}/actions/retry/async/tasks/{task_id}/status",
			"method": "GET",
			"params": params,
		})
		if setup.live {
			// Live-mode leniency is a model decision
			// (main.kit.test.live.strict): synthetic IDs 4xx constantly
			// against an arbitrary public API, so the default SKIPS here.
			// A project that owns its test server sets strict and FAILS.
			if err != nil {
				t.Fatalf("list call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("list call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Fatalf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
		}

		if !setup.live {
			if dataList, ok := result["data"].([]any); ok {
				if len(dataList) != 2 {
					t.Fatalf("expected 2 items, got %d", len(dataList))
				}
			} else {
				t.Fatalf("expected data to be an array, got %T", result["data"])
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
			call := (*setup.calls)[0]
			if initMap, ok := call["init"].(map[string]any); ok {
				if initMap["method"] != "GET" {
					t.Fatalf("expected method GET, got %v", initMap["method"])
				}
			}
			if url, ok := call["url"].(string); ok {
				if !strings.Contains(url, "direct01") {
					t.Fatalf("expected url to contain direct01, got %v", url)
				}
				if !strings.Contains(url, "direct02") {
					t.Fatalf("expected url to contain direct02, got %v", url)
				}
			}
		}
	})

}

type payments_action_response_with_single_result_simple_public_objectDirectSetupResult struct {
	client *sdk.HubspotCommerceSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func payments_action_response_with_single_result_simple_public_objectDirectSetup(mockres any) *payments_action_response_with_single_result_simple_public_objectDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"HUBSPOT_COMMERCE_TEST_PAYMENTS_ACTION_RESPONSE_WITH_SINGLE_RESULT_SIMPLE_PUBLIC_OBJECT_ENTID": map[string]any{},
		"HUBSPOT_COMMERCE_TEST_LIVE":    "FALSE",
		"HUBSPOT_COMMERCE_APIKEY":       "",
	})

	live := env["HUBSPOT_COMMERCE_TEST_LIVE"] == "TRUE"

	if live {
		// sdk-test-control.json's test.client.options seeds the live
		// client; the generated fields below overwrite anything they name.
		mergedOpts := map[string]any{}
		for k, v := range liveClientOptions() {
			mergedOpts[k] = v
		}
		for k, v := range map[string]any{
			"apikey": env["HUBSPOT_COMMERCE_APIKEY"],
		} {
			mergedOpts[k] = v
		}
		client := sdk.NewHubspotCommerceSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["HUBSPOT_COMMERCE_TEST_PAYMENTS_ACTION_RESPONSE_WITH_SINGLE_RESULT_SIMPLE_PUBLIC_OBJECT_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &payments_action_response_with_single_result_simple_public_objectDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewHubspotCommerceSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &payments_action_response_with_single_result_simple_public_objectDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
