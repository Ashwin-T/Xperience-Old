import { useState, useRef, useEffect } from "react";
import SearchBar from "../searchbar.js";
import firebase from "../firebase.js";
const db = firebase.firestore();
const Dashboard = (params) => {
  const [uid, setUID] = useState();
  useEffect(() => {
    if (params.user !== null) {
      params.user.providerData.forEach((profile) => {
        //   changeID(profile.uid);
        setUID(profile.uid);
      });
    }
  }, []);

  return (
    <div>
      <SearchBar user={params.user}></SearchBar>
      <div>
        <div>
          <h1>Your Questions</h1>
          <button>Ask New +</button>
        </div>
      </div>
      <div>
        <h1>Suggested Actions</h1>
        <div>Answer questions on classes you have reviewed</div>
      </div>
    </div>
  );
};
export default Dashboard;
