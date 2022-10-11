import React from "react"
import { FaSearch, FaFile, FaPen } from "react-icons/fa"

import "./style.css"

export default function Table() {
  const dadosTabela = [
    {
      Data: "21/08/2022",
      Regiao: "Santa Maria- DF",
      Endereco: "Ql 15 Lt 22",
      Agente: "Leonardo do Nascimento Araujo",
      Status: "Pendente",
      Documento: "Pendente Documento",
    },
  ]

  return (
    <>
      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th className="topo">Data</th>
              <th className="topo">Região</th>
              <th className="topo">Endereço</th>
              <th className="topo">Agente</th>
              <th className="topo">Status</th>
              <th className="topo"></th>
              <th className="topo"> </th>
              <th className="topo"></th>
              <th className="topo"></th>
            </tr>
          </thead>
          <tbody>
            {dadosTabela.map((dadosTabela) => (
              <tr key={dadosTabela.Data}>
                <td className="topo2">{dadosTabela.Data}</td>
                <td className="topo2">{dadosTabela.Regiao}</td>
                <td className="topo2">{dadosTabela.Endereco}</td>
                <td className="topo2">{dadosTabela.Agente}</td>
                <td className="topo2">{dadosTabela.Status}</td>
                <td className="topo2">{dadosTabela.Documento}</td>
                <td>
                  <FaFile size={20} color="#06B983" />
                </td>
                <td>
                  <FaPen size={20} color=" #C69310" />
                </td>
                <td>
                  <FaSearch size={20} color=" #0B30E0" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
