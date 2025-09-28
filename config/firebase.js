// import { initializeApp, firebase } from "firebase/app";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

  apiKey: "AIzaSyAlEaDO1p5mipkqhoxY3d6WJPwl_yKwsMk",
  authDomain: "jay-soni-a9108.firebaseapp.com",
  projectId: "jay-soni-a9108",
  storageBucket: "jay-soni-a9108.firebasestorage.app",
  messagingSenderId: "424815583189",
  appId: "1:424815583189:web:d3b9368f646b3223b6675c",
  measurementId: "G-S6BCHDRKFE"
};
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = firebase.auth();
export default firebase;
export const storage = getStorage(app); 
