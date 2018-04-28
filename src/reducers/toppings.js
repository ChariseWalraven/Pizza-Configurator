import { UPDATE_CLICKED, RESET_CLICKED } from '../actions/types'

const initialState = {
  toppingNames: [],
  clicked: 0
}

export default function(state = initialState, {type, payload} = {}) {
  switch(type) {
    case UPDATE_CLICKED:
      return payload

    case RESET_CLICKED:
      return payload

    default:
    return state
  }
}