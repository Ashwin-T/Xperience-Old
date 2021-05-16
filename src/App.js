import './App.css';
import Navbar from './pages/Navbar';
import MainText from './pages/MainText';
import AboutText from './pages/AboutText';
import HomeButtons from './pages/HomeButtons';
import QuestionsAnswersText from './pages/QuestionsAnswersMainText';
/*import QuestionList from './pages/QuestionList';*/
import FindReview from './pages/FindReview'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// see this is my home page and it goes to....

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className = 'content'>
          <Switch>
            <Route exact path = "/"> {/*Need firebase auth here and other homescreen*/}
            
            </Route>
            <Route exact path = "/home"> {/*Route for home page*/}
              <MainText/>
              <AboutText/>
              <HomeButtons/>  
            </Route>
            <Route exact path = "/Questions&Answers">
                <QuestionsAnswersText/>
             </Route> 
             <Route exact path = "/ReviewFinder">
                <FindReview/>
              </Route>
          </Switch>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
