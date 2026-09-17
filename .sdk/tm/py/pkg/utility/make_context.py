# HubspotCommerce SDK utility: make_context

from projectname_sdk.core.context import HubspotCommerceContext


def make_context_util(ctxmap, basectx):
    return HubspotCommerceContext(ctxmap, basectx)
