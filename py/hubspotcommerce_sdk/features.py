# HubspotCommerce SDK feature factory

from hubspotcommerce_sdk.feature.base_feature import HubspotCommerceBaseFeature
from hubspotcommerce_sdk.feature.debug_feature import HubspotCommerceDebugFeature
from hubspotcommerce_sdk.feature.idempotency_feature import HubspotCommerceIdempotencyFeature
from hubspotcommerce_sdk.feature.metrics_feature import HubspotCommerceMetricsFeature
from hubspotcommerce_sdk.feature.paging_feature import HubspotCommercePagingFeature
from hubspotcommerce_sdk.feature.ratelimit_feature import HubspotCommerceRatelimitFeature
from hubspotcommerce_sdk.feature.retry_feature import HubspotCommerceRetryFeature
from hubspotcommerce_sdk.feature.test_feature import HubspotCommerceTestFeature
from hubspotcommerce_sdk.feature.timeout_feature import HubspotCommerceTimeoutFeature


_FEATURES = {
    "base": lambda: HubspotCommerceBaseFeature(),
    "debug": lambda: HubspotCommerceDebugFeature(),
    "idempotency": lambda: HubspotCommerceIdempotencyFeature(),
    "metrics": lambda: HubspotCommerceMetricsFeature(),
    "paging": lambda: HubspotCommercePagingFeature(),
    "ratelimit": lambda: HubspotCommerceRatelimitFeature(),
    "retry": lambda: HubspotCommerceRetryFeature(),
    "test": lambda: HubspotCommerceTestFeature(),
    "timeout": lambda: HubspotCommerceTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
