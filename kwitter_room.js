const firebaseConfig = {
      apiKey: "AIzaSyBg1Tf__oOC1KIXv8IekImT8uxqel_o9qM",
      authDomain: "let-s-chat-web-e12c0.firebaseapp.com",
      projectId: "let-s-chat-web-e12c0",
      storageBucket: "let-s-chat-web-e12c0.appspot.com",
      messagingSenderId: "954627250992",
      appId: "1:954627250992:web:1f33076b3b06ef48c3c6f5",
      databaseURL: "https://let-s-chat-web-e12c0-default-rtdb.firebaseio.com/"
    };
  
    firebase.initializeApp(firebaseConfig);
  
  function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
              const childKey = childSnapshot.key;
              const roomNames = childKey;
              console.log("Room name - " + roomNames);
              const row = "<div class='room_name' id='rnmdiv'" + roomNames + " onclick='redirectToRoomName(this.id)'>#" + roomNames + "</div>";
              document.getElementById("output").innerHTML += row;
          });
      });
  }
  
  getData();
  
  document.addEventListener('DOMContentLoaded', (event) => {
      const username = localStorage.getItem("user_name");
      if (username) {
          console.log(username);
          document.getElementById("un").innerHTML = "Greetings, " + username + "!";
      } else {
        document.getElementById("un").innerHTML = "Greetings, User!";
      }
  });

  function addRoom() {
      const roomName = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(roomName).update({
          purpose: "adding room name"
      });
  
      localStorage.setItem("room_name", roomName);
      window.location = "kwitter_page.html";
  }
  
  function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  