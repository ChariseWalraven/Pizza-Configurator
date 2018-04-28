// const { bases, sauces } = require('../constants')

const Pizza = {};

Pizza.calculateBaseOrSauce = (id, data) => {
if(typeof id === 'string') {
  return data.filter(e => e.hasOwnProperty(id))[0][id]
}
else return Object.values(data[id])[0]
}

//implement your form and see what you get back before you work this one out!

// Pizza.calculateToppings = function(...args) {
//   let result = 1
//   const argValues = Object.values(arguments)
//   // console.log(typeof argValues[0])
//   if(typeof argValues[0] === 'string') {
//     const validToppings = argValues.filter(val => toppings.includes(val)) // returns an array of toppings
//     if(validToppings.length < 4) result = 0.5 * validToppings.length
//   }
//   if(typeof argValues[0] === 'number') {
//     // check if arg values are valid
//     console.log(argValues.reduce((acc, val) => {
        
//     }, []).length)
//   }
//   return result
//   }

// console.log(Pizza.calculateToppings(0, 2, 2))

Pizza.getBaseOrSauceName = (baseOrSauce) => {
  // grab name from base/sauce and return it
  return Object.keys(baseOrSauce)
}

module.exports = Pizza;
// console.log('Connected to constants file', bases[0])