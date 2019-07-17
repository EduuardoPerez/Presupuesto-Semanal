import React, { useState } from 'react';
import Error from './Error'

function Formulario(props){

  // state
  const[nombreGasto, guardarNombreGasto] = useState('');
  const[cantidadGasto, guardarCantidadGasto] = useState(0);
  const[error, guardarError] = useState(false);
  
  // Cuando se agrega el gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar
    if(cantidadGasto<=1 || isNaN(cantidadGasto) || cantidadGasto===''){
      guardarError(true);
      return;
    }

    // Pasar gasto al componente principal
  }

  return(
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aquí</h2>

      {error ? <Error mensaje ='Ambos campos son obligatorios o la cantidad del gasto es incorrecta'/> : null }

      <div className="campo">
        <label>Nombre del gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ejemplo: Transporte"
          onChange={e => guardarNombreGasto(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ejemplo: 300"
          onChange={e => guardarCantidadGasto( parseInt(e.target.value), 10) }
        />
        <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>
      </div>
    </form>
  );
}
export default Formulario;