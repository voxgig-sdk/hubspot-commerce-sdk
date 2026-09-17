<?php
declare(strict_types=1);

// HubspotCommerce SDK base feature

class HubspotCommerceBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HubspotCommerceContext $ctx, array $options): void {}
    public function PostConstruct(HubspotCommerceContext $ctx): void {}
    public function PostConstructEntity(HubspotCommerceContext $ctx): void {}
    public function SetData(HubspotCommerceContext $ctx): void {}
    public function GetData(HubspotCommerceContext $ctx): void {}
    public function GetMatch(HubspotCommerceContext $ctx): void {}
    public function SetMatch(HubspotCommerceContext $ctx): void {}
    public function PrePoint(HubspotCommerceContext $ctx): void {}
    public function PreSpec(HubspotCommerceContext $ctx): void {}
    public function PreRequest(HubspotCommerceContext $ctx): void {}
    public function PreResponse(HubspotCommerceContext $ctx): void {}
    public function PreResult(HubspotCommerceContext $ctx): void {}
    public function PreDone(HubspotCommerceContext $ctx): void {}
    public function PreUnexpected(HubspotCommerceContext $ctx): void {}
}
