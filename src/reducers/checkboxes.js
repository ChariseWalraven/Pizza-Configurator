import { UPDATE_CHECKBOXES, RESET_CHECKBOXES } from '../actions/types'

const initialState = [[false,true,false,false], [false,false,false,false]]

export default function(state = initialState, {type, payload}){
  switch(type) {
    case UPDATE_CHECKBOXES:
    return payload

    case RESET_CHECKBOXES:
    return state
    
    default:
    return state
  }
}