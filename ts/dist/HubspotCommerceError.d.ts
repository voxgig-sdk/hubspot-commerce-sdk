import { Context } from './Context';
declare class HubspotCommerceError extends Error {
    isHubspotCommerceError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HubspotCommerceError };
