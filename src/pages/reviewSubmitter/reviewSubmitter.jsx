import { useState, useRef } from "react";
import firebase from "../firebase";
import './reviewSubmitter.css';
import Slider from "./slider";
const db = firebase.firestore();

const ReviewSubmitter = () => {
  const reviewCollection = db.collection("review");

  const classInput = useRef();
  const ratingInput = useRef();
  const gradeInput = useRef();
  const timeInput = useRef();
  const stressInput = useRef();
  const preReqInput = useRef();
  const reviewInput = useRef();
  const formRefs = useRef([classInput, ratingInput, gradeInput, timeInput, stressInput, preReqInput, reviewInput])
  const requiredRefs = useRef([classInput, ratingInput, timeInput, reviewInput])
  function checkRequired()
  {
	for (var i = 0; i<requiredRefs.current.length; i++)
	{
		const currFormElem = requiredRefs.current[i]
		if (!currFormElem)
		{
			currFormElem.current.classList.toggle('error', true)
			return false;
		}
	}
  }
  const handleSubmit = (e) => {
    e.preventDefault();
	if (!checkRequired())
	{
		return;
	}
    reviewCollection
      .add({
        class: classInput.current.value,
        grade: gradeInput.current.value,
        rating: ratingInput.current.value,
        timeSpentPerNight: timeInput.current.value,
        similarClasses: preReqInput.current.value,
        stressLevel: stressInput.current.value,
        review: reviewInput.current.value,
      })
      .then(() => {
        alert("Your review has been submitted👍");
        formRefs.forEach(e=>{
			e.current.value = null;
		})
        // window.location.reload(false);
      });
  };
  console.log(ratingInput.current)
 // (nameOfClass X) (secondClass X)
  return (
    <div>
      <div className="mainText" style={{ marginLeft: "7%", width: "" }}>
        <h1 style={{ borderBottom: "2px solid #D4AF37" }}>Submit A Review</h1>
      </div>
      <form id="enterReview" style={{ marginLeft: "7%" }} onSubmit={handleSubmit}>
        <div className="titlesforReview required">Class Name</div>
        <input type="text" ref={classInput} list="classes" placeholder="Search for the class you are reviewing..." style={{ fontSize: "17px" }}></input>
        <div className="titlesforReview required">Rating</div>
		<Slider ref={ratingInput} min="0" max='5' step='1' defaultValue='0'></Slider>
        <div className="titlesforReview required">Average Time Commitment Per Day  (Homework and Studying) in Minutes</div>
		<Slider ref={timeInput} min="0" max='180' step='15' defaultValue='0'></Slider>
        <div className="titlesforReview">Stress Level (0 is playing with puppies, 5 is finals week)</div>
		<Slider ref={stressInput} min="0" max='5' step='1' defaultValue='0'></Slider>

        <div className="titlesforReview">Pre-Req Classes</div>
        <input type="text" ref={preReqInput} id="similarClassSelector" list="classes" placeholder="What similar classes have you taken in the past..."></input>
        <div className="titlesforReview required">General Review</div>
        <input ref={reviewInput} type="text" id="reviewSelector" placeholder="Write a thoughful review here!"></input>
        <button id="subMainButton" className="reviewSubmit" value="Submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewSubmitter;
