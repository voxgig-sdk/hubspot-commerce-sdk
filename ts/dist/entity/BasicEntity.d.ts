import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { Basic, BasicRemoveMatch } from '../HubspotCommerceTypes';
declare class BasicEntity extends HubspotCommerceEntityBase<Basic> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: BasicEntity): BasicEntity;
    remove(this: any, reqmatch?: BasicRemoveMatch, ctrl?: Control): Promise<BasicEntity>;
}
export { BasicEntity };
