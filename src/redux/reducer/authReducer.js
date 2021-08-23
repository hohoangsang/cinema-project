import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOG_OUT_REQUEST
} from '../action/authAction';

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null,
    isLogIn: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                errror: null,
                isLoading: true
            }
        }

        case LOG_IN_SUCCESS: {
            return {
                ...state,
                error: null,
                isLoading: false,
                currentUser: action.payload,
                isLogIn: true
            }
        }

        case LOG_IN_FAIL: {
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                isLogIn: false
            }
        }

        case REGISTER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }

        case REGISTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: null,
                currentUser: action.payload
            }
        }

        case REGISTER_FAIL: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }

        case LOG_OUT_REQUEST: {
            return {
                ...state,
                currentUser: null,
                isLogIn: false
            }
        }

        default: {
            return state;
        }
    }
}

export default authReducer;