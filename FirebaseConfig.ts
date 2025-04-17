// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ1Qhjz4JjdzUrL3hbnhGQyPMkpPfhESw",
  authDomain: "tutorly-2f462.firebaseapp.com",
  projectId: "tutorly-2f462",
  storageBucket: "tutorly-2f462.firebasestorage.app",
  messagingSenderId: "1034042482520",
  appId: "1:1034042482520:web:ae399e707812fcf70d0f2d",
  measurementId: "G-H79KRSCP3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);