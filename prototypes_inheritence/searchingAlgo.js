let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

// question1
// prototype = pockets => bed => table => head

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen); // 3 pass

// question 3
// to get glasses faster, how?

// ans: pockets.glasses; will be the faster way, no search will be needed, js engine already remembers the value
