import { UPDATE_CLICKED, RESET_CLICKED } from './types'


export const updateClicked = (input) => (dispatch, getState) => {
  const state = getState()
  const checked = input.nativeEvent.path['0'].checked
/*
 I get a warning about payload not being used, but if I comment it out, my function breaks. Why?
*/
  let payload;
  (checked === true) ?
    state.reference.clicked = state.reference.clicked + 1 : state.reference.clicked = state.reference.clicked - 1
dispatch({ type: UPDATE_CLICKED, payload: state.reference})
}

export const resetClicked = _ => (dispatch, getState) => {
  const state = getState()
  state.reference.clicked = state.reference.clicked - state.reference.clicked
  dispatch({type: RESET_CLICKED, payload: state.reference})
}