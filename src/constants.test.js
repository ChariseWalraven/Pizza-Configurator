import { bases, toppings, sauces } from './constants'

describe('Bases', () => {
  test('has 4 options', () => {
    expect(bases).toHaveLength(4)
  })
  test('which each have a size and price', () => {
    expect(bases).toEqual(
        expect.objectContaining([{
        size: 20 || 25 || 30||35,
        price: 6.45 || 8.99 || 11.49 || 13.49
        }])
      )

  })
})

describe('Sauces', () => {
  test('has 4 options', () => {
    expect(sauces).toHaveLength(4)
  })
  test('with a name and a number(price)', () => {
    expect(sauces).toEqual(
      expect.objectContaining([
        {
          "white sauce": 0.50
        },
        {
          "red sauce": 0.50
        },
        {
          "double red sauce": 1.00
        },
        {
          "mix it up": 1.50
        }
      ])
    )
  })
})

describe('Toppings', () => {
  test('has 7 options', () => {
    expect(toppings).toHaveLength(7)
  })
})