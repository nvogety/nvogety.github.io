import React, { Component } from "react";
import "./pages.css";
import "./overrideFont.css";

class LedMatrix extends Component {
    state = {};
    render() {
      return (
        <div class="container main-font">
          <div style={{ textAlign: "left", marginTop: "5%" }}>
            <img
              src={require("../media/led-matrix/main.jpg")}
              alt="Demo of the LED Matrix"
              class="center resize-pic"
            />
            <h1 class="title pixel-font">LED Matrix</h1>
            <div class="project-body">
              <p>Built with{" "}
                <a href="https://bennetthuffman.com/" target="_blank">Bennett H.</a>, {" "}
                <a href="https://dijour.com/" target="_blank">Dean D.</a>, {" "}
                <a href="https://kazijawad.nyc/" target="_blank">Kazi J.</a>, 
                and Eshita S. 
                as a part of{" "}
                <a href="https://tedxcmu.org/" target="_blank">TEDxCMU</a>.
              </p>


              <h4 class="section-header">Materials used:</h4>
  
              <ul>
                <li>Arduino Mega</li>
                <li>Several RGB LED Strips</li>
                <li>Power Supplies</li>
                <li>Large Acrylic Sheets</li>
              </ul>
  
  
              <h4 class="section-header">Idea:</h4>
  
              This project was initially created for an in-person TEDxCMU event in the Spring of 
              2020 as a way to attract and engage event-goers in a creative way. The matrix would 
              be able to show images, loop through animations, and potentially have users be able 
              to draw on it like a canvas via the event’s mobile app. The 2020 event was indefinitely
              put off because of the coronavirus pandemic, so this LED matrix was never able to 
              be in the public eye. However, it was an incredibly fun experience to program and build! 
              Here are some pictures of our process.
              <br/>
              
              <img
                src={require("../media/led-matrix/strips.jpg")}
                alt="Matrix strips"
                style={{ margin: "5% 5% 5% 5%" }}
                class="resize-pic"
              />
              <br/>

              In order to build such a large matrix, we split it in half, working on one part at a time on 2 separate acrylic sheets.
              Each strip, where one LED corresponded with one pixel, needed to be connected in a
              snake/zig-zag pattern for wire conservation. The strips were laid on
              each acrylic sheet, and we drilled holes for each RGB connection and soldered them to the next strip's 
              connections as seen above.
              <br/>

              <img
                src={require("../media/led-matrix/test.jpg")}
                alt="Testing the display"
                style={{ margin: "5% 5% 5% 5%" }}
                class="resize-pic"
              />
              <br/>

              <p>
              We tested each half with <a href="https://github.com/adafruit/Adafruit_NeoPixel" target="_blank">Adafruit's NeoPixel</a> libraries by trying out
              some default patterns before importing our own images. We also placed a frosted acrylic sheet on top in order to diffuse the bright LED lights. 
              </p>

              <img
                src={require("../media/led-matrix/connect.jpg")}
                alt="Joining the two halves"
                style={{ margin: "5% 5% 5% 5%" }}
                class="resize-pic"
              />
              <br/>

              We "connected" the two halves by having each panel read off of two different pins on the Arduino Mega.
              One pin would supply the half image data and the other pin would supply the image data for the other
              half. This is where the Arduino Mega is very useful, as the size of the EEPROM is substantial enough to store
              a full image.
              <br/>

              <img
                src={require("../media/led-matrix/rainbow.jpg")}
                alt="Rainbow Display"
                style={{ margin: "5% 5% 5% 5%" }}
                class="resize-pic"
              />
              <br/>

              <img
                src={require("../media/led-matrix/tedx.jpg")}
                alt="TEDx Display"
                style={{ margin: "5% 5% 5% 5%" }}
                class="resize-pic"
              />
              <br/>

              A python script was used to convert an image to a readable array of data for the Arduino. The desired
              image needs to be scaled, altered to match the panel's zig-zag pattern, and have its RGB's extracted.
              Above are some examples of images that were displayed. The storage size of the Mega also allows multiple
              translated images to be flashed over, meaning small animations can be shown as well!
              <br/>


              <br/>
              <h4 class="section-header">Questions?</h4>
              Feel free to email me if you have questions about the tech, process, anything. I'd love to 
              talk about lessons learned from this experience.
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default LedMatrix;