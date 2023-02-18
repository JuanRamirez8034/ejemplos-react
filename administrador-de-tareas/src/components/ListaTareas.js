import React,{useState} from 'react';
import Tarea from './Tarea';
import '../css/ListaTareas.css';
import Formulario from './Formulario';
// functions
import { RGB_Generator } from '../functions/GenerateRGB.color';

const ListaTareas = () =>{

  const color = new RGB_Generator(255);

  const [listaTareas, setListaTareas] = useState([{
    texto:'App created by Juan Ramírez',
    estado:false,
    id:'JuanRamirezAuthor',    
  }]);

  const agregarTarea = (tarea)=>{
    if (tarea.texto === '') {
      alert('Tarea vacia');
      return;
    }
    setListaTareas([tarea, ...listaTareas])
    console.log(listaTareas);
  }

  const eliminarTarea = id =>{
    console.log('Se elimina la -> ' + id);

    const arregloNuevo = listaTareas.filter(element => element.id !== id);
    
    setListaTareas(arregloNuevo);
  }

  const setEstado = id => {
    console.log('Se alterna el estado -> ' + id);

    const arregloNuevo = listaTareas.map(tarea =>{
      if(tarea.id === id) {
        tarea.estado = !tarea.estado;
      }
      return tarea;
    });
    console.log(arregloNuevo);

    setListaTareas(arregloNuevo);
  }


  return(
    <>
      <div className="separador-linea"></div>

      <Formulario onSubmit={agregarTarea}/>

      <div className="separador-linea"></div>

      {
        listaTareas.length <= 0 ? (
          <span>Lista vacia</span>
        ):(
            <div className='cuerpo-lista'>
              {
                listaTareas.map((tarea) => {
                  return (
                    <Tarea
                      key={tarea.id}
                      id={tarea.id}
                      text={tarea.texto}
                      state={tarea.estado}
                      backgroundColor={color.rgb()}
                      actionCheck={setEstado}
                      actionDelete={eliminarTarea}
                    />
                  )
                })
              }
            </div>
        )
      }
    </>
  );

}
export default ListaTareas;