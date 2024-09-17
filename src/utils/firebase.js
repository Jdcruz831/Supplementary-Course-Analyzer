// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvEjPI_iBmEdCg2PZ3zK_1tjDILfexkfU",
  authDomain: "pal-analyzer.firebaseapp.com",
  projectId: "pal-analyzer",
  storageBucket: "pal-analyzer.appspot.com",
  messagingSenderId: "851912563710",
  appId: "1:851912563710:web:53735094fc1648f436feaf",
  measurementId: "G-K98WWM6XKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export const auth = getAuth(app);
