import React from "react"
import "./style.css"

export default function Radio() {
  return (
    <>
      <input
        id="caixa-radio"
        class="caixa-radio"
        type="radio"
        name="caixa-radio"
        value="caixa-finalizado"
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
        value="caixa-pendente"
      />
      <label for="pendente" className="nome-input">
        PENDENTE
      </label>
    </>
  )
}
