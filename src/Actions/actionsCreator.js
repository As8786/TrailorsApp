import * as actions from "./index"

export const addFilter = filters => {
    let keys = Object.keys(filters)
    let allowedFilters = {}

    keys.map(el => filters[el] !== "" ? allowedFilters[el] = filters[el] : "")
    return {
        type: actions.SET_FILTER,
        payload: allowedFilters
    }
}

export const clearFilters = () => {
    return {
        type: actions.CLEAR_FILTER
    }
}

export const handlePagination = pageNumber => {
    return {
        type: actions.SET_PAGINATION,
        payload: pageNumber
    }
}

export const selectMovie = movie => {
    return {
        type: actions.SELECT_MOVIE,
        payload: movie
    }
}

export const activateSearchSuggestion = searchedValue => {
    return {
        type: actions.SEARCH_SUGGESTION_ACTIVATED,
        payload: searchedValue
    }
}

export const disableSearchSuggestion = () => {
    return {
        type: actions.SEARCH_SUGGESTION_DISABLED
    }
}

export const onNavBarSearchClickAction = searchedValue => {
    return {
        type: actions.SEARCH_ITEM_BY_NAME,
        payload: searchedValue
    }
}

export const onStarSearchLickClickAction = starName => {
    return {
        type: actions.SEARCH_ITEM_BY_STAR,
        payload: starName
    }
}