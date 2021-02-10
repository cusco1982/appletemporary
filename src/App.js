import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';

import Toolbar from './components/Toolbar/Toolbar';

import Main from "./pages/Main";

import Footer from "./components/Footer";




class App extends Component {

  render() {

    return (



      <Router>

        <div>

          <Toolbar />


          <Route exact path="/" component={Main} />

          <Footer />

        </div>




      </Router>



    );
  }
}


export default App;