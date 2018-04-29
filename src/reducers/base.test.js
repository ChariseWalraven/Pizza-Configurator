import base from "./base";

describe('base reducer', () => {
  const reducer = base
  const initalState = {
  chosenSauce: '',
  saucesClicked: 0,
  chosenBase: '',
  sauceCost: 0,
  basesClicked: 0,
  baseCost: 0,
}
  test('returns the correct thing for the initial state', () => {
    // expect(reducer()).toEqual(initalState)
  })
})