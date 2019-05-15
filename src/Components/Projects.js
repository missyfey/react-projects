import React , { Component} from 'react';
import { Link } from '@reach/router';
import PlayGround from './PlayGround';
import Logos from './Logos';

class Projects extends Component{

    render(){
        return(
            <article className="page">
                <section id="webProjects" className="py-5">
                <div className="container">
                <h4 className="py-3 text-center">Website Design</h4>
                    <PlayGround />
                </div>
                </section>
                <section id="logoProjects" className="py-5">
                <div className="container">
                <h4 className="py-3 text-center">Logo Design</h4>
                    <Logos />
                </div>
                </section>
                <section id="reactProjects" className="py-5">
                    <div className="container">
                        <h4 className="py-3 text-center">My recent react projects</h4>
                        <div className="row d-flex">
                            <Link to="/weather" className="col-6 col-md-4 col-lg-3 p-3">
                                <div className="project-item position-relative">
                                    <div className="project-item-shade position-absolute">
                                    </div>
                                    <img className="project-img" src="/img/weather-project.jpg" alt="React project"/>                                    
                                </div>                                
                                <p className="text-center pt-2">Weather App</p>
                            </Link>
                            <div className="col-6 col-md-4 col-lg-3 p-3">
                                <div className="project-item position-relative">
                                    <div className="project-item-shade position-absolute">
                                    </div>
                                    <img className="project-img" src="/img/movie-project.jpg" alt="React project"/>
                                </div>
                                <p className="text-center pt-2">Movie API</p>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 p-3">
                                <div className="project-item position-relative">
                                    <div className="project-item-shade position-absolute">
                                    </div>
                                    <img className="project-img" src="/img/memoryCardGame-project.jpg" alt="React project"/>
                                </div>
                                <p className="text-center pt-2">Memory Card Game</p>
                            </div>
                            <Link to="/recipe" className="col-6 col-md-4 col-lg-3 p-3">
                                <div className="project-item position-relative">
                                    <div className="project-item-shade position-absolute">
                                    </div>
                                    <img className="project-img" src="/img/recipe-project.jpg" alt="React project"/>
                                </div>
                                <p className="text-center pt-2">Recipe Box</p>
                            </Link>
                            <Link to="/todo" className="col-6 col-md-4 col-lg-3 p-3">
                                <div className="project-item position-relative">
                                    <div className="project-item-shade position-absolute">
                                    </div>
                                    <img className="project-img" src="/img/toDoList-project.jpg" alt="React project"/>
                                </div>
                                <p className="text-center pt-2">ToDo App</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}
export default Projects;
