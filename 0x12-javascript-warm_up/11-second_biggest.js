#!/usr/bin/node

// a script that searches the second biggest integer in the list of arguments.
const args = process.argv.slice(2).map(arg => parseInt(arg));

if (args.length === 0 || args.length === 1) {
  console.log(0);
} else {
  const sortedArgs = args.sort((a, b) => b - a);
  console.log(sortedArgs[1]);
}
