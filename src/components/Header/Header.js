import React from "react";
// import {} from './HeaderStyles.js';

import topImageMobile from '../../assets/img/akira-motorbike-3.png'
import topImageDesktop from '../../assets/img/akira-falling.png'

const Header = (props) => (
  <div className="d-flex flex-column align-items-center p-5 bg-white">
    <div className="header__image-wrapper">
      <img className="d-lg-none header__image" src={topImageMobile}></img>
      <img className="d-none d-lg-block header__image" src={topImageDesktop}></img>
    </div>
    <div className="text-centerm-leftd mt-5 col-lg-6">
      <h2 class="font-f-akira">{props.title}</h2>
      <p>{props.paragraph}</p>
    </div>
  </div>
);

export default Header;
