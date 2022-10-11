import React from "react"
import Table from "../../componentes/Tabela"
import Form from "../../componentes/Form/index"
import NavBar from "../../componentes/NavBar"
import Periodo from "../../componentes/Periodo"
import FormTabela from "../../componentes/FormTabela"
import Geolocalizacao from "../../componentes/geolocalização"
import "./style.css"

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Form />
      <Geolocalizacao />
      <Periodo />
      <FormTabela />
      <Table />
    </>
  )
}

export default HomePage
