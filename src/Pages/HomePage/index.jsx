import React from "react"
import { useContext } from "react"
import { AuthContext } from "../../Context/Auth"
import "./style.css"

const HomePage = () => {
  const { logout, authenticated } = useContext(AuthContext) // recupero a funcão logout e chamo ela em handleLogout linha 7.

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <div className="nav-bar">
        <ul>
          <li>
            <a>NeoEnergia |</a>
          </li>
          <li>
            <a>Home |</a>
          </li>
          <li>
            <a>Lista de registros |</a>
          </li>
        </ul>
      </div>
      <button onClick={handleLogout}>Sair</button>

      <p>{authenticated}</p>
    </>
  )
}

export default HomePage
