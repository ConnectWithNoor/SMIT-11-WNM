import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7WN64ig7lbekxgouPMenb4sANJZ29p8g",
  authDomain: "first-project-fff63.firebaseapp.com",
  projectId: "first-project-fff63",
  storageBucket: "first-project-fff63.appspot.com",
  messagingSenderId: "1036240128439",
  appId: "1:1036240128439:web:7349decf2793c3684f4032",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default app;
export {
  db,
  collection,
  doc,
  auth,
  storage,
  setDoc,
  getDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
