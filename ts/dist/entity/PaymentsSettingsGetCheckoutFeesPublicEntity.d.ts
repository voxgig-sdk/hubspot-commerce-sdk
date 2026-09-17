import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentsSettingsGetCheckoutFeesPublic, PaymentsSettingsGetCheckoutFeesPublicListMatch, PaymentsSettingsGetCheckoutFeesPublicUpdateData } from '../HubspotCommerceTypes';
declare class PaymentsSettingsGetCheckoutFeesPublicEntity extends HubspotCommerceEntityBase<PaymentsSettingsGetCheckoutFeesPublic> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentsSettingsGetCheckoutFeesPublicEntity): PaymentsSettingsGetCheckoutFeesPublicEntity;
    list(this: any, reqmatch?: PaymentsSettingsGetCheckoutFeesPublicListMatch, ctrl?: Control): Promise<PaymentsSettingsGetCheckoutFeesPublicEntity[]>;
    update(this: any, reqdata?: PaymentsSettingsGetCheckoutFeesPublicUpdateData, ctrl?: Control): Promise<PaymentsSettingsGetCheckoutFeesPublicEntity>;
}
export { PaymentsSettingsGetCheckoutFeesPublicEntity };
