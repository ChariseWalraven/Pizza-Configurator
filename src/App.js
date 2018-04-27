import React, { Component } from 'react';
import BaseForm from './components/BasesForm'
import Total from './components/Total'
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Build your own pizza!</h1>
        </header>
        <Total />
        <BaseForm />
      </div>
    );
  }
}

export default App;
