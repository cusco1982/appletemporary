import React, { Component } from 'react';


import Carousel from "react-elastic-carousel";
// import Item from "./Item";

import Card from "./Card";
import "./style.css"

import "./recbuttonstyle.css"

// 1
// 2ductsroofjobneedfinishpics
import img1 from "../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4579.JPG"
import img2 from "../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4580.JPG"
import img3 from "../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4581.JPG"
import img4 from "../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4582.JPG"
import img5 from "../../pages/wjphotos/2ductsroofjobneedfinishpics/IMG_4583.JPG"

// 2
// bob job
import img6 from "../../pages/wjphotos/bobjob/IMG_2411.jpeg"
import img7 from "../../pages/wjphotos/bobjob/IMG_2412.jpeg"
import img8 from "../../pages/wjphotos/bobjob/IMG_2413.jpeg"
import img9 from "../../pages/wjphotos/bobjob/IMG_2414.jpeg"
import img10 from "../../pages/wjphotos/bobjob/IMG_2415.jpeg"
import img11 from "../../pages/wjphotos/bobjob/IMG_2416.jpeg"
import img12 from "../../pages/wjphotos/bobjob/IMG_2417.jpeg"
import img13 from "../../pages/wjphotos/bobjob/IMG_2418.jpeg"
import img14 from "../../pages/wjphotos/bobjob/IMG_2419.jpeg"
import img15 from "../../pages/wjphotos/bobjob/IMG_2420.jpeg"
import img16 from "../../pages/wjphotos/bobjob/IMG_4987.JPG"
import img17 from "../../pages/wjphotos/bobjob/IMG_4988.JPG"
import img18 from "../../pages/wjphotos/bobjob/IMG_5005.JPG"

// 3
// boiler 2
import img19 from "../../pages/wjphotos/boiler2pics/IMG_1342.JPG"
import img20 from "../../pages/wjphotos/boiler2pics/IMG_1343.JPG"

// 4
// comparitanbasement
import img21 from "../../pages/wjphotos/comparitanbasement/IMG_5092.JPG"
import img22 from "../../pages/wjphotos/comparitanbasement/IMG_5203.JPG"
import img23 from "../../pages/wjphotos/comparitanbasement/IMG_5204.JPG"
import img24 from "../../pages/wjphotos/comparitanbasement/IMG_5205.JPG"
import img25 from "../../pages/wjphotos/comparitanbasement/IMG_5206.JPG"

// 5
// coolingUNITtangledb4after
import img26 from "../../pages/wjphotos/coolingUNITtangledb4after/57798644899__8F627EC5-CC55-47E7-9681-AAEF58D381CE.JPG"
import img27 from "../../pages/wjphotos/coolingUNITtangledb4after/IMG_1479.JPG"
import img28 from "../../pages/wjphotos/coolingUNITtangledb4after/IMG_1480.JPG"
import img29 from "../../pages/wjphotos/coolingUNITtangledb4after/IMG_1491.JPG"

// 6
// lastduct
import img30 from "../../pages/wjphotos/lastduct/IMG_5453.JPG"
import img31 from "../../pages/wjphotos/lastduct/IMG_5454.JPG"
import img32 from "../../pages/wjphotos/lastduct/IMG_5455.JPG"
import img33 from "../../pages/wjphotos/lastduct/IMG_5456.JPG"
import img34 from "../../pages/wjphotos/lastduct/IMG_5457.JPG"
import img35 from "../../pages/wjphotos/lastduct/IMG_5458.JPG"
import img36 from "../../pages/wjphotos/lastduct/IMG_5459.JPG"

// 7
// lastjobb4after
import img37 from "../../pages/wjphotos/lastjobb4after/IMG_5722.JPG"
import img38 from "../../pages/wjphotos/lastjobb4after/IMG_5723.JPG"
import img39 from "../../pages/wjphotos/lastjobb4after/IMG_5724.JPG"
import img40 from "../../pages/wjphotos/lastjobb4after/IMG_5725.JPG"

// 8
// mediumroofductb4after
import img41 from "../../pages/wjphotos/mediumroofductb4after/IMG_1042.JPG"

import img42 from "../../pages/wjphotos/mediumroofductb4after/IMG_1596.JPG"
import img43 from "../../pages/wjphotos/mediumroofductb4after/IMG_1597.JPG"
import img44 from "../../pages/wjphotos/mediumroofductb4after/IMG_1598.JPG"
import img45 from "../../pages/wjphotos/mediumroofductb4after/IMG_1599.JPG"
import img46 from "../../pages/wjphotos/mediumroofductb4after/IMG_1600.JPG"
import img47 from "../../pages/wjphotos/mediumroofductb4after/IMG_1601.JPG"
import img48 from "../../pages/wjphotos/mediumroofductb4after/IMG_1602.JPG"
import img49 from "../../pages/wjphotos/mediumroofductb4after/IMG_1603.JPG"
import img50 from "../../pages/wjphotos/mediumroofductb4after/IMG_1604.JPG"
import img51 from "../../pages/wjphotos/mediumroofductb4after/IMG_1605.JPG"

