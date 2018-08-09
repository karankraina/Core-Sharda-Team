
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

  firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('SIGNED IN');
    alert('ahsdfhbamhfdj');
    window.location.href = "learnsharda.html"; // <-- This is not good...
  } else {
    console.log('NOT SIGNED IN');
  }
})

