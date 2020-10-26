import React from "react";
import PropTypes from "prop-types";
import Movies from "../components/Movies";
import Carousel from "../components/Carousel";
import Search from "../components/Search";

const Home = ({
  popMovie,
  initialPopMovie,
  setPopMovie,
}) => (
  <>
    {initialPopMovie.length > 0 && <Carousel initialPopMovie={initialPopMovie} />}
    {popMovie.length > 0 && (
      <Search
        popMovie={popMovie}
        setPopMovie={setPopMovie}
        initialPopMovie={initialPopMovie}
      />
    )}
    {popMovie.length > 0 && <Movies popMovie={popMovie} />}
  </>
);

Home.propTypes = {
  popMovie: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialPopMovie: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPopMovie: PropTypes.func.isRequired,
};

export default Home;
