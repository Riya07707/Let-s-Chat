//YOUR FIREBASE LINKS
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
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send() {
    msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}