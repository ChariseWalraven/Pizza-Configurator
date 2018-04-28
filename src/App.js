import React, { Component } from 'react';
import Form from './components/Form'
import Total from './components/Total'
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <section className='left-section'>
        <header className='App-title'>Build your own pizza!</header>
          <Form />
        </section>
        <section className="total">
          <img src={logo} className="App-logo" alt="logo" />
          <Total />
        </section>
      </main>
    );
  }
}

export default App;
