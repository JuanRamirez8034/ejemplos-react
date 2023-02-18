import React from 'react';
import '../css/Logo.css';
import logoSVG from '../img/logo.svg';

class Logo extends React.Component{

  render(){
    return (
      <div className='contenedor-logo'>
        <img src={logoSVG} alt="Logo de la pagina" className='logo-img' />
      </div>
    );
  }
}

export default Logo;