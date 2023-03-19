import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKGcsR7D1VL2wJOuMjm4bVujViOesRAzc",
  authDomain: "bigdata-medi.firebaseapp.com",
  projectId: "bigdata-medi",
  storageBucket: "bigdata-medi.appspot.com",
  messagingSenderId: "1061101616575",
  appId: "1:1061101616575:web:cc8f558d87ebcb3059f50a",
  measurementId: "G-DXB4HHXTRS",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
