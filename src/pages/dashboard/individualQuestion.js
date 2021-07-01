import { useState, useRef, useEffect } from "react";
import SearchBar from "../searchbar.js";
import firebase from "../firebase.js";
import { Link } from "react-router-dom";
const IndividualQuestion = (params) => {
  console.log(params.numReplies);
  return (
    <div className="boxShadow individualQuestion">
      <p>{params.question}</p>
      {params.numReplies > 0 ? <Link to={"/questionForum/" + params.id}>View all {params.numReplies} replies</Link> : <button>No Replies Yet</button>}
    </div>
  );
};
export default IndividualQuestion;
