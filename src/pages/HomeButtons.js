const HomeButtons = () => {
    return (
    <div className = "inline">
        <button className = "buttonHome" name = "Q&A" style= {{fontSize: '60px', margin: '3%', float: 'left'}}>Find a Review</button> 
        <button className = "buttonHome" name = "Q&A" style= {{fontSize: '60px', margin: '3%', float: 'middle'}}>Questions & Answers</button> 
        <button className = "buttonHome" name = "review" style= {{fontSize: '60px', margin: '3%', float: 'right'}}>Submit a Review</button>

    </div>
    );
}
 
export default HomeButtons;