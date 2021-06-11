const ReviewSearch = () => {
    return ( 

        <form>
            <input type="text" placeholder = "Search by Class..." style = {{fontSize: '17px'}} />
            <input type= "submit" id = "subButton" className = "submit" value = "Search"/>
        </form>  
     );
}
 
export default ReviewSearch;