import sauce from "./sauce";

describe('sauces reducer', () => {
  const reducer = sauce
  const initialState = ''
  test('returns an emty string for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})