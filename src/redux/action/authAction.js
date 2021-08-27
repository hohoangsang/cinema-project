export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAIL = "LOG_IN_FAIL"

export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_FAIL = "REGISTER_FAIL"

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST"

export const WATCH_IS_LOGGED = "WATCH_IS_LOGGED"

export const logInRequest = (email, password) => {
    return {
        type: LOG_IN_REQUEST,
        payload: {
            email,
            password
        }
    }
}

export const logInSuccess = () => {
    return {
        type: LOG_IN_SUCCESS
    }
}

export const logInFail = (error) => {
    return {
        type: LOG_IN_FAIL,
        payload: error
    }
}

export const registerRequest = (userInfo) => {
    return {
        type: REGISTER_REQUEST,
        payload: userInfo  
    }
}

export const registerFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}

export const logOutRequest = () => {
    return {
        type: LOG_OUT_REQUEST
    }
}

export const watchIsLogged = (token) => {
    return {
        type: WATCH_IS_LOGGED,
        payload: token
    }
}