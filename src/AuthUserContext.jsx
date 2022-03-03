import React, { createContext, useContext, useState } from "react"

const AuthUserContext = createContext(null)
const AuthOperationContext = createContext({
  login: (_) => console.error("Providerが設定されていません"),
  logout: () => console.error("Providerが設定されていません")
})

const AuthUserProvider= ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  
  const login = async (userId) => {
    // await login() //ログイン処理
    setAuthUser({ userId })
  }
  
  const logout = async () => {
    // await login() //ログアウト処理
    setAuthUser(null)
  }

  return (
    <AuthOperationContext.Provider value={{login, logout}}>
      <AuthUserContext.Provider value={authUser}>
        { children }
      </AuthUserContext.Provider>
    </AuthOperationContext.Provider>
  )
}

export const useAuthUser = () => useContext(AuthUserContext)
export const useLogin = () => useContext(AuthOperationContext).login
export const useLogout = () => useContext(AuthOperationContext).logout

export default AuthUserProvider