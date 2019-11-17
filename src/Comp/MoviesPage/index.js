import React from 'react';
import { connect } from 'react-redux'

import PaginationHanlder from "../../Hoc/paginationResultHandler"
import MoviesList from '../Displayers/MoviesListDisplayer'
import "./style.css"
import Pagination from '../Displayers/Pagination';
import Filters from '../Displayers/Filters';

class MoviesPage extends React.Component {

    applyOpacity = () => {
        let routesContainerDiv = document.getElementById('movies-list')
        routesContainerDiv.className = "movies-list-transition"
        setTimeout(() => routesContainerDiv.className = "movies-list", 250)
    }

    render() {
        let { moviesList, actualPage, collectionLength, pathName } = this.props

        return <div className="movies-list-page-container" >
            {pathName === "/tvshows-list" ? <div className='section-title'>
                <i className="fi-ctsuxl-videocamera-thin"></i>
                TV Shows
            </div>
                : <div className='section-title'>
                    <i className="fi-ctsuxl-videocamera-thin"></i>
                    Movies
            </div>}
            <Filters />
            <Pagination collectionLength={collectionLength} currentPage={actualPage} applyOpacity={() => this.applyOpacity()} />
            <MoviesList moviesList={moviesList} />
            <div className="padding" />

        </div>
    }
}



export default PaginationHanlder(MoviesPage)



