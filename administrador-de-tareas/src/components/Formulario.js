import React, { useState } from "react"; 
import { v4 as generarId } from "uuid";
import '../css/Formulario.css';
import Input from "./Input";
import Boton from "./Boton";


const Formulario = ({onSubmit}) =>{

  const [textoInput, setTextoInput] = useState('');

  

  const capturarTexto = (input) => {
    setTextoInput(input.target.value.trim());
  }

  const enviarFormulario = (e) => {
    e.preventDefault();

    onSubmit({
      "id": generarId(),
      "texto": textoInput,
      "estado": false
    });
  }


  return(
    <>
    
      <form className="controles" onSubmit={enviarFormulario}>
        <Input
          name=""
          id="nombreTarea"
          labelTitle="Nombre"
          type="text"
          labelTextColor="white"
          placeholder="Texto tarea"
          captureText={capturarTexto}
          value={textoInput}
        />

        <Boton
          text="Agregar"
          textColor="yellow"
          background="gray"
          type="submit"
          plceholder="Texto tarea"
        />
      </form>

    </>
  )
}


export default Formulario;