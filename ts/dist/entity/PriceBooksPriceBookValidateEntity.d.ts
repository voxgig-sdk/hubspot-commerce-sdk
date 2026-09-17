import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PriceBooksPriceBookValidate, PriceBooksPriceBookValidateCreateData } from '../HubspotCommerceTypes';
declare class PriceBooksPriceBookValidateEntity extends HubspotCommerceEntityBase<PriceBooksPriceBookValidate> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PriceBooksPriceBookValidateEntity): PriceBooksPriceBookValidateEntity;
    create(this: any, reqdata?: PriceBooksPriceBookValidateCreateData, ctrl?: Control): Promise<PriceBooksPriceBookValidateEntity>;
}
export { PriceBooksPriceBookValidateEntity };
