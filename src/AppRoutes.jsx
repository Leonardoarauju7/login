import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  //navigate,
} from "react-router-dom"

import React, { useContext } from "react"
import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import { AuthProvider, AuthContext } from "./Context/AuthContext"

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext)

    if (!authenticated) {
      return <Navigate to="/login" />
    }
    return children
  }
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
