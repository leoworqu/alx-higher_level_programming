#!/usr/bin/node
//  a script that computes the number of tasks completed by user id.

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    const todos = JSON.parse(body);
    const completedTasksByUser = {};
    todos.forEach(todo => {
      if (todo.completed) {
        completedTasksByUser[todo.userId] = (completedTasksByUser[todo.userId] || 0) + 1;
      }
    });
    console.log(completedTasksByUser);
  }
});
