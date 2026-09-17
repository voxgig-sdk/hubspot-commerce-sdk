<?php
declare(strict_types=1);

// HubspotCommerce SDK utility: result_headers

class HubspotCommerceResultHeaders
{
    public static function call(HubspotCommerceContext $ctx): ?HubspotCommerceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
