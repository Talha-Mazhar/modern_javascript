// Task 1

// Write the function camelize(str) that changes dash-separated words like
// “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
  const camelizeWord = str
    .split('-')
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('')

  return camelizeWord
}

console.log(camelize('my-short-string')) //myShortString

// *****************Task 2 *********************

// Write a function filterRange(arr, a, b) that gets an array arr,
// looks for elements with values higher or equal to a and lower or equal to b and return a result
// as an array.

// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && b >= item)
}

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

console.log(filtered) // 3,1 (matching values)

// *****************Task 3 *********************

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and
// removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

let arr2 = [5, 3, 8, 1]

function filterRangeInPlace(arr = [], a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1)
      i--
    }
  }
}
filterRangeInPlace(arr2, 1, 4)

console.log(arr2)

// task 4

// Sort in decreasing order
let unSortArr = [5, 2, 1, -10, 8]

function sortInDec(arr = []) {
  return arr.sort((a, b) => b - a)
}

console.log(sortInDec(unSortArr))

// Task 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr = []) {
  return arr.slice().sort()
}

let arr3 = ['HTML', 'JavaScript', 'CSS']

let sorted = copySorted(arr3)

console.log(sorted) // CSS, HTML, JavaScript
console.log(arr3) // HTML, JavaScript, CSS (no changes)

// Task 6
// Create a constructor function Calculator that creates “extendable” calculator objects

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  }

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }

    return this.methods[op](a, b)
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func
  }
}

let powerCalc = new Calculator()
powerCalc.addMethod('*', (a, b) => a * b)
powerCalc.addMethod('/', (a, b) => a / b)
powerCalc.addMethod('**', (a, b) => a ** b)

let result = powerCalc.calculate('2 ** 3')

let result2 = powerCalc.calculate('2 / 3')
console.log(result)
