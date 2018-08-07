
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


 function toggleSignIn() {
     // if (firebase.auth().currentUser) {
        // [START signout]
//firebase.auth().signOut();
        // [END signout]
     // } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
        window.alert('Welcome!!!');
        window.open("index.html",'_self');
    }
      

function gotolog(){
  window.open("register.html",'_self');
    

}