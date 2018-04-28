import toppings from "./toppings";

describe('toppings reducer', () => {
  const reducer = toppings
  const initialState = []
  test('returns an emty string for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})