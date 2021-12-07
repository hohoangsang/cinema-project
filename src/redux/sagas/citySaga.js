import { call, delay, put, takeLatest } from 'redux-saga/effects'
import cityApi from '../../apis/cityApi';
import { fetchAllCityFail, fetchAllCitySuccess, FETCH_ALL_CITY_REQUEST } from '../action/cityAction'
import {
    showLoading,
    hideLoading
} from '../action/loadingAction'

function* fetchAllCity() {
    try {
        yield put(showLoading());
        const { getAll } = cityApi;
        const {data} = yield call(getAll);
        yield put(fetchAllCitySuccess(data));

        yield delay(800);
        yield put(hideLoading());
    } catch (error) {
        console.log("fetch city list fail", error);
        yield put(fetchAllCityFail(error))
    }
}

function* citySaga() {
    yield takeLatest(FETCH_ALL_CITY_REQUEST, fetchAllCity)
}

export default citySaga