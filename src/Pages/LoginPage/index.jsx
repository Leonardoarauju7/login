import React from "react"
import "./style.css"

const LoginPage = () => {
  return (
    <div id="login">
      <h1 className="title">Login do sistema</h1>
      <form className="form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" name="email" />
        </div>
        <div className="field">
          <label htmlFor="passsword">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            name="password"
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
