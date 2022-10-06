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
    </>
  )
}
