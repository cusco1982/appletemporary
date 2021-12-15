import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"




// oldroofductb4after
// import img57 from "../../../pages/wjphotos/oldroofductb4after/IMG_1306.HEIC"
// import img58 from "../../../pages/wjphotos/oldroofductb4after/IMG_1307.HEIC"
// import img59 from "../../../pages/wjphotos/oldroofductb4after/IMG_1355.HEIC"
// import img60 from "../../../pages/wjphotos/oldroofductb4after/IMG_1356.HEIC"
// import img61 from "../../../pages/wjphotos/oldroofductb4after/IMG_1357.HEIC"
import img62 from "../../../pages/wjphotos/oldroofductb4after/duct1.jpeg"
import img63 from "../../../pages/wjphotos/oldroofductb4after/duct2.jpeg"
import img64 from "../../../pages/wjphotos/oldroofductb4after/duct3.jpeg"
import img65 from "../../../pages/wjphotos/oldroofductb4after/duct4.jpeg"






const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 2, itemsToScroll: 2 }
];


class Carousel10 extends Component {

  state = {

    ten: [
      // { image: img57 },
      // { image: img58 },
      // { image: img59 },
      // { image: img60 },
      // { image: img61 },
      { image: img64 },
      { image: img65 },
      { image: img62 },
      { image: img63 },
    ]

  };



  render() {


    return (

      <div >
10

          <Carousel breakPoints={breakPoints}>
            {this.state.ten.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

      </div>

    );
  }
}

export default Carousel10;