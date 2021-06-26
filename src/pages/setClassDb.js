import firebase from "./firebase.js";
let classNames = require("./classNames2122.json")
classNames.keys().slice(0, 10).forEach(e=>{
	addToClass(e, classNames[e].code, classNames[e].desc)
})
function addToClass(className, classCode, desc)
{
	firebase.firestore().collection('classes').doc(classCode).set({
		name:className,

	});
	firebase.firestore().collection('classes').doc(classCode)
} 