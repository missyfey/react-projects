import React , { Component } from 'react';
import { Link } from '@reach/router';
import { FaAngleDoubleLeft , FaWeight} from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

var weightTrack = [];
class WeightTracker extends Component{
    constructor(){
        super();
        this.state ={
            data : {
                labels: [],
                datasets: [
                  {
                    label: 'My Weight Tracker',
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
                    data: []
                  }
                ]
              }
        }
    }
    componentDidMount(){
        document.getElementById('date').valueAsDate = new Date();
    }

    handleSubmit(e){
        e.preventDefault(e);
        console.log('after submit:',this.state.data);
        let date = document.getElementById('date').value;
        let weight = document.getElementById('weight').value;

        //add to localStorage
        weightTrack.push({x:date , y:weight});
        

        //check if the first time using app
        if(!localStorage.getItem('weightTrack')){
            
            localStorage.setItem('weightTrack',JSON.stringify(weightTrack));
            this.forceUpdate();
        //it already have some data on storage
        }else if(localStorage.getItem('weightTrack')){           
            console.log('local storage:',this.state.data);
            let tempArr = JSON.parse(localStorage.getItem('weightTrack'));
            tempArr.push(weightTrack[weightTrack.length-1]);

            //update localstorage
            localStorage.setItem('weightTrack',JSON.stringify(tempArr));

                //sort items by entry date
                const orderedArr = JSON.parse(localStorage.getItem('weightTrack'));
                orderedArr.sort(function(a,b){
                    return a.x > b.x ? 1 : -1;  
                    });
                localStorage.setItem('weightTrack',JSON.stringify(orderedArr));

            this.processData(localStorage.getItem('weightTrack'));
            this.forceUpdate();
        }
        
    }
    clearData(e){
        e.preventDefault();
        localStorage.clear();
        this.state.data.labels = [];
        this.state.data.datasets[0].data = [];
        weightTrack=[];
        this.forceUpdate();
    }
    processData(myData){
        var myDates = [] , myWeights=[];
        var obj = JSON.parse(myData);
        for(let i=0 ; i<obj.length ; i++){
            myDates.push(obj[i].x);
            myWeights.push(obj[i].y);
        }
        this.state.data.labels = myDates;
        this.state.data.datasets[0].data = myWeights;
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
                        <form id="weighttracker" className="py-5">
                        <div className="form-group row">
                            <label htmlFor="date" className="col-sm-4 col-form-label">Date</label>
                            <div className="col-sm-8">
                                <input type="date" className="form-control form-control-sm" id="date" placeholder="Date" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="weight" className="col-sm-4 col-form-label">Current weight</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control form-control-sm" id="weight" placeholder="Current weight" required/>
                            </div>
                        </div>
                            <button type="submit" className="d-block btn btn-danger btn-sm mt-3"
                            onClick={(e) => this.handleSubmit(e)}>Submit</button>
                            <button type="btn" className="d-block btn btn-info btn-sm mt-3"
                            onClick={(e) => this.clearData(e)}>Clear</button>
                        </form>
                        </div>
                        <div className="chart col-sm-12 col-lg-6">
                        <Line data={this.state.data} />
                        </div>
                    </div>
                    </section>
                <div>
                    <p>App Description:</p>
                    <p>This app stores data on local storage, As long as the locall storage have not cleared it keeps data even if 
                        browser closes. </p>
                </div>
                </div>
            </div>
        </article>
        )
    }
}

export default WeightTracker