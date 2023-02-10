import React, { useState, useEffect } from "react";
import "./styles.css";

import { Card } from "../../components/Card/Card";

export const Home = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudends] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

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

  useEffect(() => {
    fetch("https://api.github.com/users/horaciosdev")
      .then((response) => response.json())
      .then((data) => {
        setUser({ name: data.name, avatar: data.avatar_url });
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />
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
