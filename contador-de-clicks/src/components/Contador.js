import React, { useState} from 'react';
import Boton from './Boton';
import '../css/Contador.css';

const Contador = (props) => {
  const [misCuentas,  setMisCuentas] = useState(0);
  const llervarCuenta = ()=>{
    setMisCuentas((misCuentas) + 1)
  }
  return (
    <div className='contenedor-contador'>
      <span className='numero-pantalla-contador'>{misCuentas}</span>
      <div className='contenedor-botones'>
        <Boton
          nombre={'Agregar'}
          tipo={'principal'}
          accion={llervarCuenta}
        />
        <Boton
          nombre={'Restablecer'}
          tipo={'Secundario'}
          accion={()=>{setMisCuentas(0)}}
        />
      </div>
    </div>
  );
}
export default Contador;