import { FETCH_USERS_SUCCESS, SET_FILTER } from "../action/userManagementAction";

const initialState = {
    userList: [],
    filter: {
        _page: 1,
        _limit: 10
    },
    total: null
}

const userManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS: {
            return {
                ...state,
                userList: action.payload.list,
                total: action.payload.total
            }
        }

        case SET_FILTER: {
            return { 
                ...state,
                filter: action.payload
            }
        }

        default: 
            return state
    }
}

export default userManagementReducer;