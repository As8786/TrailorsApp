import React from 'react';

import Recommendations from "./Recommendations"
import MoviesHomeList from "./MoviesHomeList"
import TvShowHomeList from "./TvShowHomeList"
import Carrousel from "../Displayers/Carrousel"
import ScrollBtn from "../Displayers/ScrollButton"
import "./style.css"


const Home = (props) => {

    return <div className="home-container">
        <Carrousel />
        <div className="section-intro"><p> Watch the Latest Movies and TV Shows Trailers for Free with No registration! </p>
        </div>
        <Recommendations />
        <div className="section-intro"> New Movies and Episodes Trailers added every Hour.</div>
        <MoviesHomeList />
        <div className="section-intro"> No Advertisements, No Interruptions, just Trailers. </div>
        <TvShowHomeList />
        <ScrollBtn />
        <div className="padding" />
    </div>
}

export default Home