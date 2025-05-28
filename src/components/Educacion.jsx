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
    return (
      <section>
        <h3>Educacion Profesional</h3>
        <p>No se ha registrado educacion profesional.</p>
      </section>
    );
  }
  return (//renderizar un array de objetos
    <section class="tarjeta">
      <h3>Educacion Profesional</h3>

      <ul>
      {educacion.map((educacion) => (
        <li key={educacion.id}>
          {educacion.institucion} - Curso: {educacion.nombre}
        </li>
      ))}
    </ul>
    </section>
  );
}