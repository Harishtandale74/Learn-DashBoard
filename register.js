// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB04NV0iZrSockE770_J3rWt6Nr9QslGyo",
  authDomain: "learning-dashboard-ebe16.firebaseapp.com",
  projectId: "learning-dashboard-ebe16",
  storageBucket: "learning-dashboard-ebe16.appspot.com",
  messagingSenderId: "1095353879639",
  appId: "1:1095353879639:web:3f458135602b9d8f08a712",
  measurementId: "G-T4788R92VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);