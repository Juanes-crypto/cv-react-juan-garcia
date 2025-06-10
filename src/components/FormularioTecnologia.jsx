import React, { useState } from 'react';

const FormularioTecnologia = ({ agregarTecnologia }) => {
  const [tecnologia, setTecnologia] = useState('');

  const handleChange = (e) => setTecnologia(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTecnologia(tecnologia);
    setTecnologia('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={tecnologia} onChange={handleChange} placeholder="Agregar tecnología" />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioTecnologia;