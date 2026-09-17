import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PriceBooksBatchResponsePriceBookItem, PriceBooksBatchResponsePriceBookItemCreateData } from '../HubspotCommerceTypes';
declare class PriceBooksBatchResponsePriceBookItemEntity extends HubspotCommerceEntityBase<PriceBooksBatchResponsePriceBookItem> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PriceBooksBatchResponsePriceBookItemEntity): PriceBooksBatchResponsePriceBookItemEntity;
    create(this: any, reqdata?: PriceBooksBatchResponsePriceBookItemCreateData, ctrl?: Control): Promise<PriceBooksBatchResponsePriceBookItemEntity>;
}
export { PriceBooksBatchResponsePriceBookItemEntity };
