import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PriceBooksPriceBookItem, PriceBooksPriceBookItemLoadMatch, PriceBooksPriceBookItemCreateData, PriceBooksPriceBookItemUpdateData } from '../HubspotCommerceTypes';
declare class PriceBooksPriceBookItemEntity extends HubspotCommerceEntityBase<PriceBooksPriceBookItem> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PriceBooksPriceBookItemEntity): PriceBooksPriceBookItemEntity;
    load(this: any, reqmatch?: PriceBooksPriceBookItemLoadMatch, ctrl?: Control): Promise<PriceBooksPriceBookItemEntity>;
    create(this: any, reqdata?: PriceBooksPriceBookItemCreateData, ctrl?: Control): Promise<PriceBooksPriceBookItemEntity>;
    update(this: any, reqdata?: PriceBooksPriceBookItemUpdateData, ctrl?: Control): Promise<PriceBooksPriceBookItemEntity>;
}
export { PriceBooksPriceBookItemEntity };
