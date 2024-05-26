const firebaseConfig = {
      apiKey: "AIzaSyBg1Tf__oOC1KIXv8IekImT8uxqel_o9qM",
      authDomain: "let-s-chat-web-e12c0.firebaseapp.com",
      projectId: "let-s-chat-web-e12c0",
      storageBucket: "let-s-chat-web-e12c0.appspot.com",
      messagingSenderId: "954627250992",
      appId: "1:954627250992:web:38ce19c496995ff2c3c6f5"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
