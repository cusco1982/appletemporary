import React, { Component } from 'react';


import Carousel from "react-elastic-carousel";
// import Item from "./Item";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"


// bob job
import img6 from "../../../pages/wjphotos/bobjob/IMG_2411.jpeg"
import img7 from "../../../pages/wjphotos/bobjob/IMG_2412.jpeg"
import img8 from "../../../pages/wjphotos/bobjob/IMG_2413.jpeg"
import img9 from "../../../pages/wjphotos/bobjob/IMG_2414.jpeg"
import img10 from "../../../pages/wjphotos/bobjob/IMG_2415.jpeg"
import img11 from "../../../pages/wjphotos/bobjob/IMG_2416.jpeg"
import img12 from "../../../pages/wjphotos/bobjob/IMG_2417.jpeg"
import img13 from "../../../pages/wjphotos/bobjob/IMG_2418.jpeg"
import img14 from "../../../pages/wjphotos/bobjob/IMG_2419.jpeg"
import img15 from "../../../pages/wjphotos/bobjob/IMG_2420.jpeg"
import img16 from "../../../pages/wjphotos/bobjob/IMG_4987.JPG"
import img17 from "../../../pages/wjphotos/bobjob/IMG_4988.JPG"
import img18 from "../../../pages/wjphotos/bobjob/IMG_5005.JPG"

import img31 from "../../../pages/wjphotos/lastduct/IMG_5454.JPG"




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 }
];





class Carousel2 extends Component {

  state = {

    two: [
      // { image: img31 },
      { image: img6 },
      { image: img7 },
      // { image: img8 },
      { image: img9 },
      { image: img10 },
      // { image: img12 },
      // { image: img13 },
      { image: img14 },
      { image: img11 },
      { image: img15 },
      // { image: img16 },
      // { image: img17 },
      // { image: img18 }
    ]
  };

  render() {


    return (

      <div >

2
        <Carousel id="two" breakPoints={breakPoints}>
          {this.state.two.map(images => {
            return <Card src={images.image} />
          })}
        </Carousel>


      </div>

    );
  }
}

export default Carousel2;