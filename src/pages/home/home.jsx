import React from "react";
import MainText from "./MainText";
// I CHANGED THE FIREBASE.JS FILE TO EXPORT FIREBASE, INSTEAD OF FIRESTORE
import firebase from "../firebase.js";
import { useEffect } from "react";

export default function ReviewFinder() {
  //   THIS IS HOW YOU CHECK IF THE USER IS LOGGED IN
  const user = firebase.auth().currentUser;
  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    } else {
      console.log("User is not logged in");
    }
  }, []);
  function checkForThings() {}

  return (
    <div>
      <MainText />
      {checkForThings()}
    </div>
  );
}
