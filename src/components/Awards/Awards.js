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
  <div class="row px-5 pb-5 flex-column flex-lg-row justify-content-center">
    {awards.map((award, awardIndex) => {
      return (
        <div className="col-12 col-lg-4">
          <AwardItem
            {...award}
            key={awardIndex}
          />
        </div>
      )
    })}
  </div>
);

export default Awards;
