import React, {PureComponent} from 'react'

export default class Total extends PureComponent {
  constructor(props){
    super(props)
    // grab state from redux store
    this.state = {total: this.props.total}
  }

  componentDidMount(){
    this.intervalId = setInterval(()=>this.updatePrice(), 500)
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  updatePrice = () => {
    // get state from redux
    const state = this.props.store.getState()
    this.setState({
      total: state.totalPrice
    })
  }
  render() {
    return(
      <div>
        <div className='total-price'>
        <span>
          &euro;{this.state.total}
        </span>
        </div>
      </div>
    )
  }
}