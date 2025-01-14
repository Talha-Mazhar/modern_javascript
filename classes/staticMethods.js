// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit('Rab');

// // hasOwnProperty method is from Object.prototype
// alert(rabbit.hasOwnProperty('name')); // true

// class Rabbit extends Object {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit1 = new Rabbit('Rab');

// alert(rabbit1.hasOwnProperty('name')); // Error

// fix

class Rabbit extends Object {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

let rabbit1 = new Rabbit('Rab');

alert(rabbit1.hasOwnProperty('name')); // Error
