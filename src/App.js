import './App.css';
import Navbar from './pages/Navbar';
import MainText from './pages/MainText';
import AboutText from './pages/AboutText';
import HomeButtons from './pages/HomeButtons';

// see this is my home page and it goes to....

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <MainText/>
        <AboutText/>
        <HomeButtons/> 
      </div>
    </>
  );
}

export default App;
