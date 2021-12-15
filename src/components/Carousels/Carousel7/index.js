import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";


import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"



// lastjobb4after
import img37 from "../../../pages/wjphotos/lastjobb4after/IMG_5722.JPG"
import img38 from "../../../pages/wjphotos/lastjobb4after/IMG_5723.JPG"
import img39 from "../../../pages/wjphotos/lastjobb4after/IMG_5724.JPG"
import img40 from "../../../pages/wjphotos/lastjobb4after/IMG_5725.JPG"






const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 3, itemsToScroll: 1 }
];


class Carousel7 extends Component {

  state = {

    seven: [
      // { image: img37 },
      // { image: img38 },
      // { image: img39 },
      { image: img40 }
    ]

  };


  render() {

    return (

      <div >
7
          <Carousel breakPoints={breakPoints}>
            {this.state.seven.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

      </div>

    );
  }
}

export default Carousel7;