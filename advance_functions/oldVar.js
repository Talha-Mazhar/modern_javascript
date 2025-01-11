function sayHi() {
  phrase = 'Hello';

  console.log(phrase);

  var phrase;
}
sayHi();

function sayHi1() {
  phrase = 'Hello'; // (*)

  if (false) {
    var phrase;
  }

  console.log(phrase);
}
sayHi1();

// IIFE

// Function Expresssions

(function () {
  alert('Parentheses around the function');
})();

(function () {
  alert('Parentheses around the whole thing');
})();

!(function () {
  alert('Bitwise NOT operator starts the expression');
})();

+(function () {
  alert('Unary plus starts the expression');
})();

// Make Private Vars

// IIFE

// immediately invoke funtion

(function () {
  var message = 'Hello';

  alert(message); // Hello
})();
