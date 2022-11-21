// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

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

export {app, auth};