import React , { Component } from 'react';
import { Link } from '@reach/router';
import { FaAngleDoubleLeft , FaWeight} from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['dates'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0]
      }
    ]
  };
var weightTrack = [];

class WeightTracker extends Component{
    handleSubmit(e){
        e.preventDefault(e);
        let gender = document.querySelector("input[name='gender']:checked").value;
        let birthday = document.getElementById('birthday').value;
        let height = document.getElementById('height').value;
        let date = document.getElementById('date').value;
        let weight = document.getElementById('weight').value;

        //add to localStorage
        weightTrack.push({x:date , y:weight});
        localStorage.setItem('myBirthday' , birthday);
        localStorage.setItem('myHeight' , height);
        localStorage.setItem('myGender' , gender);
        //check if the first time using app
        if(!localStorage.getItem('weightTrack')){
            localStorage.setItem('weightTrack',JSON.stringify(weightTrack));
        //it already have some data on storage
        }else if(localStorage.getItem('weightTrack')){
            let tempArr = JSON.parse(localStorage.getItem('weightTrack'));
            tempArr.push(weightTrack[0]);
            //update localstorage
            localStorage.setItem('weightTrack',JSON.stringify(tempArr));
            this.processData(localStorage.getItem('weightTrack'));
        }
        
    }
    processData(myData){
        var myDates = [] , myWeights=[];
        var obj = JSON.parse(myData);
        for(let i=0 ; i<obj.length ; i++){
            myDates.push(obj[i].x);
            myWeights.push(obj[i].y);
        }
        data.labels = myDates;
        data.datasets[0].data = myWeights;
    }

    goBack(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render(){
        if(localStorage.getItem('weightTrack')){            
            let myData = localStorage.getItem('weightTrack');
            this.processData(myData);
        }        
        return(
        <article id="reactProjectContainer" className="projectWrap d-flex align-items-center">
            <div className="container">              
                <div className="projectContainer p-5">
                    <h4 className="darkText py-3 text-center"><FaWeight /> Weight Tracker</h4>
                    <Link onClick={this.goBack}  to="/projects" >
                        <FaAngleDoubleLeft className="dirIcon"/> 
                        <p className="darkText d-inline-block pl-2 font-weight-bold">Back to projects</p>
                    </Link>
                    <section className="py-3 border-top">
                    <div className="weightkBox d-flex row">
                        <div className="col-sm-12 col-lg-6">
                        <form id="weighttracker">
                        <div className="form-group row">
                            <label htmlFor="birthday" className="col-sm-4 col-form-label">Birthday</label>
                            <div className="col-sm-8">
                                <input type="date" className="form-control form-control-sm" id="birthday" placeholder="Birthday" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="date" className="col-sm-4 col-form-label">Date</label>
                            <div className="col-sm-8">
                                <input type="date" className="form-control form-control-sm" id="date" placeholder="Date" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="height" className="col-sm-4 col-form-label">Height</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control form-control-sm" id="height" placeholder="Height" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="weight" className="col-sm-4 col-form-label">Current weight</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control form-control-sm" id="weight" placeholder="Current weight" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="pl-1">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked/>
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                            <button type="submit" className="btn btn-danger btn-sm mt-3"
                            onClick={(e) => this.handleSubmit(e)}>Submit</button>
                        </form>
                        </div>
                        <div className="chart col-sm-12 col-lg-6">
                        <Line data={data} />
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </article>
        )
    }
}

export default WeightTracker