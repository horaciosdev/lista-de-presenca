import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card/Card";

export const Home = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudends] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudends((prevState) => [newStudent, ...prevState]);
  }

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Horácio</strong>
          <img src="https://github.com/horaciosdev.png" alt="" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Card name={student.name} time={student.time} key={student.time} />
      ))}
    </div>
  );
};
