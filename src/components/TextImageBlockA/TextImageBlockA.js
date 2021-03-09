import React from "react";
// import {} from './TextImageBlockAStyles.js';

import image from "../../assets/img/kaneda-side.png";

const TextImageBlockA = (props) => (
  <div className="bg-black text-white">
    <div className="row flex-lg-row flex-column-reverse align-items-center">
      <div className="col col-12 col-lg-6">
        <div>
          <img className="img-fluid" src={image}></img>
        </div>
      </div>
      <div className="col col-12 col-lg-6 p-5 text-centerm-leftd">
	  	  <h2 class="font-f-akira">{props.title}</h2>
        <p>{props.paragraph}</p>
	    </div>
    </div>
  </div>
);

export default TextImageBlockA;
