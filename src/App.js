import React, {useState} from 'react'
import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import History from './components/History'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const history = [
    {
      name : "Akshat",
      height: '178',
      weight : '67',
      bmi: '21.15',
    }
  ];

  const [historyArray, setHistoryArray] = useState(history);
  return (
    <div className='App'>
    <Router>
      <Navbar></Navbar>
      <Routes>
          <Route
            element={<Home historyArray={historyArray} setHistoryArray={setHistoryArray}/>}
              path="/"
           />
           <Route
            element={<About/>}
              path="/About"
           />
           
           <Route
            element={<History historyArray={historyArray}/>}
              path="/History"
           />
        </Routes>
    </Router>
    </div>
  );
}


export default App;
