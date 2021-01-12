import React, { Component } from "react";
import "./navBar.css";
import "./overrideFont.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="navbar my-1 mx-5">
          <a class="navbar-brand my-logo pixel-font" href="#">
            neeharika vogety
          </a>
          <ul class="nav justify-content-end main-font">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/about">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {this.props.projects.map((project) => (
                  <a
                    key={project.id}
                    class="dropdown-item"
                    href={project.link}
                    target="_blank"
                  >
                    {project.title}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
