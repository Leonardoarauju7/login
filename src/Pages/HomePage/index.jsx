import React from "react"
import Table from "../../componentes/Tabela"
import Form from "../../componentes/Form/index"
import NavBar from "../../componentes/NavBar"
import Periodo from "../../componentes/Periodo"
import FormTabela from "../../componentes/FormTabela"

import "./style.css"

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Form />
      <div className="container-geo"></div>
      <Periodo />
      <div>
        <FormTabela />

        <div className="enderecoSegundo">
          <input
            className="endereco2"
            type="text"
            name="endereço"
            placeholder="Endereço"
          />
        </div>
      </div>

      <Table />
    </>
  )
}

export default HomePage
