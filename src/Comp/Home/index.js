import React from 'react';

import Recommendations from "./Recommendations"
import MoviesHomeList from "./MoviesHomeList"
import TvShowHomeList from "./TvShowHomeList"
import "./style.css"


const Home = (props) => {
    console.log(props)
    return <div className="home-container">
        <div className="title"><p> Watch the Latest Movies and TV Shows Trailers for Free with No registration! </p>
        </div>
        <Recommendations />
        <div className="title"> New Movies and Episodes Trailers added every Hour.</div>
        <MoviesHomeList />
        <div className="title"> No Advertisements, No Interruptions, just Trailers. </div>
        <TvShowHomeList />
    </div>
}

export default Home