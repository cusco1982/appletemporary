import React, { Component } from 'react';
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

// import DemoCarousel from "./DemoCarousel.js";

// import img2 from "./photos/pexels2.jpeg";


import "./Main.css";



class Main extends Component {
  render() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d;
    d = new Date();
    return (

      <div>



        <div className="one" style={{ background: "red" }}>
          hello
        </div>




        <div className="two" style={{ background: "yellow" }}>
          two
  
        </div>




        <div className="three" style={{ background: "blue" }}>

          three
        </div>







      </div>

    );
  }
}


export default Main;