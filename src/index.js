import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyCDuzirc5m7jvLfQlcw1pOXsC0s0Fg2J8A",
  authDomain: "xperiance-e2fd7.firebaseapp.com",
  databaseURL: "https://xperiance-e2fd7-default-rtdb.firebaseio.com",
  projectId: "xperiance-e2fd7",
  storageBucket: "xperiance-e2fd7.appspot.com",
  messagingSenderId: "945190412173",
  appId: "1:945190412173:web:41990b52cd9e337756a7c4",
  measurementId: "G-RV1P34P93Q"

};


firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
