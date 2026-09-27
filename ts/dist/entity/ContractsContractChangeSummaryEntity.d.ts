import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { ContractsContractChangeSummary, ContractsContractChangeSummaryListMatch } from '../HubspotCommerceTypes';
declare class ContractsContractChangeSummaryEntity extends HubspotCommerceEntityBase<ContractsContractChangeSummary> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: ContractsContractChangeSummaryEntity): ContractsContractChangeSummaryEntity;
    list(this: any, reqmatch?: ContractsContractChangeSummaryListMatch, ctrl?: Control): Promise<ContractsContractChangeSummaryEntity[]>;
}
export { ContractsContractChangeSummaryEntity };
