import React , { Component } from 'react';
import { FaAngleDoubleLeft , FaFilm} from 'react-icons/fa';
import MovieForm from './MovieForm';
import MovieSingle from './MovieSingle';
import Pag from './pag';
import { Link } from '@reach/router';

/*
url to get credits: 
`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${key}`
url to get details:
`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`
url for details and cast:
`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US&append_to_response=credits`
*/
var key = "2d6a164a44aa91c01724f7aa944b39bf";
class Movie extends Component{
    constructor(){
        super();
        this.state={
            movie:[],
            sort:'vote_average.desc',
            year: 2019 ,
            genres:[],
            pageNo: 1
        }  
        this.handleSort = this.handleSort.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount(){
       var url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=${this.state.sort}&include_adult=false&include_video=false&page=1&primary_release_year=${this.state.year}&with_genres=${this.state.genres}&page=1`
        fetch(url)
        .then(response=> response.json())
        .then(result => {
            this.setState({
                movie: result.results
            })
        })
    }   

    handleSort(year,order,genre){
        var url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=${order}&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_genres=${genre}&page=1`
       fetch(url)
        .then(response=> response.json())
        .then(result => {
            this.setState({
                movie: result.results,
                year: year,
                sort: order,
                genres: genre,
                pageNo: 1
            })
        })        
    }
    
    changePage(numPage){
        var url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=${this.state.sort}&include_adult=false&include_video=false&page=1&primary_release_year=${this.state.year}&with_genres=${this.state.genres}&page=${numPage}`
        fetch(url)
        .then(response=> response.json())
        .then(result => {
            this.setState({
                pageNo: numPage,
                movie: result.results
            })
        })
    }

    render(){
        let movieList = this.state.movie;
        
        return(
            <article id="reactProjectContainer" className="projectWrap d-flex align-items-center">  
                
                <div className="container">   
                <div className="pb-2">
                <p className="font-weight-bold">App Description:</p>
                <p>This app get data from API. You can search and sort movies by year, popularity, genre...<br/>
                By clicking on movie card you will get details and cast for the movie. </p>
                </div>  

                    <div className="projectContainer p-5">
                        <h4 className="darkText py-3 text-center"><FaFilm className="h1"/> Discover New <a href="#" style={{color:'#00d573'}}>Movies</a> & <a href="#" style={{color:'orange'}}>TV Shows</a>
                        </h4>
                        <Link to="/projects" >
                            <FaAngleDoubleLeft className="dirIcon"/> 
                            <p className="darkText d-inline-block pl-2 font-weight-bold">Back to projects</p>
                        </Link>   
                        
                        <section className="py-3 border-top">
                        <div className="mainPage">
                            <MovieForm handleSort={this.handleSort} 
                            year={this.state.year} sort={this.state.sort} 
                            genre={this.state.genres}/>
                                <div className="movieListPage">
                                    {movieList.map(item=> {
                                        return <MovieSingle  movie={item} key={item.id}/>
                                    })}              
                                </div>
                            <Pag pageNumber={this.changePage} pageNo={this.state.pageNo}/>
                        </div>
                        </section>
                    </div>
                </div>
            </article>
        )
    }
}
export default Movie