import React,  { useState } from "react"
import { Navigate, withRouter, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie"
import { checkAccessToken } from "../apis/auth"
import LoginPage from "../pages/Login"
import { useAsyncEffect } from "../utils/hook"


const CheckAccessToken = props => {

  const { children } = props
  const navigate = useNavigate()
  const [cookies, _, __] = useCookies()

  useAsyncEffect(async () => {
    const res = await checkAccessToken(cookies.access_token)
    if (res.message === "Invalid Token") navigate("/login")
  }, [])

  return <> {children} </>
}

export default CheckAccessToken