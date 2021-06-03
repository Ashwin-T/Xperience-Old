const MainText = () => {
    return (
    <div className = "mainText">
        <h1>
            Search Reviews
        </h1>
        <form>
            <input type="text" placeholder = "Search by Class..."/>
            <input type= "submit" id = "subButton" className = "submit" value = "Search"/>
        </form>  
    </div>   
    );
}
 
export default MainText;