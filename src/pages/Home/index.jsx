import "./styles.css";

import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Horacio" time="10:23:23" />
      <Card name="Raquel" time="11:23:23" />
      <Card name="Ana" time="12:23:23" />
    </div>
  );
};
