#!/usr/bin/node
// a script that prints the title of a Star Wars movie 
// where the episode number matches a given integer.

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
  } else {
    const movie = JSON.parse(body);
    console.log(`Title: ${movie.title}`);
  }
});
