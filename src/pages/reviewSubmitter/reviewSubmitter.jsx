import { useState, useRef } from "react";
import firebase from "../firebase";
import "./reviewSubmitter.css";
import Slider from "./slider";
import sha256 from "../../sha256";
import classNames from "../classNames2122.json";
const db = firebase.firestore();

const ReviewSubmitter = () => {
    const classInput = useRef();
    const ratingInput = useRef();
    const timeInput = useRef();
    const stressInput = useRef();
    const reviewInput = useRef();
    const formRefs = useRef([classInput, ratingInput, timeInput, stressInput, reviewInput]);
    const requiredRefs = useRef([classInput, ratingInput, reviewInput]);
    function checkRequired() {
        for (var i = 0; i < requiredRefs.current.length; i++) {
            const currFormElem = requiredRefs.current[i];
            if (!currFormElem.current.value) {
                currFormElem.current.classList.toggle("error", true);
                alert("Make sure that you have filled in all of the input fields."); // you can do this better with changing the class on the elem, but this is just bare functionality. @sonav make this page actually decent plz
                return false;
            }
        }
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkRequired()) {
            return;
        }
        const classId = classNames[classInput.current.value]?.code;
        if (!classId) {
            alert("Your class name, " + classInput.current.value + " is not in our list of classes. Please choose a class in the dropdown.");
            return;
        }
        const uid = firebase.auth().currentUser.uid;
        console.log("submitting");
        sha256(uid + classId).then((reviewId) => {
            console.log(reviewId);
            const classRef = db.collection("classes").doc(classId);
            const reviewRef = classRef.collection("reviews").doc(reviewId);

            const userRef = db.collection("users").doc(uid);
            const batch = db.batch();
            userRef
                .update({ reviewIds: firebase.firestore.FieldValue.arrayUnion(reviewId) })
                .then(makeReview)
                .catch((e) => {
                    console.log("creating user now");
                    userRef
                        .set({ reviewIds: [reviewId] })
                        .then(makeReview)
                        .catch((e) => {
                            console.log(e);
                            console.log(
                                "user already exists. Therefore the review already exists! We need to decide if we want to allow reviews to be edited/deleted!!"
                            );
                        });
                });
            function makeReview() {
                batch.update(classRef, {
                    reviewCt: firebase.firestore.FieldValue.increment(1),
                    sumOfStars: firebase.firestore.FieldValue.increment(ratingInput.current.value),
                });
                batch.set(reviewRef, {
                    class: classInput.current.value,
                    rating: Number(ratingInput.current.value),
                    timeSpentPerNight: Number(timeInput.current.value),
                    stressLevel: Number(stressInput.current.value),
                    review: reviewInput.current.value,
                });
                batch.set(reviewRef.collection("diffPerms").doc("private"), { uid: uid });
                batch.commit().then(() => {
                    alert("Your review has been submitted????");
                    formRefs.current.forEach((e) => {
                        e.current.value = null;
                    });
                });
            }
        });
    };
    console.log(ratingInput.current);
    // (nameOfClass X) (secondClass X)
    return (
        <div className='pageContent'>
            <div className='mainText' style={{ width: "" }}>
                <h1 className='pageHeading'>Submit A Review</h1>
            </div>
            <datalist id='classes'>
                {Object.keys(classNames).map((className) => {
                    return <option value={className}></option>;
                })}
            </datalist>
            <form id='enterReview' onSubmit={handleSubmit}>
                {/* <div className='titlesforReview required'>Class Name</div> */}
                <input type='text' ref={classInput} list='classes' placeholder='Search for the class you are reviewing...'></input>
                <div className='horizontalReviewDiv'>
                    <textarea
                        ref={reviewInput}
                        type='text'
                        id='reviewSelector'
                        placeholder='Write a thoughful review here!'
                        style={{ resize: "none" }}></textarea>
                    <div className='reviewSliderDiv'>
                        <div className='titlesforReview required'>Rating</div>
                        <Slider key={'rating'} ref={ratingInput} min='0' max='5' step='1' defaultValue='3'></Slider>
                        <div className='titlesforReview required'>Average Time Commitment Per Day (Homework and Studying) in Minutes</div>
                        <Slider key={'time'} ref={timeInput} min='0' max='180' step='15' defaultValue='60'></Slider>
                        <div className='titlesforReview'>Stress Level (1 is playing with puppies, 5 is finals week)</div>
                        <Slider key={'time'} ref={stressInput} min='0' max='5' step='1' defaultValue='3' style={{ paddingBottom: 0 }}></Slider>
                    </div>
                </div>
                <input type='Submit' id='subMainButton' className='reviewSubmit'></input>
                {/* <div className='titlesforReview required'>General Review</div> */}
            </form>
        </div>
    );
};

export default ReviewSubmitter;
