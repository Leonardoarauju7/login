import React from "react"

import "./style.css"
export default function FormTabela() {
  return (
    <>
      <div className="container-inputs-tabela">
        <select className="select-tabela">
          <option selected value="regiao">
            Regiao
          </option>
        </select>
        <select className="select-tabela">
          <option selected value="regiao">
            Agente
          </option>
        </select>
        <select className="select-tabela">
          <option selected value="regiao">
            Data inicial
          </option>
        </select>
        <select className="select-tabela">
          <option selected value="regiao">
            Data Final
          </option>
        </select>
        <div className="Radio">
          <input
            id="caixa-radio"
            class="caixa-radio"
            type="radio"
            name="caixa-radio"
            value="radio1"
            checked
          />
          <label for="finalizado" className="nome-input">
            FINALIZADO
          </label>

          <input
            id="caixa-radio"
            class="caixa-radio"
            type="radio"
            name="caixa-radio"
            value="radio2"
          />
          <label for="pendente" className="nome-input">
            PENDENTE
          </label>
        </div>
      </div>
      <div>
        <input
          className="endereco-tabela"
          type="text"
          name=""
          placeholder="Endereço"
        />
      </div>
    </>
  )
}
