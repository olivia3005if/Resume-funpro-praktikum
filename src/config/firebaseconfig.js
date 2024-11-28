// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQtFYwB2aZRRBuvKHthJmF2xSSqRkX-9E",
  authDomain: "resume-funpro-prak.firebaseapp.com",
  projectId: "resume-funpro-prak",
  storageBucket: "resume-funpro-prak.firebasestorage.app",
  messagingSenderId: "62865268719",
  appId: "1:62865268719:web:27ecfc5a2f3756d648e01a",
  measurementId: "G-F75R2QYD2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);