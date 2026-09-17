import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { ContractsQuote, ContractsQuoteCreateData } from '../HubspotCommerceTypes';
declare class ContractsQuoteEntity extends HubspotCommerceEntityBase<ContractsQuote> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: ContractsQuoteEntity): ContractsQuoteEntity;
    create(this: any, reqdata?: ContractsQuoteCreateData, ctrl?: Control): Promise<ContractsQuoteEntity>;
}
export { ContractsQuoteEntity };
