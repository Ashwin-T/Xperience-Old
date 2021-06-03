import ReviewSearch from './searchReview';
import { Link } from 'react-router-dom';


const MainText = () => {
    
    return (
    <div>
        <div className = "mainText">
            <h1 style = {{borderBottom: '2px solid #D4AF37'}}>
                Search Reviews
            </h1>
           <ReviewSearch/>
        </div> 
        
        <div className = "aboutText" style= {{marginTop: '2%'}}>
            <h1>
                MV Xperience is a resource that provides students with reviews and advice from real, current, and previous MVHS students, giving students a better idea of the commitment level needed, course loads of different classes, and composite schedules.
            </h1> 
        </div>

        <div className = "inline">
            <Link to = '/reviewfinder' className = "buttonHome" name = "Q&A" style= {{fontSize: '60px', margin: '3%', float: 'left'}}>Search for a Review</Link> 
            <Link to = '/questionForum' className = "buttonHome" name = "Q&A" style= {{fontSize: '60px', margin: '3%', float: 'middle'}}>Questions & Answers</Link> 
            <Link to = '/reviewSubmitter' className = "buttonHome" name = "review" style= {{fontSize: '60px', margin: '3%', float: 'right'}}> Submit a Review</Link>
        </div>
    </div>  
    );
}
 
export default MainText;