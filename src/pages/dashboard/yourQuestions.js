import { useState, useRef, useEffect } from "react";
import SearchBar from "../searchbar.js";
import firebase from "../firebase.js";
import IndividualQuestion from "./individualQuestion.js";
const db = firebase.firestore();
const YourQuestions = (params) => {
  const [questionArray, setQuestion] = useState([]);

  useEffect(() => {
    if (params.user !== null) {
      console.log("Received User Data 2");
      //   changeID(profile.uid);

      db.collection("users")
        .doc(params.user.uid)
        .get()
        .then((doc) => {
          var questionIdArray = doc.data().questionIds;
          console.log(questionIdArray);
          for (let i = 0; i != 5; i++) {
            console.log(questionIdArray[questionIdArray.length - i - 1]);
            if (questionIdArray.length - i - 1 >= 0) {
              db.collection("questions")
                .doc(questionIdArray[questionIdArray.length - i - 1])
                .get()
                .then((doc) => {
                  console.log("I'm setting asynchronously");

                  setQuestion((questionArray) => [...questionArray, doc]);
                });
            }
          }
        });
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
