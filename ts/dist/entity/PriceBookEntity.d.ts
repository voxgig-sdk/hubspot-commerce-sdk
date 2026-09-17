import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PriceBook, PriceBookLoadMatch, PriceBookListMatch, PriceBookCreateData, PriceBookUpdateData } from '../HubspotCommerceTypes';
declare class PriceBookEntity extends HubspotCommerceEntityBase<PriceBook> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PriceBookEntity): PriceBookEntity;
    load(this: any, reqmatch?: PriceBookLoadMatch, ctrl?: Control): Promise<PriceBookEntity>;
    list(this: any, reqmatch?: PriceBookListMatch, ctrl?: Control): Promise<PriceBookEntity[]>;
    create(this: any, reqdata?: PriceBookCreateData, ctrl?: Control): Promise<PriceBookEntity>;
    update(this: any, reqdata?: PriceBookUpdateData, ctrl?: Control): Promise<PriceBookEntity>;
}
export { PriceBookEntity };
