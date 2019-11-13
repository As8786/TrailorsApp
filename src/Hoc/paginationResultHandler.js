import React from 'react';
import { connect } from 'react-redux';


const PaginationHanlder = (ChildComp) => {
    class PaginationHOC extends React.Component {
        render() {
            return <ChildComp  {...this.props}
                moviesList={this.props.moviesReducer.moviesList.filter((el, i) => i < (24 * this.props.actualPage) && i >= (24 * this.props.actualPage) - 24)}
                collectionLength={this.props.moviesReducer.collectionLength}
                actualPage={this.props.actualPage}
            />
        }
    }

    const mapStateToProps = state => {
        return {
            moviesReducer: state.MoviesReducer,
            actualPage: state.PaginationReducer
        }
    }


    return connect(mapStateToProps, null)(PaginationHOC)
}


export default PaginationHanlder