import React from 'react';
import '../css/Tecla.css';

const Tecla = ({nombre="abc", fondo='#0049b6', ancho='100%', alto='100%', tamanoLetra='1.2rem', tipoAccion='normal',accion=()=>{console.log('Hola')}}) =>{
  return(
    <button 
      className='boton' 
      style={{background:fondo, width:ancho, height:alto, fontSize:tamanoLetra,}} 
      onClick={()=>{
        tipoAccion === 'normal' ? accion(nombre) : accion();
      }}
    >
      {nombre}
    </button>
  );
}
export default Tecla;