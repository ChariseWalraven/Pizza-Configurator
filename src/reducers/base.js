import { UPDATE_BASE_OR_SAUCE, RESET_SAUCE_CLICKS, RESET_BASE_CLICKS } from '../actions/types'

const initialState = {
  chosenSauce: '',
  saucesClicked: 0,
  chosenBase: '',
  sauceCost: 0,
  basesClicked: 0,
  baseCost: 0,
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case UPDATE_BASE_OR_SAUCE:
    return payload

    case RESET_SAUCE_CLICKS:
      return payload

    case RESET_BASE_CLICKS:
      return payload

    default:
    return state
  }
}