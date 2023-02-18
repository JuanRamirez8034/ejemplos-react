import React from "react";
import "../css/Administrador.css";
import ListaTareas from "./ListaTareas";

const Administrador = () =>{



  return(
    <div className="cuerpo-contenedor-tareas">

      <h3 className="titulo-lista-tareas">Lista de tareas</h3>

      <ListaTareas />

    </div>
  );

}

export default Administrador;