import {
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL
} from '../action/userAction'

const initialState = {
    currentUser: {},
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                currentUser: action.payload
            }
        }

        case UPDATE_USER_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: 
            return state
    }
}

export default userReducer