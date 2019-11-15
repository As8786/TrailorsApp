import React from 'react';
import { connect } from 'react-redux';


const PaginationHanlder = (ChildComp) => {
    class PaginationHOC extends React.Component {
        render() {
            let { moviesReducer, actualPage, searchResult } = this.props
            return <ChildComp  {...this.props}
                moviesList={ChildComp.name === "SearchResultDisplay" ?
                    searchResult.moviesList.filter((el, i) => i < (24 * actualPage) && i >= (24 * actualPage) - 24)
                    : moviesReducer.moviesList.filter((el, i) => i < (24 * actualPage) && i >= (24 * actualPage) - 24)}

                collectionLength={ChildComp.name === "SearchResultDisplay" ? searchResult.moviesList.length : moviesReducer.collectionLength}
                actualPage={actualPage}
            />
        }
    }

    const mapStateToProps = state => {
        return {
            moviesReducer: state.MoviesReducer,
            searchResult: state.SearchResultReducer,
            actualPage: state.PaginationReducer
        }
    }


    return connect(mapStateToProps, null)(PaginationHOC)
}


export default PaginationHanlder