import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { Contract, ContractLoadMatch, ContractCreateData, ContractUpdateData } from '../HubspotCommerceTypes';
declare class ContractEntity extends HubspotCommerceEntityBase<Contract> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: ContractEntity): ContractEntity;
    load(this: any, reqmatch?: ContractLoadMatch, ctrl?: Control): Promise<ContractEntity>;
    create(this: any, reqdata?: ContractCreateData, ctrl?: Control): Promise<ContractEntity>;
    update(this: any, reqdata?: ContractUpdateData, ctrl?: Control): Promise<ContractEntity>;
}
export { ContractEntity };
