import React, { Component } from 'react';


import Carousel from "react-elastic-carousel";
// import Item from "./Item";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"

// ONLY FIRST PICTURE WORKING

// mediumroofductb4after
import img41 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1042.JPG"
import img42 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1596.JPG"
import img43 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1597.JPG"
import img44 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1598.JPG"
import img45 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1599.JPG"
import img46 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1600.JPG"
import img47 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1601.JPG"
import img48 from "../../../pages/wjphotos/mediumroofductb4after/mediumduct.jpeg"
import img49 from "../../../pages/wjphotos/mediumroofductb4after/mediumduct1.jpeg"
import img50 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1604.JPG"
import img51 from "../../../pages/wjphotos/mediumroofductb4after/IMG_1605.JPG"





const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 2, itemsToScroll: 1 }
];



class Carousel8 extends Component {

  state = {

    eight: [
      { image: img41 },
      // { image: img42 },
      // { image: img43 },
      // { image: img44 },
      // { image: img45 },
      // { image: img46 },
      // { image: img47 },
      { image: img48 },
      { image: img49 },
      // { image: img50 },
      // { image: img51 }
    ]

  };



  render() {


    return (

      <div >
8
        <Carousel breakPoints={breakPoints}>
          {this.state.eight.map(images => {
            return <Card src={images.image} />
          })}
        </Carousel>

      </div>

    );
  }
}

export default Carousel8;