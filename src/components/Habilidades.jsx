const habilidades = [
  { id: 1, nombre: "Psicoanalizis", nivel: "Avanzado" },
  { id: 2, nombre: "Java Script", nivel: "Intermedio" },
  { id: 3, nombre: "HTML", nivel: "Avanzado" }
];
export default function Habilidades() {
      if (habilidades.length === 0) {
    return (
      <section>
        <h3>Habilidades</h3>
        <p>No se ha registrado ninguna habilidad.</p>
      </section>
    );
  }

  return (
    <section class="tarjeta">
      <ul class="lista">
      {habilidades.map((habilidades) => (
        <li key={habilidades.id}>
            Nombre: {habilidades.nombre} - Nivel: {habilidades.nivel}
        </li>
      ))}
    </ul>
    </section>
  );
}