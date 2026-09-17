import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { ContractsContract, ContractsContractCreateData } from '../HubspotCommerceTypes';
declare class ContractsContractEntity extends HubspotCommerceEntityBase<ContractsContract> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: ContractsContractEntity): ContractsContractEntity;
    create(this: any, reqdata?: ContractsContractCreateData, ctrl?: Control): Promise<ContractsContractEntity>;
}
export { ContractsContractEntity };
