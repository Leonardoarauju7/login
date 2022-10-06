import React from "react"
import { FaCalendar } from "react-icons/fa"
import "./style.css"

export default function Periodo() {
  return (
    <>
      <div className="periodo-referente">
        <p>Período referente a</p>
      </div>
      <div className="referente">
        {" "}
        <FaCalendar className="icon-calendar" size={26} color="#06B983" />
        <text className="data-referente">
          01 de agosto de 2022 / 31 de agosto de 2022
        </text>
      </div>
    </>
  )
}
