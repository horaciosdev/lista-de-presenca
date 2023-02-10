import React, { useState, useEffect } from "react";
import "./styles.css";

import { Card, CardProps } from "../../components/Card/Card";

type ProfileResponse = {
  name: string;
  avatar_url: string;
};

type User = {
  name: string;
  avatar: string;
};

export const Home = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudends] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

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
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/horaciosdev");
      const data = (await response.json()) as ProfileResponse;

      setUser({ name: data.name, avatar: data.avatar_url });
    }

    fetchData();
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
