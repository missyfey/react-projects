import React , { Component} from 'react';
import {Link } from '@reach/router';
import { IoLogoXing } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';

class Navigation extends Component{    
    render(){
        return(
            <article>
                <section id="siteNav" className="siteNav fixed-top container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="fullWidth display-flex text-center">
                    <Link id="logoTopMenu" className="lightText display-4 col-12" to="/">
                        {/* <IoLogoXing /> */}                        
                        <img src="/img/logo.png" width="75px"/>
                    </Link>
                    <button className="cursor navToggler navbar-toggler col-12 mt-2 align-items-center" type="button" data-toggle="collapse" data-target="#navbarMarkup" aria-controls="navbarMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <p className="lightText d-inline-block">Select Page</p>
                        <span className="lightText"><FaBars /></span>
                    </button>
                    </div>
                    <div className="siteNavbar collapse navbar-collapse" id="navbarMarkup">
                        <div className="linksContainer navbar-nav">
                        <Link className="navLink nav-item nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="navLink nav-item nav-link" to="/projects">Projects</Link>
                        <Link id="logoMiddleMenu" className="lightText display-4 px-2" to="/">
                        <img src="/img/logo.png" width="75px"/>
                            {/* <IoLogoXing /> */}
                        </Link>
                        <Link className="navLink nav-item nav-link" to="/resume">Resume</Link>
                        <Link className="navLink nav-item nav-link" to="/contacts">Contacts</Link>
                        </div>
                    </div>
                </nav>
                </section>
            </article>
        )
    }
}

export default Navigation