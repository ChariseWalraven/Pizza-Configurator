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
  render() {
    //import pizza types from store, whatever here
    return(
      <section>
        <form name='bases' className="base--form">
          <hr />
          <label>Pick A Base</label>
          <br />
          <span className="ny-style"><i>NY Style </i></span>
          <OptionForm options={bases} onClick={e => this.handleBase(e)}/>
          <hr />
          <label>Pick A Sauce </label>
          <OptionForm options={sauces}/>
          <hr />
          <label>Pick Some Toppings<span className='max-3'><i> Max 3</i></span></label>
          <hr />
        </form>
        <CheckboxForm options={toppings}/>
        <hr />
        <form>
        <label htmlFor='turboDrone'>
          <input name='turboDrone' type='checkbox'/>
          Turbo Drone<i> new!</i>
        </label>
        </form>
      </section>
    )
  }
}
