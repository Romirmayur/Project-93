//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBmezEDOyDLOC49yqEhlpbobI5G1w3lxWc",
      authDomain: "test-a43e9.firebaseapp.com",
      databaseURL: "https://test-a43e9-default-rtdb.firebaseio.com",
      projectId: "test-a43e9",
      storageBucket: "test-a43e9.appspot.com",
      messagingSenderId: "31184291976",
      appId: "1:31184291976:web:006e40d5e372db32c0773d"
    };
    
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });
      document.getElementById("msg").value = "";
}