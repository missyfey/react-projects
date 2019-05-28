import React , { Component } from 'react';
import { FaClock , FaRegCalendarAlt } from "react-icons/fa";
import { Link } from '@reach/router';
import { FaAngleDoubleLeft} from 'react-icons/fa';
import Moment from 'react-moment';

class Clock extends Component{
    
    constructor(){
        super();
        this.state={
            currentTime:''
        }
        this.time = this.time.bind(this);
    }
    componentDidMount(){
        this.startTime();
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    goBack(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    toggleDate(){
        document.getElementById('dateHolder').classList.toggle('hidden');
    }

    time(){
        let time = new Date();
        let s = time.getSeconds();
        let m = time.getMinutes();
        let h = time.getHours();
        if(s<10){
            s = '0'+s;
        }
        if(m<10){
            m = '0'+m;
        }
        if(h<10){
            h = '0'+h;
        }
        let formattedTime = h + ':' + m + ':' + s;
        this.setState({
            currentTime: formattedTime
        })
    }
    startTime(){
        this.timer = setInterval(this.time , 1000);
    }
    render(){
        return(
        <article id="reactProjectContainer" className="projectWrap d-flex align-items-center">  
            <div className="container">              
                <div className="projectContainer p-5">
                    <h4 className="darkText py-3 text-center"><FaClock className="h2"/> Clock</h4>
                    <Link onClick={this.goBack}  to="/projects" >
                        <FaAngleDoubleLeft className="dirIcon"/> 
                        <p className="darkText d-inline-block pl-2 font-weight-bold">Back to projects</p>
                    </Link>
                    <section className="py-3 border-top">
                    <div className="clockBox d-flex flex-column align-items-center">
                        <div className="d-flex">
                            <label className="switch px-3">
                                <input type="checkbox"onChange={this.toggleDate}/>
                                <span className="slider round"></span>
                            </label>
                            <label className="px-3">
                                <FaRegCalendarAlt className="h2"/> Show Date
                            </label>
                        </div>
                        <div className="clockDisplay position-relative d-flex justify-content-center align-items-center">
                            <div className="timeDisplay position-absolute d-flex flex-column justify-content-center">
                                <span id="" className="h2 text-center">
                                    {this.state.currentTime}
                                </span>
                                <p id="dateHolder" className="hidden">
                                <Moment date={new Date()}
                                    parse="YYYY-MM-DD HH:mm:ss"
                                    format="dddd MMMM D YYYY"/> 
                                </p>                               
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </article>
        )
    }
}

export default Clock