import "./experiencia.css";
const exp = [
  { id:1,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",
  },

  { id:2,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

  { id:3,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

  { id:4,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

  { id:5,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

  { id:6,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

  { id:7,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

  { id:8,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

  { id:9,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

  { id:10,
    cargo: "empacador",
    empresa: "merkahorro",
    año: 2024,
    descripcion: "Empacar los mercados de las personas",},

];
export default function Experiencia() {
  return (
    <ul>
      {exp.map((exp) => (
        <li key={exp.id}>
            Cargo: {exp.cargo} - Empresa: {exp.empresa} - Descripcion: {exp.descripcion}
        </li>
      ))}
    </ul>
  );
}
