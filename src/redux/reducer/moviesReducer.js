import {
    GET_FILTER_MOVIES_REQUEST,
    GET_FILTER_MOVIES_SUCCESS,
    GET_FILTER_MOVIES_FAIL,

    GET_ONE_MOVIES_REQUEST,
    GET_ONE_MOVIES_SUCCESS,
    GET_ONE_MOVIES_FAIL
} from '../action/moviesAction'

const initialState = {
    filterData: [],
    error: null,
    slug: '',
    oneMovie: []
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_FILTER_MOVIES_REQUEST: {
            return {
                ...state,
                filterData: [],
                error: null
            }
        }

        case GET_FILTER_MOVIES_SUCCESS: {
            return {
                ...state,
                filterData: action.payload,
                error: null
            }
        }

        case GET_FILTER_MOVIES_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        case GET_ONE_MOVIES_REQUEST: {
            return {
                ...state,
                slug: action.payload
            }
        }

        case GET_ONE_MOVIES_SUCCESS: {
            return {
                ...state,
                oneMovie: action.payload
            }
        }
        
        case GET_ONE_MOVIES_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: 
            return state
    }
} 

export default moviesReducer;