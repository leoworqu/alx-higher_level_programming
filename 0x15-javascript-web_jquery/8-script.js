// Fetch data from the URL
$.getJSON("https://swapi-api.alx-tools.com/api/films/?format=json", function(data) {
    // Iterate over each movie object in the results
    $.each(data.results, function(index, movie) {
        // Create a new list item for each movie title
        var listItem = $('<li>').text(movie.title);
        // Append the list item to the UL#list_movies
        $('#list_movies').append(listItem);
    });
});