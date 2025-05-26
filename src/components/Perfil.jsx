import "./perfil.css";
const perfil = {
  tit : "Perfil",
  desc : "Tecnologo en Analisis y Desarrollo de software con experiencia en desarrollo web y móvil, apasionado por la tecnología"
}
export default function Perfil() {
  return (
    <><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /><link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet" /><section class="tarjeta">
      <h3 class="titulo">{perfil.tit}</h3>
      <p class="texto">{perfil.desc}</p>
    </section></>
  );
}
