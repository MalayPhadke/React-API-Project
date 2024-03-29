import React from 'react';

const Series = (props) => {
    return (
        <div className="col s12 n6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                   {
                    props.image === null ? <img src={"default.jpg"} alt="Show Poster" style={{ width: "100%", height: 360 }} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Show Poster" style={{ width: "100%", height: 360 }}/>
                   }
                </div>
                <div className="card-content">
                <p><a href="#">Show Details</a></p>
                <p>{props.title}</p>
                <p>Episodes: {props.ep}</p>
                 <p>Seasons: {props.seasons}</p>
                </div>
            </div>
        </div>
    )
}

export default Series;