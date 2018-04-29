import reference from './reference'
import { bases, sauces, toppings } from '../constants'

describe('reference reducer', () => {
  test('returns a reference object for the initial state', () => {
  const reducer = reference
  const initialState = {
    bases,
    sauces,
    toppings,
    turboDrone: 0
  }
    // expect(reducer()).toBe(initialState)
  })
})