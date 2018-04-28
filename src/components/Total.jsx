import React, {PureComponent} from 'react'

export default class Total extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    const totalPrice = this.props.total
    return(
      <div>
        <div className='total-price'>
        <span>
          &euro;{totalPrice}
        </span>
          {/* Link to a new page with a tick? toggle hidden class or something when clicked? */}
        </div>
      </div>
    )
  }
}