import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { Item, ItemRemoveMatch } from '../HubspotCommerceTypes';
declare class ItemEntity extends HubspotCommerceEntityBase<Item> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: ItemEntity): ItemEntity;
    remove(this: any, reqmatch?: ItemRemoveMatch, ctrl?: Control): Promise<ItemEntity>;
}
export { ItemEntity };
