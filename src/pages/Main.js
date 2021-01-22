import React, { Component } from 'react';
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

// import DemoCarousel from "./DemoCarousel.js";

import img2 from "./photos/pexels2.jpeg";
import img3 from "./photos/cranes.jpeg";
import img1 from "./photos/pexels.jpeg";


import "./Main.css";



class Main extends Component {
  render() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d;
    d = new Date();
    return (

      <div>





<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="img2"/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>




        
        
        <br />
        <br />
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="red" style={{ background: "red", height: "80vh" }}>


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
        <div className="yellow" style={{ background: "yellow", height: "30vh" }}>

          two

        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <br />
        <br />
        <div className="blue3" style={{ background: "blue", height: "30vh" }}>



          three




        </div>
      </div>

    );
  }
}


export default Main;