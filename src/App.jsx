import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import CheckAccessToken from "./middlewares/CheckAccessToken"
import HomePage from './pages/Home'
import LoginPage from './pages/Login'


const App = () => {
  return (
    <BrowserRouter>
      <CheckAccessToken>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </CheckAccessToken>
    </BrowserRouter>
  )
}

export default App;