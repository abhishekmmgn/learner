import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbuPudRHSXLIDlJf75z45hn5pN8JqSz44",
  authDomain: "learner-007-93afa.firebaseapp.com",
  projectId: "learner-007-93afa",
  storageBucket: "learner-007-93afa.appspot.com",
  messagingSenderId: "674957036363",
  appId: "1:674957036363:web:5e6ca746e22b7c16f776ce",
  measurementId: "G-5HPQBKJ950",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
