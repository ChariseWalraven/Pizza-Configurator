import { bases, sauces, toppings } from '../constants'

const initialState = { bases, sauces, toppings, turboDrone: false } 

export default function (state = initialState, {type, payload}) {
    return state
  }