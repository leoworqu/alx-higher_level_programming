$(document).ready(function () {
  // Function to fetch translation
  function fetchTranslation() {
    var languageCode = $('#language_code').val();
    var apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/?lang=' + languageCode;

    // Fetch translation from the API
    $.getJSON(apiUrl, function (data) {
      $('#hello').text(data.hello);
    });
  }

  // Event listener for button click
  $('#btn_translate').click(fetchTranslation);

  // Event listener for pressing ENTER key
  $('#language_code').keypress(function (event) {
    if (event.which === 13) {
      fetchTranslation();
    }
  });
});