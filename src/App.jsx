import React from 'react'
import SignUpPage from './pages/SignUp'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;