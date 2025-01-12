function sayHi() {
  alert('Hi');
}

console.log(sayHi.name);

// length returns paramaters count of funtion
// rest operator is not counted because of introspection

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length);
console.log(f2.length);
console.log(many.length);
