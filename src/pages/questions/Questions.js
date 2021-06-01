import { useEffect, useState } from "react";
import db from "./firebase";

const Questions = () => {
  const questionsCollection = db.collection("questions");

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    var tempArray = [];
    db.collection("questions")
      .orderBy("likes", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tempArray.push(doc.data());
        });
        setQuestions(tempArray);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return (
    <div>
      <div className="mainText" style={{ marginLeft: "7%" }}>
        <h1 style={{ borderBottom: "2px solid #D4AF37", width: "75%" }}>Ask A Question</h1>
      </div>

      <form id="add-questions">
        <input type="text" id="questionBox" style={{ float: "center", fontSize: "17px", marginLeft: "7%" }}></input>
        {/*placeholder = {{'Specific questions about classes, combinations of classes, teachers, etc... '*/}
        <input type="submit" id="subButton" class="submit" value="Submit"></input>
      </form>

      <ul>
        {questions.map((ques) => (
          <li>{ques.questionsAsked} </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
