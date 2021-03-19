import React, { Component } from 'react';
// import "./style.css";




class Carousel extends Component {
  render() {

    return (



      <div >



        <div style={{ background: "blue", height: "200px" }}>
          hello
        </div>

        <div style={{ background: "red", height: "200px" }}>
          hello
        </div>

        <div style={{ background: "orange", height:"600px"}}>
          hello
        </div>


      </div>

    );
  }
}

export default Carousel;



// import React from "react";
// import "./style.css";
// import { menuData } from "./menu-data.js"



// class Nav extends React.Component {
//   render() {
//     return (

//       <div>

//         <div className="menu-button">
//           <i class="fas fa-bars"></i>
//         </div>

//         {/* Sidebar */}
//         { menuData.length && (
//           <ul className="menu-items">
//             {menuData.map( item => (
//               <li key={item.label}>
//                 <a href={item.url}>{item.label}</a>
//               </li>
//             ))}
//           </ul>
//         ) }

//       </div>

//     )
//   }
// }

// export default Nav;