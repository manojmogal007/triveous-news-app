// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database'; 


// const firebaseConfig = {
//     apiKey: "AIzaSyC-Qxa2qtuWxOQjuUrUXrugph8b3gZAyCI",
//     authDomain: "newsapp-33ccf.firebaseapp.com",
//     projectId: "newsapp-33ccf",
//     storageBucket: "newsapp-33ccf.appspot.com",
//     messagingSenderId: "422283164261",
//     appId: "1:422283164261:web:648ef24e91aad41c8de48c",
//     measurementId: "G-7BSSQWPE1V"
//   };
  
//   firebase.initializeApp(firebaseConfig);

//   export default firebase
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC-Qxa2qtuWxOQjuUrUXrugph8b3gZAyCI",
  authDomain: "newsapp-33ccf.firebaseapp.com",
  projectId: "newsapp-33ccf",
  storageBucket: "newsapp-33ccf.appspot.com",
  messagingSenderId: "422283164261",
  appId: "1:422283164261:web:648ef24e91aad41c8de48c",
  measurementId: "G-7BSSQWPE1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth}