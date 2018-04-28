import React, {PureComponent} from 'react'

export default class Total extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    return(
      <div>
        <div className='total-price'>
          &euro;{}
          {/* Link to a new page with a tick? toggle hidden class or something when clicked? */}
          <button id='order-button' onClick={(e) => this.handleSubmit(e)}><span>Okay</span></button>
        </div>
      </div>
    )
  }
}