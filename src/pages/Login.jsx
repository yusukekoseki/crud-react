import React from 'react'
import AuthForm from "../containers/login/AuthForm"


const LoginPage = () => {

  return (
    <>
      <h1>ログイン</h1>
      <AuthForm direction={"/home"}/>
    </>
  )
}

export default LoginPage