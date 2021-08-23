import {
    SEARCH_MOVIE_REQUEST,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL
} from '../action/searchAction'

const initialState = {
    search: '',
    result: [],
    error: null
}

const searchReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIE_REQUEST: {
            return {
                ...state,
                search: action.payload
            }
        }
        case SEARCH_MOVIE_SUCCESS: {
            return {
                ...state,
                result: action.payload
            }
        }
        case SEARCH_MOVIE_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: 
            return state
    }
}

export default searchReducer;