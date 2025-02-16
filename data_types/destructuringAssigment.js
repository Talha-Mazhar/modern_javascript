// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects
// into a bunch of variables, as sometimes that’s more convenient.
// Destructuring also works well with complex functions contains lot of parameters, default values

// let arr = ['John', 'Smith']
// let [firstName, surname] = arr

// let [fName, sName] = 'John Smith'.split(' ')

// // second element is not needed
// let [firame, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']
// // rest of the array items are also skipped

// // Works with any iterable on the right-side
// let [a, b, c] = 'abc' // ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3])

// let user = {}
// // [user.name, user.surname] = 'John Smith'.split(' ')

// // works with multiple obj properties
// let user2 = {
//   name: 'John',
//   age: 30,
// }
// // loop over the keys-and-values
// for (let [key, value] of Object.entries(user2)) {
//   alert(`${key}:${value}`) // name:John, then age:30
// }

// let user3 = new Map()
// user3.set('name', 'John')
// user3.set('age', '30')

// // Map iterates as [key, value] pairs, destructuring
// for (let [key, value] of user3) {
//   alert(`${key}:${value}`) // name:John, then age:30
// }

// let guest = 'Jane'
// let admin = 'Pete'

// // swap the values
// // [guest, admin] = [admin, guest]

// alert(`${guest} ${admin}`)

// // ...All other properties
// let [name1, name2, ...rest] = [
//   'Julius',
//   'Caesar',
//   'Consul',
//   'of the Roman Republic',
// ]

// // rest is an array of items, starting from the 3rd one
// alert(rest[0]) // Consul
// alert(rest[1]) // of the Roman Republic
// alert(rest.length) //2

// // Object Destructuring
// let options = {
//   title: 'Menu',
//   width: 100,
//   height: 200,
// }

// let { title1, width, height } = options

// alert(title1) // Menu
// alert(width) // 100
// alert(height) // 200
// // The order does not matter

// let options2 = {
//   title: 'Menu',
//   width: 100,
//   height: 200,
// }

// { sourceProperty: targetVariable }
// let { width: w, height: h, title: title2 } = options

// Default destructure values
// let options = {
//   title: 'Menu',
// }

// let { width = 100, height = 200, title } = options

// Default can be function calls
// let options = {
//     title: "Menu"
//   };

//   let {width = prompt("width?"), title = prompt("title?")} = options;

// Nested Assignment

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ['Cake', 'Donut'],
//   extra: true,
// }

// // destructuring assignment split in multiple lines for clarity
// let {
//   size: {
//     // put size here
//     width,
//     height,
//   },
//   items: [item1, item2], // assign items here
//   title = 'Menu', // not present in the object (default value is used)
// } = options

// Task1
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)

let user4 = { name3: 'John', years: 30 }

let { name3, years, isAdmin = false } = user4
console.log(`${name3} ${years} ${isAdmin}`)

// Task2
// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.

// function topSalaries(obj) {
//   let toPaidSal = 0;
//   let topPaidname = null;

//   fot(const [name, salary] of Object.entries(obj)){

//         if (salary >= toPaidSal) {
//             toPaidSal = salary
//             topPaidname = name
//         }

//   } return maxName;

// }

function topSalary(salaries) {
  let maxSalary = 0
  let maxName = null

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary
      maxName = name
    }
  }

  return maxName
}
