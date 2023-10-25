import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5wf62-4-0QqUToAu-b3EU9X6kx41JZC0",
  authDomain: "chat-9e442.firebaseapp.com",
  projectId: "chat-9e442",
  storageBucket: "chat-9e442.appspot.com",
  messagingSenderId: "684742543056",
  appId: "1:684742543056:web:6d3c3c4f9c761264e7c0d5",
};

//Initialize firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
