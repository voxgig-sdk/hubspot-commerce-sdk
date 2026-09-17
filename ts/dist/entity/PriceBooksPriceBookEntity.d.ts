import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PriceBooksPriceBook, PriceBooksPriceBookCreateData } from '../HubspotCommerceTypes';
declare class PriceBooksPriceBookEntity extends HubspotCommerceEntityBase<PriceBooksPriceBook> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PriceBooksPriceBookEntity): PriceBooksPriceBookEntity;
    create(this: any, reqdata?: PriceBooksPriceBookCreateData, ctrl?: Control): Promise<PriceBooksPriceBookEntity>;
}
export { PriceBooksPriceBookEntity };
