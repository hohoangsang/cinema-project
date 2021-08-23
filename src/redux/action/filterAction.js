export const FILTER_MOVIES = "FILTER_MOVIES";

export const filterMovies = (status) => {
    return {
        type: FILTER_MOVIES,
        payload: status
    }
}