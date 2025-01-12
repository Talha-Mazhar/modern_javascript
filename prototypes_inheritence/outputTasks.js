let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); //output = true

delete rabbit.jumps; //jums -deleted

console.log(rabbit.jumps); //output = null

delete animal.jumps;
// output: animal = {}

console.log(rabbit.jumps);
// output undefined no such proeprty exists
