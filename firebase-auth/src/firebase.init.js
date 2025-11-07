// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMlnIihkkaWqGgtf53t2z4cFTZWOcne58",
    authDomain: "fir-auth-app-a2c93.firebaseapp.com",
    projectId: "fir-auth-app-a2c93",
    storageBucket: "fir-auth-app-a2c93.firebasestorage.app",
    messagingSenderId: "375371209117",
    appId: "1:375371209117:web:71e8a77e1b37e1efb17774",
    measurementId: "G-2HGMYQG8Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;