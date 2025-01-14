// Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('White Rabbit'); // Error: this is not defined
console.log(rabbit.name);

// Fixed added super in child constructor
