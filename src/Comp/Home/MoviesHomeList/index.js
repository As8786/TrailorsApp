import React from 'react';
import { Link } from "react-router-dom"

import MoviesList from '../../Displayers/MoviesListDisplayer'
import MoviesContext from "../../../context/MoviesContext"
import "./style.css"

const MoviesHomeList = () => {
    return <div className="moviesHomeList-container">
        <div className='section-title'>
            <Link to="/movies-list">
                <i className="fi-ctsuxl-videocamera-thin"></i>
                Movies
            </Link>
        </div>
        <MoviesContext.Consumer >
            {val => <MoviesList moviesList={val} />}
        </MoviesContext.Consumer>
    </div>
}

export default MoviesHomeList