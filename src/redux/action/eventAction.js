export const GET_EVENT_REQUEST = "GET_EVENT_REQUEST";
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS";
export const GET_EVENT_FAIL = "GET_EVENT_FAIL";

export const GET_DETAIL_EVENT_REQUEST = "GET_DETAIL_EVENT_REQUEST";
export const GET_DETAIL_EVENT_SUCCESS = "GET_DETAIL_EVENT_SUCCESS";
export const GET_DETAIL_EVENT_FAIL = "GET_DETAIL_EVENT_FAIL";

export const getEventRequest = () => {
    return { 
        type: GET_EVENT_REQUEST
    }
}

export const getEventSuccess = (eventData) => {
    return {
        type: GET_EVENT_SUCCESS,
        payload: eventData
    }
}

export const getEventFail = (error) => {
    return {
        type: GET_EVENT_FAIL,
        payload: error
    }
}

export const getDetailEventRequest = (slug) => {
    return {
        type: GET_DETAIL_EVENT_REQUEST,
        payload: slug
    }
}

export const getDetailEventSuccess = (event) => {
    return {
        type: GET_DETAIL_EVENT_SUCCESS,
        payload: event
    }
}

export const getDetailEventFail = (error) => {
    return {
        type: GET_DETAIL_EVENT_FAIL,
        payload: error
    }
}