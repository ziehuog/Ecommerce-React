import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: 'AIzaSyBLI6--9TXzqrosUJJlaXl2BCaU3Kcl974',
  authDomain: 'ecommerce-react-ecd28.firebaseapp.com',
  projectId: 'ecommerce-react-ecd28',
  storageBucket: 'ecommerce-react-ecd28.appspot.com',
  messagingSenderId: '334686741107',
  appId: '1:334686741107:web:21ba835c680701a490c006',
  measurementId: 'G-5WTKJGM92K'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
