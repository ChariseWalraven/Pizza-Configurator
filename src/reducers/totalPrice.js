import { CALCULATE_TOTAL } from '../actions/types'

export default function(state = 0, { type, payload }){
  switch(type){
    case CALCULATE_TOTAL:
    return payload

    default:
    return state
  }
} 