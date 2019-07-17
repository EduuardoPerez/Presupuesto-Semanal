import React, { Fragment, useState } from 'react';
import Error from './Error'

function Pregunta(props){

  const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Validar el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar
    if(cantidad<1 || isNaN(cantidad)){
      guardarError(true);
      return;
    }

    // Si pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    guardarPreguntaPresupuesto(false)
  }

    return(
      <Fragment>
        <h2>Coloca tu presupuesto</h2>

        {error ? <Error mensaje ='El presupuesto es invalido'/> : null }

        <form
          onSubmit={agregarPresupuesto}
        >
          <input 
            type="number"
            className="u-full-width"
            placeholder="Agrega tu presupuesto"
            onChange={e => guardarCantidad( parseInt(e.target.value, 10) )}
          />
          <input type="submit" className="button-primary u-full-width" value="Definir presupuesto"/>
        </form>
      </Fragment>
    );
}
export default Pregunta;