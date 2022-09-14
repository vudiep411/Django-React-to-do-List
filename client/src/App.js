import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import TaskDetails from './pages/TaskDetails';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
         <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/tasks/:id" element={<TaskDetails/>}/>
         </Routes> 
     </Router>
    </div>
  );
}

export default App;
