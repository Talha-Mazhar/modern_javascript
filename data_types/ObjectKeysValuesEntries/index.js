console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith

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
