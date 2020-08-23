import React, { Component } from "react";
import "./pages.css";
import "./about.css";
import resume from "../media/NeeharikaVResume.pdf";

class About extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "10%", marginBottom: "10%" }}>
        <img
          src={require("../media/myface.jpg")}
          alt="Neeharika's Face"
          style={{ borderRadius: "50%" }}
        />
        <div style={{ textAlign: "left", marginLeft: "5%", marginRight: "5%" }}>
          <p>
            Hi, I’m Neeharika Vogety, and I’m a student and programmer. I’m
            comfortable working in any part of the software development process,
            from very backend infrastructure design to front-facing web
            development. In fact, I really enjoy thinking of systems designs as
            a whole, and most of my projects involve end-to-end solutions. In
            the past, I worked as a full-stack software engineering intern at{" "}
            <a href="https://www.platinasystems.com/" target="_blank">
              Platina Systems
            </a>{" "}
            and a client engineering intern at{" "}
            <a href="https://nianticlabs.com/en/" target="_blank">
              Niantic
            </a>{" "}
            on the Pokémon Go team (email me for my friend code!). Some of my
            interests include playing with hobby electronics, game dev, digital
            illustration, and basically anything fun and creative.
          </p>
          <p>
            I’m currently getting my Bachelor’s in{" "}
            <a href="https://www.ece.cmu.edu/index.html" target="_blank">
              ECE
            </a>{" "}
            @{" "}
            <a href="https://www.cmu.edu/" target="_blank">
              CMU
            </a>
            , class of 2022. Go{" "}
            <a href="https://en.wikipedia.org/wiki/Tartan" target="_blank">
              Tartans
            </a>
            !
          </p>
          <p>
            <a href={resume} target="_blank">
              Resume
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/nvogety/"
              target="_blank"
              class="fab fa-linkedin icons"
            ></a>{" "}
            <a
              href="https://github.com/nvogety"
              target="_blank"
              class="fab fa-github icons"
            ></a>{" "}
            <a
              href="mailto:nvogety@gmail.com"
              target="_blank"
              class="fas fa-envelope icons"
            ></a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
