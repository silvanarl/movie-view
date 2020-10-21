import React from 'react';
import './sass/index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Movie from './views/Movie';

const App = () => (
  <Router>
    <div>
      <header className="">
        Movies, peliculas
      </header>
      <Route>
        <Home path="/" />
      </Route>
      <Route>
        <Movie path="/:movieId" />
      </Route>
    </div>
  </Router>
);

export default App;
