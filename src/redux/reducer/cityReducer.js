import { FETCH_ALL_CITY_FAIL, FETCH_ALL_CITY_SUCCESS } from "../action/cityAction";

const initialState = {
    cityList: [],
    error: null,
    cityMap: {},
    cityOptions: [],
}

const createCityMap = (cityList) => {
    return cityList.reduce((map, city) => {
        map[city.code] = city;
        return map
    }, {})
}

const createCityOptions = (cityList) => {
    return cityList.map(city => {
        return ({
            label: city.name, 
            value: city.code
        });
    })
}

const cityReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_CITY_SUCCESS: {
            return {
                ...state,
                cityList: action.payload,
                cityMap: createCityMap(action.payload),
                cityOptions: createCityOptions(action.payload)
            }
        }

        case FETCH_ALL_CITY_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: 
            return state
    }
}

export default cityReducer;