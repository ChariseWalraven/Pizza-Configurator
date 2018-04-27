import React, {PureComponent} from 'react'

export default class Total extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    return(
      <form>
        <img className='yummy-pizza' alt='yummy-pizza' 
        src='https://images.unsplash.com/photo-1511516457495-002cdd242a2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c70df78467f2a0b0f5a3d5d07ee1a69&auto=format&fit=crop&w=1500&q=80'/>
        <span className='total'>&euro;{}</span>
        {/* Link to a new page with a tick? toggle hidden class or something when clicked? */}
        <button onClick={(e) => this.handleSubmit(e)}>Order</button>
      </form>
    )
  }
}