import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';

import Toolbar from './components/Toolbar/Toolbar';

import Main from "./pages/Main";
import Projects from "./pages/Projects";


import Footer from "./components/Footer";

import Carouselx from "./components/Carouselx";
import Contact from "./pages/Contact";
import Services from "./pages/Services";




class App extends Component {

  render() {

    return (


      <div>

        <Router>



          <Toolbar />

          <Route exact path="/" component={Main} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/services" component={Services} />
          {/* <Route exact path="/about" component={About} /> */}

          <Route exact path="/carouselx" component={Carouselx} />



          <Footer />

        </Router>




      </div>


    );
  }
}


export default App;