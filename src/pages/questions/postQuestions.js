import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
const db = firebase.firestore();

const PostQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    var tempArray = [];
    db.collection("questions")
      .orderBy("likes", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tempArray.push(doc);
        });
        setQuestions(tempArray);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {questions.map((ques) => (
          <div className="questionsPosted">
            <Link to={`/questionForum/${ques.id}`}>
              {/*Lol help here http://localhost:3000/questionForum/101 */}
              <li>{ques.data().questionsAsked} </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostQuestions;
