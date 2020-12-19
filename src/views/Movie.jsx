import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config";
import { getCredits } from "../API/get";
import noImage from "../assets/no-image.jpg";

const Movie = ({ popMovie }) => {
  const { id } = useParams();
  const movies = popMovie;
  const [credits, setCredits] = useState([]);
  const thisMovie = movies.find((movie) => parseInt(id) === movie.id);

  useEffect((id) => {
    getCredits(id).then((arr) => setCredits(arr));
  }, []);

  Movie.propTypes = {
    popMovie: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  return (
    <div>
      <div className="container-back">
        <Link className="link-back" to="/">
          Home
        </Link>
        <span> | {thisMovie.title}</span>
      </div>
      <div key={thisMovie.id} className="">
        <img
          className="container-image"
          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${thisMovie.backdrop_path}`}
          alt={thisMovie.title}
        />
        <div className="container-info">
          <strong>
            <h1>{thisMovie.title}</h1>
          </strong>
          <span>Overview</span>
          <p>{thisMovie.overview}</p>
          <span>Release date: {thisMovie.release_date}</span>
          <span>Rated: {thisMovie.vote_average}</span>
        </div>
        <div className="container-actors">
          <h2 className="w100">Casting</h2>
          {credits.cast !== undefined &&
            credits.cast.map((ele) => (
              <div key={ele.id} className="info-actor">
                <img
                  className="container-actor-image"
                  src={
                    ele.profile_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${ele.profile_path}`
                      : noImage
                  }
                  alt={ele.name}
                />
                <div className="container-actor-name">
                  <span className="actor-name">{ele.name}</span>
                  <span className="actor-character">{ele.character}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
