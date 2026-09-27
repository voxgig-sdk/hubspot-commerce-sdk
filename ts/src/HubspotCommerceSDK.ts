// HubspotCommerce Ts SDK

import { AdvancedEntity } from './entity/AdvancedEntity'
import { BasicEntity } from './entity/BasicEntity'
import { BatchEntity } from './entity/BatchEntity'
import { ContractEntity } from './entity/ContractEntity'
import { ContractsContractEntity } from './entity/ContractsContractEntity'
import { ContractsContractChangeEntity } from './entity/ContractsContractChangeEntity'
import { ContractsContractChangePreviewEntity } from './entity/ContractsContractChangePreviewEntity'
import { ContractsContractChangeSummaryEntity } from './entity/ContractsContractChangeSummaryEntity'
import { ContractsQuoteEntity } from './entity/ContractsQuoteEntity'
import { ItemEntity } from './entity/ItemEntity'
import { PaymentLinkEntity } from './entity/PaymentLinkEntity'
import { PaymentMethodsCommercePaymentMethodSettingsPublicEntity } from './entity/PaymentMethodsCommercePaymentMethodSettingsPublicEntity'
import { PaymentsActionResponseWithSingleResultSimplePublicObjectEntity } from './entity/PaymentsActionResponseWithSingleResultSimplePublicObjectEntity'
import { PaymentsCreateManualPaymentPublicEntity } from './entity/PaymentsCreateManualPaymentPublicEntity'
import { PaymentsSettingsGetBillingSettingsPublicEntity } from './entity/PaymentsSettingsGetBillingSettingsPublicEntity'
import { PaymentsSettingsGetCheckoutFeesPublicEntity } from './entity/PaymentsSettingsGetCheckoutFeesPublicEntity'
import { PaymentsSettingsGetPolicySettingsPublicEntity } from './entity/PaymentsSettingsGetPolicySettingsPublicEntity'
import { PaymentsSettingsGetShippingSettingsPublicEntity } from './entity/PaymentsSettingsGetShippingSettingsPublicEntity'
import { PaymentsaccountsPaymentAccountViewEntity } from './entity/PaymentsaccountsPaymentAccountViewEntity'
import { PriceBookEntity } from './entity/PriceBookEntity'
import { PriceBooksBatchResponsePriceBookItemEntity } from './entity/PriceBooksBatchResponsePriceBookItemEntity'
import { PriceBooksCollectionResponsePriceBookItemResponseForwardEntity } from './entity/PriceBooksCollectionResponsePriceBookItemResponseForwardEntity'
import { PriceBooksPriceBookEntity } from './entity/PriceBooksPriceBookEntity'
import { PriceBooksPriceBookItemEntity } from './entity/PriceBooksPriceBookItemEntity'
import { PriceBooksPriceBookValidateEntity } from './entity/PriceBooksPriceBookValidateEntity'

