import React from 'react';

const Logos = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="logo-indicator carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
        {/* carousel 1st page */}
          <div className="carousel-item active justify-content-center container">
            <div className="logo-projects d-flex col-12 justify-content-center">
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo27.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo28.jpg"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo29.jpg"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo30.gif"/>
              </span>
            </div>

            <div className="logo-projects d-flex col-12 justify-content-center">
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo22.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo23.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo24.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo25.gif"/>
              </span>
            </div>           
          </div>
        {/* carousel 2nd page */}
          <div className="carousel-item justify-content-center container">
            <div className="logo-projects d-flex col-12 justify-content-center">
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo1.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo2.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo3.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo4.gif"/>
              </span>
            </div>

            <div className="logo-projects d-flex col-12 justify-content-center">
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo5.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo6.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo7.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo8.gif"/>
              </span>
            </div>
           
          </div>
          {/* carousel 3rd page */} 
          <div className="carousel-item justify-content-center container">
            <div className="logo-projects d-flex col-12 justify-content-center">
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo9.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo10.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo11.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo12.gif"/>
              </span>
            </div>

            <div className="logo-projects d-flex col-12 justify-content-center">
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo17.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo14.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo15.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo16.gif"/>
              </span>
            </div>
           
          </div>
          {/* carousel 4th page */} 
          <div className="carousel-item justify-content-center container">
            <div className="logo-projects d-flex col-12 justify-content-center">
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo21.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo18.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo19.gif"/>
              </span>
              <span className="logoHolder col-3">
                <img className="border w-100" alt="logo design" src="/img/logos/logo20.gif"/>
              </span>
            </div>

            <div className="logo-projects d-flex col-12 justify-content-center">
              
            </div>
          </div>
          
        </div>
        <a className="controls carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="controls carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className=" carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
   )
}
export default Logos;