import Navbar from './pages/Navbar.js';
import Default from './pages/default/default.jsx';
import Home from './pages/home/home.jsx';
import showQuestions from './pages/questions/showQuestions';
import ReviewFinder from './pages/reviewfinder/reviewfinder';
import addQuestions from './pages/questions/addQuestions';
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
              <Default />
            </Route>
            <Route exact path = "/home"> {/*Route for home page*/}
              <Home />
            </Route>
            <Route exact path = "/questions">
              <addQuestions/>
              <showQuestions/>
             </Route> 
             <Route exact path = "/reviewfinder">
                <ReviewFinder/>
              </Route>
          </Switch>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
