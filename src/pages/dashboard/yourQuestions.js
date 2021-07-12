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
      //   changeID(profile.uid);
      console.log(firebase.auth().currentUser.uid);
      var tempArray = [];
      // db.collection("users")
      //   .doc(profile.uid)
      //   .get()
      //   .then((doc) => {
      //     console.log(doc.data().questionIds);
      //   });
    }
  }, [params.user]);
  return (
    <div className="yourQuestions">
      <div className="yourQuestionsText">
        <h1>Your Recent Questions</h1>
        <button className="boxShadow">Ask New +</button>
        <br />
      </div>
      <br />
      <div className="individualQuestionDiv">
        {questionArray.map((doc) => (
          <IndividualQuestion question={doc.data().text} numReplies={doc.data().numReplies} id={doc.id} key={doc.id} likes={doc.data().likes}></IndividualQuestion>
        ))}
      </div>
    </div>
  );
};

export default YourQuestions;
