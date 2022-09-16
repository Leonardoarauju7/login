import {
  BrowserRouter as Router,
  Route,
  Routes,
  navigate,
} from "react-router-dom"

import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
