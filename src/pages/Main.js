import React, { Component } from 'react';
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

// import DemoCarousel from "./DemoCarousel.js";

import img2 from "./photos/pexels2.jpeg";
import img3 from "./photos/cranes.jpeg";
import img1 from "./photos/pexels.jpeg";
import phone from "./photos/phone.png";

import insulationmask from "./photos/insulationmask.png"
import safety from "./photos/safety.png"
import truck from "./photos/truck.png"
import insulation from "./photos/insulation.png"
import consulting from "./photos/consulting.png"


// import Gallery from "../components/Gallery";
import Carouselx from "../components/Carouselx";

import greypattern from "./greypattern.svg"



import "./Main.css";



class Main extends Component {
  render() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d;
    d = new Date();


    
    return (

      <div style={{ }}>


        {/*---------------------------------------  Main Carouel -----------------------------------------*/}


        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="50000">


          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li style={{ marginRight: "auto" }} data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          {/* -------------------------------------------- */}



          {/* -------------------------------------------- */}
          <div class="carousel-inner">



            <div style={{ }} class="carousel-item active">

              <img style={{height:"65vh"}} class="d-block w-100" src={img2} alt="First slide" />


              <div class="carousel-caption d-none d-md-block" style={{ position: "absolute", left: "0", top: "0", right: "60%" }}>
                <br />
                <br />
                <h2 className="date">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {months[d.getMonth()]} {d.getFullYear()}
                </h2>
                <br />
                <h1>
                  Welcome to WJ Best Insulation
                </h1>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <p>
                  <a href="/projects" style={{ color: "white", textAlign: "center", borderRadius: "25px", border: "2px solid white", padding: "20px", width: "200px", height: "75px", marginRight: "25%" }}>
                    VIEW PROJECTS
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



            <div class="carousel-item" >
              <img style={{ height: "65vh" }} class="d-block w-100" src={img2} alt="Second slide" />
            </div>



            <div class="carousel-item">
              <img style={{ height: "65vh" }} class="d-block w-100" src={img3} alt="Third slide" />
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


        <br />

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}




        {/* ----------------------------------------------- Projects Intro div ------------------------------------------------------ */}

        <div className="Intro-projects">





          <header>
            <h1 style={{ display: "inline-block" }}> Our Projects </h1>
            <button style={{ display: "inline-block", float: "right", fontSize: "25px", paddingTop: "12px", paddingBottom: "12px", paddingLeft: "25px", paddingRight: "25px" }}>
              <a href="/projects">
                View All Projects
              </a>
            </button>

            <br />
            <br />
            <br />

            <p>
              Whatever the size of the project, Keller has the expertise and experience to respond quickly with the optimal solution, execute safely and see the project through to a successful conclusion.
            </p>
          </header>


          <br />
          <br />
          <br />
          <br />
          <br />


          <div className="image-row">

            <a href="/projects">
              <div className="container">
                <img style={{ width: "100%", height: "100%" }} src={img1} alt="" />
                <div className="overlay">
                  <div className="text">
                    <div>
                      <h1>Solutions</h1>
                      <p>Heavy foundations</p>
                    </div>
                    <div>
                      <h1>Markets</h1>
                      <p>Institutional/Sports entertainment</p>
                    </div>
                    <div>
                      <h1>Techniques</h1>
                      <p>Drilled shafts</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="/projects">
              <div className="container">
                <img style={{ width: "100%", height: "100%" }} src={img3} alt="" />
                <div className="overlay">
                  <div className="text">
                    <div>
                      <h1>Solutions</h1>
                      <p>Heavy foundations</p>
                    </div>
                    <div>
                      <h1>Markets</h1>
                      <p>Institutional/Sports entertainment</p>
                    </div>
                    <div>
                      <h1>Techniques</h1>
                      <p>Drilled shafts</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

          </div>


          <div className="image-description" style={{ paddingTop: "2%" }}>

