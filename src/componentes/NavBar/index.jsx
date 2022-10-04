import React from "react"
import { useContext } from "react"
import { AuthContext } from "../../Context/Auth"

import "./style.css"
export default function NavBar() {
  const { HomePage } = useContext(AuthContext)

  const handleHomePage = () => {
    HomePage()
  }
  const { ListaRegistro } = useContext(AuthContext)

  const handleListaRegistro = () => {
    ListaRegistro()
  }

  const { logout, authenticated } = useContext(AuthContext) // recupero a funcão logout e chamo ela em handleLogout linha 7.

  const handleLogout = () => {
    logout()
  }
  return (
    <>
      <div className="nav-bar">
        <ul class="topnav">
          <li>
            <a class="active" href="#">
              NEOENERGIA
            </a>
          </li>
          <li>
            <a href="#Home" onClick={handleHomePage}>
              Home
            </a>
          </li>
          <li>
            <a href="#ListaRegistros" onClick={handleListaRegistro}>
              Lista de Serviços
            </a>
          </li>
          <li class="right">
            <a href="#Logout" onClick={handleLogout}>
              Sair
            </a>

            <p>{authenticated}</p>
          </li>
        </ul>
      </div>
    </>
  )
}
