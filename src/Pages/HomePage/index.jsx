import React from "react"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

const HomePage = () => {
  const { logout, authenticated } = useContext(AuthContext) // recupero a funcão logout e chamo ela em handleLogout linha 7.

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <h1>HomePage</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default HomePage
