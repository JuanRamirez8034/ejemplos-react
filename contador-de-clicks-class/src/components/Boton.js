import React from 'react';
import '../css/Boton.css';


class Boton extends React.Component{
  render(){
    return (
      <button className={(this.props.tipo === 'principal' ? 'boton principal' : 'boton secundario')} 
        onClick={this.props.accion}
      >
        {this.props.nombre}
      </button>
    );
  }
}

export default Boton;