import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const MovieInfo = (props) => {
    const genresArr = [];

    //props.genres.map((genre) => {
      //if (genre.name) {
        //genresArr.push(genre.name);
      //}
    //});

    const genre2 = genresArr.slice(0, 2);
    const genreStr = genre2.toString();
    const firstTwo = genreStr.split("");
  
    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop: 50}}>
                <span style={{marginLeft: 10}}><FaArrowLeft />   Go Back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
            {
                props.image === null ? <img src={"default.jpg"} alt="Movie Poster" style={{ width: "100%", height: 360 }} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Movie Poster" style={{ width: "100%", height: 360 }}/>
            }
               </div>
               
               <div className="col s12 m8">
                <div className="card-panel #212121 grey darken-4">
                    <span className="grey-text text-lighten-5">
                    <p>{props.title}</p>
                    <p>{props.overview}</p>
                    <p>{props.release_date}</p>
                    <p>{props.genres}</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MovieInfo;