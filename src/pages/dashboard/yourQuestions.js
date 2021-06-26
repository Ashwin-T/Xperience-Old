import { useState, useRef, useEffect } from "react";
import SearchBar from "../searchbar.js";
import firebase from "../firebase.js";
import IndividualQuestion from "./individualQuestion.js";
const db = firebase.firestore();
const YourQuestions = (params) => {
  const [questionArray, setQuestion] = useState([]);
  useEffect(() => {
    console.log(params.user);
    if (params.user !== null) {
      console.log("HELP ME");
      params.user.providerData.forEach((profile) => {
        //   changeID(profile.uid);
        var tempArray = [];
        db.collection("questions")
          .where("uid", "==", profile.uid)
          .orderBy("date", "desc")
          .limit(5)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log("Hi, there actually is something that matches this");
              tempArray.push(doc.data());
            });
            setQuestion(tempArray);
          });
      });
    }
  }, [params.user]);
  return (
    <div>
      <div>
        <h1>Your Questions</h1>
        <button>Ask New +</button>
      </div>
      <div>
        {questionArray.map((doc) => (
          <IndividualQuestion question={doc.text} numReplies={doc.numReplies}></IndividualQuestion>
        ))}
      </div>
    </div>
  );
};

export default YourQuestions;
