import React from 'react';
import Series from './Series';

const SeriesList = (props) => {
    return (
    <div className="container">
        <div className="row">
            <div className="col s12">
                {
                    props.tv.map((show, i) => {
                      return (
                          <Series key={i}  showId={show.id} image={show.poster_path} title={show.name} ep={show.number_of_episodes} seasons={show.number_of_seasons} />
                      )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SeriesList;