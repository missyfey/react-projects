import React , { Component } from 'react';
import Moment from 'react-moment';
import { Link } from '@reach/router';
import { FaArrowLeft } from "react-icons/fa";

const fix_bg = 'http://image.tmdb.org/t/p/original/';

class MovieDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            movie:{
                credits:{
                cast:[],
                crew:[]},
            genres:[]
        }            
    }
    }

    componentDidMount(){
        console.log(this.props);
        var key = "2d6a164a44aa91c01724f7aa944b39bf"
        var id = window.location.pathname.substring(13,19)
        var url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`
        fetch(url)
        .then(response => {
            if (response.status !== 200) {
              console.log('Error: ' + response.status)
              return
            }    
            response.json().then(data => {
              const movie = data
              this.setState({ movie })
            })    
          })
          .catch(err => {
            console.log('Fetch Error :-S', err)
          }) 
    }    
    render(){
        let bgPhoto = this.state.movie.backdrop_path;
        let poster = this.state.movie.poster_path;
        let date = this.state.movie.release_date;
        let overview = this.state.movie.overview;
        let rating = this.state.movie.vote_average * 10 + '%';
        let crew = this.state.movie.credits.crew;
        let cast = this.state.movie.credits.cast;
        let counter = 0;
        let counter1 = 0;
        let myTest = this.props.movieState;
        console.log(myTest);
        return(
            <article id="reactProjectContainer" className="projectWrap d-flex align-items-center">  
                <div className="container">              
                    <div className="projectContainer p-5">
                        <section>
                        <div className="movieDetail" style={{backgroundImage:"url("+fix_bg + bgPhoto+")"}}>
                <div className="single-movie-bg">
                    <div className="row">
                        <div className="col-4 backLink">
                            <Link to="/movie">
                                <FaArrowLeft className="linkText"/> Main page
                            </Link>
                            <img className="poster" src={poster ? fix_bg+poster : 'https://via.placeholder.com/300x400/010e47'} />
                        </div>
                        <div className="col-8">
                        <span>
                            <span className="detailTitle">{this.state.movie.title}</span>
                            <span className="detailDate"> ( <Moment date={date} format={'YYYY'} /> )</span>                            
                        </span>
                        <div className="progress barDetail" style={{width:"50%"}}>
                            <span className="progress-bar" role="progressbar" style={{width: rating}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{rating}</span>
                         </div>
                         <div className="overviewDetail col-11">
                         <h4>Overview</h4>
                         <p>{overview}</p>  
                         
                         <h4>Featured Crew</h4>                       
                         <div className="crew">                         
                         {crew.map(item=>{
                                counter++;
                                if(counter<10)
                                return(
                                    <div className="crewMember col-4" key={item.id}>                            
                                        <h6>{item.name}</h6>
                                        <p>{item.job}</p>
                                    </div>
                                )
                            })}                  
                         </div>
                         </div>
                        </div>
                    </div>
                </div>
                </div>   
            <h4 className="cast">Top Billed Cast</h4>         
                    <div className="mainpage castContainer">
                        {cast.map(item=>{
                            counter1++;
                            if(counter1<6)
                            return(
                                <div className="col-2 castMember" key={item.id}>
                                    <img className="castImage" src={(item.profile_path != null )? fix_bg+ item.profile_path: 'https://via.placeholder.com/150x225/010e47'} />
                                    <h6 className='p-2 font-weight-bold'>{item.name}</h6>
                                    <p className='px-2'>{item.character}</p>
                                </div>
                            )
                        })}
                    </div>
                    </section>
                    </div>
                </div>
            </article>


        )
    }
}

export default MovieDetail