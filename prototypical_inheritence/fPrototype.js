// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats);
// true; because it preserved old method

// Now modified

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;
// delete rabbit.eats;
delete Rabbit.prototype.eats;

console.log(rabbit.eats); // ?
// output: false;
// ouput: true
// output: undefined not available
