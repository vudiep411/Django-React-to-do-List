import React from 'react'
import Home from './pages/Home'
import TaskDetails from './pages/TaskDetails';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import PrivateRoutes from './components/PrivateRoutes';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
         <Routes>
           <Route exact path="/" element={<PrivateRoutes><Home/></PrivateRoutes>}/>
           <Route exact path="/tasks/:id" element={<PrivateRoutes><TaskDetails/></PrivateRoutes>}/>
           <Route exact path="/login" element={<Login/>}/>
         </Routes> 
     </Router>
    </div>
  );
}

export default App;
