#!/usr/bin/node

// Script that prints "My number: <first argument converted to an integer>"
// or "Not a number"
const arg = process.argv[2];
const parsedNumber = parseInt(arg);

if (!isNaN(parsedNumber)) {
  console.log(`My number: ${parsedNumber}`);
} else {
  console.log('Not a number');
}
