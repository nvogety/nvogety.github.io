import React, { Component } from "react";
import "./pages.css";
import "./overrideFont.css";

class DoorIntercom extends Component {
  state = {};
  render() {
    return (
      <div class="container main-font">
        <div style={{ textAlign: "left", marginTop: "5%" }}>
          <img
            src={require("../media/doorIntercom.jpg")}
            alt="Door intercom system"
            class="center resize-pic"
          />
          <h1 class="title pixel-font">Door Intercom w/ Amazon Alexa</h1>
          <div class="project-body">
            <h4 class="section-header">Services used:</h4>

            <ul>
              <li>Amazon Alexa Skill Kit</li>
              <li>AWS Lambda</li>
              <li>AWS IoT</li>
              <li>IBM Watson Speech-to-Text and Text-to-Speech</li>
              <li>AWS Dynamo DB</li>
            </ul>

            Written in completely in <b>Node.js</b> (Yay for hardware + js!)

            <br/>
            <br/>

            <h4 class="section-header">Idea:</h4>

            The idea behind this project was to simulate a door intercom system
            within a single call to Alexa. You can tell Alexa "Alexa, send this
            message: [your-message]", and that message will be processed and
            relayed outside through a set of speakers connected to a{" "}
            <b>Raspberry Pi</b>. The person at the door then has a chance to send a
            short message themselves, which is then relayed back to you through
            the Alexa. This all should happen in one call to the Alexa, and
            therefore takes quite a bit of services to make this all work. See the flow
            diagram below.
            <img
              src={require("../media/doorIntercomDiagram.png")}
              alt="Flow diagram for the door intercom system"
              style={{ margin: "5% 5% 5% 5%" }}
              class="resize-pic"
            />

            <h4 class="section-header">Explanation:</h4>

            The first step is to use the <b>Alexa Skill Kit</b> and <b>AWS Lambda</b> to extract the message a user wants to deliver.
            Then, the Lambda function publishes data to a <b>AWS IoT</b> topic stream, and other devices
            can subscribe to that stream and get that data. After all, AWS IoT is a MQTT pub/sub service under the hood.
            In this case, I have the Lambda function publishing on a specific stream that my Raspberry Pi is
            subscribed to. In a parallel fashion, the Pi can publish to another
            stream that the <b>Dynamo Database</b>, and subsequently the Lambda function, is
            reading off of. This is a great way to send messages back and forth!

            <br/>
            <br/>

            On receiving this message from Alexa, the Pi uses IBM’s
            text-to-speech service to convert the string into an .wav audio
            file. It plays this message on two external speakers. A separate USB
            microphone that is also hooked up to the Pi starts recording,
            waiting for the visitor to say something back. That recording is
            also saved as a file, which is passed through IBM’s speech-to-text
            service, and outputs a string. I’m publishing that string, the
            visitor’s message, to a separate topic stream that the Dynamo
            database is keeping track of. The Lambda function checks for any
            update to the database and if so, it will read this out. This is all
            on one call to Alexa!

            <br/>
            <br/>
          
            Note: The <i>asynchronous</i> nature of Node.js/JS was a huge issue in this project. For example,
            audio files would start playing before they were even finished processing!
            The quick fix for this was using a <b>execSync</b> library to simulate synchronous calls.{" "}
          
            <br/>
            <br/>

            <h4 class="section-header">Code:</h4>

            
            <p>
              Github Repo with all the code{" "}
              <a href="https://github.com/nvogety/Alexa-Code" target="_blank">
              here
              </a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DoorIntercom;
