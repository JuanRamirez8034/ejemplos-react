import React from 'react';
import '../css/Boton.css';

const Boton = ({nombre='Soy botón', tipo='principal', accion=()=>{console.log('Es un boton')}}) =>{
  return(
    <button className={(tipo === 'principal' ? 'boton principal' : 'boton secundario')} onClick={accion}>
      {nombre}
    </button>
  );
}
export default Boton;