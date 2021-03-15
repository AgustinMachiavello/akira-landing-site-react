import React from "react";
// import {} from './MangaStyles.js';

// Components
import MangaItem from '../MangaItem';


function Manga(props) {
  return(
    <div className="bg-black">
      <h2 className="manga__title font-f-akira text-center p-5">The characters</h2>
        {props.items.map((item,itemIndex) => {
          return(
              <MangaItem 
                {...item}
                key={itemIndex}
                left={itemIndex%2 === 0}
              />
          );
        })}
    </div>
  );
};

export default Manga;
