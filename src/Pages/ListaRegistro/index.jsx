import React from "react"
import NavBar from "../../componentes/NavBar"

import "./style.css"

export default function ListaRegistro() {
  return (
    <>
      <NavBar />
      <div>
        <div className="container">
          <div className="box">
            <h1 className="Title-lista-servicos">Romma empreendimento LTDA</h1>
            <table className="form-serviços">
              <thead>
                <tr> Cliente </tr>
                <br />
                <tr> Endereço </tr>
                <br />
                <tr>Conta </tr>
                <br />
                <tr> Telefone</tr>
                <br />
                <tr> Responsável</tr>
                <br />
              </thead>
            </table>
            <div className="btn3">
              <button className="Btn-lista-servicos">Transmitir</button>
            </div>
          </div>
          <div className="box1">
            <table className="form-serviços2">
              <thead>
                <tr> Data do Atendimento </tr>
                <br />
                <tr> Agente </tr>
                <br />
                <tr> Telefone </tr>
                <br />
                <tr> Cordenadas </tr>
                <br />

                <div className="container-geo2"></div>
                <tr>Ocorrências</tr>
                <br />
                <li>Ninguém no local</li>
                <br />
                <li>Endereço errado</li>
                <br />
                <li>Não quis receber</li>
                <br />
                <li>Não quis assinar</li>
                <br />

                <div className="p-ocorrencias">
                  <p className="text-ocorrencias">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  <div className="assinatura-digital"></div>
                </div>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
