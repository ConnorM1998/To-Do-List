

//User clicked add Butoon
//If Text is present in item field, add that text to the todo-list
document.getElementById('add').addEventListener('click', function() {

  var value = document.getElementById('item').value;

  //If value is present (not null), display message
  if (value){
      console.log('There was a value');
  }

  //Log Value
  console.log(value);


});
