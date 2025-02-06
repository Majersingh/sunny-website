// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Add this if using Realtime Database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Zm6oSHWCLZaf_J2uuPcTdU6TiPKthPA",
  authDomain: "my-firebase-db07.firebaseapp.com",
  databaseURL: "https://my-firebase-db07-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-firebase-db07",
  storageBucket: "my-firebase-db07.firebasestorage.app",
  messagingSenderId: "452532910623",
  appId: "1:452532910623:web:4a0009b67328f28667b32a",
  measurementId: "G-TYSJV1R9HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = typeof window !== "undefined" ? getAnalytics(app) : null; // Ensure analytics runs only on the client
const database = getFirestore(app); // Realtime Database
const auth = getAuth(app);//authenticator

export { app, analytics, database ,auth};