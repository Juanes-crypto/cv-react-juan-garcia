// src/App.jsx
import React from 'react';
import { user, perfil, educacion, exp, habilidades, tecnologias, proyectos } from './data/cvData';
import CabeceraCV from './components/CabeceraCV';
import Perfil from './components/Perfil';
import Educacion from './components/Educacion';
import Experiencia from './components/Experiencia';
import Habilidades from './components/Habilidades';
import StackTecnologias from './components/StackTecnologias';
import Proyectos from './components/Proyectos';
const App = () => {
  return (
    <div style={{ display: 'flex', gap: '24px', padding: '20px', flexWrap: 'wrap' }}>
      
      <CabeceraCV nombre={user.nombre} profesion={user.cargo} />
      <Perfil texto={perfil.desc} />
      <Educacion estudios={educacion} />
      <Experiencia trabajos={exp} />
      <Habilidades habilidades={habilidades} />
      <StackTecnologias tecnologias={tecnologias} />
      <Proyectos proyectos={proyectos} />
    
    </div>
  );
};

export default App;
