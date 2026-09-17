import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { Batch, BatchCreateData } from '../HubspotCommerceTypes';
declare class BatchEntity extends HubspotCommerceEntityBase<Batch> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: BatchEntity): BatchEntity;
    create(this: any, reqdata?: BatchCreateData, ctrl?: Control): Promise<BatchEntity>;
}
export { BatchEntity };
