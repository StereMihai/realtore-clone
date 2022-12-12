// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhY2kJx3rby4S9dvKJ14P9YI8oEqiJevw",
    authDomain: "realtor-clone-react-b8951.firebaseapp.com",
    projectId: "realtor-clone-react-b8951",
    storageBucket: "realtor-clone-react-b8951.appspot.com",
    messagingSenderId: "867349249994",
    appId: "1:867349249994:web:f9301b0845f3f26d07d933"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()