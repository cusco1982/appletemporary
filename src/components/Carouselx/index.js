import React, { Component } from 'react';

import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import "./style.css";

import image1 from "../../pages/wjphotos/lastjobb4after/IMG_5722.JPG";
import image2 from "../../pages/wjphotos/lastjobb4after/IMG_5723.JPG";
import image3 from "../../pages/wjphotos/lastjobb4after/IMG_5724.JPG";
import image4 from "../../pages/wjphotos/lastjobb4after/IMG_5725.JPG";

import image5 from "../../pages/wjphotos/lastjobb4after/IMG_5725.JPG";
import image6 from "../../pages/wjphotos/lastjobb4after/IMG_5725.JPG";
import image7 from "../../pages/wjphotos/lastjobb4after/IMG_5725.JPG";
import image8 from "../../pages/wjphotos/lastjobb4after/IMG_5725.JPG";

import Gallery from "../Gallery";


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

        <div>

          <Gallery/>
        </div>

        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>



        {/* -------------------------------------------------------------------------------- */}
        <div>


          <h1 style={{ textAlign: "center" }}>Example to setup carousel in React</h1>
          <div>
            <Carousel breakPoints={breakPoints}>
              <Item>
                <a href="/Gallery">
                  <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={image1} alt="First slide" />
                </a>
              </Item>
              <Item>
                <a href="/Gallery">
                  <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={image2} alt="First slide" />
                </a>
              </Item>
              <Item>
                <a href="/Gallery">
                  <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={image3} alt="First slide" />
                </a>
              </Item>
              <Item>
                <a href="/Gallery">
                  <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={image4} alt="First slide" />
                </a>
              </Item>
              <Item>
                <a href="/Gallery">
                  <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={image5} alt="First slide" />
                </a>
              </Item>
              <Item>
                <a href="/Gallery">
                  <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={image6} alt="First slide" />
                </a>
              </Item>
              <Item>
                <a href="/Gallery">
                  <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={image7} alt="First slide" />
                </a>
              </Item>
              <Item>
                <a href="/Gallery">
                  <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={image8} alt="First slide" />
                </a>
              </Item>
            </Carousel>


          </div>


        </div>
        {/* -------------------------------------------------------------------------------- */}


        <div style={{ background: "orange", height: "600px" }}></div>


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