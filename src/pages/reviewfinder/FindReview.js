const FindReview = () => {
    return ( 
    <div className = "mainText" style = {{marginLeft: '24%', marginTop: '15%'}}>
        <b style = {{borderBottom: '2px solid #D4AF37'}}>
            Welcome to the Review Forum
        </b>
    <form>
        <input type="text" list = "classes" placeholder = "Search by Class..." style ={{fontSize: '17px'}}></input>
        <input type= "submit" id = "subButton" className = "submit" value = "Search"></input>
    </form>  

</div>  );
}
 
export default FindReview;