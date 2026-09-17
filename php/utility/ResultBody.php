<?php
declare(strict_types=1);

// HubspotCommerce SDK utility: result_body

class HubspotCommerceResultBody
{
    public static function call(HubspotCommerceContext $ctx): ?HubspotCommerceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
