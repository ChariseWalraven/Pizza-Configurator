import React, { PureComponent } from 'react'
import {bases, sauces, toppings} from '../constants'
import {getBaseOrSauceName} from '../logic/logic'
import uniqueid from 'uniqueid'


export default class BaseForm extends PureComponent {
  handleBase = (e) => {
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
    return(
      <form name='bases' className="base--form">
        <br />
      <label>Pick A Base</label>
        <br />
      <span className="addendum ny-style">NY Style</span>
       {bases.map((base, i) => {
         const name = getBaseOrSauceName(base)[0]
          const size = name.slice(0, 2)
          return (
            <div key={uniqueid(`Div-${i}-${size}-NY-Style-`)()} 
            className="bases">
              <input key={uniqueid(`Input-${i}-${size}-NY-Style-`)()} 
              name={name} value={name} onClick={(e) => this.handleBase(e)} 
              type='checkbox' />
              <label key={uniqueid(`Label-${i}-${size}-NY-Style-`)()} 
              htmlFor={name}>{name}</label>
            </div>
          )}
        )}
        <br />
      <label>Pick A Sauce</label>
        <br />
      {sauces.map((sauce, i) => { 
        const name = getBaseOrSauceName(sauce)[0]
       return (
         <div key={uniqueid(`Div-${i}-${name}-NY-Style-`)()} 
         className="sauces" >
           <input key={uniqueid(`Input-${i}-${name}-NY-Style-`)()} 
           name={name} value={name} onClick={(e) => this.handleSauce(e)} 
           type='radio' />
           <label key={uniqueid(`Label-${i}-${name}-NY-Style-`)()} 
           htmlFor={name}>{name}</label>
         </div>
        )}
      )}
        <br />
      <label>Pick Some Toppings</label>
        <br />
      {toppings.map((topping, i) => { 
       return (
         <div key={uniqueid(`Div-${i}-${topping}-NY-Style-`)()} 
         className="sauces" >
           <input key={uniqueid(`Input-${i}-${topping}-NY-Style-`)()} 
           name={topping} value={topping} onClick={(e) => this.handleToppings(e)} 
           type='checkbox' />
           <label key={uniqueid(`Label-${i}-${topping}-NY-Style-`)()} 
           htmlFor={topping}>{topping}</label>
         </div>
        )}
      )}
        <br />
      <label htmlFor='turboDrone'>
        <input name='turboDrone' type='checkbox'/>
        Turbo Drone
        </label>
      </form>
    )
  }
}
