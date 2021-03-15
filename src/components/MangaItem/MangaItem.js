import React from "react";
// import {} from './MangaItemStyles.js';

const MangaItem = (props) => (
  <div className="row gx-0 manga__item flex-column flex-lg-row" >
    {!props.left && (
      <div
        className="col col-12 col-lg-6 manga__item__image bg-animation"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      ></div>
    )}
    <div className={`col col-12 col-lg-6 p-5 manga__item__text ${props.left ? 'text-centerm-rightd' : 'text-centerm-leftd'}`} 
    data-aos={props.left ? 'fade-left' : 'fade-right' }
    style={{ backgroundImage: "url(" + props.image + ")" }}>
      <h4 className="font-f-akira">{props.title}</h4>
      <p className="">{props.paragraph}</p>
    </div>
    {props.left && (
      <div
        className="col col-12 col-lg-6 manga__item__image bg-animation"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      ></div>
    )}
  </div>
);

export default MangaItem;
