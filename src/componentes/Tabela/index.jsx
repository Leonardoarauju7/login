import { FaSearch, FaFile, FaPen } from "react-icons/fa"
import "./style.css"

export default function Table() {
  const dadosTabela = [
    {
      Data: "20/20/2020",
      Região: "Santa Maria-DF",
      Endereço: "Qr 35 conjunto G casa 31 ",
      Agente: "Leonardo do nascimento Araujo",
      Status: "PENDENTE",
      Pendente: "Pendente Documento",
    },
    {
      Data: "20/20/2020",
      Região: "Santa Maria-DF",
      Endereço: "Qr 35 conjunto G casa 31 ",
      Agente: "Leonardo do nascimento Araujo",
      Status: "FINALIZADO",
      Pendente: "Finalizado Documento",
    },
    {
      Data: "20/20/2020",
      Região: "Santa Maria-DF",
      Endereço: "Qr 35 conjunto G casa 31 ",
      Agente: "Leonardo do nascimento Araujo",
      Status: "PENDENTE",
      Pendente: "Pendente Documento",
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
              <th className="topo">Pendente</th>
              <th className="topo">
                {" "}
                <FaFile size={20} color="#06B983" />
              </th>
              <th className="topo">
                <FaPen size={20} color=" #C69310" />
              </th>
              <th className="topo">
                <FaSearch size={20} color=" #0B30E0" />
              </th>
            </tr>
          </thead>
          <tbody>
            {dadosTabela.map((dadosTabela) => (
              <tr key={dadosTabela.Data}>
                <td className="topo2">{dadosTabela.Data}</td>
                <td className="topo2">{dadosTabela.Região}</td>
                <td className="topo2">{dadosTabela.Endereço}</td>
                <td className="topo2">{dadosTabela.Agente}</td>
                <td className="topo2">{dadosTabela.Status}</td>
                <td className="topo2">{dadosTabela.Pendente}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
