import React, { Component } from "react";
import "./Projects.css"
import image from "./wjphotos/lastduct/IMG_5453.JPG"
import img1 from "./wjphotos/2ductsroofjobneedfinishpics/IMG_4579.JPG"

// bob job 1 piece side duct big pic
import img2 from "./wjphotos/bobjob/IMG_2411.jpeg"

import Carouselx from "../components/Carouselx";



import img41 from "./wjphotos/mediumroofductb4after/IMG_1042.JPG"
import img48 from "./wjphotos/mediumroofductb4after/mediumduct1.jpeg"


import img6 from "./wjphotos/bobjob/IMG_2411.jpeg"
import img7 from "./wjphotos/bobjob/IMG_2412.jpeg"

import img14 from "./wjphotos/bobjob/IMG_2419.jpeg"
import img11 from "./wjphotos/bobjob/IMG_2416.jpeg"

import img10 from "./wjphotos/bobjob/IMG_2415.jpeg"

import img31 from "./wjphotos/lastduct/IMG_5454.JPG"


import img62 from "./wjphotos/oldroofductb4after/duct1.jpeg"
import img63 from "./wjphotos/oldroofductb4after/duct2.jpeg"
import img64 from "./wjphotos/oldroofductb4after/duct3.jpeg"
import img65 from "./wjphotos/oldroofductb4after/duct4.jpeg"



import img22 from "./wjphotos/comparitanbasement/IMG_5203.JPG"
import img24 from "./wjphotos/comparitanbasement/IMG_5205.JPG"
import img25 from "./wjphotos/comparitanbasement/IMG_5206.JPG"
import img19 from "./wjphotos/boiler2pics/IMG_1342.JPG"
import img20 from "./wjphotos/boiler2pics/IMG_1343.JPG"



import img26 from "./wjphotos/coolingUNITtangledb4after/57798644899__8F627EC5-CC55-47E7-9681-AAEF58D381CE.JPG"
import img29 from "./wjphotos/coolingUNITtangledb4after/IMG_1491.JPG"
import img67 from "./wjphotos/plumbingjobcomparitan/IMG_5396.JPG"
import img68 from "./wjphotos/plumbingjobcomparitan/symmetrichallwayfinish.JPG"
import img40 from "./wjphotos/lastjobb4after/IMG_5725.JPG"

import img99 from "./wjphotos/ductsolophoto.jpg"

import img98 from "./wjphotos/2ndrowductoldmaterial.jpg"

import img97 from "./wjphotos/3rdrowductfinish.jpg"

import img52 from "./wjphotos/ohmlabsTANK/bigmetalTANKohmlabs.JPG"
import img96 from "./wjphotos/ohmlabsTANK/ohmlabsbluetankb4.jpg"



import img80 from "./wjphotos/2ndtank/IMG_5763.jpg";
import img81 from "./wjphotos/2ndtank/IMG_5764.jpg";
import img82 from "./wjphotos/2ndtank/IMG_5765.jpg";
import img83 from "./wjphotos/2ndtank/IMG_5769.jpg";
import img84 from "./wjphotos/2ndtank/IMG_5782.jpg";
import img85 from "./wjphotos/2ndtank/IMG_5791.jpg";
import img86 from "./wjphotos/2ndtank/IMG_5797.jpg";
import img87 from "./wjphotos/2ndtank/IMG_5798.jpg";




import img77 from "./wjphotos/comparitanbasement/IMG_5092.JPG"

// background-image: url(./wjphotos/comparitanbasement/IMG_5092.JPG) ;


class Projects extends Component {


