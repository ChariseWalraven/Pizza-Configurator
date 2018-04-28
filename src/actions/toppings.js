import { UPDATE_CLICKED, RESET_CLICKED } from './types'


export const updateClicked = (input) => (dispatch, getState) => {
  const state = getState()
  console.log(state)
  const checked = input.nativeEvent.path['0'].checked
/*
 I get a warning about payload not being used, but if I comment it out, my function breaks. Why?
*/
  let payload;
  (checked === true) ?
    state.toppings.clicked = state.toppings.clicked + 1 : state.toppings.clicked = state.toppings.clicked - 1
dispatch({ type: UPDATE_CLICKED, payload: state.toppings})
}

export const resetClicked = _ => (dispatch, getState) => {
  const state = getState()
  state.toppings.clicked = state.toppings.clicked - state.toppings.clicked
  dispatch({type: RESET_CLICKED, payload: state.toppings})
}