import { useState, useRef, useEffect } from "react";
import SearchBar from "../searchbar.js";
import firebase from "../firebase.js";

const IndividualQuestion = (params) => {
  return (
    <div>
      <p>{params.question}</p>
      {params.numReplies > 0 ? <button>View all {params.numReplies} replies</button> : <p>No Replies Yet</p>}
    </div>
  );
};
export default IndividualQuestion;
