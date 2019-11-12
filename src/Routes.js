import React from 'react';
import { Route } from 'react-router-dom'

import Home from "./Comp/Home"
import MoviesPage from "./Comp/MoviesPage"
import Carrousel from './Comp/Displayers/Carrousel';
import SelectedMovie from './Comp/SelectedMovie';

const Routes = () => {
    return <div className="routes-container">
        <Route exact path="/" render={(props) => <Home  {...props} />} />
        <Route exact path="/movies-list" component={MoviesPage} />
        <Route exact path="/carrousel" component={Carrousel} />
        <Route exact path="/movie/:name" render={(props) => <SelectedMovie name={props.match.params.name} />} />
    </div>
}

export default Routes