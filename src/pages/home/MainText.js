const MainText = () => {
    return (
    <div>
        <div className = "mainText">
            <h1 style = {{borderBottom: '2px solid #D4AF37'}}>
                Search Reviews
            </h1>
            <form>
                <input type="text" placeholder = "Search by Class..." style = {{fontSize: '17px'}} />
                <input type= "submit" id = "subButton" className = "submit" value = "Search"/>
            </form>  
        </div> 
        
        <div className = "aboutText" style= {{marginTop: '2%'}}>
            <p>
                MV Xperience is a resource that provides students with reviews and advice from real, current, and previous MVHS students, giving students a better idea of the commitment level needed, course loads of different classes, and composite schedules.
            </p> 
        </div>

        <div className = "inline">
            <div className = "buttonHome" name = "Q&A">Search for a Review</div> 
            <div className = "buttonHome" name = "Q&A">Questions & Answers</div> 
            <div className = "buttonHome" name = "review" onClick = ''>Submit a Review</div>
        </div>
    </div>  
    );
}
 
export default MainText;