import { UPDATE_CLICKED, RESET_CLICKED,} from '../actions/types'
import { bases, sauces, toppings } from '../constants'

export default function (state = {bases, sauces, toppings, turboDrone: 0} , {type, payload}) {
  switch(type) {

    default:
    return state
    }
  }