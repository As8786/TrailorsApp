import React from 'react';
import { Route } from 'react-router-dom'

import Home from "./Comp/Home"
import MoviesPage from "./Comp/MoviesPage"
import Carrousel from './Comp/Displayers/Carrousel';
import SelectedMovie from './Comp/SelectedMovie';
import SearchResultComp from "./Comp/SearchResultComp"

const Routes = () => {
    return <div className="routes-container" id='routes-container'>
        <Route exact path="/" render={(props) => <Home  {...props} />} />
        <Route exact path="/movies-list" render={(props) => <MoviesPage {...props} />} />
        <Route exact path="/tvshows-list" component={MoviesPage} />
        <Route exact path="/search/:searchValue" render={(props) => <SearchResultComp searchValue={props.match.params.searchValue} {...props} />} />
        <Route exact path="/search/star/:searchValue" render={(props) => <SearchResultComp searchValue={props.match.params.searchValue} {...props} />} />
        <Route exact path="/movie/:name" render={(props) => <SelectedMovie name={props.match.params.name} />} />
    </div>
}

export default Routes