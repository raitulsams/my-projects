// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNAJ2ExrG1YbbzhynWjuE6ttlXKhP9c8Y",
    authDomain: "email-pass-auth-687b3.firebaseapp.com",
    projectId: "email-pass-auth-687b3",
    storageBucket: "email-pass-auth-687b3.firebasestorage.app",
    messagingSenderId: "672107661172",
    appId: "1:672107661172:web:d6acc51b3955d88a9fce21",
    measurementId: "G-CZVLESNMH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
