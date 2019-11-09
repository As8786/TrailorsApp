import React from 'react';
import { Route } from 'react-router-dom'

import Home from "./Comp/Home"
import MoviesPage from "./Comp/MoviesPage"

const Routes = () => {
    return <div>
        <Route exact path="/" render={(props) => <Home  {...props} />} />
        <Route exact path="/movies-list" component={MoviesPage} />
    </div>
}

export default Routes