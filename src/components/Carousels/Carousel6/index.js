import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";


import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"



// lastduct
import img30 from "../../../pages/wjphotos/lastduct/IMG_5453.JPG"
import img31 from "../../../pages/wjphotos/lastduct/IMG_5454.JPG"
import img32 from "../../../pages/wjphotos/lastduct/IMG_5455.JPG"
import img33 from "../../../pages/wjphotos/lastduct/IMG_5456.JPG"
import img34 from "../../../pages/wjphotos/lastduct/IMG_5457.JPG"
import img35 from "../../../pages/wjphotos/lastduct/IMG_5458.JPG"
import img36 from "../../../pages/wjphotos/lastduct/IMG_5459.JPG"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 2, itemsToScroll: 1 }
];


class Carousel6 extends Component {

  state = {

    six: [
      // { image: img30 },
      { image: img31 },
      // { image: img32 },
      // { image: img33 },
      // { image: img34 },
      // { image: img35 },
      { image: img36 }
    ]
  };


  render() {

    return (

      <div >

        <Carousel breakPoints={breakPoints}>
          {this.state.six.map(images => {
            return <Card src={images.image} />
          })}
        </Carousel>

      </div>

    );
  }
}

export default Carousel6;