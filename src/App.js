import React, { useState, useEffect }from 'react';
import './sass/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Movie from './views/Movie';
import Footer from './components/Footer';
import { 
  getPopularMovies,
} from './API/get';

const App = () => {
  const [popMovie, setPopMovie] = useState([]);
  const [initialPopMovie, setInitialPopMovie] = useState([]);
    
    useEffect(() => {
        getPopularMovies().then((obj) => {
            if(obj.results) setPopMovie(obj.results);
            if(obj.results) setInitialPopMovie(obj.results);
        });
    }, []);
  return (
    <Router>
      <div className="general-bgc-col">
        <header className="header-content">
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
            {popMovie.length > 0 && <Home popMovie={popMovie} initialPopMovie={initialPopMovie} setPopMovie={setPopMovie} />}
            </Route>
            <Route exact path="/:id">
            {popMovie.length > 0 && <Movie popMovie={popMovie}  />}
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
