import { useEffect, useState } from "react";
import db from "../firebase";


const AddQuestions = () => {
    
    const questionsCollection = db.collection("questions");
    const [questionInput, setquestionInput] = useState('');
    const [loader, setLoader] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        questionsCollection.add({
            questionsAsked: questionInput, 
            likes: 0
        })
        .then(() => {
          setLoader(false);
          alert("Your question has been submitted👍");
          setquestionInput('');
          window.location.reload(false);

      })
    } 
    
    
    return (
    <form id="add-questions" onSubmit = {handleSubmit}>
        <input type="text" id="questionBox" style={{ float: "center", fontSize: "17px", marginLeft: "7%" }} 
        value = {questionInput}
        
        onChange={(e) => setquestionInput(e.target.value)}>
        
        </input>
        {/*placeholder = {{'Specific questions about classes, combinations of classes, teachers, etc... '*/}
        <button className="submit" value="Submit">Submit</button>
    </form> 


      );
}
 
export default AddQuestions;