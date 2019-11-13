import { combineReducers, createStore } from 'redux'

import MoviesReducer from "./MoviesReducer"
import PaginationReducer from "./PaginationReducer"

let reducers = combineReducers({ MoviesReducer, PaginationReducer })

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store