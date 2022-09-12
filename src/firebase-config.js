// ------------------------Copied from Firebase CDN, on the firebase website-------------------------
// Web version 8 was working fine, web version 9 was creating an issue.

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmOzMvZqJUQBi7GRl7VpZq7nqu2DgcD5A",
    authDomain: "cartitem-react.firebaseapp.com",
    projectId: "cartitem-react",
    storageBucket: "cartitem-react.appspot.com",
    messagingSenderId: "810222654061",
    appId: "1:810222654061:web:3604f87a63fc4b0d3be564"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;