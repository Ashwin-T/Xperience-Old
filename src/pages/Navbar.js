
const NavBar= () => {
    return (  
    <div className="topnav">
        <a href = "#signOut" style = {{backgroundColor: "black", color: '#D4AF37'}} >Sign Out</a>
        <a href="#help" onclick ="visitHelpPage()">Help</a>
        <a className="active" href="#home"> Home</a>
        <div id="topNavIcon"><img src="./nimages/main.png" style= {{width: "100%"}} alt = "logo"></img></div> {/*  why isnt logo showing  */}
    </div>

        
    );
}
export default NavBar;