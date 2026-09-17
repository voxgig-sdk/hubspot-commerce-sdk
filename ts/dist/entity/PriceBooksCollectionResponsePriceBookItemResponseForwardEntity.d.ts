import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PriceBooksCollectionResponsePriceBookItemResponseForward, PriceBooksCollectionResponsePriceBookItemResponseForwardListMatch } from '../HubspotCommerceTypes';
declare class PriceBooksCollectionResponsePriceBookItemResponseForwardEntity extends HubspotCommerceEntityBase<PriceBooksCollectionResponsePriceBookItemResponseForward> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PriceBooksCollectionResponsePriceBookItemResponseForwardEntity): PriceBooksCollectionResponsePriceBookItemResponseForwardEntity;
    list(this: any, reqmatch?: PriceBooksCollectionResponsePriceBookItemResponseForwardListMatch, ctrl?: Control): Promise<PriceBooksCollectionResponsePriceBookItemResponseForwardEntity[]>;
}
export { PriceBooksCollectionResponsePriceBookItemResponseForwardEntity };
