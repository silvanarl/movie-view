import React, { useState, useEffect }from 'react';
import './sass/index.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Movie from './views/Movie';
import { 
  getPopularMovies,
} from './API/get';

const App = () => {
  const [popMovie, setPopMovie] = useState([]);
    
    useEffect(() => {
        getPopularMovies().then((obj) => {
            if(obj.results) setPopMovie(obj.results)
        });
    }, []);
  return (
    <Router>
      <div>
        <header className="header-content">
          <Header />
        </header>
        <Switch>
          <Route exact path="/">
          {popMovie.length > 0 && <Home popMovie={popMovie}  />}
          </Route>
          <Route exact path="/:id">
          {popMovie.length > 0 && <Movie popMovie={popMovie}  />}
          </Route>
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
