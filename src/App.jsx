import React from 'react'
import SignUpPage from './pages/SignUp'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;