import { UPDATE_CHECKBOXES, RESET_CHECKBOXES} from './types'

export const updateCheckboxes = (idx = 0, base) => (dispatch, getState)=> {
const state = getState()
  if (base === true) if(state.checkboxes[0][idx] === true) state.checkboxes[0][idx] = false
  if (base === false) if (state.checkboxes[1][idx] === true) state.checkboxes[1][idx] = false
  dispatch({type: UPDATE_CHECKBOXES, payload: state.checkboxes})
}

export const resetCheckboxes = (i, idx) => (dispatch, getState) => {
  const payload = [[false, false, false, false], [false, false, false, false]]
    dispatch({ type: RESET_CHECKBOXES , payload: payload})
}