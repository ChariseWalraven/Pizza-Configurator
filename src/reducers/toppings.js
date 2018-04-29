import { UPDATE_CLICKED, RESET_CLICKS } from '../actions/types'

const initialState = {
  toppingsCost: 0,
  clicked: 0
}

export default function(state = initialState, {type, payload} = {}) {
  switch(type) {
    case UPDATE_CLICKED:
      return payload

    case RESET_CLICKS:
      return payload

    default:
    return state
  }
}