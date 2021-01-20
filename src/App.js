import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';

import Main from "./pages/Main";


class App extends Component {

  render() {


    return (

      <Router>

        <Route exact path="/" component={Main} />

        {/* // <div className="App">
      //   hello
      // </div> */}




      </Router>



    );
  }
}


export default App;