export type * from './HubspotCommerceTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { HubspotCommerceEntityBase } from './HubspotCommerceEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class HubspotCommerceSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('HubspotCommerceSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('HubspotCommerceSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('HubspotCommerceSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Advanced().list()` / `client.Advanced().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Advanced(entopts?: Record<string, any>) {
    const self = this
    return new AdvancedEntity(self, entopts)
  }


  // Entity access: `client.Basic().list()` / `client.Basic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Basic(entopts?: Record<string, any>) {
    const self = this
    return new BasicEntity(self, entopts)
  }


  // Entity access: `client.Batch().list()` / `client.Batch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Batch(entopts?: Record<string, any>) {
    const self = this
    return new BatchEntity(self, entopts)
  }


  // Entity access: `client.Contract().list()` / `client.Contract().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Contract(entopts?: Record<string, any>) {
    const self = this
    return new ContractEntity(self, entopts)
  }


  // Entity access: `client.ContractsContract().list()` / `client.ContractsContract().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContractsContract(entopts?: Record<string, any>) {
    const self = this
    return new ContractsContractEntity(self, entopts)
  }


  // Entity access: `client.ContractsContractChange().list()` / `client.ContractsContractChange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContractsContractChange(entopts?: Record<string, any>) {
    const self = this
    return new ContractsContractChangeEntity(self, entopts)
  }


  // Entity access: `client.ContractsContractChangePreview().list()` / `client.ContractsContractChangePreview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContractsContractChangePreview(entopts?: Record<string, any>) {
    const self = this
    return new ContractsContractChangePreviewEntity(self, entopts)
  }


  // Entity access: `client.ContractsContractChangeSummary().list()` / `client.ContractsContractChangeSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContractsContractChangeSummary(entopts?: Record<string, any>) {
    const self = this
    return new ContractsContractChangeSummaryEntity(self, entopts)
  }


  // Entity access: `client.ContractsQuote().list()` / `client.ContractsQuote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContractsQuote(entopts?: Record<string, any>) {
    const self = this
    return new ContractsQuoteEntity(self, entopts)
  }


  // Entity access: `client.Item().list()` / `client.Item().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Item(entopts?: Record<string, any>) {
    const self = this
    return new ItemEntity(self, entopts)
  }


  // Entity access: `client.PaymentLink().list()` / `client.PaymentLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentLink(entopts?: Record<string, any>) {
    const self = this
    return new PaymentLinkEntity(self, entopts)
  }


  // Entity access: `client.PaymentMethodsCommercePaymentMethodSettingsPublic().list()` / `client.PaymentMethodsCommercePaymentMethodSettingsPublic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentMethodsCommercePaymentMethodSettingsPublic(entopts?: Record<string, any>) {
    const self = this
    return new PaymentMethodsCommercePaymentMethodSettingsPublicEntity(self, entopts)
  }


  // Entity access: `client.PaymentsActionResponseWithSingleResultSimplePublicObject().list()` / `client.PaymentsActionResponseWithSingleResultSimplePublicObject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentsActionResponseWithSingleResultSimplePublicObject(entopts?: Record<string, any>) {
    const self = this
    return new PaymentsActionResponseWithSingleResultSimplePublicObjectEntity(self, entopts)
  }


  // Entity access: `client.PaymentsCreateManualPaymentPublic().list()` / `client.PaymentsCreateManualPaymentPublic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentsCreateManualPaymentPublic(entopts?: Record<string, any>) {
    const self = this
    return new PaymentsCreateManualPaymentPublicEntity(self, entopts)
  }


  // Entity access: `client.PaymentsSettingsGetBillingSettingsPublic().list()` / `client.PaymentsSettingsGetBillingSettingsPublic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentsSettingsGetBillingSettingsPublic(entopts?: Record<string, any>) {
    const self = this
    return new PaymentsSettingsGetBillingSettingsPublicEntity(self, entopts)
  }


  // Entity access: `client.PaymentsSettingsGetCheckoutFeesPublic().list()` / `client.PaymentsSettingsGetCheckoutFeesPublic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentsSettingsGetCheckoutFeesPublic(entopts?: Record<string, any>) {
    const self = this
    return new PaymentsSettingsGetCheckoutFeesPublicEntity(self, entopts)
  }


  // Entity access: `client.PaymentsSettingsGetPolicySettingsPublic().list()` / `client.PaymentsSettingsGetPolicySettingsPublic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentsSettingsGetPolicySettingsPublic(entopts?: Record<string, any>) {
    const self = this
    return new PaymentsSettingsGetPolicySettingsPublicEntity(self, entopts)
  }


  // Entity access: `client.PaymentsSettingsGetShippingSettingsPublic().list()` / `client.PaymentsSettingsGetShippingSettingsPublic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentsSettingsGetShippingSettingsPublic(entopts?: Record<string, any>) {
    const self = this
    return new PaymentsSettingsGetShippingSettingsPublicEntity(self, entopts)
  }


  // Entity access: `client.PaymentsaccountsPaymentAccountView().list()` / `client.PaymentsaccountsPaymentAccountView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentsaccountsPaymentAccountView(entopts?: Record<string, any>) {
    const self = this
    return new PaymentsaccountsPaymentAccountViewEntity(self, entopts)
  }


  // Entity access: `client.PriceBook().list()` / `client.PriceBook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriceBook(entopts?: Record<string, any>) {
    const self = this
    return new PriceBookEntity(self, entopts)
  }


  // Entity access: `client.PriceBooksBatchResponsePriceBookItem().list()` / `client.PriceBooksBatchResponsePriceBookItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriceBooksBatchResponsePriceBookItem(entopts?: Record<string, any>) {
    const self = this
    return new PriceBooksBatchResponsePriceBookItemEntity(self, entopts)
  }


  // Entity access: `client.PriceBooksCollectionResponsePriceBookItemResponseForward().list()` / `client.PriceBooksCollectionResponsePriceBookItemResponseForward().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriceBooksCollectionResponsePriceBookItemResponseForward(entopts?: Record<string, any>) {
    const self = this
    return new PriceBooksCollectionResponsePriceBookItemResponseForwardEntity(self, entopts)
  }


  // Entity access: `client.PriceBooksPriceBook().list()` / `client.PriceBooksPriceBook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriceBooksPriceBook(entopts?: Record<string, any>) {
    const self = this
    return new PriceBooksPriceBookEntity(self, entopts)
  }


  // Entity access: `client.PriceBooksPriceBookItem().list()` / `client.PriceBooksPriceBookItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriceBooksPriceBookItem(entopts?: Record<string, any>) {
    const self = this
    return new PriceBooksPriceBookItemEntity(self, entopts)
  }


  // Entity access: `client.PriceBooksPriceBookValidate().list()` / `client.PriceBooksPriceBookValidate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PriceBooksPriceBookValidate(entopts?: Record<string, any>) {
    const self = this
    return new PriceBooksPriceBookValidateEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new HubspotCommerceSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return HubspotCommerceSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'HubspotCommerce' }
  }

  toString() {
    return 'HubspotCommerce ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = HubspotCommerceSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  HubspotCommerceEntityBase,

  HubspotCommerceSDK,
  SDK,
}


