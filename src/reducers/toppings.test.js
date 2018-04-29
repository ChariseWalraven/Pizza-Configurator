import toppings from "./toppings";

describe('toppings reducer', () => {
  const reducer = toppings
  const initialState = {
    toppingsCost: 0,
    clicked: 0
  }
  test('returns an emty string for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})