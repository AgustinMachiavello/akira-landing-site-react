import React from "react";
// import {} from './AwardsStyles.js';

// Components
import AwardItem from '../AwardItem';


const awards = [
  {
    title: 'Silver Scream Award',
    description: 'Amsterdam Fantastic Film Festival - 1992',
    image: null,
  },
  {
    title: 'Best Anime Feature',
    description: 'American Anime Awards - 2007',
    image: null,
  },
]

const Awards = () => (
  <div className="row gx-0 py-5 flex-column flex-lg-row justify-content-center">
    {awards.map((award, awardIndex) => {
      return (
          <AwardItem
            {...award}
            key={awardIndex}
          />
      )
    })}
  </div>
);

export default Awards;
