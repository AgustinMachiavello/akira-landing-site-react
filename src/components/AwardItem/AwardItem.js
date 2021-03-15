import React from "react";
// import {} from './AwardItemStyles.js';

import awardIcon from '../../assets/img/circular-laurel.png'
import backgroundImage from '../../assets/img/circular-laurel.png'

const AwardItem = (props) => (
  <div className="col-12 col-lg-4">
    <div className="text-center bg-image-contain h-100" style={{backgroundImage: "url('" + null + "')"}}>
      {<div className="">
        <img className="award__image m-3" src={awardIcon}></img>
      </div>}
      <h4 className=""><strong className="">{props.title}</strong></h4>
      <p className="">{props.description}</p>
    </div>
  </div>
);

export default AwardItem;
