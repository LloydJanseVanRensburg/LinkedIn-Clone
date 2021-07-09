import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZ3mcwlVuxGGwaxNyjPuWdT2oiYj2Xeec",
  authDomain: "linkedin-clone-2dc4d.firebaseapp.com",
  projectId: "linkedin-clone-2dc4d",
  storageBucket: "linkedin-clone-2dc4d.appspot.com",
  messagingSenderId: "100891023534",
  appId: "1:100891023534:web:9e50d9facaa273d981b53f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
