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


        <div className="jumbotron" style={{ background: "blue", height: "60vh" }}>

          jumbotron
          
        </div>



        <br />
        <br />


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}


        <div className="one" style={{ background: "red", height: "80vh" }}>


          <div style={{ outline: "5px solid black", height: "50%" }}>
            hello
          </div>





          <div style={{ outline: "5px solid blue", height: "50%" }}>
            hello
          </div>

        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <br />
        <br />


        <div className="two" style={{ background: "yellow", height: "30vh" }}>
          two

        </div>



        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <br />
        <br />


        <div className="three" style={{ background: "blue", height: "30vh" }}>

          three
        </div>







      </div>

    );
  }
}


export default Main;