import React,{useState} from 'react';
import '../css/Calculadora.css';
import Tecla from './Tecla';
import {evaluate} from 'mathjs';

const Calculadora = (props) =>{
  // estado para la pantalla de la calculadora
  const [input , setInput] = useState('0');
  //funcion para concatenar lo ingresado
  const agregar = (valor) => setInput((input ==='0' ? '' : input ==='Error' ? '': input) + valor);

  // funcion para optener el resultado
  const resultado = () => {
    try {
      const expresion = /^-?[\d]+[.]+[\d]{0,20}$/;

      const resultado = evaluate(input);

      if (expresion.test(input.toString())) {
        setInput(resultado.toFixed(3).toString());
        return;
      }
      setInput(resultado.toString());
    } catch (e) {
      setInput('Error');
    }
  }

  return(
    <div className='cuerpo borde'>

      <div className='pantalla borde'>{input}</div>

      <div className='teclado'>

        {/* fila 1 2 3 + */}
        <Tecla nombre='1' accion={agregar} />
        <Tecla nombre='2' accion={agregar} />
        <Tecla nombre='3' accion={agregar} />
        {/* Especial */}
        <Tecla nombre='+' accion={agregar} fondo='#016e0f' />

        {/* fila 4 5 6 - */}
        <Tecla nombre='4' accion={agregar} />
        <Tecla nombre='5' accion={agregar} />
        <Tecla nombre='6' accion={agregar} />
        {/* Especial */}
        <Tecla nombre='-' accion={agregar} fondo='#016e0f' />

        {/* fila 7 8 9 * */}
        <Tecla nombre='7' accion={agregar} />
        <Tecla nombre='8' accion={agregar} />
        <Tecla nombre='9' accion={agregar} />
        {/* Especial */}
        <Tecla nombre='*' accion={agregar} fondo='#016e0f' />

        {/* fila = 0 . / */}
        <Tecla nombre='=' accion={resultado} fondo='#016e0f' />
        <Tecla nombre='0' accion={agregar} />
        <Tecla nombre='.' accion={agregar} fondo='#016e0f' />
        {/* Especial */}
        <Tecla nombre='/' accion={agregar} fondo='#016e0f' />
        
        {/* Limpiar */}
        <Tecla nombre='Clear' accion={()=>setInput('0')} tipoAccion={''} fondo='#b80404' />
        {/* Eliminar */}
        <Tecla nombre='Del' accion={() => setInput((input.length <=0 ? '' : input.slice(0,-1)))} tipoAccion={''} fondo='#c07300' />

      </div>

    </div>
  );
}
export default Calculadora;