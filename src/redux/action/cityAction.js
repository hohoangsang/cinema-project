export const FETCH_ALL_CITY_REQUEST = "FETCH_ALL_CITY_REQUEST";
export const FETCH_ALL_CITY_SUCCESS = "FETCH_ALL_CITY_SUCCESS";
export const FETCH_ALL_CITY_FAIL = "FETCH_ALL_CITY_FAIL";

export const fetchAllCityRequest = () => {
    return {
        type: FETCH_ALL_CITY_REQUEST
    }
}

export const fetchAllCitySuccess = (list) => {
    return {
        type: FETCH_ALL_CITY_SUCCESS,
        payload: list
    }
}

export const fetchAllCityFail = (error) => {
    return {
        type: FETCH_ALL_CITY_FAIL,
        payload: error
    }
}