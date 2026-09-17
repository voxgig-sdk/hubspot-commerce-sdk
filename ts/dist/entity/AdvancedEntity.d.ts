import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { Advanced, AdvancedCreateData } from '../HubspotCommerceTypes';
declare class AdvancedEntity extends HubspotCommerceEntityBase<Advanced> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: AdvancedEntity): AdvancedEntity;
    create(this: any, reqdata?: AdvancedCreateData, ctrl?: Control): Promise<AdvancedEntity>;
}
export { AdvancedEntity };
