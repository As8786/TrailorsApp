import * as actions from "../Actions"
import moviesList from "../data/movies"

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_FILTER:
            state = initialState
            if (action.payload.genre) {
                state = state.filter(el => el.genre.indexOf(action.payload.genre) !== -1)
            }
            if (action.payload.from) {
                state = state.filter(el => el.year >= action.payload.from)
            }
            if (action.payload.to) {
                state = state.filter(el => el.year <= action.payload.to)
            }
            if (action.payload.rate) {
                state = state.filter(el => el.rate >= action.payload.rate)
            }
            if (action.payload.language) {
                state = state.filter(el => el.language.indexOf(action.payload.language) !== -1)
            }
            return state

        case actions.CLEAR_FILTER:
            return initialState
        default:
            return initialState
    }
}


export default MoviesReducer

let initialState = moviesList