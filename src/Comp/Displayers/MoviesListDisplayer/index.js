import React from 'react';
import MovieItem from '../MovieItemDisplayer';

import "./style.css"

const MoviesList = ({ movies }) => {
    return <div className="movies-list">
        {movies.map((el, i) => <MovieItem movie={el} key={i} />)}
    </div>
}

export default MoviesList