// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLRRPievZgxYORleSENC2hFalx-El_iNY",
  authDomain: "zoonation-628ce.firebaseapp.com",
  projectId: "zoonation-628ce",
  storageBucket: "zoonation-628ce.appspot.com",
  messagingSenderId: "728974722526",
  appId: "1:728974722526:web:156516a400365a674a494f",
  measurementId: "G-GHBN4Y8VQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
export const imageDb = getStorage(app)
