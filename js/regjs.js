
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCZhX24w5s0zoD9TR_hQag37eHOSWyT7RY",
    authDomain: "sharda-web-tutorials.firebaseapp.com",
    databaseURL: "https://sharda-web-tutorials.firebaseio.com",
    projectId: "sharda-web-tutorials",
    storageBucket: "",
    messagingSenderId: "420632482729"
  };
  firebase.initializeApp(config);

var db = firebase.database();

function handleSignUp() {
     var email = document.getElementById('email').value;
      var password = document.getElementById('pwd').value;
      var name = document.getElementById('name').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
      // [END createwithemail]
      
      db.ref().child('Users').child(firebase.auth().currentUser.uid).child('Name').set(name);
      window.alert('Hath Hath Mubarak!!! Welcome!!!');
      
     window.open("login.html",'_self');
    }

function gotolog(){
  window.open("login.html",'_self');
    

}