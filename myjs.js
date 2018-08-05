var database = firebase.database();

var ref = database.ref().on('check').val();
  var element = document.getElementById("mp");
element.innerHTML = check;



