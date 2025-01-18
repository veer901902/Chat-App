import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOwHu2LQPYERZ4PqosOHQmq4fBSYQtNMw",
  authDomain: "chatapp-aa153.firebaseapp.com",
  projectId: "chatapp-aa153",
  storageBucket: "chatapp-aa153.appspot.com",
  messagingSenderId: "37643183425",
  appId: "1:37643183425:web:5041b8177ce51651ae6dc0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
