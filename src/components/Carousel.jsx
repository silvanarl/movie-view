import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
} from '../config';

const Carousel = ({ initialPopMovie }) => {
  return (
    <div className="carousel">
     <AliceCarousel autoPlay autoPlayInterval="3000">
     {initialPopMovie !== undefined && initialPopMovie.map((obj) => (
        <div key={obj.id}>
          <img className="slidering" src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${obj.backdrop_path}`} alt={obj.title}/>
          <span className="carousel-title">{obj.title}</span>
        </div>
    ))}
    </AliceCarousel>
    </div>
  );
}

Carousel.propTypes = {
  initialPopMovie: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Carousel;
