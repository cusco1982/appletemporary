import React, { Component } from 'react';

import ReactDOM from "react-dom";

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


class Carouselx extends Component {
  render() {

    return (

      <div >

        <div style={{ background: "blue", height: "200px" }}>hello</div>




        {/* -------------------------------------------------------------------------------- */}
        <div style={{ height: "200px" }}>








          <h1 style={{ textAlign: "center" }}>Example to setup carousel in React</h1>
          <div className="App">

          <Carousel breakPoints={breakPoints}>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
            <Item>Seven</Item>
            <Item>Eight</Item>
          </Carousel>

          </div>










        </div>
        {/* -------------------------------------------------------------------------------- */}




        <div style={{ background: "orange", height: "600px" }}>hello</div>


      </div>

    );
  }
}

export default Carouselx;



// import React from "react";
// import "./style.css";
// import { menuData } from "./menu-data.js"



// class Nav extends React.Component {
//   render() {
//     return (

//       <div>

//         <div className="menu-button">
//           <i class="fas fa-bars"></i>
//         </div>

//         {/* Sidebar */}
//         { menuData.length && (
//           <ul className="menu-items">
//             {menuData.map( item => (
//               <li key={item.label}>
//                 <a href={item.url}>{item.label}</a>
//               </li>
//             ))}
//           </ul>
//         ) }

//       </div>

//     )
//   }
// }

// export default Nav;