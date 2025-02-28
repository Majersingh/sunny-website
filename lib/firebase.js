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
    apiKey: "AIzaSyD_y3TS331K6_d2YJg6ZAUKqdrwonwMwMs",
    authDomain: "sov-networks.firebaseapp.com",
    projectId: "sov-networks",
    storageBucket: "sov-networks.firebasestorage.app",
    messagingSenderId: "986685222897",
    appId: "1:986685222897:web:1d0d8ff00ad9fe8f9f1e50",
    measurementId: "G-CJ4NK53N5C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = typeof window !== "undefined" ? getAnalytics(app) : null; // Ensure analytics runs only on the client
const database = getFirestore(app); // Realtime Database
const auth = getAuth(app);//authenticator

export { app, analytics, database ,auth};