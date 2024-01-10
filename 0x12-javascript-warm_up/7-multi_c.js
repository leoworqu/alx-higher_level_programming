#!/usr/bin/node

// Script that prints three lines using an array of strings and a loop
const x = process.argv[2];

if (!isNaN(x)){
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
else {
  console.log('Missing number of occurrences');
  }
