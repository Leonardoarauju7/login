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
        <ul class="topnav">
          <li>
            <a class="active" href="#">
              NEOENERGIA
            </a>
          </li>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Lista de servicos">Lista de Serviços</a>
          </li>
          <li class="right">
            <a href="#Logout" onClick={handleLogout}>
              Sair
            </a>

            <p>{authenticated}</p>
          </li>
        </ul>
      </div>
      <div>
        <div className="container-inputs">
          <select className="select">
            <option selected value="regiao">
              Regiao
            </option>
            <option value="brasilia">Brasilia</option>
          </select>
          <input
            className="endereco"
            type="text"
            name="endereço"
            placeholder="Endereço"
          />
          <select className="select">
            <option selected value="agente">
              Agente
            </option>
          </select>
          <button className="btnhome">Incluir carga</button>
          <button className="btnhome1">Atribuir</button>
        </div>
        <div className="container-geo"></div>
        <div className="periodo-referente">
          <p>Período referente a</p>
        </div>
      </div>
    </>
  )
}

export default HomePage
