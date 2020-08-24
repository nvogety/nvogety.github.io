import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
// Find a better way to do this
import activeAlarmPic from "./media/activealarm.jpg";
import triviaMachinePic from "./media/triviaMachine.jpg";

var projects = [
  {
    id: 1,
    title: "Active Alarm",
    link: "https://courses.ideate.cmu.edu/60-223/f2019/work/active-alarm/",
    description:
      "An alarm clock designed to get you up and moving, made in 60-223",
    image: activeAlarmPic,
  },
  {
    id: 2,
    title: "Trivia Machine",
    link:
      "https://courses.ideate.cmu.edu/60-223/f2019/work/trivia-machine-final-documentation/",
    description:
      "A buttonless trivia device that uses spatial sensing to record answers, made in 60-223",
    image: triviaMachinePic,
  },
];
function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar projects={projects} />

        <Route exact path="/" render={() => <Home projects={projects} />} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>
  );
}

export default App;
