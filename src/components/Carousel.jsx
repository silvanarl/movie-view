import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
} from '../config';

const Carousel = ({popMovie}) => {
  return (
    <div className="carousel">
     <AliceCarousel autoPlay autoPlayInterval="3000">
     {popMovie !== undefined && popMovie.map((obj) => (
        <>
            <img key={obj.id} className="slidering" src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${obj.backdrop_path}`} alt={obj.title}/>
            <span>{obj.title}</span>
        </>
    ))}
    </AliceCarousel>
    </div>
  );
}

export default Carousel;