            <a href="/projects">
              <div className="container">
                <h1>Port Everglades Southport Turning Notch</h1>
                <text style={{ paddingTop: "2%" }}>
                  <svg style={{ paddingRight: "6px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                  Calgary, Alberta, Canada
                  </text>
                <br />
                <br />
                <br />
                <br />
                <div className="colorborder" style={{ width: "100%", borderBottom: "2px solid black" }}></div>
              </div>
            </a>

            <a href="/projects">
              <div className="container">
                <h1>Calgary Zoo - Canadian Wild's Bugtopia</h1>
                <text style={{ paddingTop: "2%" }}>
                  <svg style={{ paddingRight: "6px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                  Broward County, Florida
                </text>
                <br />
                <br />
                <br />
                <br />
                <div className="colorborder" style={{ width: "100%", borderBottom: "2px solid black" }}></div>
              </div>
            </a>

          </div>




        </div>

        {/* ----------------------------------------------- Projects Intro div end ------------------------------------------------------ */}













        {/* -----------------------------------------------  MARKETS WE SERVE / OUR EXPERTISE --------------------------------------------------- */}


        <br />
        <br />
        <br />


        <div style={{ display: "flex", width: "70%", background: "", marginRight: "auto", marginLeft: "auto", height: "40vh" }}>



          <div className="left">

            <h1>Markets we serve</h1>
            <br />
            <p style={{ fontSize: "30px", width: "60%" }}>Keller has experience across many markets througout the construction industry and understand the unique challanges and...</p>
            <br />
            <br />
            <p>Learn more --></p>

          </div>




          <div className="right">


            <h1>Our expertise</h1>
            <br />
            <p style={{ fontSize: "30px", width: "60%" }}>Keller is able to tap into a wealth of experience, and using proven, best practice methods offer a wide range of...</p>
            <br />
            <br />
            <p>Learn more --></p>

          </div>



        </div>

        <br />
        <br />
        <br />
        <br />





        {/* -----------------------------------------------  markets we serve end --------------------------------------------------- */}














        {/* -----------------------------------------------  SERVICES IMAGE GRID intro  --------------------------------------------------- */}

        <a href="/services">

          <div className="bloomy">


            {/* -----------------------------------------------  SERVICES IMAGE GRID  --------------------------------------------------- */}

            <div style={{ background: "#191a1c" }}>

              <div style={{ background: "#191a1c", height: "8vh", color: "white", textAlign: "center", fontSize: "20px" }}>
                <span class="tooltiptext">Click To See All Services</span>

              </div>

              <div style={{ height: "15vh", color: "whitesmoke", justifyContent: "center", display: "flex" }}>
                <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
                  <img style={{ width: "20%", display: "inline-block" }} src={insulationmask} />
                  <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                    <h2 style={{ paddingLeft: "10px" }}>Insulation</h2>
                    <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                      Asbestos, lead, and mold abatement and remediation services.
                </p>
                  </div>
                </div>

                <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
                  <img style={{ width: "20%", display: "inline-block" }} src={insulation} />
                  <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                    <h2 style={{ paddingLeft: "10px" }}>Construction</h2>
                    <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                      Asbestos, lead, and mold abatement and remediation services.
                </p>
                  </div>
                </div>

                <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
                  <img style={{ width: "20%", display: "inline-block" }} src={consulting} />
                  <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                    <h2 style={{ paddingLeft: "10px" }}>Insulation</h2>
                    <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                      Asbestos, lead, and mold abatement and remediation services.
                </p>
                  </div>
                </div>
              </div>

              <div style={{ background: "#191a1c", height: "2vh" }}></div>


              {/* --------------------------------------------------VVV  2ND ROW  VVV------------------------------------------------------------ */}

              <div style={{ height: "15vh", color: "whitesmoke", justifyContent: "center", display: "flex" }}>

                <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
                  <img style={{ width: "20%", display: "inline-block" }} src={safety} />
                  <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                    <h2 style={{ paddingLeft: "10px" }}>Demolition</h2>
                    <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                      Asbestos, lead, and mold abatement and remediation services.
              </p>
                  </div>
                </div>
                <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
                  <img style={{ width: "20%", display: "inline-block" }} src={truck} />
                  <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                    <h2 style={{ paddingLeft: "10px" }}>Carting</h2>
                    <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                      Asbestos, lead, and mold abatement and remediation services.
              </p>
                  </div>
                </div>
                <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
                  <img style={{ width: "20%", display: "inline-block" }} src={insulationmask} />
                  <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                    <h2 style={{ paddingLeft: "10px" }}>Consulting</h2>
                    <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                      Asbestos, lead, and mold abatement and remediation services.
              </p>
                  </div>
                </div>

              </div>

              <div style={{ background: "#191a1c", height: "8vh" }}></div>

            </div>
            {/* ----------------------------------------------------------------------------------------------------------------------------- */}

          </div>

        </a>





      </div>

    );
  }
}


export default Main;