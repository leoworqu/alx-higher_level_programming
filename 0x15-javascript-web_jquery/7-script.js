$.getJSON("https://swapi-api.alx-tools.com/api/people/5/?format=json", function (data) {
  // Update the content of DIV#character with the character name
  $('#character').text(data.name)
})