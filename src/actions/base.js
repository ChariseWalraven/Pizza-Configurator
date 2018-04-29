import { UPDATE_BASE_OR_SAUCE, RESET_SAUCE_CLICKS, RESET_BASE_CLICKS } from './types'
import { calculateBaseOrSauce } from '../logic/logic'

//reset the relevant clicks. 
export const resetClicks = (base = true) => (dispatch, getState) => {
  const state = getState()
  // let result
  if (base === true) {
    state.baseAndSauce.basesClicked = 0
    state.baseAndSauce.chosenBase = ''
    state.baseAndSauce.baseCost = 0
    dispatch({type: RESET_BASE_CLICKS, payload: state.baseAndSauce })
  }
  else {
    state.baseAndSauce.saucesClicked = 0
    state.baseAndSauce.chosenSauce = ''
    state.baseAndSauce.sauceCost = 0
    dispatch({ type: RESET_SAUCE_CLICKS, payload: state.baseAndSauce })

  }
}
//update the cost
export const updateBaseOrSauce = (e, base = true, checked) => (dispatch, getState) =>{
  const state = getState()
  const selection = e.target.value
  const bases = state.reference.bases
  const sauces = state.reference.sauces
  console.log(selection)
  // console.log(calculateBaseOrSauce(selection))
  // if it's a base, get the price for the base,
  if(base === true) {
    const cost = calculateBaseOrSauce(selection, bases)
    state.baseAndSauce.chosenBase = selection
    state.baseAndSauce.baseCost = cost
    state.baseAndSauce.basesClicked = state.baseAndSauce.basesClicked + 1
  }
  if(base === false) {
    const cost = calculateBaseOrSauce(selection, sauces)
    state.baseAndSauce.chosenSauce = selection
    state.baseAndSauce.sauceCost = cost
    state.baseAndSauce.saucesClicked = state.baseAndSauce.saucesClicked + 1
  }
  
  dispatch({type: UPDATE_BASE_OR_SAUCE, payload: state.baseAndSauce}) 
} 

export const resetBaseClicks = () => (dispatch) =>{

} 
