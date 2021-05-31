import {UseState, useEffect} from 'react';
import firebase from "firebase/app";
import "firebase/firestore";



const addQuestions = () => {

    return (   
        <form id = "add-questions" >
            <input type="text" id = "questionBox" style = {{float: 'center', fontSize: '17px'}} ></input>{/*placeholder = {{'Specific questions about classes, combinations of classes, teachers, etc... '*/}
            <input type= "submit" id = "subButton"class = "submit" value = "Submit"></input>
        </form>  
    )
}
 
export default addQuestions