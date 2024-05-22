import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Routing from "./Routing";
import { BrowserRouter as Router} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./Actions/Question";
import { fetchAllUsers } from "./Actions/users";



function App() {

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAllQuestions());
      dispatch(fetchAllUsers());
    }, [dispatch]);
  
    const [slideIn, setSlideIn] = useState(true);
  
    useEffect(() => {
      if (window.innerWidth <= 760) {
        setSlideIn(false);
      }
    }, []);
  
    const handleSlideIn = () => {
      if (window.innerWidth <= 760) {
        setSlideIn((state) => !state);
      }
    };

    
  return (
    <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn}/>
        <Routing slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      </Router>
    </div>
  );
}

export default App;
