import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { ContractsContractChange, ContractsContractChangeLoadMatch, ContractsContractChangeCreateData, ContractsContractChangeUpdateData } from '../HubspotCommerceTypes';
declare class ContractsContractChangeEntity extends HubspotCommerceEntityBase<ContractsContractChange> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: ContractsContractChangeEntity): ContractsContractChangeEntity;
    load(this: any, reqmatch?: ContractsContractChangeLoadMatch, ctrl?: Control): Promise<ContractsContractChangeEntity>;
    create(this: any, reqdata?: ContractsContractChangeCreateData, ctrl?: Control): Promise<ContractsContractChangeEntity>;
    update(this: any, reqdata?: ContractsContractChangeUpdateData, ctrl?: Control): Promise<ContractsContractChangeEntity>;
}
export { ContractsContractChangeEntity };
