import {
    FILTER_MOVIES
} from '../action/filterAction'

const initialState = {
    status: "showing",
}

const filterReducer = (state=initialState, action) => {
    switch (action.type) {
        case FILTER_MOVIES: {
            return {
                ...state,
                status: action.payload
            }
        }

        default: 
            return state
    }
}

export default filterReducer