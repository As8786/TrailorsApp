import * as actions from "../Actions"
import moviesList from "../data/movies"

const SelectedMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_MOVIE:
            return moviesList.filter(el => el.name === action.payload)[0]
        default:
            return state
    }
}


export default SelectedMovieReducer

let initialState = {
    name: "",
    director: "",
    description: "",
    genre: [],
    year: "",
    rate: "",
    stars: []
}
