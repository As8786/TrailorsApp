import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import './style.css'
import SearchComp from '../SearchComp';
import { clearFilters, handlePagination } from "../../../Actions/actionsCreator"

class NavBar extends React.Component {

    handleBurgerMenuDisplay = () => {
        let responsiveMenu = document.getElementById('ul-menu')
        let searchElement = document.getElementById('search')

        if (responsiveMenu.className === "ul-disabled") {
            responsiveMenu.className = "ul-active"
            searchElement.className = "search-disabled"
        } else {
            responsiveMenu.className = "ul-disabled"
            searchElement.className = "search"
        }
    }

    render() {
        return <div className="navbar-container">
            <div className="left-side">
                <div className="logo-container">
                    <div className="logo">
                        <Link to="/">
                            <img src="./img/movie.png" />
                        </Link>
                    </div>
                    <Link to="/">
                        <div className="title" title='Home'>
                            Trailers App
                    </div>
                    </Link>
                </div>
                <div className="links" >
                    <Link title='Movie' to="/movies-list" onClick={() => {
                        this.props.clearFilters()
                        this.props.handlePagination(1)
                    }}>
                        Movie
                    </Link>
                    <Link to='/tvshows-list' title='TV Shows'>
                        TV Shows
                    </Link>
                    <div className="my-account-container" title='My Account'>
                        My Account
                        <div>
                            <Link> Log In </Link>
                            <Link> My favourites </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="responsive-menu" onClick={this.handleBurgerMenuDisplay}>
                <i className="fi-xnsuxl-three-bars-solid"></i>
                <ul id="ul-menu" className="ul-disabled">
                    <Link title='Home' to='/'>
                        Home Page
                </Link>
                    <Link title='Movie' to="/movies-list" onClick={() => {
                        this.props.clearFilters()
                        this.props.handlePagination(1)
                    }}>
                        Movie
                </Link>
                    <Link title='TV Shows' to='/tvshows-list'>
                        TV Shows
                </Link>
                    <div className="my-account-container-resp" title='My Account'>
                        My Account
                        <div>
                            <Link> Log In </Link>
                            <Link> My favourites </Link>
                        </div>
                    </div>
                </ul>
            </div>
            <SearchComp />

        </div>
    }
}

export default connect(null, { clearFilters, handlePagination })(NavBar)