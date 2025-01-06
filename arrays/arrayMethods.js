// Task 1

// Write the function camelize(str) that changes dash-separated words like
// “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
  const camelize = str
    .split('-')
    .map(
      (word, index) =>
        (index == 0 ? word : word[0].toUpperCase()) + word.slice(1)
    )
    .join('')
}
