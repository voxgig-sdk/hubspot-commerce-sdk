import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentsSettingsGetShippingSettingsPublic, PaymentsSettingsGetShippingSettingsPublicListMatch, PaymentsSettingsGetShippingSettingsPublicUpdateData } from '../HubspotCommerceTypes';
declare class PaymentsSettingsGetShippingSettingsPublicEntity extends HubspotCommerceEntityBase<PaymentsSettingsGetShippingSettingsPublic> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentsSettingsGetShippingSettingsPublicEntity): PaymentsSettingsGetShippingSettingsPublicEntity;
    list(this: any, reqmatch?: PaymentsSettingsGetShippingSettingsPublicListMatch, ctrl?: Control): Promise<PaymentsSettingsGetShippingSettingsPublicEntity[]>;
    update(this: any, reqdata?: PaymentsSettingsGetShippingSettingsPublicUpdateData, ctrl?: Control): Promise<PaymentsSettingsGetShippingSettingsPublicEntity>;
}
export { PaymentsSettingsGetShippingSettingsPublicEntity };
