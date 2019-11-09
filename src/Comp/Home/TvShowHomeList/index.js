import React from 'react';

import MoviesList from '../../Displayers/MoviesListDisplayer'
import MoviesContext from "../../../context/MoviesContext"
import "./style.css"

const TvShowHomeList = () => {
    return <div className="tvShowHomeList-container">
        <div className='section-title'> <i className="fi-ctsuxl-videocamera-thin"></i> TV Shows </div>
        <MoviesContext.Consumer >
            {val => <MoviesList movies={val} />}
        </MoviesContext.Consumer>
    </div>
}

export default TvShowHomeList