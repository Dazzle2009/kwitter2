// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBx10jn4M7iFJ3lgcVYGHnXxgyVCRSwe1Y",
    authDomain: "kwitter2-eca52.firebaseapp.com",
    databaseURL: "https://kwitter2-eca52-default-rtdb.firebaseio.com",
    projectId: "kwitter2-eca52",
    storageBucket: "kwitter2-eca52.appspot.com",
    messagingSenderId: "656147557411",
    appId: "1:656147557411:web:1870e7dd9908eb86f1d596",
    measurementId: "G-JWCWYYCE21"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();