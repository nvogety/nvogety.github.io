import React, { Component } from "react";
import "./pages.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div class="container adjust-font">
        <div style={{ textAlign: "left", marginTop: "5%" }}>
          <h1 class="title">Hi, I'm Neeharika.</h1>
          <p class="bio">
            I'm a student at{" "}
            <a href="https://www.cmu.edu/" target="_blank">
              Carnegie Mellon
            </a>{" "}
            studying{" "}
            <a href="https://www.ece.cmu.edu/index.html" target="_blank">
              Electrical and Computer Engineering
            </a>
            . I like making fun things with code! Below are some of the things
            I've worked on that I'm proud of. You can learn more about me{" "}
            <a href="/#/about">here</a>.
          </p>
        </div>

        <div class="card-columns">
          {this.props.projects.map((project) => (
            <div key={project.id} class="card">
              <img
                class="card-img-top"
                src={project.image}
                alt={project.title}
              />
              <div class="card-body">
                <h4>
                  <a class="card-title" href={project.link} target="_blank">
                    {project.title}
                  </a>
                </h4>
                <p class="card-text">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
