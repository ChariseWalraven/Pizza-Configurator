import React, { Component } from 'react';
import Form from './components/Form'
import Total from './components/Total'
import { connect } from 'react-redux'
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.totalPrice)
    return (
      <main className='container'>
        <section className='left-section'>
        <header className='App-title'>Build your own pizza!</header>
          <Form />
        </section>
        <section className="total">
          <img src={logo} className="App-logo" alt="logo" />
          {/* add in a summary of your order */}
          <Total total={this.props.totalPrice} />
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
return {
  totalPrice: state.totalPrice
  }
}

export default connect(mapStateToProps)(App);
