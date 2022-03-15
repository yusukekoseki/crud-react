import React, { useState, useEffect } from 'react'
import { useCookies } from "react-cookie"
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { postData } from "../api/rest"


const LoginPage = () => {

  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies()

  const auth = user => {

    const setToken = async () => {
      const TOKEN = await postData(process.env.REACT_APP_RESTAPI_DOMAIN + "/registration/v1/auth/login", user)
      setCookie("access_token", TOKEN.access_token)
    }
    setToken()

    navigate("/home")
  }

  return (
    <>
      <h1>ログイン</h1>
      <form
        method="post"
        onSubmit={e => auth({"email": e.target[0].value, "password": e.target[1].value})}
      >
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email"/>
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password"/>
        </div>
        <div>
          <button>
            ログイン
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginPage