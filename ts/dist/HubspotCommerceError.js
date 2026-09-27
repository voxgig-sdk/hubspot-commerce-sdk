"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubspotCommerceError = void 0;
class HubspotCommerceError extends Error {
    isHubspotCommerceError = true;
    sdk = 'HubspotCommerce';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.HubspotCommerceError = HubspotCommerceError;
//# sourceMappingURL=HubspotCommerceError.js.map