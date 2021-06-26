import React from 'react';
import { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import firebase from "../firebase.js";
export default function Logout(params) {
	const [loggedOut, setLoggedOut] = useState(false)
	useEffect(() => {
		window.setTimeout(e=>{
			firebase.auth().signOut();
			setLoggedOut(true);
		}, 1000)
	}, [])
	return (
		<>
			{loggedOut && <Redirect to='/home'/>}
			<p>logging you out...</p>
		</>
	)
}