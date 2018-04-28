import { UPDATE_CLICKED, RESET_CLICKED,} from '../actions/types'
import { bases, sauces, toppings } from '../constants'

export default function (state = {bases, sauces, toppings, clicked: 0} , {type, payload}) {
  switch(type) {
    case UPDATE_CLICKED:
    return payload

    case RESET_CLICKED:
    return payload

    default:
    return state
  }
  }