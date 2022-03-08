import React from 'react';
import SignUpPage from './container/SignUpPage'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from './container/HomePage';
import LoginPage from './container/LoginPage';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}


export default App;