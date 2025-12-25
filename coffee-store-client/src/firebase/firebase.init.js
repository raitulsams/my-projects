// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXqzSR1w_cVhpxmojUOTekzZHkW47edYQ",
    authDomain: "coffee-store-app-c849e.firebaseapp.com",
    projectId: "coffee-store-app-c849e",
    storageBucket: "coffee-store-app-c849e.firebasestorage.app",
    messagingSenderId: "747956203696",
    appId: "1:747956203696:web:3962a09a93a026ce528b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);