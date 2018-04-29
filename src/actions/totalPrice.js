import { CALCULATE_TOTAL } from './types'
import {
  calculatePizzaTotal
} from '../logic/logic'

export const calculateTotal = (droneSelected = false) => (dispatch, getState) => {
  const state = getState()
  const base = state.baseAndSauce.baseCost
  const sauce = state.baseAndSauce.sauceCost
  const toppings = state.toppings.toppingsCost
  // const turboDrone = state.reference.turboDrone
  const total = calculatePizzaTotal(base, sauce, toppings, droneSelected)
  console.log(total)
  state.totalPrice = total 

dispatch({ type: CALCULATE_TOTAL, payload: state.totalPrice})
}