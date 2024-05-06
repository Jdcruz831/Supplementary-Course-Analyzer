// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPgVaz68q0TpDFzK2crq6dv7SHVdQewQ0",
  authDomain: "the-scriptors.firebaseapp.com",
  projectId: "the-scriptors",
  storageBucket: "the-scriptors.appspot.com",
  messagingSenderId: "202862660845",
  appId: "1:202862660845:web:26db6e4e2c8e6aa546d0e4",
  measurementId: "G-42SMX3XP19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);