// 9
// ohmlabsTANK
import img52 from "../../pages/wjphotos/ohmlabsTANK/bigmetalTANKohmlabs.JPG"
// import img53 from "../../pages/wjphotos/ohmlabsTANK/IMG_1521.HEIC"
// import img54 from "../../pages/wjphotos/ohmlabsTANK/IMG_1525.HEIC"
// import img55 from "../../pages/wjphotos/ohmlabsTANK/IMG_1527.HEIC"
// import img56 from "../../pages/wjphotos/ohmlabsTANK/IMG_1536.HEIC"

// 10
// oldroofductb4after
// import img57 from "../../pages/wjphotos/oldroofductb4after/IMG_1306.HEIC"
// import img58 from "../../pages/wjphotos/oldroofductb4after/IMG_1307.HEIC"
// import img59 from "../../pages/wjphotos/oldroofductb4after/IMG_1355.HEIC"
// import img60 from "../../pages/wjphotos/oldroofductb4after/IMG_1356.HEIC"
// import img61 from "../../pages/wjphotos/oldroofductb4after/IMG_1357.HEIC"
import img62 from "../../pages/wjphotos/oldroofductb4after/IMG_1365.PNG"
import img63 from "../../pages/wjphotos/oldroofductb4after/IMG_1366.PNG"
import img64 from "../../pages/wjphotos/oldroofductb4after/IMG_1367.PNG"
import img65 from "../../pages/wjphotos/oldroofductb4after/IMG_1370.PNG"

// 11
// plumbingjobcomparitan
import img66 from "../../pages/wjphotos/plumbingjobcomparitan/IMG_5394.JPG"
import img67 from "../../pages/wjphotos/plumbingjobcomparitan/IMG_5396.JPG"
import img68 from "../../pages/wjphotos/plumbingjobcomparitan/symmetrichallwayfinish.JPG"

// 12
// rooflongductpipeswtiooscar
import img69 from "../../pages/wjphotos/rooflongductpipeswtiooscar/60399734194__488860E9-6EAD-47C9-8FCB-7E55368B2D06.JPG"










const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 }
];


// const API = {
//   getImages: () => {
//     return ([
//       { image: image1 },
//       { image: image2 },
//       { image: image3 },
//       { image: image4 },
//       { image: image5 }
//     ])
//   }
// }



class Carouselx extends Component {

  state = {
    images: [
      { image: img1 },
      { image: img2 },
      { image: img3 },
      { image: img4 },
      { image: img5 }
    ],

    two: [
      { image: img6 },
      { image: img7 },
      { image: img8 },
      { image: img9 },
      { image: img10 },
      { image: img11 },
      { image: img12 },
      { image: img13 },
      { image: img14 },
      { image: img15 },
      { image: img16 },
      { image: img17 },
      { image: img18 }
    ],

    three: [
      { image: img19 },
      { image: img20 }
    ],

    four: [
      { image: img21 },
      { image: img22 },
      { image: img23 },
      { image: img24 },
      { image: img25 }
    ],

    five: [
      { image: img26 },
      { image: img27 },
      { image: img28 },
      { image: img29 }
    ],

    six: [
      { image: img30 },
      { image: img31 },
      { image: img32 },
      { image: img33 },
      { image: img34 },
      { image: img35 },
      { image: img36 }
    ],

    seven: [
      { image: img37 },
      { image: img38 },
      { image: img39 },
      { image: img40 }
    ],

    eight: [
      { image: img41 },
      { image: img42 },
      { image: img43 },
      { image: img44 },
      { image: img45 },
      { image: img46 },
      { image: img47 },
      { image: img48 },
      { image: img49 },
      { image: img50 },
      { image: img51 }
    ],

    nine: [
      { image: img52 },
      // { image: img53 },
      // { image: img54 },
      // { image: img55 },
      // { image: img56 },
    ],

    ten: [
      // { image: img57 },
      // { image: img58 },
      // { image: img59 },
      // { image: img60 },
      // { image: img61 },
      { image: img62 },
      { image: img63 },
      { image: img64 },
      { image: img65 },
    ],

    eleven: [
      { image: img66 },
      { image: img67 },
      { image: img68 }
    ],

    twelve: [
      { image: img69 }
    ]

  };

  // componentDidMount() {
  //   this.loadImages ()
  // };

  // loadImages = () => {
  //   const images = API.getImages()
  //   this.setState({ images: images })
  // };



  render() {


    return (

      <div >



        {/* -------------------------------------------------------------------------------- */}
        <div>



          <Carousel breakPoints={breakPoints}>
            {this.state.images.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.two.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.three.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.four.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.five.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.six.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.seven.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.eight.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.nine.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.ten.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.eleven.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>

          <Carousel breakPoints={breakPoints}>
            {this.state.twelve.map(images => {
              return <Card src={images.image} />
            })}
          </Carousel>


          


          <br />
          <br />
          <br />
          <br />
          <br />
          <br />


        </div>







      </div>

    );
  }
}

export default Carouselx;