// src/App.jsx
import React, { useState } from 'react';
import { user, perfil, educacion, exp, habilidades, tecnologias, proyectos } from './data/cvData';
import CabeceraCV from './components/CabeceraCV';
import Perfil from './components/Perfil';
import Educacion from './components/Educacion';
import Experiencia from './components/Experiencia';
import Habilidades from './components/Habilidades';
import StackTecnologias from './components/StackTecnologias';
import Proyectos from './components/Proyectos';
import FormularioTecnologia from './components/FormularioTecnologia';
import ToggleHabilidades from './components/ToggleHabilidades';

const App = () => {
  const [tecnologiasState, setTecnologiasState] = useState(tecnologias);
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const agregarTecnologia = (nuevaTecnologia) => {
    if (nuevaTecnologia.trim()) {
      const nuevaEntrada = {
        id: tecnologiasState.length + 1,
        nombre: nuevaTecnologia,
        tipo: "otro",
      };
      setTecnologiasState([...tecnologiasState, nuevaEntrada]);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '24px', padding: '20px', flexWrap: 'wrap' }}>
      <CabeceraCV nombre={user.nombre} profesion={user.cargo} />
      <Perfil texto={perfil.desc} />
      <Educacion estudios={educacion} />
      <Experiencia trabajos={exp} />
      
      {/* Botón para mostrar/ocultar habilidades */}
      <button onClick={() => setMostrarHabilidades(!mostrarHabilidades)}>
        {mostrarHabilidades ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
      </button>
      {mostrarHabilidades && <Habilidades habilidades={habilidades} />}

      <StackTecnologias tecnologias={tecnologiasState} />
      <Proyectos proyectos={proyectos} />

      {/* Formulario para agregar tecnología */}
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
    </div>
  );
};

export default App;
