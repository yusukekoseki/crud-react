import { post, patch, put, get } from "./rest"


const domain = process.env.REACT_APP_RESTAPI_DOMAIN

export const tryLogin = body => post(domain + "/registration/v1/auth/login", body)
export const checkAccessToken = token => put(domain + "/registration/v1/auth/verify-token", { access_token: token }, token)