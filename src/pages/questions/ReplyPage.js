import React from 'react';
import { useParams } from 'react-router';
import db from "../firebase";
import { useEffect, useState } from "react";

const ShowReplies = (props) => {

    const { id } = useParams();

     const [replies, setReplies] = useState([]);
     useEffect(() => {
       var tempArray = [];
       db.collection(`questions/${id}/replies`)
        .get()
        .then((querySnapshot) => {
           querySnapshot.forEach((doc) => {
             // doc.data() is never undefined for query doc snapshots
             tempArray.push(doc);
           });
           setReplies(tempArray);
         })
         .catch((error) => {
           console.log("Error getting documents: ", error);
         });
     }, []);
 
     return (  
     <div>

       <ul>  
           {replies.map((rep) => (
             <div className = 'questionsPosted'>
                 <li>{rep.data().replies} </li>
             </div>
 
           ))}
         </ul>
     </div>
     )
}
 
export default ShowReplies;
