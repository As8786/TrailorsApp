import * as actions from '../Actions'


const PaginationReducer = (state = 1, action) => {
    switch (action.type) {
        case actions.SET_PAGINATION:
            return action.payload
        case actions.CLEAR_FILTER:
            return 1
        case actions.SET_FILTER:
            return 1
        default:
            return state
    }
}


export default PaginationReducer