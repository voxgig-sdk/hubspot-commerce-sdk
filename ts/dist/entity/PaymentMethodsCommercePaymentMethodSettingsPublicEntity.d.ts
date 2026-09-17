import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentMethodsCommercePaymentMethodSettingsPublic, PaymentMethodsCommercePaymentMethodSettingsPublicListMatch, PaymentMethodsCommercePaymentMethodSettingsPublicUpdateData } from '../HubspotCommerceTypes';
declare class PaymentMethodsCommercePaymentMethodSettingsPublicEntity extends HubspotCommerceEntityBase<PaymentMethodsCommercePaymentMethodSettingsPublic> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentMethodsCommercePaymentMethodSettingsPublicEntity): PaymentMethodsCommercePaymentMethodSettingsPublicEntity;
    list(this: any, reqmatch?: PaymentMethodsCommercePaymentMethodSettingsPublicListMatch, ctrl?: Control): Promise<PaymentMethodsCommercePaymentMethodSettingsPublicEntity[]>;
    update(this: any, reqdata?: PaymentMethodsCommercePaymentMethodSettingsPublicUpdateData, ctrl?: Control): Promise<PaymentMethodsCommercePaymentMethodSettingsPublicEntity>;
}
export { PaymentMethodsCommercePaymentMethodSettingsPublicEntity };
