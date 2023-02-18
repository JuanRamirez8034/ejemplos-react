import React from "react";
import "../css/Input.css";

const Imput = ({name, id, value="", placeholder="Ho", labelTitle="Name", labelTextColor="black",type="text", captureText=()=>console.log('Acá se usa la funcion con "e.target.value" para capturar el texto')}) =>{
  return(
    <div className="contenedor-input-label">
      <label htmlFor={id} className="label-input" style={{color:(labelTextColor ==="black" ? "black": labelTextColor)}}>{labelTitle}</label>
      <div className="cuerpo-input">
        <input 
          type={type} 
          name={name} 
          id={id} 
          placeholder={placeholder} 
          className="input-text" 
          onChange={captureText}
          value={value} 
        />
      </div>
    </div>
  );
}
export default Imput;