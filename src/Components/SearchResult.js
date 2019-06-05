import React , { Component } from 'react';
import { Link } from '@reach/router';
let fix_bg ='http://image.tmdb.org/t/p/original/';

class SearchResult extends Component{
    constructor(){
        super();
        this.state={
            
        }        
    }   
     
    render(){
        let id = this.props.movie.id;
        let title = this.props.movie.title;
        let poster = this.props.movie.poster_path;
        let date = this.props.movie.release_date;
        return(
            <Link to={`/MovieDetail/${id}`} key={id}>  
            <li>
                <div className="resultRow">
                    <img src={(poster)? fix_bg + poster : 'https://via.placeholder.com/010e47'} />
                    <span>
                        <h6><b>{title}</b></h6>
                        <p>{date}</p>
                    </span>
                </div>
            </li>
            </Link>
        )
    }
}
export default SearchResult