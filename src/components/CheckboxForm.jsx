import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateClicked, resetClicked } from '../actions/toppings'

class CheckboxForm extends PureComponent {

  resetBoxes = (e) => {
    // console.log()
    // console.log(Object.keys(e))
    e.nativeEvent.path[2].reset()
  }

  handleClick = (e) => {
    //when a user clicks on more than 3 checkboxes, an alert comes up saying the limit for toppings is 3
    if(this.props.reference.clicked <= 4) {
      this.props.updateClicked(e)
    }
    if(this.props.reference.clicked >= 4) {
      alert("OI!")
      e.preventDefault();
      // reset click counter
      this.props.resetClicked()
      // uncheck all checkboxes
      this.resetBoxes(e)
    }
  }

  render() {
    // console.log(this.props)
    const data = this.props.reference.toppings
    return (
      <form id='toppings-form'>
        {data.map((e, i) => {
          const name = e
          return(
            <div key={`checkbox-${i}`}>
              <input key={`input--${e}--${i}`} type='checkbox' value='hi' className='checkbox' onClick={(e) => this.handleClick(e)}/>
              <label key={`label--${e}--${i}`}>{name}</label>
            </div>
          )})}
        <div>
          {/* If this gets clicked, uncheck all the other checkboxes */}
          <input type='checkbox' id='no-toppings' />  
          <label>None</label>
        </div>
      </form>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      reference: state.reference
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      updateClicked,
      resetClicked
    }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CheckboxForm)