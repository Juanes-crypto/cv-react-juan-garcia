// src/components/CabeceraCV.jsx
import React from "react";
import "./estilo.css";
export default function CabeceraCV({ nombre, profesion }) {
  return (
    <header class="cabecera">
      <h1>{nombre}</h1>
      <h2>{profesion}</h2>
      <hr />
    </header>
  );
}
