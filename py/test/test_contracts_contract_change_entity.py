# ContractsContractChange entity test

import json
import os
import time

import pytest

from hubspotcommerce_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotcommerce_sdk import HubspotCommerceSDK
from hubspotcommerce_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestContractsContractChangeEntity:

    def test_should_create_instance(self):
        testsdk = HubspotCommerceSDK.test(None, None)
        ent = testsdk.ContractsContractChange(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "contracts_contract_change": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = HubspotCommerceSDK.test(seed, None)
        seen = list(base.ContractsContractChange(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from hubspotcommerce_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = HubspotCommerceSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.ContractsContractChange(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _contracts_contract_change_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "contracts_contract_change." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        contracts_contract_change_ref01_ent = client.ContractsContractChange(None)
        contracts_contract_change_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.contracts_contract_change"), "contracts_contract_change_ref01"))
        contracts_contract_change_ref01_data["contract_id"] = setup["idmap"]["contract01"]

        contracts_contract_change_ref01_data = helpers.to_map(runner.entity_data(contracts_contract_change_ref01_ent.create(contracts_contract_change_ref01_data, None)))
        assert contracts_contract_change_ref01_data is not None
        assert contracts_contract_change_ref01_data["id"] is not None

        # LIST
        contracts_contract_change_ref01_match = {
            "contract_id": setup["idmap"]["contract01"],
        }

        contracts_contract_change_ref01_list_result = contracts_contract_change_ref01_ent.list(contracts_contract_change_ref01_match, None)
        assert isinstance(contracts_contract_change_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(contracts_contract_change_ref01_list_result),
            {"id": contracts_contract_change_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        contracts_contract_change_ref01_data_up0_up = {
            "id": contracts_contract_change_ref01_data["id"],
        }

        contracts_contract_change_ref01_markdef_up0_name = "contractId"
        contracts_contract_change_ref01_markdef_up0_value = "Mark01-contracts_contract_change_ref01_" + str(setup["now"])
        contracts_contract_change_ref01_data_up0_up[contracts_contract_change_ref01_markdef_up0_name] = contracts_contract_change_ref01_markdef_up0_value

        contracts_contract_change_ref01_resdata_up0 = helpers.to_map(runner.entity_data(contracts_contract_change_ref01_ent.update(contracts_contract_change_ref01_data_up0_up, None)))
        assert contracts_contract_change_ref01_resdata_up0 is not None
        assert contracts_contract_change_ref01_resdata_up0["id"] == contracts_contract_change_ref01_data_up0_up["id"]
        assert contracts_contract_change_ref01_resdata_up0[contracts_contract_change_ref01_markdef_up0_name] == contracts_contract_change_ref01_markdef_up0_value

        # LOAD
        contracts_contract_change_ref01_match_dt0 = {
            "id": contracts_contract_change_ref01_data["id"],
        }
        contracts_contract_change_ref01_data_dt0_loaded = contracts_contract_change_ref01_ent.load(contracts_contract_change_ref01_match_dt0, None)
        contracts_contract_change_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(contracts_contract_change_ref01_data_dt0_loaded))
        assert contracts_contract_change_ref01_data_dt0_load_result is not None
        assert contracts_contract_change_ref01_data_dt0_load_result["id"] == contracts_contract_change_ref01_data["id"]



def _contracts_contract_change_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/contracts_contract_change/ContractsContractChangeTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = HubspotCommerceSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["contracts_contract_change01", "contracts_contract_change02", "contracts_contract_change03", "change01", "change02", "change03", "contract01", "contract02", "contract03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_ENTID": idmap,
        "HUBSPOT_COMMERCE_TEST_LIVE": "FALSE",
        "HUBSPOT_COMMERCE_TEST_EXPLAIN": "FALSE",
        "HUBSPOT_COMMERCE_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("HUBSPOT_COMMERCE_TEST_CONTRACTS_CONTRACT_CHANGE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("HUBSPOT_COMMERCE_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("HUBSPOT_COMMERCE_APIKEY"),
            },
            extra or {},
        ])
        client = HubspotCommerceSDK(helpers.to_map(merged_opts))

    _live = env.get("HUBSPOT_COMMERCE_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("HUBSPOT_COMMERCE_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
