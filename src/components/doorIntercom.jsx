import React, { Component } from "react";
import "./pages.css";

class DoorIntercom extends Component {
  state = {};
  render() {
    return (
      <div class="container adjust-font">
        <div style={{ textAlign: "left", marginTop: "5%" }}>
          <img
            src={require("../media/doorIntercom.jpg")}
            alt="Flow diagram for the door intercom system"
            class="center resize-pic"
          />
          <h1 class="title">Door Intercom w/ Amazon Alexa</h1>
          <p class="project-body">
            Services used:
            <ul>
              <li>Amazon Alexa Skill Kit</li>
              <li>AWS Lambda</li>
              <li>AWS IoT</li>
              <li>IBM Watson Speech-to-Text and Text-to-Speech</li>
              <li>AWS Dynamo DB</li>
            </ul>
          </p>
          <p class="project-body">Written in completely in Node.js</p>
          <p class="project-body">
            The idea behind this project was to simulate a door intercom system
            within a single call to Alexa. You can tell Alexa "Alexa, send this
            message: [your-message]", and that message will be processed and
            relayed outside through a set of speakers connected to a
            RaspberryPi. The person at the door then has a chance to send a
            short message themselves, which is then relayed back to you through
            the Alexa. This all should happen in one call to the Alexa, and
            therefore takes quite a bit of services to make this all work. Flow
            diagram below.
            <img
              src={require("../media/doorIntercomDiagram.png")}
              alt="Flow diagram for the door intercom system"
              style={{ margin: "5% 5% 5% 5%" }}
              class="resize-pic"
            />
            Uses Alexa Skill Kit and AWS Lambda to extract a message and send to
            AWS IoT. This publishes data to a topic stream, and other devices
            can subscribe to that stream and get the data. In my case, I have
            AWS Lambda publishing on a specific stream that my Raspberry Pi is
            subscribed to. In a parallel fashion, the Pi can publish to another
            stream that the database, and subsequently the Lambda function, is
            reading off of. This is a great way to send messages back and forth!
          </p>
          <p class="project-body">
            On receiving this message from Alexa, the Pi uses IBM’s
            text-to-speech service to convert the string into an .wav audio
            file. It plays this message on two external speakers. A separate USB
            microphone that is also hooked up to the Pi starts recording,
            waiting for the visitor to say something back. That recording is
            also saved as a file, which is passed through IBM’s speech to text
            service, and outputs a string. I’m publishing that string, the
            visitor’s message, to a separate topic stream that the Dynamo
            database is keeping track of. The Lambda function checks for any
            update to the database and if so, it will read this out. This is all
            on one call to Alexa!
          </p>
          <p class="project-body">
            Note: The <i>asynchronous</i> nature of Node.js/JS made it so that
            audio files would start playing before they were finished recording,
            so i used a execSync library to simulate synchronous calls. I first
            used set timeouts, but that made everything look really ugly, and
            not truly synchronous.{" "}
          </p>
          <p class="project-body">
            {" "}
            Github Repo with all the code{" "}
            <a href="https://github.com/nvogety/Alexa-Code" target="_blank">
              here
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default DoorIntercom;
