import { useState, useRef, useEffect } from "react";
import SearchBar from "../searchbar.js";
import firebase from "../firebase.js";
import IndividualQuestion from "./individualQuestion.js";

const db = firebase.firestore();
const SuggestedActions = (params) => {
  const [questionArray, setQuestion] = useState([]);
  useEffect(() => {
    console.log(params.user);
    // if (params.user !== null) {
    console.log("HELP ME");
    var tempArray = [];
    db.collection("questions")
      .where("numReplies", "==", 0)
      .orderBy("date", "asc")
      .limit(5)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("Hi, there actually is something that matches this");
          tempArray.push(doc);
        });
        setQuestion(tempArray);
      });
  }, [params.user]);
  return (
    <div className="suggestedActions">
      <div className="yourQuestionsText">
        <h1>Suggested Actions</h1>
      </div>
      <div className="individualQuestionDiv">
        {questionArray.map((doc) => (
          <IndividualQuestion question={doc.data().text} numReplies={doc.data().numReplies} id={doc.id} key={doc.id} likes={doc.data().likes}></IndividualQuestion>
        ))}
      </div>
    </div>
  );
};
export default SuggestedActions;
