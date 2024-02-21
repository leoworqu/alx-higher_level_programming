#!/usr/bin/node
// a script that prints the number of movies
// where the character “Wedge Antilles” is present.

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    const films = JSON.parse(body).results;
    const filmsWithWedge = films.filter(film =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );
    console.log(`${filmsWithWedge.length}`);
  }
});
