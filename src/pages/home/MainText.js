const MainText = () => {
    return (
    <div className = "mainText">
        <h1 style = {{borderBottom: '2px solid #D4AF37'}}>
            Search Reviews
        </h1>
        <form>
            <input type="text" placeholder = "Search by Class..." style = {{fontSize: '17px'}} />
            <input type= "submit" id = "subButton" className = "submit" value = "Search"/>
        </form>  
    </div>   
    );
}
 
export default MainText;