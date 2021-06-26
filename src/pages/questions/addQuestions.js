import { useState, useEffect } from "react";
import firebase from "../firebase";
import FirebaseContainer from "../firebaseauth";
const db = firebase.firestore();

const AddQuestions = (params) => {
  const questionsCollection = db.collection("questions");
  const [questionInput, setquestionInput] = useState("");

  // Gets if the person is signed in or not, and if so, gets their uid
  var [profileURL, setURL] = useState();
  const [userID, setUID] = useState(0);
  useEffect(() => {
    if (params.user !== null) {
      params.user.providerData.forEach((profile) => {
        setUID(profile.uid);
      });
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (questionInput !== "") {
      questionsCollection
        .add({
          text: questionInput,
          likes: 0,
          uid: userID,
          // TODO: ACTUALLY ADD TAGS
          tags: [],
          date: new Date().getTime(),
          numReplies: 0,
        })
        .then(() => {
          alert("Your question has been submitted👍");
          setquestionInput("");
          window.location.reload(false);
        });
    }
  };

  return (
    // Conditionally renders the sign in with google button or the form
    <div>
      {userID != 0 ? (
        <form id="add-questions" onSubmit={handleSubmit}>
          <input type="text" id="questionBox" style={{ float: "center", fontSize: "17px", marginLeft: "7%" }} value={questionInput} onChange={(e) => setquestionInput(e.target.value)}></input>
          <button className="submit" value="Submit">
            Submit
          </button>
        </form>
      ) : (
        <div>
          <div>Sign in to ask questions</div>
          <FirebaseContainer></FirebaseContainer>
        </div>
      )}
    </div>
  );
};

export default AddQuestions;
