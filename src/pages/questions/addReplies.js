import {useState } from "react";
import db from "../firebase";
import React from 'react';
import { useParams } from 'react-router';


const AddReplies = () => {
    
    const { id } = useParams();

    const dbRef = db.collection(`questions/${id}/replies`)
    const [replyInput, setreplyInput] = useState('');



    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (replyInput !== ''){
            dbRef.add({
                replies: replyInput, 
                likes: 0
            })
            .then(() => {
            alert("Your reply has been submitted👍");
            setreplyInput('');
            window.location.reload(false);
            })
        }
     
    } 
    
    
    return (
    <form id="add-questions" onSubmit = {handleSubmit}>
        <input type="text" id="questionBox" style={{ float: "center", fontSize: "17px", marginLeft: "7%" }} 
        value = {replyInput}
        
        onChange={(e) => setreplyInput(e.target.value)}>
        
        </input>
        <button className="submit" value="Submit">Submit</button>
    </form> 


      );
}
 
export default AddReplies;