import totalPrice from "./totalPrice";

describe('sauces reducer', () => {
  const reducer = totalPrice
  const initialState = 6.95
  test('returns 6.95 for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
  test('returns a number', () => {
    expect(typeof reducer()).toBe('number')
  })
})