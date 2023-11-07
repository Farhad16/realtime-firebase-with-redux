import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZEwVmzoGAxM1JIred9Fc9xLJwT6e31vo",
  authDomain: "alemeno-1.firebaseapp.com",
  databaseURL: "https://alemeno-1-default-rtdb.firebaseio.com",
  projectId: "alemeno-1",
  storageBucket: "alemeno-1.appspot.com",
  messagingSenderId: "656216586456",
  appId: "1:656216586456:web:a530b80ad191f2849effad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebaseApp };
