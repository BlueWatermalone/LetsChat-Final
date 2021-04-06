var firebaseConfig = {
      apiKey: "AIzaSyC_pAg8DrfEwq16Szf8mUBqZO4dlcE04Ws",
      authDomain: "letschat-98768.firebaseapp.com",
      databaseURL: "https://letschat-98768-default-rtdb.firebaseio.com",
      projectId: "letschat-98768",
      storageBucket: "letschat-98768.appspot.com",
      messagingSenderId: "2593705591",
      appId: "1:2593705591:web:754d61a856bf9814b4c072"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom () {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);
      window.location = "letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}     
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}