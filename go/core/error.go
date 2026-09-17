package core

type HubspotCommerceError struct {
	IsHubspotCommerceError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHubspotCommerceError(code string, msg string, ctx *Context) *HubspotCommerceError {
	return &HubspotCommerceError{
		IsHubspotCommerceError: true,
		Sdk:              "HubspotCommerce",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HubspotCommerceError) Error() string {
	return e.Msg
}
