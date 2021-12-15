import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"



// rooflongductpipeswtiooscar
import img69 from "../../../pages/wjphotos/rooflongductpipeswtiooscar/60399734194__488860E9-6EAD-47C9-8FCB-7E55368B2D06.JPG"




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 }
];


class Carousel12 extends Component {

  state = {

    twelve: [
      { image: img69 }
    ]

  };



  render() {


    return (

      <div >

12
          <Carousel breakPoints={breakPoints}>
            {this.state.twelve.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

      </div>

    );
  }
}

export default Carousel12;