// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {doc, getFirestore, setDoc} from "firebase/firestore"
const firebaseConfig = {

  apiKey: "AIzaSyB5y1zVWWYLaiORCUuMgYwUHaVXFhMW8gg",

  authDomain: "bill-653aa.firebaseapp.com",

  databaseURL: "https://bill-653aa-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "bill-653aa",

  storageBucket: "bill-653aa.appspot.com",

  messagingSenderId: "441644394792",

  appId: "1:441644394792:web:3e745a8529ca1080e8481d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

const updateUserDatabase =async(user,uid) =>{

  if(typeof user !== "object") return;

  const docRef = doc(db, "users", uid);
  await setDoc(docRef, { ...user });
};

export {app, auth, db, updateUserDatabase};