const proyectos = [
  {
    id: 1,
    nombre: "AgroAPP",
    descripcion: "Plataforma de venta de productos agricolas y prestacion de servicios entra una comunidad agricola.",
    enlace: "https://github.com/Juanes-crypto/agroapp"
  },
  {
    id: 2,
    nombre: "App de Peliculas",
    descripcion: "Aplicación móvil para gestionar peliculas de distintos años.",
    enlace: "https://github.com/Juanes-crypto/movie-controller"
  }
];

export default function Proyectos() {
  return (
    <section class="tarjeta">
      <ul class="lista">
      {proyectos.map((proyectos) => (
        <li key={proyectos.id}>
            Nombre: {proyectos.nombre} - Descripcion: {proyectos.descripcion} - Enlace: {proyectos.enlace}
        </li>
      ))}
    </ul>
    </section>
  );
}