import "./experiencia.css";
const exp = {
  prof: "Experiencia Profesional",
  exp1 : "experiencia 1",
  exp2 : "experiencia 2",
  exp3 : "experiencia 3",

}
export default function Experiencia() {
  return (
    <section class = "tarjeta">
      <h3 class = "titulo">{exp.prof}</h3>
      <ul class = "lista">
        
        <div>{exp.exp1}</div>
        
        
        <div>{exp.exp2}</div>
        
        
        <div>{exp.exp3}</div> 
        
      </ul>
    </section>
  );
}
