// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZQ92pl4UHQsFbwy1mOTjLDeADZOwNANY",
  authDomain: "scheduler-1a96e.firebaseapp.com",
  projectId: "scheduler-1a96e",
  storageBucket: "scheduler-1a96e.appspot.com",
  messagingSenderId: "839408942325",
  appId: "1:839408942325:web:ffcfce84340e66a556d9bc",
  measurementId: "G-0ZV13BEJ7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
