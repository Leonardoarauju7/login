import React from "react"

import "./style.css"

export default function Input() {
  return (
    <>
      <div className="container-inputs-geo">
        <select className="select-geo">
          <option selected value="regiao">
            Regiao
          </option>
          <option value="brasilia">Brasilia</option>
        </select>
        <input
          className="endereco-geo"
          type="text"
          name="endereço"
          placeholder="Endereço"
        />
        <select className="select-geo">
          <option selected value="agente">
            Agente
          </option>
        </select>
        <button className="btnhome">Incluir carga</button>
        <button className="btnhome1">Atribuir</button>
      </div>
    </>
  )
}
