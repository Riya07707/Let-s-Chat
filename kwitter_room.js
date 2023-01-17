

var firebaseConfig = {
      apiKey: "AIzaSyAionFl9STOsKwH-b5YGOwbezr1hGG9V0w",
      authDomain: "kwitter-cbced.firebaseapp.com",
      databaseURL: "https://kwitter-cbced-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbced",
      storageBucket: "kwitter-cbced.appspot.com",
      messagingSenderId: "705350031412",
      appId: "1:705350031412:web:f9aa1e48a2292512979261"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name;

function addRoom() {
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}