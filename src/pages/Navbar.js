import { Link } from 'react-router-dom';
const NavBar= () => {
    return (  
    <div className="topnav">
        <Link to = '/ ' style = {{backgroundColor: "black", color: '#D4AF37'}} >Sign Out</Link>
        <Link to="/help">Help</Link>
        <Link className="active" to ="/home"> Home</Link>
        <Link to='/' id='topNavIcon'><img src="./transparent.png" className='topNavIcon' alt = "logo"/></Link> {/*  why isnt logo showing  */}
    </div>

        
    );
}
export default NavBar;