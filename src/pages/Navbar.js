import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const NavBar= () => {
	document.addEventListener("scroll", () => {
  		document.documentElement.dataset.scroll = window.scrollY;
		return true;
	});
	useEffect(() => { // runs inside when array is updated and on first initialization.
		document.documentElement.dataset.scroll = 0;
		//constructor.
	}, [])
	document.documentElement.dataset.scroll = 0;
	
    return (  
    <nav className="topnav">
        <Link className="active" to ="/home"> Home</Link>
        <Link to="/help">Help</Link>
		<Link to = '/about'>About</Link>
        <Link to = '/home'>Sign Out</Link>
        <Link to='/home' id='topNavIcon'><img src="./transparent.png" className='topNavIcon' alt = "logo"/></Link> 
    </nav>

        
    );
}
export default NavBar;