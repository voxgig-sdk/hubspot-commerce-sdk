import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentLink, PaymentLinkLoadMatch, PaymentLinkListMatch, PaymentLinkCreateData, PaymentLinkUpdateData } from '../HubspotCommerceTypes';
declare class PaymentLinkEntity extends HubspotCommerceEntityBase<PaymentLink> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentLinkEntity): PaymentLinkEntity;
    load(this: any, reqmatch?: PaymentLinkLoadMatch, ctrl?: Control): Promise<PaymentLinkEntity>;
    list(this: any, reqmatch?: PaymentLinkListMatch, ctrl?: Control): Promise<PaymentLinkEntity[]>;
    create(this: any, reqdata?: PaymentLinkCreateData, ctrl?: Control): Promise<PaymentLinkEntity>;
    update(this: any, reqdata?: PaymentLinkUpdateData, ctrl?: Control): Promise<PaymentLinkEntity>;
}
export { PaymentLinkEntity };
