import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ------------------------Copied from Firebase CDN, on the firebase website-------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmOzMvZqJUQBi7GRl7VpZq7nqu2DgcD5A",
  authDomain: "cartitem-react.firebaseapp.com",
  projectId: "cartitem-react",
  storageBucket: "cartitem-react.appspot.com",
  messagingSenderId: "810222654061",
  appId: "1:810222654061:web:3604f87a63fc4b0d3be564"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// --------------------------------------------------------------------------------------------------




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
