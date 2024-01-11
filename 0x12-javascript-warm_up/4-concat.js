#!/usr/bin/node

//  print the output based on the presence of both arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 !== undefined && arg2 !== undefined) {
  console.log(`${arg1} is ${arg2}`);
} else if (arg1 !== undefined && arg2 === undefined) {
  console.log(`${arg1} is undefined`);
} else {
  console.log('undefined is undefined');
}
