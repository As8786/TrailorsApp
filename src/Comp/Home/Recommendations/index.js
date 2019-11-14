import React from 'react';

import MoviesList from '../../Displayers/MoviesListDisplayer'
import MoviesContext from "../../../context/MoviesContext"
import "./style.css"

const Recommendations = () => {
    return <div className="recommendations-container">
        <div className='section-title'>
            <i className="fi-xnslxl-star-solid"></i>
            Recommendations
                </div>
        <MoviesContext.Consumer >
            {val => <MoviesList moviesList={val} />}
        </MoviesContext.Consumer>
    </div>
}

export default Recommendations