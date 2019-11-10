import React from 'react';
import { Route } from 'react-router-dom'

import Home from "./Comp/Home"
import MoviesPage from "./Comp/MoviesPage"
import Carrousel from './Comp/Displayers/Carrousel';

const Routes = () => {
    return <div className="routes-container">
        <Route exact path="/" render={(props) => <Home  {...props} />} />
        <Route exact path="/movies-list" component={MoviesPage} />
        <Route exact path="/carrousel" component={Carrousel} />
    </div>
}

export default Routes