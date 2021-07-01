import { useEffect, useState } from "react";
import firebase from "./firebase.js";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const NavBar = (params) => {
    // document.addEventListener("scroll", () => {
    //     document.documentElement.dataset.scroll = window.scrollY;
    //     return true;
    // });
    // console.log("rerendering navbar");
    // document.documentElement.dataset.scroll = window.scrollY;

    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
    }, []);

    return (
        <nav className='navbar'>
            <div className='navbarContent'>
                <Link to='/home'>
                    <img src='/transparent.png' alt='logo' className='navbarLogo' />
                </Link>
                <div className='searchBar'>
                    <input className='searchInput' placeholder={"Search for questions, answers, classes ..."}></input>
                </div>
                <Link className='navbarOption' to='/home'>
                    Home
                </Link>
                <Link to='/help' className='navbarOption'>
                    Help
                </Link>
                <Link to='/about' className='navbarOption'>
                    About
                </Link>
                {params.user ? (
                    <Link to='/logout' className='navbarOption'>
                        Sign Out
                    </Link>
                ) : (
                    <Link to='/login' className='navbarOption'>
                        Sign In
                    </Link>
                )}
                {firebase.auth().currentUser && (
                    <div className='navbarPhoto'>
                        <img className='navbarPhotoImage' src={firebase.auth().currentUser.photoURL}></img>
                    </div>
                )}
            </div>
        </nav>
    );
};
export default NavBar;
