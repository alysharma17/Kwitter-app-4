//Firebase, thanks for giving me these links, my css is nice though
var firebaseConfig = {
  apiKey: "AIzaSyAKsd2sPGe49t302jbgTjY6TSS_ZuDGfxQ",
  authDomain: "kwitter-chat-project.firebaseapp.com",
  databaseURL: "https://kwitter-chat-project-default-rtdb.firebaseio.com",
  projectId: "kwitter-chat-project",
  storageBucket: "kwitter-chat-project.appspot.com",
  messagingSenderId: "258991975091",
  appId: "1:258991975091:web:5084d1f46ec127b86fdec6",
  measurementId: "G-SGL8CRR8ML"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 
 
 var row="<div class='room_name' id='Room_names' onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;

});});}

 getData();

 function RedirectToRoomName(name) {
  name=document.getElementById("room_name").value;
   localStorage.setItem("name_of_room", name);
   window.location="kwitter_chat.html";
 }


function add_room()  {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });


  
localStorage.setItem("room_name", room_name);
window.location="kwitter_chat.html";
}





function send() {
  var message=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0

  });
  document.getElementById("msg").value="   ";
}




function updateLike(message_id) {
  button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; 
  console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes });
}