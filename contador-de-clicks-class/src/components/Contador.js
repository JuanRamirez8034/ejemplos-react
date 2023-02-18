import React from 'react';
import Boton from './Boton';
import '../css/Contador.css';


class Contador extends React.Component{

  constructor(props){
    super(props);
    this.state = {misCuentas:0};

    // permitiendo que las funciones se puedan ejecutar en otro contexto al pasarlas como props
    this.aumentar = this.aumentar.bind(this);
    this.restablecer = this.restablecer.bind(this);
  }

  aumentar(){
    this.setState(({misCuentas})=>({misCuentas: misCuentas + 1}));
  }

  restablecer(){
    this.setState({misCuentas:0});
  }

  render(){
    return (
      <div className='contenedor-contador'>
        <span className='numero-pantalla-contador'>{this.state.misCuentas}</span>
        <div className='contenedor-botones'>
          <Boton
            nombre={'Agregar'}
            tipo={'principal'}
            accion={this.aumentar}
          />
          <Boton
            nombre={'Restablecer'}
            tipo={'Secundario'}
            accion={this.restablecer}
          />
        </div>
      </div>
    );
  }
}

export default Contador;