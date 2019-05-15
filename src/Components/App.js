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

function App() {
  return (
    <div className="">
      <Navigation />
      <Router>
        <Home path="/" />
        <Projects path="/projects" />
        <RecipeBox path="/recipe" />
        <Weather path="/weather" />
        <ToDo path="/todo" />
      </Router>
      <Footer path="/footer" /> 
    </div>
  );
}

export default App;
