const MainText = () => {
    return (
    <div className = "mainText" style = {{marginLeft : '17%'}}>
        <b style = {{borderBottom: '2px solid #D4AF37'}}>
            Search Reviews
        </b>
        <form>
            <input type="text" placeholder = "Search by Class..." style = {{fontSize: '17px'}} />
            <input type= "submit" id = "subButton"class = "submit" value = "Search"/>
        </form>  
    </div>   
    );
}
 
export default MainText;