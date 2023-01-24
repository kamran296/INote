import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
