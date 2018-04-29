import React, { PureComponent } from 'react'
import {BaseOrSauce} from '../components/BaseOrSauce'
import { connect } from 'react-redux'
import { updateBaseOrSauce, resetClicks } from '../actions/base'
import { updateCheckboxes, resetCheckboxes } from '../actions/checkboxes'
import { updateClicked, resetClicked } from '../actions/toppings'
import { calculateTotal } from '../actions/totalPrice'
import { getBaseOrSauceName } from '../logic/logic'
import { bindActionCreators } from 'redux'

class Form extends PureComponent {
  constructor(type, limit,...other) {
    super(type, limit, ...other)
    this.type = type
    this.limit = limit
    this.other = {...other}
    this.handleClick = this.handleClick.bind(this)
    this.resetBoxes = this.resetBoxes.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //reset all boxes
  resetBoxes = (e) => {
    e.nativeEvent.path[2].reset()
  }

  handleClick = (i, e) => {
    const message = (`Only ${this.props.limit} ${this.props.type} allowed!`)
    //check if base or sauce
    let base;
    if(this.props.type === 'base' || 'sauce') {
      if(this.props.type === 'base') {
        //update accordingly
        base = true
        this.props.updateBaseOrSauce(e, base)
        this.props.updateCheckboxes(i, base)
        if (this.props.baseAndSauce.basesClicked > this.props.limit) {
          alert(message)
          this.resetBoxes(e)
          this.props.resetClicks(base)
          this.props.calculateTotal()
        }
        this.props.calculateTotal()

      }
      if(this.props.type === 'sauce') {
        base = false
        this.props.updateBaseOrSauce(e, base)
        this.props.updateCheckboxes(i, base)
        if (this.props.baseAndSauce.saucesClicked > this.props.limit) {
          alert(message)
          this.resetBoxes(e)
          this.props.resetClicks(base)
          this.props.calculateTotal()
        }
        this.props.calculateTotal()

      }
    }
    
    if(this.props.type === 'toppings') {
      if (this.props.toppings.clicked <= this.props.limit) {
        this.props.updateClicked(e)
        this.props.calculateTotal()
      }
      if (this.props.toppings.clicked > this.props.limit) {
        alert(message)
        // reset click counter
        this.props.resetClicked()
        // uncheck current checkbox checkboxes
        this.resetBoxes(e)
      }
      this.props.calculateTotal()

    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render(){
    const type = this.props.type
    let data
    type === 'base' ? ( 
      data = this.props.reference.bases
    ) : (
      data = this.props.reference.sauces
    )
    //if it's a sauce or base
    return (
    type === 'sauce' || type === 'base'? 
    (
      <form>
      {data.map((e, i) => {
        const name = getBaseOrSauceName(e)
        return <BaseOrSauce key={'Base-Or-Sauce'+i} name={name} i={i} handleClick={this.handleClick}/>
      })}
      </form>
    ): ( 
      <form>
        {this.props.reference.toppings.map((e, i) => {
            return (
              <div key={`checkbox-${i}`}>
                <input key={`input--${e}--${i}`} 
                type='checkbox' value={0.50} name={e}
                className='checkbox' 
                onClick={(e) => this.handleClick(i,e)} 
                />
                <label key={`label--${e}--${i}`}>{e}</label>
              </div>
            )
          })
        }
      </form>
    )
  )
  }   
}


const mapStateToProps = (state) => {
  return {
    reference: state.reference,
    toppings: state.toppings,
    baseAndSauce: state.baseAndSauce,
    checkboxes: state.checkboxes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateBaseOrSauce,
    resetClicks,
    updateCheckboxes,
    resetCheckboxes,
    updateClicked,
    resetClicked,
    calculateTotal
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)