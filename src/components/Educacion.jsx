import "./educacion.css";

const perf = {
  eduacion1: "eduacion 1",
  eduacion2: "eduacion 2",
  eduacion3: "eduacion 3",
  eduacion4: "educacion 4",

} 
export default function Educacion() {
  return (//listas ordenadas
    <section class="tarjeta">
      <ul class="lista">
        <div class ="texto">
        {perf.eduacion1}
        </div>
        <div class ="texto">
        {perf.eduacion2}
        </div>
        <div class ="texto">
        {perf.eduacion3}
        </div>
        <div class ="texto">
        {perf.eduacion4}
        </div>
      </ul>
    </section>
  );
}