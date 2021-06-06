import React from "react";
import { useParams } from "react-router";
import db from "../firebase";
import { useEffect, useState } from "react";

import AddReplies from "./addReplies.js";

const ShowReplies = (props) => {
    const { id } = useParams();
    const [replies, setReplies] = useState([]);
    const [question, setQuestion] = useState({}); // initial state with empty object

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

        db.collection("questions") // running in useEffect to get the data only once
            .doc(id)
            .get()
            .then((doc) => {
                // getting data is an async operation, so you need a callback
                console.log(doc.data());
                setQuestion(doc.data()); // gets the data and saves in the question state
            });
    }, [id]); // reruns the useeffect if the id somehow changes

    // const question = db.collection("questions").data().questionsAsked;

    return (
        <div>
            <h1 style={{ marginLeft: "7%" }}>{question.questionsAsked} </h1> {/*Help!*/} {/* Gets the field from the data */}
            <AddReplies />
            <ul>
                {replies.map((rep) => (
                    <div className='questionsPosted'>
                        <li>{rep.data().replies} </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ShowReplies;
