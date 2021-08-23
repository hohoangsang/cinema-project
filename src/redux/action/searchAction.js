export const SEARCH_MOVIE_REQUEST = "SEARCH_MOVIE_REQUEST";
export const SEARCH_MOVIE_SUCCESS = "SEARCH_MOVIE_SUCCESS";
export const SEARCH_MOVIE_FAIL = "SEARCH_MOVIE_FAIL";

export const searchMovieRequest = (search) => {
    return {
        type: SEARCH_MOVIE_REQUEST,
        payload: search
    }
}

export const searchMovieSuccess = (search) => {
    return {
        type: SEARCH_MOVIE_SUCCESS,
        payload: search
    }
}

export const searchMovieFail = (error) => {
    return {
        type: SEARCH_MOVIE_FAIL,
        payload: error
    }
}