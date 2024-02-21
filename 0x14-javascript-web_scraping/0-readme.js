#!/usr/bin/node

//  a script that reads and prints the content of a file.

const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
  console.log(err || content);
});
