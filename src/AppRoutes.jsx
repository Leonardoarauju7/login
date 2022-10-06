import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom"

import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import ListaRegistro from "./Pages/ListaRegistro"

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
          <Route exact path="/ListaRegistro" element={<ListaRegistro />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes
