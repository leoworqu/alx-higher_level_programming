$(document).ready(function () {
  // Fetch data from the URL
  $.getJSON("https://hellosalut.stefanbohacek.dev/?lang=fr", function (data) {
    // Display the translation of "hello" in the DIV#hello tag
    $('#hello').text(data.hello)
  })
})