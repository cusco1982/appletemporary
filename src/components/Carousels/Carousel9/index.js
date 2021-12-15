import React, { Component } from 'react';


import Carousel from "react-elastic-carousel";
// import Item from "./Item";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"



// ohmlabsTANK
import img52 from "../../../pages/wjphotos/ohmlabsTANK/bigmetalTANKohmlabs.JPG"
// import img53 from "../../../pages/wjphotos/ohmlabsTANK/IMG_1521.HEIC"
// import img54 from "../../../pages/wjphotos/ohmlabsTANK/IMG_1525.HEIC"
// import img55 from "../../../pages/wjphotos/ohmlabsTANK/IMG_1527.HEIC"
// import img56 from "../../../pages/wjphotos/ohmlabsTANK/IMG_1536.HEIC"






const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 }
];


class Carousel9 extends Component {

  state = {
    
    nine: [
      { image: img52 },
      // { image: img53 },
      // { image: img54 },
      // { image: img55 },
      // { image: img56 },
    ]

  };



  render() {


    return (

      <div >

9
          <Carousel style={{background:"purple", width:"100%"}} breakPoints={breakPoints}>
            {this.state.nine.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

      </div>

    );
  }
}

export default Carousel9;