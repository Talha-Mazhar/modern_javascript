const objectProperties = {
  name: 'talha',
  phone: '1234567890',
  gender: 'male male male',
  age: 23,
  height: 6.1,
  wealth: 0o0,
}

console.log(Object.keys(objectProperties)) //[ 'name', 'phone', 'gender', 'age', 'height', 'wealth' ]
console.log(Object.entries(objectProperties))
// [
//   [ 'name', 'talha' ],
//   [ 'phone', '1234567890' ],
//   [ 'gender', 'male male male' ],
//   [ 'age', 23 ],
//   [ 'height', 6.1 ],
//   [ 'wealth', 0 ]
// ]
console.log(Object.values(objectProperties))
// [ 'talha', '1234567890', 'male male male', 23, 6.1, 0 ]

// Transform an Object

console.log(Object.fromEntries(Object.entries(objectProperties)))
// {
//     name: 'talha',
//     phone: '1234567890',
//     gender: 'male male male',
//     age: 23,
//     height: 6.1,
//     wealth: 0
//   }
// console.log(Object.fromEntries(Object.values(objectProperties)))
// TypeError: Iterator value talha is not an entry object
// console.log(Object.fromEntries(Object.keys(objectProperties)))
// TypeError: Iterator value name is not an entry object

// Example
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
}

let doublePrices = Object.fromEntries(
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
)

// console.log(Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])) //[ [ 'banana', 2 ], [ 'orange', 4 ], [ 'meat', 8 ] ]

console.log(doublePrices.meat) // 8

// Task1
// Return Sum of salaries

// function sumSalaries(salaries) {
//   sum = 0
//   for (let salary of Object.values(salaries)) {
//     sum += salary
//   }
//   return sum
// }

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

let sumSalaries = Object.values(salaries).reduce((a, b) => a + b, 0)

console.log(sumSalaries)

// Task2
// Count Properties
// Write a function count(obj) that returns the number of properties in the object:

function count(obj) {
  return Object.entries(obj).length
}

console.log(count(salaries))
