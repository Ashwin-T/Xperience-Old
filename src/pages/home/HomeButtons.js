

const HomeButtons = () => {
    return (
    <div className = "inline">
        <div className = "buttonHome" name = "Q&A" style= {{fontSize: '60px', margin: '3%', float: 'left'}}>Search for a Review</div> 
        <div className = "buttonHome" name = "Q&A" style= {{fontSize: '60px', margin: '3%', float: 'middle'}}>Questions & Answers</div> 
        <div className = "buttonHome" name = "review" style= {{fontSize: '60px', margin: '3%', float: 'right'}} onClick = ''>Submit a Review</div>

    </div>
    );
}
 
export default HomeButtons;