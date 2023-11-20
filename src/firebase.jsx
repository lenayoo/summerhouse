// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn0gFii4I06KIrytSP3ITHQ4G4ooSpMXw",
  authDomain: "yeojusummerhouse.firebaseapp.com",
  projectId: "yeojusummerhouse",
  storageBucket: "yeojusummerhouse.appspot.com",
  messagingSenderId: "226896616629",
  appId: "1:226896616629:web:268e188e9d39211a66f2fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
