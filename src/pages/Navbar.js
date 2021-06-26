import { useEffect, useState } from "react";
import firebase from "./firebase.js";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const NavBar = (params) => {
    const [user, setUser] = useState(firebase.auth().currentUser);
    // document.addEventListener("scroll", () => {
    //     document.documentElement.dataset.scroll = window.scrollY;
    //     return true;
    // });
    // console.log("rerendering navbar");
    // document.documentElement.dataset.scroll = window.scrollY;

    return (
        <nav className='navbar'>
            <div className='navbarContent'>
                {/* <Link className='active' to='/home'>
                    {" "}
                    Home
                </Link>
                <Link to='/help'>Help</Link>
                <Link to='/about'>About</Link>
                {params.user && <Link to='/logout'>Sign Out</Link>}
                <Link to='/home' id='topNavIcon'>
                    <img src='/transparent.png' className='topNavIcon' alt='logo' />
                </Link> */}
            </div>
        </nav>
    );
};
export default NavBar;
