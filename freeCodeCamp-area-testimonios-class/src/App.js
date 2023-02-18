import './App.css';
import Testimonio from './components/Testimonio';
import React from 'react';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <div className='contenedor-testimonios'>
          <h1 className='Titulo-seccion-testimonios'>Titulo de la copia de la pagina</h1>
          <Testimonio
            imagen={require('./img/man-avatar.jpg')}
            nombre={"Juan De Dios"}
            profesion={"Ing. Informático"}
          />
          <Testimonio
            imagen={require('./img/woman-avatar.jpg')}
            nombre={"Lissette Lozano"}
            profesion={"Contadora"}
          />
          <Testimonio
            imagen={require('./img/woman-avatar.jpg')}
            nombre={"Sther Salazar"}
            profesion={"Ing. Informático"}
          />
          <Testimonio
            imagen={require('./img/man-avatar-2.jpg')}
            nombre={"Dilan salcedo"}
            profesion={"Estdnt. Informático"}
          />
        </div>
      </div>
    );
  }
}

export default App;
