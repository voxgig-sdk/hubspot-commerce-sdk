<?php
declare(strict_types=1);

// HubspotCommerce SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HubspotCommerceMakeContext
{
    public static function call(array $ctxmap, ?HubspotCommerceContext $basectx): HubspotCommerceContext
    {
        return new HubspotCommerceContext($ctxmap, $basectx);
    }
}
