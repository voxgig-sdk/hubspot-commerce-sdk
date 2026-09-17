# PaymentsSettingsGetBillingSettingsPublic direct test

import json
import pytest

from hubspotcommerce_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotcommerce_sdk import HubspotCommerceSDK
from hubspotcommerce_sdk.core import helpers
from test import runner


class TestPaymentsSettingsGetBillingSettingsPublicDirect:

    def test_should_direct_load_payments_settings_get_billing_settings_public(self):
        setup = _payments_settings_get_billing_settings_public_direct_setup({"id": "direct01"})
        _skip, _reason = runner.is_control_skipped("direct", "direct-load-payments_settings_get_billing_settings_public", "live" if setup["live"] else "unit")
        if _skip:
            # pytest already imported at module scope
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        client = setup["client"]


        result = client.direct({
            "path": "commerce/payments-settings/2027-03-beta/payments-settings/billing",
            "method": "GET",
            "params": {},
        })
        if setup["live"]:
            # Live mode is lenient: synthetic IDs frequently 4xx. Skip
            # rather than fail when the load endpoint isn't reachable
            # with the IDs we can construct from setup.idmap.
            if result.get("err") is not None:
                pytest.skip(f"load call failed (likely synthetic IDs against live API): {result.get('err')}")
                return
            if not result.get("ok"):
                pytest.skip("load call not ok (likely synthetic IDs against live API)")
                return
            status = helpers.to_int(result["status"])
            if status < 200 or status >= 300:
                pytest.skip(f"expected 2xx status, got {status}")
                return
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert result["data"] is not None
            if isinstance(result["data"], dict):
                assert result["data"]["id"] == "direct01"
            assert len(setup["calls"]) == 1



def _payments_settings_get_billing_settings_public_direct_setup(mockres):
    runner.load_env_local()

    calls = []

    env = runner.env_override({
        "HUBSPOT_COMMERCE_TEST_PAYMENTS_SETTINGS_GET_BILLING_SETTINGS_PUBLIC_ENTID": {},
        "HUBSPOT_COMMERCE_TEST_LIVE": "FALSE",
        "HUBSPOT_COMMERCE_APIKEY": "",
    })

    live = env.get("HUBSPOT_COMMERCE_TEST_LIVE") == "TRUE"

    if live:
        # sdk-test-control.json's test.client.options seeds the live
        # client; the generated fields below overwrite anything they name.
        merged_opts = dict(runner.live_client_options())
        merged_opts.update({
            "apikey": env.get("HUBSPOT_COMMERCE_APIKEY"),
        })
        client = HubspotCommerceSDK(merged_opts)
        return {
            "client": client,
            "calls": calls,
            "live": True,
            "idmap": {},
        }

    def mock_fetch(url, init):
        calls.append({"url": url, "init": init})
        return {
            "status": 200,
            "statusText": "OK",
            "headers": {},
            "json": lambda: mockres if mockres is not None else {"id": "direct01"},
            "body": "mock",
        }, None

    client = HubspotCommerceSDK({
        "base": "http://localhost:8080",
        "system": {
            "fetch": mock_fetch,
        },
    })

    return {
        "client": client,
        "calls": calls,
        "live": False,
        "idmap": {},
    }
