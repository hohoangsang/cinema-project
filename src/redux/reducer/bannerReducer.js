import {
    GET_BANNER_REQUEST,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAIL
} from '../action/bannerAction'

const initialState = {
    banner: [],
    error: null,
}

const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER_REQUEST: {
            return {
                ...state,
                banner: [],
                error: null
            }
        }

        case GET_BANNER_SUCCESS: {
            return {
                ...state,
                banner: action.payload,
                error: null
            }
        }

        case GET_BANNER_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: 
            return state
    }
}

export default bannerReducer;