import React from "react";
// import {} from './HeaderStyles.js';
import { Parallax } from 'react-parallax';


const Header = (props) => (
  <div className="d-flex flex-column align-items-center p-1 py-5 p-lg-5 bg-white">
    <div className="header__image-wrapper">
      <img className="d-lg-none header__image" src={props.imageMobile}></img>
      <img className="d-none d-lg-block header__image" src={props.imageDesktop}></img>
    </div>
    <div className="text-centerm-leftd mt-5 col-lg-8">
      <h2 className="font-f-akira">{props.title}</h2>
      <p>{props.paragraph}</p>
    </div>
  </div>
);

export default Header;
