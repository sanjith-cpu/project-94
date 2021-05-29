var firebaseConfig = {
    apiKey: "AIzaSyBO0KV6lLukLyRMuAGXSwDCcAdFMNfiwyM",
    authDomain: "kwitter-d5627.firebaseapp.com",
    databaseURL: "https://kwitter-d5627-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5627",
    storageBucket: "kwitter-d5627.appspot.com",
    messagingSenderId: "290687690893",
    appId: "1:290687690893:web:48ace71fc8f1da6ad99ac4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")
function send() {
    msg = document.getElementById("msg").value 
    firebase.database().ref(room_name).push({
          name:user_name , 
          message:msg , 
          like:0
    })
    document.getElementById("msg").value = ""
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row

    //End code
    });});}
getData();
function redirectToRoomName(name) {
    localStorage.setItem("room_name" , name)
    window.location = "kwitter_page.html"
}
function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location.replace("index.html")
}