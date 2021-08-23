export const GET_FILTER_MOVIES_REQUEST = "GET_FILTER_MOVIES_REQUEST";
export const GET_FILTER_MOVIES_SUCCESS = "GET_FILTER_MOVIES_SUCCESS";
export const GET_FILTER_MOVIES_FAIL = "GET_FILTER_MOVIES_FAIL";

export const GET_ONE_MOVIES_REQUEST = "GET_ONE_MOVIES_REQUEST";
export const GET_ONE_MOVIES_SUCCESS = "GET_ONE_MOVIES_SUCCESS"
export const GET_ONE_MOVIES_FAIL = "GET_ONE_MOVIES_FAIL"
 
export const getFilterMoviesRequest = () => {
    return {
        type: GET_FILTER_MOVIES_REQUEST
    }
}

export const getFilterMoviesSuccess = (showingData) => {
    return {
        type: GET_FILTER_MOVIES_SUCCESS,
        payload: showingData
    }
}

export const getFilterMoviesFail = (error) => {
    return {
        type: GET_FILTER_MOVIES_FAIL,
        payload: error
    }
}

export const getOneMoviesRequest = (slug) => {
    return {
        type: GET_ONE_MOVIES_REQUEST,
        payload: slug
    }
}

export const getOneMoviesSuccess = (movie) => {
    return {
        type: GET_ONE_MOVIES_SUCCESS,
        payload: movie
    }
}

export const getOneMoviesFail = (error) => {
    return {
        type: GET_ONE_MOVIES_FAIL,
        payload: error
    }
}
