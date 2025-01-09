// current date
let date = new Date()

// the hour in your current time zone
console.log(date.getHours())

// the hour in UTC+0 time zone (London time without daylight savings)
console.log(date.getUTCHours())

function diffSubtract(date1, date2) {
  return date2 - date1
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime()
}

function bench(f) {
  let date1 = new Date(0)
  let date2 = new Date()

  let start = Date.now()
  for (let i = 0; i < 100000; i++) f(date1, date2)
  return Date.now() - start
}

console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms')
console.log('Time of diffGetTime: ' + bench(diffGetTime) + 'ms')
