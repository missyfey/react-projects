import React , { Component} from 'react';
import { Link } from '@reach/router';
import { FaAngleDoubleLeft , FaSearch , FaCloudSun} from 'react-icons/fa';
import {WiCelsius , WiFahrenheit } from 'react-icons/wi';
import uniq from 'lodash/_baseUniq';
import Moment from 'react-moment'; 

// icon Address OpenWeatherMap = 'http://openweathermap.org/img/w/'
//google API key: AIzaSyBfGVCSFLH_Nz1Tx1qWFVeKuSZ8Ln6M-5w
//Open Weather Map APIkey = '328a80a9b3cba97fe2f0cdd342ea5b83';
let iconSrc = 'http://openweathermap.org/img/w/';

class Weather extends Component{
    constructor(){
        super();
        this.state={
            searchQuery:'',
            cityList:[{
                coord:{}
            }],
            countryList:[],
            city:'Vancouver',
            country:'CA',
            cityInfo:{},
            forecast:[
                {
                    main:{},
                    clouds:{},
                    weather:[
                        {}
                    ],
                    wind:{}
                }
            ],
            fromAPI:{}
        }
        this.goBack = this.goBack.bind(this);
        this.updateSearchQuery = this.updateSearchQuery.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.fetchForecast  =this.fetchForecast.bind(this);
        this.findCurrentDate = this.findCurrentDate.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    
    componentDidMount(){
        //get current location
        fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(result =>{
            this.setState({
                city: result.city,
                country: result.countryCode,
            })
            this.fetchForecast(result.city,result.countryCode)   
        });
        //fetch the forecast for default city "Vancouover"
        this.fetchForecast(this.state.city,this.state.country)   

        //get city list from json file        
        fetch('city.list.json')
        .then(response => response.json())
        .then(result =>{
            this.setState({
                cityList: result
            })
        })
    }
    goBack(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    updateSearchQuery(e){
        let searchedFor = e.target.value;
        this.setState({
            searchQuery: searchedFor
        })
    }
    handleEnter(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            this.handleSearch(e);
        }
    }
    handleSearch(e){
        e.preventDefault();
        
        let searchedCity = this.state.searchQuery;
        let foundCities =[];
        this.state.cityList.map((item) =>{
            if (item.name.toLowerCase() === searchedCity.toLowerCase()){
                foundCities.push(item);
            }
        })
        
        if(foundCities.length>1 && searchedCity!==''){
            document.getElementById('citySearchResult').classList.remove('d-none');
            document.getElementById('errorMsg').classList.add('d-none');
            let foundCity = foundCities[0].name;
            let countryList=[];
            foundCities.map(item=>{
                countryList.push(item.country)
            })
            this.setState({
                countryList: uniq(countryList),
                city: foundCity
            })

        }else if(foundCities.length === 1 && searchedCity!==''){
            document.getElementById('citySearchResult').classList.add('d-none');
            document.getElementById('errorMsg').classList.add('d-none');
            let foundCity = foundCities[0].name;
            let foundCountry = foundCities[0].country;
            this.setState({
                city: foundCity,
                country: foundCountry
            })
            this.fetchForecast(foundCity,foundCountry);

        }else if(foundCities.length === 0 && searchedCity!==''){
            document.getElementById('errorMsg').classList.remove('d-none');
            document.getElementById('citySearchResult').classList.add('d-none');
        }
    }

    fetchForecast(city,country){     
        this.setState({
            country: country
        })
        document.getElementById('citySearchResult').classList.add('d-none');
        //get forecast from API
        let APIkey = '328a80a9b3cba97fe2f0cdd342ea5b83';
        let URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APIkey}`;
        fetch(URL)
        .then(response => response.json())
        .then(result =>{
            this.setState({
                fromAPI: result,
                cityInfo: result.city,
                forecast: result.list
            })
        })      
    }

    kelvinToCelsius(kelvin){
        return (kelvin -273.15).toFixed();
    }    

    toggleTemp(e,toCel,toFar){
        e.preventDefault();
        let isActive = e.target.classList.value.includes('cursor');
        let newTemp ;
        let temp = document.getElementById('temprature').innerHTML;
        //convert celcius to farenheit
        if(toCel === 'toCel'){
            if(!isActive){return}
            else if(isActive){newTemp = ((Number(temp) - 32) *5/9).toFixed()} 
            e.target.classList.remove('cursor');
            document.getElementById('toFarBtn').classList.add('cursor');
            //convert farenheit to celcius
        }else if(toFar === 'toFar'){
            if(!isActive){return}
            else if(isActive){newTemp = ((Number(temp)* 9/5) + 32).toFixed()}
            e.target.classList.remove('cursor');
            document.getElementById('toCelBtn').classList.add('cursor');
        }
        document.getElementById('temprature').innerHTML = newTemp;
    }
    findTime(longTime){
        if(longTime){
            let time = longTime.substring(11,16);
            return time;}
        else{
            return '';
        }
    }
    findDate(longTime){
        if(longTime){
            let date = longTime.substring(0,10);
            return date;}
        else{
            return '';
        }
    }
    findCurrentDate(){
        let date = new Date();
        var m = (date.getMonth() + 1).toString();
        var d = date.getDate().toString();
        var y = date.getFullYear().toString();
        if(m.length === 1){
            m = '0'+ m
        }
        if(d.length === 1){
            d = '0'+ d
        }
        return y +'-'+ m +'-'+ d;
    }
    render(){
        let forecast = this.state.forecast;
        let humidity = forecast[0].main.humidity;
        let wind = forecast[0].wind.speed;
        let tempKelvin = forecast[0].main.temp;
        let date = forecast[0].dt_txt;
        let description = forecast[0].weather[0].description;
        let iconName = forecast[0].weather[0].icon;
        let cityInfo = this.state.cityInfo;
        let i = -1;
        let time , dayDate , temp_min , temp_max , eachId , dateForCurrent = '';
        let currentDate = this.findCurrentDate();
        return(
                <article id="reactProjectContainer" className="projectWrap d-flex align-items-center">  
                <div className="container">
                    <div className="pb-2">
                    <p className="font-weight-bold">App Description:</p>
                    <p>This app gets data from API. You can search by city name and get weather forecast for 5 days, every 3 hours.</p>
                    </div>             
                    <div className="projectContainer p-5">
                        <h4 className="darkText py-3 text-center"><FaCloudSun className="h2"/> Weather app</h4>
                        <Link onClick={this.goBack}  to="/projects" >
                            <FaAngleDoubleLeft className="dirIcon"/> 
                            <p className="darkText d-inline-block pl-2 font-weight-bold">Back to projects</p>
                        </Link>
                        <p></p>
                        <section className="weatherSearch pb-lg-3 p-sm-2 border-top">
                            <div className="d-flex justify-content-center">
                                <form className="col-md-6 col-sm-12">
                                    <label className="sr-only" htmlFor="searchCity">searchCity</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="cityName" placeholder="Your City Name" onKeyUp={this.updateSearchQuery} onKeyDown={this.handleEnter}/>
                                        <button className="btn submitBtn curveBtn">
                                            <FaSearch onClick={(e)=> this.handleSearch(e)}/>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <section id="citySearchResult" className="citySearchResult pb-3 d-none">
                            {
                                this.state.countryList.map(item=>{
                                return(
                                    <div onClick={()=>this.fetchForecast(this.state.city , item)} className="cursor row col-12 border-bottom border-secondary" key={item}>
                                        <div className="col-10 pl-5">
                                            <p ><span className="font-weight-bold text-success">{this.state.city}, {item} </span></p>
                                        </div>  
                                    </div>
                                )
                            })
                            }     
                        </section>
                        <div id="errorMsg" className="d-none alert alert-warning p-2" role="alert">
                            Not found
                        </div>
                        <section className="weatherWrapper row">
                            <div className="col-sm-12 col-md-6">
                                <h5 className="font-weight-bold">{cityInfo.name}, {cityInfo.country}</h5>
                                <p>
                                <Moment date={date} 
                                    parse="YYYY-MM-DD HH:mm:ss"
                                    format="dddd"/>
                                </p>
                                <p className="text-capitalize">{description}</p>
                                <div className="row p-3">
                                    <div className="col-6 justify-content-top">
                                        <img className="weatherIcon" src={iconSrc + iconName + '.png'} alt="city weather"/>
                                        <span id="temprature" className="d-inline-block pl-2 h1 font-weight-bold"> {this.kelvinToCelsius(tempKelvin)}</span>
                                    </div>
                                    <div className="btn col-6">
                                        <WiCelsius id="toCelBtn" onClick={(e)=>this.toggleTemp(e,'toCel','')} className="h1"/>
                                        <WiFahrenheit id="toFarBtn" onClick={(e)=>this.toggleTemp(e,'','toFar')} className="cursor h1 border-left border-secondary"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <p><span className="font-weight-bold">Humidity: </span>{humidity} %</p>
                                <p><span className="font-weight-bold">Wind: </span>{wind} Km/h</p>
                            </div>
                            <div className="rowForecastContainer card-body row d-flex px-2 pb-3 border-bottom border-secondary ">
                                {forecast.map(item=>{
                                    dateForCurrent = this.findDate(item.dt_txt);
                                    temp_min = this.kelvinToCelsius(item.main.temp_min);
                                    temp_max = this.kelvinToCelsius(item.main.temp_max);
                                        if(dateForCurrent === currentDate){
                                            let hour = this.findTime(item.dt_txt);
                                        return(
                                            <div className="smallForecastContainer px-2">
                                                <p className="forecastTime text-center">{hour}</p>
                                                <img className="" src={iconSrc + item.weather[0].icon + '.png'} alt="city weather"/>
                                                <div className="small d-flex justify-content-between">
                                                    <span className="">{temp_min}&deg;</span>
                                                    <span className="text-secondary">{temp_max}&deg;</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </section>
                        <section className="5dayForecast">
                        <h6 className="pt-3 font-weight-bold">5 day forecast:</h6>
                            {forecast.map(item=>{
                                i++;
                                time = this.findTime(item.dt_txt);
                                dayDate = this.findDate(item.dt_txt);
                                eachId = 'dayForecast' + i;
                                if(time === '00:00'){

                                return (
                                <div className="accordion" id="accordionForecast" key={i}>
                                    <div className="card">
                                        <div className="card-header cursor row py-2" id="headingOne" data-toggle="collapse" data-target={'#'+ eachId} aria-expanded="true" aria-controls={eachId}>
                                        <div className="col-12 col-md-4">
                                            <Moment date={item.dt_txt} 
                                            parse="YYYY-MM-DD HH:mm:ss"
                                            format="dddd"/>
                                            <img className="" src={iconSrc + item.weather[0].icon + '.png'} alt="city weather"/>
                                        </div>
                                        <div className="accRow col-12 col-md-8 text-secondary">
                                            <span className="text-capitalize"><b>sky is: </b>{item.weather[0].description}</span><br/>
                                            <span><b>wind: </b>{item.wind.speed} </span>Km/h <br/>
                                            <span><b>clouds: </b>{item.clouds.all} %</span> 
                                        </div>
                                        </div>
        
                                        <div id={eachId} className="collapse" aria-labelledby="headingOne" data-parent='#accordionForecast'>
                                        <div className="rowForecastContainer card-body row d-flex p-2">
                                        {forecast.map(subItem=>{
                                            date = this.findDate(subItem.dt_txt);
                                            temp_min = this.kelvinToCelsius(subItem.main.temp_min);
                                            temp_max = this.kelvinToCelsius(subItem.main.temp_max);
                                            if(date === dayDate){
                                                let hour = this.findTime(subItem.dt_txt);                                                
                                                return (
                                                    <div className="smallForecastContainer px-2">
                                                        <p className="forecastTime text-center">{hour}</p>
                                                        <img className="" src={iconSrc + subItem.weather[0].icon + '.png'} alt="city weather"/>
                                                        <div className="small d-flex justify-content-between">
                                                            <span className="">{temp_min}&deg;</span>
                                                            <span className="text-secondary">{temp_max}&deg;</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                )
                                }
                            })}

                        </section>
                    </div>
                    </div>
                </article>
        )
    }
}
export default Weather;

