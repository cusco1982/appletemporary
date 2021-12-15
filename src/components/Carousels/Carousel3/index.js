import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";
import Card from "./Card";

import "./style.css"
import "./recbuttonstyle.css"




// boiler 2
import img19 from "../../../pages/wjphotos/boiler2pics/IMG_1342.JPG"
import img20 from "../../../pages/wjphotos/boiler2pics/IMG_1343.JPG"

import img22 from "../../../pages/wjphotos/comparitanbasement/IMG_5203.JPG"
import img25 from "../../../pages/wjphotos/comparitanbasement/IMG_5206.JPG"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 }
];



class Carousel3 extends Component {

  state = {
    

    three: [
      { image: img19 },
      { image: img20 },
      { image: img22 },
      { image: img25 }
    ]
  };

 


  render() {


    return (

      <div >
3

          <Carousel id="three" breakPoints={breakPoints}>
            {this.state.three.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>


      </div>

    );
  }
}

export default Carousel3;