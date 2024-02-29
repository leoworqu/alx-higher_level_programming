$(document).ready(function () {
  // Event listener for button click
  $('#btn_translate').click(function () {
    var languageCode = $('#language_code').val();
    var apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/?lang=' + languageCode;

    // Fetch translation from the API
    $.getJSON(apiUrl, function (data) {
      $('#hello').text(data.hello);
    });
  });
});