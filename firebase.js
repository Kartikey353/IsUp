// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Initialize Firebase


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCp0AVEhz3CsSjxaBUOZffTkvIMG2R4XU",
  authDomain: "kwiik-ecd3e.firebaseapp.com",
  projectId: "kwiik-ecd3e",
  storageBucket: "kwiik-ecd3e.appspot.com",
  messagingSenderId: "1055769633956",
  appId: "1:1055769633956:web:857bdb0f296e01a9e03231",
  measurementId: "G-ERJL4520ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);