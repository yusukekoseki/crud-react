import React, { useState } from "react"
import { Navigate, withRouter, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie"
import { tryLogin } from "../../api/auth"


const AuthForm = props => {

  const { direction } = props
  const navigate = useNavigate()
  const [loginInfo, setLoginInfo] = useState({ "email": "", "password": "" })
  const [cookies, setCookie, removeCookie] = useCookies()

  const auth = async () => {
    const TOKEN = await tryLogin(loginInfo)

    if ("access_token" in TOKEN) {
      setCookie("access_token", TOKEN.access_token)
      await navigate(direction)
    }
  }

  return(
    <form>
      <div>
        <label >メールアドレス</label>
        <input name="email" type="email" onChange={e => setLoginInfo({...loginInfo, "email": e.target.value})} placeholder="email"/>
      </div>
      <div>
        <label>パスワード</label>
        <input name="password" type="password" onChange={e => setLoginInfo({...loginInfo, "password": e.target.value})} placeholder="password"/>
      </div>
      <div>
        <button type="button" onClick={() => auth()}>ログイン</button>
      </div>
    </form>
  )
}

export default AuthForm
