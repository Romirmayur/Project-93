var firebaseConfig = {
    apiKey: "AIzaSyBmezEDOyDLOC49yqEhlpbobI5G1w3lxWc",
    authDomain: "test-a43e9.firebaseapp.com",
    databaseURL: "https://test-a43e9-default-rtdb.firebaseio.com",
    projectId: "test-a43e9",
    storageBucket: "test-a43e9.appspot.com",
    messagingSenderId: "31184291976",
    appId: "1:31184291976:web:006e40d5e372db32c0773d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}