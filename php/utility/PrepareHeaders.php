<?php
declare(strict_types=1);

// HubspotCommerce SDK utility: prepare_headers

class HubspotCommercePrepareHeaders
{
    public static function call(HubspotCommerceContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
