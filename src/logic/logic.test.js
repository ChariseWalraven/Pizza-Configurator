const { calculateBaseOrSauce, calculateToppings} = require('./logic')
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
  test('returns something', () => {
    expect(calculateToppings()).toBeTruthy()
  })
  test('returns a number', () => {
    expect(typeof calculateToppings()).toBe('number')
  })
  test('returns the correct number when one, two, and three strings are entered', () => {
    expect(calculateToppings('Pineapple')).toBe(0.50)
    expect(calculateToppings('Pineapple', 'Corn')).toBe(1.00)
    expect(calculateToppings('Pineapple', 'Corn', 'Olives(green)')).toBe(1.50)
  })
  test('returns the correct number when one, two, and three indexes are entered', () => {
    expect(calculateToppings(0)).toBe(0.50)
    expect(calculateToppings(0,1)).toBe(1.00)
    expect(calculateToppings(0,1,2)).toBe(1.50)
  })
  test('has up to 3 arguments', () => {
    expect(calculateToppings()).toBeCalledWith(string, string, string)
    expect(calculateToppings()).toBeCalledWith(number, number, number)
  })
})