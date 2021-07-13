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
    if (params.user !== null) {
      console.log("Received user data 1");
    }
  }, [params.user]);

  return (
    <div>
      <div className="dashboardContainer">
        <YourQuestions user={params.user} uid={userID}></YourQuestions>
        <SuggestedActions user={params.user} uid={userID}></SuggestedActions>
      </div>
    </div>
  );
};
export default Dashboard;
