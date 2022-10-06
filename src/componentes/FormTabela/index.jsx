import React from "react"

import "./style.css"
export default function FormTabela() {
  const dadosInput = [
    {
      regiao: "santa maria ",
      Agente: "leonardo",
      DataInicial: "",
      DataFinal: "",
      Finalizado: "Finalizado",
      Pendente: "pendente",
    },
  ]
  return (
    <>
      <div className="container-inputs">
        <select className="select">
          <option selected value="regiao">
            Regiao
          </option>
        </select>
        <select className="select">
          <option selected value="regiao">
            Agente
          </option>
        </select>
        <select className="select">
          {" "}
          <option selected value="regiao">
            {" "}
            Data inicial
          </option>
        </select>
        <select className="select">
          <option selected value="regiao">
            Data Final
          </option>
        </select>
        <Radio />
      </div>
    </>
  )
}
