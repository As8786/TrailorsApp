import React from 'react';
import { connect } from 'react-redux'
import { compose } from "redux"

import PaginationHanlder from "../../Hoc/paginationResultHandler"
import MoviesList from '../Displayers/MoviesListDisplayer'
import "./style.css"
import Pagination from '../Displayers/Pagination';
import { onSearchClick } from "../../Actions/actionsCreator"

class SearchResultDisplay extends React.Component {
    componentDidMount() {
        this.props.onSearchClick(this.props.searchValue)
    }

    render() {
        let { moviesList, actualPage, collectionLength, searchValue } = this.props

        return <div className="search-result-page-container" >
            <div className='section-title'>
                Search result for : {searchValue}
            </div>
            {collectionLength !== 0 && <Pagination collectionLength={collectionLength} currentPage={actualPage} />}
            <MoviesList moviesList={moviesList} />
            <div className="padding" />

        </div>
    }
}



export default compose(connect(null, { onSearchClick }), PaginationHanlder)(SearchResultDisplay)



