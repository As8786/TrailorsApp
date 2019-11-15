import * as actions from "../Actions"
import moviesList from "../data/movies"

const SearchSuggesttionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SEARCH_SUGGESTION_ACTIVATED:
            return moviesList.filter(el => el.name.toLowerCase()
                .search(clearSearchValue(action.payload)) !== -1).slice(0, 3)
        case actions.SEARCH_SUGGESTION_DISABLED:
            return initialState
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


export default SearchSuggesttionReducer

const initialState = []
