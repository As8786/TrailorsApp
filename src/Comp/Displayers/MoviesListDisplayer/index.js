import React from 'react';
import MovieItem from '../MovieItemDisplayer';

import "./style.css"

const MoviesList = ({ moviesList }) => {
    return <div className="movies-list" id="movies-list">
        {moviesList.length === 0 ? <div className="empty-result"> Sorry, we didnt find any movie with the searched criteria </div> : moviesList.map((el, i) => <MovieItem movie={el} key={i} />)}
    </div>
}

export default MoviesList