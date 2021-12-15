import React, { Component } from 'react';


import Carousel from "react-elastic-carousel";
// import Item from "./Item";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"



// comparitanbasement
import img21 from "../../../pages/wjphotos/comparitanbasement/IMG_5092.JPG"
import img22 from "../../../pages/wjphotos/comparitanbasement/IMG_5203.JPG"
import img23 from "../../../pages/wjphotos/comparitanbasement/IMG_5204.JPG"
import img24 from "../../../pages/wjphotos/comparitanbasement/IMG_5205.JPG"
import img25 from "../../../pages/wjphotos/comparitanbasement/IMG_5206.JPG"

import img19 from "../../../pages/wjphotos/boiler2pics/IMG_1342.JPG"
import img20 from "../../../pages/wjphotos/boiler2pics/IMG_1343.JPG"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 2, itemsToScroll: 1 }
];




class Carousel4 extends Component {

  state = {

    four: [
      // { image: img21 },
      { image: img22 },
      // { image: img23 },
      { image: img24 },
      { image: img25 },
      { image: img19 },
      { image: img20 },
    ]
  };



  render() {


    return (

      <div >



4
        <Carousel breakPoints={breakPoints}>
          {this.state.four.map(images => {
            return <Card src={images.image} />
          })}
        </Carousel>








      </div>

    );
  }
}

export default Carousel4;