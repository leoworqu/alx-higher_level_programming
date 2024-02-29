// Attach a click event handler to DIV#add_item
$('#add_item').click(function () {
  // Create a new <li> element with the content "Item"
  var newItem = $('<li>Item</li>')
  // Append the new <li> element to UL.my_list
  $('ul.my_list').append(newItem)
})