// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAcGso0MlkokBnSoAtQLzQn9eRaeJwLDM",
  authDomain: "simple-firebase-recap-be1d8.firebaseapp.com",
  projectId: "simple-firebase-recap-be1d8",
  storageBucket: "simple-firebase-recap-be1d8.appspot.com",
  messagingSenderId: "86608341956",
  appId: "1:86608341956:web:f7d0795c2f527c1a619291",
  measurementId: "G-0YLYM4MV80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;