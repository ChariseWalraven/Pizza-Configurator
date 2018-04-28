import base from "./base";

describe('base reducer', () => {
  const reducer = base
  const initalState = ''
  it('returns an empty string for the initial state', () => {
    expect(reducer()).toEqual(initalState)
  })
})