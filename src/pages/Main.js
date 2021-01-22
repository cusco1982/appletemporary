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





        <div style={{ height: "6vh", background: "black" }}>

          <li style={{ color: "white", textAlign: "center", listStyle: "none", fontSize: "25px" }}>
            <ul style={{ display: "inline-block", width: "20%", paddingTop: "12px" }}>SERVICES</ul>
            <ul style={{ display: "inline-block", width: "20%" }}>OUR WORK</ul>
            <ul style={{ display: "inline-block", width: "20%" }}>SERVICES</ul>
            <ul style={{ display: "inline-block", width: "20%" }}>SERVICES</ul>
          </li>

        </div>





        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="50000">


          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          {/* -------------------------------------------- */}



          {/* -------------------------------------------- */}
          <div class="carousel-inner">



            <div style={{ height: "60vh" }} class="carousel-item active">

              <img class="d-block w-100" src={img2} alt="First slide" />


              <div class="carousel-caption d-none d-md-block" style={{ position: "absolute", left: "0", top: "0", right: "60%" }}>
                <br />
                <br />
                <h2 className="date">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {months[d.getMonth()]} {d.getFullYear()}
                </h2>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <p>
                  <a href="/projects" style={{ color: "white", textAlign: "center", borderRadius: "25px", border: "2px solid white", padding: "20px", width: "200px", height: "75px", marginRight: "25%" }}>
                    VIEW PROJECT
                    </a>
                </p>
                <br /> <br /> <br />
                <p>
                  <a href="/services" style={{ color: "white", textAlign: "center", borderRadius: "25px", border: "2px solid white", padding: "20px", width: "200px", height: "75px", marginRight: "25%" }}>
                    WHAT WE DO
                    </a>
                </p>
              </div>

            </div>



            <div style={{ height: "60vh" }} class="carousel-item" >
              <img class="d-block w-100" src={img2} alt="Second slide" />
            </div>



            <div style={{ height: "60vh" }} class="carousel-item">
              <img class="d-block w-100" src={img3} alt="Third slide" />
            </div>

          </div>
          {/* -------------------------------------------- */}


          {/* -------------------------------------------- */}
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>


        </div>





        <div style={{ height: "13vh", background: "black" }}>

        </div>







        <br />
        <br />
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="services" style={{ background: "red", height: "80vh" }}>


          <div style={{ outline: "5px solid yellow", height: "50%" }}>



            <div style={{ background: "green", width: "33.33%", height: "100%", float: "left" }}>
              Mechanical Insulation
            </div>

            <div style={{ background: "yellow", width: "33.34%", height: "100%", float: "left" }}>
              Steam Piping Systems
            </div>

            <div style={{ background: "white", width: "33.33%", height: "100%", float: "left" }}>
              Chilled Water Systems
            </div>




          </div>








          <div style={{ outline: "5px solid blue", height: "50%" }}>


            <div style={{ background: "black", width: "33.33%", height: "100%", float: "left" }}>
              Hot and Cold Water Piping
            </div>

            <div style={{ background: "white", width: "33.34%", height: "100%", float: "left" }}>
              Pump Boxes
            </div>

            <div style={{ background: "black", width: "33.33%", height: "100%", float: "left" }}>
              Boiler Systems
            </div>






          </div>


        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <br />
        <br />
        <div className="projects" style={{ background: "yellow", height: "30vh" }}>

          two

        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <br />
        <br />
        <div className="contact" style={{ background: "blue", height: "30vh" }}>



          three




        </div>
      </div>

    );
  }
}


export default Main;