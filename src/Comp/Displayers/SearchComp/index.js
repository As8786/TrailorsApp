import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.css'
import { activateSearchSuggestion, disableSearchSuggestion, selectMovie, onSearchClick } from "../../../Actions/actionsCreator"

const SuggestionDiv = ({ movie, disableSearchSuggestion, clearState, selectMovie }) => {
    return <Link to={`/movie/${movie.name}`} onClick={() => {
        clearState()
        disableSearchSuggestion()
        selectMovie(movie.name)
    }}><div className="search-preselection-item">
            <div className="search-preselection-img">
                <img src={movie.img} />
            </div>
            <div className="search-preselection-infos">
                <div className="name"> {movie.name} </div>
                <div className="year">  {movie.year} </div>
                <div className="rate"> Rated : <i class="fi-xwluxl-star-solid"></i> {movie.rate} </div>
                <div className="stars">Genre : {movie.genre.map((el, i) => <span key={i}> {el}</span>)}</div>
            </div>
        </div>
    </Link>
}

const handleSuggestionSearchresultDisplay = (serachedVal, searchSuggestionResult, disableSearchSuggestion, clearState, selectMovie) => {
    if (serachedVal.trim().length > 1 && searchSuggestionResult.length > 0) {
        return searchSuggestionResult.map((el, i) => <SuggestionDiv movie={el} key={i} selectMovie={selectMovie} clearState={clearState} disableSearchSuggestion={disableSearchSuggestion} />)
    } else if (serachedVal.trim() !== "" && searchSuggestionResult.length === 0) {
        return <div className="empty-result-div"> No Result </div>
    }
}

const SearchComp = ({ searchSuggestionResult, activateSearchSuggestion, disableSearchSuggestion, selectMovie, onSearchClick }) => {
    let [searchValue, setSearchValue] = useState('')

    const clearState = () => setSearchValue('')

    return <div className="search" id="search">
        <input placeholder='Search...' onChange={(e) => {
            setSearchValue(e.target.value)
            activateSearchSuggestion(e.target.value)
        }} value={searchValue} />
        <Link to={`/search/${searchValue}`}> <i class="fi-xnsuhl-search" onClick={() => {
            setSearchValue('')
            onSearchClick(searchValue)
        }}></i> </Link>
        <Link to={`/search/${searchValue}`}> <button onClick={() => {
            setSearchValue('')
            onSearchClick(searchValue)
        }} > Search </button> </Link>
        <div className="search-preselection">
            {handleSuggestionSearchresultDisplay(searchValue, searchSuggestionResult, disableSearchSuggestion, clearState, selectMovie)}
        </div>
    </div >
}

const mapStateToProps = state => {
    return {
        searchSuggestionResult: state.SearchSuggesttionReducer
    }
}

export default connect(mapStateToProps, { activateSearchSuggestion, disableSearchSuggestion, selectMovie, onSearchClick })(SearchComp)
