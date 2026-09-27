<?php
declare(strict_types=1);

// ContractsContractChangeSummary entity test

require_once __DIR__ . '/../hubspotcommerce_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ContractsContractChangeSummaryEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HubspotCommerceSDK::test(null, null);
        $ent = $testsdk->ContractsContractChangeSummary(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "contracts_contract_change_summary" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = HubspotCommerceSDK::test($seed, null);
        $seen = iterator_to_array($base->ContractsContractChangeSummary(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = HubspotCommerceConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = HubspotCommerceSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->ContractsContractChangeSummary(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = contracts_contract_change_summary_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "contracts_contract_change_summary." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_SUMMARY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $contracts_contract_change_summary_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.contracts_contract_change_summary")));
        $contracts_contract_change_summary_ref01_data = null;
        if (count($contracts_contract_change_summary_ref01_data_raw) > 0) {
            $contracts_contract_change_summary_ref01_data = Helpers::to_map($contracts_contract_change_summary_ref01_data_raw[0][1]);
        }

        // LIST
        $contracts_contract_change_summary_ref01_ent = $client->ContractsContractChangeSummary(null);
        $contracts_contract_change_summary_ref01_match = [
            "contract_id" => $setup["idmap"]["contract01"],
        ];

        $contracts_contract_change_summary_ref01_list_result = $contracts_contract_change_summary_ref01_ent->list($contracts_contract_change_summary_ref01_match, null);
        $this->assertIsArray($contracts_contract_change_summary_ref01_list_result);

    }
}

function contracts_contract_change_summary_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/contracts_contract_change_summary/ContractsContractChangeSummaryTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HubspotCommerceSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["contracts_contract_change_summary01", "contracts_contract_change_summary02", "contracts_contract_change_summary03", "contract01", "contract02", "contract03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_SUMMARY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_SUMMARY_ENTID" => $idmap,
        "HUBSPOT_COMMERCE_TEST_LIVE" => "FALSE",
        "HUBSPOT_COMMERCE_TEST_EXPLAIN" => "FALSE",
        "HUBSPOT_COMMERCE_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_SUMMARY_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["HUBSPOT_COMMERCE_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["HUBSPOT_COMMERCE_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new HubspotCommerceSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["HUBSPOT_COMMERCE_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["HUBSPOT_COMMERCE_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
