import React, { useState } from 'react';
import Habilidades from './Habilidades';

const ToggleHabilidades = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
      </button>
      {visible && <Habilidades />}
    </div>
  );
};

export default ToggleHabilidades;