import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentsCreateManualPaymentPublic, PaymentsCreateManualPaymentPublicCreateData } from '../HubspotCommerceTypes';
declare class PaymentsCreateManualPaymentPublicEntity extends HubspotCommerceEntityBase<PaymentsCreateManualPaymentPublic> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentsCreateManualPaymentPublicEntity): PaymentsCreateManualPaymentPublicEntity;
    create(this: any, reqdata?: PaymentsCreateManualPaymentPublicCreateData, ctrl?: Control): Promise<PaymentsCreateManualPaymentPublicEntity>;
}
export { PaymentsCreateManualPaymentPublicEntity };
