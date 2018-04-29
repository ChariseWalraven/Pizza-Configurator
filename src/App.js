import React, { Component } from 'react';
import Form from './containers/Form'
import Total from './components/Total'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { calculateTotal } from './actions/totalPrice'
import logo from './logo.png';
import './App.css';
import Button from 'material-ui/Button';
import green from 'material-ui/colors/green'
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.store.getState()
  }
  handleSubmit = (e) => {
    const checked = e.nativeEvent.path['0'].checked
    this.props.calculateTotal(checked)
  }
  handleOkay = (e) => {
    if(this.state.totalPrice === 0) {
      alert('You didn\'t check anything...') 
      e.preventDefault()
    }
    if(this.state.totalPrice > 0) {
      alert('Your order is on its way! :)')
      window.location.reload(true)
    }
  }
  
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: green,
      },
    });
    const store = this.props.store
    return (
      <main>
        <MuiThemeProvider theme={theme}>
        <section>
        <h1>Build your own pizza!</h1>
        <h3>Pick a Base</h3>
          <Form type={'base'} limit={1}/>
        <h3>Pick a Sauce</h3>
          <Form type={'sauce'} limit={1}/>
        <h3>Pick Some Toppings (Max 3)</h3>
          <Form type={'toppings'} limit={3}/>
          <form name='turbo-drone' id="turbo-drone-form">
            <h3>Extras</h3>
            <label className='turbo-drone-main-label' htmlFor='turbo-drone'>
              <input name='turbo-drone' type='checkbox' onClick={(e) => this.handleSubmit(e)}/>
              Turbo Drone<i> new!</i>
            </label>
            <div>
            <Button variant='raised' color='primary' onClick={this.handleOkay.bind(this)}>Okay</Button>
            </div>
          </form>
        </section>
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          {/* add in a summary of your order */}
          <div id='total-price-div'>
        
          <Total total={this.props.totalPrice} store={store} />
          </div>
        </section>
        </MuiThemeProvider>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
return {
  totalPrice: state.totalPrice,
  base: state.baseAndSauce.baseCost,
  sauce: state.baseAndSauce.sauceCost,
  toppings: state.toppings.toppingsCost,
  turboDrone: state.reference.turboDrone
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    calculateTotal
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
