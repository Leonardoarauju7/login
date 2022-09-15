import React, { useState } from "react"
import "./style.css"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log("submit", { email, password })
  }
  return (
    <div id="login">
      <h1 className="title">Login do sistema</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
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
          <button type="submit">Senha</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
