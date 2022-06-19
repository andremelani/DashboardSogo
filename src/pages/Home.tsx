import { useEffect, useState } from "react";
import { Card } from "../components/Card/card";
import { Title } from "../components/Title/Title";
import "../components/Dashboard/dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
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

  const [contracts, setContracts] = useState<Contract[]>([]);

  const items = contracts.length;

  useEffect(() => {
    fetch("http://localhost:5000/contratos")
      .then((response) => response.json())
      .then((data) => {
        setContracts(data);
      });
  }, []);
  return (
    <>
      <Title text="Dashboard" size="large" />
      <div className="cardArea">
        <Card type="primary">
          <div className="titulo">Contratos Cadastrados</div>
          <div className="info">
            <FontAwesomeIcon icon={faChartColumn} className="icon" />
            <div className="contratos">{items}</div>
          </div>
        </Card>
        <Card type="secondary">
          <div className="titulo">Contratos a Vencer</div>
          <div className="info">
            <FontAwesomeIcon icon={faChartColumn} className="icon" />
            {contracts.map((contrato) => {
              const data = contrato.dataValidade;
              const formatData = data.replace(/(\d{2})(\/)(\d{2})/, "$3$2$1");
              const newData = new Date(formatData);
              const d1 = new Date();
              const d2 = new Date(newData);
              const timeDiff = Math.abs(d2.getTime() - d1.getTime());
              const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
              var count = 0;
              function Days() {
                if (d2 > d1 && diffDays <= 7) {
                  count++
                  return <div className="contratos"> {count}</div>;
                }
              }

              return Days();
            })}
          </div>
        </Card>
        <Card type="tertiary">
          <div className="titulo">Tempo de Prestação de Serviço</div>
          <div className="info">
            <FontAwesomeIcon icon={faChartColumn} className="icon" />
            <div className="dias">15/dias</div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
