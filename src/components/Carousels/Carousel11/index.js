import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"



// plumbingjobcomparitan
import img66 from "../../../pages/wjphotos/plumbingjobcomparitan/IMG_5394.JPG"
import img67 from "../../../pages/wjphotos/plumbingjobcomparitan/IMG_5396.JPG"
import img68 from "../../../pages/wjphotos/plumbingjobcomparitan/symmetrichallwayfinish.JPG"

import img40 from "../../../pages/wjphotos/lastjobb4after/IMG_5725.JPG"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 }
];


class Carousel11 extends Component {

  state = {

    eleven: [
      { image: img66 },
      { image: img67 },
      { image: img68 },
      { image: img40 }

    ]

  };



  render() {


    return (

      <div >
11

          <Carousel breakPoints={breakPoints}>
            {this.state.eleven.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

      </div>

    );
  }
}

export default Carousel11;