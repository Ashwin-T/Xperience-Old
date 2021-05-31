import React from "react";
import QuestionsAnswersText from "./QuestionsAnswersMainText.js";

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDuzirc5m7jvLfQlcw1pOXsC0s0Fg2J8A",
  authDomain: "xperiance-e2fd7.firebaseapp.com",
  databaseURL: "https://xperiance-e2fd7-default-rtdb.firebaseio.com",
  projectId: "xperiance-e2fd7",
  storageBucket: "xperiance-e2fd7.appspot.com",
  messagingSenderId: "945190412173",
  appId: "1:945190412173:web:41990b52cd9e337756a7c4",
  measurementId: "G-RV1P34P93Q",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
//var db = firebase.firestore();

export default function Questions() {
  return (
    <div>
      <QuestionsAnswersText />
    </div>
  );
}
