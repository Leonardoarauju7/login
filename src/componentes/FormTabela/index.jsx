import React from "react"
import Radio from "../../componentes/Radio"
import "./style.css"
export default function FormTabela() {
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
          <option selected value="regiao">
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
