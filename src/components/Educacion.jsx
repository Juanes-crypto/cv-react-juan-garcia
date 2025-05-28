import "./educacion.css";

const educacion = [
  {institucion: "I.E Atanasio Girardot",
    nombre: "Programacion de Software",
    año: 2025,
  },

  {institucion: "SENA",
    nombre: "Analizis y desarrollo de Software",
    año: 2025,
  },

  {institucion: "Debora Arango",
    nombre: "Psicologia",
    año: 2025,
  },

  {institucion: "Debora Arango",
    nombre: "Artes teatrales",
    año: 2025,
  },

];

export default function Educacion() {
  return (//listas ordenadas
    <section class="tarjeta">
      <ul class="lista">
        <div class ="texto">
        {educacion.eduacion1}
        </div>
        <div class ="texto">
        {educacion.eduacion2}
        </div>
        <div class ="texto">
        {educacion.eduacion3}
        </div>
        <div class ="texto">
        {educacion.eduacion4}
        </div>
      </ul>
    </section>
  );
}