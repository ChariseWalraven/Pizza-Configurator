import { UPDATE_CLICKED, RESET_CLICKS } from './types'


export const updateClicked = (input) => (dispatch, getState) => {
  const state = getState()
  const checked = input.nativeEvent.path['0'].checked
/*
 I get a warning about payload not being used, but if I comment it out, my function breaks. Why?
*/
  if(checked === true) (state.toppings.toppingsCost = state.toppings.toppingsCost + 0.50,
    state.toppings.clicked = state.toppings.clicked +1)
  else (state.toppings.toppingsCost = state.toppings.toppingsCost - 0.50,
      state.toppings.clicked = state.toppings.clicked - 1)
  dispatch({ type: UPDATE_CLICKED, payload: state.toppings})
}

export const resetClicked = _ => (dispatch, getState) => {
  const state = getState()
  // console.log(state.toppings)
  state.toppings.clicked = 0
  state.toppings.toppingsCost = 0
  dispatch({type: RESET_CLICKS, payload: {clicked: state.toppings.clicked, toppingsCost: state.toppings.toppingsCost}})
}