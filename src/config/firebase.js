// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZEwVmzoGAxM1JIred9Fc9xLJwT6e31vo",
  authDomain: "alemeno-1.firebaseapp.com",
  databaseURL: "https://alemeno-1-default-rtdb.firebaseio.com",
  projectId: "alemeno-1",
  storageBucket: "alemeno-1.appspot.com",
  messagingSenderId: "656216586456",
  appId: "1:656216586456:web:a530b80ad191f2849effad",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
