import { useState, useRef } from "react";
import firebase from "../firebase";
import './reviewSubmitter.css';
import Slider from "./slider";
import sha256 from "../../sha256";
import classNames from "../classNames2122.json"
const db = firebase.firestore();

const ReviewSubmitter = () => {
  const classInput = useRef();
  const ratingInput = useRef();
  const timeInput = useRef();
  const stressInput = useRef();
  const preReqInput = useRef();
  const reviewInput = useRef();
  const formRefs = useRef([classInput, ratingInput, timeInput, stressInput, preReqInput, reviewInput])
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
	return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
	if (!checkRequired())
	{
		return;
	}
	const classId = classNames[classInput.current.value].code;
	const uid = firebase.auth().currentUser.uid;
	console.log('submitting')
	sha256(uid + classId)
	.then(reviewId=>{
		console.log(reviewId)
		const classRef = db.collection('classes').doc(classId)
		const reviewRef = classRef.collection('reviews').doc(reviewId);
	
		const userRef = db.collection('users').doc(uid);
		const batch = db.batch();
		userRef.update({reviewIds:firebase.firestore.FieldValue.arrayUnion(reviewId)})
		.then(makeReview)
		.catch(e=>{
			console.log('creating user now')
			userRef.set({reviewIds:[reviewId]})
				.then(makeReview)
				.catch(e=>{
					console.log('couldnt create user')
				})
		})
		function makeReview()
		{
			batch.update(classRef, {
				reviewCt:firebase.firestore.FieldValue.increment(1),
				sumOfStars:firebase.firestore.FieldValue.increment(ratingInput.current.value)
			})
			batch.set(reviewRef, {
				class: classInput.current.value,
				rating: Number(ratingInput.current.value),
				timeSpentPerNight: Number(timeInput.current.value),
				similarClasses: preReqInput.current.value,
				stressLevel: Number(stressInput.current.value),
				review: reviewInput.current.value,
			})
			batch.set(reviewRef.collection('diffPerms').doc('private'), {uid:uid})
			batch.commit().then(() => {
				alert("Your review has been submitted👍");
				formRefs.current.forEach(e=>{
					e.current.value = null;
				})
			});
		}
	})
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
        <div className="titlesforReview required">General Review</div>
        <input ref={reviewInput} type="text" id="reviewSelector" placeholder="Write a thoughful review here!"></input>
		<input type="Submit" id="subMainButton" className="reviewSubmit"></input>
		<datalist id='classes'>
			{Object.keys(classNames).map(className=>{
				return <option name={className}></option>
			})}
		</datalist>
      </form>
    </div>
  );
};

export default ReviewSubmitter;
