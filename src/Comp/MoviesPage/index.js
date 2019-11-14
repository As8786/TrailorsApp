import React from 'react';
import { connect } from 'react-redux'

import PaginationHanlder from "../../Hoc/paginationResultHandler"
import MoviesList from '../Displayers/MoviesListDisplayer'
import "./style.css"
import Pagination from '../Displayers/Pagination';
import Filters from '../Displayers/Filters';
import { Collection } from 'mongoose';

class MoviesPage extends React.Component {

    render() {
        let { moviesList, actualPage, collectionLength } = this.props

        return <div className="movies-list-page-container" >
            <div className='section-title'>
                <i className="fi-ctsuxl-videocamera-thin"></i>
                Movies
            </div>
            <Filters />
            <Pagination collectionLength={collectionLength} currentPage={actualPage} />
            <MoviesList moviesList={moviesList} />
            <div className="padding" />

        </div>
    }
}



export default PaginationHanlder(MoviesPage)



