import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="footer">
        <div
          class="container"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <hr />
          <span>
            Made with <span style={{ color: "#e25555" }}>&#9829;</span> by
            Neeharika Vogety
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
