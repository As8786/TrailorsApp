import React from 'react';
import { connect } from 'react-redux'
import { compose } from "redux"

import PaginationHanlder from "../../Hoc/paginationResultHandler"
import MoviesList from '../Displayers/MoviesListDisplayer'
import "./style.css"
import Pagination from '../Displayers/Pagination';
import { onNavBarSearchClickAction, onStarSearchLickClickAction } from "../../Actions/actionsCreator"

class SearchResultDisplay extends React.Component {
    componentDidMount() {
        if (this.props.location.pathname.indexOf('/star') !== -1) {
            this.props.onStarSearchLickClickAction(this.props.searchValue)
        }
        else this.props.onNavBarSearchClickAction(this.props.searchValue)
    }

    applyOpacity = () => {
        let routesContainerDiv = document.getElementById('movies-list')
        routesContainerDiv.className = "movies-list-transition"
        setTimeout(() => routesContainerDiv.className = "movies-list", 250)
    }

    render() {
        let { moviesList, actualPage, collectionLength, searchValue } = this.props

        return <div className="search-result-page-container" >
            <div className='section-title'>
                Search result for : {searchValue}
            </div>
            {collectionLength !== 0 && <Pagination collectionLength={collectionLength} currentPage={actualPage} applyOpacity={() => this.applyOpacity()} />}
            <MoviesList moviesList={moviesList} />
            <div className="padding" />

        </div>
    }
}



export default compose(connect(null, { onNavBarSearchClickAction, onStarSearchLickClickAction }), PaginationHanlder)(SearchResultDisplay)



