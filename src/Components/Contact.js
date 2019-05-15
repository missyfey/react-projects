import React , { Component} from 'react';
import { FaMapMarkerAlt ,FaPhone , FaRegEnvelope , FaGlobeAsia } from "react-icons/fa";

class Contact extends Component{
    render(){
        return(
            <div className="main-page">
                <section className="bg-bw vh-100 d-flex justify-content-right align-items-center">                
                    <div className="transparent-bg p-5 ml-auto animated fadeInRight">
                        <div className="p-4">
                            <p className="date">CONTACT INFORMATION</p>
                            <h1>Contact Us</h1>
                            <p>Designed with  by the fine folks at FreeHTML5.co</p>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-12 col-lg-4">
                            <h4>Our Address</h4>
                            
                            <p><span className="pr-3"><FaMapMarkerAlt /></span>198 West 21th Street, Suite 721 New York NY 10016</p>
                            <p><span className="pr-3"><FaPhone /></span>+ 1235 2355 98</p>
                            <p><span className="pr-3"><FaRegEnvelope /></span>info@yoursite.com</p>
                            <p><span className="pr-3"><FaGlobeAsia /></span>www.yoursite.com</p>
                            </div>
                            <div className="col-12 col-lg-8 pt-md-4">
                            <form action="contactForm.php" method="post" name="contactform">
                            <div className="row">
                                <div className="col">
                                    <input id="firstName" name="firstName" type="text" className="form-control" placeholder="First name" required/>
                                    
                                </div>
                                <div className="col">
                                    <input id="lastName" name="lastName" type="text" className="form-control" placeholder="Last name" required/>
                                    
                                </div>
                            </div>
                            <div className="row pt-1">
                                <div className="col">
                                    <input id="email" name="email" type="email" className="form-control" placeholder="Email Address" required/>
                                    
                                </div>
                            </div>
                            <div className="row pt-1">
                                <div className="col">
                                    <textarea id="yourMessage" name="yourMessage" className="form-control" placeholder="Your Message" rows="5" required/>
                                </div>
                            </div>
                            <div className="row pt-1">
                                <div className="col">
                                    <button id="contactFormSubmit" className="btnbg btn btn-info col-12" type="submit" >Send Message</button>
                                </div>
                            </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}
export default Contact;
