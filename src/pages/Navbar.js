import { Link } from 'react-router-dom';
const NavBar= () => {
    return (  
    <div className="topnav">
        <Link to = '/ ' style = {{backgroundColor: "black", color: '#D4AF37'}} >Sign Out</Link>
        <Link to="/help">Help</Link>
        <Link className="active" to ="/home"> Home</Link>
        <div id="topNavIcon"><img src="./images/main.png" style= {{width: "100%"}} alt = "logo"/>   </div> {/*  why isnt logo showing  */}
    </div>

        
    );
}
export default NavBar;