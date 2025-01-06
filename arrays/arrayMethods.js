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

console.log(arr) // 5,3,8,1 (not modified)
