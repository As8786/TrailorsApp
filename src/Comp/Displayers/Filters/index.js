import React from 'react';
import { connect } from 'react-redux'

import { addFilter, clearFilters } from "../../../Actions/actionsCreator"
import "./style.css"


class Filters extends React.Component {

    state = {
        openFilter: "",
        filters: {
            genre: "",
            from: "",
            to: "",
            rate: "",
            language: "",
        }
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
            filters: { ...this.state.filters, [selectedFilter]: value }
        }, () => {
            this.props.addFilter(this.state.filters)
        })
    }

    clearFilterValues = () => {
        this.setState({
            filters: {
                genre: "",
                from: "",
                to: "",
                rate: "",
                language: "",
            }
        })
        this.props.clearFilters()
    }


    render() {
        window.onclick = ((e) => this.closeFiltersValue(e))
        let { from, to, genre, language, rate } = this.state.filters
        return <div className="filters-container">
            <div className="filter-item" >
                <button onClick={() => this.handleSubFilterValuesDisplay("from")} name="filter-clicked"> {!from ? "From" : `From : ${from}`}   </button>
                <div className="values" id="from" >
                    {yearsTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('from', el)} name="filter-clicked"> {el} </button>)}
                </div>

            </div>
            <div className="filter-item" >
                <button onClick={() => this.handleSubFilterValuesDisplay("to")} name="filter-clicked"> {!to ? "To" : `To : ${to}`}    </button>
                <div className="values" id="to">
                    {yearsTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('to', el)} name="filter-clicked"> {el} </button>)}
                </div>

            </div>

            <div className="filter-item" >
                <button onClick={() => this.handleSubFilterValuesDisplay("rate")} name="filter-clicked">  {!rate ? "Minimum Rating" : `Minimum Rating : ${rate}`}   </button>
                <div className="values" id="rate">
                    {ratesTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('rate', el)} name="filter-clicked"> {el} </button>)}
                </div>

            </div>
            <div className="filter-item" >
                <button onClick={() => this.handleSubFilterValuesDisplay("language")} name="filter-clicked">  {!language ? "Language" : `Language : ${language}`} </button>
                <div className="values" id="language">
                    {languagesTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('language', el)} name="filter-clicked"> {el} </button>)}
                </div>

            </div>
            <div className="filter-item">
                <button onClick={() => this.handleSubFilterValuesDisplay("genre")} name="filter-clicked"> {!genre ? "Genre" : `Genre : ${genre}`}  </button>
                <div className="values" id="genre">
                    {genresTab.map((el, i) => <button value={el} key={i} onClick={() => this.handleFilterValue('genre', el)} name="filter-clicked"> {el} </button>)}
                </div>

            </div>
            <button onClick={this.clearFilterValues}> Clear </button>
        </div>
    }
}

export default connect(null, { addFilter, clearFilters })(Filters)


let yearsTab = [2019, 2018, 2017, 2016, 2015, 2014, 2019, 2017, 2016, 2015, 2014, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 200, 2008, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987]
let ratesTab = [9, 8, 7, 6, 5, 4, 3, 2, 1]
let languagesTab = ["English", "French", "Russian", "Arabic", "Espagnol"]
let genresTab = ["Action", "Adventure", "Comedy", "Drama", "Thriller"]