const { calculateBase, calculateToppings, calculateSauce} = require('./logic')

describe('calculateBase', () => {
  test('exists', () => {
    expect(calculateBase('25 cm')).toBeDefined()
  })
  test('returns something', () => {
    expect(calculateBase('20 cm')).toBeTruthy()
  })
  test('returns a number', () => {
    expect(typeof calculateBase('25 cm')).toBe('number')
  })
  test('returns the correct number when given a string with the cm value', () => {
    expect(calculateBase('20 cm')).toBe(6.45)
    expect(calculateBase('25 cm')).toBe(8.99)
    expect(calculateBase('30 cm')).toBe(11.49)
    expect(calculateBase('35 cm')).toBe(13.49)
  })
  test('returns the correct number when given an index', () => {
    expect(calculateBase(0)).toBe(6.45)
    expect(calculateBase(1)).toBe(8.99)
    expect(calculateBase(2)).toBe(11.49)
    expect(calculateBase(3)).toBe(13.49)
  })
})

describe('calculateSauce', () => {
  test('exists', () => {
    expect(calculateSauce('white sauce')).toBeDefined()
  })
  test('returns something', () => {
    expect(calculateSauce('white sauce')).toBeTruthy()
  })
  test('returns a number', () => {
    expect(typeof calculateSauce('white sauce')).toBe('number')
  })
  test('returns the correct number when called with the name of the sauce', () => {
      expect(calculateSauce('white sauce')).toBe(0.50)
      expect(calculateSauce('red sauce')).toBe(0.50)
      expect(calculateSauce('double red sauce')).toBe(1.00)
      expect(calculateSauce('mix it up')).toBe(1.50)
  })
   test('when called with the index of the sauce', () => {
      expect(calculateSauce(0)).toBe(0.50)
      expect(calculateSauce(1)).toBe(0.50)
      expect(calculateSauce(2)).toBe(1.00)
      expect(calculateSauce(3)).toBe(1.50)
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