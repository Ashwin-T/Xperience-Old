import { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar.js";
import firebase from "../firebase.js";
import YourQuestions from "./yourQuestions.js";
import SuggestedActions from "./suggestedActions";
import "./dashboard.css";
const db = firebase.firestore();
const Dashboard = (params) => {
  const [userID, setUID] = useState();
  useEffect(() => {
    console.log(params.user);
    if (params.user !== null) {
      params.user.providerData.forEach((profile) => {
        //   changeID(profile.uid);
        setUID(profile.uid);
        console.log(profile.uid);
      });
    }
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <YourQuestions user={params.user} uid={userID}></YourQuestions>
        <SuggestedActions user={params.user} uid={userID}></SuggestedActions>
      </div>
    </div>
  );
};
export default Dashboard;
