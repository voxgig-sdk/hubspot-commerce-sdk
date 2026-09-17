<?php
declare(strict_types=1);

// HubspotCommerce SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class HubspotCommerceSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new HubspotCommerceUtility();
        $this->_utility = $utility;

        $config = HubspotCommerceConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = HubspotCommerceHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = HubspotCommerceHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!HubspotCommerceFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, HubspotCommerceFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return HubspotCommerceUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = HubspotCommerceHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = HubspotCommerceHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = HubspotCommerceHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new HubspotCommerceSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new HubspotCommerceError($op . "_allow",
                "HubspotCommerceSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = HubspotCommerceHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = HubspotCommerceHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new HubspotCommerceError("graphql_error",
                "HubspotCommerceSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_advanced = null;

    // Canonical facade: $client->Advanced()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->advanced()
    // resolves here too.
    public function Advanced($data = null)
    {
        require_once __DIR__ . '/entity/advanced_entity.php';
        if ($data === null) {
            if ($this->_advanced === null) {
                $this->_advanced = new AdvancedEntity($this, null);
            }
            return $this->_advanced;
        }
        return new AdvancedEntity($this, $data);
    }


    private $_basic = null;

    // Canonical facade: $client->Basic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->basic()
    // resolves here too.
    public function Basic($data = null)
    {
        require_once __DIR__ . '/entity/basic_entity.php';
        if ($data === null) {
            if ($this->_basic === null) {
                $this->_basic = new BasicEntity($this, null);
            }
            return $this->_basic;
        }
        return new BasicEntity($this, $data);
    }


    private $_batch = null;

    // Canonical facade: $client->Batch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->batch()
    // resolves here too.
    public function Batch($data = null)
    {
        require_once __DIR__ . '/entity/batch_entity.php';
        if ($data === null) {
            if ($this->_batch === null) {
                $this->_batch = new BatchEntity($this, null);
            }
            return $this->_batch;
        }
        return new BatchEntity($this, $data);
    }


    private $_contract = null;

    // Canonical facade: $client->Contract()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contract()
    // resolves here too.
    public function Contract($data = null)
    {
        require_once __DIR__ . '/entity/contract_entity.php';
        if ($data === null) {
            if ($this->_contract === null) {
                $this->_contract = new ContractEntity($this, null);
            }
            return $this->_contract;
        }
        return new ContractEntity($this, $data);
    }


    private $_contracts_contract = null;

    // Canonical facade: $client->ContractsContract()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contracts_contract()
    // resolves here too.
    public function ContractsContract($data = null)
    {
        require_once __DIR__ . '/entity/contracts_contract_entity.php';
        if ($data === null) {
            if ($this->_contracts_contract === null) {
                $this->_contracts_contract = new ContractsContractEntity($this, null);
            }
            return $this->_contracts_contract;
        }
        return new ContractsContractEntity($this, $data);
    }


    private $_contracts_contract_change = null;

    // Canonical facade: $client->ContractsContractChange()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contracts_contract_change()
    // resolves here too.
    public function ContractsContractChange($data = null)
    {
        require_once __DIR__ . '/entity/contracts_contract_change_entity.php';
        if ($data === null) {
            if ($this->_contracts_contract_change === null) {
                $this->_contracts_contract_change = new ContractsContractChangeEntity($this, null);
            }
            return $this->_contracts_contract_change;
        }
        return new ContractsContractChangeEntity($this, $data);
    }


    private $_contracts_contract_change_preview = null;

    // Canonical facade: $client->ContractsContractChangePreview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contracts_contract_change_preview()
    // resolves here too.
    public function ContractsContractChangePreview($data = null)
    {
        require_once __DIR__ . '/entity/contracts_contract_change_preview_entity.php';
        if ($data === null) {
            if ($this->_contracts_contract_change_preview === null) {
                $this->_contracts_contract_change_preview = new ContractsContractChangePreviewEntity($this, null);
            }
            return $this->_contracts_contract_change_preview;
        }
        return new ContractsContractChangePreviewEntity($this, $data);
    }


    private $_contracts_quote = null;

    // Canonical facade: $client->ContractsQuote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contracts_quote()
    // resolves here too.
    public function ContractsQuote($data = null)
    {
        require_once __DIR__ . '/entity/contracts_quote_entity.php';
        if ($data === null) {
            if ($this->_contracts_quote === null) {
                $this->_contracts_quote = new ContractsQuoteEntity($this, null);
            }
            return $this->_contracts_quote;
        }
        return new ContractsQuoteEntity($this, $data);
    }


    private $_item = null;

    // Canonical facade: $client->Item()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->item()
    // resolves here too.
    public function Item($data = null)
    {
        require_once __DIR__ . '/entity/item_entity.php';
        if ($data === null) {
            if ($this->_item === null) {
                $this->_item = new ItemEntity($this, null);
            }
            return $this->_item;
        }
        return new ItemEntity($this, $data);
    }


    private $_payment_link = null;

    // Canonical facade: $client->PaymentLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_link()
    // resolves here too.
    public function PaymentLink($data = null)
    {
        require_once __DIR__ . '/entity/payment_link_entity.php';
        if ($data === null) {
            if ($this->_payment_link === null) {
                $this->_payment_link = new PaymentLinkEntity($this, null);
            }
            return $this->_payment_link;
        }
        return new PaymentLinkEntity($this, $data);
    }


    private $_payment_methods_commerce_payment_method_settings_public = null;

    // Canonical facade: $client->PaymentMethodsCommercePaymentMethodSettingsPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_methods_commerce_payment_method_settings_public()
    // resolves here too.
    public function PaymentMethodsCommercePaymentMethodSettingsPublic($data = null)
    {
        require_once __DIR__ . '/entity/payment_methods_commerce_payment_method_settings_public_entity.php';
        if ($data === null) {
            if ($this->_payment_methods_commerce_payment_method_settings_public === null) {
                $this->_payment_methods_commerce_payment_method_settings_public = new PaymentMethodsCommercePaymentMethodSettingsPublicEntity($this, null);
            }
            return $this->_payment_methods_commerce_payment_method_settings_public;
        }
        return new PaymentMethodsCommercePaymentMethodSettingsPublicEntity($this, $data);
    }


    private $_payments_action_response_with_single_result_simple_public_object = null;

    // Canonical facade: $client->PaymentsActionResponseWithSingleResultSimplePublicObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payments_action_response_with_single_result_simple_public_object()
    // resolves here too.
    public function PaymentsActionResponseWithSingleResultSimplePublicObject($data = null)
    {
        require_once __DIR__ . '/entity/payments_action_response_with_single_result_simple_public_object_entity.php';
        if ($data === null) {
            if ($this->_payments_action_response_with_single_result_simple_public_object === null) {
                $this->_payments_action_response_with_single_result_simple_public_object = new PaymentsActionResponseWithSingleResultSimplePublicObjectEntity($this, null);
            }
            return $this->_payments_action_response_with_single_result_simple_public_object;
        }
        return new PaymentsActionResponseWithSingleResultSimplePublicObjectEntity($this, $data);
    }


    private $_payments_create_manual_payment_public = null;

    // Canonical facade: $client->PaymentsCreateManualPaymentPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payments_create_manual_payment_public()
    // resolves here too.
    public function PaymentsCreateManualPaymentPublic($data = null)
    {
        require_once __DIR__ . '/entity/payments_create_manual_payment_public_entity.php';
        if ($data === null) {
            if ($this->_payments_create_manual_payment_public === null) {
                $this->_payments_create_manual_payment_public = new PaymentsCreateManualPaymentPublicEntity($this, null);
            }
            return $this->_payments_create_manual_payment_public;
        }
        return new PaymentsCreateManualPaymentPublicEntity($this, $data);
    }


    private $_payments_settings_get_billing_settings_public = null;

    // Canonical facade: $client->PaymentsSettingsGetBillingSettingsPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payments_settings_get_billing_settings_public()
    // resolves here too.
    public function PaymentsSettingsGetBillingSettingsPublic($data = null)
    {
        require_once __DIR__ . '/entity/payments_settings_get_billing_settings_public_entity.php';
        if ($data === null) {
            if ($this->_payments_settings_get_billing_settings_public === null) {
                $this->_payments_settings_get_billing_settings_public = new PaymentsSettingsGetBillingSettingsPublicEntity($this, null);
            }
            return $this->_payments_settings_get_billing_settings_public;
        }
        return new PaymentsSettingsGetBillingSettingsPublicEntity($this, $data);
    }


    private $_payments_settings_get_checkout_fees_public = null;

    // Canonical facade: $client->PaymentsSettingsGetCheckoutFeesPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payments_settings_get_checkout_fees_public()
    // resolves here too.
    public function PaymentsSettingsGetCheckoutFeesPublic($data = null)
    {
        require_once __DIR__ . '/entity/payments_settings_get_checkout_fees_public_entity.php';
        if ($data === null) {
            if ($this->_payments_settings_get_checkout_fees_public === null) {
                $this->_payments_settings_get_checkout_fees_public = new PaymentsSettingsGetCheckoutFeesPublicEntity($this, null);
            }
            return $this->_payments_settings_get_checkout_fees_public;
        }
        return new PaymentsSettingsGetCheckoutFeesPublicEntity($this, $data);
    }


    private $_payments_settings_get_policy_settings_public = null;

    // Canonical facade: $client->PaymentsSettingsGetPolicySettingsPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payments_settings_get_policy_settings_public()
    // resolves here too.
    public function PaymentsSettingsGetPolicySettingsPublic($data = null)
    {
        require_once __DIR__ . '/entity/payments_settings_get_policy_settings_public_entity.php';
        if ($data === null) {
            if ($this->_payments_settings_get_policy_settings_public === null) {
                $this->_payments_settings_get_policy_settings_public = new PaymentsSettingsGetPolicySettingsPublicEntity($this, null);
            }
            return $this->_payments_settings_get_policy_settings_public;
        }
        return new PaymentsSettingsGetPolicySettingsPublicEntity($this, $data);
    }


    private $_payments_settings_get_shipping_settings_public = null;

    // Canonical facade: $client->PaymentsSettingsGetShippingSettingsPublic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payments_settings_get_shipping_settings_public()
    // resolves here too.
    public function PaymentsSettingsGetShippingSettingsPublic($data = null)
    {
        require_once __DIR__ . '/entity/payments_settings_get_shipping_settings_public_entity.php';
        if ($data === null) {
            if ($this->_payments_settings_get_shipping_settings_public === null) {
                $this->_payments_settings_get_shipping_settings_public = new PaymentsSettingsGetShippingSettingsPublicEntity($this, null);
            }
            return $this->_payments_settings_get_shipping_settings_public;
        }
        return new PaymentsSettingsGetShippingSettingsPublicEntity($this, $data);
    }


    private $_paymentsaccounts_payment_account_view = null;

    // Canonical facade: $client->PaymentsaccountsPaymentAccountView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->paymentsaccounts_payment_account_view()
    // resolves here too.
    public function PaymentsaccountsPaymentAccountView($data = null)
    {
        require_once __DIR__ . '/entity/paymentsaccounts_payment_account_view_entity.php';
        if ($data === null) {
            if ($this->_paymentsaccounts_payment_account_view === null) {
                $this->_paymentsaccounts_payment_account_view = new PaymentsaccountsPaymentAccountViewEntity($this, null);
            }
            return $this->_paymentsaccounts_payment_account_view;
        }
        return new PaymentsaccountsPaymentAccountViewEntity($this, $data);
    }


    private $_price_book = null;

    // Canonical facade: $client->PriceBook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->price_book()
    // resolves here too.
    public function PriceBook($data = null)
    {
        require_once __DIR__ . '/entity/price_book_entity.php';
        if ($data === null) {
            if ($this->_price_book === null) {
                $this->_price_book = new PriceBookEntity($this, null);
            }
            return $this->_price_book;
        }
        return new PriceBookEntity($this, $data);
    }


    private $_price_books_batch_response_price_book_item = null;

    // Canonical facade: $client->PriceBooksBatchResponsePriceBookItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->price_books_batch_response_price_book_item()
    // resolves here too.
    public function PriceBooksBatchResponsePriceBookItem($data = null)
    {
        require_once __DIR__ . '/entity/price_books_batch_response_price_book_item_entity.php';
        if ($data === null) {
            if ($this->_price_books_batch_response_price_book_item === null) {
                $this->_price_books_batch_response_price_book_item = new PriceBooksBatchResponsePriceBookItemEntity($this, null);
            }
            return $this->_price_books_batch_response_price_book_item;
        }
        return new PriceBooksBatchResponsePriceBookItemEntity($this, $data);
    }


    private $_price_books_collection_response_price_book_item_response_forward = null;

    // Canonical facade: $client->PriceBooksCollectionResponsePriceBookItemResponseForward()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->price_books_collection_response_price_book_item_response_forward()
    // resolves here too.
    public function PriceBooksCollectionResponsePriceBookItemResponseForward($data = null)
    {
        require_once __DIR__ . '/entity/price_books_collection_response_price_book_item_response_forward_entity.php';
        if ($data === null) {
            if ($this->_price_books_collection_response_price_book_item_response_forward === null) {
                $this->_price_books_collection_response_price_book_item_response_forward = new PriceBooksCollectionResponsePriceBookItemResponseForwardEntity($this, null);
            }
            return $this->_price_books_collection_response_price_book_item_response_forward;
        }
        return new PriceBooksCollectionResponsePriceBookItemResponseForwardEntity($this, $data);
    }


    private $_price_books_price_book = null;

    // Canonical facade: $client->PriceBooksPriceBook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->price_books_price_book()
    // resolves here too.
    public function PriceBooksPriceBook($data = null)
    {
        require_once __DIR__ . '/entity/price_books_price_book_entity.php';
        if ($data === null) {
            if ($this->_price_books_price_book === null) {
                $this->_price_books_price_book = new PriceBooksPriceBookEntity($this, null);
            }
            return $this->_price_books_price_book;
        }
        return new PriceBooksPriceBookEntity($this, $data);
    }


    private $_price_books_price_book_item = null;

    // Canonical facade: $client->PriceBooksPriceBookItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->price_books_price_book_item()
    // resolves here too.
    public function PriceBooksPriceBookItem($data = null)
    {
        require_once __DIR__ . '/entity/price_books_price_book_item_entity.php';
        if ($data === null) {
            if ($this->_price_books_price_book_item === null) {
                $this->_price_books_price_book_item = new PriceBooksPriceBookItemEntity($this, null);
            }
            return $this->_price_books_price_book_item;
        }
        return new PriceBooksPriceBookItemEntity($this, $data);
    }


    private $_price_books_price_book_validate = null;

    // Canonical facade: $client->PriceBooksPriceBookValidate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->price_books_price_book_validate()
    // resolves here too.
    public function PriceBooksPriceBookValidate($data = null)
    {
        require_once __DIR__ . '/entity/price_books_price_book_validate_entity.php';
        if ($data === null) {
            if ($this->_price_books_price_book_validate === null) {
                $this->_price_books_price_book_validate = new PriceBooksPriceBookValidateEntity($this, null);
            }
            return $this->_price_books_price_book_validate;
        }
        return new PriceBooksPriceBookValidateEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new HubspotCommerceSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
