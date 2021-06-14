import { useState } from "react";
import firebase from "../firebase";
const db = firebase.firestore();

const ReviewSubmitter = () => {
  const reviewCollection = db.collection("review");

  const [classInput, setclassInput] = useState("");
  const [ratingInput, setratingInput] = useState("");
  const [gradeInput, setgradeInput] = useState("");
  const [timeInput, settimeInput] = useState("");
  const [stressInput, setstressInput] = useState("");
  const [preReqInput, setpreReqInput] = useState("");
  const [reviewInput, setreviewInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    reviewCollection
      .add({
        class: classInput,
        grade: gradeInput,
        rating: ratingInput,
        timeSpentPerNight: timeInput,
        similarClasses: preReqInput,
        stressLevel: stressInput,
        review: reviewInput,
      })
      .then(() => {
        alert("Your review has been submitted👍");
        setclassInput("");
        setratingInput("");
        setgradeInput("");
        setstressInput("");
        settimeInput("");
        setpreReqInput("");
        setreviewInput("");
        window.location.reload(false);
      });
  };

  return (
    <div>
      <div className="mainText" style={{ marginLeft: "7%", width: "" }}>
        <h1 style={{ borderBottom: "2px solid #D4AF37" }}>Submit A Review</h1>
      </div>
      <form id="enterReview" style={{ marginLeft: "7%" }} onSubmit={handleSubmit}>
        <div className="titlesforReview">Class Name</div>
        <input type="text" id="classSelector" list="classes" placeholder="Search for the class you are reviewing..." style={{ fontSize: "17px" }} onChange={(e) => setclassInput(e.target.value)}></input>
        <div className="titlesforReview">Rating</div>
        <input type="text" id="ratingSelector" list="rating" placeholder="Choose a rating for the class(ex. 1 is really bad, 5 is really good)..." style={{ fontSize: "17px" }} onChange={(e) => setratingInput(e.target.value)}></input>
        <div className="titlesforReview">Grade</div>
        <input type="text" id="gradeSelector" list="grade" placeholder="What grade did you get in the class.." style={{ fontSize: "17px" }} onChange={(e) => setgradeInput(e.target.value)}></input>
        <div className="titlesforReview">Time Commitment Per Day</div>
        <input type="text" id="timeSelector" list="realhmwtime" placeholder="How much realistic time did you spend studying and doing homework per day..." style={{ fontSize: "17px" }} onChange={(e) => settimeInput(e.target.value)}></input>
        <div className="titlesforReview">Stress Level</div>
        <input type="text" id="stressLevelSelector" list="rating" placeholder="How stressful was this class(ex. 1 is really easy, 5 is really stressful)..." style={{ fontSize: "17px" }} onChange={(e) => setstressInput(e.target.value)}></input>
        <div className="titlesforReview">Pre-Req Classes</div>
        <input type="text" id="similarClassSelector" list="classes" placeholder="What similar classes have you taken in the past..." style={{ fontSize: "17px" }} onChange={(e) => setpreReqInput(e.target.value)}></input>
        <div className="titlesforReview">General Review</div>
        <input type="text" id="reviewSelector" placeholder="Write a thoughful review here!" style={{ fontSize: "17px" }} onChange={(e) => setreviewInput(e.target.value)}></input>
        <button id="subMainButton" className="reviewSubmit" value="Submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewSubmitter;
