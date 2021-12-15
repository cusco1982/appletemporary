import React, { Component } from "react";
import constructionimg from "./constructionsite.png"
import "./Services.css";


class Services extends Component {


    render() {

        return (

            <div style={{}}>


                {/* -------------------------------    solutions header  ------------------------------------- */}

                <div style={{ height: "42vh", background: "rgba(1,51,102,0.8)", display: "flex" }}>

                    <div className="col-md-7" style={{ background: "" }}>
                        <div className="inner-text" style={{ width: "50%", background: "", margin: "auto", marginTop: "10vh" }}>
                            <h1 style={{ fontSize: "55px", color: "#fdc600" }} >Solutions</h1>
                            <br />
                            <br />
                            <h2 style={{ fontSize: "35px", lineHeight: "1.4", color: "white" }} >Keller provides solutions to a wide range of geotechnical challenges across the entire construction spectrum.</h2>
                        </div>
                    </div>
                    <div className="col-md-5" id="headerimage"></div>

                </div>





                {/* -------------------------------    jump to solution dropdown  ------------------------------------- */}

                {/* <div style={{ height: "15vh", background: "grey" }}>
                <br/>
                <br/>
                <br/>
                    <h1 style={{ background: "red", textAlign: "center" }}>Jump to Solution</h1>
                </div> */}





                {/* -------------------------------    solutions list start  ------------------------------------- */}

                <div style={{ height: "50vh", background: "#fff", display: "flex", padding: "80px" }}>
                    <div className="col-md-5" id="boilerimage1" style={{ backgroundColor: "" }}></div>
                    <div className="col-md-7" style={{ background: "" }}>
                        <div style={{ paddingLeft: "" }}>
                            <h1 style={{ fontSize: "50px", color: "#003366" }}>Bearing capacity / settlement control</h1>
                            <br />
                            <h3>Treating soils to support buildings or withstand loads.</h3>
                            <br />
                            <br />
                            <p style={{ color: "#003366" }}>Learn more -></p>
                        </div>
                    </div>
                </div>


                <div style={{ height: "50vh", background: "whitesmoke", display: "flex", padding: "80px" }}>
                    <div className="col-md-5" id="boilerimage1"></div>
                    <div className="col-md-7">
                        <div>
                            <h1 style={{ fontSize: "50px", color: "#003366" }}>Bearing capacity / settlement control</h1>
                            <br />
                            <h3>Treating soils to support buildings or withstand loads.</h3>
                            <br />
                            <br />
                            <p style={{ color: "#003366" }}>Learn more -></p>
                        </div>
                    </div>
                </div>


                <div style={{ height: "50vh", background: "#fff", display: "flex", padding: "80px" }}>
                    <div className="col-md-5" id="boilerimage1"></div>
                    <div className="col-md-7">
                        <div>
                            <h1 style={{ fontSize: "50px", color: "#003366" }}>Bearing capacity / settlement control</h1>
                            <br />
                            <h3>Treating soils to support buildings or withstand loads.</h3>
                            <br />
                            <br />
                            <p style={{ color: "#003366" }}>Learn more -></p>
                        </div>
                    </div>
                </div>


                <div style={{ height: "50vh", background: "whitesmoke", display: "flex", padding: "80px" }}>
                    <div className="col-md-5" id="boilerimage1"></div>
                    <div className="col-md-7">
                        <div>
                            <h1 style={{ fontSize: "50px", color: "#003366" }}>Bearing capacity / settlement control</h1>
                            <br />
                            <h3>Treating soils to support buildings or withstand loads.</h3>
                            <br />
                            <br />
                            <p style={{ color: "#003366" }}>Learn more -></p>
                        </div>
                    </div>
                </div>


                <div style={{ height: "50vh", background: "#fff", display: "flex", padding: "80px" }}>
                    <div className="col-md-5" id="boilerimage1"></div>
                    <div className="col-md-7">
                        <div>
                            <h1 style={{ fontSize: "50px", color: "#003366" }}>Bearing capacity / settlement control</h1>
                            <br />
                            <h3>Treating soils to support buildings or withstand loads.</h3>
                            <br />
                            <br />
                            <p style={{ color: "#003366" }}>Learn more -></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Services;