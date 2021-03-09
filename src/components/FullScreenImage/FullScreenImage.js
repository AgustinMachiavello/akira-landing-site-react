import React from "react";
// import {} from './FullScreenImageStyles.js';

const FullScreenImage = (props) => (
  <div className="bg-full-image vh-100 bg-white" style={{backgroundImage: 'url(' + props.image + ')'}}></div>
);

export default FullScreenImage;
