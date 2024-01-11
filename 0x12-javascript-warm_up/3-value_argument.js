#!/usr/bin/node

// Assignss a constant to the second command line argument
const firstArgument = process.argv[2];

if (firstArgument === undefined) {
  console.log('No argument');
} else {
  console.log(firstArgument);
}
