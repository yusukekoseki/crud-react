import { post, patch, put, get } from "./rest"


const endpoint = process.env.REACT_APP_RESTAPI_DOMAIN + "/registration/v1/aircrafts"

export const getAircraftList = token => get(endpoint, token)
export const registerAircraft = (body, token) => post(endpoint, body, token)
export const updateAircraft = (id, body, token) => patch(endpoint + "/" + id, body, token)
export const deleteAircraft = (id, token) => put(endpoint + "/" + id, {}, token)