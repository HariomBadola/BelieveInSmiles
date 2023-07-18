import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import About from "./Components/AboutUs"
import Contact from "./Components/ContactUs"
import Events from "./Components/EventsBro";
import Stories from "./Components/StoriesBro"
// import Error from "./Components/Error";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"
          element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Contact"  element={<Contact/>}/>
          <Route path="/Stories"  element={<Stories/>}/>
          {/* <Route element={<Error/>}/> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;