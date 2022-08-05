// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyQP7n7Xj7NfAj0oHecDh50u0PJivCa9c",
  authDomain: "uber-next-clone-d70c3.firebaseapp.com",
  projectId: "uber-next-clone-d70c3",
  storageBucket: "uber-next-clone-d70c3.appspot.com",
  messagingSenderId: "1077159279534",
  appId: "1:1077159279534:web:1b8fa00980cb820f66263f",
  measurementId: "G-84JTFCYEDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth}