import React, { PureComponent } from 'react'
import {bases, sauces, toppings} from '../constants'
import { OptionForm } from './OptionForm';
import CheckboxForm from './CheckboxForm';


export default class Form extends PureComponent {
  handleBase = (e) => {
    console.log('working')
    // check and uncheck button -- need to add baseSelected to state. Time for redux!!! :)
    // calculation goodness goes here...
  }
  handleSauce = (e) => {
    // check and uncheck button -- need to add baseSelected to state. Time for redux!!! :)
    // calculation goodness goes here...
  }
  handleToppings = (e) => {
    // check and uncheck button -- need to add baseSelected to state. Time for redux!!! :)
    // calculation goodness goes here...
  }
  handleSubmit = (e) => {
    e.preventDefault()
    //show total
  }
  render() {
    //import pizza types from store, whatever here
    return(
      <section>
        <form name='bases' id="bases-form">
          <hr />
          <label className='bases-main-label'>Pick A Base</label>
          <br />
          <span className="ny-style"><i>NY Style </i></span>
          <OptionForm options={bases} onClick={e => this.handleBase(e)}/>
        </form>
        <form name='sauces' id='sauces-form'>
          <hr />
          <label className='sauces-main-label'>Pick A Sauce </label>
          <OptionForm options={sauces}/>
        </form>
        <CheckboxForm options={toppings}/>
        <hr />
        <form name='turbo-drone' id="turbo-drone-form">
          <label className='turbo-drone-main-label' htmlFor='turbo-drone'>
          <input name='turbo-drone' type='checkbox'/>
          Turbo Drone<i> new!</i>
          </label>
          <input id='order-button' type='button' onClick={(e) => this.handleSubmit(e)} value='Okay'></input>
        </form>
      </section>
    )
  }
}
