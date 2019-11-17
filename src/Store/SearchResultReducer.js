import * as actions from "../Actions"
import moviesList from "../data/movies"


const SearchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SEARCH_ITEM_BY_NAME:
            return initialState.filter(el => el.name.toLowerCase()
                .search(clearSearchValue(action.payload)) !== -1)
        case actions.SEARCH_ITEM_BY_STAR:
            return initialState.filter(el => el.stars.indexOf(action.payload) !== -1 || el.director === action.payload)
        default:
            return state
    }
}

const clearSearchValue = searchedValue => {
    let searchedValueArray = searchedValue.toLowerCase().split(' ')
    searchedValueArray = searchedValueArray.filter(el => el !== "")
    searchedValue = searchedValueArray.join(' ')
    return searchedValue
}


export default SearchResultReducer

let initialState = moviesList