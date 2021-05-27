//import { Link } from 'react-router-dom';

const HomeButtons = () => {
    return (
    <div className = "inline">
        <div className = "buttonHome" name = "Q&A" style= {{fontSize: '60px', margin: '3%', float: 'left'}}>Find a Review</div> 
        <button className = "buttonHome" name = "Q&A" style= {{fontSize: '60px', margin: '3%', float: 'middle'}}>Questions & Answers</button> 
        <button className = "buttonHome" name = "review" style= {{fontSize: '60px', margin: '3%', float: 'right'}} onClick = ''>Submit a Review</button>

    </div>
    );
}
 
export default HomeButtons;