function add_user() {
    
    var user_name=document.getElementById("user_name").value;
    if (user_name=="") {
        window.alert("Username must not be empty");
    }
    else {
    localStorage.setItem("username", user_name);
    window.location="Kwitter_room.html";
    }
}