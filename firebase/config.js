import * as firebase from "firebase";

var firebaseConfig = { // project settings içinde web projesi oluştur.
  apiKey: "AIzaSyBvuFMqVZKBtAwlYoPCd7QKbo-ux9NBFjA",
  authDomain: "master-theisis-app-92c1c.firebaseapp.com",
  databaseURL: "https://master-theisis-app-92c1c-default-rtdb.firebaseio.com",
  projectId: "master-theisis-app-92c1c",
  storageBucket: "master-theisis-app-92c1c.appspot.com",
  messagingSenderId: "958474730521",
  appId: "1:958474730521:web:6bec5c0d7c932d1b907e88",
  measurementId: "G-B2GDY5TGX1",
};

if(firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
