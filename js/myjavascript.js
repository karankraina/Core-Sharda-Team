
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
function updateProfile(){
  var first = document.getElementById('first').value;
      var last = document.getElementById('last').value;
      var mob = document.getElementById('mob').value;
      upDate(first, last, mob);
      alert('Information Updated !!!');
      window.open('learnsharda.html', '_self')


      
}

function upDate(a,b,c){
  db.ref().child('Users').child(firebase.auth().currentUser.uid).child('First Name').set(a);
      db.ref().child('Users').child(firebase.auth().currentUser.uid).child('Last Name').set(b);
      db.ref().child('Users').child(firebase.auth().currentUser.uid).child('Mobile').set(c);

}

function handleSignUp() {
     var email = document.getElementById('regemail').value;
      var password = document.getElementById('regpwd').value;
      //var name = document.getElementById('name').value;
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
         // alert(errorMessage);
        }
        console.log(error);
      });
      // [END createwithemail]
      alert ('Mubarak!!! Please provide some details .');
      window.open("profile.html",'_self');
      
    }


    function toggleSignIn() {
     // if (firebase.auth().currentUser) {
        // [START signout]
//firebase.auth().signOut();
        // [END signout]
     // } else {
        var email = document.getElementById('logemail').value;
        var password = document.getElementById('logpassword').value;
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
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
   // user signed in
   alert('Sign In successful');
            window.open('learnsharda.html','_self');
            }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            //alert(errorMessage);
          }
          console.log(error);
          firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                   // User is signed in.
                   

              } else {
    // No user is signed in.
                }
          });
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
       
    }
      

      firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      console.log("Hurray ! signed in successfully !");
      //window.alert('Hath Hath Mubarak!!! Welcome!!!');
      
     //window.open("login.html",'_self');
  } else {
    // No user is signed in.
     console.log("Sign in required !");
     $("#login-btn-nav").click();
  }
});


function gotolog(){
  window.open("login.html",'_self');
    

}
function mysignOut(){
  firebase.auth().signOut()
  .then(function() {
    // Sign-out successful.
    alert('signed out');
    window.open('logout.html', '_self');
  })
  .catch(function(error) {
    // An error happened
    alert('errrroorrrrr');
  });
}