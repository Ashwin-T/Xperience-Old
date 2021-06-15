import React from "react";
import MainText from "./MainText";
// I CHANGED THE FIREBASE.JS FILE TO EXPORT FIREBASE, INSTEAD OF FIRESTORE
import firebase from "../firebase.js";
import { useEffect, useRef, useState } from "react";
import FirebaseContainter from '../firebaseauth.js'
import { useParams } from "react-router";

export default function ReviewFinder(params) {
  const authStateChecked = useRef(false);
  useEffect(() => {
    // CHECKING IF A USER IS LOGGED IN OR NOT
	authStateChecked.current = true;
	if (params.user !== null) {
	params.user.providerData.forEach((profile) => {
		console.log("Sign-in provider: " + profile.providerId);
		console.log("  Provider-specific UID: " + profile.uid);
		console.log("  Name: " + profile.displayName);
		console.log("  Email: " + profile.email);
		console.log("  Photo URL: " + profile.photoURL);
	});
	} else {
		// MOST LIKELY, IF THE USER IS NOT LOGGED IN, WE WILL RENDER AN AUTHENTICATION PROMPT, BUT THAT HASN'T BEEN ADDED YET
		console.log("User is not logged in");
	}
  }, []);

  return (
    <div>
      <MainText />
	  {(authStateChecked && params.user===null) && <FirebaseContainter/>}
    </div>
  );
}
