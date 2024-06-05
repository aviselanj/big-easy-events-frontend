// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "big-easy-events.firebaseapp.com",
    projectId: "big-easy-events",
    storageBucket: "big-easy-events.appspot.com",
    messagingSenderId: "1091105486093",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-Y0Q11BEJDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFireStore(app);
export default db;