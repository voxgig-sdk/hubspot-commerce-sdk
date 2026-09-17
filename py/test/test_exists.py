# HubspotCommerce SDK exists test

import pytest
from hubspotcommerce_sdk import HubspotCommerceSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HubspotCommerceSDK.test(None, None)
        assert testsdk is not None
