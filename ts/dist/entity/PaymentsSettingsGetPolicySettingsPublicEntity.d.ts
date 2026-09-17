import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentsSettingsGetPolicySettingsPublic, PaymentsSettingsGetPolicySettingsPublicLoadMatch, PaymentsSettingsGetPolicySettingsPublicUpdateData } from '../HubspotCommerceTypes';
declare class PaymentsSettingsGetPolicySettingsPublicEntity extends HubspotCommerceEntityBase<PaymentsSettingsGetPolicySettingsPublic> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentsSettingsGetPolicySettingsPublicEntity): PaymentsSettingsGetPolicySettingsPublicEntity;
    load(this: any, reqmatch?: PaymentsSettingsGetPolicySettingsPublicLoadMatch, ctrl?: Control): Promise<PaymentsSettingsGetPolicySettingsPublicEntity>;
    update(this: any, reqdata?: PaymentsSettingsGetPolicySettingsPublicUpdateData, ctrl?: Control): Promise<PaymentsSettingsGetPolicySettingsPublicEntity>;
}
export { PaymentsSettingsGetPolicySettingsPublicEntity };
