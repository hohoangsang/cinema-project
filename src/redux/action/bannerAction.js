export const GET_BANNER_REQUEST = "GET_BANNER_REQUEST";
export const GET_BANNER_SUCCESS = "GET_BANNER_SUCCESS";
export const GET_BANNER_FAIL = "GET_BANNER_FAIL";

export const getBannerRequest = () => {
    return { 
        type: GET_BANNER_REQUEST
    }
}

export const getBannerSuccess = (bannerData) => {
    return {
        type: GET_BANNER_SUCCESS,
        payload: bannerData
    }
}

export const getBannerFail = (error) => {
    return {
        type: GET_BANNER_FAIL,
        payload: error
    }
}