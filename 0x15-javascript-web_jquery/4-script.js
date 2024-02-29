// Attach a click event handler to DIV#toggle_header
$('#toggle_header').click(function () {
  // Check if the <header> element has the class "red"
  if ($('header').hasClass('red')) {
    // If it does, remove the class "red" and add the class "green"
    $('header').removeClass('red').addClass('green')
  } else {
    // If it doesn't, remove the class "green" and add the class "red"
    $('header').removeClass('green').addClass('red')
  }
})