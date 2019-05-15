import React , { Component} from 'react';
import { FaTwitterSquare ,FaFacebookSquare , FaInstagram , FaDribbbleSquare } from "react-icons/fa";

class About extends Component{
    render(){
        return(
            <div className="main-page">
                <section className="bg-bw vh-100 d-flex justify-content-right align-items-center">                
                    <div className="transparent-bg p-5 ml-auto animated fadeInRight">
                        <div className="p-4">
                            <p className="date">HISTORY OF WORDS</p>
                            <h1>About Us </h1>
                            <p>Designed with  by the fine folks at FreeHTML5.co</p>
                        </div>
                    </div>
                </section>
                <section className="aboutPage py-5">
                    <div className="row col-12 py-5 d-flex justify-content-center">
                        <h3 className="col-md-8 text-center">History</h3>
                        <p className="history-text col-md-7 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam. Quos quia provident consequuntur 
                        culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita.
                        </p>
                    </div>
                    <section className="py-5">
                    <div className="row col-12 py-5 d-flex justify-content-center">
                        <h2 className="col-md-8 text-center">Meet Our Staff</h2>
                        <p className="col-md-8 text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                    </div>
                    <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-4 col-lg-3 col-sm-6 p-3 d-flex align-items-stretc">
                        <div className="blog-card card d-flex justify-content-between">
                            <img className="card-img-top" src="https://via.placeholder.com/120x80" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Jean Smith</h4>
                                <p className="small">CEO, Founder</p>
                                <p className="card-text">Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat</p>
                            </div>
                            <div className="p-4 text-center text-center">
                                <span className="p-2 h5"><FaTwitterSquare /></span>
                                <span className="p-2 h5"><FaFacebookSquare /></span>
                                <span className="p-2 h5"><FaInstagram /></span>
                                <span className="p-2 h5"><FaDribbbleSquare /></span>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-sm-6 p-3 d-flex align-items-stretc">
                        <div className="blog-card card d-flex justify-content-between">
                            <img className="card-img-top" src="https://via.placeholder.com/120x80" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Hush Raven</h4>
                                <p className="small">System Analyst</p>
                                <p className="card-text">Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat</p>
                            </div>
                            <div className="p-4 text-center">
                                <span className="p-2 h5"><FaTwitterSquare /></span>
                                <span className="p-2 h5"><FaFacebookSquare /></span>
                                <span className="p-2 h5"><FaInstagram /></span>
                                <span className="p-2 h5"><FaDribbbleSquare /></span>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6 p-3 d-flex align-items-stretc">
                        <div className="blog-card card d-flex justify-content-between">
                            <img className="card-img-top" src="https://via.placeholder.com/120x80" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Alex King</h4>
                                <p className="small">Web Developer</p>
                                <p className="card-text">Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat</p>
                            </div>
                            <div className="p-4 text-center">
                                <span className="p-2 h5"><FaTwitterSquare /></span>
                                <span className="p-2 h5"><FaFacebookSquare /></span>
                                <span className="p-2 h5"><FaInstagram /></span>
                                <span className="p-2 h5"><FaDribbbleSquare /></span>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6 p-3 d-flex align-items-stretc">
                        <div className="blog-card card d-flex justify-content-between">
                            <img className="card-img-top" src="https://via.placeholder.com/120x80" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Hush Raven</h4>
                                <p className="small">Web Designer</p>
                                <p className="card-text">Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat</p>
                            </div>
                            <div className="p-4 text-center">
                                <span className="p-2 h5"><FaTwitterSquare /></span>
                                <span className="p-2 h5"><FaFacebookSquare /></span>
                                <span className="p-2 h5"><FaInstagram /></span>
                                <span className="p-2 h5"><FaDribbbleSquare /></span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                </section>
                
            </div>
        )
    }
}
export default About;
