import './App.css';
import Logo from './components/Logo';
import Contador from './components/Contador';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Logo />
        <Contador />
      </div>
    );
  }
}

export default App;
