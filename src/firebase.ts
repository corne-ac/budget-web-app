// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtz2NJx2NsyMs31BMlbcmnbqjQhfopajY",
  authDomain: "budget-webapp-ae6e0.firebaseapp.com",
  projectId: "budget-webapp-ae6e0",
  storageBucket: "budget-webapp-ae6e0.appspot.com",
  messagingSenderId: "688600688581",
  appId: "1:688600688581:web:f5e3f2d00857e683f68dac",
  measurementId: "G-B11XJS3QN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);