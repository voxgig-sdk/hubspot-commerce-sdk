<?php
declare(strict_types=1);

// ContractsQuote entity test

require_once __DIR__ . '/../hubspotcommerce_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ContractsQuoteEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HubspotCommerceSDK::test(null, null);
        $ent = $testsdk->ContractsQuote(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = contracts_quote_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "contracts_quote." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $contracts_quote_ref01_ent = $client->ContractsQuote(null);
        $contracts_quote_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.contracts_quote"), "contracts_quote_ref01"));
        $contracts_quote_ref01_data["contract_id"] = $setup["idmap"]["contract01"];

        $contracts_quote_ref01_data_result = $contracts_quote_ref01_ent->create($contracts_quote_ref01_data, null);
        $contracts_quote_ref01_data = Helpers::to_map(is_object($contracts_quote_ref01_data_result) && method_exists($contracts_quote_ref01_data_result, 'data_get') ? $contracts_quote_ref01_data_result->data_get() : $contracts_quote_ref01_data_result);
        $this->assertNotNull($contracts_quote_ref01_data);

    }
}

function contracts_quote_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/contracts_quote/ContractsQuoteTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HubspotCommerceSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["contracts_quote01", "contracts_quote02", "contracts_quote03", "contract01", "contract02", "contract03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID" => $idmap,
        "HUBSPOT_COMMERCE_TEST_LIVE" => "FALSE",
        "HUBSPOT_COMMERCE_TEST_EXPLAIN" => "FALSE",
        "HUBSPOT_COMMERCE_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HUBSPOT_COMMERCE_TEST_CONTRACTS_QUOTE_ENTID"]);
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
