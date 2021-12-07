export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL'

export const SET_FILTER = 'SET_FILTER'
export const SET_FILTER_WITH_DEBOUNCE = "SET_FILTER_WITH_DEBOUNCE"

export const fetchUsersRequest = (filter) => {
    return {
        type: FETCH_USERS_REQUEST,
        payload: filter
    }
}

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data
    }
}

export const fetchUsersFail = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
}

export const setFilterWithDebounce = (filter) => {
    return {
        type: SET_FILTER_WITH_DEBOUNCE,
        payload: filter
    }
}