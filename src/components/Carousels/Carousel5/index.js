import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";


import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"



// coolingUNITtangledb4after
import img26 from "../../../pages/wjphotos/coolingUNITtangledb4after/57798644899__8F627EC5-CC55-47E7-9681-AAEF58D381CE.JPG"

import img27 from "../../../pages/wjphotos/coolingUNITtangledb4after/IMG_1479.JPG"
import img28 from "../../../pages/wjphotos/coolingUNITtangledb4after/IMG_1480.JPG"

import img29 from "../../../pages/wjphotos/coolingUNITtangledb4after/IMG_1491.JPG"







const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 2, itemsToScroll: 1 }
];


class Carousel5 extends Component {

  state = {
    
    five: [
      { image: img26 },
      // { image: img27 },
      // { image: img28 },
      { image: img29 }
    ]

  };



  render() {


    return (

      <div >

5
          <Carousel breakPoints={breakPoints}>
            {this.state.five.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

      </div>

    );
  }
}

export default Carousel5;