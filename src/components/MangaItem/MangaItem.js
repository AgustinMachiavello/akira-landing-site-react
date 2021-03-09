import React from "react";
// import {} from './MangaItemStyles.js';

const MangaItem = (props) => (
  <div className="col-12 bg-red">
    <div className="row">
      <div className="col-12 col-lg-6">
        <h4 className="font-f-akira">{props.title}</h4>
        <p className="">{props.paragraph}</p>
      </div>
      <div className="col-12 col-lg-6 bg-black manga__item bg-animation" style={{backgroundImage: 'url(' + props.image + ')'}}>
      </div>
    </div>
  </div>
);

export default MangaItem;
