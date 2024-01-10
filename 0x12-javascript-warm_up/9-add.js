#!/usr/bin/node

// a script that prints the addition of 2 integers

function add (a, b) {
  return a + b;
}

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);

if (!isNaN(y) && !isNaN(x)) {
  console.log(add(x, y));
} else {
  console.log('NaN');
}
