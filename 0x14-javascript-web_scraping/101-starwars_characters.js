#!/usr/bin/node
// a script that prints all characters of a Star Wars movie:

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Function to fetch character details from a character URL
function fetchCharacter (characterUrl) {
  return new Promise((resolve, reject) => {
    request.get(characterUrl, (error, response, body) => {
      if (error) {
        reject(error);
      } else if (response.statusCode !== 200) {
        reject(new Error(`${response.statusCode}`));
      } else {
        const character = JSON.parse(body);
        resolve(character.name);
      }
    });
  });
}

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    const movie = JSON.parse(body);
    Promise.all(movie.characters.map(fetchCharacter))
      .then(characterNames => {
        characterNames.forEach(name => {
          console.log(name);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
});
