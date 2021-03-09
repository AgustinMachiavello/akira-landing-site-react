import React from "react";
// import {} from './MangaStyles.js';

// Components
import MangaItem from '../MangaItem';


// Images
import gif1 from '../../assets/img/gif-1.gif';


const items = [
  {
    title: 'title',
    paragraph: 'description',
    image: gif1,
  },
  {
    title: 'title',
    paragraph: 'description',
    image: gif1,
  },
]

const Manga = () => (
  <div className="row flex-column">
    {items.map((item,itemIndex) => {
      return (
        <MangaItem 
          {...item}
          key={itemIndex}
        />
      )
    })}
  </div>
);

export default Manga;
