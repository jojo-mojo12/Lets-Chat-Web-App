
const firebaseConfig = {
      apiKey: "AIzaSyA6cNswGEJTaZ5b4RJCK6Ek7kkIB3-xjdc",
      authDomain: "kwitter-cbda4.firebaseapp.com",
      databaseURL: "https://kwitter-cbda4-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbda4",
      storageBucket: "kwitter-cbda4.appspot.com",
      messagingSenderId: "537604915371",
      appId: "1:537604915371:web:fb16a50bbdf049eb46f7ee"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
