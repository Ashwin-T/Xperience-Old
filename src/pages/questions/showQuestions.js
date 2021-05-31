import { useEffect, useState } from "react";
import firebase from "firebase/app";

const showQuestions = () => {
  
    const [questions, setQuestions] = useState([

    {questionsAsked: 'Is AP CS much harder than its prerequisite', likes: 5, id: 1},
    {questionsAsked: 'Is AP chem fun', likes: 1, id: 2},
    {questionsAsked: 'Whos the better teacher for spanish 3 H', likes: 2, id: 3},


  ]); 
  
  
  return (  
    <ul>
      {questions.map((ques) => (
        <li>{ques.questionsAsked} </li>
      ))}
    </ul>
  );
}
 
export default showQuestions;