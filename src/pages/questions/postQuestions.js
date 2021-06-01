import { useEffect, useState } from "react";
import db from "../firebase";

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
    <ul>
        {questions.map((ques) => (
          <li>{ques.questionsAsked} </li>
        ))}
      </ul> );
    </div>
    )
}
 
export default PostQuestions;