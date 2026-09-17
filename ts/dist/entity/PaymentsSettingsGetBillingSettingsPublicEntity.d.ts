import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentsSettingsGetBillingSettingsPublic, PaymentsSettingsGetBillingSettingsPublicLoadMatch, PaymentsSettingsGetBillingSettingsPublicUpdateData } from '../HubspotCommerceTypes';
declare class PaymentsSettingsGetBillingSettingsPublicEntity extends HubspotCommerceEntityBase<PaymentsSettingsGetBillingSettingsPublic> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentsSettingsGetBillingSettingsPublicEntity): PaymentsSettingsGetBillingSettingsPublicEntity;
    load(this: any, reqmatch?: PaymentsSettingsGetBillingSettingsPublicLoadMatch, ctrl?: Control): Promise<PaymentsSettingsGetBillingSettingsPublicEntity>;
    update(this: any, reqdata?: PaymentsSettingsGetBillingSettingsPublicUpdateData, ctrl?: Control): Promise<PaymentsSettingsGetBillingSettingsPublicEntity>;
}
export { PaymentsSettingsGetBillingSettingsPublicEntity };
