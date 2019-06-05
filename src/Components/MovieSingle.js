import React from 'react';
import { Link } from '@reach/router';

const fix_bg = 'http://image.tmdb.org/t/p/original/';

const MovieSingle = ({movie}) =>{
    let img = movie.poster_path;
    let rating = movie.vote_average * 10 + '%';
    let id = movie.id;    

    return(
        <div className="col-lg-6 col-md-12 movieCard"> 
            <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row no-gutters allInfo">
                <div className="col-4">
                <Link to={`/MovieDetail/${id}`} key={id}>
                    <img src={(img !== null) ? fix_bg + img : 'https://via.placeholder.com/250x350/010e47'} className="card-img" alt="..." />
                </Link>
                </div>
                <div className="card-body col-8">
                    <div className="">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-date">{movie.release_date}</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: rating}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{rating}</div>
                    </div>
                    </div> 
                    <div className="overview">
                        <p className="card-text no-selectable">{movie.overview}</p>
                    </div>
                    <div className="moreInfo">
                        <Link to={`/MovieDetail/${id}`} key={id} className="card-text" ><small className="text-muted">More info</small></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default MovieSingle



  