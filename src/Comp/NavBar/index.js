import React from 'react';
import { Link } from "react-router-dom"
import './style.css'

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
                            <i className="fi-xnsuxl-videocamera-solid" title='Home' ></i>
                        </Link>
                    </div>
                    <Link to="/">
                        <div className="title" title='Home'>
                            Trailers App
                    </div>
                    </Link>
                </div>
                <div className="links" >
                    <Link title='Movie' to="/movies-list">
                        Movie
                    </Link>
                    <Link title='TV Shows'>
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

                    <Link title='Movie' to="/movies-list">
                        Movie
                </Link>
                    <Link title='TV Shows'>
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
            <div className="search" id="search">
                <input placeholder='Search...' />
                <button> Search </button>
            </div>

        </div>
    }
}

export default NavBar