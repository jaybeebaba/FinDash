import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA5nUGJfUCcYaOyyWP9grkIYMy8CjvQoY8",
    authDomain: "findash-ee33b.firebaseapp.com",
    projectId: "findash-ee33b",
    storageBucket: "findash-ee33b.appspot.com",
    messagingSenderId: "484100966631",
    appId: "1:484100966631:web:7bbea11a1869a195727a42"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFireStore = firebase.firestore();

  const projectAuth = firebase.auth()

  const timeStamp = firebase.firestore.Timestamp

  export {projectFireStore, projectAuth, timeStamp}