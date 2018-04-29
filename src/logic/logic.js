// const { bases, sauces } = require('../constants')

const Pizza = {};

Pizza.calculateBaseOrSauce = (id, data) => {
if(typeof id === 'string') {
  return data.filter(e => e.hasOwnProperty(id))[0][id]
}
else return Object.values(data[id])[0]
}

// Pizza.calculateBaseOrSauce('20 cm')

Pizza.calculateTurboDrone = (basePrice, saucePrice, toppingsPrice = 0) => {
  const x = ((basePrice + saucePrice + toppingsPrice) / 10)
  return Math.round(100 * x) / 100
}

Pizza.calculatePizzaTotal = (basePrice = 6.45, saucePrice = 0.50, toppingsPrice = 0, turboDrone = false) => {
  let result = basePrice + saucePrice + toppingsPrice
  if(turboDrone === true) {
    let turbo = Pizza.calculateTurboDrone(basePrice, saucePrice, toppingsPrice)
    result = result + turbo
  }
  return Math.round(100 * result) / 100
}


Pizza.calculateToppings = (numToppings = 0) => {
  let result = 0
  numToppings < 4 ? result = numToppings * 0.5 : result = false
  return result;
}

Pizza.getBaseOrSauceName = (baseOrSauce) => {
  // grab name from base/sauce and return it
  return Object.keys(baseOrSauce)
}

module.exports = Pizza;
// console.log('Connected to constants file', bases[0])