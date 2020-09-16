import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCS0VFtYD22wVKGNe8hvKmQgEZBtdzPH1o",
  authDomain: "clone-1f843.firebaseapp.com",
  databaseURL: "https://clone-1f843.firebaseio.com",
  projectId: "clone-1f843",
  storageBucket: "clone-1f843.appspot.com",
  messagingSenderId: "723675730583",
  appId: "1:723675730583:web:1b186ad215e08207858fd2",
  measurementId: "G-Q4LYLHPT21"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};