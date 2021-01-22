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

        <Container>



          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="50000">


            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            {/* -------------------------------------------- */}



            {/* -------------------------------------------- */}
            <div class="carousel-inner">



              <div class="carousel-item active">

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
                    <a href="/projects" style={{ textAlign: "center", borderRadius: "25px", border: "2px solid white", padding: "20px", width: "200px", height: "75px", marginRight: "25%" }}>
                      VIEW PROJECT
        </a>
                  </p>

                  <br /> <br /> <br />

                  <p>
                    <a href="/services" style={{ textAlign: "center", borderRadius: "25px", border: "2px solid white", padding: "20px", width: "200px", height: "75px", marginRight: "25%" }}>
                      VIEW SERVICES
        </a>
                  </p>

                </div>

              </div>



              <div class="carousel-item" >
                <img class="d-block w-100" src={img2} alt="Second slide" />
              </div>



              <div class="carousel-item">
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




        </Container>





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