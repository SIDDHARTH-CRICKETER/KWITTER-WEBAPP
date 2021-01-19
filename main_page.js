var firebaseConfig = {
  apiKey: "AIzaSyAfHg19lzdIBhsQFiV-hDcwY2qtXLPguqw",
  authDomain: "kwitter-ca1ce.firebaseapp.com",
  projectId: "kwitter-ca1ce",
  storageBucket: "kwitter-ca1ce.appspot.com",
  messagingSenderId: "70899047705",
  appId: "1:70899047705:web:ef9df9e08fd9b8073e3988",
  measurementId: "G-TBLDM0VVVS"
};
  firebase.initializeApp(config);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";