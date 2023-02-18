import React from 'react';
import {FiTrash2} from 'react-icons/fi';
import '../css/Tarea.css';

const Tarea = ({ 
  id, 
  text="your text", 
  state=false, 
  backgroundColor="rgb(200,200,200)",
  actionCheck=()=>console.log('Cambiar estado'),  
  actionDelete=()=>console.log('Eliminar')
}) => {


  return(
    <div className='cuerpo-tarea' style={{background:backgroundColor}}>

      <div 
        className='contenedor-texto' 
        onClick={()=>{actionCheck(id);}}
      >
        <span className={state? "texto-tarea tarea-tachada":"texto-tarea"}>{text}</span>
      </div>

      <div className='contenedor-icono-eliminar'>
        <FiTrash2 className='icono-eliminar' onClick={()=>actionDelete(id)}/>
      </div>

    </div>
  );
}
export default Tarea;