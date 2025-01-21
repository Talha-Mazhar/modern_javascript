// The task is to create a generator function pseudoRandom(seed)
// that takes seed and creates the generator with this formula.
// next = previous * 16807 % 2147483647

funtion* pseudoRandom(seed) {
    yield* *(16807 % 2147483647)
}

let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);