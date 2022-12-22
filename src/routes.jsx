import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from './pages/registerPage';
import HomePage from './pages/homePage'

const RoutesComponent = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default RoutesComponent