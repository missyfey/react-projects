import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/popper-utils';
import 'bootstrap/dist/js/bootstrap.js';
import { Router } from "@reach/router"
import Home from './Home';
import Navigation from './Navigation';
import Footer from './Footer';
import Projects from './Projects';
import Weather from './Weather';
import RecipeBox from './RecipeBox';
import ToDo from './ToDo';
import Memorycard from './MemoryCard';
import Clock from './Clock';
import WeightTracker from './WeightTracker';
import DragnDrop from './DragnDrop';
import Movie from './Movie';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <div className="">
      <Navigation />
      <Router>
        <Home path="/" />
        <Projects path="/projects" />
        <DragnDrop path="/dragndrop"/>
        <Memorycard path="/cardgame" />
	  	<Movie path="/movie" />
	  	<MovieDetail path="/MovieDetail/:id" />
        <RecipeBox path="/recipe" />
        <Weather path="/weather" />
        <ToDo path="/todo" />
        <Clock path="/clock" />
        <WeightTracker path='/weighttracker' />
      </Router>
      <Footer path="/footer" /> 
    </div>
  );
}

export default App;
