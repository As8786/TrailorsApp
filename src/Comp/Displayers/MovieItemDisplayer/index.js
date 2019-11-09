import React from 'react';

import './style.css'


class MovieItem extends React.Component {


    render() {
        let { movie } = this.props
        return <div className="movie-card">
            <div className="img-container">
                <img src={movie.img} />
                <div className="shadow" />
                <div className="movie-info">
                    <div className="movie-title">  {movie.name} </div>
                    <div className="year"> {movie.year} </div>
                    <div className="genre" > {movie.genre} </div>
                    <div className="info" > <i className="fi-cnsuxl-info-solid"></i>
                    </div>
                    <button> Watch Now </button>

                </div>
            </div>
            <div className="bottom-section">
                <div className="movie-title"> {movie.name} </div>
                <div className="rate"> Rated: {movie.rate}  / 10</div>
            </div>
        </div>
    }
}

export default MovieItem

