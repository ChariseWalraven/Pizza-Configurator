// import { toppingClicked } from '../actions/toppings'
import { UPDATE_CLICKED } from '../actions/types'

export default function(state = [], {type, payload} = {}) {
  switch(type) {

    case UPDATE_CLICKED: 
    return payload

    default:
    return state
  }
}