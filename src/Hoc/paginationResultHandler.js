import React from 'react';
import { connect } from 'react-redux';


const PaginationHanlder = (ChildComp) => {
    class PaginationHOC extends React.Component {
        render() {
            let { moviesReducer, actualPage, searchResult } = this.props
            let tvShowsList = moviesReducer.filter(el => el.type === "tvshows")
            let moviesList = moviesReducer.filter(el => el.type !== "tvshows")
            let pathName = this.props.location.pathname

            return <ChildComp  {...this.props}
                moviesList={ChildComp.name === "SearchResultDisplay" ?
                    searchResult.filter((el, i) => i < (24 * actualPage) && i >= (24 * actualPage) - 24)
                    : pathName === "/tvshows-list" ?
                        tvShowsList.filter((el, i) => i < (24 * actualPage) && i >= (24 * actualPage) - 24)
                        : moviesList.filter((el, i) => i < (24 * actualPage) && i >= (24 * actualPage) - 24)
                }

                collectionLength={ChildComp.name === "SearchResultDisplay" ? searchResult.length :
                    pathName !== "/tvshows-list" ? moviesList.length : tvShowsList.length
                }
                actualPage={actualPage}
                pathName={pathName}
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