import React from "react";
// import {} from './TextImageBlockAStyles.js';


const TextImageBlockA = (props) => (
  <div className="bg-black text-white">
    <div className="row flex-lg-row flex-column-reverse align-items-center">
      <div className="col col-12 col-lg-6">
        <div>
          <img className="d-lg-none img-fluid" src={props.imageMobile}></img>
          <img className="d-none d-lg-block img-fluid" src={props.imageDesktop}></img>
        </div>
      </div>
      <div className="col col-12 col-lg-6 p-4 p-lg-5 text-centerm-leftd">
	  	  <h2 class="font-f-akira text-red">{props.title}</h2>
        <p>{props.paragraph}</p>
	    </div>
    </div>
  </div>
);

export default TextImageBlockA;
