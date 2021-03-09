import React from "react";
// import {} from './AwardItemStyles.js';

import awardIcon from '../../assets/img/circular-laurel.png' 

const AwardItem = (props) => (
  <div className="text-center">
    <div>
      <img className="award__image m-3" src={awardIcon}></img>
    </div>
    <h4 className=""><strong>{props.title}</strong></h4>
    <p className="">{props.description}</p>
  </div>
);

export default AwardItem;
