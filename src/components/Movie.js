import React from 'react';

const Movie = (props) => {
    return (
        <div className="col s12 n6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                   {
                    props.image === null ? <img src={"default.jpg"} alt="Movie Poster" style={{ width: "100%", height: 360 }} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Movie Poster" style={{ width: "100%", height: 360 }}/>
                   }
                </div>
                <div className="card-content">
                <span className="grey-text text-lighten-5">  
                    <p>{props.title}</p>  
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </span>
                </div>
            </div>
        </div>
    )
}

export default Movie;