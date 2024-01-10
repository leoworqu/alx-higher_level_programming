#!/usr/bin/node

// a script that prints a square

const arg = process.argv[2];
if (!isNaN(arg)) {
  for (let i = 0; i < arg; i++) {
    let result = '';
    for (let j = 0; j < arg; j++) {
      result += 'X';
    }
    console.log(result);
  }
}
