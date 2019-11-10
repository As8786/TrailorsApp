import React from 'react';

import MoviesList from '../Displayers/MoviesListDisplayer'
import MoviesContext from "../../context/MoviesContext"

import "./style.css"

class MoviesPage extends React.Component {

    state = {
        openFilter: "",
        genre: "",
        from: "",
        to: "",
        rate: "",
        language: "",
    }


    handleSubFilterValuesDisplay = async (filterName) => {
        // Close All FiltersValues open before
        let { openFilter } = this.state

        if (!openFilter) {
            await this.setState({
                openFilter: filterName
            })

            let filterToActive = document.getElementById(filterName)
            filterToActive.className = "values-active"
        }

        else if (openFilter !== filterName) {
            await this.setState({
                openFilter: filterName
            })
            let filterToClose = document.getElementsByClassName('values-active')[0]
            filterToClose.className = "values"

            let filterToActive = document.getElementById(filterName)
            filterToActive.className = "values-active"
        }
        else if (openFilter === filterName) {
            await this.setState({
                openFilter: ""
            })
            document.getElementById(filterName).className = "values"

        }
    }

    closeFiltersValue = async (val) => {
        console.log(val.target.name)
        if (val.target.name !== "filter-clicked" && this.state.openFilter) {
            await this.setState({
                openFilter: ""
            })
            document.getElementsByClassName('values-active')[0].className = "values"
        }
    }

    handleFilterValue = (selectedFilter, value) => {
        document.getElementById(selectedFilter).className = "values"
        this.setState({
            openFilter: "",
            [selectedFilter]: value
        })
    }

    clearFilterValues = () => {
        this.setState({
            genre: "",
            from: "",
            to: "",
            rate: "",
            language: "",
        })
    }

    render() {
        let { from, to, genre, language, rate } = this.state
        return <div className="movies-list-page-container" onClick={this.closeFiltersValue}>
            <div className='section-title'>
                <i className="fi-ctsuxl-videocamera-thin"></i>
                Movies
        </div>
            <div className="filters-container">
                <div className="filter-item" >
                    <button onClick={() => this.handleSubFilterValuesDisplay("from")} name="filter-clicked"> {!from ? "From" : `From : ${from}`}  <i className="fi-xnsdxl-chevron-solid"></i> </button>
                    <div className="values" id="from" >
                        {yearsTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('from', el)} name="filter-clicked"> {el} </button>)}
                    </div>

                </div>
                <div className="filter-item" >
                    <button onClick={() => this.handleSubFilterValuesDisplay("to")} name="filter-clicked"> {!to ? "To" : `To : ${to}`}   <i className="fi-xnsdxl-chevron-solid"></i> </button>
                    <div className="values" id="to">
                        {yearsTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('to', el)} name="filter-clicked"> {el} </button>)}
                    </div>

                </div>

                <div className="filter-item" >
                    <button onClick={() => this.handleSubFilterValuesDisplay("rate")} name="filter-clicked">  {!rate ? "Minimum Rating" : `Minimum Rating : ${rate}`}  <i className="fi-xnsdxl-chevron-solid"></i> </button>
                    <div className="values" id="rate">
                        {ratesTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('rate', el)} name="filter-clicked"> {el} </button>)}
                    </div>

                </div>
                <div className="filter-item" >
                    <button onClick={() => this.handleSubFilterValuesDisplay("language")} name="filter-clicked">  {!language ? "Language" : `Language : ${language}`} <i className="fi-xnsdxl-chevron-solid"></i></button>
                    <div className="values" id="language">
                        {languagesTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('language', el)} name="filter-clicked"> {el} </button>)}
                    </div>

                </div>
                <div className="filter-item">
                    <button onClick={() => this.handleSubFilterValuesDisplay("genre")} name="filter-clicked"> {!genre ? "Genre" : `Genre : ${genre}`} <i className="fi-xnsdxl-chevron-solid"></i> </button>
                    <div className="values" id="genre">
                        {genresTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('genre', el)} name="filter-clicked"> {el} </button>)}
                    </div>

                </div>
                <button onClick={this.clearFilterValues}> Clear </button>
            </div>
            <MoviesContext.Consumer >
                {val => <MoviesList movies={val} />}
            </MoviesContext.Consumer>
        </div>
    }
}


export default MoviesPage



let yearsTab = [2019, 2018, 2017, 2016, 2015, 2014,2019, 2018, 2017, 2016, 2015, 2014,2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2008,2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987]
let ratesTab = [9, 8, 7, 6, 5, 4, 3, 2, 1]
let languagesTab = ["English", "French", "Russian", "Arabic", "Espagnol"]
let genresTab = ["Action", "Adventure", "Comedy", "Drama", "Thriller"]