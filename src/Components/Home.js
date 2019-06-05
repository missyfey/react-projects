import React , { Component} from 'react';
import { IoLogoXing } from 'react-icons/io';
import { FaArrowDown } from 'react-icons/fa';
import { DiReact} from 'react-icons/di';
import { FaLaptopCode , FaRegObjectGroup} from 'react-icons/fa';

class Home extends Component{
    render(){
        return(
            <article>
                <div className="homePage d-flex justify-content-center">
                <section className="container vh-100 d-flex row align-items-end">
                   <div className="text-center col-12">
                        {/* <IoLogoXing className="display-1 lightText"/> */}
                        <h1 className="white py-3">Create A Beautiful Online Portfolio</h1>
                        <p className="lightText">Stand out in the crowd with a captivating website.</p>
                   </div>
                    <a id="scrollDown" className="col-12 text-center"><FaArrowDown className="h1 white mb-5"/></a>
                </section>
                </div>  
                <section id="homeTop" className="homeServices container-fluid">
                    <div className="row">
                        <div className="white darkNutral-bg col-12 col-md-4 p-5 text-center">
                            <FaLaptopCode className="display-4"/>
                            <h4 className="py-3">Website Design</h4>
                            <p>
                                Your website tells a lot about your business. Our web designers will create a strong visual impact which results in the perfect website for your business.
                            </p>
                        </div>
                        <div className="lightNutral-bg darkText col-12 col-md-4 p-5 text-center">
                            <FaRegObjectGroup className="display-4"/>
                            <h4 className="py-3">Logo Design</h4>
                            <p>
                            Your brand is what helps you to build the trust of your customers and grow your business both online and in the real world.
                            </p>
                        </div>
                        <div className="white midNutral-bg col-12 col-md-4 p-5 text-center">
                            <DiReact className="display-4"/>
                            <h4 className="py-3">React Projects</h4>
                            <p>
                                Here find out more react projects
                            </p>
                        </div>
                    </div>
                </section>  
                <section className="homeDesc">
                    <div className="row container-fluid">
                        <div className="col-12 col-md-4 text-center position-relative">
                            <img className="butterfly position-absolute" src="/img/homeDesc.png" height="400px" alt="home page background"/>
                        </div>
                        <div className="darkText col-12 col-md-8 p-5 mt-lg-5">
                            <h4 className="py-3">Web design & development</h4>
                            <p>
                            We are a full service web design agency based in Vancouver, Canada. We craft beautiful and engaging websites. We specialize in professional responsive website design and branding.
                            <br/>
                            We can help you with a smooth user interface and an eye-catching website design
                            <br/>
                            We understand your website is central to your brand identity, reputation and how customers perceive you. We take the time to understand your business and create a strategy to fulfill your commercial objectives.
                            </p>
                        </div>
                    </div>
                </section>       
            </article>
        )
    }
}
export default Home;
