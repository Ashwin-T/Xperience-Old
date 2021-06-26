import { useState, useRef, useEffect } from "react";
import firebase from "./firebase.js";
const SearchBar = (params) => {
  var [profileURL, setURL] = useState();
  useEffect(() => {
    if (params.user !== null) {
      params.user.providerData.forEach((profile) => {
        console.log(profile.photoURL);
        setURL(profile.photoURL);
      });
    }
  }, []);
  return (
    <div>
      <img src={"favicon.ico"} width="50"></img>
      <p>Search for a review, class, etc.</p>
      <img src={profileURL}></img>
    </div>
  );
};
export default SearchBar;
