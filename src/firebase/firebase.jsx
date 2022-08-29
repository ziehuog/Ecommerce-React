// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLI6--9TXzqrosUJJlaXl2BCaU3Kcl974",
  authDomain: "ecommerce-react-ecd28.firebaseapp.com",
  projectId: "ecommerce-react-ecd28",
  storageBucket: "ecommerce-react-ecd28.appspot.com",
  messagingSenderId: "334686741107",
  appId: "1:334686741107:web:21ba835c680701a490c006",
  measurementId: "G-5WTKJGM92K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)