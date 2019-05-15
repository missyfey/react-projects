import React , { Component} from 'react';

import { FaTwitter ,FaFacebookF , FaRss , FaGooglePlusG } from "react-icons/fa";
class Footer extends Component{
    render(){
        return(
            <article id="footer">
            <section className="footer py-5">
            <div className="container d-flex flex-column align-items-center">
                <div className="col-md-8 col-sm-12 text-center">
                    <h4 className="py-3">GET IN TOUCH</h4>
                    <p>
                    Leave your name and email below along with what you are looking for in the message box. Or you can call me at 778 882 3767.
                    </p>
                </div>
                <div className="footerForm col-md-8 col-sm-12 py-3">
                    <form action="contactForm.php" method="post" name="contactform">
                        <div className="row py-2">
                            <div className="col">
                                <input id="name" name="name" type="text" className="form-control" placeholder="Name" required/>
                           </div>
                            <div className="col">
                                <input id="email" name="email" type="email" className="form-control" placeholder="Email Address" required/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <textarea id="yourMessage" name="yourMessage" className="form-control" placeholder="Your Message" rows="5" required/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <button id="contactFormSubmit" className="submitBtn btn col-12" type="submit" >Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </section> 
            <section className="footerSocial py-2">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="copyright col-12 col-md-6">
                    <p>Designed by <b>Elegant Themes</b> | Powered by <b>Mastaneh</b></p>
                    </div>
                    <div className="social col-12 col-md-6">
                        <span className="h4 px-2"><FaTwitter /></span>
                        <span className="h4 px-2"><FaFacebookF /></span>
                        <span className="h4 px-2"><FaRss /></span>
                        <span className="h3 px-2"><FaGooglePlusG /></span>
                    </div>
                </div>
            </div>
        </section>
        </article>
        )
    }
}

export default Footer