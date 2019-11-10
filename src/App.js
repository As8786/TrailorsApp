import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavBar from './Comp/NavBar'
import Footer from "./Comp/Footer"
import Routes from "./Routes"
import MoviesContext from "./context/MoviesContext"

import moviesList from "./data/movies"

import "./app.css"

const App = () => {
    const [movies, setMovies] = useState(moviesList)


    return <BrowserRouter>
        <div className="app">
            <NavBar />
            <MoviesContext.Provider value={moviesList} >
                <Routes />
            </MoviesContext.Provider>
            <div className="padding" />
            <Footer />
        </div>
    </BrowserRouter>
}







export default App