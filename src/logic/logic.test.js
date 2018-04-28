const { calculateBaseOrSauce, calculateToppings, calculateTurboDrone, calculateTotal} = require('./logic')
import {bases, sauces} from '../constants'

describe('calculateBaseOrSauce', () => {
  test('exists', () => {
    expect(calculateBaseOrSauce('25 cm', bases)).toBeDefined()
  })
  test('returns something', () => {
    expect(calculateBaseOrSauce('20 cm', bases)).toBeTruthy()
  })
  test('returns a number', () => {
    expect(typeof calculateBaseOrSauce('25 cm', bases)).toBe('number')
  })
  test('returns the correct number when given a string with the cm value', () => {
    expect(calculateBaseOrSauce('20 cm', bases)).toBe(6.45)
    expect(calculateBaseOrSauce('25 cm', bases)).toBe(8.99)
    expect(calculateBaseOrSauce('30 cm', bases)).toBe(11.49)
    expect(calculateBaseOrSauce('35 cm', bases)).toBe(13.49)
  })
  test('returns the correct number when given an index', () => {
    expect(calculateBaseOrSauce(0, bases)).toBe(6.45)
    expect(calculateBaseOrSauce(1, bases)).toBe(8.99)
    expect(calculateBaseOrSauce(2, bases)).toBe(11.49)
    expect(calculateBaseOrSauce(3, bases)).toBe(13.49)
  })
})

describe('calculateBaseOrSauce', () => {
  test('exists', () => {
    expect(calculateBaseOrSauce('white sauce', sauces)).toBeDefined()
  })
  test('returns something', () => {
    expect(calculateBaseOrSauce('white sauce', sauces)).toBeTruthy()
  })
  test('returns a number', () => {
    expect(typeof calculateBaseOrSauce('white sauce', sauces)).toBe('number')
  })
  test('returns the correct number when called with the name of the sauce', () => {
      expect(calculateBaseOrSauce('white sauce', sauces)).toBe(0.50)
      expect(calculateBaseOrSauce('red sauce', sauces)).toBe(0.50)
      expect(calculateBaseOrSauce('double red sauce', sauces)).toBe(1.00)
      expect(calculateBaseOrSauce('mix it up', sauces)).toBe(1.50)
  })
   test('when called with the index of the sauce', () => {
      expect(calculateBaseOrSauce(0, sauces)).toBe(0.50)
      expect(calculateBaseOrSauce(1, sauces)).toBe(0.50)
      expect(calculateBaseOrSauce(2, sauces)).toBe(1.00)
      expect(calculateBaseOrSauce(3, sauces)).toBe(1.50)
    })
})

describe('calculateToppings', () => {
  test('exists', () => {
    expect(calculateToppings()).toBeDefined()
  })
  test('returns 0 if no toppings are selected', () => {
    expect(calculateToppings()).toBe(0)
  })
  test('returns a number', () => {
    expect(typeof calculateToppings()).toBe('number')
  })
  test('returns the correct number when the number of toppings is entered', () => {
    expect(calculateToppings(1)).toBe(0.50)
    expect(calculateToppings(2)).toBe(1.00)
    expect(calculateToppings(3)).toBe(1.50)
  })
  test('returns false if the number of toppings has been exceeded', () => {
    expect(calculateToppings(4)).toBe(false)
  })
})

describe('calculateTurboDrone', () => {
  test('exists', () => {
    expect(calculateTurboDrone()).toBeDefined()
  })
  test('returns something', () => {
    expect(calculateTurboDrone(0,0)).toBe(0)
  })
  test('returns a number', () => {
    expect(typeof calculateTurboDrone()).toBe('number')
  })
  test('returns the correct number with no toppings', () => {
    expect(calculateTurboDrone(6.45, 1.00)).toBeCloseTo(0.75, 2)
  })
  test('with one topping', () => {
    expect(calculateTurboDrone(6.45, 1.00, 0.50)).toBeCloseTo(0.80, 2)
  })
  test('with two toppings', () => {
    expect(calculateTurboDrone(6.45, 1.00, 1.00)).toBeCloseTo(0.85, 2)
  })
  test('with three toppings', () => {
    expect(calculateTurboDrone(6.45, 1.00, 1.50)).toBeCloseTo(0.89, 2)
  })
})

describe('calculateTotal', () => {
  test('exists', () => {
    expect(calculateTotal()).toBeDefined()
  })
  test('returns something', () => {
    expect(calculateTotal()).toBe(6.95)
  })
  test('returns a number', () => {
    expect(typeof calculateTotal()).toBe('number')
  })
  test('returns the correct number with no toppings and no turbo drone', () => {
    expect(calculateTotal(6.45, 1.00)).toBeCloseTo(7.45, 2)
  })
  test('with one topping', () => {
    expect(calculateTotal(6.45, 1.00, 0.50)).toBeCloseTo(7.95, 2)
  })
  test('with two toppings', () => {
    expect(calculateTotal(6.45, 1.00, 1.00)).toBeCloseTo(8.45, 2)
  })
  test('with three toppings', () => {
    expect(calculateTotal(6.45, 1.00, 1.50)).toBeCloseTo(8.95, 2)
  })
  test('returns the correct number with no toppings and turbo drone selected', () => {
    expect(calculateTotal(6.45, 1.00, true)).toBeCloseTo(8.45, 2)
  })
  test('with one topping', () => {
    expect(calculateTotal(6.45, 1.00, 0.50, true)).toBeCloseTo(8.75, 2)
  })
  test('with two toppings', () => {
    expect(calculateTotal(6.45, 1.00, 1.00, true)).toBeCloseTo(9.30, 2)
  })
  test('with three toppings', () => {
    expect(calculateTotal(6.45, 1.00, 1.50, true)).toBeCloseTo(9.84, 2)
  })
})