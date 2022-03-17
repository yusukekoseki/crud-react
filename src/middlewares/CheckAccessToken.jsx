import React,  { useState, useEffect } from "react"
import { Navigate, withRouter, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie"
import { putData } from "../api/rest"
import LoginPage from "../pages/Login"


const check_token_endpoint = process.env.REACT_APP_RESTAPI_DOMAIN + "/registration/v1/auth/verify-token"

const CheckAccessToken = props => {

  const { children } = props
  const navigate = useNavigate()
  const [cookies, _, __] = useCookies()
  const access_info = {
    access_token: cookies.access_token
  }

  useEffect(() => {
    (async () => {
      const res = await putData(check_token_endpoint, access_info, cookies.access_token)
      if (res.message === "Invalid Token") navigate("/login")
    })()
  }, [])

  return <> {children} </>
}

export default CheckAccessToken