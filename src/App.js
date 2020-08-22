import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
