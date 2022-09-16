import {
  BrowserRouter as Router,
  Route,
  Routes,
  //navigate,
} from "react-router-dom"

import React, { useState } from "react"
import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import { AuthProvider } from "./Context/AuthContext"

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes
