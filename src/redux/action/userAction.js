export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL"

export const updateUserRequest = (data) => {
    return {
        type: UPDATE_USER_REQUEST,
        payload: data
    }
}

export const updateUserSuccess = (data) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: data
    }
}

export const updateUserFail = (error) => {
    return {
        type: UPDATE_USER_FAIL,
        payload: error
    }
} 