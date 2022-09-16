import React from "react"
import { useEffect, useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { getUsers } from "../../services/api"

const HomePage = () => {
  const { logout } = useContext(AuthContext) // recupero a funcão logout e chamo ela em handleLogout linha 7.
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await getUsers()
      setUsers(response.data)
      setLoading(false)
    })()
  }, [])

  const handleLogout = () => {
    logout()
  }

  if (loading) {
    return <div className="loading"> Carregando dados...</div>
  }

  return (
    <>
      <h1>HomePage</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user._id} - {user.email}
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage
