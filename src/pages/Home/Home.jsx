import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card/Card";

export const Home = () => {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Horacio" time="10:23:23" />
      <Card name="Raquel" time="11:23:23" />
      <Card name="Ana" time="12:23:23" />
    </div>
  );
};
