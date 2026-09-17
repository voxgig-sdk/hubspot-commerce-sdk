import { HubspotCommerceEntityBase } from '../HubspotCommerceEntityBase';
import type { HubspotCommerceSDK } from '../HubspotCommerceSDK';
import type { Control } from '../types';
import type { PaymentsActionResponseWithSingleResultSimplePublicObject, PaymentsActionResponseWithSingleResultSimplePublicObjectListMatch } from '../HubspotCommerceTypes';
declare class PaymentsActionResponseWithSingleResultSimplePublicObjectEntity extends HubspotCommerceEntityBase<PaymentsActionResponseWithSingleResultSimplePublicObject> {
    constructor(client: HubspotCommerceSDK, entopts: any);
    make(this: PaymentsActionResponseWithSingleResultSimplePublicObjectEntity): PaymentsActionResponseWithSingleResultSimplePublicObjectEntity;
    list(this: any, reqmatch?: PaymentsActionResponseWithSingleResultSimplePublicObjectListMatch, ctrl?: Control): Promise<PaymentsActionResponseWithSingleResultSimplePublicObjectEntity[]>;
}
export { PaymentsActionResponseWithSingleResultSimplePublicObjectEntity };
