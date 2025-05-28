import "./educacion.css";

const educacion = [
  { id:1,
    institucion: "I.E Atanasio Girardot",
    nombre: "Programacion de Software",
    año: 2025,
  },

  { id:2,
    institucion: "SENA",
    nombre: "Analizis y desarrollo de Software",
    año: 2025,
  },

  { id:3,
    institucion: "Debora Arango",
    nombre: "Psicologia",
    año: 2025,
  },

  { id:4,
    institucion: "Debora Arango",
    nombre: "Artes teatrales",
    año: 2025,
  },

];

export default function Educacion() {
  if (educacion.length === 0) {
    return <p>No hay educacion agregada.</p>;
  }
  return (//renderizar un array de objetos
    <ul>
      {educacion.map((educacion) => (
        <li key={educacion.id}>
          {educacion.institucion} - Curso: {educacion.nombre}
        </li>
      ))}
    </ul>
  );
}