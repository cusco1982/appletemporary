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
            <ul style={{ display: "inline-block", width: "20%" }}>CONTACT US</ul>
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


        <br />


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}







        {/* --------------------------------------------------------------------    QUOTE    ------------------------------------------------------------------------ */}

        <br />
        <br />



        <div className="contact" style={{ background: "white", color: "black" }}>



          <div style={{ fontSize: "300%", textAlign: "center" }}>


            <div>
              Need a FREE quote? Click here!
            </div>



            <a href="contact">

              <button type="button" class="btn btn-light" style={{ fontSize: "70%", borderColor: "black" }}>FREE QUOTE</button>

            </a>



          </div>



        </div>



        <br />
        <br />
        <br />

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}








        {/* ------------------------------------------------  SERVICES IMAGE GRID  ---------------------------------------------------------------------------------------------- */}
        <div style={{ background: "#191a1c" }}>

          <div style={{ background: "#191a1c", height: "8vh" }}></div>

          <div style={{ height: "15vh", color: "whitesmoke", justifyContent: "center", display: "flex" }}>
            <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
              <img style={{ width: "20%", display: "inline-block" }} src={insulationmask} />
              <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                <h2 style={{ paddingLeft: "10px" }}>Abatement</h2>
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
          {/* -----------------------------------------------------------------VVV  2ND ROW  VVV------------------------------------------------------------------------------------- */}

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
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}










        <br />
        <br />
        {/* ------------------------------------------------------------------------  6 BOX  -------------------------------------------------------------------- */}

        <div className="services" style={{ background: "red", height: "80vh" }}>

          <div style={{ outline: "5px solid yellow", height: "50%" }}>
            <div style={{ background: "green", width: "33.33%", height: "100%", float: "left" }}>
              <h1 style={{ textAlign: "center" }}>
                Mechanical Insulation
              </h1>
            </div>
            <div style={{ background: "yellow", width: "33.34%", height: "100%", float: "left" }}>
              <h1 style={{ textAlign: "center" }}>
                Steam Piping Systems
              </h1>
            </div>
            <div style={{ background: "white", width: "33.33%", height: "100%", float: "left" }}>
              <h1 style={{ textAlign: "center" }}>
                Chilled Water Systems
              </h1>
            </div>
          </div>


          <div style={{ outline: "5px solid blue", height: "50%" }}>
            <div style={{ background: "black", width: "33.33%", height: "100%", float: "left" }}>
              <h1 style={{ textAlign: "center" }}>
                Hot and Cold Water Piping
              </h1>
            </div>
            <div style={{ background: "white", width: "33.34%", height: "100%", float: "left" }}>
              <h1 style={{ textAlign: "center" }}>
                Pump Boxes
              </h1>
            </div>
            <div style={{ background: "black", width: "33.33%", height: "100%", float: "left" }}>
              <h1 style={{ textAlign: "center" }}>
                Boiler Systems
              </h1>
            </div>
          </div>

        </div>

        {/* -----------------------------------------------------------------   FOOTER but not footer  ----------------------------------------------------------------------- */}
        <br />
        <br />


        <div className="projects" style={{ background: "yellow", height: "30vh", width: "100%", color: "white", textAlign: "center" }}>



          <div style={{ display: "inline-block", width: "40%", background: "black" }}>

            <div style={{ width: "70%", display: "inline-block", fontSize: "5vh" }}>
              WJ BEST INSULATION

              <svg style={{ fontSize: "200%" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>

            </div>



            <div style={{ width: "30%", display: "inline-block", fontSize: "2vh" }}>
              (732)423-9671
            </div>

          </div>



          <div style={{ display: "inline-block", width: "20%", background: "blue" }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            </svg>

            WJBestInsulation@gmail.com

          </div>



          <div style={{ display: "inline-block", width: "10%", background: "black" }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>

            Edison,NJ 08837

          </div>



          <div style={{ display: "inline-block", width: "20%", background: "red" }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>

            Mon - Fri     9.00 am - 5.00 pm
            Sunday closed

          </div>



          <div style={{ display: "inline-block", width: "10%", background: "orange" }}>
            <div style={{ display: "inline-block", width: "25%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>

            <div style={{ display: "inline-block", width: "25%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>

            <div style={{ display: "inline-block", width: "25%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>

            <div style={{ display: "inline-block", width: "25%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </div>
          </div>







        </div>


        <br />
        <br />
        <br />
        <br />





        {/* ------------------------------------------------------------   ADD THIS TO FOOTER COMPONENT ------------------------------------------------------------------- */}








        <div className="projects" style={{ height: "30vh", width: "100%", color: "white", textAlign: "center" }}>





          <div style={{ display: "inline-block", width: "33.3%", background: "black" }}>


            <div>
              CALL US
            </div>



            <br />
            <br />
            <br />


            <div>
              P: (732) 423-9671
            </div>
            <div>
              F: (111) 111-1111
            </div>


          </div>





          <div style={{ display: "inline-block", width: "33.4%", background: "red" }}>


            <div>
              EMAIL US
            </div>


            <br />
            <br />
            <div style={{ fontSize: "200%" }}>
              WJBestInsulation@gmail.com
            </div>

          </div>




          <div style={{ display: "inline-block", width: "33.3%", background: "blue" }}>


            <div>
              VISIT US
            </div>


            <br />
            <br />


            <div>
              2 NORA RD
            </div>
            <div>
              EDISON, NJ 08837
            </div>



          </div>







        </div>




        <br />
        <br />

        {/* --------------------------------------------------------------------------------------------------------------------------------------- */}


        <div>


          <div style={{ background: "green", width: "33%", textAlign: "center" }}>
            <div>
              CALL US
            </div>

            <div style={{ width: "5%", marginLeft: "47%" }}>
              <hr style={{ color: "rgba(31,37,38,.15)", backgroundColor: "rgba(31,37,38,.15)", height: "2px", marginTop: "32px", marginBottom: "32px", borderWidth: 0, borderStyle: "none", boxSizing: "content-box" }} />
            </div>

            <div>
              P: (732) 423-9671
            </div>
            <div>
              F: (111) 222-3333
            </div>
          </div>




          <div style={{ background: "white", width: "33.4%", textAlign: "center" }}>
            <div>
              EMAIL US
            </div>

            <div style={{ width: "5%", marginLeft: "47%" }}>
              <hr style={{ color: "rgba(31,37,38,.15)", backgroundColor: "rgba(31,37,38,.15)", height: "2px", marginTop: "32px", marginBottom: "32px", borderWidth: 0, borderStyle: "none", boxSizing: "content-box" }} />
            </div>

            <div>
              WJBestInsulation@gmail.com
            </div>
          </div>




          <div style={{ background: "orange", width: "33%", textAlign: "center" }}>
            <div>
              VISIT US
            </div>

            <div style={{ width: "5%", marginLeft: "47%" }}>
              <hr style={{ color: "rgba(31,37,38,.15)", backgroundColor: "rgba(31,37,38,.15)", height: "2px", marginTop: "32px", marginBottom: "32px", borderWidth: 0, borderStyle: "none", boxSizing: "content-box" }} />
            </div>

            <div>
              2 NORA RD
            </div>
            <div>
              EDISON, NJ 08837
            </div>

          </div>


        </div>




        {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

      </div>

    );
  }
}


export default Main;