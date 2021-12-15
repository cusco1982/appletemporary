import React, { Component } from 'react';


import Carousel from "react-elastic-carousel";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"


// 2ductsroofjobneedfinishpics
import img1 from "../../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4579.JPG"
import img2 from "../../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4580.JPG"
import img3 from "../../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4581.JPG"
import img4 from "../../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4582.JPG"
import img5 from "../../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4583.JPG"




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 }
];


class Carousel1 extends Component {

  state = {
    images: [
      { image: img1 },
      { image: img2 },
      { image: img3 },
      { image: img4 },
      { image: img5 }
    ]
  };

  render() {


    return (

      <div >


        <Carousel breakPoints={breakPoints}>
          {this.state.images.map(images => {
            return <Card src={images.image} />
          })}
        </Carousel>



      </div>

    );
  }
}

export default Carousel1;