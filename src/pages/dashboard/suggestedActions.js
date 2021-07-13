import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
      .orderBy("date", "desc")
      .limit(5)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
      <br />
      <br />
      <div className="suggestionDiv boxShadow">
        <h2>Answer relevant questions</h2>
        {questionArray.map((doc) => (
          <IndividualQuestion question={doc.data().text} numReplies={doc.data().numReplies} id={doc.id} key={doc.id} likes={doc.data().likes} type="small"></IndividualQuestion>
        ))}
      </div>
      <br />
      <Link className="boxShadow reviewViewDiv">
        <h2>View your Reviews</h2>
      </Link>
    </div>
  );
};
export default SuggestedActions;