    render() {

        return (

            <div className="container-fluid">


                {/*--------------------------------------------- header ---------------------------------------------*/}




                <div className="row projects-header" style={{ maxHeight: "50vh" }}>


                    <div className="col-md-12 col-lg-12 col-xl-7" style={{ backgroundColor: "", margin: "auto", paddingLeft: "8%", paddingRight: "8%" }}>

                        <div className="header-text" >

                            <h1>Projects</h1>

                            <h2>Keller has extensive experience across a wide variety of Projects, large and small, and a proven track record of delivering these safely, on time and to high quality.</h2>
                        </div>

                    </div>

                    <div className="col-xl-5 d-sm-none d-md-none d-lg-none d-xl-block" style={{ backgroundColor: "", padding:"0" }}>

                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img77} alt="" />

                    </div>



                </div>




                {/* <div className="row" style={{backgroundColor: "rgba(1,51,102,0.8)", backgroundImage: `url(${img77})`, backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"right"}}> */}
                {/* d-sm-none */}

                {/* <div className="col-md-12 col-lg-12 col-xl-7" style={{  }}>
                        <div className="inner-text" style={{  }}>
                            <h1 style={{ fontSize: "55px", color: "#fdc600" }} >Projects</h1>
                            <br />
                            <br />
                            <h2 style={{ fontSize: "35px", lineHeight: "1.4", color: "white" }} >Keller has extensive experience across a wide variety of Projects, large and small, and a proven track record of delivering these safely, on time and to high quality.</h2>
                        </div>
                    </div> */}


                {/* <div className="col-xl-5 d-none d-xl-block"><img className="img-fluid" src={img77} style={{height:"auto", width:"100%"}} alt=""/></div> */}

                {/* </div> */}



                <br />
                <br />
                <br />

                {/*------------------------- project images start -------------------------*/}
                <div className="container-fluid">

                    {/*-- first row --*/}
                    <div className="row">
                        <div style={{ display: "flex", padding: "5%" }} className="col-md-12 col-lg-12 col-xl-6">
                            {/* bobjob */}
                            <div style={{ display: "flex", padding: "0" }} className="col-6">
                                <div style={{ padding: "0" }} className="col-6">
                                    <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img31} alt="" />
                                </div>
                                <div style={{ padding: "0" }} className="col-6">
                                    <div className="h-50">
                                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img6} alt="" />
                                    </div>
                                    <div className="h-50">
                                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img7} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: "0" }} className="col-6">
                                <div className="h-50" style={{ display: "flex" }}>
                                    <div style={{ padding: "0" }} className="col-6">
                                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img14} alt="" />
                                    </div>
                                    <div style={{ padding: "0" }} className="col-6">
                                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img11} alt="" />
                                    </div>
                                </div>
                                <div className="h-50">
                                    <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img10} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* right water tank */}
                        <div style={{ padding: "5%" }} className="col-md-12 col-lg-12 col-xl-6">
                            <div className="row h-50">
                                <div className="col-7" style={{ padding: "0" }}>
                                    <img className="img-fluid" src={img67} style={{ width: "100%", height: "100%" }} alt="" />
                                </div>
                                <div className="col" style={{ padding: "0" }}>
                                    <img className="img-fluid" src={img68} style={{ width: "100%", height: "100%" }} alt="" />
                                </div>
                                <div className="col" style={{ padding: "0" }}>
                                    <img className="img-fluid" src={img40} style={{ width: "100%", height: "100%" }} alt="" />
                                </div>
                            </div>
                            <div className="row h-50">
                                <div className="col-8" style={{ padding: "0" }}>
                                    <img className="img-fluid" src={img29} style={{ width: "100%", height: "100%" }} alt="" />
                                </div>
                                <div className="col-4" style={{ padding: "0" }}>
                                    <img className="img-fluid" src={img26} style={{ width: "100%", height: "100%" }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-- second row --*/}
                    <div className="row">
                        {/* left carousel */}
                        <div style={{ backgroundColor: "white", padding: "5%" }} className="col-md-12 col-lg-12 col-xl-6">
                            <div id="carouselExampleIndicators22" class="carousel slide" data-ride="carousel" data-interval="10000">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators22" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators22" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators22" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators22" data-slide-to="3"></li>
                                </ol>
                                <div class="carousel-inner" style={{ maxHeight: "600px" }}>
                                    <div class="carousel-item active" >
                                        <img style={{ maxHeight: "600px" }} class="d-block w-100" src={img64} alt="First slide" />
                                        {/* <div class="carousel-caption d-none d-md-block"><p>caption here</p></div> */}
                                    </div>

                                    <div class="carousel-item" >
                                        <img style={{ maxHeight: "600px" }} class="d-block w-100" src={img65} alt="Second slide" />
                                    </div>

                                    <div class="carousel-item">
                                        <img style={{ maxHeight: "600px" }} class="d-block w-100" src={img62} alt="Third slide" />
                                    </div>

                                    <div class="carousel-item">
                                        <img style={{ maxHeight: "600px" }} class="d-block w-100" src={img97} alt="Third slide" />
                                    </div>

                                    <div class="carousel-item">
                                        <img style={{ maxHeight: "600px" }} class="d-block w-100" src={img63} alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators22" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators22" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        {/* right carousel */}
                        <div style={{ backgroundColor: "white", padding: "5%" }} className="col-md-12 col-lg-12 col-xl-6">
                            <div id="carouselExampleIndicators11" class="carousel slide" data-ride="carousel" data-interval="10000">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators11" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators11" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators11" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img style={{ maxHeight: "600px" }} class="d-block w-100" src={img41} alt="First slide" />
                                        {/* <div class="carousel-caption d-none d-md-block"><p>caption here</p></div> */}
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ maxHeight: "600px" }} class="d-block w-100" src={img48} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ maxHeight: "600px" }} class="d-block w-100" src={img98} alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators11" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators11" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*-- third row --*/}
                    <div className="row">
                        {/* chemicalplanttank */}
                        <div style={{ backgroundColor: "white", padding: "5%" }} className="col-md-12 col-lg-12 col-xl-6">
                            <div id="carouselExampleIndicators444" class="carousel slide" data-ride="carousel" data-interval="10000">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators444" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators444" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators444" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators444" data-slide-to="3"></li>
                                    <li data-target="#carouselExampleIndicators444" data-slide-to="4"></li>
                                    <li data-target="#carouselExampleIndicators444" data-slide-to="5"></li>
                                    <li data-target="#carouselExampleIndicators444" data-slide-to="6"></li>
                                    <li data-target="#carouselExampleIndicators444" data-slide-to="7"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img86} alt="First slide" />
                                        {/* <div class="carousel-caption d-none d-md-block"><p>caption here</p></div> */}
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img80} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img81} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img82} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img83} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img84} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img85} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img87} alt="Second slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators444" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators444" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        {/* bluetank */}
                        <div style={{ backgroundColor: "white", padding: "5%" }} className="col-md-12 col-lg-12 col-xl-6">
                            <div id="carouselExampleIndicators333" class="carousel slide" data-ride="carousel" data-interval="10000">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators333" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators333" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img52} alt="First slide" />
                                        {/* <div class="carousel-caption d-none d-md-block"><p>caption here</p></div> */}
                                    </div>
                                    <div class="carousel-item" >
                                        <img style={{ height: "700px" }} class="d-block w-100" src={img96} alt="Second slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators333" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators333" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*-- fourth row --*/}
                    <div className="row">
                        {/* duct water tank */}
                        <div style={{ padding: "5%" }} className="col-md-12 col-lg-12 col-xl-6">
                            <img className="rounded img-fluid" style={{ height: "auto" }} src={img99} alt="..." />
                        </div>
                        {/* boiler/chill water pipes */}
                        <div style={{ padding: "5%" }} className="col-md-12 col-lg-12 col-xl-6">
                            <div className="row h-100">
                                <div className="col-4" style={{ padding: "0" }}>
                                    <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img24} alt="" />
                                </div>
                                <div className="col-4" style={{ padding: "0" }}>
                                    <div className="h-50">
                                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img19} alt="" />
                                    </div>
                                    <div className="h-50">
                                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img20} alt="" />
                                    </div>
                                </div>
                                <div className="col-4" style={{ padding: "0" }}>
                                    <div className="h-50">
                                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img22} alt="" />
                                    </div>
                                    <div className="h-50">
                                        <img className="img-fluid" style={{ height: "100%", width: "100%" }} src={img25} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>






                <br />

            </div>
        );
    }
}

export default Projects;