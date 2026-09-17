import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { ContractsContractChangePreview, ContractsContractChangePreviewCreateData } from '../HubspotCommerceTypes';
declare class ContractsContractChangePreviewEntity extends HubspotCommerceEntityBase<ContractsContractChangePreview> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: ContractsContractChangePreviewEntity): ContractsContractChangePreviewEntity;
    create(this: any, reqdata?: ContractsContractChangePreviewCreateData, ctrl?: Control): Promise<ContractsContractChangePreviewEntity>;
}
export { ContractsContractChangePreviewEntity };
