const { bases, toppings, sauces } = require('../constants')

const Pizza = {};

Pizza.calculateBase = (id) => {
  if (typeof id === 'string') {
    return bases.filter(base => base.hasOwnProperty(id))[0][id]
  }
  else return Object.values(bases[id])[0]
}

Pizza.calculateSauce = (id) => {
if(typeof id === 'string') {
  return sauces.filter(sauce => sauce.hasOwnProperty(id))[0][id]
}
else return Object.values(sauces[id])[0]
}

//implement your form and see what you get back before you work this one out!

Pizza.calculateToppings = () => {
  return 1
}

module.exports = Pizza;
// console.log('Connected to constants file', bases[0])