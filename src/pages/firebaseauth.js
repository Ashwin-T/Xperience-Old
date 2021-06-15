import React from "react";
import firebase from "./firebase.js";

// IMPORT THIS WHENEVER YOU NEED AUTHENTICATION
var provider = new firebase.auth.GoogleAuthProvider();

const FirebaseContainer = (params) => {
  function signIn() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  return (
    <div>
      <button onClick={signIn} className="boxShadow" style={{ width: "auto", height: 5 + "rem", padding: 1 + "rem", display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: 1 + "rem", border: "none" }}>
        <img src="googleLogo.png" style={{ width: "auto", height: 100 + "%" }}></img>
        <span style={{ lineHeight: 5 + "rem", fontSize: 1.5 + "rem", paddingLeft: 0.5 + "rem" }}>Sign In with Google</span>
      </button>
    </div>
  );
};
export default FirebaseContainer;
