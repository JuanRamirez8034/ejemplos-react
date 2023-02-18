import React from 'react';
import "../css/Boton.css";

const Boton = ({text="Mi boton", textColor="#ffffff", background="#3c00ac", className="", type="button", action=()=>console.log("Im your button")}) =>{
  return(
    <button 
      type={type} 
      // onClick={()=>action()} 
      style={{background:background, color:textColor}} 
      className={className === "" ? "estilos-boton" : className}
    >{text}</button>
  );
}
export default Boton;