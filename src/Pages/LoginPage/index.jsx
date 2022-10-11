import React, { useState, useContext } from "react"
import { AuthContext } from "../../Context/Auth"
import "./style.css"

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log("submit", { email, password })
    login(email, password) // integração com o meu contexto e por fim com a minha api!
  }
  return (
    <>
      <div className="container-Login">
        <div className="first-column">
          <h1 className="title1">
            NEOENERGIA
            <h6 className="description">Sistema de monitoração</h6>
            <img className="vetor1" src="/Vector-titulo.png" alt="1" />
            <img className="vetor2" src="/Vector-titulo1.png" alt="2" />
            <img className="vetor3" src="/Vector-titulo1.png" alt="3" />
          </h1>
        </div>

        <div className="second-column">
          <img className="vetorLogin" src="/VectorLogin.png" alt="4" />
          <img className="vetorLogin1" src="/VectorLogin1.png" alt="5" />
          <h1 className="title2">Login</h1>
          <p>{authenticated}</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Usuário</label>
              <input
                type="email"
                id="email"
                placeholder="Usuário"
                name="email"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="passsword">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                name="password"
                value={password}
                onChange={(evento) => setPassword(evento.target.value)}
              />
            </div>
            <div className="actions">
              <button className="Btn-Login" type="submit">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
