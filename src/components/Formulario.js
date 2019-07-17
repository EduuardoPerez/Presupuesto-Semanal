import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props){

  const { guardarGasto, guardarCrearGasto } = props;

  // state
  const[nombreGasto, guardarNombreGasto] = useState('');
  const[cantidadGasto, guardarCantidadGasto] = useState(0);
  const[error, guardarError] = useState(false);
  
  // Cuando se agrega el gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar
    if(cantidadGasto<=1 || isNaN(cantidadGasto) || nombreGasto===''){
      guardarError(true);
      return;
    }

    // Construir objeto de gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate()
    }

    // Pasar gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);
    
    // Eliminar alerta
    guardarError(false);

    // Reiniciar el form
    guardarNombreGasto('');
    guardarCantidadGasto('');

  }

  return(
    
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aquí</h2>

      {error ? <Error mensaje ='Verificar que ambos campos contengan información o agregue un valor valido en el campo de gasto'/> : null }

      <div className="campo">
        <label>Nombre del gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ejemplo: Transporte"
          onChange={e => guardarNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ejemplo: 300"
          onChange={e => guardarCantidadGasto( parseInt(e.target.value, 10) )}
          value={cantidadGasto}
        />
      </div>
      <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>

    </form>
  );
}
export default Formulario;