import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import About from "./Pages/AboutUs"
import Events from "./Pages/Events";
import Donate from "./Pages/Donate";
import Getinvolved from "./Pages/Getinvolved";
import TransactionForm from "./Components/TransactionForm";
import Contact from "./Pages/Contact";



const App = () => {
  return (
    <>
      <Router>
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Getinvolved"  element={<Getinvolved/>}/>
          <Route path="/Donate"  element={<Donate/>}/>
          <Route path ="/Contact" element={<Contact/>}/>
          <Route path = "/TransactionForm" element = {<TransactionForm/>}/>
          
        </Routes>
      </Router>
    </>
  );
};

export default App;