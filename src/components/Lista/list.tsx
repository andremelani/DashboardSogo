import { useEffect, useState } from "react";
import "./listcomponent.scss";

type Contract = {
  numContrato: string;
  dataRegistro: string;
  dataValidade: string;
  nome: string;
  sobrenome: string;
  cpf: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
  id: string;
};

export function List({ event }: any) {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [itensPerPage, setItensPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  //Constantes que seta a paginação da lista de Contratos
  const pages = Math.ceil(contracts.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = contracts.slice(startIndex, endIndex);

  //UseEffect que busca as informações registradas na MockAPI
  useEffect(() => {
    fetch("http://localhost:5000/contratos")
      .then((response) => response.json())
      .then((data) => {
        setContracts(data);
      });
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Número de Contrato</th>
            <th>Registro</th>
            <th>Validade</th>
            <th>Vencimento</th>
          </tr>
        </thead>
        {currentItens.map((contrato) => {
          //Constantes que pegam a data de validade do contrato e calculam quantos dias de diferença possui com a data atual
          const data = contrato.dataValidade;
          const formatData = data.replace(/(\d{2})(\/)(\d{2})/, "$3$2$1");
          const newData = new Date(formatData);
          const d1 = new Date();
          const d2 = new Date(newData);
          const timeDiff = Math.abs(d2.getTime() - d1.getTime());
          const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          function Days() {
            if (d1 > d2 && timeDiff > 86400000) {
              return (
                <p style={{ color: "#f5222d" }}>
                  Venceu a {diffDays - 1} dia(s)
                </p>
              );
            } else if (d2 > d1 && diffDays <= 7) {
              return <p style={{ color: "#f0e929" }}>Em {diffDays} dia(s)</p>;
            } else if (timeDiff <= 86400000) {
              return <p style={{ color: "#f0e929" }}>Vence hoje</p>;
            } else {
              return <p>Em {diffDays} dia(s)</p>;
            }
          }

          return (
            <>
              <tbody key={data}>
                <tr>
                  <td>{contrato.id}</td>
                  <td>{contrato.numContrato}</td>
                  <td>{contrato.dataRegistro}</td>
                  <td>{contrato.dataValidade}</td>
                  <td>{Days()}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <div
        style={{
          display: "flex",
          width: "85%",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              className={index === currentPage ? `${"buttonActive"}` : ""}
              value={index}
              onClick={(e: any) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default List;
