import Navbar from "./pages/Navbar.js";
import Default from "./pages/default/default.jsx";
import Home from "./pages/home/home.jsx";
import QuestionList from "./pages/questions/questionList.jsx";
import ReviewFinder from "./pages/reviewfinder/reviewfinder.jsx";
import SubmitReview from "./pages/reviewSubmitter/submitReview.jsx";
import ReplyList from "./pages/questions/replyFourm";
import Logout from "./pages/logout/logout.jsx";
import Dashboard from "./pages/dashboard/dashboard.js";

import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./pages/firebase.js";
// see this is my home page and it goes to....

function App() {
    const [user, setUser] = useState(firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged((userIn) => {
        console.log("herererer");
        setUser(userIn);
    });
    return (
        <Router>
            <div className="App">
                <Navbar user={user} />
                <div className="content">
                    <Switch>
                        <Route exact path="/dashboard">
                            <Dashboard user={user}></Dashboard>
                        </Route>
                        <Route exact path="/">
                            {" "}
                            {/*Need firebase auth here and other homescreen*/}
                            <Default />
                        </Route>
                        <Route exact path="/home">
                            {" "}
                            {/*Route for home page*/}
                            <Home user={user} />
                        </Route>
                        <Route exact path="/questionForum">
                            <QuestionList user={user} />
                        </Route>
                        <Route exact path="/questionForum/:id">
                            <ReplyList />
                        </Route>
                        <Route exact path="/reviewfinder">
                            <ReviewFinder />
                        </Route>
                        <Route exact path="/reviewSubmitter">
                            <SubmitReview />
                        </Route>
                        <Route exact path="/About"></Route>
                        <Route exact path="/logout">
                            <Logout></Logout>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
