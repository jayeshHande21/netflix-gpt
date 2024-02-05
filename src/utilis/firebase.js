// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6a_yMaqam-uheFghDnZB2JcWm7KjIPDI",
  authDomain: "netflixgpt-5ea08.firebaseapp.com",
  projectId: "netflixgpt-5ea08",
  storageBucket: "netflixgpt-5ea08.appspot.com",
  messagingSenderId: "707813441582",
  appId: "1:707813441582:web:712b5a682eede31af15fbf",
  measurementId: "G-GRHTJ7FHT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
