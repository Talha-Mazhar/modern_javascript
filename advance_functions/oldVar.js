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
