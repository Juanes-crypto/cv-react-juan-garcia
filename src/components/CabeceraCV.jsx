import "./cabecera.css";

const user = {
  nombre: "Juan Esteban Garcia A.",
  cargo : "Desarrollador Full Stack por cien",
}

export default function CabeceraCV() {
  return (
    <header>
      <div class="titulo">
      <h1>{user.nombre}</h1>
      <h2>{user.cargo}</h2>
      </div>
    </header>
  );
}
