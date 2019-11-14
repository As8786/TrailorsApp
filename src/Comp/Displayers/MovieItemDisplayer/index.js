import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

import { selectMovie } from "../../../Actions/actionsCreator"
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
                    <div className="genre" > {movie.genre.map((el, i) => <span key={i}> {el} </span>)} </div>
                    <div className="info" > <i className="fi-cnsuxl-info-solid"></i>
                    </div>
                    <Link to={`/movie/${movie.name}`}> <button onClick={() => this.props.selectMovie(movie.name)}> Watch Now </button> </Link>
                </div>
            </div>
            <div className="bottom-section">
                <div className="movie-title"> {movie.name} </div>
                <div className="movie-rate"> Rated: {movie.rate} </div>
            </div>
        </div>
    }
}



export default connect(null, { selectMovie })(MovieItem)

