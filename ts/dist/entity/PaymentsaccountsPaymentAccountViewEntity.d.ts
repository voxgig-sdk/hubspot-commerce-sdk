import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentsaccountsPaymentAccountView, PaymentsaccountsPaymentAccountViewListMatch } from '../HubspotCommerceTypes';
declare class PaymentsaccountsPaymentAccountViewEntity extends HubspotCommerceEntityBase<PaymentsaccountsPaymentAccountView> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentsaccountsPaymentAccountViewEntity): PaymentsaccountsPaymentAccountViewEntity;
    list(this: any, reqmatch?: PaymentsaccountsPaymentAccountViewListMatch, ctrl?: Control): Promise<PaymentsaccountsPaymentAccountViewEntity[]>;
}
export { PaymentsaccountsPaymentAccountViewEntity };
