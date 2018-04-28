import reference from './reference'
import { bases, sauces, toppings } from '../constants'

describe('reference reducer', () => {
  const reducer = reference
  const initialState = {
    bases,
    sauces,
    toppings,
    clicked: 0
  }

  it('returns a reference object for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})