import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NgoLoginPage from './pages/NgoLoginPage'

export default function App(){
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="home" element={<LandingPage />} />
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/ngo-login" element={<NgoLoginPage/>} />
      </Routes>
    </div>
  )
}
