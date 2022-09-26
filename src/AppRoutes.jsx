import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"

import { AuthProvider, AuthContext } from "./Context/Auth"

const Private = ({ children }) => {
  const { authenticated } = useContext(AuthContext)
  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return children
}

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes
